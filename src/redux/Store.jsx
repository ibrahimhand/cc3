import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserSlice";
import todoreducer from "./TodoSlice";

const reducer = combineReducers({
  user: UserReducer,
  todo: todoreducer,
});

const store = configureStore({ reducer });

export default store;
