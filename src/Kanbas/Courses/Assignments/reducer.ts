// src/Kanbas/Courses/Assignments/reducer.ts

import { createSlice } from '@reduxjs/toolkit';
import * as db from '../../Database';

const initialState = JSON.parse(localStorage.getItem('assignments') || 'null') || db.assignments;

const assignmentsSlice = createSlice({
  name: 'assignments',
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      state.push({
        ...action.payload,
        _id: new Date().getTime().toString(),
      });
    },
    updateAssignment: (state, action) => {
      const index = state.findIndex((assignment: any) => assignment._id === action.payload._id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteAssignment: (state, action) => {
      return state.filter((assignment: any) => assignment._id !== action.payload._id);
    },
  },
});

export const { addAssignment, updateAssignment, deleteAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
