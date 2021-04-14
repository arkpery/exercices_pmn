const Point = require("./Point");

(() => {
    function main(){
        const point = new Point(10, 14);
        
        console.log(`${point}`);
        point.setX(32);
        console.log(`${point}`);
    }

    main();
})();
