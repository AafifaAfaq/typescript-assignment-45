// Assignment 15 Changing Guest List: You just heard that one of your guests can’t make the dinner,so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// Start with your program from Exercise 14. Add a print statement at the end of your program
console.log("\n Old List:\n");
let guestlist = ["Asmara", "Alina", "Zunaira"];
let message = "Let's join us for a dinner today";
guestlist.forEach((guest) => {
    console.log(`Dear ${guest}, "${message}"`);
});
//stating the name of the guest who can’t make it.
let personUnabbled = guestlist.splice(1, 1)[0];
console.log(`\n Unfortunately,${personUnabbled} can't make to the dinner \n`);
// Modified list
console.log("\n Modified List: \n");
guestlist.push("Ayesha");
// Print a second set of invitation messages.
guestlist.forEach((guest) => {
    console.log(`Dear ${guest}, "${message}"`);
});
export {};
