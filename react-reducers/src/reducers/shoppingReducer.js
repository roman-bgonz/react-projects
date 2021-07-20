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

      // Si un elemento del carrito de compras coincide con lo que nos mandó el usuario entonces se almacena
      let itemInCart = state.cart.find((item) => item.id === newItem.id);

      // Si el item en el carrito ya existe o y no es nula
      return itemInCart
        ? // El elemento en el carrito en su propiedad quantity se le suma 1
          {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : // De lo contrario se duplica el estado como se tenia, y en la propiedad cart como nuevo elemento se agrega el item y quantity en 1
          { ...state, cart: [...state.cart, { ...newItem, quantity: 1 }] };
    }
    case TYPES.REMOVE_ONE_FROM_CART: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);

      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }
    case TYPES.REMOVE_ALL_FROM_CART:
      // eslint-disable-next-line no-lone-blocks
      {
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload),
        };
      }
      break;
    case TYPES.CLEAR_CART:
      return shoppingInitialState;
    default:
      return state;
  }
}
