import React from 'react';
import { useState } from 'react';
import { Label, Title, Input, Button } from './ContactForm.styled';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/selectors'
import { fetchAddContacts } from 'redux/operations';

const ContactForm = ({ onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const onChangeName = event => setName(event.currentTarget.value);
  const onChangeNumber = event => setPhone(event.currentTarget.value);

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const onSubmitForm = event => {
    event.preventDefault();

    const newContactElement = { id: nanoid(), name, phone };

    contacts.some(contact => contact.name === name)
      ? Report.warning(
          `${name}`,
          'This user is already in the contact list.',
          'OK'
        )
      : dispatch(fetchAddContacts(newContactElement));
    reset();
    onClose();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={onSubmitForm}>
      <Label>
        <Title>Name</Title>
        <Input
          onChange={onChangeName}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        <Title>Number</Title>
        <Input
          onChange={onChangeNumber}
          type="tel"
          name="phone"
          value={phone}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </form>
  );
}

export default ContactForm;
