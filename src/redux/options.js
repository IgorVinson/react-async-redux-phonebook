import {
  addNewContactFulfilled,
  addNewContactPending,
  addNewContactRejected, deleteContactFulfilled, deleteContactPending, deleteContactRejected,
  getContactFulfilled,
  getContactPending,
  getContactRejected,
} from './actions';
import axios from 'axios';

axios.defaults.baseURL = 'https://63e11987dd7041cafb41000c.mockapi.io';

export const addNewContactOption = (contact) => async dispatch => {
  try {
    dispatch(addNewContactPending());

    const contacts = await axios.post('/contacts', contact);
    console.log(contacts)
    dispatch(addNewContactFulfilled(contacts.data));
  } catch (error){
    dispatch(addNewContactRejected(error.message));
  }
}

export const getContactsOption = () => async dispatch => {
  try {
    dispatch(getContactPending());

    const contacts = await axios.get('/contacts');
    console.log(contacts)
    dispatch(getContactFulfilled(contacts.data));
  }
  catch (err){
    dispatch(getContactRejected(err.message));
  }
}

export const deleteContactOption = (id) => async dispatch => {

try {
    dispatch(deleteContactPending(id));

    await axios.delete(`/contacts/${id}`);
    dispatch(deleteContactFulfilled());
  }
  catch (err){
    dispatch(deleteContactRejected(err.message));
  }

}
