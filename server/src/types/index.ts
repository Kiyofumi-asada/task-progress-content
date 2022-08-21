import { User } from '@prisma/client';

//GET User type
export type TGetUser = Omit<User, 'createdAt' | 'updatedAt'>;
