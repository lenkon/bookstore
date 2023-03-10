import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; /* Generate a random ID */
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

function Form() {
  const initial = {
    author: '',
    title: '',
  };
  const [newBook, setNewBook] = useState(initial);

  const inputHandler = (e) => {
    setNewBook({
      ...newBook,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addBook({
      ...newBook,
      item_id: uuidv4(),
      category: 'Miscellaneous',
    }));
    setNewBook(initial);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="title">
        <input name="title" placeholder="Book title" onChange={inputHandler} value={newBook.title} required />
      </label>
      <label htmlFor="author">
        <input name="author" placeholder="Book author" onChange={inputHandler} value={newBook.author} required />
      </label>
      <button type="submit">ADD BOOK</button>
    </form>
  );
}

export default Form;
