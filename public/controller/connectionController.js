import { getBackUrl } from "../controller/backUrl.js";

const backUrl = `${getBackUrl()}/security`;

connectionWhenClickBtn();

function connectionWhenClickBtn() {
    const conectionBtn = document.getElementById("connectionBtn");
    conectionBtn.addEventListener("click", authenticate);
}

function authenticate() {
    const login = document.getElementById('loginValue').value;
    const password = document.getElementById('passwordValue').value;
    const owner = JSON.parse(sessionStorage.getItem("idUser"));


    const requestOptions = {
        method: "POST",
        headers: { 
            "Authorization": "Bearer " + owner.token,  
            "Content-Type" : "application/json" },
        body: JSON.stringify({login: login, password: password })
    };
    fetch(`${backUrl}/authenticate`, requestOptions)
        .then(console.log("111111111111"))
        .then(response => response.ok ? response.json() : Promise.reject(response))
        .then(console.log("2222222222222222"))
        .then(json => setOwner(json))
        .catch(response => {
            console.error("Une erreur s'est produite lors de l'authentification",)
        });
}
