// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { apiService } from "./api";
import userReducer from "./user/user.slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    [apiService.reducerPath]: apiService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiService.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
