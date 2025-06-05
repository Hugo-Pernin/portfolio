import {Technology} from "./Technology.js";

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
     * Adds technologies to the technologies list
     * @param technologies technologies to add
     */
    public addTechnologies(technologies: Technology[]) {
        this.technologies = this.technologies.concat(technologies);
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
        for (let technology of this.technologies) {
            technologies.appendChild(technology.getBigCard());
        }

        card.appendChild(technologies);

        return card;
    }
}