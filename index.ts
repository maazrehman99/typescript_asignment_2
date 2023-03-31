abstract class Vehicle {
  make: string;
  model: string;
  year: number;
  rented: boolean;
  constructor(make: string, model: string, year: number, rented: boolean) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.rented = rented;
  }

   get Make(): string{
   return this.make;
   }
   get Model(): string{
   return this.model;
   }
   get Year(): number{
   return this.year;
   }
   get isRented(): boolean{
   return this.rented;
   }
   set isRented(rented: boolean){
   this.rented = rented;
   }
   abstract rentalRate(): number;

  Rent(): void {
    if (this.rented) {
      console.log(`${this.Make} ${this.Model} is already rented`);
    } else {
      this.rented = true;
      console.log(`${this.Make} ${this.Model} is now rented`);
    }
  }
  Return(): void {
    if (this.rented) {
      this.rented = false;
      console.log(`Thank you for returning ${this.make} ${this.model}.`);
    } else {
      console.log(`This ${this.make} ${this.model} is not rented.`);
    }
  }
}

 class Car extends Vehicle {
  color: string;
  constructor(
    make: string,
    model: string,
    year: number,
    rented: boolean,
    color: string
  ) {
    super(make, model, year, rented);
    this.color = color;
  }

  rentalRate(): number {
    return 400;
  }
}

 class Motorcycle extends Vehicle {
  engineNO: number;
  constructor(
    make: string,
    model: string,
    year: number,
    rented: boolean,
    engineNO: number
  ) {
    super(make, model, year, rented);
    this.engineNO = engineNO;
  }

  rentalRate(): number {
    return 40;
  }
}
 class Truck extends Vehicle {
  stopNO: number;
  constructor(
    make: string,
    model: string,
    year: number,
    rented: boolean,
    stopNO: number
  ) {
    super(make, model, year, rented);
    this.stopNO = stopNO;
  }

  rentalRate(): number {
    return 90;
  }
}

let myCar = new Car("Toyota", "Corolla", 2020, true, "Black");

console.log(myCar.rentalRate());
console.log(myCar.Rent())
console.log(myCar.Return())

let myMotorcycle = new Motorcycle("Honda", "Civic", 2020, false, 1434);

console.log(myMotorcycle.rentalRate());
console.log(myMotorcycle.Rent())
console.log(myMotorcycle.Return())
