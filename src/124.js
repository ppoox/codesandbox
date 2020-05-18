function solution(n) {
  let answer = "";
  let mod = 0;

  while (n > 0) {
    mod = n % 3;
    n = parseInt(n / 3, 10);

    if (mod === 0) {
      mod = 4;
      n--;
    }

    answer = mod + answer;
  }

  // console.log(answer);

  return answer;
}

solution(1);
solution(2);
solution(3);
solution(4);
solution(5);
solution(6);
solution(7);
solution(8);
solution(9);
solution(10);
solution(13);

function change124(n) {
  console.log(n);
  return n === 0
    ? ""
    : change124(parseInt((n - 1) / 3, 10)) + [1, 2, 4][(n - 1) % 3];
}

console.log(change124(13));
