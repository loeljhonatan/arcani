import { PartialType } from '@nestjs/mapped-types';
import { CreateSintonizadorDto } from './create-sintonizador.dto';

export class UpdateSintonizadorDto extends PartialType(CreateSintonizadorDto) {}
