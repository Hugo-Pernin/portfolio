import { Technology } from "./Technology.js";
console.log("Hello world!");
var test = document.getElementById("test");
var webstorm = new Technology("WebStorm", "https://resources.jetbrains.com/storage/products/company/brand/logos/WebStorm_icon.svg");
test.appendChild(webstorm.getBigCard());
test.appendChild(webstorm.getSmallCard());
console.log("test2");
