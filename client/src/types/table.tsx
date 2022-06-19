import { headerData } from '../presentation/helper/table';

// header
export type THeaderData = typeof headerData;
export type TPartialHeaderData = Partial<THeaderData>;

// body
export type TTask = {
  userId: number;
  userName: string;
  data?: {
    dataId: number;
    projectName: { id: number; project: string }[];
    workContents?: string; //TODO:null許可
    progress: number;
    note?: string; //TODO:null許可
    delete: false; //TODO:null or Date??
  }[];
};

export type TTaskArray = TTask[];

export type TInitialState = {
  taskList: [];
};
