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
    <div className="m-3">
      <h2 className="form-title">ADD NEW BOOK</h2>
      <form className="book-card display-flex form-container" onSubmit={submitHandler}>
        <input className="p-1" type="text" name="title" placeholder="Book title" onChange={inputHandler} value={newBook.title} required />
        <input className="p-1" type="text" name="author" placeholder="Book author" onChange={inputHandler} value={newBook.author} required />
        <button className="p-1 form-button button" type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}

export default Form;
