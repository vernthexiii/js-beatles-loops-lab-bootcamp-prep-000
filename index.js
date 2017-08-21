function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for(var i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(array){
  var newArray = [];
  var condition = array.length > 0;
  while(condition) {
    newArray.push("array[i] + '!!!'");
    array.slice(array.length - 1);
  }
  return newArray;
}
