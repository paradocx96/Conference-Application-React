import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});

// describe('Addition', () => {
//     it('knows that 2 and 2 make 4', () => {
//         expect(2 + 2).toBe(4);
//     });
//
//     // is equaivalent to
//
//     test('knows that 2 and 2 make 4', () => {
//         expect(2 + 2).toBe(4);
//     });
// });