import { Expose } from 'class-transformer';

export class ThemingResponseDto {
  @Expose()
  slug!: string;

  @Expose()
  portal = 'ARCANI_DYNAMICS';

  @Expose()
  timestamp: string = new Date().toISOString();

  // El Interceptor inyectará esto, así que también debemos exponerlo
  @Expose()
  _theme?: any;

  constructor(partial: Partial<ThemingResponseDto>) {
    Object.assign(this, partial);
  }
}
