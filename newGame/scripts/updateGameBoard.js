import { displayFood } from "./displayFood.js";
import { displaySnake } from "./displaySnake.js";
export function updateGameBoard(board, snakeArr, foodItem, food2Item, food3Item) {
    board.innerHTML = "";
    displaySnake(board , snakeArr )
    displayFood(board, "foodElement", foodItem, "snake-food");
    displayFood(board, "food2Element", food2Item, "snake-food2");
    displayFood(board, "food3Element", food3Item, "snake-food3");
}
