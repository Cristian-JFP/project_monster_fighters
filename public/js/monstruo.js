
// ============================================
// MONSTER FIGHTERS
// CATALOGO DE MONSTRUOS
// ============================================


// Ruta provisional del backend
const API_CRIATURAS = "/api/criaturas";


// Extensión de las imágenes
const EXTENSION_IMAGEN = ".png";


// Contenedor de monstruos
const listaMonstruos =
    document.getElementById("listaMonstruos");


// ============================================
// CARGAR MONSTRUOS
// ============================================

async function cargarMonstruos() {

    try {

        const respuesta = await fetch(API_CRIATURAS);

        if (!respuesta.ok) {

            throw new Error("Error al consultar los monstruos.");

        }


        const datos = await respuesta.json();


        const monstruos = Array.isArray(datos)
            ? datos
            : datos.criaturas || datos.data || [];


        mostrarMonstruos(monstruos);


    } catch (error) {

        listaMonstruos.innerHTML = "";

        const mensaje = document.createElement("p");

        mensaje.textContent =
            "No fue posible cargar los monstruos. Verifica la conexión con el servidor.";

        listaMonstruos.appendChild(mensaje);

        console.error(error);

    }

}


// ============================================
// MOSTRAR MONSTRUOS
// ============================================

function mostrarMonstruos(monstruos) {

    listaMonstruos.innerHTML = "";


    if (monstruos.length === 0) {

        listaMonstruos.textContent =
            "No hay monstruos registrados.";

        return;

    }


    monstruos.forEach(monstruo => {

        const tarjeta = document.createElement("article");

        tarjeta.className = "monstruo-card";


        // Imagen según el ID
        const imagen = document.createElement("img");

        imagen.src =
            `img/criaturas/${monstruo.id_criatura}${EXTENSION_IMAGEN}`;

        imagen.alt = monstruo.nombre || "Monstruo";


        // Imagen alternativa si no existe
        imagen.onerror = function() {

            this.onerror = null;

            this.src = "img/icono.ico";

        };


        const informacion = document.createElement("div");

        informacion.className = "monstruo-info";


        const identificador = document.createElement("span");

        identificador.className = "etiqueta";

        identificador.textContent =
            `#${monstruo.id_criatura}`;


        const nombre = document.createElement("h3");

        nombre.textContent = monstruo.nombre || "Sin nombre";


        const descripcion = document.createElement("p");

        descripcion.textContent =
            monstruo.descripcion || "Sin descripción.";


        const tipo = document.createElement("span");

        tipo.className = "etiqueta";

        tipo.textContent =
            monstruo.nombre_tipo ||
            monstruo.tipo ||
            `Tipo ${monstruo.id_tipo}`;


        const rareza = document.createElement("span");

        rareza.className = "etiqueta";

        rareza.textContent =
            monstruo.rareza || "Sin rareza";


        informacion.appendChild(identificador);

        informacion.appendChild(nombre);

        informacion.appendChild(descripcion);

        informacion.appendChild(tipo);

        informacion.appendChild(rareza);


        tarjeta.appendChild(imagen);

        tarjeta.appendChild(informacion);


        listaMonstruos.appendChild(tarjeta);

    });

}


// ============================================
// EJECUTAR
// ============================================

cargarMonstruos();
