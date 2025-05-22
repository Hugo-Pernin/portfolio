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
     * Adds a link to the links list
     * @param link link to add
     */
    public addLink(link: Link) {
        this.links.push(link);
    }

    /**
     * Adds a language to the languages list
     * @param language language to add
     */
    public addLanguage(language: Technology): void {
        this.languagesList.push(language);
    }

    /**
     * Adds a piece of software to the software list
     * @param software piece of software to add
     */
    public addSoftware(software: Technology): void {
        this.softwareList.push(software);
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

        for (let link of this.links) {
            card.appendChild(link.getCard());
        }

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