// header
export type THeaderData = { key: string; label: string }[];

// body
export type TInitialState = {
  taskList: TTaskListArray;
};

export type TTask = {
  taskId: number;
  projects: { id: number; label: string }[];
  selectedOptionId: number;
  workContents: string;
  manDay: number | string;
  requester: string;
  progress: number | string;
  note: string;
  delete: boolean;
};

export type TTaskList = {
  id: number;
  userName: string;
  task?: TTask[] | [];
};
export type TPartialTaskList = Partial<TTaskList>;
export type TTaskListArray = Array<TTaskList>;

export type TRequestData = {
  userId?: number;
  userName: string;
  task: {
    taskId?: number; //NOTE: dataIdを付ける場合はupdate,付けない場合はcreate
    selectedOptionId: number;
    workContents: string;
    manDay: number;
    requester: string;
    progress: number;
    note: string;
  };
};
export type TDeleteRequestData = {
  userId: number;
  dataId: number;
};
