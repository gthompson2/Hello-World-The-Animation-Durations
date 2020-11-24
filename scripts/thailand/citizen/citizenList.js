import {useCitizens} from "./citizenProvider.js";
import {citizen} from "./citizen.js"


export const citizenList = () => {
    const contentElement = document.querySelector(".citizens__auto")

    const citizens = useCitizens();
    for (const citizenObj of citizens){
        const citizenHTML = citizen(citizenObj);

        contentElement.innerHTML += citizenHTML;
    }
};