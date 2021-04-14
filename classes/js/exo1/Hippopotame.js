const range = require("./utils/range");

class Hippopotame {
    constructor(name, weight, tusksSize) {
        this.name = name;
        this.weight = weight;
        this.tusksSize = tusksSize;
    }

    swim() {
        this.weight -= 0.3;
    }

    eat() {
        this.weight += 1.0;
    }

    fight(enemy) {
        return (this.tusksSize > enemy.tusksSize);
    }

    timestamp_run() {
        const start = parseInt(Date.now() / 1000, 10);
        const step = 3600;
        let date_iterator = start;
        let start_day = start;
        const momentInTreeWeeks = start + 3600 * 24 * 7 * 3;

        while (date_iterator < momentInTreeWeeks) {
            const momentInFifteenHours = start_day + (3600 * 15);
            const momentInNineteenHours = start_day + (3600 * 19);
            const momentInNextDays = start_day + (3600 * 24);

            if (date_iterator < momentInFifteenHours) {
                if (((momentInFifteenHours - date_iterator) % step) === 0) {
                    this.eat();
                    this.eat();
                    this.swim();
                    this.swim();
                    this.swim();
                }
            } else if (date_iterator >= momentInNineteenHours) {
                console.log(this.toString());
            } else if (date_iterator >= momentInNextDays) {
                start_day = parseInt(Date.now() / 1000, 10);
            }
            date_iterator = Date.now();
        }
    }


    run() {
        const MapWeeks = ["First Weeks", "Second Weeks", "Third Weeks"];
        const MapDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        const AtTheNight = "At the night";

        for (let i of range(1, 3)) {
            console.log("============================================");
            console.log(`******${MapWeeks[i - 1]}******`);

            for (let j of range(1, 7)) {
                console.log(MapDays[j - 1]);
                for (let k of range(1, 24)) {
                    if (k >= 1 && k <= 15) {
                        this.eat();
                        this.eat();
                        this.swim();
                        this.swim();
                        this.swim();
                    } else if (k === 19) {
                        console.log(AtTheNight);
                        console.log(`[${this}]`);
                    }
                }
            }
        }
    }

    toString() {
        return `Hippopotame[nom=${this.name}, weight=${this.weight}, tusksSize=${this.tusksSize}]`;
    }
}

module.exports = Hippopotame;