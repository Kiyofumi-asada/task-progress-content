import { errorHandler, prisma } from '.';
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
      const { workContents, manDay, progress, requester, note } = task;
      return task.isDelete
        ? null
        : {
            ...task,
            workContents: !workContents ? '' : workContents,
            manDay: !manDay ? 0 : manDay,
            requester: !requester ? '' : requester,
            progress: !progress ? 0 : progress,
            note: !note ? '' : note,
            projects: projects,
          };
    });
    //taskがない場合デフォルトデータを作成
    const hasNotTask = !mergeTaskAndProjects.filter((v) => v).length;
    if (hasNotTask) taskModels.create(id);

    return {
      id: id,
      userName: userName,
      isDelete: isDelete,
      task: mergeTaskAndProjects.filter((v) => v),
    };
  });

  console.log();
  return res;
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

export const taskModels = {
  read: (): Promise<TGetUser[]> => errorHandler(read()),
  create: (data: number): Promise<void> => errorHandler(create(data)),
  edit: (data: Task): Promise<void> => errorHandler(edit(data)),
  logicalDelete: (taskId: number): Promise<void> =>
    errorHandler(logicalDelete(taskId)),
};
