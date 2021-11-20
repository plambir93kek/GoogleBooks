import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchParamsAction, SearchState } from "./types";


const initialState: SearchState = {
    name: '',
    category: 'all',
    sorting: 'relevance',
    startIndex: 0,
    enableSearch: true
}

const searchReducer = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchParams: (state, action:PayloadAction<SearchParamsAction>) => {
            state.category=action.payload.category;
            state.name = action.payload.name;
            state.sorting = action.payload.sorting;
        },
        setStartIndex: (state, action) => {
            state.startIndex = action.payload
        },
        setEnableSearch: (state, action) => {
            state.enableSearch = action.payload;
        }
    }
});

export default searchReducer.reducer;
export const {setSearchParams, setStartIndex, setEnableSearch} = searchReducer.actions;
