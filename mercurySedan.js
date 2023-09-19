//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass").Vehicle

//this shows how to call from this module...



//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...
class Car extends VehicleModule {
    constructor (make, model, year, color, mileage) {
        super (make, model, year, color, mileage)
        this.maximumPassengers = 5
        this.passenger = 0
        this.numberOfWheels = 4
        this.maximumSpeed = 160
        this.fuel = 10
        this.scheduleService = false
    }

    loadPassenger (num) {
        if (num > this.maximumPassengers) {
            this.passenger = num
            console.log(`This ${this.make} ${this.model} cannot seat ${this.passenger} people`)
        }
        else if (num === this.maximumPassengers) {
            this.passenger = num
            console.log (`This ${this.make} ${this.model} is at full capacity`)
        }
        else
        {
            this.passenger = num
            console.log (`This ${this.make} ${this.model} can still seat ${(this.maximumPassengers - this.passenger)} people`)
        }
    }

    start () {
        if (this.fuel > 0) {
            this.started = true
            console.log (`This ${this.make} ${this.model} has enough fuel to start`)
        }
        else 
        {
            console.log (`This ${this.make} ${this.model} has no fuel`)
        }
    }

    service (mileage) {
        if ((mileage + this.mileage) >= 30000) {
            this.scheduleService = true
            console.log (`This ${this.make} ${this.model} needs a service`)
        }
        else
        {
            console.log (`This ${this.make} ${this.model} doesn't need a service`)
        }
    }
}

let vehicle1 = new Car ('Mercury', 'A28', '1995', 'Black', 45000)

vehicle1.loadPassenger(4)
vehicle1.start()
vehicle1.service(vehicle1.mileage)

console.log (vehicle1)

let vehicle2 = new Car ('Ford', 'F-150', 2020, 'Red', 5000)

vehicle2.loadPassenger(2)
vehicle2.start()
vehicle2.service(vehicle2.mileage)

console.log (vehicle2)



//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here: