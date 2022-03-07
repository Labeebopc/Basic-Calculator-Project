function btnClick(val){
    document.getElementById('screen').value+=val
}
function btnClear(){
document.getElementById('screen').value=""
}
function btnEqual(){
   var text=document.getElementById('screen').value
   var result=eval(text)
  
   document.getElementById('screen').value=result
}