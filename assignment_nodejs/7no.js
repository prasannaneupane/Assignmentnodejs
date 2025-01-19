//Create an object car with properties brand, model, and a method getDetails that returns "This car is a [brand] [model]". Use this inside the method.

// Define the car1 object
const car1 = {
    brand: "Mercedez",
    model: "Sedan",
    
    //  using 'this'
    getDetails: function() {
        console.log("This car is a " + this.brand + " " + this.model);
    }
  };
  
  // Define the car2 object
  const car2 = {
    brand: "Lamborghini",
    model: "Huracan",
    
    // Method to get car details using 'this'
    getDetails: function() {
      return `This car is a ${this.brand} ${this.model}`;
    }
  };
  
  // Example usage:
  car1.getDetails();  // Output: This car is a Mercedez Sedan
  console.log(car2.getDetails());  // Output: This car is a Lamborghini Huracan
  