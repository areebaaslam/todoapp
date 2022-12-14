// 
var list = document.getElementById("list");



function addTodo(){
    var todoItem = document.getElementById("todo-item");
    var li = document.createElement("li");
    var liText = document.createTextNode(todoItem.value);
    li.appendChild(liText);
    
    var delbtn = document.createElement("button");
    var delText = document.createTextNode("delete");
    delbtn.setAttribute("class","button");
    delbtn.setAttribute("onclick","deleteItem(this)");
    delbtn.appendChild(delText);
    li.appendChild(delbtn); 

   var editBtn = document.createElement("button");
   var editText = document.createTextNode("Edit");
   editBtn.setAttribute("class","button");
   editBtn.setAttribute("onclick","editItem(this)");
   editBtn.appendChild(editText);
   li.appendChild(editBtn);



    
    list.appendChild(li);
    todoItem.value = ""; 
    console.log(li);
}
function deleteItem(a){
    a.parentNode.remove()
    
}
function editItem(e){
    
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("enter your value",val)
    e.parentNode.firstChild.nodeValue = editValue;
    
    
}
function delAll(){
    list.innerHTML= "";
}