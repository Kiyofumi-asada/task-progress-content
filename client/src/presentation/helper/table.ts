import { THeaderData, TRequestData, TTaskListArray } from '../../types/table';

// header
export const headerData: THeaderData = [
  { key: 'user', label: '担当者' },
  { key: 'projectName', label: '案件名' },
  { key: 'workContents', label: '作業内容' },
  { key: 'personDay', label: '人日' },
  { key: 'requester', label: '依頼者' },
  { key: 'progress', label: '進捗' },
  { key: 'note', label: '備考' },
  { key: 'delete', label: '削除' },
  { key: 'save', label: '保存' },
];

// body
export const initialCreateNewUser: TRequestData = {
  userName: '',
  task: {
    selectedOptionId: -1,
    workContents: '',
    manDay: 0,
    requester: '',
    progress: 0,
    note: '',
  },
};

export const initialCreateNewRow: TRequestData = {
  userId: 1,
  userName: '',
  task: {
    selectedOptionId: -1,
    workContents: '',
    manDay: 0,
    requester: '',
    progress: 0,
    note: '',
  },
};

//TODO:開発完了後削除
export const taskListMock: TTaskListArray = [
  {
    id: 1, //unique
    userName: 'hoge',
    task: [
      {
        taskId: 1,
        projects: [
          { id: 0, label: '値1' },
          { id: 1, label: '値2' },
          { id: 2, label: '値3' },
        ],
        selectedOptionId: -1, //初期値 -1
        workContents: '#issueを作業', //null許可
        manDay: 2,
        progress: 0.99, //serverからの数値 * 100
        requester: 'test', //null許可
        note: '途中まで対応',
        delete: false, //null or Date??
      },
      {
        taskId: 2,
        projects: [
          { id: 0, label: '値1' },
          { id: 1, label: '値2' },
          { id: 2, label: '値3' },
        ],
        selectedOptionId: 1,
        workContents: '#issueを作業', //null許可
        manDay: 2,
        progress: 0.1, //serverからの数値 * 100
        requester: 'test', //null許可
        note: '途中まで対応',
        delete: false, //null or Date??
      },
      {
        taskId: 3,
        projects: [
          { id: 0, label: '値1' },
          { id: 1, label: '値2' },
          { id: 2, label: '値3' },
        ],
        selectedOptionId: 1,
        workContents: '#issueを作業', //null許可
        manDay: 2,
        progress: 1, //serverからの数値 * 100
        requester: 'test', //null許可
        note: '途中まで対応',
        delete: false, //null or Date??
      },
      {
        taskId: 4,
        projects: [
          { id: 0, label: '値1' },
          { id: 1, label: '値2' },
          { id: 2, label: '値3' },
        ],
        selectedOptionId: 1,
        workContents: '#issueを作業', //null許可
        manDay: 2,
        progress: 0.99, //serverからの数値 * 100
        requester: 'test', //null許可
        note: '途中まで対応',
        delete: false, //null or Date??
      },
    ],
  },
  {
    id: 2, //unique
    userName: 'huga',
    task: [
      {
        taskId: 1,
        projects: [
          { id: 0, label: '値1' },
          { id: 1, label: '値2' },
          { id: 2, label: '値3' },
        ],
        selectedOptionId: 1,
        workContents: '#issueを作業', //null許可
        manDay: 2,
        progress: 0.99, //serverからの数値 * 100
        requester: 'test', //null許可
        note: '途中まで対応',
        delete: false, //null or Date??
      },
    ],
  },
];

//TODO:serverで保存・取得できるようにする
export const options = [
  { id: 0, label: '値1' },
  { id: 1, label: '値2' },
  { id: 2, label: '値3' },
];
