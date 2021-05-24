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
        <button class="att-buttons" data-action='attributes'>Show Attributes</button><br><img data-action="image" class="char-img" src="${this.image_url}">
         </li>`)
    }


    renderAttributes(){
        const li = document.getElementById(`char-${this.id}`)
        const ul = document.createElement("ul")
        Object.entries(this).slice(3,6).forEach(a => ul.innerHTML += `<li>${a[0].toUpperCase()}: ${a[1]}</li>`)
        li.append(ul)
        charactersDisplayed = ul
    }

    addToSelectedCharacter(){ 
        sound.play()
        const container = document.getElementById("selected-character")
        container.innerText = this.name + " Selected"
        console.log(container)
    }
}