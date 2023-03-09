import React from 'react';
import PropTypes from 'prop-types';
import Interactions from './Interactions';

const Book = (props) => {
  const { book } = props;
  const {
    title, author, completed, presentChapter, category, itemId,
  } = book;
  const { chapter, chapterTitle } = presentChapter;
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
          {completed}
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
            {chapter}
            :
            {chapterTitle}
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
  chapter: PropTypes.number.isRequired,
  chapterTitle: PropTypes.string.isRequired,
  completed: PropTypes.number.isRequired,
  presentChapter: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
};

export default Book;
