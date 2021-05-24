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

function updateCharURL(){
    fetch(``,{
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            
        })
    })
    .then(result => result.json())
    .then(char = {
        
    })

}

