import { createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/HQ4dyPd09pUjSNKdipg5/books';
const GET_BOOK = 'bookstore/books/GET_BOOK';
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

export default function reducer(state = [], action) {
  const list = [];
  switch (action.type) {
    case `${ADD_BOOK}/fulfilled`:
      return [...state, action.payload];
    case `${REMOVE_BOOK}/fulfilled`:
      return state.filter((item) => item.item_id !== action.payload);
    case `${GET_BOOK}/fulfilled`:
      Object.keys(action.payload).forEach((element) => {
        const book = action.payload[element][0];
        book.item_id = element;
        list.push(book);
      });
      return list;
    default:
      return state;
  }
}

export const addBook = createAsyncThunk(ADD_BOOK, async (obj) => {
  await fetch(URL,
    {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {
        'content-Type': 'application/json; charset=UTF-8',
      },
    });
  return obj;
});

export const removeBook = createAsyncThunk(REMOVE_BOOK, async (id) => {
  await fetch(`${URL}/${id}`,
    {
      method: 'DELETE',
      body: JSON.stringify({ item_id: id }),
      headers: {
        'content-Type': 'application/json; charset=UTF-8',
      },
    });
  return id;
});

export const getBook = createAsyncThunk(GET_BOOK, async () => {
  const response = await fetch(URL,
    {
      method: 'GET',
      headers: {
        'content-Type': 'application/json; charset=UTF-8',
      },
    });
  const result = await response.json();
  return result;
});
