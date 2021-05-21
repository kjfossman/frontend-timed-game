class Team {
    constructor({id, name, creator}){
        this.id = id
        this.name = name 
        this.creator = creator
        // this.baseTeamURL = `${baseURL}/teams`
    }

    getTeams(){
        fetch("http://localhost:3000/teams")
        .then(result => result.json())
        .then(teams => {
            teams.forEach(team => {
                const t = new Team(team)
                t.addToDOM()
            })
        })
    }

    render(){
        return(`<li id="team-${this.id}" data-id=${this.id}></li>
        <span>${this.name}</span>`)
        
    }

    addToDOM(){
        console.log(this)
        const teamsContainer = document.getElementById("teams-container")
        teamsContainer.innerHTML += this.render()
    }
}