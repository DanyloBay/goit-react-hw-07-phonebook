import axios from 'axios';

axios.defaults.baseURL = 'https://646b81007d3c1cae4ce3e9d5.mockapi.io/';

export const fetchContacts = async () => {
  const response = await axios.get('/contacts');
  return response;
};

export const fetchContactsDelete = async contactID => {
  const response = await axios.delete(`/contacts/${contactID}`);
  return response;
};

export const fetchContactsAdd = async newContact => {
  const response = await axios.post(`/contacts`, newContact, {
    headers: { 'content-type': 'application/json' },
  });
  return response;
};
