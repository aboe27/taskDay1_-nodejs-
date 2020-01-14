const input = [10, 20, 30];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

var sum = input.reduce(reducer) / input.length;



console.log(sum);


