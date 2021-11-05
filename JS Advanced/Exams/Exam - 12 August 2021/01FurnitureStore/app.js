window.addEventListener('load', solve);

function solve() {
    let modelInput = document.querySelector('#model');
    let yearInput = document.querySelector('#year');
    let descriptionInput = document.querySelector('#description');
    let priceInput = document.querySelector('#price');
    let addBtn = document.querySelector('#add');
    addBtn.addEventListener('click', add);

    let furnitureList = document.querySelector('#furniture-list');

    function add(event) {
        event.preventDefault();

        let model = modelInput.value.trim();
        let year = Number(yearInput.value.trim());
        let description = descriptionInput.value.trim();
        let price = Number(priceInput.value.trim());
        if (model == '' || yearInput.value.trim() == ''
            || priceInput.value.trim() == '' || isNaN(year) || isNaN(price)
            || description == '' || year < 0 || price < 0) {
            return
        }
        let firstTr = document.createElement('tr');
        firstTr.classList.add("info");
        firstTr.innerHTML = `<td>${model}</td>
                           <td>${price.toFixed(2)}</td>
                           <td>
                           <button class="moreBtn">More Info</button>
                           <button class="buyBtn">Buy it</button>
                           </td>`;


        let secondTr = document.createElement('tr');
        secondTr.classList.add("hide");
        secondTr.innerHTML = `<td>Year: ${year}</td>
                            <td colspan="3">Description: ${description}</td>`;

        furnitureList.appendChild(firstTr);
        furnitureList.appendChild(secondTr);

        let moreBtn = Array.from(furnitureList.getElementsByClassName('moreBtn'));
        let buyBtn = Array.from(furnitureList.getElementsByClassName('buyBtn'));
        moreBtn.forEach(btn => btn.addEventListener('click', moreInfo));
        buyBtn.forEach(btn => btn.addEventListener('click', buy));

        modelInput.value = '';
        yearInput.value = '';
        descriptionInput.value = '';
        priceInput.value = '';
    }
    function moreInfo(e) {

        let tr = e.target.parentElement.parentElement.parentElement.querySelector('.hide');
        if (e.target.textContent == 'More Info') {
            e.target.textContent = 'Less Info';
            tr.style.display = "contents";
        } else {
            e.target.textContent = 'More Info';
            tr.style.display = "none";
        }

    }
    function buy(e) {
        let totalTr = document.querySelector('.total-price');

        let element = e.target.parentElement.parentElement;
        let nextElement = element.parentElement.querySelector('.hide');

        let Totalprice = Number(element.querySelectorAll('td')[1].textContent);
        let result = Number(totalTr.textContent);
        result += Number(Totalprice);
        totalTr.textContent = result.toFixed(2);
        nextElement.remove();
        element.remove();
    }
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
