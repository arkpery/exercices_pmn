const scanf = require("scanf");

function main() {
    let nb = -1;
    let somme = 0;

    while (nb < 1 || isNaN(nb)) {
        console.log("Saisissez un entier positif:");
        nb = scanf("%d");
    }
    for (let i = 1; i <= nb; i++) {
        somme += i;
    }
    console.log(`La somme des nombres de 1 à ${nb} est de: ${somme}`);
}

main();
