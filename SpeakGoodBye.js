(function(){
  var SpeakGoodBye= "Good Bye";
  var sayBye = function(name){
    console.log(SpeakGoodBye + " "+ name);
  }
  this.sayBye=sayBye;
})();
