const $form = document.querySelector('#form')
const botonMaito = document.querySelector('#mailto')


async function handleSubmit(event){
    event.preventDefault() // evitamos que se recargue la página al enviar 
    const form = new FormData($form) // le pasamos el formulario al FormData 
    const response = await fetch($form.action, {//la funcion devuelve de manera asincrónica la respuesta mediando response.ok
        method: $form.method, // La API solicita el metodo y body del formulario que estoy enviando
        body: form,
        headers: {
           'Accept': 'application/json' // Es lo que voy a aceptar que me devuelva
        }
    })

    return response.ok; // Retorna el resultado de la Promesa
}


var validarNyA = function (event) {
    if ($form.nombre.value == 0) {      
        alert("Debes completar el campo de Nombre y Apellido.");
        event.preventDefault();             
    }
};

var validarEMail = function (event) {
    if ($form.email.value == 0) {      
        alert("Debes completar el campo de Correo Electrónico.");
        event.preventDefault();             
    }
};

var validarMsj = function (event) {
    if ($form.mensaje.value == 0) {      
        alert("Debes completar el campo de Mensaje.");
        event.preventDefault();             
    }
};

var validar = function (event) { 
    validarNyA(event); // Valida el Nombre y Apellido 
    validarEMail(event); // Valida que haya cargado el mail
    validarMsj(event); // Valida que haya cargado un mensaje

    var respuesta = handleSubmit(event); // Ejecuta la funcion asincrónica que llama a Formspree

    if (respuesta)  //Según el resultado limpia el formulario y da un mensaje
    {
        $form.reset() // resetea los campos del formulario
        // Colocamos un mensaje de agragdecimiento para el usuario 
        alert('Gracias por contactarte con PizzaMaster. Pronto nos pondremos en contacto contigo. :)')

    }

};

$form.addEventListener("submit", validar);
