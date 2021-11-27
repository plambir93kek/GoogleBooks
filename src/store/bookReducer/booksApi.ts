import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Book } from "./bookReducer";

interface Response {
    totalItems: string;
    items: Book[]
};

const url = 'https://www.googleapis.com/books/v1/volumes';
const key = 'AIzaSyAQ71A1yhosE6yh36mcEYPTHY4tiKaIGbo';

export const fetchBooks = createAsyncThunk<
    Response,
    { sorting: string, category: string, name: string, startIndex: number }
>(
    'books/fetchBooks',
    async ({ sorting, category, name, startIndex }) => {
        const response = await axios.get<Response>(url, {
            params: {
                q: category==='all'? `${name}`: `${name}+subject:${category}`,
                key: key,
                maxResults:30,
                orderBy: sorting,
                startIndex
            }
        });
        console.log(response.data)
        return response.data;
    }
);

