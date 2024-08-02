// Cars: Write a function that stores information about a car in a Object. 
// The function should always receive a manufacturer and a model name. 
// It should then accept an arbitrary number of keyword arguments. 
// Call the function with the required information and two other name-value pairs,such as a color or an optional feature. 
// Print the Object that’s returned to make sure all the information was stored correctly.

// Define a function to store car information in an object
function createCar(manufacturer: string, modelName: string, options: { [key: string]: any } = {}): object {
    // Initialize the car object with the required properties
    let car = {
        manufacturer: manufacturer,
        modelName: modelName,
        ...options
    };

    return car;
}

// Call the function with required and additional information
let car1 = createCar("Toyota", "Camry", { color: "red", sunroof: true });
let car2 = createCar("Tesla", "Model S", { color: "black", autopilot: true, battery: "long range" });

// Print the objects to ensure all information is stored correctly
console.log(car1);
console.log(car2);


