import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import PropTypes from "prop-types";
import {contactFilter} from '../redux/contactsSlice'
 import {FilterDiv} from '../contacts/ContactsStyle'

const Filter = () =>{
const dispatch = useDispatch();
const stateFilter = useSelector(state => state.filter);
const getfilters = e =>{
   dispatch(contactFilter (e.target.value));
}
    return(
      <FilterDiv>
      <input type="text"
      name="filter"
      value= {stateFilter}
      onChange={getfilters}
   />
   </FilterDiv>

      
      
)
}

// Filter.propTypes = {
//    value: PropTypes.node.isRequired,
//    onChange: PropTypes.func.isRequired
// }




export default Filter;