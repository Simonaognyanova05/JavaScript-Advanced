function solve(el1, el2, el3){
    if(el3 === '+'){
        console.log(el1 + el2);
    }else if(el3 === '-'){
        console.log(el1 - el2);
    }else if(el3 === '*'){
        console.log(el1 * el2);
    }else if(el3 === '/'){
        console.log(el1 / el2);
    }else if(el3 === '%'){
        console.log(el1 % el2);
    }else if(el3 === '**'){
        console.log(el1 ** el2);
    }
}
solve(5, 6, '+');