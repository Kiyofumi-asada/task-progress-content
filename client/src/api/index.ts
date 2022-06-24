import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { taskListMock } from '../presentation/helper/table';

const path = 'task';

// GET
export const fetchTaskList = createAsyncThunk('task/fetchTaskList', async () => {
  // TODO:apiがつながったら修正mockから値を返す
  // const { status, data } = await axios.get<any[]>(path);
  return { data: taskListMock };
});

// POST
export const postTaskData = createAsyncThunk('task/postTaskData', async (body: any) => {
  console.log('api call post', body);
  // const { status, data } = await axios.post<any[]>(path, body);
  // return { status, data };
});
// PUT
export const putTaskData = createAsyncThunk('task/putTaskData', async (body: any) => {
  const { status, data } = await axios.put<any[]>(path, body);
  return { status, data };
});
// DELETE
export const deleteTaskData = createAsyncThunk('task/deleteTaskData', async (id: any) => {
  const deletePath = `${path}/${id}`;
  const { status, data } = await axios.delete<any[]>(deletePath);
  return { status, data };
});
