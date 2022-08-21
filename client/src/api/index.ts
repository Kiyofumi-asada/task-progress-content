import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const taskApiPath = 'task';
const userApiPath = 'user';

//Task API
//GET
export const fetchTaskList = createAsyncThunk('task/fetchTaskList', async () => {
  const { data } = await axios.get<any[]>(taskApiPath);
  return { data: data };
});

//POST
export const postTaskData = createAsyncThunk('task/postTaskData', async (body: any) => {
  console.log('api call post task', body);
  const { status, data } = await axios.post<any[]>(taskApiPath, body);
  return { status, data };
});

//PUT
export const putTaskData = createAsyncThunk('task/putTaskData', async (body: any) => {
  console.log('api call put', body);
  const { status, data } = await axios.put<any[]>(taskApiPath, body);
  return { status, data };
});

//DELETE
export const deleteTaskData = createAsyncThunk('task/deleteTaskData', async (taskId: any) => {
  const deletePath = `${taskApiPath}?taskId=${taskId}`;
  const { status, data } = await axios.delete<any[]>(deletePath);
  return { status, data };
});

//User API
//POST
export const postUserData = createAsyncThunk('user/postUserData', async (body: any) => {
  console.log('api call post user', body);
  const { status, data } = await axios.post<any[]>(userApiPath, body);
  return { status, data };
});
