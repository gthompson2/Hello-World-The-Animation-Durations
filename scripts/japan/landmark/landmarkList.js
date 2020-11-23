// Imports provider file (Database) and function to convert the information into HTML
import { copyOfLandmarkArray } from "./landmarkProvider.js";
import { landmarkToHTML } from "./landmark.js";

export const landmarksToPage = () => {
    // Locates the section with the class of cities on the DOM and assigns it to contentElement
    const contentElement = document.querySelector(".landmarks");

    // For each object in the array iterate through them, "convert" them into HTML, and then push them to the webpage (Japan)
    for (const object of copyOfLandmarkArray){
        const landmarkToPage = landmarkToHTML(object.landmark_name);
        contentElement.innerHTML += landmarkToPage;
    }
}