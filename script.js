//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// The Beginning of my Auto Messenging Project!//
console.log("Your daily fortune!")
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Daily Fortune telling! //
// Plan: //
// We will need 3 arrays to pull word / phrase from //
// We will also need a function that selects a random word / phrase from the arrays! //
// We will need to set up 3 message structures e.g "Today you will have " + [insert word / phrase]! //
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// Completely Random Messages //
// If we wanted to go further we could try create a bunch of arrays that contain everything needed to create a valid sentence //
// And then use these arrays to create completely random messages. //
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// Daily Fortunes Section //
// Our 3 messages will be: //
// We could do ASCII art animals to be the representation of the daily luck"
// "Today you will have " + [adjective] + " luck!" //
// "You will " + [have great success (for example)] + " in " + [romance, business deals, work] //
// "You must " + [avoid ladders, talk to a friend, wear a hat] <-- just some simple things to do//

const adjectiveArray = ["great", "amazing", "terrible", "bad", "good", "disatrous", "neutral", "a little", "a lot of", "outrageous", "minor", "major", "catastrophic", 
"unrelenting", "minimal"]

const successArray = ["have great success", "have no success", "achieve greatness", "experience failure", "have an exciting opportunity", "have a new encounter", 
"meet someone important", "get close to your dream", "experience hardship", "have a great struggle", "have a normal experience"]

const lifeAspectArray = ["in romance", "at work", "during your travels", "while studying", "in your free time", "while using the toilet", "during the day", "at night", 
"with your friends"]

const simpleAdviceArray = ["avoid ladders", "talk to a close friend", "wear a hat", "wear a nice spray", "call a relative", "learn a new skill", "buy the thing!", 
"visit a cafe", "go for a walk", "duck! QUICK!", "tidy your room"]

// Arrays can be added to above ^ //

//Time for the first function which will select a random word/phrase //

function randomChoice(array) {
  let totalChoices = array.length;
  let choice = array[Math.floor(Math.random() * totalChoices)]
  return choice
}

console.log(randomChoice(adjectiveArray));