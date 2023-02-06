import { createReducer } from '@reduxjs/toolkit';

const filterReducer = createReducer([], {
  changeFilter: (state, action) => action.payload,
});

export default contactsReducer;
