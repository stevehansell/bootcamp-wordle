import { GradeColor } from "./GuessGrader";

const Key = ({ character, onKeyClick, status }) => {
  return (
    <div
      style={{
        backgroundColor: GradeColor(status) || "rgb(211, 214, 218)",
        border: "1px solid rgb(211, 214, 218)",
        borderRadius: "0.25rem",
        cursor: "pointer",
        fontWeight: "600",
        minWidth: "3rem",
        padding: "1.5rem .5rem",
        textTransform: "uppercase",
      }}
      onClick={() => onKeyClick(character)}
    >
      {character}
    </div>
  );
};

export default Key;
