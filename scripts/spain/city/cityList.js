import { copyOfCityArray } from "./cityProvider.js";
import { cityToHTML } from "./city.js";





export const citiesToPage = () => {
    const contentElement = document.querySelector(".cities__auto")
    const cityArray = copyOfCityArray()

    for (const city of cityArray){
        const cityToPage = cityToHTML(city)
        contentElement.innerHTML += cityToPage
    }
}


