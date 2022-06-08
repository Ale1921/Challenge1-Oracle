var textoEntrada = document.getElementById("entradaTexto"); 
var textoSalida = document.getElementById("salidaTexto"); 

btnCopiar.hidden= true; 
salidaTexto.hidden= true; 

function codificar(cadena){ 
    return cadena
    .replace(/e/ig,"enter")
    .replace(/i/ig,"imes")
    .replace(/a/ig,"ai")
    .replace(/o/ig,"ober")
    .replace(/u/ig,"ufat");
}
function decodificar (rev){ 
    return rev
    .replace(/enter/ig,"e")
    .replace(/imes/ig,"i")
    .replace(/ai/ig,"a")
    .replace(/ober/ig,"o")
    .replace(/ufat/ig,"u");
}
function encriptar(){
    var texto = textoEntrada.value;
    var transformarTexto = texto.toLowerCase();
    var normalizar = transformarTexto.normalize("NFKD");
    document.querySelector(".muñeco").style.display = "none";
    document.querySelector(".sin-mensaje").style.display = "none";
    document.querySelector(".mensaje-texto-vacio").style.display = "none";
    btnCopiar.hidden= false;
    salidaTexto.hidden= false;

    textoSalida.textContent = codificar(normalizar);
}
function desencriptar(){
    var texto = textoEntrada.value;
    var transformarTexto = texto.toLowerCase();
    var normalizar = transformarTexto.normalize("NFKD");
    textoSalida.textContent = decodificar(normalizar);
    document.querySelector(".muñeco").style.display = "none";
    document.querySelector(".sin-mensaje").style.display = "none";
    document.querySelector(".mensaje-texto-vacio").style.display = "none";
    btnCopiar.hidden= false;
    salidaTexto.hidden= false;
}

function copiar(){
    textoSalida.select();
    textoSalida.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(textoSalida.value);
    alert("El texto fue copiado al portapapeles");
}
