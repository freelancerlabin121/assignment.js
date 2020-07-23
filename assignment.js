// feetToMile
function feetToMile(feet){

    var mile = feet / 5280;
    return mile
}
 var result = feetToMile(1000);
 console.log(result);


// woodCalculator
function woodCalculator(chair, table, bed){
    var chaircount = chair * 1;
    var tablecount = table * 3;
    var bedcount   =   bed * 5;
    var totalWood = chaircount + tablecount + bedcount ;
    return totalWood;
}
var woodResult = woodCalculator(5, 7, 2);
console.log(woodResult);

// brickCalculator
function brickCalculator(){
    var under10 =ten  * 1000;
    var undere11_20 = 11_20 * 1000;
    var under21_30  = 21_30 * 1000;
    var totalWood = underten + underelavtotwin + undertwentyonetoup ;
    return totalbrick;
}
var woodResult = brickCalculator(5, 7, 2);
console.log(woodResult);

// tinyFriend

function tinyFriend(str) {
    var words = str.split(' ');
    var shortest = words.reduce((shortestWord, currentWord) => {
      return currentWord.length < shortestWord.length ? currentWord : shortestWord;
    }, words[0]);
    return shortest;
  }
  console.log(tinyFriend("kamal jamal korim nishi ononna piu"));


