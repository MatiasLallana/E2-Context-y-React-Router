import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";

const reducers = combineReducers({});

const persisteConfig = {
  key: "root",
  storage,
  whitelist: [],
};

const persistedReducer = persistReducer(persisteConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
