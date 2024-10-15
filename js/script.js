let preloader = document.getElementsByClassName("preloader")[0]
let body = document.getElementsByTagName("body")[0];
let bars = document.getElementsByClassName("bar")
let loader = document.getElementsByClassName("loader")[0]
let navbar = document.getElementsByClassName("navbar")[0]
let main = document.getElementsByTagName("main")[0];
// let text = document.getElementsByClassName("text")[0];
let home = document.getElementById("home")

let div1 = document.getElementsByClassName("loader")[0]
let div2 = document.getElementsByTagName("footer")[0]
// let div3 = document.getElementsByClassName("blue")[0]

// let footer1 = document.getElementsByClassName("footer")[0]
// let footer2 = document.getElementsByTagName("footer")[0]

let showProfile = document.getElementsByClassName("show-profile")[0];

showProfile.addEventListener("click", ()=>{
    window.open("https://www.linkedin.com/in/mayank-arora-336256320/", "_blank")
})




let changeBg = ()=>{

    
    let array = [div1, div2]
    let color_array = ["#243642", "black"]
    
    window.onscroll = ()=>{
        div1.style.transition = "all 0.75s"
        for(let i = 0; i<array.length; i++){
            console.log(array[i])
            console.log(window.scrollY)
            if(i!=0 && window.scrollY > 128){
                array[i-1].style.background = "none"
                array[i-1].style.backgroundColor = color_array[i]
            }
            // array[i].style.background = "url('imgs/bg.jpg')"
            if(i == 0 && window.scrollY < 128){
                array[i].style.background = "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url('imgs/bg2.jpg')"
                array[i].style.backgroundSize = "cover";
                array[i].style.backgroundRepeat = "no-repeat"
                // array[i].style.transition = "all 1s"
                // array[i].style.backgroundColor = color_array[i]
            }
            
        }
    }
}        
body.style.overflowY = "hidden"
navbar.style.opacity = 0;
main.style.display = "none"
// div2.style.display = "none"

let showPreloader = ()=>{
    body.style.transition = "none"
    setTimeout(()=>{

        preloader.style.animation = "slidePreloader 1s ease"
    }, 2000)
    // body.style.backgroundColor = "black"
    setTimeout(()=>{
        preloader.style.display = "none"
        body.style.overflowY = "visible"
        
        // body.style.transition = "all 0.5s"
        // window.scrollTo(0,-window.scrollY);
        
    }, 3000)
}

let showBackgroundAnimation = ()=>{
    let totalTime = 0;
    let animationDelay = 0.025;
    // setTimeout(())
    for(let i = 0; i<bars.length; i++){
        bars[i].style.animationName = "changeHeight"
        bars[i].style.animationDuration = "1s"
        bars[i].style.animationTimingFunction = "ease-out"
        totalTime += i*animationDelay
        
        bars[i].style.animationDelay = `${i*animationDelay}s`
    }
    setTimeout(()=>{
        body.style.backgroundColor = "#243642"
        // loader.style.backgroundColor = "#243642"
        loader.style.background = "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url('imgs/bg2.jpg')"
        // loader.style.background = "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))"
        loader.style.backgroundRepeat = "no-repeat"
        loader.style.backgroundSize = "cover"
        navbar.style.opacity = 1;
        main.style.display = "block"
        // footer1.style.opacity = 1;
        // footer2.style.display = "flex"
        // body.style.backgroundColor = "white"
        script = document.createElement("script")
        script.innerHTML = "AOS.init()";
        body.appendChild(script)
        
    }, totalTime*1000+400)

}


window.onload = ()=>{
    // div2.style.display = "none"
    // footer1.style.opacity = 0
    // footer2.style.display = "none"

    // window.scrollTo(0,0)
    showPreloader()
    setTimeout(()=>{
        showBackgroundAnimation()
    }, 1500)
    setTimeout(()=>{
        // div2.style.display = "block"

    }, 3000)
    changeBg()
}