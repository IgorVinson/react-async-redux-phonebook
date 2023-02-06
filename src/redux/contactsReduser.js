import { createReducer } from '@reduxjs/toolkit';
import { addNewContact, deleteContact } from './actions';


// const contactsReducer = createReducer([], {
//   'contacts/addNewContact': (state, action) => [...state, action.payload],
//   'contacts/deleteContact': (state, action) =>
//     state.filter(contact => contact.id !== action.payload),
// });

const initialState = {
  contactsList: [],
  isLoading: false,
  error: null,
};

const contactsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'contacts/addNewContact/pending':
      return { ...state, isLoading: true };
    case 'contacts/addNewContact/fulfilled':
      console.log('Reducer', payload);
      return { ...state, contactsList: [...state.contactsList, payload], isLoading: false };
    case 'contacts/addNewContact/rejected':
      return { ...state, error: payload };
    case 'contacts/getContact/pending':
      return { ...state, isLoading: true };
    case 'contacts/getContact/fulfilled':
      return { ...state, contactsList: payload, isLoading: false };
    case 'contacts/getContact/rejected':
      return { ...state, error: payload };

    case 'contacts/deleteContact/pending':
      return { ...state, isLoading: true };
    case 'contacts/deleteContact/fulfilled':
      return { ...state, isLoading: false };
    case 'contacts/deleteContact/rejected':
      return { ...state, error: payload };

    default:
      return state;
  }

};

export default contactsReducer;
