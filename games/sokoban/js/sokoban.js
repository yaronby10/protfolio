'use strict'
console.log('sokoban!!!')

// ***suggested functions :

// initGame() // This is called when page loads 
// buildBoard() // Returns the board
//  renderBoard(board) // Print the board as a table
// cellClicked(i, j) // Called when a cell (td) is clicked 
// checkGameOver() // Game is over when all boxes are on targets 

// ***suggested globals :

// gBoard The model 
// var gGamerPos;  i and j for the gamer 

// type: FLOOR, WALL or TARGET. 
// put numbers first :


var FLOOR = '⛶';
var WALL = '⛔';
var BOX = '☐';
var TARGET = '★';
var PLAYER = '☺';


var gGamerPos = { i :3 , j:2 }

var gBoard;

function initGame() {
    gBoard = buildBoard();
    renderBoard(gBoard, '.gameBoard');
}

function buildBoard() {
    var board = [];
    for (var i = 0; i < 11; i++) {
        board[i] = [];
        for (var j = 0; j < 10; j++) {
            board[i][j] = '';
        }
    }
    board[3][2] = PLAYER;

    board[2][7] = TARGET;
    board[6][4] = TARGET;
    board[8][7] = TARGET;
   
    board[5][5] = BOX;
    board[7][3] = BOX;
    board[8][6] = BOX;
    board[3][4] = BOX;

    // console.table(board);
    return board;

}

function renderBoard(board, selector) {
    var strHtml = '';
    for (var i = 0; i < board.length; i++) {
        var row = board[i];
        strHtml += '<tr>';
        for (var j = 0; j < row.length; j++) {
            var cell = row[j];
            var className =  'floor';
            if(i===9 || i===1 || j===1 || j===8) className= 'wall';
            if(i===1 && j===0 ) className= 'floor';
            if(i===0 && j===1 ) className= 'floor';
            if(i===0 && j===8 ) className= 'floor';
            if(i===1 && j===9 ) className= 'floor';
            if(i===9 && j===0 ) className= 'floor';
            if(i===10 && j===1 ) className= 'floor';
            if(i===9 && j===9 ) className= 'floor';
            if(i===10 && j===8 ) className= 'floor';
            if(i===1 && j===2 ) className= 'floor';
            if(i===1 && j===1 ) className= 'floor';
            if(i===2 && j===3 ) className= 'wall';
            if(i===2 && j===2 ) className= 'wall';
            if(i===6 && j===6 ) className= 'wall';
            if(i===6 && j===7 ) className= 'wall';
            if(i===6 && j===5 ) className= 'wall';
            if(i===7 && j===5 ) className= 'wall';
            var tdId = 'cell-' + i + '-' + j;
            strHtml += '<td id="' + tdId + '" onclick="cellClicked(this)" ' +
                'class="    ' + className + '">' + cell + '</td>';
        }
        strHtml += '</tr>';
    }
    var elMat = document.querySelector(selector);
    elMat.innerHTML = strHtml;
}


function cellClicked(elCell) {
    cleanBoard();
    var pieceCoord = getCellCoord(elCell.id);

    console.log('elCell.id: ', elCell.id);
    var piece = elCell.innerText;
    
    
}

function markCells(coords) {
    for (var i = 0; i < coords.length; i++) {
        var coord = coords[i];
        var selector = getSelector(coord);
        var elCell = document.querySelector(selector);
        elCell.classList.add('mark');
    }

}
// Gets a string such as:  'cell-2-7' and returns {i:2, j:7}
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










// function getAllPossibleCoordsKing(pieceCoord) {
//     console.log('pieceCoord', pieceCoord);
//     var res = [];
//     for (var i = 0; i < gBoard.length; i++) {
//         var row = gBoard[i];
//         for (var j = 0; j < row.length; j++) {
//             var cell = row[j];

//             if (i === pieceCoord.i && j === pieceCoord.j) continue;

//             if ((pieceCoord.i + 1) >= i &&
//                 (pieceCoord.j - 1) <= j &&
//                 (pieceCoord.j + 1) >= j &&
//                 (pieceCoord.i - 1) <= i
//                 // for (var index = pieceCoord.i - 1; index <= pieceCoord.i + 1; index++) {
//                 //     console.log('index', index);

//                 //     for (var jndex = pieceCoord.j - 1; jndex <= pieceCoord.j + 1; jndex++) {
//                 //         if (index === pieceCoord.i && jndex === pieceCoord.j) continue;  
//                 //         res.push({ i: index, j: jndex });

//                 //     }

//                 // }
//             ) {
//                 res.push({ i: i, j: j });
//             }
//         }
//     }
//     return res;
// }


// function cellClicked(elCell) {
//     cleanBoard();
//     var pieceCoord = getCellCoord(elCell.id);

//     // console.log('elCell.id: ', elCell.id);
//     var piece = elCell.innerText;

//     var possibleCoords = [];
//     switch (piece) {
//         case '♖':
//             possibleCoords = getAllPossibleCoordsRook(pieceCoord);
//             break;
//         case '♗':
//             possibleCoords = getAllPossibleCoordsBishop(pieceCoord);
//             break;
//         case '♟':
//             possibleCoords = getAllPossibleCoordsPawn(pieceCoord, false);
//             break;
//         case '♙':
//             possibleCoords = getAllPossibleCoordsPawn(pieceCoord, true);
//             break;
//         case '☐':
//             possibleCoords = getAllPossibleCoordsKing(pieceCoord);
//             break;
//         case '♘':
//             possibleCoords = getAllPossibleCoordsKnight(pieceCoord);
//             break
//     }
//     markCells(possibleCoords);
// }