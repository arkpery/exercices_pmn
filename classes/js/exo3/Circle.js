const Point = require("./Point");

class Circle {
    #point;
    #radius;

    constructor(point, radius){
        this.#point = point;
        this.#radius = radius;
    }

    area(){
        return (Math.PI * Math.pow(this.#radius, 2));
    }

    getCenter(){
        return (this.#point);
    }

    getRadius(){
        return (this.#radius);
    }

    containsPoint(point){
        const diffX = this.#point.getX() - point.getX();
        const diffY = this.#point.getY() - point.getY();
        const length = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));

        return (length >= 0 && length <= this.#radius);
    }

    toString(){
        return (`Circle[radius=${this.#radius}, centre=${this.#point.toString()}]`);
    }

}

module.exports = Circle;
