const matrix = (n) => {
  const alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  const results = [];
  for (let i = 0; i < n; i++) {
    results.push([]);
  }
  let counter = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;
  while (startColumn <= endColumn && startRow <= endRow) {
    // Top row
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = alpha[counter-1];

      counter++;
    }
    startRow++;
// Right column
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = alpha[counter-1];
      counter++;
    }
    endColumn--;
// Bottom row
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = alpha[counter-1];
      counter++;
    }
    endRow--;
// start column
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = alpha[counter-1];
      counter++;
    }
    startColumn++;
  }
  return results;
}

console.log(matrix(3))
console.log(matrix(5))