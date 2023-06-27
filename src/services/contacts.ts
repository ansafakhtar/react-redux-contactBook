import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Contact } from "../types/types";

export const contactBookApi = createApi({
  reducerPath: "addressBookApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  tagTypes: ["Contact"],
  endpoints: (builder) => ({
    getContacts: builder.query<Contact[], void>({
      query: () => "contacts",
    }),
    getContact: builder.query<Contact, string>({
      query: (id) => ({
        url: `contacts/${id}`,
        method: "GET",
      })
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
    updateContact: builder.mutation<Contact, Partial<Contact>>({
      query: (contact) => ({
        url: `contacts/${contact.id}`,
        method: "PUT",
        body: contact,
      }),
    }),     
  }),
});

export const {
  useGetContactsQuery,
  useGetContactQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useUpdateContactMutation,
} = contactBookApi;
