import booksStore from './books-store';
import shopingCart from './shoping-cart';

const reducer = (state, payload) => {
  return {
    booksStore: booksStore(state, payload),
    shopingCart: shopingCart(state, payload)
  };
};

export default reducer;
