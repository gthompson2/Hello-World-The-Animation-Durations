import { useCitizen } from './citizenProvider.js'
import { citizens } from './citizen.js'

export const citizenList = () => {
    const contentElement = document.querySelector(".citizen__auto")
    const someVariable = useCitizen()

    for (const citizenObject of someVariable) {
        const citizenHTML = citizens(citizenObject)
        contentElement.innerHTML += citizenHTML
    }
}