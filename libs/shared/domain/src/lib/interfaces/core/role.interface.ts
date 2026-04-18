// libs/shared/domain/src/lib/interfaces/auth/role.interface.ts
import { RoleLevel } from './role-level.interface';

export interface Role {
  name: string;
  description?: string;
  level: RoleLevel;
}
