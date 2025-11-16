// Serveur ExpressJS :  Mise en place des modules néecessaires, ports, et Apps

// Import des différents modules nécessaires pour faire tourner express :
const express = require('express');
const path = require('path');

const cors = require('cors'); // Import du middleware CORS


// Création de la constante App → Va permettre de faire tourner le serveur +  permet d'envoyer les différentes pages HTML
const app = express();

//DIFFÉRENTES ROUTES POUR L'APP : Mise en place des différentes routes avec les pages Tetststststststs 

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/pages')));
app.use(express.static(path.join(__dirname, 'public/resources')));
app.use(express.static(path.join(__dirname, 'public/arch')));
app.use(express.static(path.join(__dirname, 'public/controller')));


app.use(cors({ origin: 'http://localhost:3000' }));

// Démarrage du serveur :
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Le serveur tourne sur le port : ${PORT}`);
});