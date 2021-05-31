function test(){
    if(game.style.display === 'block'){
        game.style.display = 'none'
    }else{
        game.style.display = 'block'
        drawBackground()
    }

}

function clearFrame(){
    ctx.clearRect(0, 0, gameWidth, gameHeight)
}

function drawBackground(){
    ctx.fillStyle = 'blue'
    ctx.fillRect(0, 0, gameWidth, gameHeight)
}

function drawLines(){
    ctx.fillStyle = 'black'
    ctx.fillRect(100, 0, 10, 500)
}

function update(){
    character.update()
}

function draw(){
    drawBackground()
    character.draw()
    drawLines()
}

function loop(){
    console.log('loop')
    clearFrame()
    update()
    draw()
    animate(loop)
}

function start(char){
    
    character = char 
    character.controls()
    if(game.style.display === 'block'){
        game.style.display = 'none'
        main.style.display = 'block'
    }else{
        game.style.display = 'block'
        main.style.display = 'none'
        drawBackground()
    }
    animate(loop)
}