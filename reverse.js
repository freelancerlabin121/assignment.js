function reverseString(str){
    var reverse = "";
    for(var i = 0; i < str.length; i++){  
        var char = str[i];
        reverse = char + reverse;
       }
       return reverse;
    }
var statement = "Hello Alien vhai brother ";
var forAlien = reverseString(statement);
console.log(forAlien);
var foodvlog = reverseString("amr khida lagche");
console.log(foodvlog);