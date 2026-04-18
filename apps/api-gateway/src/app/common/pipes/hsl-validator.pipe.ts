import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class HslValidatorPipe implements PipeTransform {
  transform(value: any) {
    const hslRegex = /^\d{1,3}\s\d{1,3}%\s\d{1,3}%$/;

    if (typeof value === 'string' && !hslRegex.test(value)) {
      throw new BadRequestException(
        `Falla de Portal: El color "${value}" no cumple el estándar HSL de ARCANI (H S% L%).`
      );
    }
    return value;
  }
}
