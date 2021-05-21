class Character {
    constructor({id, name, image_url, speed, size, turning, team_id}){
    this.id = id
    this.name = name
    this.image_url = image_url
    this.speed = speed 
    this.size = size 
    this. turning = turning 
    this.team_id = team_id
    }

    render(){
        return(`<li data-id=${this.id}><span>${this.name}</span></li>`)
    }
}