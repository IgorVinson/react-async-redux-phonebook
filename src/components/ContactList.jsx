import './ContactList.module.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from '../redux/selectors';
import { deleteContact } from '../redux/actions';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contactsNotFiltered = useSelector(getContacts);
  const filter = useSelector(getFilter);

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
          <button onClick={() => {
            delContact(contact.id);
          }}> ❌
          </button>
        </li>
      ))}
    </ul>
  );
};
