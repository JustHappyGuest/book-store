import { BOOKS_LOADED } from "../action-types";


const initialState = {
    books: [],
    loading: true
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case BOOKS_LOADED:
            return {
                books: payload.books,
                loading: false
            };
        default:
            return state;
    }
}

export default reducer;