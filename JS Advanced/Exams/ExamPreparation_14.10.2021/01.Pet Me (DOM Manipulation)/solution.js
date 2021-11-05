function solve() {
    let fields = document.querySelectorAll('#container input');
    let addBtn = document.querySelector('#container button');
    let adoptSection = document.querySelector('#adoption ul');
    let adoptedSection = document.querySelector('#adopted ul');


    let nameInput = fields[0];
    let ageInput = fields[1];
    let kindInput = fields[2];
    let ownerInput = fields[3];

    addBtn.addEventListener('click', add)

    function add(event) {
        event.preventDefault();

        let name = nameInput.value.trim();
        let age = Number(ageInput.value.trim());
        let kind = kindInput.value.trim();
        let owner = ownerInput.value.trim();

        if (name == '' || ageInput.value.trim() == '' || isNaN(age) ||
            kind == '' || owner == '') {
            return
        }

        contactBtn = e('button', {}, 'Contact with owner');
        contactBtn.addEventListener('click', contact);

        let pet = e('li', {},
            e('p', {},
                e('strong', {}, name), ' is a ',
                e('strong', {}, age), ' year old ',
                e('strong', {}, kind)),
            e('span', {}, `Owner: ${owner}`),
            contactBtn
        )
        nameInput.value = '';
        ageInput.value = '';
        kindInput.value = '';
        ownerInput.value = '';

        adoptSection.appendChild(pet);

        function contact() {
            let confirmInput = e('input', { placeholder: 'Enter your names' });
            let confirmButton = e('button', {}, 'Yes! I take it!');
            let confirmDiv = e('div', {}, confirmInput, confirmButton);

            confirmButton.addEventListener('click', confirm.bind(null, pet, confirmInput));

            contactBtn.remove();
            pet.appendChild(confirmDiv);
        }
    }
    function confirm(pet, confirmInput) {
        if (confirmInput.value.trim() == '') {
            return
        }
        let newOwner = confirmInput.value;
        pet.querySelector('div').remove();
        pet.querySelector('span').textContent = `New Owner: ${newOwner}`;
        let checkBtn = e('button', {}, 'Checked');
        checkBtn.addEventListener('click', remove.bind(null, pet))
        pet.appendChild(checkBtn);
        adoptedSection.appendChild(pet);

    }
    function remove(pet) {
        pet.remove();
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

