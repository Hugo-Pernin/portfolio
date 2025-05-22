import { Technology } from "./Technology.js";
import { Project } from "./Project.js";
import { TechnologyCategory } from "./TechnologyCategory.js";
import { Link } from "./Link.js";
/**
 * Class that loads technologies and projects
 */
var Loader = /** @class */ (function () {
    function Loader() {
        this.technologies = [];
        this.projects = [];
        this.categories = [];
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
        applicationDevelopment.addTechnologies([python, java, csharp, c, cplusplus, assembly, nodered, pycharm, visualstudio, visualstudiocode, arduino]);
        var mobileDevelopment = new TechnologyCategory("Développement mobile");
        mobileDevelopment.addTechnologies([java, androidstudio]);
        var webDevelopment = new TechnologyCategory("Développement web");
        webDevelopment.addTechnologies([html, css, javascript, typescript, php, webstorm, phpstorm, xampp]);
        var databases = new TechnologyCategory("Bases de données");
        databases.addTechnologies([mysql, plsql, mariadb, sqlite, mysqlworkbench, sqldeveloper]);
        var others = new TechnologyCategory("Autres");
        others.addTechnologies([unix, docker, virtualbox]);
        var conception = new TechnologyCategory("Conception");
        conception.addTechnologies([uml, visualparadigm]);
        var collaboration = new TechnologyCategory("Collaboration");
        collaboration.addTechnologies([git, teams]);
        var bureautique = new TechnologyCategory("Bureautique");
        bureautique.addTechnologies([wordexcelpowerpoint, googledocssheetsslides]);
        this.categories.push(applicationDevelopment, mobileDevelopment, webDevelopment, databases, others, conception, collaboration, bureautique);
        var portfolio = new Project("Portfolio", "Site web statique présentant mes projets et compétences. Vous êtes actuellement dessus !");
        portfolio.addLink(new Link("Dépôt GitHub", "https://github.com/Hugo-Pernin/portfolio/"));
        portfolio.addLanguage(html);
        portfolio.addLanguage(css);
        portfolio.addLanguage(typescript);
        portfolio.addSoftware(webstorm);
        var nesweeper = new Project("NESweeper", "Démineur jouable sur Nintendo Entertainment System.");
        nesweeper.addLink(new Link("Page itch.io", "https://hugo70.itch.io/nesweeper"));
        nesweeper.addLanguage(assembly);
        nesweeper.addSoftware(visualstudiocode);
        var cliofy = new Project("Cliofy", "Application mobile utilisant l'API web de Spotify.");
        cliofy.addLanguage(java);
        cliofy.addSoftware(androidstudio);
        var lesdenaises = new Project("Site web de la ferme Les Denaises", "Site vitrine réalisé dans le cadre de mon année de terminale STI2D, en collaboration avec une ferme locale.");
        lesdenaises.addLink(new Link("Lien vers le site web", "https://www.lesdenaises.fr/"));
        lesdenaises.addLanguage(html);
        lesdenaises.addLanguage(css);
        var projecteuler = new Project("Résolution de problèmes mathématiques sur Project Euler", "Création de programmes Python pour résoudre des problèmes du site web Project Euler, qui répertorie des problèmes mathématiques conçus pour être résolus avec l'informatique.");
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
    Loader.prototype.getCategories = function () {
        return this.categories;
    };
    return Loader;
}());
export { Loader };
