import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "./reducer/navigationSlice"; 

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
  },
});

// TypeScript Setup
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
