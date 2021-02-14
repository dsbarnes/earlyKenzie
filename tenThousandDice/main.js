const container = document.getElementById('container')
//Each one of these things will become it's own function
//  if there is a standard score, then it will use that
//  if it needs to count, then it will do that.

//The first function will roll, the rest will score the roll

//Here is a set of 5 die to roll:
const dieOne = Math.floor(Math.random() * 6) + 1
const dieTwo = Math.floor(Math.random() * 6) + 1
const dieThr = Math.floor(Math.random() * 6) + 1
const dieFor = Math.floor(Math.random() * 6) + 1
const dieFiv = Math.floor(Math.random() * 6) + 1

//Some data organization.
const rollsArray = [dieOne, dieTwo, dieThr, dieFor, dieFiv]
const rollsObject = {}

// const rollsObject ={
    // "1": 1,
    // "2": 1,
    // "3": 1,
    // "4": 1,
    // "5": 1
// }

// Counts the object
for(number of rollsArray){
    rollsObject[number] = (rollsObject[number] || 0 ) + 1
} console.log(rollsObject)

//Scoring:
//Ceck for a stright
let stright = false
if(
    rollsObject['1'] &&
    rollsObject['2'] &&
    rollsObject['3'] &&
    rollsObject['4'] &&
    rollsObject['5']
){
    stright = true
    console.log('Rolled a stright', 1200)
}
//Check for full house
const fullHouseTest = Object.values(rollsObject)
let fullHouse = false
if(fullHouseTest[0] == 2 && fullHouseTest[1] == 3){ fullHouse = true }
if(fullHouseTest[0] == 3 && fullHouseTest[1] == 2){ fullHouse = true }

//Check for 5 of a kind
//Check for quads
//Check for sets
let setOfOnes = false
let set = false
let n = 0

if(!fullHouse){
    for(let [dieValue, timesRolled] of Object.entries(rollsObject) ){
        if(timesRolled === 3 && dieValue == 1){
            setOfOnes = true;
            console.log(`Rolled a set of ${dieValue}'s: `, 1000)
        } else if(timesRolled === 3) {
            setOfN = true
            console.log(`Rolled a set of ${dieValue}'s: `, Number(dieValue) * 100)
        } else if (timesRolled === 4){
            console.log(`Rolld 4 of a king ${dieValue}'s`, (Number(dieValue) * 100) * 2)
        } else if (timesRolled === 5){
            console.log("You win")
        }
    }
}

//Check for 1's
//if set of 1's or set of 5's don't count them as 100's or 50's...

let totalSingles = 0
for(let [scoringNumber, timesRolled] of Object.entries(rollsObject) ){
    // totalSingles = 0
    let sumOfOnes = 0
    let sumOfFives = 0

    if(scoringNumber == 1){
        timesRolled *= 100
        sumOfOnes += timesRolled
        totalSingles += sumOfOnes
        console.log('sum of 1s:', sumOfOnes)
    }
    if(scoringNumber == 5){
        timesRolled *= 50
        sumOfFives += timesRolled
        totalSingles += sumOfFives
        console.log('sum of 5s: ', sumOfFives)
    }
}
console.log(totalSingles)

//Chekc for 5's