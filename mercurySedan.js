//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }



//After you write the derived Car class, you should test it out.

    checkService() {
        if (this.mileage > 30000) {
            this.scheduleService = true
            return this.scheduleService;
        }
    }

    start() {
        if (this.fuel>0) {
            console.log("Engine has started.");
            return this.started = true
        }
        else {
            console.log("no fuel");
            return this.started = false
        }
    }
    
    loadPassenger(num){
        if (this.passenger < this.maxPassengers) {
            if((num + this.passenger) <= this.maxpassenger){
                this.passenger = num;
                return this.passenger;
            }else {
                console.log(this.model + "" + this.make, "not have enough space to take all passengers.");
            }
        } else {
            console.log(this.model +""+ this.make "is full") 
        }
    }

}
//Note: You can code your derived Car class here or make a file named index.js and do it there.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...

let myCar = new Car('mercury', 'rad_sedan', '2022', 'white', 50000)

myCar.start()
myCar.loadPassenger(5)
myCar.stop()
myCar.checkService()

console.log(myCar)










//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here:
