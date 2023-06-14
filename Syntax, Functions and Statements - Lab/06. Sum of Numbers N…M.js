function solve(num1, num2){
    let newNum1 = Number(num1);
    let newNum2 = Number(num2);
    let sum = 0;
    for(let i = newNum1; i <= newNum2; i++){
        sum += i;
    }
    console.log(sum);
}
solve('-8', '20');