function solve(object) {
    let car = { model: '', engine: {}, carriage: {}, wheels: [] };
    car.model = object.model;
    car.engine.power = object.power;

    if (car.engine.power <= 90) {
        car.engine.power = 90;
        car.engine.volume = 1800;
    } else if (car.engine.power >= 90 && car.engine.power <= 120) {
        ю
        car.engine.power = 120;
        car.engine.volume = 2400;
    } else if (car.engine.power <= 200) {
        car.engine.power = 200;

        car.engine.volume = 3500;
    }
    car.carriage.type = object.carriage,
        car.carriage.color = object.color;
    if (object.wheelsize % 2 == 0) {
        object.wheelsize -= 1;
    } else {
        object.wheelsize = object.wheelsize;
    }
    car.wheels.push(object.wheelsize);
    car.wheels.push(object.wheelsize);
    car.wheels.push(object.wheelsize);
    car.wheels.push(object.wheelsize);

    return car;

}
let input = {
    model: 'Brichka',
    power: 65,
    color: 'white',
    carriage: 'hatchback',
    wheelsize: 16
};
console.log(solve(input));