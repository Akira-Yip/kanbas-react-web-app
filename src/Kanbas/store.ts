// // import { configureStore } from "@reduxjs/toolkit";
// import modulesReducer from "./Courses/Modules/reducer";
// import accountReducer from "./Account/reducer";
// import assignmentsReducer from "./Courses/Assignments/reducer"; // Adjust the path if necessary
// import enrollmentsReducer from './Enrollments/reducer'

// // const store = configureStore({
// //   reducer: {
// //     modulesReducer,
// //     accountReducer,
// //     assignmentsReducer
// //   },
// // });
// // export default store;
// // src/Kanbas/store/index.ts
// import { configureStore } from '@reduxjs/toolkit';

// const store = configureStore({
//   reducer: {
//     modulesReducer,
//     accountReducer,
//     assignmentsReducer,
//     enrollmentsReducer,
//   },
// });

// export default store;
// src/Kanbas/store.ts
import { configureStore } from '@reduxjs/toolkit';
import modulesReducer from './Courses/Modules/reducer';
import accountReducer from './Account/reducer';
import assignmentsReducer from './Courses/Assignments/reducer';
import enrollmentsReducer from './Enrollments/reducer';

const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    assignmentsReducer,
    enrollmentsReducer,
  },
});

export default store;
