function colorize() {
    let elements = document.getElementsByTagName('tr');

    for(let i = 1; i < elements.length; i++){
        if(i % 2 !== 0){
            elements[i].style.background = 'Teal';
        }
    }
}