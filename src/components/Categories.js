import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkCategoryStatus } from '../redux/categories/categoriesSlice';

function Categories() {
  const dispatch = useDispatch();

  const checkStatusHandler = () => {
    dispatch(checkCategoryStatus());
  };

  const categories = useSelector((state) => state.categories);

  return (
    <div className="book-card m-3 display-flex">
      <button className="btn-check-status" type="button" onClick={checkStatusHandler}>Check status</button>
      <h2 className="categories-default-text">{categories}</h2>
    </div>
  );
}

export default Categories;
