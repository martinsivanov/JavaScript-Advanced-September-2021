function solve() {

    let buttonAdd = document.querySelector('#container button');
    buttonAdd.addEventListener('click', onScreen);

    function onScreen(e) {
        e.preventDefault();
        let movieInput = document.querySelectorAll('#container input');
        let movieName = movieInput[0].value;
        let hallName = movieInput[1].value;
        let moviePrice = Number(movieInput[2].value).toFixed(2);
        if (movieName.length !== 0 && hallName.length !== 0 && !isNaN(moviePrice) && moviePrice != 0) {

            let li = document.createElement('li');
            let span = document.createElement('span');
            let strong = document.createElement('strong');
            span.textContent = movieName;
            strong.textContent = `Hall: ${hallName}`;
            li.appendChild(span);
            li.appendChild(strong);

            let div = document.createElement('div');
            let strongOfDiv = document.createElement('strong');
            strongOfDiv.textContent = moviePrice
            let input = document.createElement('input');
            input.placeholder = 'Tickets Sold';
            let button = document.createElement('button');
            button.textContent = 'Archive';

            button.addEventListener('click', onArchive);

            div.appendChild(strongOfDiv);
            div.appendChild(input);
            div.appendChild(button);

            li.appendChild(div);
            let lu = document.querySelectorAll('#movies ul')[0];
            lu.appendChild(li);
        }
    }

    function onArchive(e) {
        let movieLi = e.target.parentElement.parentElement;
        let rightDiv = movieLi.querySelector('div');

        let price = rightDiv.querySelector('strong');
        let ticketsQty = rightDiv.querySelector('input').value;

        if (!isNaN(Number(ticketsQty)) && ticketsQty.trim() !== '') {
            ticketsQty = Number(ticketsQty);
            price = Number(price.textContent);
            let total = price * ticketsQty;
            let strongEl = document.createElement('strong');
            strongEl.textContent = `Total amount: ${total.toFixed(2)}`;
            let buttonDelete = document.createElement('button');
            buttonDelete.textContent = 'Delete';
            buttonDelete.addEventListener('click', Ondelete)

            let elementLi = document.createElement('li');
            let span = document.createElement('span');
            let movieName = movieLi.querySelector('span').textContent;
            span.textContent = movieName;
            elementLi.appendChild(span);
            elementLi.appendChild(strongEl);
            elementLi.appendChild(buttonDelete);

            let archiveUl = document.querySelector('#archive ul');
            archiveUl.appendChild(elementLi);

            movieLi.remove();

        }
        function Ondelete(e) {
            let li = e.target.parentElement;
            li.remove();
        }

        let clearButton = document.querySelectorAll('#archive button')[1];
        clearButton.addEventListener('click', onClear);

        function onClear(e) {
            let ul = Array.from(e.target.parentElement.children[1].children);
            ul.forEach(el => el.remove());
        }

    }
}