let cursor = document.getElementsByClassName("cursor")[0];
let innerCursor = document.getElementsByClassName("innerCursor")[0];
// let outerCursor = document.getElementsByClassName("outerCursor")[0];
let a = document.querySelectorAll("ul li a");
let btn = document.getElementsByClassName("btn");
let icons = document.querySelectorAll(".icons i");

window.addEventListener("mousemove", (e)=>{
    let posX = e.clientX;
    let posY = e.clientY
    innerCursor.style.transition = "all 0.06s"
    // outerCursor.style.transition = "all 0.09s"
    innerCursor.style.transform = `translate(${posX}px, ${posY}px)`
    // outerCursor.style.transform = `translate(${posX}px, ${posY}px)`

})


mouseEnter = (x)=>{
    for(let i = 0; i<x.length; i++){
        x[i].addEventListener("mouseenter", ()=>{
            // cursor.appendChild(plusCursor);
            // outerCursor.style.width = "55px";
            // outerCursor.style.height = "55px";
            innerCursor.style.width = "15px";
            innerCursor.style.height = "15px";
            // outerCursor.style.border = "4px solid #8000ff"
            innerCursor.style.backgroundColor = "#ff00aa";
            innerCursor.style.display = "none";
            // innerCursor.style.zIndex = -0.5
        })

        x[i].addEventListener("mouseleave", ()=>{
            // outerCursor.style.width = "40px";
            // outerCursor.style.height = "40px";
            innerCursor.style.width = "10px";
            innerCursor.style.height = "10px";
            // outerCursor.style.border = "4px solid #be82fa"
            innerCursor.style. backgroundColor = "#ff00aa"
            innerCursor.style.display = "block"
        })
    }
}

mouseEnter(btn);
mouseEnter(a);
mouseEnter(icons)


window.addEventListener("mousedown", ()=>{
    innerCursor.style.width = "15px"
    innerCursor.style.height = "15px"
    innerCursor.style.backgroundColor = "#ff00aa"
})

window.addEventListener("mouseup", ()=>{
    innerCursor.style.width = "10px";
    innerCursor.style.height = "10px"
    innerCursor.style.backgroundColor = "#ff00aa";
})