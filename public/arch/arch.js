'use strict';

const admin =  sessionStorage.getItem("ADMINISTRATOR");

const navigationHtml = admin ? "../arch/adminNavBar.html" : "../arch/clientNavBar.html"

fetch("./arch/header.html")
    .then(response => response.text())
    .then(html => document.getElementById("header").innerHTML = html);



fetch("./arch/footer.html")
.then(response => response.text())
.then(html => document.getElementById("footer").innerHTML = html);


