import { contactsApiSlice } from "./api";

const reducer = contactsApiSlice.reducer;

export default reducer;

export const { useGetContactsQuery, useGetGroupsQuery, useGetFavoritesQuery } =
  contactsApiSlice;

export const contactsReducerPath = contactsApiSlice.reducerPath;
export const contactsMiddleware = contactsApiSlice.middleware;
