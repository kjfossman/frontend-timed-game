const teamsContainer = document.getElementById("teams-container")
// const teamBase = new Team("http://localhost:3000")
let charactersDisplayed = false 

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    getTeams()
});

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

teamsContainer.addEventListener('click', (event) => {
    switch(event.target.id){
        case "team-1":
            if(charactersDisplayed) {   
                charactersDisplayed.remove()
                console.log('test')
                break
            }else 
                console.log(charactersDisplayed)
                const team = Team.all.find(x => x.id == event.target.dataset.id)
                team.renderCharacters()
                break

        case "team-2":
            if(charactersDisplayed) {   
                charactersDisplayed.remove()
                console.log('test')
                break
            }else 
        console.log('team2 clicked')
        const team2 = Team.all.find(x => x.id == event.target.dataset.id)
        team2.renderCharacters()
    } 
   
})
