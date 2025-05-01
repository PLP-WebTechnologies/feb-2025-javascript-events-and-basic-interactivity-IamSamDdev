

const plaincolor = document.getElementById("plain-color")
const plainColorBtn = document.getElementById("plain-color-btn")
const hoverText = document.getElementById("hover-text")
const keyPressed = document.getElementById("any-key-pressed")
const defaultMessage = document.getElementById("default-message")
const imageBtn = document.getElementById("image-btn")
const myImage = document.getElementById("image") 
const revealBtn = document.getElementById("reveal-btn")
const nextImageBtn = document.getElementById("next-image-btn")
const toggleTab = document.getElementById("toggle-tab")
const info = document.getElementById("info")
const animationBox = document.getElementById("animation-box")
const submitBtn = document.getElementById("submit-btn")
const formMessage = document.getElementById("form-message")
const form = document.getElementById("form")


plainColorBtn.addEventListener("click", function(){
    plaincolor.style.background = "red"
})


hoverText.onmouseover = function(){
    hoverText.style.fontSize = "30px"
    hoverText.style.backgroundColor = "orange"
    hoverText.style.width = "fit-content"
}

hoverText.onmouseout = function(){
    hoverText.style.fontSize = "40px"
    hoverText.style.backgroundColor = "gray"
}

document.addEventListener("keydown", function(){
    keyPressed.textContent = `You are blessed`
    keyPressed.style.fontSize = "30px"
    keyPressed.style.color = "#f4f4f9"
    keyPressed.style.fontWeight = "bold"
    defaultMessage.style.display =  "none"
})


imageBtn.addEventListener("dblclick", function(){
    myImage.style.display = "block"
    imageBtn.style.display = "none"
})


revealBtn.addEventListener("click", function(){
    this.textContent = "Welcome!!"
})


const images = ["img-1.jpg", "img-2.jpg", "img-3.jpg"]
let current = 0

nextImageBtn.addEventListener("click", function(){
    current = (current + 1) % images.length
    document.getElementById("slideshow").src = images[current]
    
})


toggleTab.addEventListener("click", function(){
    info.style.display = (info.style.display === "none") ? "block" : "none"
})


animationBox.addEventListener("click", function(){
    animationBox.style.transform = "translateX(100px)";
})


form.addEventListener("submit", function(e){
    e.preventDefault()

    formMessage.textContent = "form submiited successfully"
    setTimeout(() => {
        formMessage.textContent = ""
    }, 3000)
    console.log("button clicked")
})

