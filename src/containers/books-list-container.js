import { compose } from 'redux';
import { connect } from "react-redux";
import React, { Component } from "react";

import { fetchBooks, increaseBookInCart } from '../actions';
import { withBookstoreService } from "../hoc";
import BooksList from "../components/books-list";
import ErrorIndicator from "../components/error-indicator";


class BooksListContainer extends Component {
  componentDidMount() {
    const { fetchBooks } = this.props;
    fetchBooks();
  }
  render() {
    const { books, error, loading, onAddedToCart } = this.props;

    if (error) return <ErrorIndicator />;
    return <BooksList books={books} loading={loading} onAddedToCart = {onAddedToCart} />;
  }
}

const mapStateToProps = ({booksStore:{ books, loading, error }}) => {
  return {
    books,
    loading,
    error
  }
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => ({
  fetchBooks: dispatch(fetchBooks(bookstoreService)),
  onAddedToCart: (id) => dispatch(increaseBookInCart(id))
});

export default compose(
  withBookstoreService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(BooksListContainer);
