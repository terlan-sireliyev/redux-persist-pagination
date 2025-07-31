import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import productSlice from "./productsSlice/productsSlice";
import persistReducer from "redux-persist/es/persistReducer";
import { configureStore } from "@reduxjs/toolkit";
import persistStore from "redux-persist/es/persistStore";
import paginationSlice from "./paginationSlice/paginationSlice";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["pagination", "product"],
};

const rootPersist = combineReducers({
  product: productSlice,
  pagination: paginationSlice,
});

const persistedReducer = persistReducer(persistConfig, rootPersist);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);
