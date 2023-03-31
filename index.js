"use strict";
class Vehicle {
    constructor(make, model, year, rented) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.rented = rented;
    }
    get Make() {
        return this.make;
    }
    get Model() {
        return this.model;
    }
    get Year() {
        return this.year;
    }
    get isRented() {
        return this.rented;
    }
    set isRented(rented) {
        this.rented = rented;
    }
    Rent() {
        if (this.rented) {
            console.log(`${this.Make} ${this.Model} is already rented`);
        }
        else {
            this.rented = true;
            console.log(`${this.Make} ${this.Model} is now rented`);
        }
    }
    Return() {
        if (this.rented) {
            this.rented = false;
            console.log(`Thank you for returning ${this.make} ${this.model}.`);
        }
        else {
            console.log(`This ${this.make} ${this.model} is not rented.`);
        }
    }
}
class Car extends Vehicle {
    constructor(make, model, year, rented, color) {
        super(make, model, year, rented);
        this.color = color;
    }
    rentalRate() {
        return 400;
    }
}
class Motorcycle extends Vehicle {
    constructor(make, model, year, rented, engineNO) {
        super(make, model, year, rented);
        this.engineNO = engineNO;
    }
    rentalRate() {
        return 40;
    }
}
class Truck extends Vehicle {
    constructor(make, model, year, rented, stopNO) {
        super(make, model, year, rented);
        this.stopNO = stopNO;
    }
    rentalRate() {
        return 90;
    }
}
let myCar = new Car("Toyota", "Corolla", 2020, true, "Black");
console.log(myCar.rentalRate());
console.log(myCar.Rent());
console.log(myCar.Return());
let myMotorcycle = new Motorcycle("Honda", "Civic", 2020, false, 1434);
console.log(myMotorcycle.rentalRate());
console.log(myMotorcycle.Rent());
console.log(myMotorcycle.Return());
