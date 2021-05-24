function getTeams(){
    fetch("http://localhost:3000/teams")
    .then(result => result.json())
    .then(teams => {
        teams.forEach(team => {
            const t = new Team(team)
            t.addToDOM()
        })
    })
}

function updateCharURL(event){
    debugger
    // This will pull from the data set id have to find that
    fetch(`http://localhost:3000/characters/1`,{
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            // This is pulling from the input on the webpage
            image_url: `https://i.etsystatic.com/25594439/r/il/dbbe93/2693967973/il_794xN.2693967973_mdq7.jpg`
        })
    })
    .then(result => result.json())
    // This is where I will make it show up on the front end
    .then(char => console.log(char))

}

