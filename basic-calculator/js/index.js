let num1=2
let num2=8
document.getElementById("num1-el").textContent=num1
document.getElementById("num2-el").textContent=num1
let sum1=document.getElementById("result")

function add(){
    let result=num1+num2
    sum1.textContent="Result : " + result
    
}
function sub(){
    let result=num1-num2
    sum1.textContent="Result : " + result
    
}
function mul(){
    let result=num1*num2
    sum1.textContent="Result : " + result
    
}
function division(){
    let result=num1/num2
    sum1.textContent="Result : " + result
    
}
