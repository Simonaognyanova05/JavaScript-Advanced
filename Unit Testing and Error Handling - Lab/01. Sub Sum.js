function solve(arr, param1, param2) {
    if (!Array.isArray(arr)) {
        return NaN;
    }

    let startIndex = Math.max(param1, 0);
    let endIndex = Math.min(param2, arr.length - 1);

    let subArr = arr.slice(startIndex, endIndex + 1);
    let sum = subArr.reduce((a, x) => a + Number(x), 0);
    
    return sum;
}
console.log(solve([10, 'twenty', 30, 40], 0, 2));