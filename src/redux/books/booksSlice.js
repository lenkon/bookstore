const ADD_BOOK = 'bookstore/ADD-BOOK';
const REMOVE_BOOK = 'bookstore/REMOVE-BOOK';

const books = [
  {
    itemId: 'item1',
    comments: [],
    completed: 64,
    category: 'Fiction',
    title: 'The Great Gatsby',
    author: 'John Smith',
    chapters: 28,
    presentChapter: { chapter: 17, chapterTitle: '' },
  },
  {
    itemId: 'item2',
    comments: [],
    completed: 8,
    category: 'Fiction',
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    chapters: 50,
    presentChapter: { chapter: 3, chapterTitle: '' },
  },
  {
    itemId: 'item3',
    comments: [],
    completed: 0,
    category: 'Nonfiction',
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    chapters: 15,
    presentChapter: { chapter: 1, chapterTitle: '' },
  },
];

export const addBook = (book) => ({
  type: ADD_BOOK, book,
});

export const removeBook = (itemId) => ({
  type: REMOVE_BOOK, itemId,
});

const bookReducer = (state = books, action = {}) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter((book) => book.itemId !== action.itemId);
    default:
      return state;
  }
};

export default bookReducer;
