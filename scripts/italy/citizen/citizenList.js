
import {Citizen} from "./citizen.js"
import {copyOfCitizenCollection} from "./citizenDataProvider.js"



export const citizenList = () => {
    
    const contentElement = document.querySelector(".famousCitizens")

    let citizenHTMLRepresentation = ""

    for (const citizen of copyOfCitizenCollection) {
        citizenHTMLRepresentation += Citizen(citizen)
    }
}
