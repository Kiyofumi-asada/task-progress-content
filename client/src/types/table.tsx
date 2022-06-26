import { headerData } from '../presentation/helper/table';

// header
export type THeaderData = typeof headerData;
export type TPartialHeaderData = Partial<THeaderData>;

// body
export type TInitialState = {
  taskList: TTaskListArray;
};

export type TProgressData = {
  dataId: number;
  options: { id: number; label: string }[];
  selectedOptionId: number;
  workContents?: string; //TODO:null許可
  manDay?: number; //TODO:null許可
  requester?: string; //TODO:null許可
  progress: number;
  note?: string; //TODO:null許可
  delete?: boolean; //TODO:null or Date??
};

export type TTaskList = {
  userId: number;
  userName: string;
  progressData?: TProgressData[] | [];
};
export type TPartialTaskList = Partial<TTaskList>;
export type TTaskListArray = Array<TTaskList>;

export type TRequestData = {
  userId: number;
  userName: string;
  progressData: {
    dataId?: number; // dataIdをつける場合はupdate,つけない場合はcreate
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
