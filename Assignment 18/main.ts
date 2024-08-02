// Assignment 18
// Seeing the World: Think of at least five places in the world you’d like to visit.

// • Store the locations in a array. Make sure the array is not in alphabetical order.

let locations:string[]=["Germany","Switzerland","Paris","Dubai","Saudi Arabia","Canada","England"]

// • Print your array in its original order.

console.log("original order: " + locations + "\n");

// • Print your array in alphabetical order without modifying the actual list.

console.log("alphabetical order: " + [...locations].sort( ) +"\n");

// • Show that your array is still in its original order by printing it.

console.log("original order: " + locations +"\n");

// • Print your array in reverse alphabetical order without changing the order of the original list.

console.log("reverse alphabetical order(unchanged): " + [...locations].reverse( ) +"\n");

// • Show that your array is still in its original order by printing it again.

console.log("original order: " + locations +"\n");

// • Reverse the order of your list. Print the array to show that its order has changed.

console.log("reverse alphabetical order (changed): " + locations.reverse( ) +"\n");

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

console.log("original order: " + locations.reverse( ) +"\n");

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

console.log("alphabetical order (changed): " + locations.sort( ) +"\n");

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

console.log("reverse alphabetical order (changed): " + locations.sort( ).reverse( ) +"\n");
 