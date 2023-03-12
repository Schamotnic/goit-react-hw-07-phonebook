import React from 'react';
import { FilterDiv } from './Filter.styled';
import { addFilter } from '../../redux/filterSlice';
import { useDispatch } from 'react-redux';
import AwesomeDebouncePromise from 'awesome-debounce-promise';

const Filter = () => {
  const dispatch = useDispatch();


  const getFilter = e => {
    dispatch(addFilter(e.target.value));
  };
  const searchDebounced = AwesomeDebouncePromise(getFilter, 500);

  return (
    <FilterDiv>
      <label>
        Search name
        <input type='text'
               name='filter'
               id='filter'
               onChange={searchDebounced}
        />
      </label>
    </FilterDiv>
  );
};

export default Filter;
