//general variables 
var clubDescriptions = {
    "Acappella Club": "insert description here",

}
var topThreeClubs;

var artClubs = ["Acappella Club", "Former Films Creator Club", "Crafts 4 Charity", "Breakdancing", "Zine Club"];

var artClubsCount = [0, 0, 0, 0, 0];

var recClubs = ["Chess Club", "University of Waterloo Raising the Roof Club", "Improv Club", "Intramural Sports", "Cooking Club"];
var recClubsCount = [0, 0, 0, 0, 0];

var acadClubs = ["Debate Society", "Tech+ UW", "Moot Court", "Ace Chapter", "UW Canadian Association for Global Health"];
var acadClubsCount = [0, 0, 0, 0, 0];

var numQsAnswered = 0;

var radioButtons = document.getElementsByName('q1Options');
let selectedOption = '';

const disagreeValues = {
            //art, rec, acad
    "Q1" : [[-1, 1, 1, 1,-1],[-1, -1, 1, 1, -1],[-1,1,-1,-1,-1]], //I'm looking to join a high-commitment club
    "Q2" : [[-1,-1,1,-1,1], [1,-1,-1,-1,1], [-1,1,-1,-1,1]], //I like competitive environments
    "Q3" : [[-1,-1,1,-1,1], [1,-1,-1,-1,1],[-1,1,-1,-1,1]], //I like working w/others
    "Q4" : [[-1,-1,-1,1,-1], [1,-1,1,-1,1], [-1,1,-1,-1,1]],// I'm working towards a goal 
    "Q5" : [[-1,-1,-1,1,-1], [1,-1,1,-1,1], [-1,1,-1,-1,1]], //I enjoy taking risks
    "Q6" : [[1, -1, -1, -1, -1], [-1, -1, -1, -1, -1], [-1, 1,-1,-1,1]], //I like hands-on activities
    "Q7" : [[-1,1,1,-1,1], [-1, -1,1,1,1], [-1,-1,-1,-1, 1]], //I enjoy problem-solving
    "Q8" : [[-1,1,-1,-1,-1], [-1,-1,-1,-1,-1], [-1,-1,1,1,1]], //I'm looking for something beginner friendly
    "Q9" : [[-1,-1,1,-1,1],[1,-1,-1,1,-1],], //I prefer small communities over large ones
    "Q10" : [[1,1,1,1,1],[-1,0,1,0,1],[-1,-1,-1,-1,-1]], //I think I'm more left-brained than right-brained
    "Q11" : [[1,1,1,1,1],[1,-1,1,1,1],[1,1,1,1,1]], //I want to learn a new skill;
    "Q12" : [[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1]], //I want to meet like-minded individuals
    "Q13" : [[-1,1,1,-1,1],[1,1,-1,-1,-1],[-1,1,1,-1,1]], //I like busy environments
    "Q14" : [[1,-1,-1,1,-1],[1,-1,1,1,1],[1,1,1,1,1]], //I want to join a club that creates social change inside my community
    "Q15" : [[-1,-1,-1,-1,-1], [1,1,-1,1,-1], [-1,1,1,1,1]] //I want to join a club where I can be creative
}

var Questions = {
    "Q1" : 0,
    "Q2" : 0,
    "Q3" : 0,
    "Q4" : 0,
    "Q5" : 0,
    "Q6" : 0,
    "Q7" : 0,
    "Q8" : 0,
    "Q9" : 0,
    "Q10" : 0,
    "Q11" : 0,
    "Q12" : 0,
    "Q13" : 0,
    "Q14" : 0,
    "Q15" : 0
}

try {
    window.onload = () => document.getElementById("submit").addEventListener("click", actionQuiz);}

catch {
    console.log('no')
}

function actionQuiz(Event){
    Event.preventDefault();
    var arts = document.getElementById("arts");
    var rec = document.getElementById("rec");
    var acad = document.getElementById("acad");
    
    if(arts.checked==true){
        for(let i = 0; i < 5; i++){
            artClubsCount[i] += 100;
        }
    }

    if(rec.checked==true){
        for(let i = 0; i < 5; i++){
            recClubsCount[i] += 100;
        }
    }

    if(acad.checked==true){
        for(let i = 0; i < 5; i++){
            acadClubsCount[i] += 100;
        }
    }

    for(let i = 49; i < 64; i++){
    
        var num = String.fromCharCode(i);

        console.log(num)
        if(document.getElementById('q'+num+'_1').checked) {   
            Questions["Q"+num] = 1;
        }
        else if(document.getElementById('q'+num+'_2').checked) {   
            Questions["Q"+num] = 2;
        }
        else if(document.getElementById('q'+num+'_3').checked) {   
            Questions["Q"+num] = 3;
        }
        else{
            console.log("nothing selected")
        }
        console.log(Questions)
    }

    for (const key in Questions) {

        if (Object.hasOwnProperty.call(Questions, key)) {
          const value = Questions[key];
                for(let i = 0; i < 5; i++){
                    if(value == 1){
                        artClubsCount[i]+=disagreeValues[key][0][i];
                    }
                    else if(value == 3){
                        artClubsCount[i]+=disagreeValues[key][0][i]*-1;
                    }
                }
                for(let i = 0; i < 5; i++){
                    console.log(key, value)
                    if(value == 1){
                        recClubsCount[i]+=disagreeValues[key][1][i];
                    }
                    else if(value == 3){
                        recClubsCount[i]+=disagreeValues[key][1][i]*-1;
                    }
                }
                for(let i = 0; i < 5; i++){
                    console.log(key, value)
                    if(value == 1){
                        acadClubsCount[i]+=disagreeValues[key][2][i];
                    }
                    else if(value == 3){
                        acadClubsCount[i]+=disagreeValues[key][2][i]*-1;
                    }
                }
                console.log(acadClubsCount)
            }
        }
    console.log("hi");
    var allNum = [...artClubsCount, ...recClubsCount, ...acadClubsCount];
    var allClubs = [...artClubs, ...recClubs, ...acadClubs];
    var indexedNumbers = allNum.map((value, index) => ({ value, index }));
    indexedNumbers.sort((a, b) => b.value - a.value);
    var topThreeIndices = indexedNumbers.slice(0, 3).map(obj => obj.index);
    console.log(topThreeIndices);

    topThreeClubs = [allClubs[topThreeIndices[0]],allClubs[topThreeIndices[1]],allClubs[topThreeIndices[2]]];
    //combine the three things!
}

console.log(topThreeClubs)
localStorage.setItem('result', topThreeClubs);
window.location.href = "results.html";
    




