
const addNewContact = () => dispatch => {
  try {
    dispatch(addNewContactPending());


    dispatch({ type: 'contacts/addNewContact', payload: response.data });
  } catch {
    dispatch({ type: 'contacts/addNewContact', payload: { error: error } });
  }
}
