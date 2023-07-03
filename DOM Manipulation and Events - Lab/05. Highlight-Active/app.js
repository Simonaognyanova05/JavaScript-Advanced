function focused() {
    let inputElement = Array.from(document.getElementsByTagName('input'));

    for (let input of inputElement) {
        input.addEventListener('focus', (e) => {
            e.target.parentNode.classList.add('focused');
        })
        input.addEventListener('blur', (e) => {
            e.target.parentNode.classList.remove('focused');
        })
    }
}