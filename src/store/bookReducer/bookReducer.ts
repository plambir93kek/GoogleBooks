import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchBooks} from "./booksApi";

interface BooksState {
  totalItems: string;
  items: Book[]
}

export interface Book {
   id: string;
   volumeInfo:{
       title: string;
       authors: string[];
       description: string;
       categories: string[];
       imageLinks: {
        thumbnail: string;
       }
   }
};

export const booksAdapter = createEntityAdapter<Book>({
    selectId: (book) => book.id
})

//Блок try/catch используется в случае если ответ пришел со статусом 200, но при этом пустой
const bookReducer = createSlice({
    name: 'books',
    initialState: booksAdapter.getInitialState({
      loading: false, 
      loadingMore: false, 
      noResults: false, 
      totalItems: '0', 
      noMoreResults: false
    }),
    reducers:{
      removeAllBooks: booksAdapter.removeAll
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBooks.fulfilled, (state, action:PayloadAction<BooksState>) => {
          if(state.ids.length > 0){
            try{
              booksAdapter.addMany(state, action.payload.items);
            }catch(e){
               state.noMoreResults = true;
            }
            state.loadingMore=false;
          } else {
            try{
              booksAdapter.setAll(state, action.payload.items);
              state.noResults=false;
              state.totalItems=action.payload.totalItems;
              state.noMoreResults = false;
            } catch(e){
              state.noResults=true;
              state.totalItems='0';
            }
            state.loading = false;
          }
        })
        builder.addCase(fetchBooks.pending, (state) => {
          if(state.ids.length > 0){
             state.loadingMore = true;
          }else {
            state.loading = true;
          }
        })
        builder.addCase(fetchBooks.rejected, (state) => {
           state.noResults = true;
           state.loading = false;
           state.totalItems='0';
        })
        
    }
});

export default bookReducer.reducer;
export const {removeAllBooks} = bookReducer.actions;
