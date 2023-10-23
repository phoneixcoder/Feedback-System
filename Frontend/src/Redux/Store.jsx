import { configureStore } from '@reduxjs/toolkit'
import authReducer from './Features/Auth/AuthSlice'
export const Store = configureStore({
  reducer: {
    auth: authReducer
  }
})