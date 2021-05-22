class Character {
    static all = []

    constructor({id, name, image_url, speed, size, turning, team_id}){
    this.id = id
    this.name = name
    this.image_url = image_url
    this.speed = speed 
    this.size = size 
    this. turning = turning 
    this.team_id = team_id

    Character.all.push(this)
    }

    render(){
        return(`<li class="att-li" id="char-${this.id}" data-id=${this.id}><span>${this.name}</span>
        <button id="att-buttons" data-action='attributes'>Attributes</button>
        </li>`)
    }


    renderAttributes(){
        const li = document.getElementById(`char-${this.id}`)
        const ul = document.createElement("ul")
        this.attributes.forEach(c => ul.innerHTML += c.render())
        li.append(ul)

        charactersDisplayed = ul
    }
}