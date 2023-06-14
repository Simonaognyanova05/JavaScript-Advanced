function solve(a,b){
  	for (let i = 1; i <= a && i <= b; i++) {
    	if( a % i == 0 && b % i == 0) {
      		divisor = i;
    	}
  	}
  	console.log(divisor);
}
solve(15, 5);