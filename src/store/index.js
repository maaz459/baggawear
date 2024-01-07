import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../reduxReducers/auth';

const store = configureStore({ reducer: userReducer });

export default store;
