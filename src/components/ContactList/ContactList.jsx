import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getFilter, getContacts } from '../../redux/selectors'
import { fetchDataContacts, fetchDeleteContacts} from 'redux/operations';
import Contact from '../Contact/Contact';
import { Item } from './ContactList.styled';

const ContactList = () => {
  const { filter } = useSelector(state => getFilter(state));
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataContacts())
  }, [dispatch])

  const deleteSelectedContact = contactId => dispatch(fetchDeleteContacts(contactId));

  const filtredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContactList = filtredContacts();

  return (
    <ul>
      {filteredContactList.length > 0 && filteredContactList.map(({ id, name, phone }) => {
        return (
          <Item key={id}>
            <Contact
              name={name}
              phone={phone}
              onDeleteContact={() => deleteSelectedContact(id)}
              contactId={id}
            />
          </Item>
        );
      })}
    </ul>
  );
}

export default ContactList;
