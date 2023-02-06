import { createAction } from '@reduxjs/toolkit';

// const addNewContact = createAction('contacts/addNewContact');
// export const deleteContact = createAction('contacts/deleteContact');


// export const addNewContact = (contact) => ({ type: 'contacts/addNewContact', payload: contact });
export const deleteContact = (id) => ({ type: 'contacts/deleteContact', payload: id });

export const addNewContactPending = () => ({ type: 'contacts/addNewContact/pending' });
export const addNewContactFulfilled = (contact) => ({ type: 'contacts/addNewContact/fulfilled', payload: contact });
export const addNewContactRejected = (error) => ({ type: 'contacts/addNewContact/rejected', payload: error });

export const getContactPending = () => ({ type: 'contacts/getContact/pending' });
export const getContactFulfilled = (contacts) => ({ type: 'contacts/getContact/fulfilled', payload: contacts });
export const getContactRejected = (error) => ({ type: 'contacts/getContact/rejected', payload: error });

//create action for delete contact
export const deleteContactPending = (id) => ({ type: 'contacts/deleteContact/pending', payload: id });
export const deleteContactFulfilled = () => ({ type: 'contacts/deleteContact/fulfilled' });
export const deleteContactRejected = (error) => ({ type: 'contacts/deleteContact/rejected', payload: error });




// export const addNewContact = () => dispatch => {
//     try {
//       dispatch({ type: 'contacts/addNewContact', payload: { isLoading: true } });
//
//       // async shtuka\druka await fetch
//       dispatch({ type: 'contacts/addNewContact', payload: response.data });
//     } catch {
//       dispatch({ type: 'contacts/addNewContact', payload: { error: error } });
//     }
//   };
//
