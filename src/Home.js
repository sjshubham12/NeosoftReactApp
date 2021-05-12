function * withYield(a) {
  let b = 5;
  yield a + b;
  b = 6; // it will be re-assigned after first execution
  yield a * b;
}

const calcSix = withYield(6);

console.log("shubham value",calcSix.next().value); // 11
console.log("value of jain",calcSix.next().value); // 36