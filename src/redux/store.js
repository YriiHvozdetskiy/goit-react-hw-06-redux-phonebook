import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './reducers/reducer';

const persistConfig = {
  key: 'contacts',
  storage,
};
// це щоб ігнурувало ці actions (костильок) [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });

// головний reducer де буде зберігатися reduceru для всіх задач (всі reduceru приложенія)
// combineReducers потрібний щоб працював persistReducer
const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development', // потрібно щоб тулзи працювали тільки в розробці
});

// persistor обгортка над нашим стором
const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };

//=============== clean Redux ===============

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
