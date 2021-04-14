const Point = require("./Point");
const Circle = require("./Circle");

(() => {
    function main(){
        const p = new Point(2, 3);
        const c = new Circle(p, 3);

        console.log(`[p=${p}]`);
        p.setX(3);
        console.log(`[p=${p}]`);
        const p2 = new Point(4, 4);
        console.log(`[p2=${p2}]`);
        console.log(`[c=${c}]`);
        if (c.containsPoint(p2)){
            console.log(`p2 est dans c`);
        }
        else {
            console.log(`p2 n'est pas dans c`);
        }
        console.log(`L'aire de c est de ${c.area().toFixed(2)}`);
    }

    main();
})();
