import './Form.module.css';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsSelector } from '../redux/selectors';
import { addNewContact } from '../redux/options';


const Form = () => {
  const contacts = useSelector(getContactsSelector);
  const dispatch = useDispatch();

  const addContact = (evt) => {
    evt.preventDefault();

    const form = evt.currentTarget;
    const name = form.elements.name.value;

    if (doesExist(name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    const number = form.elements.number.value;
    const id = nanoid();
    const contact = { id, name, number };

    dispatch(addNewContact(contact));
    form.reset();
  };
  const doesExist = (name) => {
    return contacts.find(contact => contact.name === name);
  };

  return (
    <>
      <form onSubmit={addContact}>
        <h2>Name</h2>
        <input type='text'
               name='name'
               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
               required />
        <h2>Number</h2>
        <input type='tel'
               name='number'
               pattern='^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$'
               title='Number must be in format 000-00-00'
               required />
        <button type='submit'>Add</button>
      </form>
      <hr />
    </>
  );
};

export default Form;
