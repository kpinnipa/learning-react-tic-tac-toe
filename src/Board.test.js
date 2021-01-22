import { render, fireEvent } from '@testing-library/react';
import Board from './Board';

test(' Board should get re-rendered on each click, with Xs and Os appearing on alternating clicks.', () => {
    const board = render(<Board initialSquares={Array(9).fill(null)}/>); // 
    const buttons = board.queryAllByRole('button'); // 
    fireEvent.click(buttons[0]);
    expect(buttons[0].innerHTML).toBe('X'); 
    fireEvent.click(buttons[1]);
    expect(buttons[1].innerHTML).toBe('O');
});

test('status message displaying player should alternate between X and O', () => {
    const board = render(<Board initialSquares={Array(9).fill(null)}/>); 
    const buttons = board.queryAllByRole('button');
    const message = board.getByText("Next player", {exact : false}); 
    expect(message.innerHTML).toBe('Next player: X'); 
    fireEvent.click(buttons[0]);
    expect(message.innerHTML).toBe('Next player: O'); 
    fireEvent.click(buttons[1]);
    expect(message.innerHTML).toBe('Next player: X');
});