import { errorHandler, prisma } from '.';
import { User } from '@prisma/client';

//POST
const create = async (data: User): Promise<User> => {
  const createUser = await prisma.user.create({ data });
  return createUser;
};

//PUT
const edit = async (data: User): Promise<void> => {
  const { id } = data;
  await prisma.task.update({
    where: {
      id: id,
    },
    data: {
      updatedAt: new Date(),
    },
  });
};

//DELETE
const logicalDelete = async (taskId: number): Promise<void> => {
  await prisma.task.update({
    where: {
      id: taskId,
    },
    data: {
      isDelete: true,
    },
  });
};

export const userModels = {
  create: (data: User): Promise<User> => errorHandler(create(data)),
  edit: (data: User): Promise<void> => errorHandler(edit(data)),
  logicalDelete: (taskId: number): Promise<void> =>
    errorHandler(logicalDelete(taskId)),
};
