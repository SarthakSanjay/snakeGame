// game variables
let inputDir = { x: 0, y: 0 }
let speed = 2;
let lastPaintTime = 0
let snakeArr = [{ x: 12, y: 15 },]
let food = { x: 13, y: 10 }
// playground to play snake game
let board = document.getElementById("board")

function main(ctime) {
    window.requestAnimationFrame(main)
    // console.log(ctime)
    if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
        return
    }
    lastPaintTime = ctime
    game()

}

function game() {
    // if snake collided
    if (isCollide(snakeArr)) {
        inputDir = {
            x: 0, y: 0
        }
        alert("Game over , press any key to continue!")
        snakeArr = [{ x: 13, y: 15 }]
        score = 0
    }
    // if food is consumed increment the score and regenerate the food
    if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
        // lofic for adding increasing the body
        snakeArr.unshift({ x: snakeArr[0].x = inputDir.x, y: snakeArr[0].y = inputDir.y })
        let a = 2, b = 16
        food = {
            x: Math.round(a + (b - a) * Math.random(),),
            y: Math.round(a + (b - a) * Math.random(),)
        }
    }
    //update snake and food
    board.innerHTML = ""
    snakeArr.forEach((e, index) => {
        snakeElement = document.createElement("div")
        snakeElement.style.gridRowStart = e.y
        snakeElement.style.gridColumnStart = e.x
        if (index === 0) {
            snakeElement.classList.add("snake-head")
        } else {
            snakeArr.classList.add("snake-body")

        }
        board.appendChild(snakeElement)
    })
    //display snake and food
    foodElement = document.createElement("div")
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add("food")
    board.appendChild(foodElement)

}



// snake colliding function 
function isCollide(snakeArr) {

}



window.requestAnimationFrame(main)

// whenever any key is pressed on keyboard , arrow function will execute
window.addEventListener("keydown", e => {
    inputDir = { // game starts
        x: 0,
        y: 1
    }

    switch (e.key) {
        case "ArrowUp":
            console.log("up")
            inputDir.x = 0
            inputDir.y = -1
            break
        case "ArrowDown":
            console.log("down")
            inputDir.x = 0
            inputDir.y = 1
            break
        case "ArrowLeft":
            console.log("left")
            inputDir.x = -1
            inputDir.y = 0
            break
        case "ArrowRight":
            console.log("right")
            inputDir.x = 1
            inputDir.y = 0
            break
        default:
            break
    }
})