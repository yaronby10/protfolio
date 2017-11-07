'use strict'

console.log('calculator');

var gNum1 = '';
var gNum2 = null;
var gAction = null;

function addDigit(digit) {
    // var digit = elDigit.innerText;
    if (digit)
        if (gNum2 === null) {
            gNum1 += digit;
            renderText('.nums', gNum1);
        } else {
            gNum2 += digit;
            renderText('.nums', gNum2);
        }
}

function clearNum() {
    if (!gNum2) gNum1 = '';
    else gNum2 = '';
    renderText('.nums', '0');
}

function opClicked(elAction) {
    if (gNum1 && gNum2) {
        gNum1 = getResult();
        gNum2 = '0'
    }
    if (!gNum1) return;
    gAction = elAction.innerText;
    var str = gNum1 + gAction;
    renderText('.sign', str);
    renderText('.nums', '0');
    gNum2 = '';
}
function reset() {
    gNum1 = ''
    gNum2 = null
    gAction = null;
    renderText('.sign', '');
    renderText('.nums', '0');
}
function getResult() {
    document.querySelector('.sign').innerText += gNum2;

    if (gNum1 && gNum2) {
        var res;
        switch (gAction) {
            case 'X':
                res = gNum1 * gNum2
                break;
            case '/':
                res = gNum1 / gNum2
                break;
            case '-':
                res = gNum1 - gNum2
                break;
            case '+':
                res = +gNum1 + +gNum2
                break;
            // case '^':
            //     res = +gNum1 ^ +gNum2
            //     break;
            // case '%':
            //     res = +gNum1 % +gNum2
            //     break;
        }
        renderText('.reset', 'C');
        document.querySelector('.reset').setAttribute('onclick', 'reset()');
        renderText('.nums', res);
        return res
    }
}

function renderText(selector, text) {
    document.querySelector(selector).innerText = text;
}


