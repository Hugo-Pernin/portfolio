import {Technology} from "./Technology.js";
import {Link} from "./Link.js";

/**
 * A project
 */
export class Project {
    private name: string;
    private description: string;
    private links: Link[];
    private languagesList: Technology[];
    private softwareList: Technology[];

    /**
     * Creates a project
     * @param name name of the project
     * @param description description of the project
     */
    constructor(name: string, description: string) {
        this.name = name;
        this.description = description;
        this.links = [];
        this.languagesList = [];
        this.softwareList = [];
    }

    /**
     * Adds links to the links list
     * @param links links to add
     */
    public addLinks(links: Link[]) {
        this.links = this.links.concat(links);
    }

    /**
     * Adds languages to the languages list
     * @param languages languages to add
     */
    public addLanguages(languages: Technology[]): void {
        this.languagesList = this.languagesList.concat(languages);
    }

    /**
     * Adds software to the software list
     * @param software software to add
     */
    public addSoftware(software: Technology[]): void {
        this.softwareList = this.softwareList.concat(software);
    }

    /**
     * Gets the card of the project which displays its name, description, link, languages and software
     * @return the card
     */
    public getCard(): HTMLDivElement {
        let card: HTMLDivElement = document.createElement("div");
        card.classList.add("project-card");

        let name: HTMLHeadingElement = document.createElement("h2");
        name.innerText = this.name;
        card.appendChild(name);

        let description: HTMLParagraphElement = document.createElement("p");
        description.innerText = this.description;
        card.appendChild(description);

        let links: HTMLDivElement = document.createElement("div");
        links.classList.add("links");
        for (let link of this.links) {
            links.appendChild(link.getCard());
        }
        card.appendChild(links);

        let technologies: HTMLDivElement = document.createElement("div");
        technologies.classList.add("technologies");
        for (let language of this.languagesList) {
            technologies.appendChild(language.getSmallCard());
        }
        let separator: HTMLParagraphElement = document.createElement("p");
        separator.classList.add("separator");
        separator.innerText = "|";
        technologies.appendChild(separator);
        for (let software of this.softwareList) {
            technologies.appendChild(software.getSmallCard());
        }

        card.appendChild(technologies);

        return card;
    }
}