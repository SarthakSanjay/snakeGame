let direction = {x:0 ,y:0}
let speed = 2;
let lastPaintTime = 0
let snakeArr = [
    {x:12,
    y:15},
  
]
let board = document.getElementById("board")

function main(ctime){
    window.requestAnimationFrame(main)
    // console.log(ctime)
    if((ctime - lastPaintTime)/1000 < 1/speed){
        return
    }
    lastPaintTime = ctime
    game()
}

function game(){
    //update snake and food
    board.innerHTML = ""
    snakeArr.forEach((e,index)=>{
        snakeElement = document.createElement("div")
        snakeElement.style.gridRowStart = e.y
        snakeElement.style.gridColumnStart = e.x
        snakeElement.classList.add("food")
        board.appendChild(snakeElement)
    })

    //display snake and food
}









window.requestAnimationFrame(main)