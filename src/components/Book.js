import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/booksSlice';

function Book({ title, author, id }) {
  const dispatch = useDispatch();

  const removeHandler = (id) => {
    dispatch(removeBook(id));
  };

  const category = 'Miscellaneous';

  return (
    <li className="display-flex m-3 space-between book-card">
      <div>
        <ul>
          <li>{category}</li>
          <li><h2>{title}</h2></li>
          <li>{author}</li>
        </ul>
        <ul className="interactions display-flex">
          <li>
            <button type="button">
              Comments
            </button>
          </li>
          <li>
            <button type="button" onClick={() => { removeHandler(id); }}>
              Remove
            </button>
          </li>
          <li>
            <button type="button">
              Edit
            </button>
          </li>
        </ul>

      </div>
      <div className="display-flex space-between book-card-details">
        <div className="display-flex">
          <span className="completed" />
          {48}
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
}

Book.propTypes = {
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Book;
