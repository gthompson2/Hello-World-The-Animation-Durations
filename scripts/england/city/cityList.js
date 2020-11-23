import { useCity } from './cityProvider.js'
import { cities } from './city.js'

export const cityList = () => {
    const contentElement = document.querySelector(".city__auto")
    const usedCity = useCity()

    for (const cityObject of usedCity) {
        const cityHTML = cities(cityObject)
        contentElement.innerHTML += cityHTML
    }
}