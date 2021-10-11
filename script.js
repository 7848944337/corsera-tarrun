(function(){
  var names=["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for(let i = 0; i<names.length;i++){
  var firstLetter= names[i].charAt(0).toLowerCase(); 
if(firstLetter === 'j'){
    sayBye(names[i]);
  }
  else{
    sayHello(names[i]);
  }
}
})();
  
