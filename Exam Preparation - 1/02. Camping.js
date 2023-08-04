class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 };
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        if (!this.priceForTheCamp.hasOwnProperty(condition)) {
            throw new Error("Unsuccessful registration at the camp.");
        }

        if (this.listOfParticipants.some(participant => participant.name === name)) {
            return `The ${name} is already registered at the camp.`;
        }

        const priceForParticipant = this.priceForTheCamp[condition];
        if (money < priceForParticipant) {
            return `The money is not enough to pay the stay at the camp.`;
        }

        this.listOfParticipants.push({
            name: name,
            condition: condition,
            power: 100,
            wins: 0,
        });

        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant(name) {
        const index = this.listOfParticipants.findIndex(participant => participant.name === name);
        if (index === -1) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }

        this.listOfParticipants.splice(index, 1);
        return `The ${name} removed successfully.`;
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        const participant1Info = this.listOfParticipants.find(participant => participant.name === participant1);
        if (!participant1Info) {
            throw new Error(`Invalid entered name/s.`);
        }

        if (typeOfGame === "WaterBalloonFights") {
            const participant2Info = this.listOfParticipants.find(participant => participant.name === participant2);
            if (!participant2Info) {
                throw new Error(`Invalid entered name/s.`);
            }

            if (participant1Info.condition !== participant2Info.condition) {
                throw new Error(`Choose players with equal condition.`);
            }

            if (participant1Info.power > participant2Info.power) {
                participant1Info.wins++;
                return `The ${participant1Info.name} is winner in the game ${typeOfGame}.`;
            } else if (participant2Info.power > participant1Info.power) {
                participant2Info.wins++;
                return `The ${participant2Info.name} is winner in the game ${typeOfGame}.`;
            } else {
                return `There is no winner.`;
            }
        } else if (typeOfGame === "Battleship") {
            participant1Info.power += 20;
            return `The ${participant1Info.name} successfully completed the game ${typeOfGame}.`;
        } else {
            throw new Error(`Invalid game type.`);
        }
    }

    toString() {
        const sortedParticipants = this.listOfParticipants.sort((a, b) => b.wins - a.wins);
        let result = `${this.organizer} will take ${sortedParticipants.length} participants on camping to ${this.location}\n`;
        sortedParticipants.forEach(participant => {
            result += `${participant.name} - ${participant.condition} - ${participant.power} - ${participant.wins}\n`;
        });
        return result.trim();
    }
}

// Example usage:
const summerCamp = new SummerCamp("Adventure Camps", "Lakefront");
console.log(summerCamp.registerParticipant("Alice", "student", 350));
console.log(summerCamp.registerParticipant("Bob", "child", 100));
console.log(summerCamp.registerParticipant("Charlie", "collegian", 400));
console.log(summerCamp.registerParticipant("Bob", "child", 200)); // Should return "The Bob is already registered at the camp."
console.log(summerCamp.unregisterParticipant("Dave")); // Should throw an error "The Dave is not registered in the camp."
console.log(summerCamp.unregisterParticipant("Charlie"));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Alice", "Bob"));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Alice", "Bob")); // Should return "The Alice is winner in the game WaterBalloonFights."
console.log(summerCamp.timeToPlay("Battleship", "Alice"));
console.log(summerCamp.toString());
