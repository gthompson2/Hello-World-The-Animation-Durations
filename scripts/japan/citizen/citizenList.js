// Imports provider file (Database) and function to convert the information into HTML
import { copyOfCitizenArray } from "./citizenProvider.js";
import { citizenToHTML } from "./citizen.js";

export const citizensToPage = () => {
    // Locates the section with the class of cities on the DOM and assigns it to contentElement
    const contentElement = document.querySelector(".citizens");

    // For each object in the array iterate through them, "convert" them into HTML, and then push them to the webpage (Japan)
    for (const object of copyOfCitizenArray){
        const citizenToPage = citizenToHTML(object.citizen_name);
        contentElement.innerHTML += citizenToPage;
    }
}