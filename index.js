function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for(var i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(array){
  var newArray = [];
  while(array.length > 0) {
    newArray.push("array[i] + '!!!'");
    array.slice(array.length - 1);
  }
  return newArray;
}