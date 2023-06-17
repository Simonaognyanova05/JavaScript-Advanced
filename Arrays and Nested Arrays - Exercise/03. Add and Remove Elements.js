function solve(arr) {
    let newArr = [];
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        if (arr[i] == "add") {
            newArr.push(i + 1);
        } else if (arr[i] == "remove") {
            newArr.pop();
        }
    }
    if (newArr.length === 0) {
        console.log('Empty');
    } else {
        console.log(newArr.join('\n'));
    }
}
solve(['add',
    'add',
    'remove',
    'add',
    'add']);