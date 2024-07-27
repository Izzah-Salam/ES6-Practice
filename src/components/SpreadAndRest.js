// Spread : it take a group and try to spread into the multiple values
// rest : when you dont sure about the total numbers of argumnet so use rest parameter
//        and for list down you always loop through it

export default function SpreadAndRest() {
  // Spread Operator ;
  let arr = [3, 6, 8, 2, 1];
  console.log(...arr);

  // Rest parameter
  function SumValues(...args) {
    let sum = 0;
    for (const arg of args) {
      sum += arg;
    }

    return sum;
  }

  console.log(SumValues(2, 4, 1));
}
