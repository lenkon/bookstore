import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import BooksDetails from './components/BooksDetails';
import Categories from './components/Categories';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<BooksDetails />} />
        <Route path="/books" element={<BooksDetails />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
