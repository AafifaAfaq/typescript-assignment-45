//Assignment 12 Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, 
//print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

//Storing my friends name in an Array
let friendsName:string[]=["Alina","Asmara","Fariha","Hoorain"]
//Store a message in a variable
let message:string="I miss you"
//Printing each in one line with a message using for loop
for (let i =0; i < friendsName.length; i++) {
    console.log(`${message} ${friendsName[i]}`);
}


