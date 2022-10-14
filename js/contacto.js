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

    if (response.ok)
    {
        $form.reset() // resetea los campos del formulario
        // Colocamos un mensaje de agragdecimiento para el usuario 
        alert('Gracias por contactarte con PizzaMaster. Pronto nos pondremos en contacto contigo. :)')
    }

}


function validar(event) {
    if (document.form.nombre.value.length == 0) {// Valida el Nombre y Apellido
        alert("Debes completar el campo de Nombre y Apellido.")
        document.form.nombre.focus()
        event.preventDefault()    
        return 0;
    }
    if (document.form.email.value.length == 0) {// Valida que haya cargado el mail
        alert("Debes completar el campo de Correo Electrónico.")
        document.form.email.focus()
        event.preventDefault()    
        return 0;
    }

    if (document.form.mensaje.value.length == 0) {// Valida que haya cargado un mensaje
        alert("Debes completar el campo de Mensaje.")
        document.form.mensaje.focus()
        event.preventDefault()    
        return 0;
    }
    var dato = handleSubmit(event)

}

$form.addEventListener("submit", validar)
