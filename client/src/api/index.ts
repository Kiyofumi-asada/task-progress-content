import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const path = 'task';

//get
export const fetchTaskList = createAsyncThunk('task/fetchTaskList', async () => {
  const { data } = await axios.get<any[]>(path);
  return { data: data };
});
//post
//task
export const postTaskData = createAsyncThunk('task/postTaskData', async (body: any) => {
  console.log('api call post task', body);
  const { status, data } = await axios.post<any[]>(path, body);
  return { status, data };
});
//user
export const postUserData = createAsyncThunk('task/postUserData', async (body: any) => {
  console.log('api call post user', body);
  const { status, data } = await axios.post<any[]>(path, body);
  return { status, data };
});
//put
export const putTaskData = createAsyncThunk('task/putTaskData', async (body: any) => {
  console.log('api call put', body);
  const { status, data } = await axios.put<any[]>(path, body);
  return { status, data };
});
//delete
export const deleteTaskData = createAsyncThunk('task/deleteTaskData', async (params: any) => {
  const { userId, dataId } = params;
  const deletePath = `${path}?userId=${userId}&dataId=${dataId}`;
  console.log('api call delete', deletePath);
  const { status, data } = await axios.delete<any[]>(deletePath);
  return { status, data };
});
