function solve(arr, status) {
    class Destination {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    let result = [];
    arr.map((el) => {
        let [destination, price, status] = el.split('|');
        price = Number(price);
        result.push(new Destination(destination, price, status));
    });

    return result.sort((a,b) => {
        if(typeof a[status] == 'number'){
            return a[status] - b[status];
        }else{
            return a[status].localeCompare(b[status]);
        }
    })
}
solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status');