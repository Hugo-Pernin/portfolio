import {Technology} from "./Technology.js";
import {Project} from "./Project.js";
import {TechnologyCategory} from "./TechnologyCategory.js";
import {Link} from "./Link.js";

/**
 * Class that loads technologies and projects
 */
export class Loader {
    private static instance: Loader;

    private technologies: Technology[];
    private projects: Project[];
    private categories: TechnologyCategory[];

    private constructor() {
        this.technologies = [];
        this.projects = [];
        this.categories = [];

        let python: Technology = new Technology("Python", "img/python.svg");
        let java: Technology = new Technology("Java", "img/java.svg");
        let csharp: Technology = new Technology("C#", "img/c_sharp.svg");
        let c: Technology = new Technology("C", "img/c.svg");
        let cplusplus: Technology = new Technology("C++", "img/c_plus_plus.svg");
        let assembly: Technology = new Technology("Langage assembleur", "img/assembly.png");
        let nodered: Technology = new Technology("Node-RED", "img/node-red.png");
        let pycharm: Technology = new Technology("PyCharm", "img/pycharm.svg");
        let visualstudio: Technology = new Technology("Visual Studio", "img/visual_studio.svg");
        let visualstudiocode: Technology = new Technology("Visual Studio Code", "img/visual_studio_code.svg");
        let arduino: Technology = new Technology("Arduino", "img/arduino.svg");

        let androidstudio: Technology = new Technology("Android Studio", "img/android_studio.svg");

        let html: Technology = new Technology("HTML", "img/html.svg");
        let css: Technology = new Technology("CSS", "img/css.svg");
        let javascript: Technology = new Technology("JavaScript", "img/javascript.svg");
        let typescript: Technology = new Technology("TypeScript", "img/typescript.svg");
        let php: Technology = new Technology("PHP", "img/php.svg");
        let webstorm: Technology = new Technology("WebStorm", "img/webstorm.svg");
        let phpstorm: Technology = new Technology("PHPStorm", "img/phpstorm.svg");
        let xampp: Technology = new Technology("XAMPP", "img/xampp.png");

        let mysql: Technology = new Technology("MySQL", "img/mysql.png");
        let plsql: Technology = new Technology("PL/SQL", "img/plsql.svg");
        let mariadb: Technology = new Technology("MariaDB", "img/mariadb.svg");
        let sqlite: Technology = new Technology("SQLite", "img/sqlite.svg");
        let mysqlworkbench: Technology = new Technology("MySQL Workbench", "img/mysql_workbench.svg");
        let sqldeveloper: Technology = new Technology("SQL Developer", "img/sql_developer.svg");

        let unix: Technology = new Technology("Unix", "img/unix.svg");
        let docker: Technology = new Technology("Docker", "img/docker.svg");
        let virtualbox: Technology = new Technology("VirtualBox", "img/virtualbox.svg");

        let uml: Technology = new Technology("UML", "img/uml.svg");
        let visualparadigm: Technology = new Technology("Visual Paradigm", "img/visual_paradigm.png");

        let git: Technology = new Technology("Git", "img/git.svg");
        let teams: Technology = new Technology("Teams", "img/teams.svg");

        let wordexcelpowerpoint: Technology = new Technology("Word, Excel & Powerpoint", "img/word_excel_powerpoint.svg");
        let googledocssheetsslides: Technology = new Technology("Google Docs, Sheets & Slides", "img/google_docs_sheets_slides.png");

        this.technologies.push(python, java, csharp, c, cplusplus, assembly, nodered, pycharm, visualstudio,
            visualstudiocode, arduino, androidstudio, html, css, javascript, typescript, php, webstorm, phpstorm,
            mysql, plsql, mariadb, sqlite, mysqlworkbench, sqldeveloper, unix, docker, virtualbox, uml,
            visualparadigm, git, teams, wordexcelpowerpoint, googledocssheetsslides);

        let applicationDevelopment: TechnologyCategory = new TechnologyCategory("Développement d'applications");
        applicationDevelopment.addTechnologies([python, java, csharp, c, cplusplus, assembly, nodered, pycharm, visualstudio, visualstudiocode, arduino]);

        let mobileDevelopment: TechnologyCategory = new TechnologyCategory("Développement mobile");
        mobileDevelopment.addTechnologies([java, androidstudio]);

        let webDevelopment: TechnologyCategory = new TechnologyCategory("Développement web");
        webDevelopment.addTechnologies([html, css, javascript, typescript, php, webstorm, phpstorm, xampp]);

        let databases: TechnologyCategory = new TechnologyCategory("Bases de données");
        databases.addTechnologies([mysql, plsql, mariadb, sqlite, mysqlworkbench, sqldeveloper]);

        let others: TechnologyCategory = new TechnologyCategory("Autres");
        others.addTechnologies([unix, docker, virtualbox]);

        let conception: TechnologyCategory = new TechnologyCategory("Conception");
        conception.addTechnologies([uml, visualparadigm]);

        let collaboration: TechnologyCategory = new TechnologyCategory("Collaboration");
        collaboration.addTechnologies([git, teams]);

        let bureautique: TechnologyCategory = new TechnologyCategory("Bureautique");
        bureautique.addTechnologies([wordexcelpowerpoint, googledocssheetsslides]);

        this.categories.push(applicationDevelopment, mobileDevelopment, webDevelopment, databases, others, conception, collaboration, bureautique);

        let portfolio: Project = new Project("Portfolio", "Site web statique présentant mes projets et compétences. Vous êtes actuellement dessus !");
        portfolio.addLink(new Link("Dépôt GitHub", "https://github.com/Hugo-Pernin/portfolio/"));
        portfolio.addLanguage(html);
        portfolio.addLanguage(css);
        portfolio.addLanguage(typescript);
        portfolio.addSoftware(webstorm);

        let nesweeper: Project = new Project("NESweeper", "Démineur jouable sur Nintendo Entertainment System.");
        nesweeper.addLink(new Link("Page itch.io", "https://hugo70.itch.io/nesweeper"));
        nesweeper.addLanguage(assembly);
        nesweeper.addSoftware(visualstudiocode);

        let cliofy: Project = new Project("Cliofy", "Application mobile utilisant l'API web de Spotify.");
        cliofy.addLanguage(java);
        cliofy.addSoftware(androidstudio);

        let lesdenaises: Project = new Project("Site web de la ferme Les Denaises", "Site vitrine réalisé dans le cadre de mon année de terminale STI2D, en collaboration avec une ferme locale.");
        lesdenaises.addLink(new Link("Lien vers le site web", "https://www.lesdenaises.fr/"));
        lesdenaises.addLanguage(html);
        lesdenaises.addLanguage(css);

        let projecteuler: Project = new Project("Résolution de problèmes mathématiques sur Project Euler", "Création de programmes Python pour résoudre des problèmes du site web Project Euler, qui répertorie des problèmes mathématiques conçus pour être résolus avec l'informatique.");
        projecteuler.addLink(new Link("Dépôt GitHub", "https://github.com/Hugo-Pernin/project-euler/"));
        projecteuler.addLink(new Link("Profil", "https://projecteuler.net/progress=Hugo_Pernin"));
        projecteuler.addLanguage(python);
        projecteuler.addSoftware(pycharm);

        this.projects.push(portfolio, nesweeper, cliofy, lesdenaises, projecteuler);
    }

    /**
     * Returns the instance of Loader or creates one if it doesn't exist
     * @return the instance of Loader
     */
    public static getInstance(): Loader {
        if (this.instance == null) {
            this.instance = new Loader();
        }
        return this.instance;
    }

    /**
     * Returns the list of technologies
     * @return the list of technologies
     */
    public getTechnologies(): Technology[] {
        return this.technologies;
    }

    /**
     * Returns the list of projects
     * @return the list of projects
     */
    public getProjects(): Project[] {
        return this.projects;
    }

    public getCategories(): TechnologyCategory[] {
        return this.categories;
    }
}