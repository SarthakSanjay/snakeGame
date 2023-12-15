export function isCollide(snakeArr) {
    // is snake collide with itself

    for (let i = 1; i < snakeArr.length; i++) {
        if (snakeArr[i].x === snakeArr[0].x && snakeArr[i].y === snakeArr[0].y) {
            return true
        }
    }
    // if collided with wall
    if (snakeArr[0].x >= 21 || snakeArr[0].x < 0 || snakeArr[0].y >= 21 || snakeArr[0].y <= 0) {
        return true
    }
    // snake colliding function 
    return false
}