const products = [
  { name: "홍길동", age: 24 },
  { name: "임꺽정", age: 50 },
  { name: "일지매", age: 27 },
  { name: "이지매", age: 29 },
  { name: "삼지매", age: 29 }
];

const add = (a, b) => a + b;
// const add2 = (a, b, c, d) => {
//   console.log(a);
//   console.log(b);
//   console.log(c);
//   console.log(d);
// };
// console.log(
//   reduce(add,map(p=>p.age, filter(p=>p.age>25, products)))
// );

console.log(
  products
    .filter(p => p.age > 25)
    .map(p => p.age)
    .reduce(add)
);

const groupBy = (objArry, property) => {
  return objArry.reduce((acc, obj) => {
    let key = obj[property];
    console.log(acc);
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
};
const pe = groupBy(products, "age");
console.log("result", pe);
