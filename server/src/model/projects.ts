import { errorHandler, prisma } from '.';
import { Projects } from '@prisma/client';
import { TGetUser } from '@/types';

//GET
const read = async (): Promise<Projects[]> => {
  return await prisma.projects.findMany({});
};

//POST
const create = async (userId: number): Promise<void> => {
  await prisma.task.create({
    data: {
      selectedOptionId: -1,
      workContents: '',
      requester: '',
      progress: 0,
      note: '',
      userId: userId,
    },
  });
};

//PUT
const edit = async (data: any): Promise<void> => {
  const { task } = data;
  await prisma.task.update({
    where: {
      id: task.id,
    },
    data: task,
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

export const projectsModels = {
  read: (): Promise<Projects[]> => errorHandler(read()),
  create: (data: number): Promise<void> => errorHandler(create(data)),
  edit: (data: Projects): Promise<void> => errorHandler(edit(data)),
  logicalDelete: (taskId: number): Promise<void> =>
    errorHandler(logicalDelete(taskId)),
};
