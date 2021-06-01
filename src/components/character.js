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

    this.x = (1)
    this.y = (gameHeight / 2)
    this.color = 'red'
    this.width = 10 * this.size 
    this.height = 10 * this.size

    this.xspeed = 0
    this.yspeed = 0 

    this.addMovement = this.addMovement.bind(this)
    this.stopMovement = this.stopMovement.bind(this)
    }

    controls(){
        this.setMovement()
    }

    setMovement(){
        document.addEventListener('keydown', this.addMovement)
        document.addEventListener('keyup', this.stopMovement)
    }

    addMovement(event){
        console.log(event.keyCode)
        switch(event.keyCode){
            case rightArrow:
                if(this.x < gameWidth - this.width){
                this.yspeed = 0
                this.xspeed = .5 * this.speed
                }else{
                    this.xspeed = 0
                    this.x = gameWidth - this.width
                }
                break 
            
            case leftArrow:  
                if(this.x > 0){
                this.yspeed = 0
                this.xspeed = -(.5 * this.speed)
                }else{
                    this.xspeed = 0
                    this.x = 0
                }
                break

            case upArrow:
                if(this.y > 0){
                    this.yspeed = -(.5 * this.turning)
                    this.xspeed = 0
                }else{
                    this.yspeed = 0
                    this.y = 0
                }
                
                break

            case downArrow:
                if(this.y < gameHeight - this.height){
                    this.yspeed = .5 * this.turning
                    this.xspeed = 0 
                }else{
                    this.yspeed = 0
                    this.y = gameHeight - this.height
                } 
        }
    }
    
    stopMovement(event){
        switch(event.keyCode) {
            case rightArrow:
                this.xspeed = 0
                break 
            
            case leftArrow:    
                this.xspeed = 0
                break 

            case upArrow:
                this.yspeed = 0

            case downArrow:
                this.yspeed = 0  
        }
    }

    update(){
        this.x += this.xspeed
        this.y += this.yspeed
    }

    draw(){
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }

    render(){
        return(`<li class="att-li" id="char-${this.id}" data-id=${this.id}><span>${this.name}</span>
        <button class="att-buttons" data-action='attributes'>Attributes</button>
        <button class="att-buttons" data-action='delete'>Delete Character</button><br><img data-action="image" class="char-img" src="${this.image_url}">
         </li>`)
    }


    renderAttributes(){
        const li = document.getElementById(`char-${this.id}`)
        const ul = document.createElement("ul")
        ul.id = "attributes"
        debugger
        Object.entries(this).slice(3,6).forEach(a => ul.innerHTML += `<li>${a[0].toUpperCase()}: ${a[1]}</li>`)
        ul.innerHTML += `<form>
                            
                            <input type="text" id="image_url" name="image_url" value="Update Image URL"<br>
                            <input type="submit" value="Update">
                            </form>`
        li.append(ul)
   
    }

    addToSelectedCharacter(){ 
        sound.play()
        const container = document.getElementById("selected-character")
        container.innerText = this.name
        const image = document.createElement("src")
        image.innerHTML = `<img class="selected-char-img" src="${this.image_url}"></img>`
        container.append(image)
    }
}