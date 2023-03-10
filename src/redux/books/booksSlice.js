const ADD_BOOK = 'bookstore/ADD-BOOK';
const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/HQ4dyPd09pUjSNKdipg5/books';

export const getBook = (book) => ({
  type: ADD_BOOK, book,
});

export const fetchBooks = () => (dispatch) => {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => dispatch(getBook(data)));
};

export const addBook = (book) => async (dispatch) => {
  await fetch(URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    body: JSON.stringify(book),
  }).then(() => dispatch(fetchBooks()));
};

export const deleteBook = (itemId) => async (dispatch) => {
  const REMOVE_URL = `${URL}/${itemId}`;

  await fetch(REMOVE_URL, {
    method: 'DELETE',
    body: JSON.stringify({ itemId }),
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
  }).then(() => dispatch(fetchBooks()));
};

const bookReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case ADD_BOOK:
      return action.book;
    default:
      return state;
  }
};

export default bookReducer;
