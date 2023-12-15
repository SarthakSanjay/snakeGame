export function displayFood(board ,foodElement, food, foodClass) {
    foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add(foodClass)
    board.appendChild(foodElement)
}