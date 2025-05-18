let footer: HTMLElement = document.getElementsByTagName("footer")[0];

let text: HTMLParagraphElement = document.createElement("p");
text.innerHTML = "© Hugo Pernin 2025<br>Tous droits réservés.";
footer.appendChild(text);

let link: HTMLAnchorElement = document.createElement("a");
link.href = "https://www.linkedin.com/in/hugo-pernin/";
link.target = "_blank";

let image: HTMLImageElement = document.createElement("img");
image.src = "img/linkedin.png";
image.alt = "LinkedIn";
image.title = "LinkedIn";

link.appendChild(image);
footer.appendChild(link);