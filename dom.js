
//Search it by using querySelector = #title, h1
var title = document.querySelector('#title');

title['innerText'] = 'The current time is' + new Date()
// alternative is title.innerText

var text = ["One", "Two", "Three"];


for (var i=0; i < text.length; i+= 1) {

    var li = document.querySelector('#item' + i);
    li['innerText'] = text[i];

    }

for (var i = 0; i < text.length; i ++) {
    var li = document.createElement('li');
    li.innerText = text[i];
    document.querySelector('#mylist').appendChild(li);
}


console.log("title = ", title); 