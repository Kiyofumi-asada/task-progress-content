// header
export type THeaderData = { key: string; label: string }[];

// body
export type TInitialState = {
  taskList: TTaskListArray;
};

export type TTask = {
  id: number;
  projects: { id: number; label: string }[];
  selectedOptionId: number;
  workContents: string;
  manDay: number | string;
  requester: string;
  progress: number | string;
  note: string;
  isDelete?: boolean;
};
export type TPartialTask = Partial<TTask>;

export type TTaskList = {
  id: number;
  userName: string;
  task?: TTask[] | [];
};
export type TPartialTaskList = Partial<TTaskList>;
export type TTaskListArray = Array<TTaskList>;

export type TRequestData = {
  id?: number;
  userName: string;
  task: {
    id?: number;
    selectedOptionId: number;
    workContents: string;
    manDay: number;
    requester: string;
    progress: number;
    note: string;
  };
};

//GET User type
export type TGetUser = Omit<TTask, 'projects' | 'isDelete'>;
