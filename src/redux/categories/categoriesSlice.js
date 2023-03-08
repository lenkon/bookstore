const CATEGORY_CHECK_STATUS = 'bookstore/CATEGORY_CHECK_STATUS';

export const categoryCheckStatus = () => ({
  type: CATEGORY_CHECK_STATUS,
});

const categoryReducer = (state = [], action) => {
  switch (action.type) {
    case CATEGORY_CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
};

export default categoryReducer;
