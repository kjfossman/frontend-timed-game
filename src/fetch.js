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
    .then(char => { 
        if (char.status == 204){
        event.target.parentElement.parentElement.getElementsByTagName("img")[0].src = char['character']['image_url']
        }else {
            alert(char.image_url)
        }
    })
    // event.target.parentElement.parentElement.getElementsByTagName("img")[0].src = ?
    .catch(error => console.error(error))
}

function createCharacter(event){
     // This will pull from the data set id have to find that  
     fetch(`http://localhost:3000/characters`,{
        method: "Post",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            // This is pulling from the input on the webpage
            name: event.target.elements[0].value,
            image_url: event.target.elements[1].value,
            speed: event.target.elements[2].value,
            size: event.target.elements[3].value,
            turning: event.target.elements[4].value,
            team_id: event.target.elements[5].value,
        })
    })
    .then(result => result.json())
    // This is where I will make it show up on the front end
    .then(char => {
        const character = char["character"]
        const teams = teamsContainer.children
        for(let i = 0; i < teams.length; i++){
            if(teams[i].dataset.id == char["character"]["team_id"]){
                const team = teams[i]
                const ulc = team.getElementsByTagName("ul")
                const ul = ulc[0]
                ul.innerHTML += `<li class="att-li" id="char-${character.id}" data-id=${character.id}><span>${character.name}</span>
                <button class="att-buttons" data-action='attributes'>Attributes</button><br><img data-action="image" class="char-img" src="${character.image_url}">
                 </li>`
                // char.render()
            }
        }
        console.log(char)
    })
    // event.target.parentElement.parentElement.getElementsByTagName("img")[0].src = ?
}

