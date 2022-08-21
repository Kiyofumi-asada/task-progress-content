import { errorHandler, prisma } from '..';
import { Task } from '@prisma/client';
import { TGetUser } from '@/types';

//GET
const read = async (): Promise<TGetUser[]> => {
  const userData = await prisma.user.findMany({
    include: {
      task: true,
    },
  });
  const projects = await prisma.projects.findMany({});
  const res = await userData.map((data) => {
    const { task, id, userName, isDelete } = data;
    const mergeTaskAndProjects = task.map((task) => {
      return { ...task, projects };
    });
    return {
      id: id,
      userName: userName,
      isDelete: isDelete,
      task: mergeTaskAndProjects,
    };
  });
  return res;
};

//POST
const create = async (data: Task): Promise<void> => {
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
  read: (): Promise<TGetUser[]> => errorHandler(read()),
  create: (data: Task): Promise<void> => errorHandler(create(data)),
  edit: (data: Task): Promise<void> => errorHandler(edit(data)),
  logicalDelete: (data: number): Promise<void> =>
    errorHandler(logicalDelete(data)),
};
