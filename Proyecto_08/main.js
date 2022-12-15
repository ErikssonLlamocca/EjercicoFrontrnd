
function validarContraseña(contra="",contra2=""){
    let mensaje="";
    if(contra!=contra2){
        mensaje = "Ambas contraseñas deben ser iguales";
    }
    return mensaje;
}

function validarUsuario(usuario){
    const regexp = /^[a-z0-9_-]{4,16}$/;
    let mensaje="";
    if(regexp.test(usuario) ){
       mensaje="";
    }
    else{
        mensaje= "El usuario tiene que ser de 4 a 16 digitos y solo puede contener numeros,letras y guion bajo";
    }
    return mensaje;
   
}
        $("#btnenviar").click(function () {
          $("#mensajecontraseña").text(validarContraseña($("#contraseña1").val(),$("#contraseña2").val()));
          $("#mensajecontraseña").addClass(["mensajecontra","text-danger"]);
          $("#mensajeusuario").text(validarUsuario(txtusuario.value));
          $("#mensajeusuario").addClass(["mensajeuser","text-danger"]);
  
          if(($("#mensajecontraseña")=="Ambas contraseñas deben ser iguales") ||(($("#contraseña1").val()=="") ||($("#contraseña2").val()=="")  )){
            $("#contraseña1").addClass(["contra1","inputtext error border border-2 border-danger"]);
            $("#contraseña2").addClass(["contra2","inputtext error border border-2 border-danger"]);   
          }
          else{
            $("#contraseña1").removeClass(["contra1","error border border-2 border-danger"]);
            $("#contraseña2").removeClass(["contra2","error border border-2 border-danger"]);
          }
          if(($("#txtusuario").val()=="")){
            $("#txtusuario").addClass(["usuario","inputtext usuario error border border-2 border-danger"]);
          }
          else{
            $("#txtusuario").removeClass(["usuario","error border border-2 border-danger"]);
          }

          if($("#txtnombre").val()=="")
          {
          $("#txtnombre").addClass(["nombre","inputtext error border border-2 border-danger"]);}
          else{
            $("#txtnombre").removeClass(["nombre","error border border-2 border-danger"]);
          }
          if($("#txtcorreo").val()==""){
            $("#txtcorreo").addClass(["correo","inputtext error border border-2 border-danger"]);
          }
          else{
            $("#txtcorreo").removeClass(["correo","error border border-2 border-danger"]);
          }
          if($("#txtcelular").val()==""){
            $("#txtcelular").addClass(["celular","inputtext error border border-2 border-danger"]);
          }
          else{
            $("#txtcelular").removeClass(["celular","error border border-2 border-danger"]);
          }
        })
       
    
