import { getBackUrl } from "../controller/backUrl.js";
import { displayAvailableTextbooks } from "../view/clientTextbookView.js"

const backUrl = `${getBackUrl()}/catalog`;

const client = JSON.parse(sessionStorage.getItem("CLIENT"));
console.log(client);

fetchGetAvailableTextbooks();

   function fetchGetAvailableTextbooks() {
    fetch(`${backUrl}/displayTextbooks`, {
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + client.token,
            "Content-Type": "application/json"
        }
    })
    .then(response => response.ok ? response.json() : Promise.reject(response))
    .then(response => {
        console.log("Réponse complète :", response);
        response.forEach((item, index) => {
            displayAvailableTextbooks(index + 1, item);
        });
    })
    .catch(error => {
        console.error("Erreur lors de la récupération des manuels :", error);
    });
}



