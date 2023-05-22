import PropTypes from 'prop-types';
import { FaTrash, FaUserAlt } from 'react-icons/fa';
import { Wrapper, Icon, Number, Button } from './Contact.styled';

import React from 'react';


const Contact = ({ name, phone, onDeleteContact }) => {
  return (
    <>
      <Wrapper>
        <Icon>
          <FaUserAlt />
        </Icon>
        <p>{name}</p>
      </Wrapper>
      <Wrapper>
        <Number>{phone}</Number>
        <Button type="button" onClick={onDeleteContact}>
          <FaTrash />
        </Button>
      </Wrapper>
    </>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
  contactId: PropTypes.string.isRequired,
};

export default Contact;
