import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { taskListMock } from '../presentation/helper/table';
import toast, { Toaster } from 'react-hot-toast';

const path = 'task';

// GET
export const fetchTaskList = createAsyncThunk('task/fetchTaskList', async () => {
  const data = taskListMock;
  //const { status, data } = await axios.get<any[]>(path);
  return { data: data };
});

// POST
export const postTaskData = createAsyncThunk('task/postTaskData', async (body: any) => {
  console.log('api call post', body);
  // toast.success('保存しました', {
  //   style: { fontSize: ' 0.8em' },
  // });
  // toast.error('保存に失敗しました', {
  //   style: { fontSize: ' 0.8em' },
  // });
  // const { status, data } = await axios.post<any[]>(path, body);
  // return { status, data };
});
// PUT

export const putTaskData = createAsyncThunk('task/putTaskData', async (body: any) => {
  console.log('api call put', body);

  toast.success('保存しました', {
    style: { fontSize: ' 0.8em' },
  });
  // toast.error('保存に失敗しました', {
  //   style: { fontSize: ' 0.8em' },
  // });
  // const { status, data } = await axios.put<any[]>(path, body);
  // return { status, data };
});
// DELETE
export const deleteTaskData = createAsyncThunk('task/deleteTaskData', async (params: any) => {
  const { userId, dataId } = params;
  const deletePath = `${path}/${userId}/${dataId}`;
  console.log('api call delete', deletePath);
  toast.success('削除しました', {
    style: { fontSize: ' 0.8em' },
  });
  // const { status, data } = await axios.delete<any[]>(deletePath);
  // return { status, data };
});
