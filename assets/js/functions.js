var firstNumber = 0
var secondNumber = 0
var virg = false

var lastOperation = ''


$(document).ready(function () {
    $('#result').val(0)
})


function formatAndSet(sNum) {
    var sBkp = ''
    var sRtn = ''
    var bFin = false
    var bTem = false
    var nHou = 1

    if (typeof (sNum) == 'number') sNum = sNum.toString()

    for (var num = (sNum.length - 1); num >= 0; num--) if (sNum[num] == ',') bTem

    if (bTem == true) {
        for (var num = (sNum.length - 1); num >= 0; num--) {
            if (sNum[num] == ',') {
                bFin = true
                sBkp += sNum[num]
                num--
            }

            if (bFin == true) {
                sBkp += sNum[num]
                if (nHou % 3 == 0 && num > 0) sBkp += '.'
                nHou++
            }
            else if (bFin == false) sBkp += sNum[num]
        }
    }

    else if (bTem == false) {
        for (var num = (sNum.length - 1); num >= 0; num--) {
            sBkp += sNum[num]
            if (nHou % 3 == 0 && num > 0) sBkp += '.'
            nHou++
        }
    }

    for (var num = (sBkp.length - 1); num >= 0; num--) sRtn += sBkp[num]

    $('#result').val(sRtn)
}

function cls() {
    firstNumber = 0
    secondNumber = 0
    virg = false
    lastOperation = ''
    formatAndSet(secondNumber)
}


function backspace() {
    secondNumber = secondNumber.toString()
    secondNumber = secondNumber.substring(0, secondNumber.length - 1)
    if (secondNumber != '') secondNumber = parseFloat(secondNumber)
    else secondNumber = 0
    formatAndSet(secondNumber)
}

function enter() {
    if (lastOperation == '') {
        firstNumber = secondNumber
        secondNumber = '0'
    }

    else if (lastOperation != '') {
        if (lastOperation == 'so') firstNumber = parseFloat(firstNumber) + parseFloat(secondNumber)
        else if (lastOperation == 'su') firstNumber = parseFloat(firstNumber) - parseFloat(secondNumber)
        else if (lastOperation == 'mu') firstNumber = parseFloat(firstNumber) * parseFloat(secondNumber)
        else if (lastOperation == 'di') firstNumber = parseFloat(firstNumber) / parseFloat(secondNumber)

        secondNumber = firstNumber
    }

    formatAndSet(secondNumber)

    virg = false
}

function som() {
    if (lastOperation == '') {
        firstNumber = secondNumber
        secondNumber = '0'
    }

    else if (lastOperation != '') {
        if (lastOperation == 'so') firstNumber = parseFloat(firstNumber) + parseFloat(secondNumber)

        secondNumber = firstNumber
    }

    formatAndSet(secondNumber)
    lastOperation = 'so'
}
function sub() {
    if (lastOperation == '') {
        firstNumber = secondNumber
        secondNumber = '0'
    }

    else if (lastOperation != '') {
        firstNumber = parseFloat(firstNumber) - parseFloat(secondNumber)
        secondNumber = firstNumber
    }

    formatAndSet(secondNumber)
    lastOperation = 'su'
}
function mul() {
    if (lastOperation == '') {
        firstNumber = secondNumber
        secondNumber = '0'
    }

    else if (lastOperation != '') {
        firstNumber = parseFloat(firstNumber) * parseFloat(secondNumber)
        secondNumber = firstNumber
    }

    formatAndSet(secondNumber)
    lastOperation = 'mu'
}
function div() {
    if (lastOperation == '') {
        firstNumber = secondNumber
        secondNumber = '0'
    }

    else if (lastOperation != '') {
        firstNumber = parseFloat(firstNumber) / parseFloat(secondNumber)
        secondNumber = firstNumber
    }

    formatAndSet(secondNumber)
    lastOperation = 'di'
}

/*
function virgula() {
    if (virg == false) {
        secondNumber = secondNumber.toString()
        secondNumber += ','
        virg = true
    }

    formatAndSet(secondNumber)
}
*/

function btn0() {
    if (secondNumber != 0) {
        secondNumber += '0'
        formatAndSet(secondNumber)
    }
}

function btn1() {
    if (secondNumber == 0) {
        secondNumber = '1'
        formatAndSet(secondNumber)
    }
    else {
        secondNumber += '1'
        formatAndSet(secondNumber)
    }
}


function btn2() {
    if (secondNumber == 0) {
        secondNumber = '2'
        formatAndSet(secondNumber)
    }
    else {
        secondNumber += '2'
        formatAndSet(secondNumber)
    }
}

function btn3() {
    if (secondNumber == 0) {
        secondNumber = '3'
        formatAndSet(secondNumber)
    }
    else {
        secondNumber += '3'
        formatAndSet(secondNumber)
    }
}

function btn4() {
    if (secondNumber == 0) {
        secondNumber = '4'
        formatAndSet(secondNumber)
    }
    else {
        secondNumber += '4'
        formatAndSet(secondNumber)
    }
}

function btn5() {
    if (secondNumber == 0) {
        secondNumber = '5'
        formatAndSet(secondNumber)
    }
    else {
        secondNumber += '5'
        formatAndSet(secondNumber)
    }
}

function btn6() {
    if (secondNumber == 0) {
        secondNumber = '6'
        formatAndSet(secondNumber)
    }
    else {
        secondNumber += '6'
        formatAndSet(secondNumber)
    }
}

function btn7() {
    if (secondNumber == 0) {
        secondNumber = '7'
        formatAndSet(secondNumber)
    }
    else {
        secondNumber += '7'
        formatAndSet(secondNumber)
    }
}

function btn8() {
    if (secondNumber == 0) {
        secondNumber = '8'
        formatAndSet(secondNumber)
    }
    else {
        secondNumber += '8'
        formatAndSet(secondNumber)
    }
}

function btn9() {
    if (secondNumber == 0) {
        secondNumber = '9'
        formatAndSet(secondNumber)
    }
    else {
        secondNumber += '9'
        formatAndSet(secondNumber)
    }
}
