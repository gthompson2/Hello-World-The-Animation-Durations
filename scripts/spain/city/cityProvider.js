const arrayOfCities =[
    {
        city_name: "Seville"
    },
    {
        city_name: "Barcelona"
    },
    {
        city_name: "Madrid"
    }
];

export const copyOfCityArray = () => {
return arrayOfCities.slice()
}