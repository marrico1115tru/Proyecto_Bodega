$(document).ready(function () {
    // Seleccionar todos los enlaces con la clase nav-link
    $('.nav-link').on('click', function () {
        // Remover la clase active de todos los nav-links
        $('.nav-link').removeClass('active');

        // Agregar la clase active al enlace clicado
        $(this).addClass('active');
    });

    //$('#sidebar').load('../../components/sidebar.html');
});


// Configuramos el idioma
window.addEventListener("DOMContentLoaded", () => {
    // Función para cargar el archivo de idioma
    function loadLanguage(lang) {
        console.log(`Cargando idioma: ${lang}`);
        fetch(`../../assets/${lang}.json`)
            .then((response) => response.json())
            .then((data) => {
                document.querySelectorAll("[data-translate]").forEach((element) => {
                    const translateKey = element.getAttribute("data-translate");
                    if (data[translateKey]) {
                        element.textContent = data[translateKey]; // Reemplazar el contenido
                    }
                });
            })
            .catch((error) =>
                console.error("Error al cargar el archivo de idioma:", error)
            );
    }

    // Detectar el clic en el selector de idioma y cambiar el idioma
    document.querySelectorAll(".menu-item").forEach((item) => {
        item.addEventListener("click", function (event) {
            const selectedLang = item.getAttribute("data-lang");
            console.log(`Idioma seleccionado: ${selectedLang}`);
            document.querySelector(".selected-lang").textContent = item.textContent;
            loadLanguage(selectedLang);
        });
    });
});


//Dar formato al documento y llamar los json.