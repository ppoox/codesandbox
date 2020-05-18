function solution(office, r, c, move) {
  const direction = ["notrh", "east", "south", "west"];
  let answer = 0;
  let head = direction[0];
  answer += office[r][c];
  office[r][c] = 0;

  for (let i = 0; i < move.length; i++) {
    if (move[i] === "go") {
      let nextR = r;
      let nextC = c;

      if (head === direction[0]) {
        nextR--;
      } else if (head === direction[1]) {
        nextC++;
      } else if (head === direction[2]) {
        nextR++;
      } else if (head === direction[3]) {
        nextC--;
      }
      if (
        nextR < 0 ||
        nextC < 0 ||
        nextR >= office.length ||
        nextC >= office[0].length
      ) {
        continue;
      }
      if (office[nextR][nextC] === -1) {
        continue;
      }
      r = nextR;
      c = nextC;

      answer += office[r][c];
      office[r][c] = 0;
    } else if (move[i] === "right") {
      if (head === "west") {
        head = direction[0];
      } else {
        head = direction[direction.indexOf(head) + 1];
      }
    } else if (move[i] === "left") {
      if (head === "notrh") {
        head = direction[3];
      } else {
        head = direction[direction.indexOf(head) - 1];
      }
    }
  }

  return answer;
}

solution([[5, -1, 4], [6, 3, -1], [2, -1, 1]], 1, 0, [
  "right",
  "go",
  "go",
  "right",
  "right",
  "go",
  "go",
  "right",
  "go",
  "right",
  "right",
  "go",
  "go"
]);
