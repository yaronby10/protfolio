'use strict'
console.log('mine- sweeper !!!');
// ***suggested functions :

// initGame() 
// buildBoard() 
// setMinesNegsCount(board) 
// renderBoard(board) 
// cellClicked(elCell, i, j) 
// cellMarked(elCell) 
// checkGameOver() 
// expandShown(board, elCell, i, j)

// ***suggested globals :

// gBoard 
// gLevel = {     SIZE: 4,     MINES: 2 };
// gState = {     isGameOn: false,     shownCount: 0,     markedCount: 0,     secsPassed: 0 } 

// ***globals :


var gBoard;
// CR: Instead this other matrix you can save object with isHit and value in gBoard. 
var gIsHitBoard;
var gLevel = { size: 5, mines: 2 };
var gState = { isGameOn: false, shownCount: 0, markedCount: 0, secsPassed: 0 };


// ***Game Pieces Types :

// CR: nice thing but you dont really use them 
var BOMB = 'bomb';
var FLAG = '⚑';
var BLANK = 'empty ';



// ***The  Board


function buildBoard() {
    var board = [];
    for (var i = 0; i < gLevel.size; i++) {
        board[i] = [];
        for (var j = 0; j < gLevel.size; j++) {
            board[i][j] = BLANK;
        }
    }

    for (var b = 0; b < gLevel.mines; b++) {
        board[getRandomNum()][getRandomNum()] = BOMB;

    }

    console.table(board);


    var secoundBoard = [];
    // var allNegsCount0 = 0;
    for (var i = 0; i < board.length; i++) {
        var row = board[i];
        secoundBoard.push([]);
        for (var j = 0; j < row.length; j++) {
            var negsCount = setMinesNegsCount(board, i, j);
            // allNegsCount0 += negsCount;

            secoundBoard[i][j] = negsCount;
        }
    }

    console.table(secoundBoard);



    for (var k = 0; k < board.length; k++) {
        for (var l = 0; l < board.length; l++) {
            if (board[k][l] !== BOMB) board[k][l] = secoundBoard[k][l];
        }
    }
    console.table(board);
    return board;
}

// the help board :

function helpBoard() {


    var board = [];
    for (var i = 0; i < gLevel.size; i++) {
        board[i] = [];
        for (var j = 0; j < gLevel.size; j++) {
            board[i][j] = "false";
        }
    } console.table(board)
    return board
}



// ***get random num to place the mines

function getRandomNum() {
    var num = Math.floor(Math.random() * (gLevel.size - 1));
    return num;
}



// ***initGame

function initGame() {
    gState.isGameOn = true
    if (gState.isGameOn=true) {
        gBoard = buildBoard();
        gIsHitBoard = helpBoard();
        renderBoard(gBoard, '.gameBoard');
    }
}


// ***renderBoard
var className = 'black';

function renderBoard(board, selector) {
    var strHtml = '';
    for (var i = 0; i < board.length; i++) {
        var row = board[i];
        strHtml += '<tr>';
        for (var j = 0; j < row.length; j++) {
            var cell = row[j];
            className = 'black';
            var tdId = 'cell-' + i + '-' + j;
            strHtml += '<td id="' + tdId + '" onclick="cellClicked(this)" ' +
                'class="    ' + className + '">' + cell + '</td>';
        }
        strHtml += '</tr>';
    }
    var elMat = document.querySelector(selector);
    elMat.innerHTML = strHtml;
}


// ***rightclick ??????

// " onclick="cellClicked(this)"
// '" oncontextmenu="cellMarked(this); return false;"\
// onclick="cellClicked('

// var wtf = event.button;
// console.log(wtf)
// console.log(Event.button)
// button event

// trying to do somthing wierd( and its working !!!)


function renderBoard1(board, selector) {
    var strHtml = '';
    for (var i = 0; i < board.length; i++) {
        var row = board[i];
        strHtml += '<tr>';
        for (var j = 0; j < row.length; j++) {
            var cell = row[j];
            if (gIsHitBoard[i][j] === 'true') {
                className = 'white';
                var tdId = 'cell-' + i + '-' + j;
                strHtml += '<td id="' + tdId + '" onclick="cellClicked(this)"' +
                    'class="    ' + className + '">' + cell + '</td>';
            } else {

                className = 'black';
                var tdId = 'cell-' + i + '-' + j;
                strHtml += '<td id="' + tdId + '" onclick="cellClicked(this)"' +
                    'class="    ' + className + '">' + cell + '</td>';

            }
        }

        strHtml += '</tr>';
    }
    var elMat = document.querySelector(selector);
    elMat.innerHTML = strHtml;
}


function renderBoardEnd(board, selector) {
    var strHtml = '';
    for (var i = 0; i < board.length; i++) {
        var row = board[i];
        strHtml += '<tr>';
        for (var j = 0; j < row.length; j++) {
            var cell = row[j];
            className = 'white';
            var tdId = 'cell-' + i + '-' + j;
            strHtml += '<td id="' + tdId + '" onclick="cellClicked(this)" ' +
                'class="    ' + className + '">' + cell + '</td>';
        }
        strHtml += '</tr>';
    }
    var elMat = document.querySelector(selector);
    elMat.innerHTML = strHtml;
}

// ***counting mines ngs:

function setMinesNegsCount(board, cellI, cellJ) {
    var count = 0;
    for (var i = (cellI - 1); i <= (cellI + 1); i++) {
        if (i < 0 || i >= gLevel.size) continue;
        for (var j = (cellJ - 1); j <= (cellJ + 1); j++) {
            if (j < 0 || j >= gLevel.size) continue;
            if (i === cellI && j === cellJ) continue;
            if (board[i][j] === BOMB) count++;
        }
    }
    return count;
}

// ***cellClicked


function cellClicked(elCell) {
    cleanBoard();
    var pieceCoord = getCellCoord(elCell.id);
    console.log('elCell.id: ', elCell.id);
    var piece = elCell.innerText;
    console.log('pieac: ', pieceCoord);
    // CR: Look like a classic case for loop 
    switch (piece) {
        case BOMB:
            // alert('boom!!! game over !!!');
            gBoard[pieceCoord.i][pieceCoord.j] = '💣';
            alert('boom!!! game over !!!');
            renderBoardEnd(gBoard, '.gameBoard');
            gState.isGameOn=false;
            console.log('game over');
            break;
        case '1':
            // alert('1');
            gBoard[pieceCoord.i][pieceCoord.j] = '1';
            gIsHitBoard[pieceCoord.i][pieceCoord.j] = 'true';
            console.table(gIsHitBoard)
            renderBoard1(gBoard, '.gameBoard');
            break;
        case '2':
            // alert('2');
            gBoard[pieceCoord.i][pieceCoord.j] = '2';
            gIsHitBoard[pieceCoord.i][pieceCoord.j] = 'true';
            renderBoard1(gBoard, '.gameBoard');
            break;
        case '3':
            gBoard[pieceCoord.i][pieceCoord.j] = '3';
            gIsHitBoard[pieceCoord.i][pieceCoord.j] = 'true';
            renderBoard1(gBoard, '.gameBoard');
            break;
        case '4':
            gBoard[pieceCoord.i][pieceCoord.j] = '4';
            gIsHitBoard[pieceCoord.i][pieceCoord.j] = 'true';
            renderBoard1(gBoard, '.gameBoard');
            break;
        case '5':
            gBoard[pieceCoord.i][pieceCoord.j] = '5';
            gIsHitBoard[pieceCoord.i][pieceCoord.j] = 'true';
            renderBoard1(gBoard, '.gameBoard');
            break;
        case '6':
            gBoard[pieceCoord.i][pieceCoord.j] = '6';
            gIsHitBoard[pieceCoord.i][pieceCoord.j] = 'true';
            renderBoard1(gBoard, '.gameBoard');
            break;
        case '7':
            gBoard[pieceCoord.i][pieceCoord.j] = '7';
            gIsHitBoard[pieceCoord.i][pieceCoord.j] = 'true';
            renderBoard1(gBoard, '.gameBoard');
            break;
        case '8':
            gBoard[pieceCoord.i][pieceCoord.j] = '8';
            gIsHitBoard[pieceCoord.i][pieceCoord.j] = 'true';
            renderBoard1(gBoard, '.gameBoard');
            break;
        case '0':
            // alert('0');
            gBoard[pieceCoord.i][pieceCoord.j] = '0';
            gIsHitBoard[pieceCoord.i][pieceCoord.j] = 'true';
            expandShown(gBoard, pieceCoord.i, pieceCoord.j);
            renderBoard1(gBoard, '.gameBoard');
            break;
    }

}

//*** expandShown :

function expandShown(board, cellI, cellJ) {

    for (var i = (cellI - 1); i <= (cellI + 1); i++) {
        if (i < 0 || i >= gLevel.size) continue;
        for (var j = (cellJ - 1); j <= (cellJ + 1); j++) {
            if (j < 0 || j >= gLevel.size) continue;
            if (i === cellI && j === cellJ) continue;
            if (board[i][j] === 0) {
                gIsHitBoard[i][j] = 'true';
                expandShown2(gBoard, i, j);
            }
        }
    }
    console.log(gIsHitBoard);
}

// expandShown 2 dgree

function expandShown2(board, cellI, cellJ) {
    
        for (var i = (cellI - 1); i <= (cellI + 1); i++) {
            if (i < 0 || i >= gLevel.size) continue;
            for (var j = (cellJ - 1); j <= (cellJ + 1); j++) {
                if (j < 0 || j >= gLevel.size) continue;
                if (i === cellI && j === cellJ) continue;
                if (board[i][j] === 0) {
                    gIsHitBoard[i][j] = 'true';
                    
                }
            }
        }
        console.log(gIsHitBoard);
    }


// ***cellMark


function cellMarked(elCell) {
    elCell.innerText = '🏴';
    gState.markedCount++
}

// copy - Gets a string such as:  'cell-2-7' and returns {i:2, j:7}
function getCellCoord(strCellId) {
    var coord = {};
    coord.i = +strCellId.substring(5, strCellId.lastIndexOf('-'));
    coord.j = +strCellId.substring(strCellId.lastIndexOf('-') + 1);
    // console.log('coord', coord);
    return coord;
}
function getSelector(coord) {
    return '#cell-' + coord.i + '-' + coord.j
}

function cleanBoard() {
    var tds = document.querySelectorAll('td.mark');
    for (var i = 0; i < tds.length; i++) {
        tds[i].classList.remove('mark');
    }
}
























// function getAllPossibleCoordsRook(pieceCoord) {
//     var res = [];
//     for (var idx = 0; idx < gBoard.length; idx++) {
//         // Dont mark the clicked cell
//         if (idx !== pieceCoord.j) {
//             //push all cells in the same row  
//             res.push({ i: pieceCoord.i, j: idx });
//         }
//         if (idx !== pieceCoord.i) {
//             //push all cells in the same col  
//             res.push({ i: idx, j: pieceCoord.j });
//         }
//     }
//     return res;
// }


// ***creating helping board :


// function HelpBoard(board) {

//     var secoundBoard = [];
//     // var allNegsCount = 0;
//     for (var i = 0; i < board.length; i++) {
//         var row = board[i];
//         secoundBoard.push([]);
//         for (var j = 0; j < row.length; j++) {
//             var negsCount = setMinesNegsCount(board, i, j);
//             // allNegsCount += negsCount;

//             secoundBoard[i][j] = negsCount;
//         }

//     }
//     // if (allNegsCount === 0) {
//     //     console.log('All Dead');
//     //     clearInterval(gGameInterval);
//     // --use later to stop game

//     return secoundBoard;

// }
//  var negsCount = setMinesNegsCount(gBoard, [0], [0]);
// console.log(negsCount)

// unction cellClicked(elCell) {
//     cleanBoard();
//     var pieceCoord = getCellCoord(elCell.id);

//     console.log('elCell.id: ', elCell.id);
//     var piece = elCell.innerText;

//     var possibleCoords = [];
//     switch (piece) {
//         case '💣':
//             possibleCoords = getAllPossibleCoordsRook(pieceCoord);
//             break;

//     }
//     // markCells(possibleCoords);
// }

// function setActivities() { 
//     document.activities.setAttribute("class", "selectedItem"); 
//     document.activities.setAttribute("className", "selectedItem");
//     return;
//     } 



// ***cheking if to expand opening :

//    function expandShown(board, elCell, i, j){


//    }


// isHitboard - not working
    // var ishitBoard = [];

    // for (var i = 0; i < board.length; i++) {
    //     var row = board[i];
    //     ishitBoard.push([]);
    //     for (var j = 0; j < row.length; j++) {
    //         ishitBoard[i][j] = true



    //     }console.table(ishitdBoard)
    // }

    // cell = document.getElementById("gBoard[pieceCoord.i][pieceCoord.j]");
            // cell.style.display = "none";
            // className = 'black';
            // gBoard[pieceCoord.i][pieceCoord.j] = 44
            // "class = black"
            // console.table(gBoard)
            // document.activities.setAttribute("white", "gBoard[pieceCoord.i][pieceCoord.j]"); 
            // document.activities.setAttribute("black", "gBoard[pieceCoord.i][pieceCoord.j]");

            // function cellMark(elCell) {
//     if (elCell === '💣') elCell.classList.add('mark');

// }