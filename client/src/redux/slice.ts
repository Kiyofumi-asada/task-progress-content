/* eslint-disable max-lines-per-function */
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { deleteChatData, postChatData, putChatData } from '../api';

const initialState: any = {
  isLoading: false,
  status: 200,
  chatList: [],
};

// CreateSlice
const chatSlice = createSlice({
  name: 'chat',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // // GET
    // builder.addCase(fetchGetChatList.fulfilled, (state, action) => {
    //   return {
    //     ...state,
    //     isLoading: false,
    //     status: action.payload.status,
    //     chatList: action.payload.data,
    //   };
    // });
    // builder.addCase(fetchGetChatList.rejected, (state) => {
    //   return {
    //     ...state,
    //     isLoading: false,
    //     chatList: initialState.chatList,
    //   };
    // });
    // POST
    builder.addCase(postChatData.fulfilled, (state, action) => {
      return {
        ...state,
        isLoading: false,
        status: action.payload.status,
        chatList: action.payload.data,
      };
    });
    builder.addCase(postChatData.rejected, (state) => {
      return {
        ...state,
        isLoading: false,
        chatList: initialState.chatList,
      };
    });
    // PUT
    builder.addCase(putChatData.fulfilled, (state, action) => {
      return {
        ...state,
        isLoading: false,
        status: action.payload.status,
        chatList: action.payload.data,
      };
    });
    builder.addCase(putChatData.rejected, (state) => {
      return {
        ...state,
        isLoading: false,
        chatList: initialState.chatList,
      };
    });
    // DELETE
    builder.addCase(deleteChatData.fulfilled, (state, action) => {
      return {
        ...state,
        isLoading: false,
        status: action.payload.status,
        chatList: action.payload.data,
      };
    });
    builder.addCase(deleteChatData.rejected, (state) => {
      return {
        ...state,
        isLoading: false,
        chatList: initialState.chatList,
      };
    });
  },
});

export default chatSlice.reducer;

// Selector
export const selectChatList = (state: RootState) => state.chat.chatList;
