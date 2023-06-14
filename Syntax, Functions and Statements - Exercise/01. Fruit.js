function solve(product, weigth, price){
    let kgWeigth = (weigth / 1000);
    let productPrice = kgWeigth * price;
    console.log(`I need $${productPrice.toFixed(2)} to buy ${kgWeigth.toFixed(2)} kilograms ${product}.`);
}
solve('orange', 2500, 1.80);