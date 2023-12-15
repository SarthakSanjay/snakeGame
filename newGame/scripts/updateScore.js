let score = 0
export function updateScore(points){
    let scoreElement = document.getElementById('scoreElement')
    score += points
    scoreElement.innerHTML = "Score: " + score
}