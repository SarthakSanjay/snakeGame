export function displayPoints(){
    let pts = document.querySelector(".pointsElement")
        pts.style.setProperty("display", "block")
        setTimeout(()=>{
            pts.style.setProperty("transform", "scale(0.8)")
        },500)
        pts.innerHTML = "+5" 
        setTimeout(()=>{
            pts.style.removeProperty("display" ,"block")
            pts.style.removeProperty("transform", "scale(0.8)")
        },1000)
        eatSound.play()
}