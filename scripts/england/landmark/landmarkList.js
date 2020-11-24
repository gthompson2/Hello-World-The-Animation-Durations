import { useLandmark } from './landmarkProvider.js'
import { landmarks } from './landmark.js'

export const landmarkList = () => {
    const usedLandmark = useLandmark()
    const contentElement = document.querySelector(".landmark__auto")

    for (const landmarkObject of usedLandmark) {
        const landmarkHTML = landmarks(landmarkObject)
        contentElement.innerHTML += landmarkHTML
    }

}