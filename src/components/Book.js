import React from 'react';
import PropTypes from 'prop-types';
import Interactions from './Interactions';

const Book = (props) => {
  const { book, itemId } = props;
  const {
    title, author, category,
  } = book[0];

  return (
    <li className="display-flex m-3 space-between book-card">
      <div>
        <ul>
          <li>{category}</li>
          <li><h2>{title}</h2></li>
          <li>{author}</li>
        </ul>
        <Interactions itemId={itemId} />
      </div>
      <div className="display-flex space-between book-card-details">
        <div className="display-flex">
          <span className="completed" />
          {}
          %
          {' '}
          <br />
          {' '}
          Completed
        </div>
        <div>
          <h4>CURRENT CHAPTER</h4>
          <div>
            Chapter
            {}
            :
            {}
          </div>
          <div>
            <button className="mt-1" type="button">Update Progress</button>
          </div>
        </div>
      </div>
    </li>
  );
  // }
};

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
};

export default Book;
