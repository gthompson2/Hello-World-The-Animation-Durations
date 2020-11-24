const citizenCollection = [

    {
        citizen_name: "Jane Austen",
    },

    {
        citizen_name: "Paul Hollywood",
    },

    {
        citizen_name: "Harry Potter",
    }

]

export const useCitizen = () => {
    return citizenCollection.slice()
}