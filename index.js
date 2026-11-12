const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", function () {

    nav.classList.toggle("activo");

    if (nav.classList.contains("activo")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }

});


/* Cerrar menú al seleccionar una opción */

const enlaces = document.querySelectorAll(".nav a");

enlaces.forEach(function (enlace) {

    enlace.addEventListener("click", function () {

        nav.classList.remove("activo");

        menuBtn.textContent = "☰";

    });

});


/* ==========================================
   2. CAMBIO DE TEMA CLARO / OSCURO
========================================== */

const temaBtn = document.getElementById("temaBtn");

temaBtn.addEventListener("click", function () {

    document.body.classList.toggle("oscuro");

    if (document.body.classList.contains("oscuro")) {

        temaBtn.textContent = "☀️";

        localStorage.setItem("tema", "oscuro");

    } else {

        temaBtn.textContent = "🌙";

        localStorage.setItem("tema", "claro");

    }

});


/* Recordar el tema */

const temaGuardado = localStorage.getItem("tema");

if (temaGuardado === "oscuro") {

    document.body.classList.add("oscuro");

    temaBtn.textContent = "☀️";

}


/* ==========================================
   3. GALERÍA INTERACTIVA
========================================== */

const fotos = document.querySelectorAll(".foto img");

const modal = document.getElementById("modal");

const imagenModal = document.getElementById("imagenModal");

const cerrarModal = document.getElementById("cerrarModal");


fotos.forEach(function (foto) {

    foto.addEventListener("click", function () {

        imagenModal.src = foto.src;

        imagenModal.alt = foto.alt;

        modal.classList.add("activo");

    });

});


cerrarModal.addEventListener("click", function () {

    modal.classList.remove("activo");

});


modal.addEventListener("click", function (evento) {

    if (evento.target === modal) {

        modal.classList.remove("activo");

    }

});


/* ==========================================
   4. CARRUSEL
========================================== */

const slider = document.getElementById("productoSlider");

const prevBtn = document.getElementById("prevBtn");

const nextBtn = document.getElementById("nextBtn");

let posicion = 0;


function moverCarrusel(direccion) {

    const productos = document.querySelectorAll(".producto");

    if (window.innerWidth <= 600) {

        posicion += direccion;

        if (posicion < 0) {
            posicion = productos.length - 1;
        }

        if (posicion >= productos.length) {
            posicion = 0;
        }

        slider.style.transform =
            `translateX(-${posicion * 100}%)`;

    }

}


prevBtn.addEventListener("click", function () {

    moverCarrusel(-1);

});


nextBtn.addEventListener("click", function () {

    moverCarrusel(1);

});


/* ==========================================
   5. BOTÓN VOLVER ARRIBA
========================================== */

const arribaBtn = document.getElementById("arribaBtn");


window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        arribaBtn.classList.add("visible");

    } else {

        arribaBtn.classList.remove("visible");

    }

});


arribaBtn.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ==========================================
   6. PREGUNTAS FRECUENTES
========================================== */

const preguntas = document.querySelectorAll(".pregunta");


preguntas.forEach(function (pregunta) {

    const boton = pregunta.querySelector("button");

    const simbolo = boton.querySelector("span");


    boton.addEventListener("click", function () {

        pregunta.classList.toggle("abierta");


        if (pregunta.classList.contains("abierta")) {

            simbolo.textContent = "−";

        } else {

            simbolo.textContent = "+";

        }

    });

});


/* ==========================================
   7. VALIDACIÓN DEL FORMULARIO
========================================== */

const formulario = document.getElementById("formulario");

const nombre = document.getElementById("nombre");

const correo = document.getElementById("correo");

const mensaje = document.getElementById("mensaje");

const errorNombre = document.getElementById("errorNombre");

const errorCorreo = document.getElementById("errorCorreo");

const errorMensaje = document.getElementById("errorMensaje");

const mensajeExito = document.getElementById("mensajeExito");


formulario.addEventListener("submit", function (evento) {

    evento.preventDefault();


    let valido = true;


    /* Limpiar errores */

    errorNombre.textContent = "";

    errorCorreo.textContent = "";

    errorMensaje.textContent = "";

    mensajeExito.textContent = "";


    /* Validar nombre */

    if (nombre.value.trim() === "") {

        errorNombre.textContent =
            "Por favor, escribe tu nombre.";

        valido = false;

    } else if (nombre.value.trim().length < 3) {

        errorNombre.textContent =
            "El nombre debe tener al menos 3 caracteres.";

        valido = false;

    }


    /* Validar correo */

    const patronCorreo =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (correo.value.trim() === "") {

        errorCorreo.textContent =
            "Por favor, escribe tu correo.";

        valido = false;

    } else if (!patronCorreo.test(correo.value)) {

        errorCorreo.textContent =
            "Escribe un correo electrónico válido.";

        valido = false;

    }


    /* Validar mensaje */

    if (mensaje.value.trim() === "") {

        errorMensaje.textContent =
            "Por favor, escribe un mensaje.";

        valido = false;

    } else if (mensaje.value.trim().length < 10) {

        errorMensaje.textContent =
            "El mensaje debe tener al menos 10 caracteres.";

        valido = false;

    }


    /* Resultado */

    if (valido) {

        mensajeExito.textContent =
            "¡Mensaje enviado correctamente! 🌸";

        formulario.reset();

    }

});
