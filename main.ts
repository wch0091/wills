input.onButtonPressed(Button.B, function () {
    while (true) {
        motobit.enable(MotorPower.On)
        if (pins.analogReadPin(AnalogPin.P0) <= right - 0) {
            motobit.setMotorSpeed(Motor.Left, MotorDirection.Reverse, 75)
            motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 25)
            basic.pause(50)
        } else if (pins.analogReadPin(AnalogPin.P2) <= right - 0) {
            motobit.setMotorSpeed(Motor.Right, MotorDirection.Reverse, 75)
            motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 20)
            basic.pause(50)
        } else {
            motobit.setMotorSpeed(Motor.Left, MotorDirection.Reverse, 40)
            motobit.setMotorSpeed(Motor.Right, MotorDirection.Reverse, 40)
        }
    }
})
let right = 0
bitbot.bbEnableBluetooth(BBBluetooth.btEnable)
let left = pins.analogReadPin(AnalogPin.P0)
right = pins.analogReadPin(AnalogPin.P2)
