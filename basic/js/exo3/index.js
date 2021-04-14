const scanf = require("scanf");


function main() {
    const limit = 5;
    const tab = [];

    for (let i = 0; i < limit; i++) {
        let tmp = NaN;

        while (isNaN(tmp)) {
            console.log("Entrez un nombre:");
            tmp = scanf("%d");
        }
        tab.push(tmp);
    }
    let index = 0;

    for (let i = 0; i < tab.length; i++) {
        if (tab[i] > tab[index]) {
            index = i
        }
    }

    let somme = 0;

    for (let i = 0; i < tab.length; i++) {
        somme += tab[i];
    }

    const moyenne = somme / tab.length;

    console.log(`L'indice du plus grand element est de ${index}.`);
    console.log(`La moyenne est de ${moyenne}.`);
}

main();
