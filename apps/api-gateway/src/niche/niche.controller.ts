import { Controller, Get } from "@nestjs/common";
import { NicheService } from "./niche.service";
import { ApiOperation } from '@nestjs/swagger';

@Controller('niche')
export class NicheController {
  constructor(private readonly nicheService: NicheService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener ADN de nichos para sintonía reactiva' })
  async getAll() {
    return await this.nicheService.findAllForSintonia();
  }
}
