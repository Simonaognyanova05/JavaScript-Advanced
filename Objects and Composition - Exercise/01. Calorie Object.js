function solve(input){
    let object = {};
    for(let i = 0; i < input.length; i+=2){
        let product = input[i];
        let calories = Number(input[i+1]);

        object[product] = calories;
    }
    return object;
}
solve(['Yoghurt', '48', 'Rise', '138',
'Apple', '52'] );