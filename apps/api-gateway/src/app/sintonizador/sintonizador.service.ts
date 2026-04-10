import { Injectable } from '@nestjs/common';

import { ConfiguracionVisual } from '@arcani/shared-domain';
import { InjectRepository } from '@nestjs/typeorm';
import { SintonizadorEntity } from '../entities/sintonizador.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SintonizadorService {

  /*  create(createSintonizadorDto: CreateSintonizadorDto) {
    return 'This action adds a new sintonizador';
  }

  findAll() {
    return `This action returns all sintonizador`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sintonizador`;
  }

  update(id: number, updateSintonizadorDto: UpdateSintonizadorDto) {
    return `This action updates a #${id} sintonizador`;
  }

  remove(id: number) {
    return `This action removes a #${id} sintonizador`;
  }
 */


  constructor(
    @InjectRepository(SintonizadorEntity)
    private readonly repo: Repository<SintonizadorEntity>,
  ) {}

 async resolverSintonia(slug: string, stock: number): Promise<ConfiguracionVisual> {
  try {
    // 1. Lógica del Bazar (Stock bajo)
    if (stock < 25) {
      return this.getBazarTheme();
    }

    // 2. Búsqueda segura
    // Asegúrate de que el slug no sea null/undefined antes de buscar
    if (!slug) {
      return this.getBazarTheme();
    }

    const config = await this.repo.findOne({
      where: { slug: slug.toLowerCase() }
    });

    // 3. Validación de existencia
    if (!config) {
      console.error('RESULTADO: No se encontró en MySQL. Aplicando BAZAR.');
      console.warn(`Sintonía no encontrada para slug: ${slug}. Aplicando tema Bazar.`);
      return this.getBazarTheme();
    }


    // Mapeamos manualmente para cumplir con la interfaz ConfiguracionVisual
     return {
    // Usamos el operador ?? para dar un valor por defecto si es undefined
      id: config.id ?? 'uuid-fallback',
      aura: config.aura!,
      destello: config.destello!,
      fondo: config.fondo!,
      radius: config.radius!,
      blur: config.blur!,
      trama_preset: config.trama_preset!
    };


  } catch (error) {
    // Captura errores de base de datos (columnas inexistentes, etc.)
    console.error('Error en resolverSintonia:', error);
    return this.getBazarTheme(); // Fallback seguro para evitar el 500
  }
}


  private getBazarTheme(): ConfiguracionVisual {
    return {
      id: 'bazar-id',
      aura: '#00F0FF', // Base Arcani
      destello: '#FFF000',
      fondo: '#050505',
      radius: 4,
      blur: 25,
      trama_preset: 'nebulosa'
    };
  }




}


