import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/booksSlice';

function Book({ title, author, id }) {
  const dispatch = useDispatch();

  const removeHandler = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <div>
      <h2>{title}</h2>
      <h3>{author}</h3>
      <button type="button" onClick={() => removeHandler(id)}>Remove</button>
    </div>
  );
}

Book.propTypes = {
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Book;
