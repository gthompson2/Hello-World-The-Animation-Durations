// Imports provider file (Database) and function to convert the information into HTML
import { copyOfCityArray } from "./cityProvider.js";
import { cityToHTML } from "./city.js";

export const citiesToPage = () => {
    // Locates the section with the class of cities on the DOM and assigns it to contentElement
    const contentElement = document.querySelector(".cities");

    // For each object in the array iterate through them, "convert" them into HTML, and then push them to the webpage (Japan)
    for (const object of copyOfCityArray){
        const cityToPage = cityToHTML(object.city_name);
        contentElement.innerHTML += cityToPage;
    }
}