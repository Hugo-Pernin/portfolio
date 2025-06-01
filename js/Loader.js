import { Technology } from "./Technology.js";
import { Project } from "./Project.js";
import { TechnologyCategory } from "./TechnologyCategory.js";
import { ProjectCategory } from "./ProjectCategory.js";
import { Link } from "./Link.js";
/**
 * Class that loads technologies and projects
 */
var Loader = /** @class */ (function () {
    function Loader() {
        this.technologies = [];
        this.projects = [];
        this.technologyCategories = [];
        this.projectCategories = [];
        var python = new Technology("Python", "img/python.svg");
        var java = new Technology("Java", "img/java.svg");
        var csharp = new Technology("C#", "img/c_sharp.svg");
        var c = new Technology("C", "img/c.svg");
        var cplusplus = new Technology("C++", "img/c_plus_plus.svg");
        var assembly = new Technology("Langage assembleur", "img/assembly.png");
        var nodered = new Technology("Node-RED", "img/node-red.png");
        var pycharm = new Technology("PyCharm", "img/pycharm.svg");
        var visualstudio = new Technology("Visual Studio", "img/visual_studio.svg");
        var visualstudiocode = new Technology("Visual Studio Code", "img/visual_studio_code.svg");
        var arduino = new Technology("Arduino", "img/arduino.svg");
        var androidstudio = new Technology("Android Studio", "img/android_studio.svg");
        var html = new Technology("HTML", "img/html.svg");
        var css = new Technology("CSS", "img/css.svg");
        var javascript = new Technology("JavaScript", "img/javascript.svg");
        var typescript = new Technology("TypeScript", "img/typescript.svg");
        var php = new Technology("PHP", "img/php.svg");
        var webstorm = new Technology("WebStorm", "img/webstorm.svg");
        var phpstorm = new Technology("PHPStorm", "img/phpstorm.svg");
        var xampp = new Technology("XAMPP", "img/xampp.png");
        var mysql = new Technology("MySQL", "img/mysql.png");
        var plsql = new Technology("PL/SQL", "img/plsql.svg");
        var mariadb = new Technology("MariaDB", "img/mariadb.svg");
        var sqlite = new Technology("SQLite", "img/sqlite.svg");
        var mysqlworkbench = new Technology("MySQL Workbench", "img/mysql_workbench.svg");
        var sqldeveloper = new Technology("SQL Developer", "img/sql_developer.svg");
        var unix = new Technology("Unix", "img/unix.svg");
        var docker = new Technology("Docker", "img/docker.svg");
        var virtualbox = new Technology("VirtualBox", "img/virtualbox.svg");
        var uml = new Technology("UML", "img/uml.svg");
        var visualparadigm = new Technology("Visual Paradigm", "img/visual_paradigm.png");
        var git = new Technology("Git", "img/git.svg");
        var teams = new Technology("Teams", "img/teams.svg");
        var wordexcelpowerpoint = new Technology("Word, Excel & Powerpoint", "img/word_excel_powerpoint.svg");
        var googledocssheetsslides = new Technology("Google Docs, Sheets & Slides", "img/google_docs_sheets_slides.png");
        this.technologies.push(python, java, csharp, c, cplusplus, assembly, nodered, pycharm, visualstudio, visualstudiocode, arduino, androidstudio, html, css, javascript, typescript, php, webstorm, phpstorm, mysql, plsql, mariadb, sqlite, mysqlworkbench, sqldeveloper, unix, docker, virtualbox, uml, visualparadigm, git, teams, wordexcelpowerpoint, googledocssheetsslides);
        var applicationDevelopment = new TechnologyCategory("Développement d'applications");
        applicationDevelopment.addTechnologies([python, java, csharp, c, cplusplus, nodered, assembly]);
        var webDevelopment = new TechnologyCategory("Développement web");
        webDevelopment.addTechnologies([html, css, javascript, typescript, php]);
        var databases = new TechnologyCategory("Bases de données");
        databases.addTechnologies([mysql, plsql, mariadb, sqlite, mysqlworkbench, sqldeveloper]);
        var others = new TechnologyCategory("Autres");
        others.addTechnologies([unix, docker, virtualbox, arduino, xampp]);
        var conception = new TechnologyCategory("Conception");
        conception.addTechnologies([uml, visualparadigm]);
        var collaboration = new TechnologyCategory("Collaboration");
        collaboration.addTechnologies([git, teams]);
        var ides = new TechnologyCategory("IDEs & éditeurs de code");
        ides.addTechnologies([visualstudio, visualstudiocode, androidstudio, pycharm, webstorm, phpstorm]);
        var bureautique = new TechnologyCategory("Bureautique");
        bureautique.addTechnologies([wordexcelpowerpoint, googledocssheetsslides]);
        this.technologyCategories.push(applicationDevelopment, webDevelopment, databases, others, conception, collaboration, ides, bureautique);
        var portfolio = new Project("Portfolio", "Site web statique présentant mes projets et compétences. Vous êtes actuellement dessus !");
        portfolio.addLinks([new Link("Dépôt GitHub", "https://github.com/Hugo-Pernin/portfolio/")]);
        portfolio.addLanguages([html, css, typescript]);
        portfolio.addSoftware([webstorm]);
        var nesweeper = new Project("NESweeper", "Démineur jouable sur Nintendo Entertainment System.");
        nesweeper.addLinks([new Link("Page itch.io", "https://hugo70.itch.io/nesweeper")]);
        nesweeper.addLanguages([assembly]);
        nesweeper.addSoftware([visualstudiocode]);
        var cliofy = new Project("Cliofy", "Application mobile utilisant l'API web de Spotify.");
        cliofy.addLanguages([java]);
        cliofy.addSoftware([androidstudio]);
        var lesdenaises = new Project("Site web de la ferme Les Denaises", "Site vitrine réalisé dans le cadre de mon année de terminale STI2D, en collaboration avec une ferme locale.");
        lesdenaises.addLinks([new Link("Lien vers le site web", "https://www.lesdenaises.fr/")]);
        lesdenaises.addLanguages([html, css]);
        var projecteuler = new Project("Résolution de problèmes mathématiques sur Project Euler", "Création de programmes Python pour résoudre des problèmes du site web Project Euler, qui répertorie des problèmes mathématiques conçus pour être résolus avec l'informatique.");
        projecteuler.addLinks([new Link("Dépôt GitHub", "https://github.com/Hugo-Pernin/project-euler/"),
            new Link("Profil", "https://projecteuler.net/progress=Hugo_Pernin")]);
        projecteuler.addLanguages([python]);
        projecteuler.addSoftware([pycharm]);
        var sae203 = new Project("Mise en place d'un serveur", "Sur une machine virtuelle VirtualBox, installation de Windows Server, d’un serveur web Apache, d’une base de données MySQL, d’un système de partage de fichiers et de Git, accessibles depuis la machine physique.");
        sae203.addLinks([new Link("Vidéo de présentation", "https://youtu.be/XkLdKJfYP1A")]);
        sae203.addSoftware([virtualbox, xampp, mysql]);
        var sae3 = new Project("Développement d'une application web de gestion de caves à vin", "Par équipe de 3, nous devions réaliser de 0 une application web. Une enseignante jouait le rôle de la cliente, avec laquelle nous avons eu plusieurs rendez-vous, afin d'établir le cahier des charges et montrer l'avancée du projet.\n" +
            "Nous avons réalisé des diagrammes UML avec Visual Paradigm.\n" +
            "Nous avons utilisé HTML, CSS et TypeScript pour le site, et nous avons également créé une API en C# communiquant avec une base de données SQLite.\n" +
            "Le travail en équipe a été possible grâce à Teams et Git.");
        sae3.addLanguages([html, css, typescript, csharp, uml]);
        sae3.addSoftware([visualstudiocode, visualstudio, sqlite, visualparadigm, teams, git]);
        var sae4 = new Project("Audit et optimisation d'une application web", "Par équipe de 4, nous avons audité puis optimisé une application de todo list appelée Taskstep, codée en PHP.\n" +
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
        var personalProjects = new ProjectCategory("Projets personnels");
        personalProjects.addProjects([portfolio, nesweeper, cliofy, projecteuler]);
        var schoolProjects = new ProjectCategory("Projets d'études");
        schoolProjects.addProjects([sae203, sae3, sae4]);
        var associativeProjects = new ProjectCategory("Projets associatifs");
        associativeProjects.addProjects([lesdenaises]);
        this.projectCategories.push(personalProjects, schoolProjects, associativeProjects);
    }
    /**
     * Returns the instance of Loader or creates one if it doesn't exist
     * @return the instance of Loader
     */
    Loader.getInstance = function () {
        if (this.instance == null) {
            this.instance = new Loader();
        }
        return this.instance;
    };
    /**
     * Returns the list of technologies
     * @return the list of technologies
     */
    Loader.prototype.getTechnologies = function () {
        return this.technologies;
    };
    /**
     * Returns the list of projects
     * @return the list of projects
     */
    Loader.prototype.getProjects = function () {
        return this.projects;
    };
    /**
     * Returns the list of technology categories
     * @return the list of technology categories
     */
    Loader.prototype.getTechnologyCategories = function () {
        return this.technologyCategories;
    };
    /**
     * Returns the list of project categories
     * @return the list of project categories
     */
    Loader.prototype.getProjectCategories = function () {
        return this.projectCategories;
    };
    return Loader;
}());
export { Loader };
