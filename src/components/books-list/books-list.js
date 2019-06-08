import { Dimmer, Item, Loader, Segment } from "semantic-ui-react";
import React from "react";

import BooksListItem from "../books-list-item/books-list-item";

const BooksList = ({ books, loading, onAddedToCart }) => (
  <Segment>
    <Dimmer inverted active={loading}>
      <Loader />
    </Dimmer>
    <Item.Group divided>
      {books.map(book => {
        return <BooksListItem key={book.id} book={book} onAddedToCart = {onAddedToCart} />;
      })}
    </Item.Group>
  </Segment>
);

export default BooksList;
