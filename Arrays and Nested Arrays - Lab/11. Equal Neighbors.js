function countEqualPairs(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let count = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            // Check right neighbor
            if (j + 1 < cols && matrix[i][j] === matrix[i][j + 1]) {
                count++;
            }

            // Check bottom neighbor
            if (i + 1 < rows && matrix[i][j] === matrix[i + 1][j]) {
                count++;
            }
        }
    }

    return count;
}
const matrix = [
    ['apple', 'banana', 'apple'],
    ['orange', 'pear', 'banana'],
    ['apple', 'banana', 'banana']
];

const equalPairs = countEqualPairs(matrix);
console.log(equalPairs); // Output: 3
