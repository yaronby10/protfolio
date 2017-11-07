'use strict'
console.log('in picture')




var gQuests = createQuests()
var gCurrQuestIdx = 0;


function createQuests()  {
    var quests = [];
    var quest1 = {id: 1, opts:['boring place', 'beutiful place'], correctOptIndex:1 };
    var quest2= {id: 2, opts:['where is my mom ?', 'i want to make world peace'], correctOptIndex:1 };
    var quest3 = {id: 3, opts:['they gonna eat me!!!', 'where is my mom ?'], correctOptIndex:1 };
    quests.push(quest1);
    quests.push(quest2);
    quests.push(quest3);
   
    return quests;
}



renderQuest()

function renderQuest() {
    var gameErea = document.querySelector('.gameErea');
    if (gCurrQuestIdx === 3) {
        gameErea.innerHTML = 'yes'
    } else {
        var img = '<img src="pic/' + gQuests[gCurrQuestIdx].id + '.jpg" />'
        var op1 = '<button onclick="checkAnswer(0)">' + gQuests[gCurrQuestIdx].opts[0] + '</button>'
        var op2 = '<button onclick="checkAnswer(1)">' + gQuests[gCurrQuestIdx].opts[1] + '</button>'
        gameErea.innerHTML = img + '<br><br><br>' + op1 + op2
        console.log(op1);
    }
}

function checkAnswer(optIdx) {
    var gameErea = document.querySelector('.gameErea');    
    if (optIdx !== gQuests[gCurrQuestIdx].correctOptIndex) {
        gCurrQuestIdx++
        renderQuest();
    } else {
        gameErea.innerHTML = 'not good'
    }
}

function initGame() {
    gCurrQuestIdx = 0;
    renderQuest()
}



