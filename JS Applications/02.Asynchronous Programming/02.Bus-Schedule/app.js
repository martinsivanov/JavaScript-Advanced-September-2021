function solve() {

    let departBtn = document.querySelector('#depart');
    let arriveBtn = document.querySelector('#arrive');
    let information = document.querySelector('#info span');

    let bus = {
        next: 'depot'
    }

    async function depart() {

        let url = `http://localhost:3030/jsonstore/bus/schedule/${bus.next}`;

        try {
            departBtn.disabled = true;
            let response = await fetch(url);
            if (response.status != 200) {

                departBtn.disabled = true;
                arriveBtn.disabled = true;

                throw new Error('Error');
            }
            bus = await response.json();

            let stopName = bus.name;

            information.textContent = `Next stop ${stopName}`;

            arriveBtn.disabled = false;
        } catch (error) {
            information.textContent = error.message;
        }

    }

    function arrive() {

        information.textContent = `Arriving at ${bus.name}`;

        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();