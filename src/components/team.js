class Team {
    constructor({id, name, creator, characters}){
        console.log(characters)
        this.id = id
        this.name = name 
        this.creator = creator
        
        this.characters = characters.map(c => new Character(c))
        // this.baseTeamURL = `${baseURL}/teams`
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
}