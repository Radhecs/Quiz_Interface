//redux/store.js

import { combineReducers, configureStore } from "@reduxjs/toolkit";

/** call reducers */
import questionReducer from "./question_reducer.jsx";
import resultReducer from "./result_reducer.jsx";

const rootReducer = combineReducers({
  questions: questionReducer,
  result: resultReducer,
});

/** create store with reducer */
export default configureStore({ reducer: rootReducer });
