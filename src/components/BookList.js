import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBook } from '../redux/books/booksSlice';
import Form from './Form';
import Book from './Book';

function BookList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBook());
  }, [dispatch]);

  const books = useSelector((state) => state.books);
  return (
    <div className="homeContainer">
      <div className="homeBook">
        {
          books.map((item) => (
            <Book
              key={item.item_id}
              title={item.title}
              author={item.author}
              id={item.item_id}
              category={item.category}
            />
          ))
        }
      </div>
      <div className="horizontal-divider" />
      <Form />
    </div>
  );
}

export default BookList;
