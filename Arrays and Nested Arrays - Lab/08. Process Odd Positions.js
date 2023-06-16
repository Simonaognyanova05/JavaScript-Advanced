function solve(input){
    let arr = [];
    for(let i = 1; i <= input.length; i+=2){
        arr.push(input[i]);
    }
    
    console.log(arr.map(a => a * 2).reverse().join(' '));
}
solve([3, 0, 10, 4, 7, 3]);