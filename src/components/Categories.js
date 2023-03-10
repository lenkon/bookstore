import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categoryCheckStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();

  return (
    <div className="book-card m-3 display-flex">
      <button className="btn-check-status" type="button" onClick={() => { dispatch(categoryCheckStatus()); }}>Check Status</button>
      <div className="p-1">{category}</div>
    </div>
  );
};

export default Categories;
