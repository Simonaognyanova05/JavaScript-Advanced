function createSortedList() {
    let arr = [];

    let result = {
        add,
        remove,
        get,
        size: 0,
    };
    return result;

    function add(num) {
        arr.push(num);
        this.size++;
        arr.sort((a, b) => a - b);
    }
    function remove(index){
        const valid = checkIndex(index);
        if (valid) {
            arr.splice(index, 1);
            this.size--;
        }
    }
    function get(index){
        const valid = checkIndex(index);

        if (valid) {
            return arr[index];
        }
    }
    function checkIndex(index) {
        return index >= 0 && index < arr.length;
    }
}
let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
