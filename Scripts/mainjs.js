
function tarjeta() {
    new Card({
        form: document.querySelector('form'),
        container: '.card-wrapper'
    });
}



function validarCampoVacio(campo){

    var valido = true;
  
    document.getElementsByName("continuar").disable;
    if(campo.value == ""){
        campo.style.borderBottom ="3px solid red";     
        valido = false;

        
    }else
        {
        campo.style.borderBottom = "3px solid limegreen";

    }
    return valido
}

function habilitarBoton(){
    nombre = document.getElementsByName("name")[0].value;
    numero = document.getElementsByName("number")[0].value;
    expiracion = document.getElementsByName("expiry")[0].value;
    cvc = document.getElementsByName("cvc")[0].value;
    monto = document.getElementsByName("monto")[0].value;

    if ((nombre != "") && (numero != "") && (expiracion != "") && (cvc != "") && (monto != "")){
        document.getElementById('continuar').disabled=false;
        document.getElementById('continuar').style.background = "#4CAF50";
    }
    else{
        document.getElementById('continuar').disabled=true;
        document.getElementById('continuar').style.background = "#c92028";

    }
}

function habilitarCrearBoton(){
    nombre = document.getElementsByName("name")[0].value;
    numero = document.getElementsByName("number")[0].value;
    expiracion = document.getElementsByName("expiry")[0].value;
    cvc = document.getElementsByName("cvc")[0].value;

    if ((nombre != "") && (numero != "") && (expiracion != "") && (cvc != "")){
        document.getElementById('continuar').disabled=false;
        document.getElementById('continuar').style.background = "#4CAF50";
    }
    else{
        document.getElementById('continuar').disabled=true;
        document.getElementById('continuar').style.background = "#c92028";

    }
}

function validar(evento){
    key = evento.keyCode || evento.which;
      teclado = String.fromCharCode(key).toLocaleLowerCase();
      letras = "abcdefghijklmnñopqrstuvwxyz";
      especiales = "37-38-46";

      teclado_especial = false;
      for (var i in especiales) {
          if (key == especiales[i]) {
              teclado_especial = true; break;
          }
      }
      if (letras.indexOf(teclado) == -1 && !teclado_especial) {
          return false; 
      }
}

function validarMonto(event){
    var keynum = window.event ? window.event.keyCode : e.which;
        if ((keynum == 96) || (keynum == 105))
        return true;
         
        return /\d/.test(String.fromCharCode(keynum));
        
}

function validarFecha(input){
    f = new Date();
    var valido;
    
    var fecha = input.value;
    var mes;
    var ano;
    mes = fecha.substr(0,2);
    ano = fecha.substr(5,4);
    lmes = fecha.substr(1,1);


    if((lmes >= 1 && mes >= 13) || ano < f.getFullYear() || mes < f.getMonth()){
        alert("Fecha invalida");
        document.getElementById('continuar').disabled=true;
        document.getElementsByName("expiry")[0].style.borderBottom ="3px solid red";
        input.value = input.defaultValue;
        valido = false;
    }else{
        document.getElementsByName("expiry")[0].style.borderBottom ="3px solid green"
        valido = true;
    }

    return valido;
}

function desc(boton){
    document.getElementById('continuar').disabled=true;
}


function change(){
    
  document.getElementById("eliminar").style.display= "block";
  document.getElementById("eliminar").style.border = "4px solid white";
  document.getElementById("eliminar").style.borderRadius = "50%";
  document.getElementById("eliminar").style.width = "100px";
  document.getElementById("eliminar").style.height = "100px";
  document.getElementById("eliminar").style.margin = "auto";
  document.getElementById("eliminar").style.transition = "2s";
  document.getElementById("div1").style.display= "none";  
  document.getElementById("div2").style.display= "none";  


}

function defaultbtn(){

    document.getElementById("eliminar").style.display= "none";
    document.getElementById("eliminar").style.border = "none";
    document.getElementById("eliminar").style.borderRadius = "none";
    document.getElementById("eliminar").style.width = "auto";
    document.getElementById("eliminar").style.height = "auto";
    document.getElementById("eliminar").style.margin = "none";
    document.getElementById("eliminar").style.transition = "none";
    document.getElementById("div1").style.display= "block";  
    document.getElementById("div2").style.display= "block";    
  
  }


