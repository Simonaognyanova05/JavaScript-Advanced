function solve(input) {
    let arr = input.split(/[\W]+/gm);
    if(arr[arr.length - 1] === ''){
        arr.pop();
    }
    console.log(arr.map(a => a.toUpperCase()).join(', '));
}
solve('Hi, how are you?')