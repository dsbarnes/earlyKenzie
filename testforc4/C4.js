const container = document.getElementById('container')

for(let col = 1; col <= 7; col++){
    const colElement = document.createElement('div')
    colElement.classList.add('col')
    colElement.dataset.x = String(col - 1)

    for(let row = 1; row <= 6; row++){
        const rowElement = document.createElement('div')
        rowElement.classList.add('cell')
        rowElement.style.background = 'white'
        rowElement.dataset.x = String(col - 1)
        rowElement.dataset.y = String(6 - row)

        colElement.appendChild(rowElement)
        container.appendChild(colElement)
    }
}
const grid = Array.from(document.querySelectorAll('.cell'))





//This is all the cols
const v0 = grid.filter(element => element.dataset.x === "0")
const v1 = grid.filter(element => element.dataset.x === "1")
const v2 = grid.filter(element => element.dataset.x === "2")
const v3 = grid.filter(element => element.dataset.x === "3")
const v4 = grid.filter(element => element.dataset.x === "4")
const v5 = grid.filter(element => element.dataset.x === "5")
const v6 = grid.filter(element => element.dataset.x === "6")
const colsArray = [v0, v1, v2, v3, v4, v5, v6]

//This is all the rows
const h0 = grid.filter(element => element.dataset.y === "0")
const h1 = grid.filter(element => element.dataset.y === "1")
const h2 = grid.filter(element => element.dataset.y === "2")
const h3 = grid.filter(element => element.dataset.y === "3")
const h4 = grid.filter(element => element.dataset.y === "4")
const h5 = grid.filter(element => element.dataset.y === "5")
const rowsArray = [h0, h1, h2, h3, h4, h5]

//Daysmn!!
//One Way -- Bot Lft -> Top Rgt
const d0 = grid.filter( element => element.dataset.x === element.dataset.y)
const d1 = grid.filter(e => Number(e.dataset.y) - Number(e.dataset.x) === 1)
const d2 = grid.filter(e => Number(e.dataset.y) - Number(e.dataset.x) === 2)
const d3 = grid.filter(e => Number(e.dataset.y) - Number(e.dataset.x) === -1)
const d4 = grid.filter(e => Number(e.dataset.y) - Number(e.dataset.x) === -2)
const d5 = grid.filter(e => Number(e.dataset.y) - Number(e.dataset.x) === -3)
const diagArray1 = [d0, d1, d2, d3, d4, d5]

//The Other -- Top Lft -> Bot Rgt
const d6 = grid.filter(e => Number(e.dataset.x) + Number(e.dataset.y) === 8)
const d7 = grid.filter(e => Number(e.dataset.x) + Number(e.dataset.y) === 7)
const d8 = grid.filter(e => Number(e.dataset.x) + Number(e.dataset.y) === 6)
const d9 = grid.filter(e => Number(e.dataset.x) + Number(e.dataset.y) === 5)
const d10 = grid.filter(e => Number(e.dataset.x) + Number(e.dataset.y) === 4)
const d11 = grid.filter(e => Number(e.dataset.x) + Number(e.dataset.y) === 3)
const diagArray2 = [d6, d7, d8, d9, d10, d11]

//This is what we were after the whole time
const allDirectionsArrays = [...colsArray, ...rowsArray, ...diagArray1, ...diagArray2]
// console.log(allDirectionsArrays)




playerColor = 'black'
let winCounter = 1

grid.forEach(el => {    
    el.addEventListener('click', dropChecker)
})

function dropChecker(){
    const dropLocation =
        Array.from(this.parentElement.children)
            .reverse()
            .find(el => el.style.backgroundColor === 'white')

    dropLocation.style.backgroundColor = playerColor
    playerColor = changePlayer(playerColor)

    checkForWin(dropLocation)
}

function changePlayer(player){
    return player === 'black' ? 'red' : 'black'
}

function checkForWin(element){
    const winDirections = []
    for(array of allDirectionsArrays){
        if(array.includes(element)){
            winDirections.push(array)
        }
    }
    console.log(winDirections)
}