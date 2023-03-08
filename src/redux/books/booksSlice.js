const ADD_BOOK = 'bookstore/ADD-BOOK';
const REMOVE_BOOK = 'bookstore/REMOVE-BOOK';

const books = [];

export const addBook = (book) => ({
  type: ADD_BOOK, book,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK, id,
});

const bookReducer = (state = books, action = {}) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...books, action.book];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default bookReducer;
