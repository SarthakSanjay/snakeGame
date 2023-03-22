// game variables
let inputDir = { x: 0, y: 0 }
let speed = 7;
let lastPaintTime = 0
let snakeArr = [{ x: 13, y: 15 }]
let score = 0;
food = { x: 6, y: 7 }
food2 = { x: 2, y: 9 }
food3 = { x: 5, y: 5 }
// playground to play snake game
let board = document.getElementById("board")
// let score = document.getElementById("score")

const eatSound = new Audio("eat.mp3")
const gameOverSound = new Audio("gameOver.mp3")
const bgm = new Audio("gameBAckground.mp3")


function main(ctime) {
    window.requestAnimationFrame(main)
    // console.log(ctime)
    if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
        return
    }
    lastPaintTime = ctime
    game()

}
function isCollide(snakeArr) {
    // is snake collide with itself

    for (let i = 1; i < snakeArr.length; i++) {
        if (snakeArr[i].x === snakeArr[0].x && snakeArr[i].y === snakeArr[0].y) {
            return true
        }
    }
    // if collided with wall
    if (snakeArr[0].x >= 20 || snakeArr[0].x <= 0 || snakeArr[0].y >= 20 || snakeArr[0].y <= 0) {
        return true
    }
    // snake colliding function 
    return false
}
function game() {
    // if snake collided
    if (isCollide(snakeArr)) {
        gameOverSound.play()
        bgm.pause()
        inputDir = {
            x: 0, y: 0
        }
        // alert("Game over , press any key to continue!")
        snakeArr = [{ x: 13, y: 15 }]
        score = 0
        displayGameOver()
    }
    // if food is consumed increment the score and regenerate the food
    if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
        // lofic for adding increasing the body
        eatSound.play()
        score += 1
        scoreElement.innerHTML = "Score: " + score
        snakeArr.unshift({ x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y });
        let a = 2;
        let b = 16;
        food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) }

        // create pop-up element
let pointPopUp = document.createElement("span");
pointPopUp.style.position = "absolute";
pointPopUp.style.gridRowStart = food.y
pointPopUp.style.gridColumnStart = food.x
pointPopUp.style.zIndex = "30";
pointPopUp.style.color = "white";
pointPopUp.innerHTML = "+" + score;

// add pop-up to board
board.appendChild(pointPopUp);

// remove pop-up after 1 second
setTimeout(function() {
  board.removeChild(pointPopUp);
},500);

    }
     
    //for food 2
    if (snakeArr[0].y === food2.y && snakeArr[0].x === food2.x) {
        // lofic for adding increasing the body
        eatSound.play()
        score += 2
        scoreElement.innerHTML = "Score: " + score
        scoreElement.innerHTML = "Score: " + score;
        snakeArr.unshift({ x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y });
        let a = 1;
        let b = 20;
        food2 = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) }
    }
    if (snakeArr[0].y === food3.y && snakeArr[0].x === food3.x) {
        // lofic for adding increasing the body
        eatSound.play()
        score += 5
        scoreElement.innerHTML = "Score: " + score +" "+"speed : " + speed
        snakeArr.unshift({ x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y });
        let a = 1;
        let b = 20;
        food3 = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) }
    }
    // moving the snake
    for (let i = snakeArr.length - 2; i >= 0; i--) {
        snakeArr[i + 1] = { ...snakeArr[i] }
    }
    snakeArr[0].x += inputDir.x
    snakeArr[0].y += inputDir.y

    //update snake and food
    board.innerHTML = ""
    snakeArr.forEach((e, index) => {
        snakeElement = document.createElement("div")
        snakeElement.style.gridRowStart = e.y
        snakeElement.style.gridColumnStart = e.x
        if (index === 0) {
            snakeElement.classList.add("snake-head")
        } else {
            snakeElement.classList.add("snake")
        }
        board.appendChild(snakeElement)
    })
    //display snake and food


    //apple
    displayFood("foodElement", food, "snake-food")
    //orange
    displayFood("food2Element", food2, "snake-food2")
    //banana
    displayFood("food3Element", food3, "snake-food3")


}

document.getElementById("startGame").addEventListener("click" , ()=>{
    document.querySelector(".loading-page").style.setProperty("display", "none");
    window.addEventListener("keydown", e => {
        bgm.play()
        inputDir = { // game starts
            x: 0,
            y: 1
        }
    
        switch (e.key) {
            //arrow keys
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
    
            // wasd keys
            case "w":
                console.log("up")
                inputDir.x = 0
                inputDir.y = -1
                break
    
            case "s":
                console.log("down")
                inputDir.x = 0
                inputDir.y = 1
                break
            case "a":
                console.log("left")
                inputDir.x = -1
                inputDir.y = 0
                break
            case "d":
                console.log("right")
                inputDir.x = 1
                inputDir.y = 0
                break
            default:
                break
        }
    })
})
// document.getElementById("exit").addEventListener("click",()=> {window.close()})
function displayFood(foodElement, food, foodClass) {
    foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add(foodClass)
    board.appendChild(foodElement)
}

function displayGameOver(){
    gameOver = document.querySelector(".gameOver")
    gameOver.style.removeProperty("display")
    gameOver.style.setProperty("display", "block")

    document.addEventListener("keydown", function removeGameOver() {
        gameOver.style.setProperty("display", "none");
        document.removeEventListener("keydown", removeGameOver);
    });
   
}

window.requestAnimationFrame(main)

// whenever any key is pressed on keyboard , arrow function will execute
//  window.addEventListener("keydown", e => {
//     bgm.play()
//     inputDir = { // game starts
//         x: 0,
//         y: 1
//     }

//     switch (e.key) {
//         //arrow keys
//         case "ArrowUp":
//             console.log("up")
//             inputDir.x = 0
//             inputDir.y = -1
//             break

//         case "ArrowDown":
//             console.log("down")
//             inputDir.x = 0
//             inputDir.y = 1

//             break
//         case "ArrowLeft":
//             console.log("left")
//             inputDir.x = -1
//             inputDir.y = 0
//             break
//         case "ArrowRight":
//             console.log("right")
//             inputDir.x = 1
//             inputDir.y = 0
//             break

//         // wasd keys
//         case "w":
//             console.log("up")
//             inputDir.x = 0
//             inputDir.y = -1
//             break

//         case "s":
//             console.log("down")
//             inputDir.x = 0
//             inputDir.y = 1
//             break
//         case "a":
//             console.log("left")
//             inputDir.x = -1
//             inputDir.y = 0
//             break
//         case "d":
//             console.log("right")
//             inputDir.x = 1
//             inputDir.y = 0
//             break
//         default:
//             break
//     }
// })