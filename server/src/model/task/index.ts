import { Task } from '@prisma/client';
import { errorHandler, prisma } from '..';

//GET
const read = async (): Promise<Task[]> => {
  console.log('model-----');
  return await prisma.task.findMany({});
};
//POST
const create = async (data: Task): Promise<void> => {
  console.log('model-----', data);
  await prisma.task.create({ data });
};
//PUT
const edit = async (data: Task): Promise<void> => {
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
const logicalDelete = async (detailId: number): Promise<void> => {
  await prisma.task.update({
    where: {
      id: detailId,
    },
    data: {
      updatedAt: new Date(),
      isDelete: true,
    },
  });
};

export const taskModels = {
  read: (): Promise<Task[]> => errorHandler(read()),
  create: (data: Task): Promise<void> => errorHandler(create(data)),
  edit: (data: Task): Promise<void> => errorHandler(edit(data)),
  logicalDelete: (data: number): Promise<void> =>
    errorHandler(logicalDelete(data)),
};
