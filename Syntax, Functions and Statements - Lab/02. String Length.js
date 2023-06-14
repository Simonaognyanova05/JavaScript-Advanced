function solve(param1, param2, param3){
    let sum = param1.length + param2.length + param3.length;
    console.log(sum);
    let average = (sum / 3).toFixed(0);
    console.log(average);
}
solve('chocolate', 'ice cream', 'cake');