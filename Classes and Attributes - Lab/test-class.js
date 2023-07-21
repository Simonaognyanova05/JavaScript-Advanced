class Cat {
    constructor(name) {
        this.name = name;
    }
    printInfo(){
        return `The name of my cat is ${this.name}`;
    }
}
//First example
const cat = new Cat('white and orange', 'Maxi', 0);
const cat1 = new Cat('white', 'Lussi', 0);
const cat2 = new Cat('patterned', 'Darcy', 0);


console.log(cat.printInfo());
console.log(cat1.printInfo());
console.log(cat2.printInfo());

//Second Example
let catsNames = ['Maxi', 'Lussi', 'Darcy'];
let cats = catsNames.map(x => new Cat(x));
for (let el of cats) {
    console.log(el);
    //Third example
    console.log(el.printInfo());
}