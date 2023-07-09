function solution(){
    let text = '';
    return {
        append(string){
            text += string;
        },
        removeStart(n){
            text = text.slice(n, text.length);
        },
        removeEnd(n){
            text = text.slice(0, -n);
        },
        print(){
            console.log(text);
        }
    }
}
let secondZeroTest = solution();
secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();