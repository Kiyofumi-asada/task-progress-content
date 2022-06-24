import { headerData } from '../presentation/helper/table';

// header
export type THeaderData = typeof headerData;
export type TPartialHeaderData = Partial<THeaderData>;

// body
export type TTaskList = {
  userId: number;
  userName: string;
  progressData?: TProgressData[];
};

export type TProgressData = {
  dataId: number;
  options: { id: number; label: string }[];
  selectedOptionId: number;
  workContents?: string; //TODO:null許可
  manDay?: number; //TODO:null許可
  progress: number;
  requester?: string; //TODO:null許可
  note?: string; //TODO:null許可
  delete?: boolean; //TODO:null or Date??
};

export type TTaskListArray = Array<TTaskList>;

export type TInitialState = {
  taskList: TTaskListArray;
};
