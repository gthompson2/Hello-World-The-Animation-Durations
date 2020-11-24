
import {Citizen} from "./citizen.js"
import {copyOfCitizenCollection} from "./citizenDataProvider.js"



export const citizenList = () => {

    const copiedCitizens = copyOfCitizenCollection()

    let contentElement = document.querySelector(".famousCitizens")


    for (const citizen of copiedCitizens) {
        const citizenHTMLRepresentation = Citizen(citizen)
        contentElement.innerHTML += citizenHTMLRepresentation
    }
}


