import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-http-bearer';
import * as admin from 'firebase-admin';
import { AuthService } from '../auth.service';

@Injectable()
export class FirebaseStrategy extends PassportStrategy(Strategy, 'firebase') {
  private readonly logger = new Logger(FirebaseStrategy.name);

  constructor(private authService: AuthService) {
    // No requiere configuración adicional para Bearer Token
    super();
  }

  /**
   * Este método es el corazón de la validación.
   * Se ejecuta automáticamente cada vez que una ruta protegida recibe un Token.
   */
  async validate(token: string) {
    try {
      // 1. Verificación en el Núcleo de Firebase (Google)
      const decodedToken = await admin.auth().verifyIdToken(token);

      // 2. Sincronización con el Oráculo (MySQL)
      // Pasamos el token decodificado que contiene el UID, email, name, etc.
      const user = await this.authService.syncUserWithFirebase(decodedToken);

      // 3. El objeto retornado aquí se inyectará en 'req.user'
      return user;

    } catch (error:any) {
      this.logger.error(`[AUTH] Intento de acceso fallido: ${error.message}`);
      throw new UnauthorizedException('Falla de Identidad: Acceso denegado al portal.');
    }
  }
}
