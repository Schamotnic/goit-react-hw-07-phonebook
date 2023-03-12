import React from 'react';
import ContactsListItem from '../ContactsListItem';
import { List } from './Contacts.styled';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from '../../redux/contacts';


const ContactsList = () => {
  const { data } = useGetContactsQuery();
  const inputValue = useSelector(state => state.filter.value);
  const searchName = data?.filter(({ name }) => name.toLowerCase().includes(inputValue.toLowerCase()));
  return (
    <List>
      {searchName && searchName.map(contacts => {
        return <ContactsListItem key={contacts.id} id={contacts.id} name={contacts.name} number={contacts.number} />;
      })}
    </List>);
};

export default ContactsList;
