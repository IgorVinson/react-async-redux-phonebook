import { addNewContactFulfilled, addNewContactPending, addNewContactRejected } from './actions';
import axios from 'axios';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const addNewContact = () => async dispatch => {
  try {
    dispatch(addNewContactPending());

    const contacts = await axios.get('/contacts');

    dispatch(addNewContactFulfilled(contacts.data));
  } catch {
    dispatch(addNewContactRejected(error));
  }
}
