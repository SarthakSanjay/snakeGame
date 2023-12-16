import { checkFoodCollision } from "./scripts/checkFoodCollision.js"
import { displayFood } from "./scripts/displayFood.js"
import { moveSnake } from "./scripts/moveSnake.js"
import { updateGameBoard } from "./scripts/updateGameBoard.js"
import { isCollide } from "./scripts/collide.js"
import { updateSnake } from "./scripts/updateSnake.js"
import { regenerateFood } from "./scripts/regenerateFood.js"
import { gameOver } from "./scripts/gameOver.js"
import { updateScore } from "./scripts/updateScore.js"
//game variables              
//---------------------------------------------------------------------------
let inputDir = { x : 0 , y : 0} //key to snake dir
let loadingpage = true
let speed = 7
let lastPaintTime = 0
let snakeArr = [{x:10 , y:10}]
let score = 0
let delay = 100
let lastKeyDownTime  = 0
let food  = { x: 6, y: 7 }
let food2 = { x: 2, y: 9 }
let food3 = { x: 5, y: 5 }
let running = true
//---------------------------------------------------------------------------

//board
let board = document.getElementById('board')
//---------------------------------------------------------------------------
// main function
function main(ctime) {
    if(running){

        window.requestAnimationFrame(main)
    }
    console.log(ctime)
    if((ctime - lastPaintTime) / 1000 < 1/ speed){
        return
    }
    lastPaintTime = ctime
    game()
}
//function to paint the animation

//---------------------------------------------------------------------------

function game() {
    if (isCollide(snakeArr)) {
        running =false
        gameOver()
        return 
    }
    
     // Food 1
    if(checkFoodCollision(inputDir,food,snakeArr ,1)){
      food = regenerateFood(food)
        updateSnake(snakeArr,inputDir)
        updateScore(1)
    }
    if(checkFoodCollision(inputDir,food2,snakeArr ,1)){
      food2 =  regenerateFood(food2)
        updateSnake(snakeArr,inputDir)
        updateScore(2)
    }
    if(checkFoodCollision(inputDir,food3,snakeArr ,1)){
       food3 = regenerateFood(food3)
        updateSnake(snakeArr,inputDir)
        updateScore(3)
    }
    // checkFoodCollision(inputDir,food2, snakeArr,2); // Food 2
    // checkFoodCollision(inputDir,food3, snakeArr,5); // Food 3
    moveSnake(snakeArr , inputDir);
    updateGameBoard(board, snakeArr, food, food2, food3);
}

document.getElementById("startGame").addEventListener("click", () => {
    window.requestAnimationFrame(main)
    // buttonClickSound.play()
    // controlButton()
    document.querySelector(".loading-page").style.setProperty("display", "none");
    // bgm.play()
    window.addEventListener("keydown", e => {
        // bgm.currentTime = 0
        inputDir = { // game starts
            x: 0,
            y: 1
        }

        switch (e.key) {
            //arrow keys
            case "ArrowUp":
            case "w":
                console.log("up")
                inputDir.x = 0
                inputDir.y = -1
                break

            case "ArrowDown":
                case "s":
                console.log("down")
                inputDir.x = 0
                inputDir.y = 1

                break
            case "ArrowLeft":
            case 'a':
                console.log("left")
                inputDir.x = -1
                inputDir.y = 0
                break
            case "ArrowRight":
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

// document.addEventListener('keydown', e => {
//     const currentTime = Date.now();

//   // calculate the time since the last keydown event
//   const timeSinceLastKeyDown = currentTime - lastKeyDownTime;
   
//   if (e.key === 'ArrowUp') {
//     // Move to the previous button
//     if(loadingpage && timeSinceLastKeyDown >= delay){
//         // buttonClickSound.currentTime = 0
//         // buttonClickSound.play()
//         lastKeyDownTime = currentTime;
//     }
//     // buttons[activeButton].classList.remove('active');
//     // activeButton = (activeButton === 0) ? buttons.length - 1 : activeButton - 1;
//     // buttons[activeButton].classList.add('active');
// } else if (e.key === 'ArrowDown') {
//     // Move to the next button
//     if(loadingpage && timeSinceLastKeyDown >= delay){
//         // buttonClickSound.currentTime = 0
//         // buttonClickSound.play()
//         lastKeyDownTime = currentTime;
//     }
//     // buttons[activeButton].classList.remove('active');
//     // activeButton = (activeButton === buttons.length - 1) ? 0 : activeButton + 1;
//     // buttons[activeButton].classList.add('active');
// }
// // console.log(buttons[0].id)
// if(e.key === "Enter" && buttons[activeButton].id === "startGame"){
//     document.querySelector(".loading-page").style.setProperty("display", "none");
//     // buttonClickSound.play()
//     window.addEventListener("keydown", e => {
//         // bgm.play()
//         // bgm.volume = .2
//         loadingpage = false
//         inputDir = { // game starts
//             x: 0,
//             y: 1
//         }

//         switch (e.key) {
//             //arrow keys
//             case "ArrowUp":
//                 console.log("up")
//                 inputDir.x = 0
//                 inputDir.y = -1
//                 break

//             case "ArrowDown":
//                 console.log("down")
//                 inputDir.x = 0
//                 inputDir.y = 1

//                 break
//             case "ArrowLeft":
//                 console.log("left")
//                 inputDir.x = -1
//                 inputDir.y = 0
//                 break
//             case "ArrowRight":
//                 console.log("right")
//                 inputDir.x = 1
//                 inputDir.y = 0
//                 break

//             // wasd keys
//             case "w":
//                 console.log("up")
//                 inputDir.x = 0
//                 inputDir.y = -1
//                 break

//             case "s":
//                 console.log("down")
//                 inputDir.x = 0
//                 inputDir.y = 1
//                 break
//             case "a":
//                 console.log("left")
//                 inputDir.x = -1
//                 inputDir.y = 0
//                 break
//             case "d":
//                 console.log("right")
//                 inputDir.x = 1
//                 inputDir.y = 0
//                 break
//             default:
//                 break
//         }
//     })
// }
// })
