var header = document.getElementsByTagName("header")[0];
header.classList.remove("pending-header");
var prenomNom = document.createElement("a");
prenomNom.id = "prenom-nom";
prenomNom.innerText = "Hugo Pernin";
prenomNom.href = "index.html";
header.appendChild(prenomNom);
var topNav = document.createElement("nav");
topNav.id = "top-nav";
header.appendChild(topNav);
var ul = document.createElement("ul");
topNav.appendChild(ul);
var liAccueil = document.createElement("li");
ul.appendChild(liAccueil);
var aAccueil = document.createElement("a");
aAccueil.href = "index.html";
aAccueil.innerText = "Accueil";
liAccueil.appendChild(aAccueil);
var liCV = document.createElement("li");
ul.appendChild(liCV);
var aCV = document.createElement("a");
aCV.href = "#";
aCV.innerText = "CV";
liCV.appendChild(aCV);
var liCompetences = document.createElement("li");
ul.appendChild(liCompetences);
var aCompetences = document.createElement("a");
aCompetences.href = "competences.html";
aCompetences.innerText = "Compétences";
liCompetences.appendChild(aCompetences);
var liProjets = document.createElement("li");
ul.appendChild(liProjets);
var aProjets = document.createElement("a");
aProjets.href = "projets.html";
aProjets.innerText = "Projets";
liProjets.appendChild(aProjets);
var liParcours = document.createElement("li");
ul.appendChild(liParcours);
var aParcours = document.createElement("a");
aParcours.href = "parcours.html";
aParcours.innerText = "Parcours";
liParcours.appendChild(aParcours);
var liContact = document.createElement("li");
ul.appendChild(liContact);
var aContact = document.createElement("a");
aContact.href = "mailto:hugopernin70@gmail.com";
aContact.innerText = "Contact";
liContact.appendChild(aContact);
