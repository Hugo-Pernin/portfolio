import {Technology} from "./Technology.js";
import {Project} from "./Project.js";
import {TechnologyCategory} from "./TechnologyCategory.js";
import {ProjectCategory} from "./ProjectCategory.js";
import {Link} from "./Link.js";

/**
 * Class that loads technologies and projects
 */
export class Loader {
    private static instance: Loader;

    private technologies: Technology[];
    private projects: Project[];
    private technologyCategories: TechnologyCategory[];
    private projectCategories: ProjectCategory[];

    private constructor() {
        this.technologies = [];
        this.projects = [];
        this.technologyCategories = [];
        this.projectCategories = [];

        let python: Technology = new Technology("Python", "img/technology_logos/python.svg");
        let java: Technology = new Technology("Java", "img/technology_logos/java.svg");
        let csharp: Technology = new Technology("C#", "img/technology_logos/c_sharp.svg");
        let c: Technology = new Technology("C", "img/technology_logos/c.svg");
        let cplusplus: Technology = new Technology("C++", "img/technology_logos/c_plus_plus.svg");
        let assembly: Technology = new Technology("Langage assembleur", "img/technology_logos/assembly.png");
        let nodered: Technology = new Technology("Node-RED", "img/technology_logos/node-red.png");
        let pycharm: Technology = new Technology("PyCharm", "img/technology_logos/pycharm.svg");
        let visualstudio: Technology = new Technology("Visual Studio", "img/technology_logos/visual_studio.svg");
        let visualstudiocode: Technology = new Technology("Visual Studio Code", "img/technology_logos/visual_studio_code.svg");
        let arduino: Technology = new Technology("Arduino", "img/technology_logos/arduino.svg");

        let androidstudio: Technology = new Technology("Android Studio", "img/technology_logos/android_studio.svg");

        let html: Technology = new Technology("HTML", "img/technology_logos/html.svg");
        let css: Technology = new Technology("CSS", "img/technology_logos/css.svg");
        let javascript: Technology = new Technology("JavaScript", "img/technology_logos/javascript.svg");
        let typescript: Technology = new Technology("TypeScript", "img/technology_logos/typescript.svg");
        let php: Technology = new Technology("PHP", "img/technology_logos/php.svg");
        let webstorm: Technology = new Technology("WebStorm", "img/technology_logos/webstorm.svg");
        let phpstorm: Technology = new Technology("PHPStorm", "img/technology_logos/phpstorm.svg");
        let xampp: Technology = new Technology("XAMPP", "img/technology_logos/xampp.png");

        let mysql: Technology = new Technology("MySQL", "img/technology_logos/mysql.png");
        let plsql: Technology = new Technology("PL/SQL", "img/technology_logos/plsql.svg");
        let mariadb: Technology = new Technology("MariaDB", "img/technology_logos/mariadb.svg");
        let sqlite: Technology = new Technology("SQLite", "img/technology_logos/sqlite.svg");
        let mysqlworkbench: Technology = new Technology("MySQL Workbench", "img/technology_logos/mysql_workbench.svg");
        let sqldeveloper: Technology = new Technology("SQL Developer", "img/technology_logos/sql_developer.svg");

        let unix: Technology = new Technology("Unix", "img/technology_logos/unix.svg");
        let docker: Technology = new Technology("Docker", "img/technology_logos/docker.svg");
        let virtualbox: Technology = new Technology("VirtualBox", "img/technology_logos/virtualbox.svg");

        let uml: Technology = new Technology("UML", "img/technology_logos/uml.svg");
        let visualparadigm: Technology = new Technology("Visual Paradigm", "img/technology_logos/visual_paradigm.png");

        let git: Technology = new Technology("Git", "img/technology_logos/git.svg");
        let teams: Technology = new Technology("Teams", "img/technology_logos/teams.svg");

        let wordexcelpowerpoint: Technology = new Technology("Word, Excel & Powerpoint", "img/technology_logos/word_excel_powerpoint.svg");
        let googledocssheetsslides: Technology = new Technology("Google Docs, Sheets & Slides", "img/technology_logos/google_docs_sheets_slides.png");

        this.technologies.push(python, java, csharp, c, cplusplus, assembly, nodered, pycharm, visualstudio,
            visualstudiocode, arduino, androidstudio, html, css, javascript, typescript, php, webstorm, phpstorm,
            mysql, plsql, mariadb, sqlite, mysqlworkbench, sqldeveloper, unix, docker, virtualbox, uml,
            visualparadigm, git, teams, wordexcelpowerpoint, googledocssheetsslides);

        let applicationDevelopment: TechnologyCategory = new TechnologyCategory("Développement d'applications");
        applicationDevelopment.addTechnologies([python, java, csharp, c, cplusplus, nodered, assembly]);

        let webDevelopment: TechnologyCategory = new TechnologyCategory("Développement web");
        webDevelopment.addTechnologies([html, css, javascript, typescript, php]);

        let databases: TechnologyCategory = new TechnologyCategory("Bases de données");
        databases.addTechnologies([mysql, plsql, mariadb, sqlite, mysqlworkbench, sqldeveloper]);

        let others: TechnologyCategory = new TechnologyCategory("Autres");
        others.addTechnologies([unix, docker, virtualbox, arduino, xampp]);

        let conception: TechnologyCategory = new TechnologyCategory("Conception");
        conception.addTechnologies([uml, visualparadigm]);

        let collaboration: TechnologyCategory = new TechnologyCategory("Collaboration");
        collaboration.addTechnologies([git, teams]);

        let ides: TechnologyCategory = new TechnologyCategory("IDEs & éditeurs de code");
        ides.addTechnologies([visualstudio, visualstudiocode, androidstudio, pycharm, webstorm, phpstorm]);

        let bureautique: TechnologyCategory = new TechnologyCategory("Bureautique");
        bureautique.addTechnologies([wordexcelpowerpoint, googledocssheetsslides]);

        this.technologyCategories.push(applicationDevelopment, webDevelopment, databases, others, conception, collaboration, ides, bureautique);

        let portfolio: Project = new Project("Portfolio", "Site web statique présentant mes projets et compétences. Vous êtes actuellement dessus !");
        portfolio.addLinks([new Link("Dépôt GitHub", "https://github.com/Hugo-Pernin/portfolio/")]);
        portfolio.addLanguages([html, css, typescript]);
        portfolio.addSoftware([webstorm]);

        let nesweeper: Project = new Project("NESweeper", "Démineur jouable sur Nintendo Entertainment System.");
        nesweeper.addLinks([new Link("Page itch.io", "https://hugo70.itch.io/nesweeper")]);
        nesweeper.addLanguages([assembly]);
        nesweeper.addSoftware([visualstudiocode]);

        let cliofy: Project = new Project("Cliofy", "Application mobile utilisant l'API web de Spotify.");
        cliofy.addLanguages([java]);
        cliofy.addSoftware([androidstudio]);

        let lesdenaises: Project = new Project("Site web de la ferme Les Denaises", "Site vitrine réalisé dans le cadre de mon année de terminale STI2D, en collaboration avec une ferme locale.");
        lesdenaises.addLinks([new Link("Lien vers le site web", "https://www.lesdenaises.fr/")]);
        lesdenaises.addLanguages([html, css]);

        let projecteuler: Project = new Project("Résolution de problèmes mathématiques sur Project Euler", "Création de programmes Python pour résoudre des problèmes du site web Project Euler, qui répertorie des problèmes mathématiques conçus pour être résolus avec l'informatique.");
        projecteuler.addLinks([new Link("Dépôt GitHub", "https://github.com/Hugo-Pernin/project-euler/"),
            new Link("Profil", "https://projecteuler.net/progress=Hugo_Pernin")]);
        projecteuler.addLanguages([python]);
        projecteuler.addSoftware([pycharm]);

        let sae203: Project = new Project("Mise en place d'un serveur", "Sur une machine virtuelle VirtualBox, installation de Windows Server, d’un serveur web Apache, d’une base de données MySQL, d’un système de partage de fichiers et de Git, accessibles depuis la machine physique.");
        sae203.addLinks([new Link("Vidéo de présentation", "https://youtu.be/XkLdKJfYP1A")]);
        sae203.addSoftware([virtualbox, xampp, mysql]);

        let sae3: Project = new Project("Développement d'une application web de gestion de caves à vin", "Par équipe de 3, nous devions réaliser de 0 une application web. Une enseignante jouait le rôle de la cliente, avec laquelle nous avons eu plusieurs rendez-vous, afin d'établir le cahier des charges et montrer l'avancée du projet.\n" +
            "Nous avons réalisé des diagrammes UML avec Visual Paradigm.\n" +
            "Nous avons utilisé HTML, CSS et TypeScript pour le site, et nous avons également créé une API en C# communiquant avec une base de données SQLite.\n" +
            "Le travail en équipe a été possible grâce à Teams et Git.");
        sae3.addLanguages([html, css, typescript, csharp, uml]);
        sae3.addSoftware([visualstudiocode, visualstudio, sqlite, visualparadigm, teams, git]);

        let sae4: Project = new Project("Audit et optimisation d'une application web", "Par équipe de 4, nous avons audité puis optimisé une application de todo list appelée Taskstep, codée en PHP.\n" +
            "L'audit et les optimisations ce sont articulées selon plusieurs domaines : la qualité logicielle, la sécurité, la gestion des données, les performances, l'impact environnemental, l'accessibilité et l'ergonomie.\n" +
            "Personnellement, je me suis occupé des parties suivantes : \n" +
            "- Passer le code en orienté objet (qualité logicielle),\n" +
            "- Gérer les erreurs et les exceptions (qualité logicielle, sécurité, ergonomie),\n" +
            "- Retirer la désactivation du mot de passe (sécurité),\n" +
            "- Optimisation de requêtes SQL (gestion des données, performances, impact environnemental),\n" +
            "- Corriger les contrastes insuffisants (accessibilité)");
        sae4.addLanguages([php, typescript]);
        sae4.addSoftware([mariadb, phpstorm, docker, teams, git]);

        this.projects.push(portfolio, nesweeper, cliofy, lesdenaises, projecteuler, sae203, sae3, sae4);

        let personalProjects: ProjectCategory = new ProjectCategory("Projets personnels");
        personalProjects.addProjects([portfolio, nesweeper, cliofy, projecteuler]);

        let schoolProjects: ProjectCategory = new ProjectCategory("Projets d'études");
        schoolProjects.addProjects([sae203, sae3, sae4]);

        let associativeProjects: ProjectCategory = new ProjectCategory("Projets associatifs");
        associativeProjects.addProjects([lesdenaises]);

        this.projectCategories.push(personalProjects, schoolProjects, associativeProjects);
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

    /**
     * Returns the list of technology categories
     * @return the list of technology categories
     */
    public getTechnologyCategories(): TechnologyCategory[] {
        return this.technologyCategories;
    }

    /**
     * Returns the list of project categories
     * @return the list of project categories
     */
    public getProjectCategories(): ProjectCategory[] {
        return this.projectCategories;
    }
}