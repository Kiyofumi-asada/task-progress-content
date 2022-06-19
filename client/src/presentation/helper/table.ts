import { TTaskArray } from '../../types/table';

// header
export const headerData = [
  { key: 'member', label: '担当者' },
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
export const taskListMock: TTaskArray = [
  {
    userId: 1, //unique
    userName: '浅田',
    data: [
      {
        dataId: 1,
        projectName: [
          { id: 1, project: '日経' },
          { id: 2, project: 'Knux' },
          { id: 3, project: '安心お届けナビ' },
          { id: 4, project: 'Qualtrics log' },
          { id: 5, project: 'エコファニ' },
        ],
        workContents: '#issueを作業', //null許可
        progress: 0.5, //serverからの数値 * 100
        note: '途中まで対応',
        delete: false, //null or Date??
      },
      {
        dataId: 2,
        projectName: [
          { id: 1, project: '日経' },
          { id: 2, project: 'Knux' },
          { id: 3, project: '安心お届けナビ' },
          { id: 4, project: 'Qualtrics log' },
          { id: 5, project: 'エコファニ' },
        ],
        workContents: '#issueを作業', //null許可
        progress: 0.5 * 100, //serverからの数値 * 100
        note: '途中まで対応',
        delete: false, //null or Date??
      },
      {
        dataId: 3,
        projectName: [
          { id: 1, project: '日経' },
          { id: 2, project: 'Knux' },
          { id: 3, project: '安心お届けナビ' },
          { id: 4, project: 'Qualtrics log' },
          { id: 5, project: 'エコファニ' },
        ],
        workContents: '#issueを作業', //null許可
        progress: 0.5, //serverからの数値 * 100
        note: '途中まで対応',
        delete: false, //null or Date??
      },
    ],
  },
  {
    userId: 112,
    userName: '吉田',
    data: [
      {
        dataId: 1,
        projectName: [
          { id: 1, project: '日経' },
          { id: 2, project: 'Knux' },
          { id: 3, project: '安心お届けナビ' },
          { id: 4, project: 'Qualtrics log' },
          { id: 5, project: 'エコファニ' },
        ],
        workContents: '#issueを作業', //null許可
        progress: 0.5, //serverからの数値 * 100
        note: '途中まで対応',
        delete: false, //null or Date??
      },
      {
        dataId: 2,
        projectName: [
          { id: 1, project: '日経' },
          { id: 2, project: 'Knux' },
          { id: 3, project: '安心お届けナビ' },
          { id: 4, project: 'Qualtrics log' },
          { id: 5, project: 'エコファニ' },
        ],
        workContents: '#issueを作業', //null許可
        progress: 0.5, //serverからの数値 * 100
        note: '途中まで対応',
        delete: false, //null or Date??
      },
      {
        dataId: 3,
        projectName: [
          { id: 1, project: '日経' },
          { id: 2, project: 'Knux' },
          { id: 3, project: '安心お届けナビ' },
          { id: 4, project: 'Qualtrics log' },
          { id: 5, project: 'エコファニ' },
        ],
        workContents: '#issueを作業', //null許可
        progress: 0.5, //serverからの数値 * 100
        note: '途中まで対応',
        delete: false, //null or Date??
      },
    ],
  },
  {
    userId: 113,
    userName: '三上',
    data: [
      {
        dataId: 1,
        projectName: [
          { id: 1, project: '日経' },
          { id: 2, project: 'Knux' },
          { id: 3, project: '安心お届けナビ' },
          { id: 4, project: 'Qualtrics log' },
          { id: 5, project: 'エコファニ' },
        ],
        workContents: '#issueを作業', //null許可
        progress: 0.5, //serverからの数値 * 100
        note: '途中まで対応',
        delete: false, //null or Date??
      },
      {
        dataId: 2,
        projectName: [
          { id: 1, project: '日経' },
          { id: 2, project: 'Knux' },
          { id: 3, project: '安心お届けナビ' },
          { id: 4, project: 'Qualtrics log' },
          { id: 5, project: 'エコファニ' },
        ],
        workContents: '#issueを作業', //null許可
        progress: 0.5, //serverからの数値 * 100
        note: '途中まで対応',
        delete: false, //null or Date??
      },
      {
        dataId: 3,
        projectName: [
          { id: 1, project: '日経' },
          { id: 2, project: 'Knux' },
          { id: 3, project: '安心お届けナビ' },
          { id: 4, project: 'Qualtrics log' },
          { id: 5, project: 'エコファニ' },
        ],
        workContents: '#issueを作業', //null許可
        progress: 0.5, //serverからの数値 * 100
        note: '途中まで対応',
        delete: false, //null or Date??
      },
    ],
  },
];
