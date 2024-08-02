"use strict";
//Assignment 16
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
let guestlist = ["Asmara", "Alina", "Zunaira"];
let message = "Let's join us for a dinner today";
let personUnabbled = guestlist.splice(1, 1)[0];
guestlist.push("Ayesha");
// guestlist.forEach((guest) => {
//   console.log(`Dear ${guest}, "${message}"`);
// });
console.log("\n Good news! We have found a bigger dinner table, so more space is available \n");
// • Add one new guest to the beginning of your array.
guestlist.unshift("Hoorain");
// • Add one new guest to the middle of your array. 
guestlist.splice(3, 0, "Amna");
//• Use append() to add one new guest to the end of your list. 
guestlist.push("Maheen");
//• Print a new set of invitation messages, one for each person in your list.
guestlist.forEach(guest => {
    console.log(`Dear ${guest},"${message}"`);
});
