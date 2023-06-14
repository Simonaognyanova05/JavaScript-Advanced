function solve(num1, num2, num3){
    let dateInput = `${num1}-${num2}-${num3};`
    let date = new Date(dateInput);
    date.setDate(date.getDate() - 1);
    console.log(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`);
}
solve(2016, 9, 30);