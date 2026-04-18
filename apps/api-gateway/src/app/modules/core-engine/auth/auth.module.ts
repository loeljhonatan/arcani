import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleEntity, RoleLevelEntity, UserEntity } from '@arcani/data-access-db-entities';
import { PassportModule } from '@nestjs/passport';
import { FirebaseStrategy } from './strategies/firebase.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, RoleEntity,RoleLevelEntity ]), // 👈 Añadimos RoleEntity aquí
    PassportModule.register({ defaultStrategy: 'firebase' }),
  ],
  controllers: [AuthController],
  providers: [AuthService,FirebaseStrategy],
  exports: [AuthService,PassportModule],
})
export class AuthModule {}
