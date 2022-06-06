var form=document.getElementById("form");
form.addEventListener("submit",storedata)
var box=[]
function storedata()
{
    event.preventDefault()
  var obj={
  Name:form.name.value,
  Email:form.email.value,
  Address:form.address.value,
  Amount:form.amount.value,
}
box.push(obj);
localStorage.setItem("user",JSON.stringify(box))

}