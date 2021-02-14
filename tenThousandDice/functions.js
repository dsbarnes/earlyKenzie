const barGraphContainer = document.getElementById('container')
for(let i = 0; i <= 5000; i += 50){
    const scoreDiv = document.createElement('div')
    scoreDiv.id = i
    scoreDiv.dataset.timesRolld = 0
    scoreDiv.innerHTML = scoreDiv.dataset.timesRolld
    barGraphContainer.appendChild(scoreDiv)
}

function rollDie(){
    const dieOne = Math.floor((Math.random() * 6) + 1)
    const dieTwo = Math.floor((Math.random() * 6) + 1)
    const dieThr = Math.floor((Math.random() * 6) + 1)
    const dieFor = Math.floor((Math.random() * 6) + 1)
    const dieFiv = Math.floor((Math.random() * 6) + 1)
    const rolls = [dieOne, dieTwo, dieThr, dieFor, dieFiv]
    return rolls
}
function countRolledDie(arrayOfRolls){
    const dieCount = {}
    for(roll of arrayOfRolls){
        dieCount[roll] = (dieCount[roll] || 0) + 1
    }
    return dieCount
}


// const dieObj = {'1': 5}

// //Logs the die rolls
// console.log('dieObj', dieObj)
// //Scores that cannot get extra points
// console.log('checkForStright()', checkForStright(dieObj))
// console.log('checkForFullhouse()', checkForFullhouse(dieObj))
// console.log('fiveTheSame()', fiveTheSame(dieObj))
// //Scores that can get extra points
// console.log('fourTheSame()', fourTheSame(dieObj))
// console.log('threeTheSame()', threeTheSame(dieObj))
// //Small scores
// console.log('scoreOnes()', scoreOnes(dieObj))
// console.log('scoreFives()', scoreFives(dieObj))
// //Total
// console.log('Total score: ', scoreRoll(dieObj))



function checkForStright(objectOfRolls){
    let stright = false;
    if(
        objectOfRolls['1'] &&
        objectOfRolls['2'] &&
        objectOfRolls['3'] &&
        objectOfRolls['4'] &&
        objectOfRolls['5']
    ){ stright = true}
    
    return stright
}
function checkForFullhouse(objectOfRolls){
    const objKeys = Object.keys(objectOfRolls)
    let fullhouse = false
    if(
        objKeys.length === 2 &&
        ( objectOfRolls[ objKeys[0] ] === 2 ||
        objectOfRolls[ objKeys[0] ] === 3    )
    ){ fullhouse = true }
    
    return fullhouse
}
function fiveTheSame(objectOfRolls){
    const objKeye = Object.keys(objectOfRolls)
    let fiveTheSame = false
    if(objKeye.length === 1){ fiveTheSame = true }
    return fiveTheSame
}
function fourTheSame(objectOfRolls){
    let fourTheSame = false
    for(let [dieValue, timesRolled] of Object.entries(objectOfRolls) ){
        // debugger
        if(timesRolled === 4){
            set = dieValue
            fourTheSame = true
        }
        //Because you can still score a 1 or 5
        if(fourTheSame === true){
            objectOfRolls[1] === 1 ? fourTheSame = "true+100" :
            objectOfRolls[5] === 5 ? fourTheSame = "true+50"  :
            fourTheSame = true
        }
    }
    return fourTheSame
}
function threeTheSame(objectOfRolls){
    let threeTheSame = false
    for(let [dieValue, timesRolled] of Object.entries(objectOfRolls) ){
        if(timesRolled === 3){
            set = dieValue
            if(dieValue === "1") set = 10
            threeTheSame = true
        }
        //Because you can still score a 1 or 5
        if(threeTheSame === true){
            objectOfRolls[1] === 1 ? threeTheSame = "true+100" :
            objectOfRolls[5] === 1 ? threeTheSame = "true+50"  :
            threeTheSame = true
        }
    }
    return threeTheSame
}
function scoreOnes(objOfRolls){
    if(objOfRolls['1'] && objOfRolls['1'] != 3)
        return objOfRolls['1'] * 100
    return 0
}
function scoreFives(objOfRolls){
    return objOfRolls['5'] ? ( objOfRolls['5'] * 50 ) : 0
}





let set = 0
function scoreRoll(objectOfRolls){
    //No possible bonus points
    if(checkForStright(objectOfRolls)) return 1200
    if(checkForFullhouse(objectOfRolls)) return 1500
    if(fiveTheSame(objectOfRolls)){
        const number = Number( Object.keys(objectOfRolls) )
        if( number === 1 ) return 5000
        else return ( (number * 100) * 2 ) * 2
    }
    
    //possible bonus points
    switch(fourTheSame(objectOfRolls)){
        case true:
            return (set * 100) * 2
        case "true+50":
            return ((set * 100) * 2) + 50
        case "true+100":
            return ((set * 100) * 2) + 100
    }
    switch(threeTheSame(objectOfRolls)){
        case true:
            return set * 100
        case "true+50":
            return (set * 100) + 50
        case "true+100":
            return (set * 100) + 100
    }

    //When you roll for shit
    const ones = scoreOnes(objectOfRolls)
    const fives = scoreFives(objectOfRolls)
    return ones + fives
}


// This does the graphing


function graphScores(score, numberOfRolls){
    scoreDiv = document.getElementById(score)
    // console.log(scoreDiv, scoreDiv.dataset.timesRolld)
    scoreDiv.dataset.timesRolld =
        Number(scoreDiv.dataset.timesRolld) + 1
    scoreDiv.innerHTML = scoreDiv.dataset.timesRolld / numberOfRolls
}

for(let rolls = 0; rolls <= 50500; rolls ++){
    let dieObj = countRolledDie(rollDie())
    let score = scoreRoll(dieObj)
    graphScores(score, rolls)
}