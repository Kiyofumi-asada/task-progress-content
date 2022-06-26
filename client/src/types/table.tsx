// header
export type THeaderData = { key: string; label: string }[];

// body
export type TInitialState = {
  taskList: TTaskListArray;
};

export type TProgressData = {
  dataId: number;
  options: { id: number; label: string }[];
  selectedOptionId: number;
  workContents?: string;
  manDay?: number;
  requester?: string;
  progress: number;
  note?: string;
  delete?: boolean;
};

export type TTaskList = {
  userId: number;
  userName: string;
  progressData?: TProgressData[] | [];
};
export type TPartialTaskList = Partial<TTaskList>;
export type TTaskListArray = Array<TTaskList>;

export type TRequestData = {
  userId?: number;
  userName: string;
  progressData: {
    dataId?: number; //NOTE: dataIdを付ける場合はupdate,付けない場合はcreate
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
