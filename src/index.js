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

// function getCharacter(id){
//     fetch(`http://localhost:3000/characters/${id}`)
//     .then(result => result.json())
//     .then(char => {
//         new Character({char})
//     })
// }

teamsContainer.addEventListener('click', (event) => {
    const parent = event.target.parentElement
    const button = event.target.dataset.action 
    switch(button){
        case "characters":
            if(charactersDisplayed && event.target.innerText === "Hide Characters") {parent.children[2].remove() 
                event.target.innerText = "Characters"
                break
            }
                const team = Team.all.find(x => x.id == parent.dataset.id)
                team.renderCharacters()
                event.target.innerText = "Hide Characters"
                break
       
        case "attributes":
            if(parent.getElementsByTagName("ul").length == 0){
                const char = Character.all.find(y => y.id == parent.dataset.id)
                char.renderAttributes(char)
                event.target.innerText = "Hide Attributes"
                break
            }else{
                parent.children[4].remove()
                event.target.innerText = "Show Attributes"
                break
            }
         case "image":
            console.log('i clicked the image!')


        } 
   
})
