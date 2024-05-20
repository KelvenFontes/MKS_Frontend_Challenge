// Define as ações
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

interface CartState {
  items: {
    id: number;
    name: string;
    price: string;
    quantity: number;
    photo: string;
  }[];
}


const initialState = {
  items: []
};

const cartReducer = (state: CartState = initialState, action: any): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const { id, name, price, photo, quantity } = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.id === id);

      if (existingItemIndex !== -1) {
        const updatedItems = [...state.items];

        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + quantity
        };
        return { ...state, items: updatedItems };
      } else {

        return { ...state, items: [...state.items, { id, name, price, photo, quantity }] };
      }

    case REMOVE_FROM_CART:
      const itemId = action.payload.id;
      const itemToRemove = state.items.find(item => item.id === itemId);

      if (itemToRemove) {
        if (itemToRemove.quantity > 1) {
          return {
            ...state,
            items: state.items.map(item =>
              item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
            )
          };
        } else {
          return {
            ...state,
            items: state.items.filter(item => item.id !== itemId)
          };
        }
      }
      return state;


    default:
      return state;
  }
};

export const addToCart = (item: { id: number; name: string; price: string; photo: string, quantity: number }) => ({
  type: 'ADD_TO_CART',
  payload: item
});

export const removeFromCart = (id: number) => ({
  type: 'REMOVE_FROM_CART',
  payload: { id }
});

export default cartReducer;
