import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import NavBar from './components/Navbar';
import BookList from './components/BookList';
import Categories from './components/Categories';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<BookList />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
