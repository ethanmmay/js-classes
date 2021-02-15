let corolla = {
    make: "Toyota",
    model: "Corolla",
    year: 2004,
    price: 3000,
    horn: "honk honk",
    color: "Bronze"
}

let forester = {
    make: "Subaru",
    model: "Forester",
    year: 2017,
    price: 27000,
    horn: "beep beep"
}

class Car {
    constructor (make, model, year, price, horn, color) {
        this.make = make
        this.model = model
        this.year = year
        this.price = price
        this.horn = horn
        this.color = color || undefined
    }
}

let cars = [new Car(forester.make, forester.model, forester.year, forester.price, forester.horn), new Car(corolla.make, corolla.model, corolla.year, corolla.price, corolla.horn, corolla.color)]
let cars2 = [new Car("Ford", "F-150", 2004, 7000, "HONK", "white"), new Car("Audi", undefined, 2016, 35000, "beeeep", "silver")]

cars.forEach(car => console.log(car.horn))
cars2.forEach(car => console.log(car.horn))