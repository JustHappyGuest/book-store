import { connect } from "react-redux";
import ShopingCartTable from "../components/shoping-cart-table";

import {
  decreaseBookInCart,
  increaseBookInCart,
  removeBookFromCart
} from "../actions";


const mapStateToProps = state => {
  const {
    shopingCart: { cartItems, orderTotal }
  } = state;
  return {
    items: cartItems,
    total: orderTotal
  };
};
const mapDispatchToProps = dispatch => ({
  onIncrease: id => dispatch(increaseBookInCart(id)),
  onDecrease: id => dispatch(decreaseBookInCart(id)),
  onRemove: id => dispatch(removeBookFromCart(id))
});

const ShopingCartTableContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopingCartTable);

export default ShopingCartTableContainer;
