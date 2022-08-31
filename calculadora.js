// Adiciona um elemento no campo valor Digitado
var va1 
var va2 
var va3

function clicou(valor){
   var a = document.getElementById('calculadora')
   a.value = valor
   
  if(va1 == null ){
   va1 = valor
  }else{
   va2 = valor
  }
}
function limpar(){
   va1 = null
   va2 = null
   document.getElementById('calculadora').value= null

}
function tipo(valor){
   va3 = valor
}
function igual(){
  if(va3 == '+' ){
    somar(va1,va2)
  }else if(va3 =='*'){
     mult(va1,va2)
  }else if(va3 == '-'){
    sub(va1,va2)
  }else if(va3 == '/'){
     div(va1,va2)
   }else if (va3 == '%'){
      porc(va1,va2)
   }
  }
function somar(n1,n2){
   //alert(n1+n2)
   document.getElementById('calculadora').value = (n1+n2)
   va1 = (n1+n2)
}
function mult(n1,n2){
   //alert(n1+n2)
   document.getElementById('calculadora').value = (n1*n2)
   va1 = (n1*n2)
}
function sub(n1,n2){
   //alert(n1+n2)
   document.getElementById('calculadora').value = (n1-n2)
   va1 = (n1-n2)
}

function div(n1,n2){
   //alert(n1+n2)
   document.getElementById('calculadora').value = (n1/n2)
   va1 = (n1/n2)
}
function porc(n1,n2){
   var v1, v2 = 0
   v1 = n2  * n1/100
   document.getElementById('calculadora').value = v1
   va1 = v1
}



// = recebe
// == igual
// === identico
