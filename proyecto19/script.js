//VALIDACION DE FORMULARIO REGISTRO
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
        //alerta de registro exitoso
        alertRegistroExitoso()
        //redireccion a la pagina de incio
        window.location.href = "inicio.html";
      }, false)
    })
})()

// alerta de registro exitoso
function alertRegistroExitoso() {
  // Crea un elemento div
  var alertBox = document.createElement("div");

  // Agrega un estilo personalizado al elemento
  alertBox.setAttribute("style", "position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: #ede264; color: black; padding: 30px;");

  // Crea el elemento img para la imagen de Pikachu
  var pikachuImg = document.createElement("img");
  pikachuImg.setAttribute("src", "https://media.tenor.com/74l5y1hUdtwAAAAj/pokemon.gif");
  pikachuImg.setAttribute("style", "height: 70px;");

  // Agrega el elemento img al elemento div del alert
  alertBox.appendChild(pikachuImg);

  // Agrega el contenido del alert
  alertBox.innerHTML += "Felicidades!Fuiste registrado exitosamente";

  // Crea el botón de aceptar
  var acceptButton = document.createElement("button");
  acceptButton.innerHTML = "Aceptar";
  acceptButton.classList.add("btn", "btn-light")
  acceptButton.setAttribute("style", "margin-left: 10px;");

  // Agrega un evento click al botón
  acceptButton.addEventListener("click", function() {
    // Elimina el elemento del documento
    document.body.removeChild(alertBox);
  });

  // Agrega el botón al elemento div del alert
  alertBox.appendChild(acceptButton);

  // Agrega el elemento al documento
  document.body.appendChild(alertBox);}



//Formulario Registro Usuario
 /*  document.getElementById('formulario').addEventListener('submit', enviarDatos); */

function enviarDatos(evento) {
    evento.preventDefault();
  
    const nombre = document.getElementById('validationCustom01').value;
    const correo = document.getElementById('validationCustom02').value;
    const usuario = document.getElementById('validationCustom03').value;
    const contraseña = document.getElementById('validationCustom04').value;
  
    const datos = {
      nombre: nombre,
      correo: correo,
      usuario: usuario,
      contraseña: contraseña
    };

    fetch('http://localhost:3000/api/usuarios', {
      method: 'POST',
      body: JSON.stringify(datos),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error))
  }
//Login
async function login(usuario, contraseña) {
  // Crea un cuerpo para la solicitud POST con el nombre de usuario y la contraseña
  const body = { usuario, contraseña };

  // Envía la solicitud POST al servidor
  const response = await fetch('http://localhost:3000/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });

  // Obtiene la respuesta del servidor
  const data = await response.json();

  // Si el token es false, significa que no se encontró ningún usuario
  if (data.token === false) {
    // Muestra un mensaje de error al usuario
    alert('Nombre de usuario o contraseña incorrectos');
  } else {
    // Si el token no es false, significa que se encontró un usuario
    // Guarda el token de autenticación en el navegador (en el local storage)
    // Redirige al usuario a la página protegida de la aplicación
    saveToken(data.token);
    //redireccion a la pagina de incio
    window.location.href = "pokemonlist.html";
  }
}

//Guardar token de autentificacion
function saveToken(token) {
  localStorage.setItem('token', token);
}

//Evento que envia los datos del formulario login
async function enviarDatosLogin(event) {
  // Evita que el formulario envíe la solicitud y recargue la página
  event.preventDefault();

  // Obtiene los valores del nombre de usuario y la contraseña del formulario
  const usuario = document.getElementById('loginusuario').value;
  const contraseña = document.getElementById('logincontraseña').value;

  // Llamamos a la función login con los valores del formulario
  const token = await login(usuario, contraseña);
}

//token
const token = localStorage.getItem('token');

//funcion devuelve los pokemons favoritos
async function getFavoritos(token) {
  const response = await fetch(`http://localhost:3000/api/usuarios/${token}/favoritos`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  const data = await response.json();
  return data;
}
console.log(token)


    