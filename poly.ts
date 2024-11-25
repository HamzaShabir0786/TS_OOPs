// In this file we will cover polymorhisim and abstraction


interface Shape {
  getArea(): number;
}
class Circle implements Shape {
  // radius: number; we don't need to declate properties when we use direclty access specified in constructor.
  constructor(public radious: number) {}
  getArea(): number {
    return Math.PI * this.radious ** 2;
  }
}

class Rectangle implements Shape {
  constructor(public width: number, public height: number) {}
  getArea(): number {
    return this.width * this.height;
  }
}
const shpaes: Shape[] = [new Circle(10), new Rectangle(5, 7)];
shpaes.forEach((shape: Shape) => {
  console.log("get Area ", shape.getArea());
});
