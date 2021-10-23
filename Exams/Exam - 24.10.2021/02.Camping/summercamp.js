class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 };
        this.listOfParticipants = [];
    }
    registerParticipant(name, condition, money) {

        let person = this.listOfParticipants.find(x => x.name == name);
        if (!this.priceForTheCamp[condition]) {
            throw new Error(`Unsuccessful registration at the camp.`);
        }
        if (person != undefined) {
            return `The ${name} is already registered at the camp.`;
        }
        if (this.priceForTheCamp[condition] > money) {
            return `The money is not enough to pay the stay at the camp.`;
        }
        let participant = {
            name,
            condition,
            power: 100,
            wins: 0
        };
        this.listOfParticipants.push(participant);
        return `The ${name} was successfully registered.`
    }
    unregisterParticipant(name) {

        let person = this.listOfParticipants.find(x => x.name == name);

        if (person == undefined) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }

        let index = this.listOfParticipants.indexOf(person);
        this.listOfParticipants.splice(index, 1);

        return `The ${name} removed successfully.`
    }
    timeToPlay(typeOfGame, participant1, participant2) {

        let person1 = this.listOfParticipants.find(x => x.name == participant1);

        if (typeOfGame == 'WaterBalloonFights') {

            let person2 = this.listOfParticipants.find(x => x.name == participant2);

            if (person1 == undefined || person2 == undefined) {
                throw new Error(`Invalid entered name/s.`);
            }
            if (person1.condition != person2.condition) {
                throw new Error(`Choose players with equal condition.`);
            }

            if (person1.power > person2.power) {
                person1.wins++;
                return `The ${person1.name} is winner in the game ${typeOfGame}.`;
            } else if (person2.power > person1.power) {
                person2.wins++;
                `The ${person2.name} is winner in the game ${typeOfGame}.`
            } else {
                return `There is no winner.`;
            }

        } else if (typeOfGame == 'Battleship') {

            if (person1 == undefined) {
                throw new Error(`Invalid entered name/s.`);
            }

            person1.power += 20;
            return `The ${person1.name} successfully completed the game ${typeOfGame}.`
        }
    }
    toString() {
        let result = [];

        result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`);
        let sorted = this.listOfParticipants.sort((a, b) => b.wins - a.wins);
        for (let person of sorted) {
            result.push(`${person.name} - ${person.condition} - ${person.power} - ${person.wins}`);
        }
        return result.join('\n');
    }
}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");

console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));