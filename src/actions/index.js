import { BOOKS_LOADED } from "../action-types";

export const booksLoaded = (books) => ({type: BOOKS_LOADED, payload: {books}});