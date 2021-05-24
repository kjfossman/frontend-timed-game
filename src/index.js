const teamsContainer = document.getElementById("teams-container")
// const teamBase = new Team("http://localhost:3000")
let charactersDisplayed = false 


document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    getTeams()
});





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
            let x = document.getElementById("attributes")
            // if(x.length == 0)
            if(parent.getElementsByTagName("ul").length == 0){
                const char = Character.all.find(y => y.id == parent.dataset.id)
                char.renderAttributes()
                if(x)x.remove() 
                break
            }else{ 
                parent.children[4].remove()
                break
            }
         case "image":
            const char = Character.all.find(y => y.id == parent.dataset.id)
            const selectedCharacter = document.getElementById("selected-character")
            if(selectedCharacter.innerText == char.name){
                sound2.play()
                console.log('it was selected')
                break
            }else
            char.addToSelectedCharacter()
        } 
   
})
