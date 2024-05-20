import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/types/RootState';

const selectCartItems = (state: RootState) => state.cart.items;

export const selectCartTotal = createSelector([selectCartItems], (items) =>
  items.reduce((total, item) => total + item.price * item.quantity, 0)
);
