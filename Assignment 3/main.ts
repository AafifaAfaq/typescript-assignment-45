//Assignment:2 Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.


//storing a person name in variable

let personName:string="Aafifa"

//To lower case

console.log(personName.toLowerCase());//This will display person name in lower case

//To upper case

console.log(personName.toUpperCase());//This will display person name in upper case

//To title case

console.log(personName.charAt(0).toUpperCase() +personName.slice(1).toLowerCase());//This will display person name in Title case
