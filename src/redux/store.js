import { combineReducers, createStore } from '@reduxjs/toolkit';
import { contactsReducer } from './reducers';
import { devToolsEnhancer } from 'redux-devtools-extension';


const rootReducer = combineReducers({
  contacts:contactsReducer,
})

export const store = createStore(rootReducer, devToolsEnhancer())