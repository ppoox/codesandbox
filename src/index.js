import "./styles.css";

const a1 = [1, 2, 3, 4, 5];

//a1.map((v, index) => console.log(v, index));

// const rsFilter = a1.filter(function(v, index) {
//   return v > 3;
// });
//console.log(rsFilter);

// const total = a1.reduce((acc, cur, index) => {
//   return console.log(cur);
// });
// console.log(total);

a1.unshift(0);
console.log(a1);

// const iter = a1[Symbol.iterator]();
// console.log(iter.next());

const map = new Map();
map.set("key1", "value1");
map.set("key2", "value2");

map.set(NaN, 1);
map.set(NaN, 2);
// console.log(map.get(NaN));
// console.log(map.get(NaN));

// for (let [key, value] of map) {
//   console.log(key, value);
// }

// for (let a in map) {
//   console.log(a);
// }

// map.forEach((x, y) => console.log(x, y));

const set = new Set();
set.add("s", 1);
set.add(2);
set.add(3);

//console.log(set.keys().next());

const add = (a, b) => {
  return a + b;
};
const multi = (a, b) => {
  return a * b;
};
const curry = f => (a, ..._) => (_.length ? f(a, ..._) : (..._) => f(a, ..._));

const cc = curry(add(1, 2), multi(2, 3));

console.log(cc());

//const tc = curry(((a,b) => a*b)((c,d) => c+d));

//console.log(tc(3)(2));

const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);

const ta = () => {
  console.log("ta");
  return "q";
};
const tb = e => {
  console.log("tb");
  return "w";
};
const pp = pipe(
  ta,
  tb
);
console.log(pp());
