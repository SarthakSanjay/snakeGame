export function regenerateFood(){
    let a = 1;
    let b = 20;
    let food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) }
    console.log('food regenerateed')
    return food
}