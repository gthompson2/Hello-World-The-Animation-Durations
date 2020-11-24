//Citizen renders citizen individual objects as a HTML code
export const Citizen = (citizen) => {
    return `
        <section>
            <div class = "citizen__name">${citizen.name}</div>
        </section>    
    `
}