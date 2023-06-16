function solve(input){
    let arr = [];
    for(let el of input){
        if(el < 0){
            arr.unshift(el);
        }else{
            arr.push(el);
        }
    }
    console.log(arr);
}
solve([3, -2, 0, -1]);