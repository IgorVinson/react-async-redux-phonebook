import { configureStore } from '@reduxjs/toolkit';
import  contactsReducer  from './contactsReduser';
import { filterReducer } from './filterSlice';
import { devToolsEnhancer } from "@redux-devtools/extension";

const enhancer = devToolsEnhancer();
const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  }
}, enhancer);

export default store;
