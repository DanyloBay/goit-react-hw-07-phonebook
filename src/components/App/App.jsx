import React from 'react';
import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors'
import Container from '../Container/Container';
import Header from '../Header/Header';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import Message from '../Message/Message'

const App = () => {
  const contacts = useSelector(getContacts);
  const { isLoading } = useSelector(state => state.contacts);
  return (
    <>
      <Container>
        <Header />
      </Container>

      <Container title="Contacts">
        <Filter />
        <ContactList />
        {contacts.length === 0 && !isLoading && <Message />}
      </Container>
    </>
  );
}

export default App;
