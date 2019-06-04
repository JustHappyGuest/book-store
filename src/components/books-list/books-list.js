import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Item, Segment, Dimmer, Loader } from 'semantic-ui-react';

import BooksListItem from '../books-list-item/books-list-item';
import compose from '../../utils';
import { withBookstoreService } from '../../hoc';
import * as actions from '../../actions/';

class BooksList extends Component {
    componentDidMount() {
        const { bookstoreService: { getBooks }, booksLoaded } = this.props;

        getBooks()
            .then((books) => {
                booksLoaded(books);
            });

    }
    render() {
        return (
            <Segment>
                <Dimmer inverted active = {this.props.loading} >
                    <Loader/>
                </Dimmer>
                <Item.Group divided>
                    {
                        this.props.books.map((book) => {
                            return <BooksListItem key={book.id} book={book} />
                        })
                    }
                </Item.Group>
            </Segment>
        );
    }
}

const mapStateToProps = ({ books, loading }) => ({ books, loading });

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, actions)
)(BooksList);;