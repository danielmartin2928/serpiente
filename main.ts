input.onButtonPressed(Button.A, function () {
    vibora.removeAt(0).turn(Direction.Right, 90)
})
input.onButtonPressed(Button.B, function () {
    vibora.removeAt(0).turn(Direction.Left, 90)
})
let sigiente: game.LedSprite = null
let vibora: game.LedSprite[] = []
let lista = [game.createSprite(0, 2), game.createSprite(1, 2), game.createSprite(2, 2)]
let comida = game.createSprite(randint(0, 4), randint(0, 4))
let pausa = 1000
let paso = 75
let miniPausa = 250
game.setScore(0)
basic.forever(function () {
    for (let index = 0; index <= 2; index++) {
        lista[index].move(1)
    }
    if (vibora[2].isTouching(comida)) {
        game.addScore(1)
        comida.delete()
        comida = game.createSprite(randint(0, 4), randint(0, 4))
        if (pausa > miniPausa) {
            pausa = pausa - paso
        }
    }
    if (vibora[2].isTouching(vibora[1])) {
        basic.showNumber(game.score())
        game.gameOver()
    }
    for (let index = 0; index <= 1; index++) {
        sigiente = vibora.removeAt(index + 1)
        vibora[index].set(LedSpriteProperty.Direction, sigiente.get(LedSpriteProperty.Direction))
    }
    basic.pause(pausa)
})
