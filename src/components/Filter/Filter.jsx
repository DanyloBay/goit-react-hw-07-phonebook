import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/selectors'
import { filterContacts } from 'redux/contacts-slice';
import { Label, Text, Input } from './Filter.styled';
import React from 'react';

const Filter = () => {
  const { filter } = useSelector(state => getFilter(state));

  const dispatch = useDispatch();

  const changeFieldFilter = event =>
    dispatch(filterContacts(event.currentTarget.value));

  return (
    <Label>
      <Text>Find contacts by name</Text>
      <Input type="text" value={filter}
        onChange={changeFieldFilter}
      />
    </Label>
  );
}

export default Filter;
