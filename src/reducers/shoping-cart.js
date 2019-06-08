import {
  DECREASE_BOOK_IN_CART,
  INCREASE_BOOK_IN_CART,
  REMOVE_BOOK_FROM_CART
} from "../action-types";

const updateCart = (state, payload, quantity) => {
  const { id } = payload;
  const { books } = state.booksStore;
  const { cartItems } = state.shopingCart;
  let { orderTotal } = state.shopingCart;

  const cartItemId = cartItems.findIndex(item => item.id === id);
  const newItem = { ...cartItems[cartItemId] };

  const isNewItem = !(cartItemId + 1);

  if (isNewItem) return updateCartItem(state, payload);

  newItem.count += quantity;
  newItem.total = books[cartItemId].price * newItem.count;

  orderTotal += quantity * books[cartItemId].price;

  return updateCartItem(
    {
      booksStore: { ...state.booksStore },
      shopingCart: { ...state.shopingCart, orderTotal }
    },
    payload,
    newItem,
    cartItemId
  );
};
const updateCartItem = (state, payload, newItem, id) => {
  const { booksStore, shopingCart } = state;

  const { books } = booksStore;
  const { cartItems, orderTotal } = shopingCart;

  if (newItem === undefined) {
    newItem = {
      id: payload.id,
      title: books[payload.id].title,
      count: 1,
      total: books[payload.id].price
    };

    return {
      orderTotal: orderTotal + books[payload.id].price,
      cartItems: [...cartItems, newItem]
    };
  }

  if (newItem.count <= 0)
    return {
      ...shopingCart,
      cartItems: [...cartItems.slice(0, id), ...cartItems.slice(id + 1)]
    };

  return {
    ...shopingCart,
    cartItems: [...cartItems.slice(0, id), newItem, ...cartItems.slice(id + 1)]
  };
};

const shopingCart = (state, { type, payload }) => {
  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0
    };
  }

  switch (type) {
    case INCREASE_BOOK_IN_CART:
      return updateCart(state, payload, 1);
    case DECREASE_BOOK_IN_CART:
      return updateCart(state, payload, -1);
    case REMOVE_BOOK_FROM_CART:
      const cartItem = state.shopingCart.cartItems.find(
        item => item.id === payload.id
      );
      return updateCart(state, payload, -cartItem.count);
    default:
      return state.shopingCart;
  }
};

export default shopingCart;
