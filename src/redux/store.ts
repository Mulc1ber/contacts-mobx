import { configureStore } from "@reduxjs/toolkit";
import contactsReducer, {
  contactsMiddleware,
  contactsReducerPath,
} from "./contacts";

export const store = configureStore({
  reducer: {
    [contactsReducerPath]: contactsReducer,
  },
  devTools: true,
  middleware: (getDefaultMidleware) =>
    getDefaultMidleware().concat(contactsMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
