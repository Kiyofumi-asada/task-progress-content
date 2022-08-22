import { errorHandler, prisma } from '.';
import { User } from '@prisma/client';

//GET
const read = async (): Promise<User[]> => {
  return await prisma.user.findMany({});
};

//POST
const create = async (data: User): Promise<User> => {
  const createUser = await prisma.user.create({ data });
  return createUser;
};

//PUT
const edit = async (data: User): Promise<void> => {
  const { id } = data;
  await prisma.user.update({
    where: {
      id: id,
    },
    data: data,
  });
};

//DELETE
const logicalDelete = async (userId: number): Promise<void> => {
  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      updatedAt: new Date(),
      isDelete: true,
    },
  });
};

export const userModels = {
  read: (): Promise<User[]> => errorHandler(read()),
  create: (data: User): Promise<User> => errorHandler(create(data)),
  edit: (data: User): Promise<void> => errorHandler(edit(data)),
  logicalDelete: (userId: number): Promise<void> =>
    errorHandler(logicalDelete(userId)),
};
