

var cuentas =[
  {nombre: "Mali",saldo: 200,password: 'luna'},
  {nombre: "Gera",saldo: 290,password: 'sol28'},
  {nombre: "Maui",saldo: 67,password: 'perrito1'}
];

//funcion para validar datos e ingresar a la pagina de inicio
function login() {
nombre = document.getElementById("nombre").value;
password = document.getElementById("password").value;

  if (nombre == "Mali" && password == 'luna') {      
      window.location.replace("Cajero_Mali.html"); 
      
} else if (nombre == "Gera" && password == 'sol28') {
  window.location.replace("Cajero_Gera.html"); 

} else if (nombre == "Maui" && password == 'perrito1') {
  window.location.replace("Cajero_Maui.html");
}else {
   alert("Usuario o contraseña incorrectos, favor de Verificar");
}
}

//Funciones para retirar y depositar cantidades con la condicion de que el saldo actual desbe ser mayor a 10 y menor a 990

function Retirar() {
  var CantidadT=parseInt(document.getElementById('Cant').value);
  var Cantidad1=parseInt(document.getElementById('C1').value);
  
  if (Cantidad1-CantidadT >= 10){
  document.getElementById('C1').value=(Cantidad1-CantidadT);
  }else{
      alert("Saldo invalido, favor de ingresar otra cantidad")
  }

  
}
function Depositar() {
  var CantidadT=parseInt(document.getElementById('Cant').value);
  var Cantidad1=parseInt(document.getElementById('C1').value);
  
  if (Cantidad1+CantidadT <= 990) {
      document.getElementById('C1').value=(Cantidad1+CantidadT);
  }else{ 
       alert("Saldo invalido, favor de ingresar otra cantidad");

      }  


}


