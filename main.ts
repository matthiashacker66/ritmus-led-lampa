let H4 = 0
basic.forever(function () {
    H4 = input.soundLevel() * 4.01
})
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P1, H4)
})
