import {Technology} from "./Technology";

/**
 * A category of technologies
 */
export class TechnologyCategory {
    private name: string;
    private technologies: Technology[];

    /**
     * Creates a category of technologies
     * @param name name of the category
     */
    public constructor(name: string) {
        this.name = name;
        this.technologies = [];
    }

    /**
     * Adds a technology to the technologies list
     * @param technology technology to add
     */
    public addTechnology(technology: Technology) {
        this.technologies.push(technology);
    }

    /**
     * Gets the card of the category which displays its name, and its technologies logos and names
     * @return the card
     */
    public getCard(): HTMLDivElement {
        let card: HTMLDivElement = document.createElement("div");
        card.classList.add("technology-category-card");

        let name: HTMLHeadingElement = document.createElement("h3");
        name.innerText = this.name;
        card.appendChild(name);

        let technologies: HTMLDivElement = document.createElement("div");
        technologies.classList.add("technologies");
        for (let technology of this.technologies) {
            technologies.appendChild(technology.getBigCard());
        }

        card.appendChild(technologies);

        return card;
    }
}