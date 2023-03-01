import { createSelector } from "@reduxjs/toolkit";



export const getContacts = (state) => state.items.items;
export const getFilterValue = (state) => state.items.filter;


export const getVisibleContacts = createSelector(
[getContacts,getFilterValue],
(contacts, filterItem) =>{
    return contacts.filter((contact) =>{
        return contact.name.toLowerCase().includes(filterItem.toLowerCase());
    });
},
);