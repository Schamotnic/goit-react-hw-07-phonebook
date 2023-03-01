import { configureStore } from "@reduxjs/toolkit";

import { persistedUserReducer } from "./contactsSlice";
import {
   persistStore,
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
 } from 'redux-persist';
 
 


 
 
 export const store = configureStore({
   reducer: {
     items: persistedUserReducer,
    },
    middleware(getDefaultMiddleware ){
      return getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      });
    },
  });
  
 
  export const persistor = persistStore(store)
  
   
  

 

 
   






