// Selectors
let closeButton = document.querySelector(".fa-xmark")
let signInForm = document.querySelector(".signIn")
let overlay = document.querySelector(".myOverlay")
let signInToForm = document.querySelector("#signInForm")
let myModal = document.querySelector(".myModal")



window.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY

    let header = document.querySelector("#navbar .container")
    if (scrollPosition > 30) {
        header.style.position = "fixed"
        header.style.top = "0"
        header.style.left = "0"
        header.style.right = "0"
        header.style.backgroundColor = "ghostwhite"
        header.style.maxWidth = "1900px"
        header.style.margin = "0px auto"
        header.style.padding = "5px 80px"
    } else {
        header.style.backgroundColor = "#fff"
        header.style.color = "black"
        header.style.maxWidth = "1140px"
        header.style.padding = "0px"
        header.style.position = "static"

    }

})
signInToForm.addEventListener("click", () => {
    overlay.style.display = "block"
    myModal.style.display = "flex"
})
closeButton.addEventListener("click", () => {
    overlay.style.display = "none"
    myModal.style.display = "none"
})
signInForm.addEventListener("submit", (e) => {
    e.preventDefault()
    overlay.style.display = "none"
    myModal.style.display = "none"
})
