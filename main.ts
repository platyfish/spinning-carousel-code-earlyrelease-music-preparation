function PattrnTypes () {
    if (Menu == 1 && (Playing_pattern == 1 && Which_pattern == 0)) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 1)
    }
    if (Menu == 1 && (Playing_pattern == 1 && Which_pattern == 1)) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
    if (Menu == 1 && (Playing_pattern == 1 && Which_pattern == 2)) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(250)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(250)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(250)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(250)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P0, 1)
    }
    if (Menu == 1 && (Playing_pattern == 1 && Which_pattern == 3)) {
        pins.digitalWritePin(DigitalPin.P0, randint(0, 1))
        pins.digitalWritePin(DigitalPin.P1, randint(0, 1))
        pins.digitalWritePin(DigitalPin.P2, randint(0, 1))
        basic.pause(500)
    }
    if (Menu == 1 && (Playing_pattern == 1 && Which_pattern == 4)) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(250)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P2, 1)
    }
}
input.onButtonPressed(Button.A, function () {
    if (Menu == 2) {
        What_music += 1
    }
    if (Menu == 3) {
        Audio += 1
    }
    if (Menu == 0) {
        Speed += 1
        music.playTone(523, music.beat(BeatFraction.Whole))
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        basic.clearScreen()
    }
    if (Menu == 1) {
        Which_pattern += 1
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 5000, 2207, 51, 255, 500, SoundExpressionEffect.Warble, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
    }
})
function Music () {
    if (Menu == 2 && (Playing_music == 1 && What_music == 0)) {
        basic.showLeds(`
            . . # # .
            . . # . #
            . . # . .
            . # # . .
            . # # . .
            `)
    }
    if (Menu == 2 && (Playing_music == 1 && What_music == 1)) {
        basic.showLeds(`
            . # # # #
            . # . . #
            . # . . #
            # # . # #
            # # . # #
            `)
    }
    if (Menu == 2 && (Playing_music == 1 && What_music == 2)) {
        basic.showLeds(`
            . # # . .
            # . # . #
            . . # . .
            . . # . #
            . # . . .
            `)
    }
    if (Menu == 2 && (Playing_music == 1 && What_music == 3)) {
        basic.showLeds(`
            . . . # .
            . . . # .
            . # # # .
            . # . # .
            . # # # .
            `)
    }
    if (Menu == 2 && (Playing_music == 1 && What_music == 4)) {
        basic.showLeds(`
            . # . # .
            # # # # #
            . # . # .
            # # # # #
            . # . # .
            `)
    }
}
function Miscellaneous_Logic () {
    if (Menu == 1 && Playing_pattern == 0) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
    if (Menu > 3) {
        Menu = 0
    }
    if (Which_pattern > 4) {
        Which_pattern = 0
    }
    if (Playing_pattern > 1) {
        Playing_pattern = 0
    }
    if (Audio < 0) {
        Audio = 0
    }
    if (Audio > 255) {
        Audio = 255
    }
    if (What_music > 4) {
        What_music = 0
    }
    if (What_music < 0) {
        What_music = 4
    }
}
function Display () {
    if (Menu == 1) {
        if (Which_pattern == 0) {
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
        }
        if (Which_pattern == 1) {
            basic.showLeds(`
                . . # . .
                . # # . .
                . . # . .
                . . # . .
                . # # # .
                `)
        }
        if (Which_pattern == 2) {
            basic.showLeds(`
                . # # # .
                # . . . #
                . . # # .
                . # . . .
                # # # # #
                `)
        }
        if (Which_pattern == 3) {
            basic.showLeds(`
                . # # # .
                . . . . #
                . . # # .
                . . . . #
                . # # # .
                `)
        }
        if (Which_pattern == 4) {
            basic.showLeds(`
                . . # # .
                . # . # .
                . # # # #
                . . . # .
                . . . # .
                `)
        }
    }
}
function Speed_Logic () {
    if (Speed > 100) {
        Speed = 100
    }
    if (Speed < -100) {
        Speed = -100
    }
}
buttonClicks.onButtonHeld(buttonClicks.AorB.B, function () {
    if (Menu == 3) {
        Audio += -10
    }
    if (Menu == 0) {
        Speed += -10
        music.playTone(165, music.beat(BeatFraction.Whole))
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.AB, function () {
    if (Menu == 0) {
        Speed = 0
        basic.showLeds(`
            . . # # .
            . # . . #
            . # . . #
            . # . . #
            . . # # .
            `)
        basic.clearScreen()
    }
    if (Menu == 2) {
        What_music = 0
    }
})
input.onButtonPressed(Button.B, function () {
    if (Menu == 2) {
        What_music += -1
    }
    if (Menu == 3) {
        Audio += -1
    }
    if (Menu == 0) {
        Speed += -1
        music.playTone(247, music.beat(BeatFraction.Whole))
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        basic.clearScreen()
    }
    if (Menu == 1) {
        Playing_pattern += 1
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 5000, 255, 0, 250, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), SoundExpressionPlayMode.UntilDone)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    Menu += 1
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (Menu == 0) {
        basic.showString("" + (Speed))
    }
    if (Menu == 3) {
        basic.showString("" + (Audio))
    }
})
buttonClicks.onButtonHeld(buttonClicks.AorB.A, function () {
    if (Menu == 3) {
        Audio += 10
    }
    if (Menu == 0) {
        Speed += 10
        music.playTone(784, music.beat(BeatFraction.Whole))
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        basic.clearScreen()
    }
})
let Playing_pattern = 0
let Audio = 0
let Playing_music = 0
let What_music = 0
let Which_pattern = 0
let Menu = 0
let Speed = 0
Speed = 0
Menu = 0
Which_pattern = 0
What_music = 0
Playing_music = 1
Audio = 255
led.setBrightness(255)
basic.forever(function () {
    servos.P0.run(Speed)
    Speed_Logic()
    Display()
    PattrnTypes()
    Music()
    Miscellaneous_Logic()
    music.setVolume(Audio)
})
basic.forever(function () {
    while (Menu == 3) {
        if (1 >= Audio) {
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
            break;
        }
        if (75 >= Audio) {
            basic.showLeds(`
                . . . . .
                # # . . .
                # # . # .
                # # . . .
                . . . . .
                `)
            break;
        }
        if (128 >= Audio) {
            basic.showLeds(`
                . . . . .
                # # . # .
                # # . # .
                # # . # .
                . . . . .
                `)
            break;
        }
        if (200 >= Audio) {
            basic.showLeds(`
                . . # . .
                # # . # .
                # # . # .
                # # . # .
                . . # . .
                `)
            break;
        }
        if (250 >= Audio) {
            basic.showLeds(`
                . . . # .
                # # . . #
                # # # . #
                # # . . #
                . . . # .
                `)
            break;
        }
        music.playTone(440, music.beat(BeatFraction.Double))
    }
})
