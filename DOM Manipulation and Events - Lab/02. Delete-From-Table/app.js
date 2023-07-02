function deleteByEmail() {
    let inputElement = document.querySelector('input[name="email"]').value;
    let emails = document.querySelectorAll('tr td:nth-of-type(2)');

    let arrEmails = Array.from(emails);
    let findedEmail = arrEmails.find(x => x.textContent === inputElement);

    let divText = document.getElementById('result');

    if (arrEmails.includes(findedEmail)) {
        findedEmail.parentNode.remove();
        divText.textContent = 'Deleted.';
    }else{
        divText.textContent = 'Not found.';
    }
} 