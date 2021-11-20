import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event'
import { store } from '../store/store';
import App from '../App';


test('test empty input request', async () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    )
const searchInput = screen.getByPlaceholderText(/search/i);
const searchIcon = screen.getByLabelText(/search/i);

userEvent.click(searchIcon);

const noResultsText = await screen.findByText(/nothing/i);
expect(noResultsText).toBeInTheDocument()
})
