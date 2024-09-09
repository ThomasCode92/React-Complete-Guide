import { useState } from 'react';

import GameBoard from './components/GameBoard';
import GameOver from './components/GameOver';
import Player from './components/Player';
import Log from './components/Log';

import { WINNING_COMBINATIONS } from './winning-combinations';

const PLAYERS = { X: 'Player 1', O: 'Player 2' };

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let activePlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') activePlayer = 'O';
  return activePlayer;
}

function deriveWinner(gameBoard, players) {
  let winner = null;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquare = gameBoard[combination[0].row][combination[0].column];
    const secondSquare = gameBoard[combination[1].row][combination[1].column];
    const thirdSquare = gameBoard[combination[2].row][combination[2].column];

    const allSquaresAreEqual =
      firstSquare &&
      firstSquare === secondSquare &&
      firstSquare === thirdSquare;

    if (allSquaresAreEqual) winner = players[firstSquare];
  }

  return winner;
}

function deriveGameBoard(gameTurns) {
  const gameBoard = [...INITIAL_GAME_BOARD.map(row => [...row])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return gameBoard;
}

export default function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState(PLAYERS);

  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIdx, colIdx) {
    setGameTurns(prevTurns => {
      const square = { row: rowIdx, col: colIdx };
      const currentPlayer = deriveActivePlayer(prevTurns);

      return [{ square, player: currentPlayer }, ...prevTurns];
    });
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers(prevPlayers => {
      return { ...prevPlayers, [symbol]: newName };
    });
  }

  function handleRestart() {
    setGameTurns([]);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName={PLAYERS.X}
            symbol="X"
            isActive={activePlayer === 'X'}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            initialName={PLAYERS.O}
            symbol="O"
            isActive={activePlayer === 'O'}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={handleRestart} />
        )}
        <GameBoard board={gameBoard} onSelectSquare={handleSelectSquare} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}
