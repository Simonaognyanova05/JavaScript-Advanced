function solve(input){
    let sorted = input.sort((a, b) => a - b);
    let secondPart = Math.floor(sorted.length / 2);
    let arr = [];
    for(let i = secondPart; i < sorted.length; i++){
        arr.push(sorted[i]);
    }
    return arr;
}
solve([3, 19, 14, 7, 2, 19, 6]);