
(function(){


var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var name in names) {

  var firstLetter =(names[name].toLowerCase()).charAt(0);

  if ('j'===firstLetter) {
    byeSpeaker.speak(names[name]);
  } else {
    helloSpeaker.speak(names[name]);
  }
}

})();