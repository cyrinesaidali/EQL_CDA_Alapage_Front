'use strict';

const client =  sessionStorage.getItem("CLIENT");

const navigationHtml = client ?  "../arch/clientConnectedNavBar.html" :   "../arch/notConnectedNavBar.html";

fetch("../arch/header.html")
    .then(response => response.text())
    .then(html => {
        document.getElementById("header").innerHTML = html
        fetch(navigationHtml)
        .then(response => response.text())
        .then(html => {document.getElementById("navigationBarForAll").innerHTML = html
          let userName = JSON.parse(client);
      
          if(userName) {
            document.getElementById('idClientProfile').innerHTML = `Bienvenue : ${userName.lastNameUser} ${userName.surnameUser}`
          }
        })
    }
)

fetch("../arch/footer.html")
    .then(response => response.text())
    .then(html => document.getElementById("footer").innerHTML = html);

function disconnection() {
  sessionStorage.setItem("CLIENT", "true");
  sessionStorage.removeItem("CLIENT")
}
