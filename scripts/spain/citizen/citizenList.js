import { copyOfCitizenArray } from "./citizenProvider.js";
import { citizenToHTML } from "./citizen.js";





export const citizensToPage = () => {
    const contentElement = document.querySelector(".citizens__auto")
    const citizenArray = copyOfCitizenArray()

    for (const citizen of citizenArray){
        const citizenToPage = citizenToHTML(citizen)
        contentElement.innerHTML += citizenToPage
    }
}

