import { configureStore } from '@reduxjs/toolkit';
import * as contactsSlice from './reducers/reducer';


const rootReducer = {
  contacts: contactsSlice,
};


const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;

// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
// import { combineReducers, createStore } from '@reduxjs/toolkit';
// import { contactsReducer } from './reducers/reducer';
// import { devToolsEnhancer } from 'redux-devtools-extension';
//
// const persistConfig = {
//   key: 'contacts',
//   storage,
// };
// // combineReducers потрібний щоб працював persistReducer
// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });
//
// const persistedReducer = persistReducer(persistConfig, rootReducer);
//
// const store = createStore(persistedReducer, devToolsEnhancer());
//
// // persistor обгортка над нашим стором
// const persistor = persistStore(store);
//
// export default { store, persistor };
//
