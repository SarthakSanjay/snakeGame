export function displaySnake(board , snakeArr ){
    board.innerHTML = ""
    snakeArr.forEach((e, index) => {
        let snakeElement = document.createElement("div")
        snakeElement.style.gridRowStart = e.y
        snakeElement.style.gridColumnStart = e.x
        if (index === 0) {
            snakeElement.classList.add("snake-head")
        } else {
            snakeElement.classList.add("snake")
        }
        board.appendChild(snakeElement)
    })
}