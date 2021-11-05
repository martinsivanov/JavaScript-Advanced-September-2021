class Movie {
    constructor(movieName, ticketPrice) {
        this.movieName = movieName;
        this.ticketPrice = Number(ticketPrice);
        this.screenings = [];
        this._soldTickets = 0;
        this._totalPriceTickets = 0;
    }
    newScreening(date, hall, description) {
        if (this.screenings.some(x => x.date == date && x.hall === hall)) {
            throw Error(`Sorry, ${hall} hall is not available on ${date}`);
        };

        let screening = { date, hall, description };
        this.screenings.push(screening);
        return `New screening of ${this.movieName} is added.`;
    }
    endScreening(date, hall, soldTickets) {
        let index = -1;
        for (let i = 0; i < this.screenings.length; i++) {
            if (this.screenings[i].date == date && this.screenings[i].hall == hall) {
                index = i;
            }
        }
        if (index == -1) {
            throw Error(`Sorry, there is no such screening for ${this.movieName} movie.`);
        }
        this._soldTickets += soldTickets;
        let screeningProfit = soldTickets * this.ticketPrice;
        this._totalPriceTickets += screeningProfit;
        this.screenings.splice(index, 1);
        return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${screeningProfit}`;

    }
    toString() {
        let result = [];
        result.push(`${this.movieName} full information:`);
        result.push(`Total profit: ${this._totalPriceTickets.toFixed(0)}$`);
        result.push(`Sold Tickets: ${this._soldTickets}`);

        if (this.screenings.length == 0) {
            result.push(`No more screenings!`);
        } else {
            result.push(`Remaining film screenings:`);
            this.screenings.sort((a, b) => a.hall.localeCompare(b.hall));
            this.screenings.forEach(x => result.push(`${x.hall} - ${x.date} - ${x.description}`));
        }
        return result.join('\n');
    }
}
let m = new Movie('Wonder Woman 1984', '10.00');

console.log(m.newScreening('October 2, 2020', 'IMAX 3D', `3D`));

console.log(m.newScreening('October 3, 2020', 'Main', `regular`));

//console.log(m.newScreening('October 4, 2020', 'IMAX 3D', `3D`));

console.log(m.endScreening('October 2, 2020', 'IMAX 3D', 150));

console.log(m.endScreening('October 3, 2020', 'Main', 78));

console.log(m.toString());
