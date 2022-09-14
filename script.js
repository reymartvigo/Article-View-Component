let share = document.querySelector(".share")
let box = document.querySelector(".box")
let button1 = document.querySelector('.click')
let button2 = document.querySelector('.closed')

// show the share content 
button1.addEventListener("click", () =>{
    button2.style.display = "block"
    share.style.display = "flex"
    box.style.display = "block"
})

// show the share content 
button2.addEventListener("click", () =>{
    button2.style.display = "none"
    share.style.display = "none"
    box.style.display = "none"
})








