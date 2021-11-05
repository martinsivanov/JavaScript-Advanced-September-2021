async function getInfo() {

    let inputStopId = document.querySelector('#stopId').value;
    let stopName = document.querySelector('#stopName');
    let bussesUl = document.querySelector('#buses');

    let url = `http://localhost:3030/jsonstore/bus/businfo/${inputStopId}`;


    try {
        stopName.textContent = 'Loading...';
        bussesUl.replaceChildren();

        let response = await fetch(url);
        if (response.status != 200) {
            throw new Error('Error')
        }

        let data = await response.json();

        stopName.textContent = data.name;

        let busesInfo = Object.entries(data.buses);

        busesInfo.forEach(b => {
            let li = document.createElement('li');
            li.textContent = `Bus ${b[0]} arrives in ${b[1]} minutes`;
            bussesUl.appendChild(li);
        })
    }
    catch (error) {
        stopName.textContent = error.message;
    }

}