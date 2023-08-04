window.addEventListener('load', solution);

function solution() {
  let fullNameElement = document.getElementById('fname');
  let emailElement = document.getElementById('email');
  let phoneNumberElement = document.getElementById('phone');
  let addressElement = document.getElementById('address');
  let codeElement = document.getElementById('code');

  let submitBTNElement = document.getElementById('submitBTN');
  let listElement = document.getElementById('infoPreview');

  let editBTNElement = document.getElementById('editBTN');
  let continueBTNElement = document.getElementById('continueBTN');

  let fullNameLiEl = document.createElement('li');
  let emailLiEl = document.createElement('li');
  let phoneNumberLiEl = document.createElement('li');
  let addressLiEl = document.createElement('li');
  let codeLiEl = document.createElement('li');

  let divElement = document.getElementById('block');

  submitBTNElement.addEventListener('click', (e) => {
    if (fullNameElement.value && emailElement.value !== '') {
      fullNameLiEl.textContent = `Full Name: ${fullNameElement.value}`;
      listElement.appendChild(fullNameLiEl);

      emailLiEl.textContent = `Email: ${emailElement.value}`;
      listElement.appendChild(emailLiEl);

      phoneNumberLiEl.textContent = `Phone Number: ${phoneNumberElement.value}`;
      listElement.appendChild(phoneNumberLiEl);

      addressLiEl.textContent = `Address: ${addressElement.value}`;
      listElement.appendChild(addressLiEl);

      codeLiEl.textContent = `Postal Code: ${codeElement.value}`;
      listElement.appendChild(codeLiEl);

      fullNameElement.value = '';
      emailElement.value = '';
      phoneNumberElement.value = '';
      addressElement.value = '';
      codeElement.value = '';
      e.currentTarget.setAttribute('disabled', true);

      editBTNElement.removeAttribute('disabled');
      continueBTNElement.removeAttribute('disabled');
    }
  })

  editBTNElement.addEventListener('click', () => {
    fullNameLiEl = fullNameLiEl.textContent.split(': ');
    fullNameElement.value = fullNameLiEl[1];

    emailLiEl = emailLiEl.textContent.split(': ');
    emailElement.value = emailLiEl[1];

    phoneNumberLiEl = phoneNumberLiEl.textContent.split(': ');
    phoneNumberElement.value = phoneNumberLiEl[1];

    addressLiEl = addressLiEl.textContent.split(': ');
    addressElement.value = addressLiEl[1];

    codeLiEl = codeLiEl.textContent.split(': ');
    codeElement.value = codeLiEl[1];
    listElement.remove();

    editBTNElement.setAttribute('disabled', true);
    continueBTNElement.setAttribute('disabled', true);
    submitBTNElement.removeAttribute('disabled');
  })
  continueBTNElement.addEventListener('click', () => {
    divElement.innerHTML = '';
    let hElement = document.createElement('h3');
    hElement.textContent = 'Thank you for your reservation!'
    divElement.appendChild(hElement);
  })
} 