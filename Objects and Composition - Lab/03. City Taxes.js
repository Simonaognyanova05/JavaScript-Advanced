function solve(input) {
    let object = {};
    for (let el of input) {
        el = el.split(' <-> ');
        if (object.hasOwnProperty(el[0])) {
            object[el[0]] += Number(el[1]);
        } else {
            object[el[0]] = Number(el[1]);
        }
    }
    for (let key of Object.keys(object)) {
        console.log(`${key} : ${object[key]}`);
    }
}
solve();