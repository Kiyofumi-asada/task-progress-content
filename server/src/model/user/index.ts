import { User } from '@prisma/client';
import { errorHandler, prisma } from '..';

//GET
const read = async (): Promise<User[]> => {
  return await prisma.user.findMany({});
};
//POST
const create = async (data: User): Promise<void> => {
  await prisma.user.create({ data });
};
//PUT
const edit = async (data: User): Promise<void> => {
  const { id } = data;
  await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      // updated_at: new Date(),
    },
  });
};
//DELETE
const logicalDelete = async (detailId: number): Promise<void> => {
  await prisma.user.update({
    where: {
      id: detailId,
    },
    data: {
      updatedAt: new Date(),
      isDelete: true,
    },
  });
};

export const prismaChat = {
  read: (): Promise<any[]> => errorHandler(read()),
  create: (data: any): Promise<void> => errorHandler(create(data)),
  edit: (data: any): Promise<void> => errorHandler(edit(data)),
  logicalDelete: (data: number): Promise<void> =>
    errorHandler(logicalDelete(data)),
};
