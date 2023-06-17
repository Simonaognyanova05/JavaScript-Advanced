function solve(arr, rotation){
    for(let i = 0; i < rotation; i++){
        let last = arr.pop();
        arr.unshift(last);
    }
    console.log(arr.join(' '));
}
solve(['1',
'2',
'3',
'4'],
2);