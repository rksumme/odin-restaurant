import "./styles.css";
import { constants } from "./constants";
import { homePage } from "./homepage";
import { aboutPage } from "./about";

document.addEventListener('DOMContentLoaded', () => {
    constants();
    homePage();
});
