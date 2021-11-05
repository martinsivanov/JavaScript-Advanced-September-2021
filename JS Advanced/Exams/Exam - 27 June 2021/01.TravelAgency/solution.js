window.addEventListener('load', solution);

function solution() {
  let infoPreviewUl = document.querySelector('#infoPreview');

  let inputName = document.querySelector('#fname');
  let inputEmail = document.querySelector('#email');
  let inputPhone = document.querySelector('#phone');
  let inputAddress = document.querySelector('#address');
  let inputCode = document.querySelector('#code');

  let submitBtn = document.querySelector('#submitBTN');
  submitBtn.addEventListener('click', submit)

  let buttonEdit = document.querySelector('#editBTN');
  buttonEdit.addEventListener('click', edit);

  let buttonContinue = document.querySelector('#continueBTN');
  buttonContinue.addEventListener('click', continueBtn);

  function continueBtn(e) {
    let block = document.getElementById('block');
    let childs = Array.from(block.children);
    for (let i = 0; i < childs.length; i++) {
      childs[i].remove();
    }
    let buyMsg = document.createElement('h3');
    buyMsg.textContent = 'Thank you for your reservation!';

    block.appendChild(buyMsg);
  }

  function submit(ev) {

    let name = inputName.value.trim();
    let email = inputEmail.value.trim();
    let phone = inputPhone.value.trim();
    let address = inputAddress.value.trim();
    let code = inputCode.value.trim();

    //fullNameField.value.length > 0 && fullNameField.value != ' ' && emailField.value.length > 0 && emailField.value != ' '
    if (name != ' ' && email != ' ' && name.length > 0 && email.length > 0) {


      let li1 = e('li', {}, `Full Name: ${name}`);
      let li2 = e('li', {}, `Email: ${email}`);
      let li3 = e('li', {}, `Phone Number: ${phone}`);
      let li4 = e('li', {}, `Address: ${address}`);
      let li5 = e('li', {}, `Postal Code: ${code}`);

      infoPreviewUl.appendChild(li1);
      infoPreviewUl.appendChild(li2);
      infoPreviewUl.appendChild(li3);
      infoPreviewUl.appendChild(li4);
      infoPreviewUl.appendChild(li5);

      inputName.value = '';
      inputEmail.value = '';
      inputPhone.value = '';
      inputAddress.value = '';
      inputCode.value = '';

      submitBtn.disabled = true;
      buttonEdit.disabled = false;
      buttonContinue.disabled = false;
    }
  }

  function edit(ev) {

    let lists = Array.from(infoPreviewUl.children);
    for (let i = 0; i < lists.length; i++) {
      lists[i].remove()
    }

    inputName.value = lists[0].textContent.split(': ')[1];
    inputEmail.value = lists[1].textContent.split(': ')[1];
    inputPhone.value = lists[2].textContent.split(': ')[1];
    inputAddress.value = lists[3].textContent.split(': ')[1];
    inputCode.value = lists[4].textContent.split(': ')[1];

    buttonEdit.disabled = true;
    buttonContinue.disabled = true;
    submitBtn.disabled = false;
  }

  function e(type, attr, ...content) {
    const element = document.createElement(type);

    for (let prop in attr) {
      element[prop] = attr[prop];
    }
    for (let item of content) {
      if (typeof item == 'string' || typeof item == 'number') {
        item = document.createTextNode(item);
      }
      element.appendChild(item);
    }

    return element;
  }
}
