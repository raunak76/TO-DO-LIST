const inputbox =document.getElementById("input-box");
const LISTCONTANER=document.getElementById("LIST-CONTANER");
function addtask(){
    if(inputbox.value==''){
        alert("YOU MUST WRITE SOMETHING TO CONTINUE")
    }
else{
    let li=document.createElement("li");
    li.innerHTML=inputbox.value;
    LISTCONTANER.appendChild(li);
    let span =document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
}
inputbox.value='';
}
LISTCONTANER.addEventListener("click", function(e){
if(e.target.tagName=== "LI") {
    e.target.classList.toggle("checked");

}
else if(e.target.tagName=== "SPAN") {
    e.target.parentElement.remove();
}

}, false);