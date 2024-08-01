  import { combineReducers } from "redux";
  import { persistReducer, persistStore } from "redux-persist";
  import { configureStore } from "@reduxjs/toolkit";

  import programSlice from "./reducers/programSlice";
  import storage from "redux-persist/lib/storage";
  declare var window: any;
  const persistConfig = {
    key: "root",
    storage: storage,
    whitelist: ["program"],
    blacklist: [],
    transforms: [],
  };

  const reducers = combineReducers({
    program: programSlice,
  });

  const persistedReducer = persistReducer(persistConfig, reducers);

  export const store = configureStore({
    reducer: persistedReducer,
  });

  export const persistor = persistStore(store);

  export type AppDispatch = typeof store.dispatch;
  export type RootState = ReturnType<typeof store.getState>;
