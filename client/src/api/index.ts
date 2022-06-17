import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { TChatData } from '../types/chat';

const path = 'chat';

// GET
export const fetchGetChatList = createAsyncThunk('chat/getChatList', async () => {
  const { status, data } = await axios.get<TChatData[]>(path);
  return { status, data };
});

// POST
export const postChatData = createAsyncThunk('chat/postChatData', async (body: any) => {
  const { status, data } = await axios.post<TChatData[]>(path, body);
  return { status, data };
});
// PUT
export const putChatData = createAsyncThunk('chat/putChatData', async (body: any) => {
  const { status, data } = await axios.put<TChatData[]>(path, body);
  return { status, data };
});
// DELETE
export const deleteChatData = createAsyncThunk('chat/deleteChatData', async (id: any) => {
  const deletePath = `${path}/${id}`;
  console.log(deletePath);
  const { status, data } = await axios.delete<TChatData[]>(deletePath);
  return { status, data };
});
