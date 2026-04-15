import { ValueTransformer } from 'typeorm';

export class UUIDBinaryTransformer implements ValueTransformer {

  // Cuando NestJS LEE de la DB: Binary -> String
  from(value: Buffer | null): string | null {
    if (!value) return null;
    return value.toString('hex').replace(/^(.{8})(.{4})(.{4})(.{4})(.{12})$/, '$1-$2-$3-$4-$5');
  }

  // Cuando NestJS ESCRIBE en la DB: String -> Binary
  to(value: string | null): Buffer | null {
    if (!value) return null;

    // Limpiamos los guiones para quedarnos con el hex puro
    const cleaned = value.replace(/-/g, '');

    // Validación rápida: Un UUID hex debe tener exactamente 32 caracteres
    if (cleaned.length !== 32) {
      // Esto evita que MySQL intente guardar basura o datos truncados
      return null;
    }

    return Buffer.from(cleaned, 'hex');
  }
}
