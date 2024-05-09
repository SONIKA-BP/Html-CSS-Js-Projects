const countLabel=document.getElementById("countLabel");
const decrementBtn=document.getElementById("decrementBtn");
const resettBtn=document.getElementById("resettBtn");
const incrementBtn=document.getElementById("incrementBtn");
let count=0;
incrementBtn.onclick=function(){
    count++;
    countLabel.textContent=count;
}
decrementBtn.onclick=function(){
    count--;
    countLabel.textContent=count;
}
resettBtn.onclick=function()
{
    count=0;
    countLabel.textContent=count;
}