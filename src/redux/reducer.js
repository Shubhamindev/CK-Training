import { INCREMENT, DECREMENT, ADD_TO_CART, REMOVE_FROM_CART, SEARCH } from './actions';

const initialState = {
  count: 0,
  cart: [],
  products: [
    { id: 1, name: 'Laptop', price: 999.99 },
    { id: 2, name: 'Headphones', price: 99.99 },
    { id: 3, name: 'Mouse', price: 29.99 },
  ],
  filteredProducts: [ 
    { id: 1, name: 'Laptop', price: 999.99 },
    { id: 2, name: 'Headphones', price: 99.99 },
    { id: 3, name: 'Mouse', price: 29.99 },
  ],
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        filteredProducts: action.payload === ''
          ? state.products  
          : state.products.filter(product =>
              product.name.toLowerCase().includes(action.payload.toLowerCase())
            ),
      };

    case ADD_TO_CART:
      return {
        ...state,
        cart: state.cart.some(item => item.id === action.payload.id)
          ? state.cart.map(item =>
              item.id === action.payload.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          : [...state.cart, { ...action.payload, quantity: 1 }],
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart
          .map(item =>
            item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
          )
          .filter(item => item.quantity > 0),
      };

    default:
      return state;
  }
};

export default counterReducer;
