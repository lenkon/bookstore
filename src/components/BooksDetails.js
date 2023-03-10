import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../redux/books/booksSlice';
import BookList from './BookList';
import Form from './Form';

const BooksDetails = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
  const books = useSelector((state) => state.books);

  return (
    <div>
      <BookList books={books} />
      <Form />
    </div>
  );
};

export default BooksDetails;
