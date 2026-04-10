import {
  Controller,
  Get,

  Query,
} from '@nestjs/common';
import { SintonizadorService } from './sintonizador.service';


@Controller('sintonia')
export class SintonizadorController {
  constructor(private readonly sintonizadorService: SintonizadorService) {}

 /*  @Post()
  create(@Body() createSintonizadorDto: CreateSintonizadorDto) {
    return this.sintonizadorService.create(createSintonizadorDto);
  }

  @Get()
  findAll() {
    return this.sintonizadorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sintonizadorService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSintonizadorDto: UpdateSintonizadorDto,
  ) {
    return this.sintonizadorService.update(+id, updateSintonizadorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sintonizadorService.remove(+id);
  }
 */

  @Get('resolver') // La URL final será http://localhost:3000/api/sintonia/resolver
  async getSintonia(
  @Query('slug') slug: string,
  @Query('stock') stock: string // Viene como string desde la URL
  ) {
    // Conversión explícita para evitar que el Service falle al comparar (stock < 25)
    const stockNum = parseInt(stock, 10) || 100;

    // Llama al servicio y espera la respuesta
    return await this.sintonizadorService.resolverSintonia(slug, stockNum);
  }



}
