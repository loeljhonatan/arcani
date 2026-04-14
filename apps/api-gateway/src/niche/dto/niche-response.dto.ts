export class NicheResponseDto {
  uuid!: string;
  slug!: string;
  name!: string;
  color_primary!: string;
  color_accent!: string;
  color_light!: string;
  color_dark!: string;
  current_sku_count!: number; // Viene de la tabla de sincronización
  bazar_threshold!: number;
  custom_config!: any;
}
