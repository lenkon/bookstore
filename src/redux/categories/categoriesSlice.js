const CATEGORY_CHECK_STATUS = 'bookstore/CATEGORY_CHECK_STATUS';

export default function reducer(state = [], action) {
  switch (action.type) {
    case CATEGORY_CHECK_STATUS:
      return 'Under Construction';
    default: return state;
  }
}

export function checkCategoryStatus() {
  return { type: CATEGORY_CHECK_STATUS };
}
