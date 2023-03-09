import React from 'react';
import { useSelector } from 'react-redux';
import BookList from './BookList';
import Form from './Form';

const BooksDetails = () => {
  const books = useSelector((state) => state.books);
  return (
    <div>
      <BookList books={books} />
      <Form />
    </div>
  );
};

export default BooksDetails;
