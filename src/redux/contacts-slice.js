import { createSlice } from '@reduxjs/toolkit';
import {
  fetchDataContacts,
  fetchDeleteContacts,
  fetchAddContacts,
} from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: {
    [fetchDataContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchDataContacts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    },
    [fetchDataContacts.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [fetchDeleteContacts.rejected](state) {
      state.isLoading = true;
    },
    [fetchDeleteContacts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(contact => contact.id === payload.id);
      state.items.splice(index, 1);
    },
    [fetchDeleteContacts.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [fetchAddContacts.rejected](state) {
      state.isLoading = true;
    },
    [fetchAddContacts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items.push(payload);
    },
    [fetchAddContacts.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

const contactsFilterSlice = createSlice({
  name: 'filter',
  initialState: { filter: '' },
  reducers: {
    filterContacts(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const filterReducer = contactsFilterSlice.reducer;
export const { filterContacts } = contactsFilterSlice.actions;
