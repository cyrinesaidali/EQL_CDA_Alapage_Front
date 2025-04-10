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

    const requestOptions = {
        method: "POST",
        headers: { 
            "Content-Type" : "application/json" },
        body: JSON.stringify({login: login, password: password })
    };
    fetch(`${backUrl}/authenticate`, requestOptions)
    .then(response => response.ok ? response.text() : Promise.reject(response))
    .then(dataClient => 
        {
        sessionStorage.setItem("CLIENT", dataClient)
        window.location.href = "clientConsultTextbooks.html";
        console.log("Réponse JSON :", dataClient);
        })
    .catch(response =>
        {
            console.error(
            "Une erreur s'est produite lors de l'authentification",
            `${response.status} ${response.statusText}`);
        });
}

