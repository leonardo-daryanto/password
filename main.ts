//% weight=100 color=#D35400 icon=P

namespace password {
    /**
     * Make a password e.g.: AABAA
     */
    //% block
    export function createPassword(passwordCreate: string): void {
        
        let passwordText = passwordCreate

        let enter = ""

        if (enter == passwordText) {
            
            basic.showIcon(IconNames.Yes)

            control.reset()
        } else {
            
            basic.showIcon(IconNames.No)
            control.reset()
        }

        input.onButtonPressed(Button.A, function() {
            let enter = ""
            enter = "" + enter + "A"
        })
        input.onButtonPressed(Button.B, function () {
            let enter = ""
            enter = "" + enter + "B"
        })
    }
}