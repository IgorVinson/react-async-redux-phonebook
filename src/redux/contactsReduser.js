import { createReducer } from '@reduxjs/toolkit';
import { addNewContact, deleteContact } from './actions';


// const contactsReducer = createReducer([], {
//   'contacts/addNewContact': (state, action) => [...state, action.payload],
//   'contacts/deleteContact': (state, action) =>
//     state.filter(contact => contact.id !== action.payload),
// });

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
}

const contactsReducer = (state = initialState, { type, payload }) => {
switch (type) {
    case 'contacts/addNewContact':
      return [...state, payload];
    case 'contacts/deleteContact':
      return state.filter(contact => contact.id !== payload);
    default:
      return state;
  }

}

export default contactsReducer;
