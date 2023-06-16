function solve(arr){
    let bigArr = [];
    let theBiggest1 = 0;
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            bigArr.push(arr[i][j]);  
        }
    }
    let sorted = bigArr.sort((a,b) => b - a);
    theBiggest1 = sorted.shift();
    console.log(theBiggest1)
}
solve([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]);