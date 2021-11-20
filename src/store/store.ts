import { configureStore } from "@reduxjs/toolkit";
import bookReducer, { booksAdapter } from "./bookReducer/bookReducer";
import searchReducer from "./searchReducer/searchReducer";

export const store = configureStore({
    reducer: {
        books: bookReducer,
        search : searchReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export const booksSelectors = booksAdapter.getSelectors<RootState>(
    (state) => state.books
  );
export type AppDispatch = typeof store.dispatch;