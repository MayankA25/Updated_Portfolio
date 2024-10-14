let innerCursor = document.getElementsByClassName("innerCursor")[0];
let outerCursor = document.getElementsByClassName("outerCursor")[0];


window.addEventListener("mousemove", (e)=>{
    let posX = e.clientX;
    let posY = e.clientY
    innerCursor.style.transition = "all 0.06s"
    outerCursor.style.transition = "all 0.09s"
    innerCursor.style.transform = `translate(${posX}px, ${posY}px)`
    outerCursor.style.transform = `translate(${posX}px, ${posY}px)`

})

