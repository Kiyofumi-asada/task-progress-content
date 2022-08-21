import { THeaderData, TRequestData } from '../../types';

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
  id: 1,
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
