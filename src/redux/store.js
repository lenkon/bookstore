import { configureStore } from '@reduxjs/toolkit';
// import { applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import bookReducer from './books/booksSlice';
import categoryReducer from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    books: bookReducer,
    category: categoryReducer,
  },
// }, applyMiddleware(thunk));
});

export default store;
