import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const addBookHandler = (event) => {
    event.preventDefault();

    if (title !== '' && author !== '') {
      dispatch(addBook({
        itemId: uuidv4(),
        cat: 'Miscellaneous',
        title,
        author,
        chapters: 18,
        presentChapter: {},
        progress: 0,
        comments: [],
      }));
    }
    setAuthor('');
    setTitle('');
  };

  return (
    <div className="m-3">
      <h2 className="form-title">ADD NEW BOOK</h2>
      <form className="book-card display-flex form-container">
        <input className="p-1" type="text" name="title" placeholder="Book title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input className="p-1" type="text" name="author" placeholder="Book author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <input className="p-1 button" type="submit" value="Add Book" onClick={addBookHandler} />
      </form>
    </div>
  );
};

export default Form;
