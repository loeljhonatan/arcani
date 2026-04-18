import { IsString, IsBoolean, IsOptional, Matches } from 'class-validator';

/**
 * Validación para la actualización de sintonía desde el Laboratorio
 */
export class UpdateThemeDto {
  // Valida el formato HSL estricto: "0-360 0-100% 0-100%"
  @Matches(/^\d{1,3}\s\d{1,3}%\s\d{1,3}%$/, {
    message: 'El Aura debe seguir el formato H S% L% (ej: "180 100% 50%")',
  })
  @IsString()
  colorPrimary!: string;

  @Matches(/^\d{1,3}\s\d{1,3}%\s\d{1,3}%$/, {
    message: 'El Destello debe seguir el formato H S% L% (ej: "56 100% 50%")',
  })
  @IsString()
  colorAccent!: string;

  @IsString()
  colorLight!: string;

  @IsString()
  colorDark!: string;

  @IsBoolean()
  @IsOptional()
  isBazar?: boolean;
}
