const arrayOfCitizens =[
    {
        citizen_name: "Penelope Cruz"
    },
    {
        citizen_name: "Rafael Nadal"
    },
    {
        citizen_name: "Julio Iglesias"
    }
];

export const copyOfCitizenArray = () => {
return arrayOfCitizens.slice()
}