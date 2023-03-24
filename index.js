// game variables
let inputDir = { x: 0, y: 0 }
let loadingpage = true
let speed = 7;
let lastPaintTime = 0
let snakeArr = [{ x: 10, y: 10 }]
let score = 0;
food = { x: 6, y: 7 }
food2 = { x: 2, y: 9 }
food3 = { x: 5, y: 5 }
// playground to play snake game
let board = document.getElementById("board")
// let score = document.getElementById("score")

const delay = 100;

// initialize the last keydown time
let lastKeyDownTime = 0;

const eatSound = new Audio("/audio/eat.mp3")
eatSound.volume = 1
let gameOverSound = new Audio("/audio/gameOver.mp3")
let bgm = new Audio("/audio/gameBAckground.mp3")
let buttonClickSound = new Audio("/audio/buttonClick.mp3")


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
        inputDir = {x: 0, y: 0}
        snakeArr = [{ x: 13, y: 15 }]
        score = 0
        displayGameOver()
    }
    // if food is consumed increment the score and regenerate the food
    //food1
    if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
        // logic for adding increasing the body
        let pts = document.querySelector(".pointsElement")
        pts.style.setProperty("display", "block")
        setTimeout(()=>{
            pts.style.setProperty("animation", "zoom 1s ease-in-out")
},500)
        pts.innerHTML = "+2" 
        setTimeout(()=>{
            pts.style.removeProperty("display" ,"block")
            // pts.style.removeProperty("transform", "scale(0.8)")
            pts.style.removeProperty("animation", "zoom 1s ease-in-out")
        },1000)
        eatSound.play()
        score += 1
        scoreElement.innerHTML = "Score: " + score
        snakeArr.unshift({ x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y });
        let a = 2;
        let b = 16;
        food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) }
    }

    //for food 2
    if (snakeArr[0].y === food2.y && snakeArr[0].x === food2.x) {
        // lofic for adding increasing the body
        let pts = document.querySelector(".pointsElement")
        pts.style.setProperty("display", "block")
        console.log(speed)
        setTimeout(()=>{
            pts.style.setProperty("transform", "scale(0.8)")
        },500)
        pts.innerHTML = "+3" 
        setTimeout(()=>{
            pts.style.removeProperty("display" ,"block")
            pts.style.removeProperty("transform", "scale(0.8)")
        },1000)
        eatSound.play()
        score += 2
        scoreElement.innerHTML = "Score: " + score
        snakeArr.unshift({ x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y });
        let a = 1;
        let b = 20;
        food2 = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) }
    }
    if (snakeArr[0].y === food3.y && snakeArr[0].x === food3.x) {
        // lofic for adding increasing the body
        let pts = document.querySelector(".pointsElement")
        pts.style.setProperty("display", "block")
        setTimeout(()=>{
            pts.style.setProperty("transform", "scale(0.8)")
        },500)
        pts.innerHTML = "+5" 
        setTimeout(()=>{
            pts.style.removeProperty("display" ,"block")
            pts.style.removeProperty("transform", "scale(0.8)")
        },1000)
        eatSound.play()
        score += 5
        scoreElement.innerHTML = "Score: " + score
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

document.getElementById("startGame").addEventListener("click", () => {
    buttonClickSound.play()
    controlButton()
    document.querySelector(".loading-page").style.setProperty("display", "none");
    window.addEventListener("keydown", e => {
        bgm.currentTime = 0
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

// Get all the buttons
const buttons = document.querySelectorAll('.btn');

// Set the initial active button
let activeButton = 0;
buttons[activeButton].classList.add('active');

// Add event listener to the document to detect key presses
document.addEventListener('keydown', e => {
    const currentTime = Date.now();

  // calculate the time since the last keydown event
  const timeSinceLastKeyDown = currentTime - lastKeyDownTime;
   
  if (e.key === 'ArrowUp') {
    // Move to the previous button
    if(loadingpage && timeSinceLastKeyDown >= delay){
        buttonClickSound.currentTime = 0
        buttonClickSound.play()
        lastKeyDownTime = currentTime;
    }
    buttons[activeButton].classList.remove('active');
    activeButton = (activeButton === 0) ? buttons.length - 1 : activeButton - 1;
    buttons[activeButton].classList.add('active');
} else if (e.key === 'ArrowDown') {
    // Move to the next button
    if(loadingpage && timeSinceLastKeyDown >= delay){
        buttonClickSound.currentTime = 0
        buttonClickSound.play()
        lastKeyDownTime = currentTime;
    }
    buttons[activeButton].classList.remove('active');
    activeButton = (activeButton === buttons.length - 1) ? 0 : activeButton + 1;
    buttons[activeButton].classList.add('active');
}
// console.log(buttons[0].id)
if(e.key === "Enter" && buttons[activeButton].id === "startGame"){
    document.querySelector(".loading-page").style.setProperty("display", "none");
    buttonClickSound.play()
    window.addEventListener("keydown", e => {
        bgm.play()
        bgm.volume = .2
        loadingpage = false
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
}
})



// document.getElementById("exit").addEventListener("click",()=> {window.close()})
function displayFood(foodElement, food, foodClass) {
    foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add(foodClass)
    board.appendChild(foodElement)
}

function displayGameOver() {
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



function controlButton(){
    // Get the buttons by their IDs
const upBtn = document.getElementById("up");
const leftBtn = document.getElementById("left");
const downBtn = document.getElementById("down");
const rightBtn = document.getElementById("right");

// Add click event listener to each button
upBtn.addEventListener("click", () => {
  // Perform action when the "Up" button is clicked
  inputDir.x = 0
  inputDir.y = -1
  console.log("Up button clicked");
});

leftBtn.addEventListener("click", () => {
  // Perform action when the "Left" button is clicked
  inputDir.x = -1
  inputDir.y = 0
  console.log("Left button clicked");
});

downBtn.addEventListener("click", () => {
  // Perform action when the "Down" button is clicked
  inputDir.x = 0
  inputDir.y = 1
  console.log("Down button clicked");
});

rightBtn.addEventListener("click", () => {
  // Perform action when the "Right" button is clicked
  inputDir.x = 1
  inputDir.y = 0
  console.log("Right button clicked");
});

}

