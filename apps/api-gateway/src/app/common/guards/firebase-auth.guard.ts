import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { IS_PUBLIC_KEY } from '../decorators/public.decorator';

@Injectable()
export class FirebaseAuthGuard extends AuthGuard('firebase') {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext) {
    // 1. Verificamos si la ruta o el controlador tienen el decorador @Public()
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    // 2. Si es pública, permitimos el acceso sin validar token
    if (isPublic) {
      return true;
    }

    // 3. Si NO es pública, ejecutamos la validación de Firebase (Bearer Token)
    return super.canActivate(context);
  }
}
