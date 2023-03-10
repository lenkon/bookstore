import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkingStatus } from '../redux/categories/categoriesSlice';

function Categories() {
  const dispatch = useDispatch();

  const checkStatusHandler = () => {
    dispatch(checkingStatus());
  };

  const categories = useSelector((state) => state.categories);

  return (
    <div>
      <button type="button" onClick={checkStatusHandler}>Check status</button>
      <h2>{categories}</h2>
    </div>
  );
}

export default Categories;
