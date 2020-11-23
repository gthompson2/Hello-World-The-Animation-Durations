
import {City} from "./city.js"
import {copyOfCityCollection} from "./cityDataProvider.js"

export const cityList = () => {

    const copiedCities = copyOfCityCollection()

    let contentElement = document.querySelector(".famousCities")

    for (const city of copiedCities) {
        const cityHTMLRepresentation = City(city)
        console.log(cityHTMLRepresentation)
        contentElement.innerHTML += cityHTMLRepresentation
    }
}
