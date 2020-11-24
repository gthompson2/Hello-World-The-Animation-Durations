import {useLandmarks} from "./LandmarkProvider.js";
import {landmark} from "./landmark.js";

export const landmarkList = () => {

    const contentElement = document.querySelector(".landmarks__auto");

    const landmarks = useLandmarks();

    for (const landObj of landmarks){
        const landHTML = landmark(landObj);
        contentElement.innerHTML += landHTML;
    };
};