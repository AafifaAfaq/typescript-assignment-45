// Assignment 14
//Guest List: If you could invite anyone, living or deceased, to dinner,
//who would you invite? Make a list that includes at least three people you’d like to invite to dinner.
//Then use your list to print a message to each person, inviting them to dinner.

let guestlist:string[]=["Asmara","Alina","Zunaira"]
let message:string="Let's join us for a dinner today"
guestlist.forEach(guest => {
    console.log(`Dear ${guest}, "${message}"`);
    
});

