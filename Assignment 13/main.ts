// Assignment 13
//Your Own Array: Think of your favorite mode of transportation, 
//such as a motorcycle or a car, and make a list that stores several examples. 
//Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”


//storing  favorite mode of transportation in an array

let transportationMode:string[]=["car","bike","suzuki","taxi"]
//using for each method
transportationMode.forEach(favouriteMode => {
    console.log(`I would like to own a ${favouriteMode}`);
}); // this will print the statements to above items

