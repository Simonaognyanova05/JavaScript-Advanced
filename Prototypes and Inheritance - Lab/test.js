function Rectangle(a, b){
    this.a = a;
    this.b = b;
}
Rectangle.prototype.area = function(){
    return this.a * this.b;
}

let rec = new Rectangle(4,5);
console.log(rec.area());