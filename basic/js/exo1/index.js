const scanf = require("scanf");


(() => {
    function main(){
        const messages = [
            "Saisissez une première chaine:",
            "Saisissez une deuxième chaine:"
        ];
        const inputs = [];

        for (let i = 0; i < messages.length; i++){
            console.log(messages[i]);

            inputs.push(scanf("%S"));
        }
        if (inputs[0].length >= inputs[1].length * 2){
            console.log("La première chaine est deux fois plus grande que la deuxième.");
        }
        else {
            console.log("La première chaine n'est pas deux fois plus grande que la deuxième.");
        }
    }

    main();
})();
