
// ============================================
// MONSTER FIGHTERS
// AUTENTICACION
// ============================================

// Dirección de la API
const API_URL = "/api/auth";


// ============================================
// INICIAR SESION
// ============================================

const formLogin = document.getElementById("formLogin");

if (formLogin) {

    formLogin.addEventListener("submit", async function(event) {

        event.preventDefault();

        const correo = document.getElementById("correo").value;

        const contrasena =
            document.getElementById("contrasena").value;

        const mensaje = document.getElementById("mensaje");

        try {

            const respuesta = await fetch(
                `${API_URL}/login`,
                {

                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        correo,
                        contrasena
                    })

                }
            );


            const datos = await respuesta.json();

            if (!respuesta.ok) {

                throw new Error(
                    datos.mensaje || "Error al iniciar sesión."
                );

            }


            // Guardar token
            localStorage.setItem("token", datos.token);


            // Guardar información del usuario
            localStorage.setItem(
                "usuario",
                JSON.stringify({

                    id_usuario: datos.usuario.id_usuario,

                    nombre_usuario:
                        datos.usuario.nombre_usuario,

                    fecha_registrado:
                        datos.usuario.fecha_registrado,

                    rating:
                        datos.usuario.rating,

                    id_rango:
                        datos.usuario.id_rango

                })
            );


            // Ir al perfil
            window.location.href = "perfil.html";

        } catch (error) {

            mensaje.textContent = error.message;

            mensaje.className = "mensaje-error";

        }

    });

}


// ============================================
// REGISTRAR USUARIO
// ============================================

const formRegistro = document.getElementById("formRegistro");

if (formRegistro) {

    formRegistro.addEventListener("submit", async function(event) {

        event.preventDefault();

        const nombre_usuario =
            document.getElementById("nombre").value;

        const correo =
            document.getElementById("correo").value;

        const contrasena =
            document.getElementById("contrasena").value;

        const confirmar =
            document.getElementById("confirmar").value;

        const mensaje =
            document.getElementById("mensaje");


        // Comprobar contraseñas
        if (contrasena !== confirmar) {

            mensaje.textContent =
                "Las contraseñas no coinciden.";

            mensaje.className = "mensaje-error";

            return;

        }


        try {

            const respuesta = await fetch(
                `${API_URL}/registro`,
                {

                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({

                        nombre_usuario,
                        correo,
                        contrasena

                    })

                }
            );


            const datos = await respuesta.json();

            if (!respuesta.ok) {

                throw new Error(
                    datos.mensaje || "No se pudo registrar el usuario."
                );

            }


            mensaje.textContent =
                "Registro realizado correctamente.";

            mensaje.className = "mensaje-exito";


            setTimeout(function() {

                window.location.href = "login.html";

            }, 1500);


        } catch (error) {

            mensaje.textContent = error.message;

            mensaje.className = "mensaje-error";

        }

    });

}
