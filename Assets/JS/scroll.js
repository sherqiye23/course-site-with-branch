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