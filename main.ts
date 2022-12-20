sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    bil.setPosition(randint(0, 160), randint(0, 120))
    mySprite.setPosition(randint(0, 160), randint(0, 12))
    info.startCountdown(3)
})
let bil: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(6)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 2 2 2 2 2 . . 
    . . . . . 2 c 2 2 2 2 2 2 4 2 . 
    . . . . 2 c c 2 2 2 2 2 2 4 c 2 
    . . d 2 4 c c 2 4 4 4 4 4 4 c c 
    . d 2 2 4 c b e e e e e e e 2 c 
    . 2 2 2 4 b e e b b b e b b e 2 
    . 2 2 2 2 2 e b b b b e b b b e 
    . 2 2 2 2 e 2 2 2 2 2 e 2 2 2 e 
    . 2 d d 2 e f e e e f e e e e e 
    . d d 2 e e e f e e f e e e e e 
    . e e e e e e e f f f e e e e e 
    . e e e e f f f e e e e f f f f 
    . . . e f f f f f e e f f f f f 
    . . . . f f f f . . . . f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
bil = sprites.create(img`
    . . . . . . . 8 8 8 8 8 . . . . 
    . . . . . 8 8 6 6 6 6 6 8 . . . 
    . . . . 8 8 6 6 6 6 6 6 6 8 . . 
    . . . . 8 9 7 6 6 6 6 6 7 b 8 . 
    . . 8 8 9 9 7 6 6 6 6 6 7 9 b 8 
    . 8 6 6 9 9 7 7 6 6 6 6 7 9 9 8 
    8 6 6 6 9 9 6 7 7 7 7 7 6 9 9 8 
    8 6 6 6 9 9 8 8 8 8 8 8 8 9 9 8 
    8 6 6 6 9 b 8 b b b 8 b 8 b 9 8 
    8 6 8 8 8 8 b b b b 8 b b 8 b 8 
    8 8 3 3 8 8 6 6 6 6 8 6 6 8 8 8 
    8 3 3 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 f f f 8 8 8 8 f f f 8 8 
    . 8 8 f b b c f 8 8 f b b c f . 
    . . . . c f f . . . . c f f . . 
    `, SpriteKind.Enemy)
forever(function () {
    if (info.score() == 20) {
        game.over(true)
    }
})
