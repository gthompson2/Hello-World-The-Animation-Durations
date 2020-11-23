import { copyOfLandmarkArray } from "./landmarkProvider.js";
import { landmarkToHTML } from "./landmark.js";





export const landmarksToPage = () => {
    const contentElement = document.querySelector(".landmarks__auto")
    const landmarkArray = copyOfLandmarkArray()

    for (const landmark of landmarkArray){
        const landmarkToPage = landmarkToHTML(landmark)
        contentElement.innerHTML += landmarkToPage
    }
}
