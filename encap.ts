class Animal {
  private myname: string;
  protected age: number;
  constructor(myname: string, _age: number) {
    this.myname = myname;
    this.age = _age;
  }
  move(meters: number) {
    console.log(this.myname + " moved " + meters + " a");
  }
}

class Cat extends Animal {
  color: string;
  constructor(myname: string, _age: number, color: string) {
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
  country: string;

  constructor(_country: string, myname: string, _age: number, color: string) {
    super(myname, _age, color);
    this.country = _country;
  }
}

let human = new Human("John Doe", "USA", 23, "helo");
console.log(human);
