
const cityCollection = [
    {
        name: "Rome"
    },
    {
        name: "Venice"
    },
    {
        name: "Florence"
    }
]

export const copyOfCityCollection = () => {
    return cityCollection.slice()
}