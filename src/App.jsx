import { useState } from 'react';

import GameBoard from './components/GameBoard';
import Player from './components/Player';
import Log from './components/Log';

import { WINNING_COMBINATIONS } from './winning-combinations';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let activePlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') activePlayer = 'O';
  return activePlayer;
}

export default function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = initialGameBoard;

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  function handleSelectSquare(rowIdx, colIdx) {
    setGameTurns(prevTurns => {
      const square = { row: rowIdx, col: colIdx };
      const currentPlayer = deriveActivePlayer(prevTurns);

      return [{ square, player: currentPlayer }, ...prevTurns];
    });
  }

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquare = gameBoard;
    const secondSquare = gameBoard;
    const thirdSquare = gameBoard;
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === 'X'}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === 'O'}
          />
        </ol>
        <GameBoard board={gameBoard} onSelectSquare={handleSelectSquare} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}
