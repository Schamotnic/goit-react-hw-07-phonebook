import React from "react"
import { useDispatch } from "react-redux"
// import{} from './ContactListItemStyled'
import {deleteContact} from "../redux/contactsSlice"
import{Button,SpanItem} from '../contacts/ContactsStyle'



export const ContactListItem =({id,name,number}) =>{
const dispatch = useDispatch();

const remoweContact = e => {
    e.preventDefault();
    const remoweContact = e.currentTarget.id;
    dispatch(deleteContact((remoweContact)))
};
return(
    <li key={id}>
        <SpanItem>{name} </SpanItem>
        <SpanItem>{number} </SpanItem>
        <Button type='button' id={id} onClick ={remoweContact}>Delete</Button>
    </li>
)
}