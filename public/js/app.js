
// ============================================
// MONSTER FIGHTERS
// APLICACION GENERAL
// ============================================

// Obtener usuario guardado
const usuario = JSON.parse(
    localStorage.getItem("usuario") || "null"
);

// Obtener página actual
const paginaActual = window.location.pathname
    .split("/")
    .pop() || "index.html";


// ============================================
// PROTEGER PAGINAS PRIVADAS
// ============================================

const paginasPrivadas = [
    "bolsa.html",
    "equipo.html",
    "jugar.html",
    "perfil.html"
];

if (
    paginasPrivadas.includes(paginaActual) &&
    !usuario
) {
    alert("Debes iniciar sesión para acceder.");

    window.location.replace("login.html");
}


// ============================================
// CREAR ENCABEZADO
// ============================================

const header = document.getElementById("header");

if (header) {

    header.innerHTML = `

        <header class="header">

            <a href="index.html" class="logo">

                <img src="img/icono.ico" alt="Monster Fighters">

                <span>
                    MONSTER <strong>FIGHTERS</strong>
                </span>

            </a>

            <nav class="navbar">

                <a href="index.html"
                   class="${paginaActual === "index.html" ? "activo" : ""}">
                    Inicio
                </a>

                <a href="bolsa.html" class="privado">
                    Bolsa
                </a>

                <a href="monstruos.html"
                   class="${paginaActual === "monstruos.html" ? "activo" : ""}">
                    Monstruos
                </a>

                <a href="equipo.html" class="privado">
                    Equipo
                </a>

                <a href="jugar.html" class="privado">
                    Jugar
                </a>

                <a href="perfil.html" class="privado">
                    Perfil
                </a>

            </nav>

            <div class="header-actions">

                ${
                    usuario
                    ? `
                        <span class="usuario-header">
                            ${usuario.nombre_usuario}
                        </span>

                        <button id="cerrarSesion" class="btn-outline">
                            Salir
                        </button>
                    `
                    : `
                        <a href="login.html" class="btn-outline">
                            Iniciar sesión
                        </a>

                        <a href="registro.html" class="btn-primary">
                            Registrarse
                        </a>
                    `
                }

            </div>

        </header>

    `;


    // ========================================
    // CONTROL DE ENLACES PRIVADOS
    // ========================================

    document.querySelectorAll(".privado").forEach(enlace => {

        enlace.addEventListener("click", function(event) {

            if (!usuario) {

                event.preventDefault();

                alert("Debes iniciar sesión para acceder.");

                window.location.href = "login.html";

            }

        });

    });


    // ========================================
    // CERRAR SESION
    // ========================================

    const botonSalir = document.getElementById("cerrarSesion");

    if (botonSalir) {

        botonSalir.addEventListener("click", function() {

            localStorage.removeItem("usuario");
            localStorage.removeItem("token");

            window.location.href = "index.html";

        });

    }

}


// ============================================
// CREAR FOOTER
// ============================================

const footer = document.getElementById("footer");

if (footer) {

    footer.innerHTML = `

        <footer class="footer">

            <div class="footer-content">

                <div>

                    <h2>MONSTER FIGHTERS</h2>

                    <p>
                        Descubre criaturas extraordinarias,
                        forma tu equipo y prepárate para combatir.
                    </p>

                </div>

                <div>

                    <h3>Navegación</h3>

                    <a href="index.html">Inicio</a>
                    <a href="monstruos.html">Monstruos</a>
                    <a href="login.html">Iniciar sesión</a>
                    <a href="registro.html">Registrarse</a>

                </div>

                <div>

                    <h3>Proyecto</h3>

                    <p>Desarrollo Basado en Plataformas</p>
                    <p>Proyecto académico</p>

                </div>

            </div>

            <div class="footer-bottom">

                <p>
                    © 2026 Monster Fighters.
                    Todos los derechos reservados.
                </p>

            </div>

        </footer>

    `;

}


// ============================================
// MUSICA GENERAL
// ============================================

const musicaPorPagina = {

    "index.html": "audio/menu.mp3",
    "login.html": "audio/menu.mp3",
    "registro.html": "audio/menu.mp3",

    "monstruos.html": "audio/chill.mp3",
    "bolsa.html": "audio/chill.mp3",
    "equipo.html": "audio/chill.mp3",
    "perfil.html": "audio/chill.mp3",

    "jugar.html": "audio/batalla.mp3"

};


// Seleccionar música de la página
const archivoMusica =
    musicaPorPagina[paginaActual] || "audio/menu.mp3";


// Crear reproductor
const reproductor = document.createElement("div");

reproductor.className = "reproductor";

reproductor.innerHTML = `
    <button id="botonMusica">
        Apagar música
    </button>
`;

document.body.appendChild(reproductor);


// Crear audio
const musica = document.createElement("audio");

musica.id = "musicaFondo";
musica.src = archivoMusica;
musica.loop = true;
musica.volume = 0.25;

document.body.appendChild(musica);


// Recuperar preferencia del usuario
const musicaGuardada = localStorage.getItem("musicaActiva");

if (musicaGuardada === "false") {

    musica.muted = true;

} else {

    musica.muted = false;

}


// Botón para activar y apagar
const botonMusica = document.getElementById("botonMusica");


function actualizarBotonMusica() {

    botonMusica.textContent = musica.muted
        ? "Activar música"
        : "Apagar música";

}


actualizarBotonMusica();


botonMusica.addEventListener("click", function() {

    musica.muted = !musica.muted;

    localStorage.setItem(
        "musicaActiva",
        String(!musica.muted)
    );

    actualizarBotonMusica();

    if (!musica.muted) {

        musica.play().catch(error => {
            console.log("El navegador bloqueó la reproducción.", error);
        });

    }

});


// Intentar iniciar música
if (!musica.muted) {

    musica.play().catch(() => {

        console.log(
            "Presiona el botón de música para iniciar la reproducción."
        );

    });

}
