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
console.log('on it')

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