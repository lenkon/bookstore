import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Interactions = (props) => {
  const dispatch = useDispatch();
  const { itemId } = props;

  const removeHandler = (itemId) => {
    dispatch(removeBook(itemId));
  };

  return (
    <ul className="interactions display-flex">
      <li>
        <button type="button">
          Comments
        </button>
      </li>
      <li>
        <button type="button" onClick={() => { removeHandler(itemId); }}>
          Remove
        </button>
      </li>
      <li>
        <button type="button">
          Edit
        </button>
      </li>
    </ul>
  );
};

Interactions.propTypes = {
  itemId: PropTypes.string.isRequired,
};

export default Interactions;
