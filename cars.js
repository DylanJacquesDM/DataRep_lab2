class Vehicle{

    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    //method
    Information(){
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }
}

let myVehicle = new Vehicle ('Skoda', 'Gold', 2008);
let info = myVehicle.Information();

//inheritance(child class)
class Cars extends Vehicle {
    constructor(make, model, year, doors){
        super(make,model,year);
        this.doors = doors;
    }
    
    Information(){
        //Invokation
        super.Information();
        console.log(`Doors: ${this.doors}`);
    }

}
let myCar = new Cars('VW', 'Golf', 2011, 5);
myCar.Information();