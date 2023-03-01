import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from 'redux-persist';
// import{persistConfig} from './store'


export const contactsSlice = createSlice({
    name:'user',
    initialState: { 
        items: [],
        filter: '', 
    },

    reducers:{
        addContact(state,action){
state.items.push(action.payload);
       },
    deleteContact(state,action){
state.items = state.items.filter(contacts => contacts.id !== action.payload)
        },
        contactFilter:(state, action) => {
state.filter = action.payload;
        }
    },
});
  


const persistConfig = {
    key: 'root',
    storage,
    whitelist:['items']
};

export const persistedUserReducer = persistReducer(persistConfig, contactsSlice.reducer);

export const {addContact,deleteContact,contactFilter} = contactsSlice.actions;

