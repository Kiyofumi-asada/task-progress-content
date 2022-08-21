/* eslint-disable max-lines-per-function */
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { TInitialState } from '../types';
import { fetchTaskList, postTaskData, putTaskData, deleteTaskData, postUserData } from '../api';

const initialState: TInitialState = {
  taskList: [],
};

// CreateSlice
const taskSlice = createSlice({
  name: 'task',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get
    builder.addCase(fetchTaskList.fulfilled, (state, action) => {
      return {
        ...state,
        taskList: action.payload.data,
      };
    });
    builder.addCase(fetchTaskList.rejected, (state) => {
      return {
        ...state,
        taskList: initialState.taskList,
      };
    });
    //post
    //task
    builder.addCase(postTaskData.fulfilled, (state, action) => {
      return {
        ...state,
        taskList: action.payload.data,
      };
    });
    builder.addCase(postTaskData.rejected, (state) => {
      return {
        ...state,
        taskList: initialState.taskList,
      };
    });
    //user
    builder.addCase(postUserData.fulfilled, (state, action) => {
      return {
        ...state,
        taskList: action.payload.data,
      };
    });
    builder.addCase(postUserData.rejected, (state) => {
      return {
        ...state,
        taskList: initialState.taskList,
      };
    });
    //put
    builder.addCase(putTaskData.fulfilled, (state, action) => {
      return {
        ...state,
        taskList: action.payload.data,
      };
    });
    builder.addCase(putTaskData.rejected, (state) => {
      return {
        ...state,
        taskList: initialState.taskList,
      };
    });
    //delete
    builder.addCase(deleteTaskData.fulfilled, (state, action) => {
      return {
        ...state,
        taskList: action.payload.data,
      };
    });
    builder.addCase(deleteTaskData.rejected, (state) => {
      return {
        ...state,
        taskList: initialState.taskList,
      };
    });
  },
});

export default taskSlice.reducer;

// Selector
export const selectTaskList = (state: RootState) => state.task.taskList;
