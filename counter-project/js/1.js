let saveEl=document.getElementById('save-el')
let count=0 

function counter()
{
    count= count+1
 document.getElementById('btn').innerHTML=count
}
function save(){
    let countStr= count + " - "
    // saveEl.innerText+= countStr
    saveEl.textContent+=countStr    //the textcontent consider the spaces with concate
    btn.textContent=0
    count=0
}
let fname = "umer "
let lname= "naaz"
let join=fname+lname
console.log(join)