function rectangle(width, height, color){
    let first = color[0].toUpperCase();
    let sliced = color.slice(1, color.length);
    color = first + sliced;
    let rectangle = {width, height, color, calcArea(){
        return width * height
    }};
    return rectangle;
}
let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea())