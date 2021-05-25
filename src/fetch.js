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
   
    // This will pull from the data set id have to find that
   
    fetch(`http://localhost:3000/characters/${event.target.parentElement.parentElement.dataset.id}`,{
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            // This is pulling from the input on the webpage
            image_url: event.target.elements[0].value
        })
    })
    .then(result => result.json())
    // This is where I will make it show up on the front end
    .then(char => event.target.parentElement.parentElement.getElementsByTagName("img")[0].src = char['image_url'])
    
    // event.target.parentElement.parentElement.getElementsByTagName("img")[0].src = ?

}

