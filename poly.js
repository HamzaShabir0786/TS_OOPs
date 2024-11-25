// In this file we will cover polymorhisim and abstraction
class Circle {
    radious;
    // radius: number; we don't need to declate properties when we use direclty access specified in constructor.
    constructor(radious) {
        this.radious = radious;
    }
    getArea() {
        return Math.PI * this.radious ** 2;
    }
}
class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const shpaes = [new Circle(10), new Rectangle(5, 7)];
shpaes.forEach((shape) => {
    console.log("get Area ", shape.getArea());
});
export {};
