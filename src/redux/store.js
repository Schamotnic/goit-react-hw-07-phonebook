import { configureStore } from '@reduxjs/toolkit';
import { contactApi } from './contacts';
import filterReducer from './filterSlice';

export const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactApi.middleware,
  ],
});

export default store;

