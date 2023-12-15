import { eatSound } from "./sounds.js";
import { updateSnake } from "./updateSnake.js";
import { regenerateFood } from "./regenerateFood.js";
import { updateScore } from "./updateScore.js";
export function checkFoodCollision(inputDir,foodItem,snakeArr ,points) {
    if (snakeArr[0].y === foodItem.y && snakeArr[0].x === foodItem.x) {
        // displayPoints(points);
        eatSound.play();
        
        // updateSnake(snakeArr , inputDir);
        // regenerateFood(foodItem);
        return true
    }
}