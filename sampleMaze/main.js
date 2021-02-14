const map = [
    "WWWWWW",
    "W   WW",
    "S WWFW",
    "W    W",
    "WWWWWW",
]
const mapArea = document.getElementById('con')

for(let row = 0; row <= map.length - 1; row++){
    const rowDiv = document.createElement('div')
    rowDiv.classList.add('row')
    rowDiv.id = row
    mapArea.appendChild(rowDiv)
    for(let col = 0; col <= map[0].length - 1; col++){
        const cell = document.createElement('div')
        // cell.id = 5 - col
        cell.id = `${row},${5 - col}`
        cell.classList.add('cell')
        cell.dataset.type = map[row][col]
        rowDiv.appendChild(cell)
    }
}

const playerPiece = document.querySelector('[data-type="S"]')
let playerLocation = {
    x: playerPiece.id[0],
    y: playerPiece.id[2]
}

const rowsArray = Array.from(document.querySelectorAll(".row"))
window.addEventListener('keyup', movePlayer)
function movePlayer(e){
    const key = e.key
    switch(key){
        case ("ArrowLeft"):
            console.log(1)
            //Now that we have this,
            //if(is not wall)move
            //else dont
            const movingTo = 
                document.getElementById(`${playerLocation.x-1},${playerLocation.y}`)
            console.log(movingTo)
            break
        
        //Same thing for all the other switches
        case ("ArrowRight"):
            console.log(2)
            break

        case ("ArrowDown"):
            console.log(3)
            break

        case ("ArrowUp"):
            console.log(4)
            break

    }
}
console.log(playerLocation)
// let qs = document.getElementById('queryString')
// console.log(qs.classList)
// let likeThis = `this thing has two classed: ${qs.classList[0]} and ${qs.classList[1]}`
// console.log(likeThis)