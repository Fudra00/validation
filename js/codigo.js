function register(){
    var nombre=document.getElementById("nombre").value;
    var apellido=document.getElementById("apellido").value;
    var correo=document.getElementById("email").value;
    var edad=document.getElementById("edad").value;
    var genero=document.getElementsByName("genero");
    var pass1=document.getElementById("pass1").value;
    var pass2=document.getElementById("pass2").value;
  

    //caracteres de validacion
    var letras=/^[A-Za-z]+$/;
    var emailValidar=/^[a-zA-Z0-9_\.\-]+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var validadEdad=/^[0-9]+$/;

    //ciclo radio boton

    var sexoSeleccionado=false
    for(var i=0; i<genero.length; i++) {
        if(genero[i].checked) {
          sexoSeleccionado = true;
          break;
        }
        
    }


    if(nombre==""||apellido==""||correo==""||edad==""||pass1==""||pass2==""){
        alert("Ingrese informacion en los campos vacios");
    }
    else if(!letras.test(nombre)||!letras.test(apellido)){
        alert("Nombre es incorrecto, ingrese solo letras");
    }else if(nombre.length<6||nombre.length>15){
        alert("Nombre invalido , minimo 6 caracteres y maximo 15 caracteres")
    }else if(apellido.length<6||apellido.length>15){
        alert("Apellido invalido, minimo 6 caracteres y maximo 15 caracteres ")
    }
    else if(!emailValidar.test(correo)){
        alert("Ingrese el formato de email correcto");
    }else if(!validadEdad.test(edad)){
        alert("Edad incorrecta , ingrese solo numeros")
    }else if(edad<18||edad>50){
        alert("Edad fuera de rango, edad minima 18 y edad maxima 50")
    }else if(!sexoSeleccionado){
        alert("Debes selecionar un sexo")
    }
    else if(pass1!=pass2){
        alert("Las contraseñas no coiciden");
    }
    else if(document.getElementById("pass1").value.length>10){
        alert("Longitud de contraseñas es maximo de 10 caracteres");
    }
    else if(document.getElementById("pass1").value.length<4){
        alert("Longitud de contraseña es minimo de 4 caracteres")
    }else if(document.getElementById("aceptar") .checked  == false) {   
        alert("Debes aceptar los terminos y condiciones.")
    }
    
    else{
        alert("Tu cuenta se creo con exito");
    
    }


    
}