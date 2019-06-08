import {
  FETCH_BOOKS_FAILURE,
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS
} from "../action-types";

const booksStore = (state, { type, payload }) => {
  if (state === undefined)
    return {
      books: [],
      loading: true,
      error: null
    };

  switch (type) {
    case FETCH_BOOKS_REQUEST:
      return {
        books: [],
        loading: true,
        error: null
      };
    case FETCH_BOOKS_SUCCESS:
      const { books } = payload;
      return {
        books: books,
        loading: false,
        error: null
      };
    case FETCH_BOOKS_FAILURE:
      const { error } = payload;
      return {
        books: [],
        loading: false,
        error: error
      };
    default:
      return state.booksStore;
  }
};

export default booksStore;
