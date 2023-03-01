import React from 'react';
import { useSelector } from 'react-redux';
import { getVisibleContacts } from '../redux/selectors';
import {ContactListItem} from '../ContactListItem/ContactListItem'
import{Ul} from "./ContactsStyle"
// import PropTypes from "prop-types";
 


const Contacts = ()=>{
   const visibileContacs = useSelector(getVisibleContacts)


   return(
<Ul>
{visibileContacs.map((contacts) =>(
   <ContactListItem
      key={contacts.id}
      id={contacts.id}
      name ={contacts.name}
      number={contacts.number}
   />
))}
 </Ul>) 
}
  export default Contacts;      
 
 
  
 
   

 
     
 

//  Contacts.propTypes = {
  
//    contacts: PropTypes.arrayOf(PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//       id:PropTypes.string.isRequired
//    })).isRequired,
//    onDelete: PropTypes.func.isRequired
// }
