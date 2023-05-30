// import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
// import { RootState, AppThunk } from "../store/store"
// import { Contact, Contacts } from "../types/types";


// export const fetchPersons = createAsyncThunk('addressBook/fetchPersons', async () => {
//   const response = await axios.get<Person[]>(apiUrl);
//   return response.data;
// });

// export const addPerson = createAsyncThunk(
//   'addressBook/addPerson',
//   async (person: Person) => {
//     const response = await axios.post<Person>(apiUrl, person);
//     return response.data;
//   }
// );

// export const deletePerson = createAsyncThunk(
//   'addressBook/deletePerson',
//   async (id: number) => {
//     await axios.delete(`${apiUrl}/${id}`);
//     return id;
//   }
// );

// const addressBookSlice = createSlice({
//   name: 'addressBook',
//   initialState: { persons: [] as Person[] },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(fetchPersons.fulfilled, (state, action: PayloadAction<Person[]>) => {
//       state.persons = action.payload;
//     });
//     builder.addCase(addPerson.fulfilled, (state, action: PayloadAction<Person>) => {
//       state.persons.push(action.payload);
//     });
//     builder.addCase(deletePerson.fulfilled, (state, action: PayloadAction<number>) => {
//       state.persons = state.persons.filter((person) => person.id !== action.payload);
//     });
//   },
// });

// export default addressBookSlice.reducer;

