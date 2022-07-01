import { GradeColor } from "./GuessGrader";

const Guess = ({ word, grade }) => {
  const lettersRemaining = 5 - word.length;
  const wordInCharacters = word
    .split("")
    .concat(Array(lettersRemaining).fill(""));

  return (
    <section style={{ display: "flex", gap: "0.25rem" }}>
      {wordInCharacters.map((character, index) => (
        <LetterBox character={character} grade={grade[index]} key={index} />
      ))}
    </section>
  );
};

const LetterBox = ({ character, grade }) => {
  return (
    <span
      style={{
        alignItems: "center",
        backgroundColor: GradeColor(grade),
        border: "1px solid #e3e3e3",
        color: grade ? "#fff" : "#333",
        display: "flex",
        fontWeight: 800,
        height: "4rem",
        margin: "0.5rem 0",
        textAlign: "center",
        textTransform: "uppercase",
        verticalAlign: "middle",
        width: "3rem",
      }}
    >
      <span style={{ width: 100 }}>{character}</span>
    </span>
  );
};

export default Guess;
