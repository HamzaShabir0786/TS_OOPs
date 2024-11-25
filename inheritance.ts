// Inheritance
class parent {
  country: string;
  constructor(country: string = "paksitan") {
    this.country = country;
  }
  setof(va: string) {
    console.log(`set of parent is here ${va}`);
  }
}

class child extends parent {
  city: string;
  constructor(country: string = "india", city: string = "karachi") {
    super(country);
    this.country = country;
    this.city = city;
  }
  setof(va: string) {
    console.log(`set here ${va}`); // overriding execute here
  }
}

const child1 = new child();
console.log(child1.setof("hamza"));
