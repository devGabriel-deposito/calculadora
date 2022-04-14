var virgula = false
var operar = false

var firstNumber = 0
var secondNumber = 0

var numeroResult = '0'

function format(numberoBkp) {
    
}

function cls() {
    numeroResult = ''
    $('#result').val(numeroResult.toLocate)
}

function backspace() {
    numeroResult = numeroResult.substring(0, numeroResult.length - 1)
    $('#result').val(numeroResult)
}

function btn0() {
    if (numeroResult != 0) {
        numeroResult += '0'
        $('#result').val(numeroResult)
    }
}

function btn1() {
    if (numeroResult == 0) {
        numeroResult = '1'
        $('#result').val(numeroResult)
    }
    else {
        numeroResult += '1'
        $('#result').val(numeroResult)
    }
}

function btn2() {
    if (numeroResult == 0) {
        numeroResult = '2'
        $('#result').val(numeroResult)
    }
    else {
        numeroResult += '2'
        format()
        $('#result').val(numeroResult)
    }
}

function btn3() {
    if (numeroResult == 0) {
        numeroResult = '3'
        $('#result').val(numeroResult)
    }
    else {
        numeroResult += '3'
        $('#result').val(numeroResult)
    }
}

function btn4() {
    if (numeroResult == 0) {
        numeroResult = '4'
        $('#result').val(numeroResult)
    }
    else {
        numeroResult += '4'
        $('#result').val(numeroResult)
    }
}

function btn5() {
    if (numeroResult == 0) {
        numeroResult = '5'
        $('#result').val(numeroResult)
    }
    else {
        numeroResult += '5'
        $('#result').val(numeroResult)
    }
}

function btn6() {
    if (numeroResult == 0) {
        numeroResult = '6'
        $('#result').val(numeroResult)
    }
    else {
        numeroResult += '6'
        $('#result').val(numeroResult)
    }
}

function btn7() {
    if (numeroResult == 0) {
        numeroResult = '7'
        $('#result').val(numeroResult)
    }
    else {
        numeroResult += '7'
        $('#result').val(numeroResult)
    }
}

function btn8() {
    if (numeroResult == 0) {
        numeroResult = '8'
        $('#result').val(numeroResult)
    }
    else {
        numeroResult += '8'
        $('#result').val(numeroResult)
    }
}

function btn9() {
    if (numeroResult == 0) {
        numeroResult = '9'
        $('#result').val(numeroResult)
    }
    else {
        numeroResult += '9'
        $('#result').val(numeroResult)
    }
}