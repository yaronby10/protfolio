'use strict';
console.log('touch nums!!!');
var gMatSize = 6;
var gNums = [];
var gGameBoard = [];
var gExpectedNum = 1;
var gStartTime;
var gTimer;
var secsPast = 0;

function initGame() {
    console.log('Document is ready!');
    resetNums();
    createBoard();
    renderGameBoard();

}


function resetNums() {
    for (var i = 1; i <= Math.pow(gMatSize, 2); i++) {
        gNums.push(i);
    }
}


function createBoard() {
    var idx;
    var num;
    for (var i = 0; i < gMatSize; i++) {
        gGameBoard[i] = [];
        for (var j = 0; j < gMatSize; j++) {
            idx = Math.floor(Math.random() * gNums.length);
            num = gNums[idx];
            gGameBoard[i].push(num);
            gNums.splice(idx, 1);
        }
    }
}


function renderGameBoard() {
    var strHTML = '';
    for (var i = 0; i < gMatSize; i++) {
        strHTML += '<tr>'
        for (var j = 0; j < gMatSize; j++) {
            strHTML += '<td onclick="checkNum(this)">' + gGameBoard[i][j] + '</td>';
        }
        strHTML += '</tr>';
    }
    var elGameBoard = document.querySelector('.board')
    elGameBoard.innerHTML = strHTML;
}


function checkNum(elTd) {
    if (+elTd.innerText === gExpectedNum) {
        if (gExpectedNum === 1) {
            gStartTime = Date.now();
            console.log(gStartTime);
            gTimer = setInterval(getTimer, 1000)
        }
        elTd.classList.add('flipped');
        gExpectedNum++;
        if (+gExpectedNum === Math.pow(gMatSize, 2) + 1) {
            console.log(elTd.innerText);
            clearInterval(gTimer);
        }
    }
}

function getTimer() {
    secsPast++
    var elTimer = document.querySelector('.time > h4 > span');
    var elH4 = document.querySelector('.time > h4');
    // elTimer.style.display = 'block'
    elH4.style.display = 'block'
    console.log(elTimer)
    elTimer.innerText = secsPast;
}


























// var gBoard = createBoard();

// ***to do from bginning




// playGameOfLife();

// var gGameInterval = setInterval(runTurn, 100)

// function playGameOfLife() {
//     var numOfTurns = 2;
//     for (var i = 0; i < numOfTurns; i++) {
//         runTurn()
//     }
// // }
// runTurn()
// function runTurn() {
//     // console.table(gBoard);
//     renderBoard(gBoard);
//     gBoard = runGeneration(gBoard);
// }

// function runGeneration(board) {
//     console.log('Running Generation');
//     var nextBoard = [];
//     var allNegsCount = 0;
//     for (var i = 0; i < board.length; i++) {
//         var row = board[i];
//         nextBoard.push([]);
//         for (var j = 0; j < row.length; j++) {
//             var negsCount = countNegs(board, i, j);
//             allNegsCount += negsCount;
//             var isLife = (negsCount >= 3 && negsCount <= 5)
//             nextBoard[i][j] = isLife;
//         }

//     }
//     if (allNegsCount === 0) {
//         console.log('All Dead');
//         clearInterval(gGameInterval);
//     }

//     return nextBoard;

// }

// function countNegs(board, cellI, cellJ) {
//     var count = 0;
//     for (var i = cellI - 1; i <= cellI + 1; i++) {

//         if (i < 0 || i >= board.length) continue;

//         for (var j = cellJ - 1; j <= cellJ + 1; j++) {
            
//             if (j < 0 || j >= board[i].length) continue;
//             if (i === cellI && j === cellJ) continue;

//             if (board[i][j]) count++;
//         }
//     }
//     return count;
// }


// function createBoard() {
//     var SIZE = 4;
//     var board = [];
//     for (var i = 0; i < SIZE; i++) {
//         board.push([]);
//         for (var j = 0; j < SIZE; j++) {
//             board[i][j] = i*j + 1;
//         }  
//     }
//     return board;
// }
// var mat = createBoard()
// console.table(mat)
// function renderBoard(board) {
//     var strHtml = ''

//     for (var i = 0; i < board.length; i++) {
//         var row = board[i];
//         strHtml += '<tr>';
//         for (var j = 0; j < row.length; j++) {
//             strHtml += '<td>'
//             strHtml += (board[i][j])? 'X' : ''
//             strHtml += '</td>'
//         }
//         strHtml += '</tr>';
//     }


//     var elBoard = document.querySelector('#board')
//     elBoard.innerHTML = strHtml;
// }