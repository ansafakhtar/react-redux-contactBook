import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { contactBookApi } from "../services/contacts";

export const store = configureStore({
  reducer: {
    [contactBookApi.reducerPath]: contactBookApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactBookApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
