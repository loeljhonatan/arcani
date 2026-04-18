// libs/shared/domain/src/lib/interfaces/auth/role-level.interface.ts
export type RoleLevelName = 'STRATEGIC' | 'TACTICAL' | 'OPERATIVE' | 'CUSTOMER';

export interface RoleLevel {
  name: RoleLevelName;
  description?: string;
}
