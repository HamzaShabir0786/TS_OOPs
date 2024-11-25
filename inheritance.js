// Inheritance
class parent {
    country;
    constructor(country = "paksitan") {
        this.country = country;
    }
    setof(va) {
        console.log(`set of parent is here ${va}`);
    }
}
class child extends parent {
    city;
    constructor(country = "india", city = "karachi") {
        super(country);
        this.country = country;
        this.city = city;
    }
    setof(va) {
        console.log(`set here ${va}`); // overriding execute here
    }
}
const child1 = new child();
console.log(child1.setof("hamza"));
export {};
