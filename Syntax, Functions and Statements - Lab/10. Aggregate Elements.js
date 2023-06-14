function solve(input){
    let sum = 0;
    let sum2 = 0;

    let concate = '';

    for(let el of input){
        sum += el;
        sum2 += 1/el;
        concate += el;
    }
    console.log(sum);
    console.log(sum2);
    console.log(concate);
}
solve([1, 2, 3]);