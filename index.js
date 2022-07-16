const canvas = document.querySelector('canvas');

const c = canvas.getContext('2d');
/*used to draw shapes on screen*/

canvas.width=1024
canvas.height=576
/*to ensure canvas will fit most screen sizes*/

c.fillRect(0, 0, canvas.width, canvas.height);
/*API call that draws a rectangle over the canvas, takes 4 arguments*/

/*player + enemy creation using OOP instead of context API call*/
/*moving images w/in games typically called sprites*/
/*velocity property determines in which direction should sprites be moving when inside animation loop*/
/*gravity acceleration on our velocity property*/
const gravity = 0.2
class Sprite {
    constructor({position, velocity}) { /*by wrapping as object, you can pass through in any order and makes it easier to manager as game gets larger*/
        /*one of the first things to add to an object in game dev*/
        this.position = position
        this.velocity = velocity
        this.height = 150
    }

    draw() {
        /*assign fillstyle before fillrect to make rectangle red*/
        c.fillStyle='red'
        c.fillRect(this.position.x, this.position.y, 50, this.height)
    }

    update() {
        /*this is where we update properties to be animated*/
        this.draw()
        this.position.y += this.velocity.y

        if(this.position.y + this.height + this.velocity.y >= canvas.height) {
            this.velocity.y = 0
        } else  this.velocity.y += gravity
    }
}

const player = new Sprite({
    position: {
    /*this is where you set the position of THIS player*/
    x:0,
    y:0
},
velocity: { /*needs x & y proprety so that sprite can move left right up down*/
    X:0,
    y:0 /*makes sure default status is not player moving*/
}
})

const enemy = new Sprite({
    position: {
        x: 400,
        y: 100
    },
    velocity: { /*needs x & y proprety so that sprite can move left right up down*/
        X:0,
        y:0 /*makes sure default status is not player moving*/
    }
})


console.log(enemy);
console.log(player);

/*animation loop, creates infinite loop to be called so we can animate frame by frame*/

function animate() {
    window.requestAnimationFrame(animate)
    /*console.log('go');*/
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height) /*need to clear canvas for every loop to avoid paint like affect when looping in animation*/
    player.update()
    enemy.update()
}

animate()
