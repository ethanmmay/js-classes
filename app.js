let corolla = {
    make: "Toyota",
    model: "Corolla",
    year: 2004,
    price: 3000,
    color: "Bronze"
}

let forester = {
    make: "Subaru",
    model: "Forester",
    year: 2017,
    price: 27000
}

let cars = [corolla, forester]

class Car {
    constructor (make, model, year, price) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.price = price;
    }
}

cars = [new Car("Toyota", "Corolla", 2004, 3000), new Car("Subaru", "Forester", 2017, 27000)]