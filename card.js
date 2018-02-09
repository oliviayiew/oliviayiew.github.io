console.log("JS loaded");

var suit = ["Diamond", "Club", "Heart", "Spade"];
var value = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

for (i=0; i < suit.length; i++) {
    for (j=0; j < value.length; j++) {
        document.write(suit[i] + value[j] + "<br>")
    }
}

var suitIndex = 0;
var valueIndex = 0;

//Hold our cards
var deck = [];

var mkCard = function(s,v) {
    return ({
        suit: s,
        value: v
    });
}

for (var i in suits) {
    for (var j in value) {
        deck.push(mkCard(suit[i], value[j]));
        }
    }


for (var suitIndex = 0; suitIndex < suits.length; suitIndex += 1) {
    for (var valueIndex = 0; valueIndex < value.length; valueIndex += 1){
        deck.push({
            suits: suits[suitIndex],
            value: value[valueIndex]
        });
    }
}

for(var suitIndex in suits) {
    console.log(">>> ", [suitIndex]);
}

/*
while (suiteIndex < suite.length) {
        setIndex = 0;
    while (setIndex < set.length) {
        //console.log("suiteIndex = " + suiteIndex = ", setIndex = " + setIndex = "")
        //console.log("suiteIndex = %d, setIndex = %d", suiteIndex, setIndex)
        deck.push({
            suite: suite[suiteIndex], 
            set: set[setIndex]
        });
        setIndex += 1;
    }
    suiteIndex += 1;
}

console.log(deck);
*/