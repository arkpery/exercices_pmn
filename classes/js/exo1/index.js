const Hippopotame = require("./Hippopotame");

function main() {
    const h1 = new Hippopotame("H1", 34.7, 12.3);
    const h2 = new Hippopotame("H2", 28.7, 10.3);


    if (h1.fight(h2)) {
        console.log(`L'hippopotame ${h1.name} a gagné`);
    } else {
        console.log(`L'hippopotame ${h2.name} a gagné.`);
    }
    h1.run();
}

main();