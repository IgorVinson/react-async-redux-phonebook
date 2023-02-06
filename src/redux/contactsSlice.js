import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addNewContact: (state, action) => {
      state.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addNewContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;


