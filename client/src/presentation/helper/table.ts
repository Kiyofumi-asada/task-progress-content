import { TTaskArray } from '../../types/table';

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
export const taskListMock: TTaskArray = [
  {
    userId: 1, //unique
    userName: '吉田',
    progressData: [
      {
        dataId: 1,
        project: [
          { id: 1, project: '日経' },
          { id: 2, project: 'Knux' },
          { id: 3, project: '安心お届けナビ' },
          { id: 4, project: 'Qualtrics log' },
          { id: 5, project: 'エコファニ' },
        ],
        selectedProjectId: 0, //projectの中に持たせても良い
        workContents: '#issueを作業', //null許可
        manDay: 2,
        progress: 0.99, //serverからの数値 * 100
        requester: 'test', //null許可
        note: '途中まで対応',
        delete: false, //null or Date??
      },
      {
        dataId: 2,
        project: [
          { id: 1, project: '日経' },
          { id: 2, project: 'Knux' },
          { id: 3, project: '安心お届けナビ' },
          { id: 4, project: 'Qualtrics log' },
          { id: 5, project: 'エコファニ' },
        ],
        selectedProjectId: 0, //projectの中に持たせても良い
        workContents: '#issueを作業', //null許可
        manDay: 2,
        progress: 0.1, //serverからの数値 * 100
        requester: 'test', //null許可
        note: '途中まで対応',
        delete: false, //null or Date??
      },
      {
        dataId: 3,
        project: [
          { id: 1, project: '日経' },
          { id: 2, project: 'Knux' },
          { id: 3, project: '安心お届けナビ' },
          { id: 4, project: 'Qualtrics log' },
          { id: 5, project: 'エコファニ' },
        ],
        selectedProjectId: 0, //projectの中に持たせても良い
        workContents: '#issueを作業', //null許可
        manDay: 2,
        progress: 1, //serverからの数値 * 100
        requester: 'test', //null許可
        note: '途中まで対応',
        delete: false, //null or Date??
      },
      {
        dataId: 4,
        project: [
          { id: 1, project: '日経' },
          { id: 2, project: 'Knux' },
          { id: 3, project: '安心お届けナビ' },
          { id: 4, project: 'Qualtrics log' },
          { id: 5, project: 'エコファニ' },
        ],
        selectedProjectId: 0, //projectの中に持たせても良い
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
    userName: '三上',
    progressData: [
      {
        dataId: 1,
        project: [
          { id: 1, project: '日経' },
          { id: 2, project: 'Knux' },
          { id: 3, project: '安心お届けナビ' },
          { id: 4, project: 'Qualtrics log' },
          { id: 5, project: 'エコファニ' },
        ],
        selectedProjectId: 0, //projectの中に持たせても良い
        workContents: '#issueを作業', //null許可
        manDay: 2,
        progress: 0.99, //serverからの数値 * 100
        requester: 'test', //null許可
        note: '途中まで対応',
        delete: false, //null or Date??
      },
      {
        dataId: 2,
        project: [
          { id: 1, project: '日経' },
          { id: 2, project: 'Knux' },
          { id: 3, project: '安心お届けナビ' },
          { id: 4, project: 'Qualtrics log' },
          { id: 5, project: 'エコファニ' },
        ],
        selectedProjectId: 0, //projectの中に持たせても良い
        workContents: '#issueを作業', //null許可
        manDay: 2,
        progress: 0.1, //serverからの数値 * 100
        requester: 'test', //null許可
        note: '途中まで対応',
        delete: false, //null or Date??
      },
      {
        dataId: 3,
        project: [
          { id: 1, project: '日経' },
          { id: 2, project: 'Knux' },
          { id: 3, project: '安心お届けナビ' },
          { id: 4, project: 'Qualtrics log' },
          { id: 5, project: 'エコファニ' },
        ],
        selectedProjectId: 0, //projectの中に持たせても良い
        workContents: '#issueを作業', //null許可
        manDay: 2,
        progress: 1, //serverからの数値 * 100
        requester: 'test', //null許可
        note: '途中まで対応',
        delete: false, //null or Date??
      },
      {
        dataId: 4,
        project: [
          { id: 1, project: '日経' },
          { id: 2, project: 'Knux' },
          { id: 3, project: '安心お届けナビ' },
          { id: 4, project: 'Qualtrics log' },
          { id: 5, project: 'エコファニ' },
        ],
        selectedProjectId: 0, //projectの中に持たせても良い
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
    userName: '浅田',
    progressData: [
      {
        dataId: 1,
        project: [
          { id: 1, project: '日経' },
          { id: 2, project: 'Knux' },
          { id: 3, project: '安心お届けナビ' },
          { id: 4, project: 'Qualtrics log' },
          { id: 5, project: 'エコファニ' },
        ],
        selectedProjectId: 0, //projectの中に持たせても良い
        workContents: '#issueを作業', //null許可
        manDay: 2,
        progress: 0.99, //serverからの数値 * 100
        requester: 'test', //null許可
        note: '途中まで対応',
        delete: false, //null or Date??
      },
      {
        dataId: 2,
        project: [
          { id: 1, project: '日経' },
          { id: 2, project: 'Knux' },
          { id: 3, project: '安心お届けナビ' },
          { id: 4, project: 'Qualtrics log' },
          { id: 5, project: 'エコファニ' },
        ],
        selectedProjectId: 0, //projectの中に持たせても良い
        workContents: '#issueを作業', //null許可
        manDay: 2,
        progress: 0.1, //serverからの数値 * 100
        requester: 'test', //null許可
        note: '途中まで対応',
        delete: false, //null or Date??
      },
      {
        dataId: 3,
        project: [
          { id: 1, project: '日経' },
          { id: 2, project: 'Knux' },
          { id: 3, project: '安心お届けナビ' },
          { id: 4, project: 'Qualtrics log' },
          { id: 5, project: 'エコファニ' },
        ],
        selectedProjectId: 0, //projectの中に持たせても良い
        workContents: '#issueを作業', //null許可
        manDay: 2,
        progress: 1, //serverからの数値 * 100
        requester: 'test', //null許可
        note: '途中まで対応',
        delete: false, //null or Date??
      },
      {
        dataId: 4,
        project: [
          { id: 1, project: '日経' },
          { id: 2, project: 'Knux' },
          { id: 3, project: '安心お届けナビ' },
          { id: 4, project: 'Qualtrics log' },
          { id: 5, project: 'エコファニ' },
        ],
        selectedProjectId: 0, //projectの中に持たせても良い
        workContents: '#issueを作業', //null許可
        manDay: 2,
        progress: 0.99, //serverからの数値 * 100
        requester: 'test', //null許可
        note: '途中まで対応',
        delete: true, //null or Date??
      },
    ],
  },
];
