// // src/Kanbas/Courses/Assignments/reducer.ts

// import { createSlice } from "@reduxjs/toolkit";
// import { assignments } from "../../Database"; // Adjust the path to your Database

// const initialState = {
//   assignments: assignments,
// };

// const assignmentsSlice = createSlice({
//   name: "assignments",
//   initialState,
//   reducers: {
//     addAssignment: (state, { payload: assignment }) => {
//       const newAssignment = {
//         _id: new Date().getTime().toString(),
//         ...assignment,
//       };
//       state.assignments = [...state.assignments, newAssignment];
//     },
//     deleteAssignment: (state, { payload: assignmentId }) => {
//       state.assignments = state.assignments.filter(
//         (a) => a._id !== assignmentId
//       );
//     },
//     updateAssignment: (state, { payload: assignment }) => {
//       state.assignments = state.assignments.map((a) =>
//         a._id === assignment._id ? assignment : a
//       );
//     },
//     editAssignment: (state, { payload: assignmentId }) => {
//       state.assignments = state.assignments.map((a) =>
//         a._id === assignmentId ? { ...a, editing: true } : a
//       );
//     },
//   },
// });

// export const {
//   addAssignment,
//   deleteAssignment,
//   updateAssignment,
//   editAssignment,
// } = assignmentsSlice.actions;

// export default assignmentsSlice.reducer;
// src/Kanbas/Courses/Assignments/reducer.ts

// // src/Kanbas/Courses/Assignments/reducer.ts
import { createSlice } from '@reduxjs/toolkit';
import * as db from '../../Database';

const assignmentsSlice = createSlice({
  name: 'assignments',
  initialState: db.assignments,
  reducers: {
    addAssignment: (state, action) => {
      state.push(action.payload);
    },
    deleteAssignment: (state, action) => {
      return state.filter(assignment => assignment._id !== action.payload);
    },
    updateAssignment: (state, action) => {
      const index = state.findIndex(assignment => assignment._id === action.payload._id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
