import { getBackUrl } from "../controller/backUrl.js";

const backUrl = `${getBackUrl()}/security`;

const connexionSuccessBtn = document.getElementById("connexionSuccessBtn")
connexionSuccessBtn.addEventListener("click", validateRegisterUser);


function validateRegisterUser() {
    const fisrtName = document.getElementById("surNameUserIpt").value;
    const lastName = document.getElementById("nameUserIpt").value;
    const emailUser = document.getElementById("emailUserIpt").value;
    const login = document.getElementById("loginIpt").value;
    const password = document.getElementById("passwordIpt").value;
    const phoneNumberUser = document.getElementById("phoneNumberIpt").value;
    const birthdateUser = document.getElementById("birthdateIpt").value;
    const addressUser = document.getElementById("addressIpt").value;
    const roleName = "CLIENT";


    const requestOptions = {
        method: "POST",
        headers: { 
            "Content-Type" : "application/json" },
        body: JSON.stringify({
            surnameUser: fisrtName,
            lastNameUser: lastName,
            email: emailUser,
            login: login,
            password:  password,
            phoneNumber: phoneNumberUser,
            birthdateUser: birthdateUser,
            address:  addressUser,
            roleName: roleName,
        })
    };

    fetch(`${backUrl}/register`, requestOptions)
    .then(response => {
        console.log(response)
        console.log("Statut HTTP:", response.status);
        if (response.status == 201) {
            sessionStorage.setItem("registered", "true");
            window.location.href = "index.html";
        }
    });
}