function solve(input, pam1, pam2){
    let firstIndex = input.indexOf(pam1);
    let secondIndex = input.indexOf(pam2);

    let arr = input.slice(firstIndex, secondIndex + 1);
    return arr;
}
solve(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie');