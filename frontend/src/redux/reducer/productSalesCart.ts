// store/slices/cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PoductSalesCartItem {
  pm_id: string;
  productName: string;
  quantity: number;
  unit: string;
  remarks: string;
  price: number;
  totalPrice: number;
}

interface CartState {
  items: PoductSalesCartItem[];
}

const initialState: CartState = {
  items: [],
};

const salesCartSlice = createSlice({
  name: "salesCart",
  initialState,
  reducers: {
    salesAddToCart(state, action: PayloadAction<PoductSalesCartItem>) {
      state.items.push(action.payload);
    },
    salesRemoveFromCart: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.pm_id !== id);
    },
  },
});

export const { salesAddToCart, salesRemoveFromCart } =
  salesCartSlice.actions;
export default salesCartSlice.reducer;
