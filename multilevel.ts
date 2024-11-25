// In this file we will see multilevel and multiple inheritance and as well as we will cover encapsulation
// Multiple inheritance
// {
//   interface typeOfCar {
//     model: number;
//     brand: string;
//   }
//   interface typeOfwheels {
//     jeep: string;
//   }
//   interface typeOfwheels2 {
//     civic: string;
//   }

//   class cars implements typeOfCar {
//     model: number = 2019;
//     brand: string = "Tesla";
//     constructor(model: number, brand: string) {
//       this.model = model;
//       this.brand = brand;
//     }
//   }

//   class wheels extends cars implements typeOfwheels {
//     jeep: string = "toyouta";

//     constructor(jeep: string, model: number, brand: string) {
//       super(model, brand);
//       this.jeep = jeep;
//     }
//   }

//   class wheels2 extends cars implements typeOfwheels2 {
//     //this is called mulitple  inheritance
//     civic: string = "honda civic";
//     constructor(civic: string, model: number, brand: string) {
//       super(model, brand);
//       this.civic = civic;
//     }
//   }

//   let car1 = new cars(2024, "tesla");
//   console.log(car1);

//   let car2 = new wheels("new jeep", 204, "Honda");
//   console.log(car2);

//   let car3 = new wheels2("new civic", 206, "Honda");
//   console.log(car3);
// }

// Mulitlevel Inheritance
// {
// interface type99 {
//   bangla: boolean;
//   money: boolean;
// }
// interface type98 {
//   car: string;
// }
// interface type97 {
//   laptop: boolean;
// }
// class parent99 implements type99 {
//   bangla: boolean = true;
//   money: boolean = true;

//   constructor(bangla: boolean, money: boolean) {
//     this.bangla = bangla;
//     this.money = money;
//   }
// }

// class parent98 extends parent99 implements type98 {
//   car: string = "Honda";
//   constructor(car: string, bangla: boolean, money: boolean) {
//     super(bangla, money);
//     this.car = car;
//   }
// }

// class parent97 extends parent98 implements type97 {
//   laptop: boolean = true;
//   constructor(laptop: boolean, car: string, bangla: boolean, money: boolean) {
//     super(car, bangla, money);
//     this.laptop = laptop;
//   }
// }

// let parent = new parent97(true, "honda", true, true);

// console.log(parent.bangla);
// }
