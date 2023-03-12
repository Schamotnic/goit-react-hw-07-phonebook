import React from 'react';

import { SpanItem } from './ContactsListItem.styled';

import { useDeleteContactMutation } from '../../redux/contacts';
import { Button, Item } from '../ContactsList/Contacts.styled';

const ContactsListItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <Item key={id}>
      <SpanItem>{name}</SpanItem>
      <SpanItem>{number}</SpanItem>
      <Button onClick={() => deleteContact(id)}>
        {isDeleting ? 'Deleting...' : 'Delete'}
      </Button>
    </Item>
  );
};

export default ContactsListItem;
