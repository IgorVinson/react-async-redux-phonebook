import './ContactList.module.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getContacts } from '../redux/options';
import { getContactsSelector, getFilterSelector } from '../redux/selectors';



export const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
      console.log('useEffect');
  }
  , [dispatch]);

  const contactsNotFiltered = useSelector(getContactsSelector);
  const filter = useSelector(getFilterSelector);

  const contacts = contactsNotFiltered.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  const delContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>{contact.name} {contact.number}
          <button onClick={() => delContact(contact.id)
          }> ❌
          </button>
        </li>
      ))}
    </ul>
  );
};
