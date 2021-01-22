import { render } from '@testing-library/react';

// Square is a "default" export from Square.js, so we don't need
// curly braces around it like we do for render
import Square from './Square';

test('should render an empty Square', () => {
    const square = render(<Square value={null} />); // Line 1
    const button = square.getByRole('button'); // Line 2 -- The "role" here is according to the aria-role standard
    expect(button.innerHTML).toBe(''); // Line 3
});

test('should render a Square with X', () => {
    const square = render(<Square value={'X'} />); // Line 1
    const button = square.getByRole('button'); // Line 2 -- The "role" here is according to the aria-role standard
    expect(button.innerHTML).toBe('X'); // Line 3
});