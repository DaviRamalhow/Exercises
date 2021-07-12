function apertouMouse(){

console.log("Apertou o Mouse!!");

}

function soltouMouse(){



console.log("Soltou o Mouse!!!");


}

function passouMouse(){


console.log("Passou o Mouse!!!");




}


function saiuMouse(){


console.log("Mouse saiu");


}

function botaoDireito(){


console.log("Bot")

return false;

}

function apertouTecla (event){

console.log("Apertou Alguma tecla: " + event.keyCode);

}

function carregou(){

alert("Pagina carregou");


}

function mudouOption(objeto){

console.log("Selecionou: "+objeto.value);



}

function focou(){

console.log("Focou no campo 1");



}

function desfocou(){

console.log("Desfocou do campo 1");


}

function addBola(){
var bola = document.createElement("div");
bola.setAttribute("class","bola");
// <div class="bola"</div> 


var p1 = Math.floor(Math.random() * 500);
var p2 = Math.floor(Math.random() * 400);
bola.setAttribute("style", "left:" +p1+"px;top:"+p2+"px;");
bola.setAttribute("onclick", "estourar(this)");

document.body.appendChild(bola);
}

function estourar(elemento){
document.body.removeChild(elemento);


}
   
function iniciar(){


setInterval(addBola,1000);


}

function validar(){


var valor = document.getElementById("numero").value;

if(valor.lenght > 2){
alert("numero invalido, por favor coloque um numero com dois algarismos!")
retun false;

}else {

return true;

}
 
}