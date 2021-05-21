class Team {
    constructor({id, name, creator}){
        this.id = id
        this.name = name 
        this.creator = creator
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