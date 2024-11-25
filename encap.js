class Animal {
    myname;
    age;
    constructor(myname, _age) {
        this.myname = myname;
        this.age = _age;
    }
    move(meters) {
        console.log(this.myname + " moved " + meters + " a");
    }
}
class Cat extends Animal {
    color;
    constructor(myname, _age, color) {
        super(myname, _age);
        this.color = color;
    }
    getAge() {
        return this.age;
    }
}
// let cat = new Cat("Tom", 20, "white");
// console.log(cat);
// console.log(cat.getAge());
class Human extends Cat {
    country;
    constructor(_country, myname, _age, color) {
        super(myname, _age, color);
        this.country = _country;
    }
}
let human = new Human("John Doe", "USA", 23, "helo");
console.log(human);
export {};
