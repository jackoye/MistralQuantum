// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MistralQuantum title', () => {
    render(<App />);
    const titleElement = screen.getByText(/MistralQuantum/i);
    expect(titleElement).toBeInTheDocument();
});
