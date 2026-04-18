import { RoleEntity, UserEntity } from '@arcani/data-access-db-entities';
import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { mapLevelToPermissions } from './utils/permission-mapper';

/**
 * SERVICIO DE IDENTIDAD ARCANI
 * Orquestador de la sincronización entre el Token de Google (Firebase)
 * y la persistencia física en el nodo MySQL.
 */

@Injectable()
export class AuthService {

   private readonly logger = new Logger(AuthService.name);

  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
    @InjectRepository(RoleEntity)
    private readonly roleRepo: Repository<RoleEntity>,
  ) {}

  /**
   * Sintoniza y sincroniza la identidad del explorador.
   */
  async syncUserWithFirebase(fbUser: any): Promise<any> {
    try {
      // 1. RASTREO: Buscamos al usuario con su árbol de jerarquía (Rol -> Nivel)
      let user = await this.userRepo.findOne({
        where: { firebaseUid: fbUser.uid },
        relations: ['role', 'role.level'],
      });

      // 2. CREACIÓN: Si es nuevo, buscamos el rol vinculado al nivel 'CUSTOMER'
      if (!user) {
        this.logger.log(`[AUTH] Sintonizando nuevo explorador: ${fbUser.email}`);

        // Buscamos dinámicamente el rol que pertenezca al nivel inmutable CUSTOMER
        const defaultRole = await this.roleRepo.findOne({
          where: {
            level: { name: 'CUSTOMER' }
          },
          relations: ['level']
        });

        if (!defaultRole) {
          this.logger.error('[CRÍTICO] No se encontró un Rol asociado al nivel CUSTOMER.');
          throw new Error('Falla de Configuración: Nivel CUSTOMER no inicializado en la DB.');
        }

        user = this.userRepo.create({
          firebaseUid: fbUser.uid,
          email: fbUser.email,
          name: fbUser.name || fbUser.displayName || 'Explorador',
          photoURL: fbUser.picture || fbUser.photoURL || null,
          idRole: defaultRole.id,
          isActive: true,
        });

        // Guardamos para generar el ID y UUID en el Oráculo
        user = await this.userRepo.save(user);

        // Recargamos para asegurar que el objeto tenga las relaciones frescas tras el save
        user = await this.userRepo.findOne({
          where: { id: user.id },
          relations: ['role', 'role.level']
        });
      } else {
        // 3. ACTUALIZACIÓN: Refrescamos ADN visual si hubo cambios en Google
        user.name = fbUser.name || fbUser.displayName || user.name;
        user.photoURL = fbUser.picture || fbUser.photoURL || user.photoURL;
        user = await this.userRepo.save(user);
      }

      // --- GUARDIA DE INTEGRIDAD (Solución TS Error) ---
      // Verificamos que user y sus relaciones existan antes de mapear permisos
      if (!user || !user.role || !user.role.level) {
        throw new Error('Falla de Integridad: Relación de Rol/Nivel incompleta.');
      }

      // 4. MAPEO DE PODER: Transformamos el nivel técnico en etiquetas ofuscadas para el portal
      const permissions = mapLevelToPermissions(user.role.level.name);

      // 5. RESPUESTA BLINDADA: Retornamos solo los campos necesarios con ofuscación
      return {
        uuid: user.getUuid,       // ID Público (UUID en string)
        email: user.email,
        name: user.name,
        photoURL: user.photoURL,
        roleName: user.role.name, // "Cliente", "Director", etc.
        permissions: permissions  // Ej: ["arcani_stream_v1", ...]
      };

    } catch (error:any) {
      this.logger.error(`[CRÍTICO] Fallo de sincronización: ${error.message}`);
      throw new InternalServerErrorException('El Oráculo no pudo validar tu frecuencia de identidad.');
    }
  }
}
