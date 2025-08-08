import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "./reducer/navigationSlice";
import authReducer from "./reducer/authSlice";
import purchaseCartReducer from "./reducer/productPurchaseCart";
import salesCartReducer from "./reducer/productSalesCart";

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    auth: authReducer,
    purchaseCart: purchaseCartReducer,
    salesCart: salesCartReducer,
  },
});

// TypeScript Setup
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
