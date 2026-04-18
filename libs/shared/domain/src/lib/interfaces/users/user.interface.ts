// libs/shared/domain/src/lib/interfaces/user.interface.ts

import { Role } from "../core/role.interface";

export interface UserIdentity {
  uuid: string;
  email: string;
  name: string;
  photoURL?: string;
  isActive: boolean;
  role: Role; // Relación limpia
  createdAt: Date;
}
