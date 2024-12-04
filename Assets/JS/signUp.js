import { GetAllDatas, PostData } from "./API/requests.js";
import baseUrl from "./API/baseUrl.js";

let usernameReg = document.querySelector("#username");
let passwordReg = document.querySelector("#password");
let firstnameReg = document.querySelector("#firstname");
let emailReg = document.querySelector("#email");
let addressReg = document.querySelector("#address");
let repasswordReg = document.querySelector("#repassword");
let lastnameReg = document.querySelector("#lastname");
let birthdateReg = document.querySelector("#birthdate");
let phoneReg = document.querySelector("#phone");
let buttonReg = document.querySelector("#regButton");
let select = document.querySelector("#select");

select.addEventListener("change", (e) => {
    let genderValue;
    switch (e.target.value) {
        case "male":
            genderValue = "male";
            break;
        case "female":
            genderValue = "female";
            break;
    }
    buttonReg.addEventListener("click", (e) => {
        e.preventDefault();
        GetAllDatas(`${baseUrl}/users`).then((res) => {
            const datas = res.datas;
            let findEmail = datas.find(data => data.email == emailReg.value)
            if (findEmail) {
                alert("Bu mail ilə giriş olunub");
                return;
            }
            if (passwordReg.value != repasswordReg.value) {
                alert("Passwordu düzgün daxil edin");
                return;
            }
            if (usernameReg.value.trim() == "" || passwordReg.value.trim() == "" || firstnameReg.value.trim() == "" || emailReg.value.trim() == "" || addressReg.value.trim() == "" || repasswordReg.value.trim() == "" || lastnameReg.value.trim() == "" || birthdateReg.value.trim() == "" || phoneReg.value.trim() == "") {
                alert("İnputları düzgün daxil edin");
                return;
            }
            let newUser = {
                username: usernameReg.value,
                password: passwordReg.value,
                firstname: firstnameReg.value,
                gender: genderValue,
                email: emailReg.value,
                address: addressReg.value,
                repassword: repasswordReg.value,
                lastname: lastnameReg.value,
                birthdate: birthdateReg.value,
                phone: phoneReg.value
            }
            PostData(`${baseUrl}/users`, newUser).then(() => {})
        })
    })
})






