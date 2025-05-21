import { Technology } from "./Technology.js";
import { Project } from "./Project.js";
/**
 * Class that loads technologies and projects
 */
var Loader = /** @class */ (function () {
    function Loader() {
        this.technologies = [];
        this.projects = [];
        var html = new Technology("HTML", "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg");
        var css = new Technology("CSS", "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg");
        var typescript = new Technology("TypeScript", "https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript.svg");
        var webstorm = new Technology("WebStorm", "https://resources.jetbrains.com/storage/products/company/brand/logos/WebStorm_icon.svg");
        var assembly = new Technology("Langage assembleur", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQdA_2Vi350-blMARDU4bOdXkXaanfyYmPVg&s");
        var vscode = new Technology("Visual Studio Code", "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg");
        var java = new Technology("Java", "https://upload.wikimedia.org/wikipedia/fr/2/2e/Java_Logo.svg");
        var androidstudio = new Technology("Android Studio", "https://upload.wikimedia.org/wikipedia/commons/5/51/Android_Studio_Logo_2024.svg");
        var python = new Technology("Python", "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg");
        var pycharm = new Technology("PyCharm", "https://resources.jetbrains.com/storage/products/company/brand/logos/PyCharm_icon.svg");
        this.technologies.push(html, css, typescript, webstorm, assembly, vscode, java, androidstudio, python, pycharm);
        var portfolio = new Project("Portfolio", "Site web statique présentant mes projets et compétences. Vous êtes actuellement dessus !", "Dépôt GitHub", "https://github.com/Hugo-Pernin/portfolio/");
        portfolio.addLanguage(html);
        portfolio.addLanguage(css);
        portfolio.addLanguage(typescript);
        portfolio.addSoftware(webstorm);
        var nesweeper = new Project("NESweeper", "Démineur jouable sur Nintendo Entertainment System.", "Page itch.io", "https://hugo70.itch.io/nesweeper");
        nesweeper.addLanguage(assembly);
        nesweeper.addSoftware(vscode);
        var cliofy = new Project("Cliofy", "Application mobile utilisant l'API web de Spotify.");
        cliofy.addLanguage(java);
        cliofy.addSoftware(androidstudio);
        var lesdenaises = new Project("Site web de la ferme Les Denaises", "Site vitrine réalisé dans le cadre de mon année de terminale STI2D, en collaboration avec une ferme locale.", "Lien vers le site web", "https://www.lesdenaises.fr/");
        lesdenaises.addLanguage(html);
        lesdenaises.addLanguage(css);
        var projecteuler = new Project("Résolution de problèmes mathématiques sur Project Euler", "Création de programmes Python pour résoudre des problèmes du site web Project Euler, qui répertorie des problèmes mathématiques conçus pour être résolus avec l'informatique.", "Dépôt GitHub", "https://github.com/Hugo-Pernin/project-euler/");
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
    return Loader;
}());
export { Loader };
