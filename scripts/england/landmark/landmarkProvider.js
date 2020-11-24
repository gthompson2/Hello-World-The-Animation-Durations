const landmarkCollection = [

    {
        landmark_name: "Stonehendge",
    },

    {
        landmark_name: "Tower Bridge",
    },

    {
        landmark_name: "Big Ben",
    }

]

export const useLandmark = () => {
    return landmarkCollection.slice()
}