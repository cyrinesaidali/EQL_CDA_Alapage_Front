import { getBackUrl } from "../controller/backUrl.js";

const backUrl = `${getBackUrl()}/catalog`;
const user = JSON.parse(sessionStorage.getItem("user"));
console.log(sessionStorage.getItem("user"));

if (window.location.pathname === '/clientAllTextbooks.html') {
    showAllItems();
};

function showAllItems() {
    fetch(`${backUrl}/displayTextbooks`, {
        method: 'GET',
        headers: {
            "Authorization": "Bearer " + user.token,  
            "Content-Type": "application/json"
        }
    })
    .then(console.log(user.token))
    .then(
        response => {
        console.log(response);
        if (!response.ok) {
            throw new Error('ERREUR');
        }
        return response.json();
    })
    .then(data => console.log(data))
};