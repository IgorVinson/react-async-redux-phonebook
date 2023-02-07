import { createReducer } from '@reduxjs/toolkit';
import { getContacts, addNewContact, deleteContact } from './options';

const initialState = {
  contactsList: [],
  isLoading: false,
  error: null,
};


const contactsReducer = createReducer(initialState, {
  [getContacts.fulfilled]: (state, action) => {
    state.contactsList = action.payload;
    state.isLoading = false;
  },
  [getContacts.pending]: (state, action) => {
    state.isLoading = true;
  },
  [getContacts.rejected]: (state, action) => {
    state.error = action.payload;
  },
  [addNewContact.fulfilled]: (state, action) => {
    state.contactsList.push(action.payload);
    state.isLoading = false;
  },
  [addNewContact.pending]: (state, action) => {
    state.isLoading = true;
  },
  [addNewContact.rejected]: (state, action) => {
    state.error = action.payload;
  },
  [deleteContact.fulfilled]: (state, action) => {
    state.isLoading = false;
    state.contactsList = state.contactsList.filter(contact => contact.id !== action.payload);
  },
  [deleteContact.pending]: (state, action) => {
    state.isLoading = true;
  },
  [deleteContact.rejected]: (state, action) => {
    state.error = action.payload;
  },
});

// const contactsReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case 'contacts/addNewContact/pending':
//       return { ...state, isLoading: true };
//     case 'contacts/addNewContact/fulfilled':
//       console.log('Reducer', payload);
//       return { ...state, contactsList: [...state.contactsList, payload], isLoading: false };
//     case 'contacts/addNewContact/rejected':
//       return { ...state, error: payload };
//     case 'contacts/getContact/pending':
//       return { ...state, isLoading: true };
//     case 'contacts/getContact/fulfilled':
//       return { ...state, contactsList: payload, isLoading: false };
//     case 'contacts/getContact/rejected':
//       return { ...state, error: payload };
//     case 'contacts/deleteContact/pending':
//       return { ...state, isLoading: true };
//     case 'contacts/deleteContact/fulfilled':
//       return { ...state, isLoading: false };
//     case 'contacts/deleteContact/rejected':
//       return { ...state, error: payload };
//
//     default:
//       return state;
//   }
//
// };

export default contactsReducer;
