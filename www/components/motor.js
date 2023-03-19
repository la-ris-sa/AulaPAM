/*function olamundo(){
    var nome
    nome = document.getElementById('nomeusuario').value
    alert ("Olá " +nome)
}*/

function calcular() {
   let valor1 = document.getElementById("valor1").value;
   let valor2 = document.getElementById("valor2").value;
   let valor3 = document.getElementById("valor3").value;
   let resultado = (valor3 * valor2) / valor1;
   document.getElementById("resultado").value = resultado;
}