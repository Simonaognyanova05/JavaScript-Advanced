function solve(input, typeOfSort){
    if(typeOfSort === 'asc'){
        input.sort((a,b) => a - b);
    }else if(typeOfSort === 'desc'){
        input.sort((a,b) => b - a);

    }
    return input;
}
solve([14, 7, 17, 6, 8], 'desc')
