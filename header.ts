let header: HTMLElement = document.getElementsByTagName("header")[0];
header.classList.remove("pending-header");

let prenomNom: HTMLParagraphElement = document.createElement("p");
prenomNom.id = "prenom-nom";
prenomNom.innerText = "Hugo Pernin";
header.appendChild(prenomNom);

let topNav: HTMLElement = document.createElement("nav");
topNav.id = "top-nav";
header.appendChild(topNav);

let ul: HTMLUListElement = document.createElement("ul");
topNav.appendChild(ul);

let liAccueil: HTMLLIElement = document.createElement("li");
ul.appendChild(liAccueil);

let aAccueil: HTMLAnchorElement = document.createElement("a");
aAccueil.href = "index.html";
aAccueil.innerText = "Accueil";
liAccueil.appendChild(aAccueil);

let liCV: HTMLLIElement = document.createElement("li");
ul.appendChild(liCV);

let aCV: HTMLAnchorElement = document.createElement("a");
aCV.href = "#";
aCV.innerText = "CV";
liCV.appendChild(aCV);

let liCompetences: HTMLLIElement = document.createElement("li");
ul.appendChild(liCompetences);

let aCompetences: HTMLAnchorElement = document.createElement("a");
aCompetences.href = "competences.html";
aCompetences.innerText = "Compétences";
liCompetences.appendChild(aCompetences);

let liProjets: HTMLLIElement = document.createElement("li");
ul.appendChild(liProjets);

let aProjets: HTMLAnchorElement = document.createElement("a");
aProjets.href = "projets.html";
aProjets.innerText = "Projets";
liProjets.appendChild(aProjets);

let liParcours: HTMLLIElement = document.createElement("li");
ul.appendChild(liParcours);

let aParcours: HTMLAnchorElement = document.createElement("a");
aParcours.href = "parcours.html";
aParcours.innerText = "Parcours";
liParcours.appendChild(aParcours);

let liContact: HTMLLIElement = document.createElement("li");
ul.appendChild(liContact);

let aContact: HTMLAnchorElement = document.createElement("a");
aContact.href = "#";
aContact.innerText = "Contact";
liContact.appendChild(aContact);