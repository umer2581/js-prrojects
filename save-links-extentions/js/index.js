let myLeads=[]

const inputEl=document.getElementById('input-el')

const inputBtn=document.getElementById('input-btn')
const ulEl=document.getElementById('ul-el')


inputBtn.addEventListener("click",function(){
    // console.log("hello")
    myLeads.push(inputEl.value)
    inputEl.value=""
    renderItems()
    // console.log(myLeads)
})
function renderItems(){
let listItems=" "
for(let i=0;i<myLeads.length;i++){
    // ulEl.textContent+=myLeads[i] + " "
    // console.log(myLeads[i])
    // ulEl.innerHTML="<li>"+ myLeads[i]+ "</li>"
    // const li=document.createElement("li")
    // li.textContent=myLeads[i]
    // ulEl.append(li)
    // listItems+="<li><a href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
    listItems+=`
    <li><a target='_blank' href=' ${myLeads[i]}'> ${myLeads[i]}
      </a></li>
      `

    // console.log(listItems)

}
ulEl.innerHTML=listItems
}