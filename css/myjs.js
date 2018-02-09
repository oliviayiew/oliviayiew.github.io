
//declare a variable

var name;
var age;
var hungry;

name = "olivia"; //string, 
age = 25; //numerical
hungry = true; //boolean - not, and, or
tired = false; //boolean - not, and, or

var timeToLeave = hungry || tired;

if (timeToLeave == true) 
    {console.log(">>>> yes");} 
    else 
    {console.log(">>>>no");}


console.log('hungry and tired: '+ (hungry && tired));
console.log('hungry || tired: ' + (hungry || tired));

console.log()

//console.log('name = ' + name); //string variable + string variable --> this is a concatenation 

alert('hello' + name)