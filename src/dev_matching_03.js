function solution(numbers, K) {
  let answer = 0;
  let needSwap = [];
  for (let i = 0; i < numbers.length; i++) {
    if (i + 1 >= numbers.length) {
      break;
    }
    if (K < Math.abs(numbers[i] - numbers[i + 1])) {
      needSwap.push([i, i + 1]);
    }
  }
  console.log(needSwap);
  return answer;
}

const swap = () => {};

solution([10, 40, 30, 20], 20);
