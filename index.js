// Console log a welcome message with instructions to mad libs
console.log("Welcome to the Mad Libs")


// Prompt the user to enter parts of speech for mad libs
// You should be asking for at least 4 words
let adjective = prompt("Give me an adjective") 
let adjective2 = prompt("Give me an second adjective") 
let verb = prompt("Give me an verb") 
let noun = prompt("Give me an noun") 
// Create an array that stores the values the user entered
let newArray = []
newArray.push(adjective)
newArray.push(adjective2)
newArray.push(verb)
newArray.push(noun)



// Console log the story with the array values passed into the blanks
// Make sure you are referencing the values of the array (rather than the user inputs themselves)
// You can use any type of string manipulation that feels more intuitive

console.log(`In a small ${newArray[0]} school in the Bronx,there was a problem with to many ${newArray[1]}. These ${newArray[1]} loved to ${newArray[2]}, which caused Mr.P so may headaches. However,no one wanted to remove them because they were too ${newArray[3]} so they stayed there forever.`)






