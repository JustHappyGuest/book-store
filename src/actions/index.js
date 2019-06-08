import {
  DECREASE_BOOK_IN_CART,
  FETCH_BOOKS_FAILURE,
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  INCREASE_BOOK_IN_CART,
  REMOVE_BOOK_FROM_CART,
} from '../action-types';


export const increaseBookInCart = id => ({type: INCREASE_BOOK_IN_CART, payload: {id}});
export const decreaseBookInCart = id => ({type: DECREASE_BOOK_IN_CART, payload: {id}});
export const removeBookFromCart = id => ({type: REMOVE_BOOK_FROM_CART, payload: {id}});

const fetchBooksSuccess = (books) => ({type: FETCH_BOOKS_SUCCESS, payload: {books}});
const fetchBooksRequest = () => ({type: FETCH_BOOKS_REQUEST});
const fetchBooksFailure = (error) => ({type: FETCH_BOOKS_FAILURE, payload: {error}});

export const fetchBooks = ({getBooks})=>(dispatch) => () => {
  dispatch(fetchBooksRequest());
  getBooks()
    .then(books => {
      dispatch(fetchBooksSuccess(books));
    })
    .catch(error => dispatch(fetchBooksFailure(error)));
}
