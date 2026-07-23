let display=document.getElementById("result");

let expression="";

function append(value){

if(display.innerHTML==="0" && value!=".")
{
expression=value;
}
else{
expression+=value;
}

display.innerHTML=expression;
}

function calculate(){

try{

let answer=eval(expression);

display.innerHTML=answer;

expression=answer.toString();

}
catch{

display.innerHTML="Error";

expression="";

}

}

function clearDisplay(){

expression="";

display.innerHTML="0";

}

function deleteLast(){

expression=expression.slice(0,-1);

if(expression==="")
display.innerHTML="0";
else
display.innerHTML=expression;

}

function toggleSign(){

if(expression==="") return;

if(expression.charAt(0)==="-")
expression=expression.substring(1);

else
expression="-"+expression;

display.innerHTML=expression;

}

document.querySelector(".delete").onclick=deleteLast;

document.addEventListener("keydown",(e)=>{

if((e.key>="0"&&e.key<="9")||"+-*/.%()".includes(e.key))
append(e.key);

if(e.key==="Enter")
calculate();

if(e.key==="Backspace")
deleteLast();

if(e.key==="Escape")
clearDisplay();

});
