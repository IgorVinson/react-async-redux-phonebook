import Form from './Form';
import { ContactList } from './ContactList';
import { Filter } from './Filter';

export const App = () => {
  return (
    <div className='App'>
      <Form />
      <Filter />
      <h2>Contacts</h2>
      <ContactList />
    </div>
  );
};

