console.log("javascript.js loaded");

var flintstones = ["fred", "wilma", "pebbles", "tiger"];

//use while statement to print out the elements of the array, one on each line

var i = 0;
while (i < flintstones.length) {
    console.log(">>>" + flintstones[i]);
    i += 1; //i = i + 1
}

var i = 0;
while (i<flintstones.length) {
    if ('tiger' != flintstones[i]) {
        console.log(">>> " + flintstones[i]);
    }
    i += 1;
}

var car = {
    'make': 'Honda',
    'drive': '4W',
    'price': 10000,
    validDrivers: [ 'fred', 'wilma' ]
}

console.log("car make = ", car['make']);

var fred = {
    name: 'fred',
    email: 'fred@gmail.com'
}

var wilma = {
    name: 'wilma',
    email: 'wilma@gmail.com'
}

var flintstones = [ fred, wilma ];

for (var i in fred) {
    
}

//Print out the email addresses of the flintstones

//use Javascript to create a deck of cards 

var set = ["2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K", "A"];
var suite = ["diamond", "club", "heart", "spade"];


for (k = 0; k < set.length; k++) {
    for (j = 0; j < suite.length; j++) {
        document.write(">>> " + set[k] + suite[j]);
    };
}


for (i=0; i < set.length; i++) {
    for (j=0; j < suite.length; j++) {
        document.write(set[i] + suite[j] + "<br>")
    }
}
