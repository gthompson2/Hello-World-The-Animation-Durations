const landmarkCollection = [
    {
        name: "Colosseum"
    },
    {
        name: "Clinque Terre"
    },
    {
        name: "Cathedral of Santa Maria del Fiore"
    }
]

//this function will export a copy of citizenCollection array
export const copyOfLandmarkCollection = () => {
    return landmarkCollection.slice()
}