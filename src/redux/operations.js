import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchContacts,
  fetchContactsDelete,
  fetchContactsAdd,
} from 'components/API/fetchContacts';

export const fetchDataContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchContacts();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchDeleteContacts = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetchContactsDelete(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchAddContacts = createAsyncThunk(
  'contacts/addContact',
  async (newContact, { rejectWithValue }) => {
    try {
      const response = await fetchContactsAdd(newContact);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
