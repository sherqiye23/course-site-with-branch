import { GetAllDatas } from "./API/requests.js";
import baseUrl from "./API/baseUrl.js";

let userName = document.querySelector("#usernameLog")
let password = document.querySelector("#passwordLog")
let signInForm = document.querySelector(".signIn")

signInForm.addEventListener("submit",(e)=>{
    e.preventDefault()

    GetAllDatas(`${baseUrl}/users`)
    .then(res => {
        let users = res.datas
        console.log(users);
        console.log(userName.value,password.value);
        
        let findedUser = users.find(user => user.username == userName.value && user.password == password.value)
        console.log(findedUser);        
        if(findedUser){
            Swal.fire({
                icon: "success",
                title: "WELCOME!!!",
                showConfirmButton: false,
                timer: 1500
            });
        }else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Invalid password or email!"
            });
        }
        Clear()
    })
})
function Clear() {
    userName.value = ""
    password.value = ""
}