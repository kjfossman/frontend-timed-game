const teamsContainer = document.getElementById("teams-container")
const teamBase = new Team("http://localhost:3000")


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
        console.log(event.target.dataset)
        console.log(event.target.dataset.action)
        break

        case "team-2":
        console.log('team2 clicked')
    } 
   
})
