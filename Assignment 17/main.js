// //Assignment 17
// //Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
let guestlist = ["Asmara", "Alina", "Zunaira"];
let message = "Let's join us for a dinner today";
let personUnabbled = guestlist.splice(1, 1)[0];
guestlist.push("Ayesha");
// guestlist.forEach((guest) => {
//   console.log(`Dear ${guest}, "${message}"`);
// });
// console.log(
//   "\n Good news! We have found a bigger dinner table, so more space is available \n"
// );
// • Add one new guest to the beginning of your array.
guestlist.unshift("Hoorain");
// • Add one new guest to the middle of your array.
guestlist.splice(3, 0, "Amna");
//• Use append() to add one new guest to the end of your list.
guestlist.push("Maheen");
//• Print a new set of invitation messages, one for each person in your list.
// guestlist.forEach((guest) => {
//   console.log(`Dear ${guest},"${message}"`);
// });
console.log(`\n Unfortunately,new dinner table won’t arrive in time for the dinner\n`);
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
while (guestlist.length > 2) {
    let removedGuest = guestlist.pop();
    if (removedGuest !== undefined) {
        console.log(`Sorry,${removedGuest} we can't invite you`);
    }
}
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
console.log("\nModified List:\n");
guestlist.forEach(guest => {
    console.log(`Dear ${guest},"${message}"`);
});
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
guestlist.splice(0, guestlist.length);
console.log("\nEmpty Array:\n");
console.log(guestlist);
export {};
