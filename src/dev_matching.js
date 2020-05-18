const f = (p, s) => {
  let answer = 0;

  const ps = p.split("");
  const ss = s.split("");

  for (let n in ps) {
    answer += minFind(ps[n], ss[n]);
  }

  return answer;
};

const minFind = (p, c) => {
  let min = 0;
  p = parseInt(p, 10);
  c = parseInt(c, 10);

  if (p >= c) {
    let a = c + 10 - p;
    let b = p - c;
    min = a > b ? b : a;
  } else {
    let a = p + 10 - c;
    let b = c - p;
    min = a > b ? b : a;
  }

  console.log(min);
  return min;
};

f("82195", "64723");
