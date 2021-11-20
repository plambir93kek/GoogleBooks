import React from 'react';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event'
import { store } from '../store/store';
import App from '../App';

const url= 'https://www.googleapis.com/books/v1/volumes?q=codes&key=AIzaSyAQ71A1yhosE6yh36mcEYPTHY4tiKaIGbo&maxResults=30&orderBy=relevance&startIndex=0'


export const handlers = [
    rest.get(url, (req, res, ctx) => {
        return res(ctx.json({
            totalItems: 900,
            items: [
                {
                    volumeInfo: {
                        title: 'Title',
                        authors: ['One', 'Two']
                    },
                    id:'1'
                }
            ]
        }), ctx.delay(150))
    })
];

const server = setupServer(...handlers)


beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())


test('test correct input and response', async () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    )
const searchInput = screen.getByPlaceholderText(/search/i);
const searchIcon = screen.getByLabelText(/search/i);

userEvent.type(searchInput, 'codes');
userEvent.click(searchIcon);

const title = await screen.findByText(/title/i);
expect(title).toBeInTheDocument();

// Также тестируем переходит на страницу книги
userEvent.click(title);
const description = screen.getByText(/description/i)
expect(description).toBeInTheDocument();

})
