let board = document.querySelector('#main')
let player = 1
let winCounter = 1 //because you always have one in a row...
//Do this FIRST

for( let i = 0; i < 7; i++){
    
    let colElement = document.createElement("div");
    colElement.classList.add(`col${i}`);
    board.appendChild(colElement);

    for(let j = 0; j < 6; j++){

        let cellElement = document.createElement("div");
        cellElement.classList.add('cell')
        cellElement.id = `x${i}y${5-j}`
        cellElement.dataset.x = i
        cellElement.dataset.y = 5-j
        colElement.appendChild(cellElement);
    }
}
let cells = document.querySelectorAll('.cell')
let cellsArray = Array(...cells)
cellsArray.forEach( (div) => div.addEventListener('click', testing ) )

//Do This Next
function findOpen(children){
    for(let child of children){
        if( child.classList.length === 1) 
            return child
    }
}
//DO ALL THIS LAST!!
function checkForWin(checker, direction){
    let x = parseInt(checker.id[1])
    let y = parseInt(checker.id[3])
    
    if(direction === 'left') nextChecker = document.querySelector               ( `#x${x - 1}y${y}` ) 
    else if(direction === 'right') nextChecker = document.querySelector         ( `#x${x + 1}y${y}` ) 
    else if(direction ==='down') nextChecker = document.querySelector           ( `#x${x}y${y - 1}` )
    
    else if(direction ==='up-left') nextChecker = document.querySelector        ( `#x${x - 1}y${y + 1}`)
    else if(direction ==='up-right') nextChecker = document.querySelector       ( `#x${x + 1}y${y + 1}`)
    else if(direction ==='down-left') nextChecker = document.querySelector      ( `#x${x - 1}y${y - 1}`)
    else if(direction ==='down-right') nextChecker = document.querySelector     ( `#x${x + 1}y${y - 1}`)
    else return 0
    
    console.log(checker, nextChecker)
    // console.log(winCounter)

    if( !nextChecker ){}
    else if(nextChecker.classList.contains(`player${player}`)){
        winCounter += 1
        console.log(winCounter)
        checkForWin(nextChecker, direction)
    }
    // console.log(winCounter)
    return winCounter
}



function testing(cell){
    let colClicked = cell.path[1].children
    let childrenOfColClicked = Array(...colClicked).reverse()
    
    let startingChecker = findOpen(childrenOfColClicked)
    
    findOpen(childrenOfColClicked).classList.add(`player${player}`)
    
    if(checkForWin(startingChecker, 'down') >= 4) {
        console.log(winCounter)
        alert('You Win') 
    }
    else winCounter = 1
    // console.log('this is it: ' + checkForWin(startingChecker, 'left'))
    // console.log(typeof checkForWin(startingChecker, 'left'))
    // console.log(typeof checkForWin(startingChecker, 'right'))
    if (checkForWin(startingChecker, 'left') + checkForWin(startingChecker, 'right') - 1 >= 4){
        console.log(winCounter)
        alert('You Win')
    } 
    else{
        console.log(winCounter)
        winCounter = 1
    } 

    // if(checkForWin(startingChecker, 'left') + checkForWin(startingChecker, 'right') >= 4) alert('You Win!')
    // else winCounter = 1


    // if(checkForWin(startingChecker, 'up-left') + checkForWin(startingChecker, 'down-right') >= 4) alert('You Win')
    // else winCounter = 1

    // if(checkForWin(startingChecker, 'up-right') + checkForWin(startingChecker, 'down-left') >= 4) alert('You Win')
    // else winCounter = 1

    if (player === 1) player += 1
    else player -= 1
}
