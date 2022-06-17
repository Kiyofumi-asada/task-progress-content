export type TChatData = {
  id: number;
  userId: number;
  userIcon?: null | string;
  userName: string;
  message: string;
  created_at: string;
  updated_at: string;
  isDelete: boolean;
};

export type ChatState = {
  isLoading: boolean;
  status?: number;
  chatList: Array<TChatData>;
};
