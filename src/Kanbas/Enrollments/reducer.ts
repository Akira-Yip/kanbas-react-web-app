// src/Kanbas/Enrollments/reducer.ts
import { createSlice } from '@reduxjs/toolkit';
import * as db from '../Database';

const initialState = JSON.parse(localStorage.getItem('enrollments') || 'null') || db.enrollments;

const enrollmentsSlice = createSlice({
  name: 'enrollments',
  initialState,
  reducers: {
    enrollCourse: (state, action) => {
      state.push({
        _id: new Date().getTime().toString(),
        user: action.payload.userId,
        course: action.payload.courseId,
      });
    },
    unenrollCourse: (state, action) => {
      return state.filter(
        (enrollment: any) =>
          !(
            enrollment.user === action.payload.userId &&
            enrollment.course === action.payload.courseId
          )
      );
    },
  },
});

export const { enrollCourse, unenrollCourse } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
