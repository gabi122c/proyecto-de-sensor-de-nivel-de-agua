let Alerta_Roja = 0
radio.onReceivedNumber(function (receivedNumber) {
    let recivedNumber = 0
    if (recivedNumber == 1) {
        basic.showNumber(recivedNumber)
        music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.UntilDone)
        basic.pause(2000)
    } else if (recivedNumber == 2) {
        basic.showNumber(recivedNumber)
        music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.UntilDone)
        basic.pause(2000)
    } else if (recivedNumber == 3) {
        basic.showNumber(recivedNumber)
        music.play(music.stringPlayable("E B C5 A B G A F ", 478), music.PlaybackMode.UntilDone)
        basic.pause(2000)
    } else if (recivedNumber == 0) {
        basic.showNumber(recivedNumber)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.setGroup(1)
    Alerta_Roja = pins.map(
    pins.analogReadPin(AnalogPin.P0),
    0,
    1023,
    0,
    100
    )
    if (Alerta_Roja >= 0 && Alerta_Roja <= 33) {
        radio.sendNumber(1)
        basic.showIcon(IconNames.Yes)
    } else if (Alerta_Roja >= 33 && Alerta_Roja <= 66) {
        radio.sendNumber(2)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    } else if (Alerta_Roja >= 67 && Alerta_Roja <= 100) {
        radio.sendNumber(3)
        basic.showIcon(IconNames.No)
    }
})
