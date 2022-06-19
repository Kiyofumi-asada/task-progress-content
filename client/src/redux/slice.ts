/* eslint-disable max-lines-per-function */
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { TInitialState } from '../types/table';
import { fetchTaskList, postTaskData, putTaskData, deleteTaskData } from '../api';

const initialState: TInitialState = {
  taskList: [],
};

// CreateSlice
const taskSlice = createSlice({
  name: 'task',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // GET
    builder.addCase(fetchTaskList.fulfilled, (state, action) => {
      return {
        ...state,
        isLoading: false,
        chatList: action.payload,
      };
    });
    builder.addCase(fetchTaskList.rejected, (state) => {
      return {
        ...state,
        isLoading: false,
        chatList: initialState.taskList,
      };
    });
    // POST
    builder.addCase(postTaskData.fulfilled, (state, action) => {
      return {
        ...state,
        isLoading: false,
        status: action.payload.status,
        chatList: action.payload.data,
      };
    });
    builder.addCase(postTaskData.rejected, (state) => {
      return {
        ...state,
        isLoading: false,
        chatList: initialState.taskList,
      };
    });
    // PUT
    builder.addCase(putTaskData.fulfilled, (state, action) => {
      return {
        ...state,
        isLoading: false,
        status: action.payload.status,
        chatList: action.payload.data,
      };
    });
    builder.addCase(putTaskData.rejected, (state) => {
      return {
        ...state,
        isLoading: false,
        chatList: initialState.taskList,
      };
    });
    // DELETE
    builder.addCase(deleteTaskData.fulfilled, (state, action) => {
      return {
        ...state,
        isLoading: false,
        status: action.payload.status,
        chatList: action.payload.data,
      };
    });
    builder.addCase(deleteTaskData.rejected, (state) => {
      return {
        ...state,
        isLoading: false,
        chatList: initialState.taskList,
      };
    });
  },
});

export default taskSlice.reducer;

// Selector
export const selectTaskList = (state: RootState) => state.task.taskList;
