import { useEffect, useState } from "react";

export default function Tictactoe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [mode, setMode] = useState("human");
  const [difficulty, setDifficulty] = useState("easy"); // Default difficulty is 'easy'
  const [firstTurn, setFirstTurn] = useState("player"); // Default first turn is player

  useEffect(() => {
    if (mode === "computer" && !isXNext && !winner) {
      const computerMove = getComputerMove();
      setTimeout(() => {
        handleClick(computerMove);
      }, 500); // Delay for computer move visualization
    }
  }, [isXNext, mode, winner, difficulty]);

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = board.slice();
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const getComputerMove = () => {
    if (difficulty === "easy") {
      // Random move for easy difficulty
      return getRandomMove();
    } else if (difficulty === "hard") {
      // Minimax move for hard difficulty
      const bestMove = minimax(board, "X").index;
      return bestMove;
    }
  };

  const getRandomMove = () => {
    // Simple random move for the computer
    const emptySquares = board.reduce((acc, value, index) => {
      if (!value) acc.push(index);
      return acc;
    }, []);
    return emptySquares[Math.floor(Math.random() * emptySquares.length)];
  };

  const minimax = (currentBoard, player, depth = 0) => {
    // Base cases: check if game is over or maximum depth reached
    const winner = calculateWinner(currentBoard);
    if (winner === "X") {
      return { score: 10 - depth };
    } else if (winner === "O") {
      return { score: depth - 10 };
    } else if (winner === null && !currentBoard.includes(null)) {
      return { score: 0 };
    }

    // Initialize moves array to store all possible moves
    let moves = [];

    // Loop through empty squares and recursively evaluate each move
    for (let i = 0; i < currentBoard.length; i++) {
      if (!currentBoard[i]) {
        let move = {};
        move.index = i;
        currentBoard[i] = player;

        // Recursively call minimax to simulate the game
        if (player === "X") {
          let result = minimax(currentBoard, "O", depth + 1);
          move.score = result.score;
        } else {
          let result = minimax(currentBoard, "X", depth + 1);
          move.score = result.score;
        }

        // Undo the move
        currentBoard[i] = null;

        // Push the move to the moves array
        moves.push(move);
      }
    }

    // Evaluate the best move for the current player
    let bestMove;
    if (player === "X") {
      let bestScore = -Infinity;
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score > bestScore) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score < bestScore) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    }

    // Return the best move
    return moves[bestMove];
  };

  const renderSquare = (index) => {
    return (
      <g key={index} onClick={() => handleClick(index)}>
        <rect
          x={(index % 3) * 100}
          y={Math.floor(index / 3) * 100}
          width="100"
          height="100"
          fill="#fff"
          stroke="#000"
          className="cursor-pointer"
        />
        <text
          x={(index % 3) * 100 + 50}
          y={Math.floor(index / 3) * 100 + 70}
          textAnchor="middle"
          fontSize="48"
          fill="black"
          className="select-none"
        >
          {board[index]}
        </text>
      </g>
    );
  };

  const renderRestartButton = () => {
    return (
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={() => resetGame()}
      >
        Restart Game
      </button>
    );
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
    if (firstTurn === "computer" && mode === "computer") {
      setIsXNext(false);
    }
  };

  const toggleMode = () => {
    setMode(mode === "human" ? "computer" : "human");
    resetGame(); // Reset game when mode changes
  };

  const toggleDifficulty = () => {
    setDifficulty(difficulty === "easy" ? "hard" : "easy");
    resetGame(); // Reset game when difficulty changes
  };

  const toggleFirstTurn = () => {
    setFirstTurn(firstTurn === "player" ? "computer" : "player");
    resetGame(); // Reset game when first turn changes
  };

  useEffect(() => {
    const newWinner = calculateWinner(board);
    if (newWinner) setWinner(newWinner);
  }, [board]);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  return (
    <div className="flex flex-col items-center">
      <svg width="300" height="300" className="border-2 border-black">
        {board.map((_, index) => renderSquare(index))}
      </svg>
      <div className="flex flex-col items-center mt-4">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={toggleMode}>
          Toggle Mode (Currently: {mode})
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mt-2"
          onClick={toggleDifficulty}
        >
          Toggle Difficulty (Currently: {difficulty})
        </button>
        <button
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mt-2"
          onClick={toggleFirstTurn}
        >
          Toggle First Turn (Currently: {firstTurn})
        </button>
        {winner && <div className="text-xl font-bold mt-4">Winner: {winner}</div>}
        {renderRestartButton()}
      </div>
    </div>
  );
}
