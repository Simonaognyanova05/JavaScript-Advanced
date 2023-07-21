class Rectangle{
    constructor(a){
        this.a = a;
    }

    get peremeter(){
        return this.a * 4;
    }
}
let rectangle = new Rectangle(4);
console.log(rectangle.peremeter);
rectangle.a = 20;
console.log(rectangle.peremeter);
