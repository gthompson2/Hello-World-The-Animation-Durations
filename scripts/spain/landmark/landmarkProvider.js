const arrayOfLandmarks =[
    {
        landmark_name: "La Sagrada Familia"
    },
    {
        landmark_name: "Park Guell"
    },
    {
        landmark_name: "Royal Alcazar of Seville"
    }
];

export const copyOfLandmarkArray = () => {
return arrayOfLandmarks.slice()
}