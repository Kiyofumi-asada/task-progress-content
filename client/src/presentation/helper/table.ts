import { TRequestData, TTaskListArray } from '../../types/table';

// header
export const headerData = [
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
export const initialCreateNewRowData: TRequestData = {
  userId: 1,
  userName: '名前',
  progressData: {
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
    userId: 1, //unique
    userName: 'hoge',
    progressData: [
      {
        dataId: 1,
        options: [
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
        dataId: 2,
        options: [
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
        dataId: 3,
        options: [
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
        dataId: 4,
        options: [
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
    userId: 2, //unique
    userName: 'huga',
    progressData: [
      {
        dataId: 1,
        options: [
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
    userId: 3, //unique
    userName: 'piyo',
    progressData: [],
  },
];
