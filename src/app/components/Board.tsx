import React, { useState } from 'react';
import Square from './Square';

function Board(): JSX.Element {
  const [nextPlayer, setNextPlayer] = useState('X');
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(id) {
    const newSquares = [...squares];
    newSquares[id] = nextPlayer;
    setNextPlayer((prev) => (prev === 'X' ? 'O' : 'X'));
    setSquares(newSquares);
  }

  function renderSquare(i: number) {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  }

  const status = `Next player: ${nextPlayer}`;

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default Board;
