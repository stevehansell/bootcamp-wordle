const GuessGrader = (guess, answer) => {
  return guess.split("").map((character, index) => {
    if (answer.includes(character)) {
      return answer[index] === character ? "CORRECT" : "PRESENT";
    }
    return "WRONG";
  });
};

export const GradeColor = (grade) => {
  let color;
  if (grade === "CORRECT") {
    color = "rgb(118, 166, 105)";
  } else if (grade === "PRESENT") {
    color = "#c9b458";
  } else if (grade === "WRONG") {
    color = "#666";
  }
  return color;
};

export default GuessGrader;
