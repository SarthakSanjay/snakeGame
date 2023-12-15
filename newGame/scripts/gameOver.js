import { gameOverSound } from "./sounds.js"
export function gameOver(){
    gameOverSound.play()
    displayGameOver()
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