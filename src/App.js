import "./App.css";
import Keyboard from "./Keyboard";
import Guess from "./Guess";
import { useState } from "react";
import { addCharacter, backspace } from "./WordBuilder";
import GuessGrader from "./GuessGrader";

const ANSWER = "react";

function App() {
  const [guesses, setGuesses] = useState(["", "", "", "", "", ""]);
  const [guessNumber, setGuessNumber] = useState(0);
  const [keysWithGrade, setKeysWithGrade] = useState({});
  const [gameOver, setGameOver] = useState(null);
  const [grades, setGrades] = useState(["", "", "", "", "", ""]);

  // This returns a data structure that looks like {'r': 'CORRECT', 'e': 'CORRECT', 'p': 'WRONG', 't': 'PRESENT'...}
  // This creates a mapping for the keyboard to indicate the state of each key as the user submits guesses
  const guessedKeysWithScore = (guess, scores) => {
    const obj = {};
    guess.split("").forEach((char, index) => (obj[char] = scores[index]));
    return obj;
  };

  const onKeyboardEnter = () => {
    const currentGuess = guesses[guessNumber];

    if (currentGuess.length !== 5) return;

    const currentGrades = [...grades];
    currentGrades[guessNumber] = GuessGrader(currentGuess, ANSWER);

    const scoredKeys = guessedKeysWithScore(
      currentGuess,
      GuessGrader(currentGuess, ANSWER)
    );

    setKeysWithGrade({ ...keysWithGrade, ...scoredKeys });
    setGrades(currentGrades);
    setGuessNumber(guessNumber + 1);

    if (currentGuess === ANSWER || guessNumber + 1 === 6) {
      setGameOver(guesses[guessNumber] === ANSWER ? "WON" : "LOST");
    }
  };

  const onKeyboardBackspace = () => {
    const currentGuess = guesses[guessNumber];
    const newGuesses = [...guesses];
    newGuesses[guessNumber] = backspace(currentGuess);
    setGuesses(newGuesses);
  };

  const onKeyboardClick = (character) => {
    const currentGuess = guesses[guessNumber];

    if (currentGuess.length < 5) {
      const newGuesses = [...guesses];
      newGuesses[guessNumber] = addCharacter(
        newGuesses[guessNumber],
        character
      );
      setGuesses(newGuesses);
    }
  };

  return (
    <div className="App">
      <h1>Wordle</h1>

      {gameOver === "WON" ? (
        <p
          style={{
            borderRadius: "0.5rem",
            boxShadow: "2px 2px 10px #666",
            display: "inline-block",
            padding: "1rem 3rem",
          }}
        >
          Splendid!
        </p>
      ) : null}

      {gameOver === "LOST" ? (
        <p
          style={{
            borderRadius: "0.5rem",
            boxShadow: "2px 2px 10px #666",
            display: "inline-block",
            padding: "1rem 3rem",
          }}
        >
          <strong>Womp!</strong>
          <h1>{ANSWER.toUpperCase()}</h1>
        </p>
      ) : null}

      <main
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: "5rem 0",
          width: "100%",
        }}
      >
        {guesses.map((word, index) => (
          <Guess word={word} grade={grades[index]} key={index} />
        ))}
      </main>

      <Keyboard
        onKeyClick={onKeyboardClick}
        onEnter={onKeyboardEnter}
        onBackspace={onKeyboardBackspace}
        guessedCharacters={keysWithGrade}
        disabled={gameOver}
      />
    </div>
  );
}

export default App;
