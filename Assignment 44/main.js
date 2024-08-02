"use strict";
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
// The function should have one parameter that collects as many items as the function call provides. 
// And it should print a summary of the sandwich that is being ordered. 
// Call the function three times, using a different number of arguments each time.
// Define a function that accepts a variable number of items for a sandwich
function sandwich(...items) {
    console.log("\nYour sandwich contains the following items:\n");
    for (let i = 0; i < items.length; i++) {
        console.log(items[i]);
    }
    console.log("\nNow enjoy your sandwich!\n");
}
// Call the function three times with different numbers of arguments
sandwich("ham", "cheese", "lettuce");
sandwich("ham", "cheese", "lettuce", "tomato");
sandwich("ham", "cheese", "lettuce", "tomato", "mayo");
