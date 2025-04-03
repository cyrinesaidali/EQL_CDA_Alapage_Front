'use strict';

const administrator =  sessionStorage.getItem("admin");

const navigationHtml = administrator ? "../arch/adminNavBar.html" : "../arch/guestNavBar.html"

fetch("./arch/header.html")
    .then(response => response.text())
    .then(html => document.getElementById("header").innerHTML = html);



fetch("./arch/footer.html")
.then(response => response.text())
.then(html => document.getElementById("footer").innerHTML = html);