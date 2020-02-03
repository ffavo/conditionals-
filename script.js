var wrapperEle = document.body.querySelector(".wrapper");
var firstEle = document.body.querySelector(".first");
var secondEle = document.body.querySelector(".second");
var answerEle = document.body.querySelector(".answer");

 var firstNumber = Number(prompt("input ur first number?"));
 var operator = prompt("input an operator");
 var secondNumber = Number(prompt("input a second number?"));


//These are the conditional statements used to check the peompts values 



if(!isNaN(secondNumber)){
  secondEle.innerHTML = `${secondNumber} is a number`
}else{
  secondEle.innerHTML = "not a number please enter a number"
}
if(!isNaN(firstNumber)){
  firstEle.innerHTML=`${firstNumber} is a number`
}else{
  firstEle.innerHTML="is not a number please enter a number"
}
if(operator=="+"){
  var answer=firstNumber+secondNumber
}
if(operator=="-"){
  var answer=firstNumber-secondNumber 
}
if(operator=="/"){
  var answer=firstNumber/secondNumber
}
if(operator=="*"){
  var answer=firstNumber*secondNumber
}
if(operator=="**"){
  var answer=firstNumber**secondNumber
}
if(operator=="%"){
  var answer=firstNumber%secondNumber
}
answerEle.innerHTML = answer