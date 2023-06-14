function solve(r){
    if(typeof(r) == 'number'){
        let s = Math.PI * (r ** 2); 
        console.log(s.toFixed(2));
    }else{
        console.log(`We can not calculate the circle area, because we receive a ${typeof(r)}.`);
    }
    
}
solve(5);