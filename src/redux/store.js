import { configureStore } from "@reduxjs/toolkit";
import shopsyReducer from "./shopsySlice";
import storage from 'redux-persist/lib/storage'

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
const persistConfig = {
  key: 'root',
  version:1,
  storage,
};
const persistedReducer = persistReducer(persistConfig, shopsyReducer);

export const store = configureStore({
  reducer: {shopsy:persistedReducer},
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export let persistor = persistStore(store);
