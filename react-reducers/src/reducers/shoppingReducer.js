import { TYPES } from '../actions/shoppingActions';

export const shoppingInitialState = {
  products: [
    {
      id: 1,
      name: 'Producto 1',
      price: 100,
    },
    {
      id: 2,
      name: 'Producto 2',
      price: 200,
    },
    {
      id: 3,
      name: 'Producto 3',
      price: 300,
    },
    {
      id: 4,
      name: 'Producto 4',
      price: 400,
    },
    {
      id: 5,
      name: 'Producto 5',
      price: 500,
    },
  ],
  cart: [],
};

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      console.log(state);
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );
      return { ...state, cart: [...state.cart, newItem] };
    }
    case TYPES.REMOVE_ONE_FROM_CART:
      {
      }
      break;
    case TYPES.REMOVE_ALL_FROM_CART:
      {
      }
      break;
    case TYPES.CLEAR_CART:
      {
      }
      break;
    default:
      return state;
  }
}
