function toggle() {
    let button = document.querySelector('.button');
    let extra = document.getElementById('extra');
    if(button.textContent === 'Less'){
        button.textContent = 'More';
        extra.style.display = 'none';
    }else{
        button.textContent = 'Less';
        extra.style.display = 'block';
    }
}