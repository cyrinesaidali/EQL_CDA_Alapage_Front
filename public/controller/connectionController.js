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
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erreur HTTP : ${response.status}`);
        }
        return response.json(); // Récupération du JSON
    })
    .then(data => {
        sessionStorage.setItem("user",data)
        console.log("Réponse JSON :", data);
    })
    .catch(error => {
        console.error("Une erreur s'est produite lors de l'authentification :", error);
    });
}
