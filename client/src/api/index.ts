import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { taskListMock } from '../presentation/helper/table';

const path = 'task';

const data = taskListMock;

// GET
export const fetchTaskList = createAsyncThunk('task/fetchTaskList', async () => {
  // TODO:Mockから値を返す
  // const { status, data } = await axios.get<any[]>(path);
  return data;
});

// POST
export const postTaskData = createAsyncThunk('task/postChatData', async (body: any) => {
  const { status, data } = await axios.post<any[]>(path, body);
  return { status, data };
});
// PUT
export const putTaskData = createAsyncThunk('task/putChatData', async (body: any) => {
  const { status, data } = await axios.put<any[]>(path, body);
  return { status, data };
});
// DELETE
export const deleteTaskData = createAsyncThunk('task/deleteChatData', async (id: any) => {
  const deletePath = `${path}/${id}`;
  console.log(deletePath);
  const { status, data } = await axios.delete<any[]>(deletePath);
  return { status, data };
});
