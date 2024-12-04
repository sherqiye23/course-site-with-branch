// Selectors
let closeButton = document.querySelector(".fa-xmark")
let signInForm = document.querySelector(".signIn")
let overlay = document.querySelector(".myOverlay")
let signInToForm = document.querySelector("#signInForm")
let myModal = document.querySelector(".myModal")


signInToForm.addEventListener("click",()=>{
    overlay.style.display = "block"
    myModal.style.display = "flex"
})
closeButton.addEventListener("click",()=>{
    overlay.style.display = "none"
    myModal.style.display = "none"
})
signInForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    overlay.style.display = "none"
    myModal.style.display = "none"
})
