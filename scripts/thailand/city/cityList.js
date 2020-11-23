import {useCities} from "./cityProvider.js";
import {city} from "./city.js"


export const cityList = () => {
    const contentElement = document.querySelector(".cities__auto")

    const cities = useCities();
    for (const cityObj of cities){
        const cityHTML = city(cityObj);

        contentElement.innerHTML += cityHTML;
    }
};