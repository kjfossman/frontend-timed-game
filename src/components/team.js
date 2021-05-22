class Team {

    static all = []

    constructor({id, name, creator, characters}){
        console.log(characters)
      
        this.id = id
        this.name = name 
        this.creator = creator
        
        this.characters = characters.map(c => new Character(c))
        // this.baseTeamURL = `${baseURL}/teams`

        Team.all.push(this)
    }

         
    

    render(){
       
        return(`<li id="team-${this.id}" data-id=${this.id}>
        <span>${this.name}</span></li>`)
        
    }

    addToDOM(){
        console.log(this)
        const teamsContainer = document.getElementById("teams-container")
        teamsContainer.innerHTML += this.render()
    }

    renderCharacters(){
        const li = document.getElementById(`team-${this.id}`)
        const ul = document.createElement("ul")
        this.characters.forEach(c => ul.innerHTML += c.render())
        li.append(ul)

        charactersDisplayed = ul
    }
}