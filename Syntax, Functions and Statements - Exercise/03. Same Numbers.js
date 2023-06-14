function solve(number){
    let arr = number.toString().split('');
    let sum = 0;
    let boolean = false;
    for(let i = 0; i < arr.length; i++){
        if(arr[0] === arr[i]){
            boolean = true;
        }else{
            boolean = false;

        }
    }
    for(let el of arr){
        sum += Number(el);
    }
    console.log(boolean);

    console.log(sum);
}
solve(11234);