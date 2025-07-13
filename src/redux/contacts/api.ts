import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ContactDto } from "src/types/dto/ContactDto";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";

export const contactsApiSlice = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://mocki.io/v1" }),
  endpoints: (builder) => ({
    getContacts: builder.query<ContactDto[], void>({
      query: () => "/e004c65b-c085-4da0-b806-eb8e2f0dfc84",
    }),

    getGroups: builder.query<GroupContactsDto[], void>({
      query: () => "/a116c727-7531-4990-9a57-14469ad32128",
    }),

    getFavorites: builder.query<string[], void>({
      query: () => "/e004c65b-c085-4da0-b806-eb8e2f0dfc84",
      transformResponse: (contacts: ContactDto[]) => {
        return contacts.slice(0, 8).map((contact) => contact.id);
      },
    }),
  }),
});
