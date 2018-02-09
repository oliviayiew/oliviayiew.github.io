var mkBottle = function(value) {
    var div = document.createElement('div');
    for (var i = 0; i < value; i++) {
        var img = document.createElement('img');
        img.src = '/images/bottles.png';
        div.appendChild(img);
    }
    return (div);
}

var mkText = function(text) {
    var div = document.createElement('div');
    div.textContent = text;
    div.classList.add('bigger');
    return (div);
}

var song = document.querySelector('#song');

for (var i = 99; i >= 0; i -= 1) {
    var bottles = mkBottle(i);
    song.appendChild(bottles);
    var lyrics;
    if (i > 1) 
        var lyrics = i + 'bottles of beer on the wall,' + i + 'bottles of beer.Take one down and pass it around, ' + (i-1) + 'bottles of beer on the wall.';
    else if (i == 1)
        lyrics = i + 'bottle of beer on the wall, no morebottles of beer.Take one down and pass it around, no more bottles of beer on the wall.'; 
    else
        lyrics = 'No more bottles of beer on the wall, no more bottles of beer.Go to the store and buy some more, 99 bottles of beer on the wall.';
        
    var text = mkText(lyrics);
    song.appendChild(text);
}



var bottles = mkBottle(99);
song.appendChild(bottles);

var text = mkText('99 bottles of beer on the wall, 99 bottles of beer.Take one down and pass it around, 98 bottles of beer on the wall.');
//song.appendChild(bottles);