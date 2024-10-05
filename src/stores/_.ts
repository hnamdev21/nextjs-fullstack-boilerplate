// import { configureStore } from "@reduxjs/toolkit";
// import { combineReducers } from "redux";
// import { getPersistConfig } from "redux-deep-persist";
// import { createLogger } from "redux-logger";
// import { persistReducer, persistStore } from "redux-persist";
// import createWebStorage from "redux-persist/lib/storage/createWebStorage";

// import { isDevelopment } from "@/constants/env";

// import reducers, { whitelist } from "./reducers";

// const rootReducer = combineReducers(reducers);

// let store: any;

// const createStore = () => {
//   if (typeof window === "undefined") {
//     return configureStore({
//       reducer: rootReducer,
//       middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//           serializableCheck: false,
//           immutableCheck: false,
//         }).concat(createLogger()),
//     });
//   }

//   const storage = createWebStorage("local");
//   const persistConfig = getPersistConfig({
//     key: "root",
//     storage,
//     whitelist: whitelist,
//     rootReducer,
//   });
//   const persistedReducer = persistReducer(persistConfig, rootReducer);
//   const store = configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) =>
//       getDefaultMiddleware({
//         serializableCheck: false,
//         immutableCheck: false,
//       }).concat(createLogger()),
//     devTools: isDevelopment,
//   });

//   const persistor = persistStore(store);

//   return { store, persistor };
// };

// export const getStore = () => {
//   if (!store) {
//     const result = createStore();

//     if ("store" in result) {
//       store = result.store;
//     } else {
//       store = result;
//     }
//   }

//   return store;
// };

// export type RootState = ReturnType<typeof rootReducer>;
// export type AppDispatch = typeof store.dispatch;
