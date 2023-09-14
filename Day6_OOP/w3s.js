// Define a Car class with a constructor to initialize the car's brand and a method to present information about the car.
class Car {
  constructor(brand) {
    this.carname = brand;
  }

  // Method to present information about the car.
  present() {
    return 'I have a ' + this.carname;
  }
}

// Define a Model class that extends the Car class, adding a model property and a method to show information about the car model.
class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }

  // Method to show information about the car's brand and model.
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

// Create an instance of the Model class with brand "Ford" and model "Mustang."
let myCar = new Model("Ford", "Mustang");

// Set the innerHTML of an element with the id "demo" to display the result of calling the show method on myCar.
document.getElementById("demo").innerHTML = myCar.show();
