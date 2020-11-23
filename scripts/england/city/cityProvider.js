const cityCollection = [

    {
        city_name: "London",
    },

    {
        city_name: "Manchester",
    },

    {
        city_name: "Birmingham",
    }

]

export const useCity = () => {
    return cityCollection.slice()
}