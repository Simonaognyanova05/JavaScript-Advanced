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

//Unit test
function test(){
    let acturalSum = solve([10, 20, 30, 40, 50, 60], 3, 300);
    let sum = 150;

    if(acturalSum == sum){
        console.log('yes');
    }else{
        console.log('no');
    }
}
test();