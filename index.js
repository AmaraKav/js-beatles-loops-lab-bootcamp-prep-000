function theBeatlesPlay(musicians, instruments){
  var emptyArr = [];
  for(var i = 0; i < musicians.length; i++){
    var plays = (`${musicians[i]} plays ${instruments[i]}`);
    emptyArr.push(plays);
  }
  return emptyArr;
}

<<<<<<< HEAD
function johnLennonFacts(array){
  var newArr = [];
  var i = 0;
  while(i < array.length){
    newArr.push(`${array[i]}!!!`);
    i++;
  }
  return newArr;
}

function iLoveTheBeatles(n){
  var newArr = [];
  do {
    newArr.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return newArr;
=======
function johnLennonFacts(facts){
  for (var i = 0; i < facts.length; i++){
    facts = `${facts}!!!`;
  }
  return;
>>>>>>> e613dc81d6d7dce9917aaea5c188273d554a61ec
}