import Form from '../compounents/Form';
import ContactsList from '../compounents/ContactsList';
import Filter from '../compounents/Filter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { AppWrapper, MainHead } from './App.styled';

const App = () => {
  return (
    <AppWrapper>
      <MainHead>Phonebook</MainHead>
      <Form />
      <h2>Contacts</h2>
      <ContactsList />
      <Filter />
      <ToastContainer theme='colored' autoClose={500} />
    </AppWrapper>
  );
};

export default App;
