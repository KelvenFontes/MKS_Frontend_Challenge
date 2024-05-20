// src/types/CartState.ts
export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  photo: string;
}

export interface CartState {
  items: CartItem[];
}
