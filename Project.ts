import {Technology} from "./Technology";

/**
 * A project
 */
export class Project {
    private name: string;
    private description: string;
    private linkText: string;
    private linkHref: string;
    private languagesList: Technology[];
    private softwareList: Technology[];

    /**
     * Creates a project
     * @param name name of the project
     * @param description description of the project
     * @param linkText text of the link
     * @param linkHref url of the redirection of the link
     */
    constructor(name: string, description: string, linkText?: string, linkHref?: string) {
        this.name = name;
        this.description = description;
        this.linkText = linkText;
        this.linkHref = linkHref;
        this.languagesList = [];
        this.softwareList = [];
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

        if (this.linkHref != null) {
            let link: HTMLAnchorElement = document.createElement("a");
            link.innerText = this.linkText;
            link.href = this.linkHref;
            link.target = "_blank";
            card.appendChild(link);
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