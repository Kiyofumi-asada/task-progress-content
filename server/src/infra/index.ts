import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

export const errorHandler = <T>(v: Promise<T>): Promise<T> => {
  return v.catch((err) => {
    return err;
  });
};
