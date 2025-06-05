import {Project} from "./Project.js";

/**
 * A category of projects
 */
export class ProjectCategory {
    private name: string;
    private projects: Project[];

    /**
     * Creates a category of projects
     * @param name name of the category
     */
    public constructor(name: string) {
        this.name = name;
        this.projects = [];
    }

    /**
     * Adds projects to the projects list
     * @param projects projects to add
     */
    public addProjects(projects: Project[]) {
        this.projects = this.projects.concat(projects);
    }

    /**
     * Gets the card of the category which displays its name, and its projects
     * @return the card
     */
    public getCard(): HTMLDivElement {
        let card: HTMLDivElement = document.createElement("div");
        card.classList.add("project-category-card");

        let name: HTMLHeadingElement = document.createElement("h2");
        name.classList.add("project-category-title");
        name.innerText = this.name;
        card.appendChild(name);

        let projects: HTMLDivElement = document.createElement("div");
        projects.classList.add("project-category");
        for (let project of this.projects) {
            projects.appendChild(project.getCard());
        }

        card.appendChild(projects);

        return card;
    }
}