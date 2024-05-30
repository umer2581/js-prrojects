let myLeads=[]
let oldLeads=[]

const inputEl=document.getElementById('input-el')

const inputBtn=document.getElementById('input-btn')
const ulEl=document.getElementById('ul-el')
const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))
const deletebtn=document.getElementById('delete-btn')
deletebtn.addEventListener('dblclick',function()
{
  // console.log("Double Clicked")
  localStorage.clear()
  myLeads=[]
  render()

}
)
// console.log(leadsFromLocalStorage)
// localStorage.setItem("naaz","www.example.com")
// console.log(localStorage.getItem("naaz"))
if(leadsFromLocalStorage){
  myLeads=leadsFromLocalStorage
  render()
}




inputBtn.addEventListener("click",function(){
    // console.log("hello")
    myLeads.push(inputEl.value)
    inputEl.value=""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    renderItems()
    // console.log(localStorage.getItem("myLeads"))
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