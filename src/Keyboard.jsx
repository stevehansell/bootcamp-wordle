import Key from "./Key";

export default function Keyboard({
  onKeyClick,
  onEnter,
  onBackspace,
  guessedCharacters,
  disabled,
}) {
  const keys = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["Enter", "z", "x", "c", "v", "b", "n", "m", "Backspace"],
  ];

  const handleKeyPress = (keyOrChar) => {
    if (disabled) return;

    if (keyOrChar.length === 1) {
      onKeyClick(keyOrChar);
    } else if (keyOrChar.toLowerCase() === "enter") {
      onEnter();
    } else if (keyOrChar.toLowerCase() === "backspace") {
      onBackspace();
    }
  };

  return (
    <section
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {keys.map((keyRow, rowIndex) => (
        <div
          key={rowIndex}
          style={{
            display: "flex",
            gap: "0.5rem",
            margin: "0.5rem",
          }}
        >
          {keyRow.map((key, keyIndex) => (
            <Key
              key={keyIndex}
              onKeyClick={handleKeyPress}
              status={guessedCharacters[key]}
              character={key}
            />
          ))}
        </div>
      ))}
    </section>
  );
}
