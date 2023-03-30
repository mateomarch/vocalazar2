let lista_de_texto: string[] = []
input.onButtonPressed(Button.A, function () {
    lista_de_texto = [
    "a",
    "e",
    "i",
    "o",
    "u"
    ]
    basic.showString("" + (lista_de_texto._pickRandom()))
})
basic.forever(function () {
	
})
