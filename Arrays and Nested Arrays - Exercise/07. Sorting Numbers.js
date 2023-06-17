function solve(arr) {
    arr.sort((a, b) => a - b);
    let newArr = [];
    while (arr.length > 0) {
        let firtSide = arr.shift();
        newArr.push(firtSide);

        let secondSide = arr.pop();
        newArr.push(secondSide);
    }
    return newArr;
}
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);