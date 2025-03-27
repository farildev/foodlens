import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { setupListeners } from '@reduxjs/toolkit/query';
import AsyncStorage from '@react-native-async-storage/async-storage';
import themeSlice from '@/store/slices/themeSlice';
import filterSlice from '@/store/slices/filterSlice';
import api from './api';

const reducers = combineReducers({
  [api.reducerPath]: api.reducer,
  theme: themeSlice,
  filter: filterSlice,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['theme'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'persist/PERSIST',
          'persist/REHYDRATE',
          'persist/REGISTER',
        ],
      },
    }).concat(api.middleware),
});

const persistor = persistStore(store);
setupListeners(store.dispatch);

export { persistor, store };
