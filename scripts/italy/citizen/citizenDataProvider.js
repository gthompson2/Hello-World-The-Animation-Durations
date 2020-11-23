
//this is a collection of objects that has property of 'name' with values of name of famous citizens
const citizenCollection = [
    {
        name: "Luciano Pavarotti"
    },
    {
        name: "Sophia Loren"
    },
    {
        name: "Monica Bellucci"
    }
]

//this function will export a copy of citizenCollection array
export const copyOfCitizenCollection = () => {
    return citizenCollection.slice()
}