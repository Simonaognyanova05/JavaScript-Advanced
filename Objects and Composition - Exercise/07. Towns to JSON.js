function solve(input) {
    let object = {};
    let info = [];
    for (let el of input) {
        el = el.split(' | ');
        let firstElement = el[0].split('| ');
        let Town = firstElement[1];
        let Latitude1 = Number(el[1]).toFixed(2);
        let lastElement = el[2].split(' |');
        let Longitude1 = Number(lastElement[0]).toFixed(2);

        let Longitude = Number(Longitude1);
        let Latitude = Number(Latitude1);


        object = { Town, Latitude, Longitude };
        info.push(object);
    }
    info.shift();
    let jsonString = JSON.stringify(info);
    console.log(jsonString)
}
solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);