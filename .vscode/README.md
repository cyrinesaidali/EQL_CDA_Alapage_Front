## PROJET CDA - APPLICATION ALAPAGE
## ENDPOINTS
Starts by: /api/rest

## ADMINISTRATEUR : 

### Security : 1 - S'enregistrer - ADMIN :
/!\ CHANGER LES PARAMS A METTRE DANS LE JSON ET REGISTRATION SITE DTo

### Création identifiants 
→ POST:  localhost:8080/api/rest/security/register


### Security : 2 : S'authentifier :
- POST : localhost:8080/api/rest/security/authenticate


### Ajout de manuels scolaires
- POST : 


### Affichage des manuels scolaires
- GET : localhost:8080/api/rest/client/displayTextbook
- *token à renseigner*


### Suppression de manuels scolaires: 
- DEL : localhost:8080/api/rest/administrator/deleteTextbook
*token à renseigner*

{
"isbn": "333333333333"
}


## CLIENT : 

### Security : 1 Bis - S'enregistrer - Client  :
- POST :



### Security 2 Bis : S'authentifier :
- POST : localhost:8080/api/rest/security/authenticate
  


### Affichage des manuels scolaires seulement disponibles
- GET : localhost:8080/api/rest/catalog/displayTextbooks



