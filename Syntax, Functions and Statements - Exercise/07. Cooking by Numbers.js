function solve(numberString, command, command1, command2, command3, command4){
    let number = Number(numberString);
    let arr = [command, command1, command2, command3, command4];
    for(let el of arr){
        if(el === 'chop'){
            number /= 2;
            console.log(number);
        }else if(el === 'dice'){
            number = Math.sqrt(number);
            console.log(number);
        }else if(el === 'spice'){
            number += 1;
            console.log(number);
        }else if(el === 'bake'){
            number *= 3;
            console.log(number);
        }else if(el === 'fillet'){
            number -= (0.2 * number);
            console.log(number);
        }
    }
    
}
solve('9', 'dice', 'spice', 'chop', 'bake',
'fillet');