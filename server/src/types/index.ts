import { User } from '@prisma/client';

type OmitOptional = 'createdAt' | 'updatedAt';
//GET User type
export type TGetUser = Omit<User, OmitOptional>;
