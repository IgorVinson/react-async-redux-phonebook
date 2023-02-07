import {
  addNewContactFulfilled,
  addNewContactPending,
  addNewContactRejected, deleteContactFulfilled, deleteContactPending, deleteContactRejected,
  getContactFulfilled,
  getContactPending,
  getContactRejected,
} from './actions';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://63e11987dd7041cafb41000c.mockapi.io';

export const addNewContact = createAsyncThunk(
  'contacts/addNewContact',
  (contact) => {
    return axios.post('/contacts', contact).then(response => response.data);
  }
)

export const getContacts = createAsyncThunk(
  'contacts/getContact',
  () => {
    return axios.get('/contacts').then(response => response.data);
  }
)

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  (id) => {
    return axios.delete(`/contacts/${id}`).then(response => response.data.id);
  }
)


// export const addNewContactOption = (contact) => async dispatch => {
//   try {
//     dispatch(addNewContactPending());
//
//     const contacts = await axios.post('/contacts', contact);
//     console.log(contacts)
//     dispatch(addNewContactFulfilled(contacts.data));
//   } catch (error){
//     dispatch(addNewContactRejected(error.message));
//   }
// }

// export const getContactsOption = () => async dispatch => {
//   try {
//     dispatch(getContactPending());
//
//     const contacts = await axios.get('/contacts');
//     dispatch(getContactFulfilled(contacts.data));
//   }
//   catch (err){
//     dispatch(getContactRejected(err.message));
//   }
// }

// export const deleteContactOption = (id) => async dispatch => {
//
// try {
//     dispatch(deleteContactPending(id));
//
//     await axios.delete(`/contacts/${id}`).then((response) => {
//       console.log(response);
//     })
//     dispatch(deleteContactFulfilled(id));
//     dispatch(getContactsOption());
//   }
//   catch (err){
//     dispatch(deleteContactRejected(err.message));
//   }
// }

