import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { books } = this.props;
    return (
      Object.keys(books).map((itemId) => <Book key={itemId} book={books[itemId]} itemId={itemId} />)
    );
  }
}

BookList.propTypes = {
  books: PropTypes.instanceOf(Object).isRequired,
};

export default BookList;
