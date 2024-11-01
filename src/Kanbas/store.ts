import { configureStore } from '@reduxjs/toolkit';
import modulesReducer from './Courses/Modules/reducer';
import accountReducer from './Account/reducer';
import enrollmentsReducer from './Enrollments/reducer';
import assignmentsReducer from './Courses/Assignments/reducer'; // Import the assignments reducer

const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    enrollmentsReducer,
    assignmentsReducer, // Include the assignments reducer
  },
});

export default store;

