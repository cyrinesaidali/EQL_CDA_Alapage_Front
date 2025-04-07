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
    .then(response => response.ok ? response.text() : Promise.reject(response)) //Permet de mettre la réponse sous forme de tableau
    .then(response => 
        {
            console.log(response);
        })
    .then(data => {
        console.log( "test :" + data);
        let i = 1;
        data.forEach(item => {
            displayAvailableTextbooks(i, item);
            i++
        });
    })
        .catch(response =>
        {
            console.error(
            "Erreur lors de l'affichage des manuels dispos",
            `${response.status} ${response.statusText}`);
        });
};

