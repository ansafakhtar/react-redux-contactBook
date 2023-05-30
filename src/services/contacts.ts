import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Contact } from "../types/types";

export const contactBookApi = createApi({
  reducerPath: "addressBookApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/" }),
  tagTypes: ["Contact"],
  endpoints: (builder) => ({
    getContacts: builder.query<Contact[], void>({
      query: () => "contacts",
      // providesTags: (result) =>
      //  result
      //     ? [
      //         ...result.map(({ firstName }) => ({ type: 'Contact' as const, firstName })),
      //         { type: 'Contact', id: 'LIST' },
      //       ]
      //     : [{ type: 'Contact', id: 'LIST' }],
    }),
    addContact: builder.mutation<Contact, Partial<Contact>>({
      query: (contact) => ({
        url: "contacts",
        method: "POST",
        body: contact,
      }),
    }),
    deleteContact: builder.mutation<void, number>({
      query: (id) => ({
        url: `contacts/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactBookApi;
