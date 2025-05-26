document.addEventListener("DOMContentLoaded", (): void => {
    let footer: HTMLElement = document.getElementsByTagName("footer")[0];
    footer.classList.remove("pending-footer");

    let text: HTMLParagraphElement = document.createElement("p");
    text.innerHTML = "© Hugo Pernin 2025<br>Tous droits réservés.";
    footer.appendChild(text);

    let links: HTMLDivElement = document.createElement("div");
    links.id = "footer-links";
    footer.appendChild(links);

    let github: HTMLAnchorElement = document.createElement("a");
    github.href = "https://github.com/Hugo-Pernin";
    github.target = "_blank";
    links.appendChild(github);

    let githubImage: HTMLImageElement = document.createElement("img");
    githubImage.src = "img/github.svg";
    githubImage.alt = "GitHub";
    githubImage.title = "GitHub";
    github.appendChild(githubImage);

    let linkedin: HTMLAnchorElement = document.createElement("a");
    linkedin.href = "https://www.linkedin.com/in/hugo-pernin/";
    linkedin.target = "_blank";
    links.appendChild(linkedin);

    let linkedinImage: HTMLImageElement = document.createElement("img");
    linkedinImage.src = "img/linkedin.png";
    linkedinImage.alt = "LinkedIn";
    linkedinImage.title = "LinkedIn";
    linkedin.appendChild(linkedinImage);
});