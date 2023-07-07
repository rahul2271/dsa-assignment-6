function generateMatrix(n) {
    // Create an empty n x n matrix
    const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
  
    let num = 1; // Starting number
    let topRow = 0; // Index of the top row
    let bottomRow = n - 1; // Index of the bottom row
    let leftColumn = 0; // Index of the left column
    let rightColumn = n - 1; // Index of the right column
  
    while (topRow <= bottomRow && leftColumn <= rightColumn) {
      // Traverse the top row from left to right
      for (let i = leftColumn; i <= rightColumn; i++) {
        matrix[topRow][i] = num++;
      }
      topRow++;
  
      // Traverse the right column from top to bottom
      for (let i = topRow; i <= bottomRow; i++) {
        matrix[i][rightColumn] = num++;
      }
      rightColumn--;
  
      // Traverse the bottom row from right to left
      for (let i = rightColumn; i >= leftColumn; i--) {
        matrix[bottomRow][i] = num++;
      }
      bottomRow--;
  
      // Traverse the left column from bottom to top
      for (let i = bottomRow; i >= topRow; i--) {
        matrix[i][leftColumn] = num++;
      }
      leftColumn++;
    }
  
    return matrix;
  }
  
  // Example usage:
  const n = 3;
  const spiralMatrix = generateMatrix(n);
  console.log(spiralMatrix);
  