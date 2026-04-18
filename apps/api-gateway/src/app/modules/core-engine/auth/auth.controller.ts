import { Controller, Get, UseGuards, Request  } from '@nestjs/common';
import { FirebaseAuthGuard } from '../../../common/guards/firebase-auth.guard';

@Controller('auth')
export class AuthController {

  /**
   * SINCRO-CHECK:
   * El Frontend llama aquí después del login de Firebase.
   * Devuelve el usuario de MySQL con su ROL y NIVEL actual.
   */
  @UseGuards(FirebaseAuthGuard)
  @Get('session')
  async getSession(@Request() req:any) {
    // req.user viene cargado desde la FirebaseStrategy con:
    // relations: ['role', 'role.level']
    return req.user;
  }
}

