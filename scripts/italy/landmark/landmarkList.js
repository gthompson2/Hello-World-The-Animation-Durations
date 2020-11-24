
import {Landmark} from "./landmark.js"
import {copyOfLandmarkCollection} from "./landmarkDataProvider.js"



export const landmarkList = () => {

    const copiedLandmarks = copyOfLandmarkCollection()

    let contentElement = document.querySelector(".famousLandmarks")


    for (const landmark of copiedLandmarks) {
        const landmarkHTMLRepresentation = Landmark(landmark)
        contentElement.innerHTML += landmarkHTMLRepresentation
    }
}