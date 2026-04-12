const proyectosData = {
    "proyectos": [
        {
            "id": 1,
            "nombre": "Diseño de Página de HotDogs",
            "imagen": "/images/preview_hotdog.webp",
            "url": "https://ziclari.github.io/ziclariv1/HotDog/index.html",
            "descripcion": "Diseño y maquetación de varias páginas en HTML y CSS.",
            "fecha": "23/05/22-30/05/22",
            "tipo": ["sitio"],
            "tecnologias": ["html", "css"]
        },
        {
            "id": 2,
            "nombre": "Portafolio Sencillo",
            "imagen": "/images/preview_portafolio.webp",
            "url": "https://ziclari.github.io/ziclariv1/Kates/index.html",
            "descripcion": "Diseño y maquetación de una página responsive en HTML y CSS.",
            "fecha": "11/06/22-13/06/22",
            "tipo": ["sitio"],
            "tecnologias": ["html", "css"]
        },
        {
            "id": 3,
            "nombre": "Pequeño experimento",
            "imagen": "/images/preview_ex1.webp",
            "url": "https://ziclari.github.io/ziclariv1/blues/index.html",
            "descripcion": "Diseño y maquetación de una página sencilla en HTML y CSS.",
            "fecha": "20/06/22",
            "tipo": ["sitio", "experimento"],
            "tecnologias": ["html", "css"]
        },
        {
            "id": 4,
            "nombre": "Diseño de página de horarios",
            "imagen": "/images/preview_horarios.webp",
            "url": "https://ziclari.github.io/ziclariv1/uamsis/index.html",
            "descripcion": "Diseño y maquetación de varias páginas sencillas responsive en HTML y CSS.",
            "fecha": "12/04/23",
            "tipo": ["sitio"],
            "tecnologias": ["html", "css"]
        },
        {
            "id": 5,
            "nombre": "Diseño de página de educación [INCOMPLETO]",
            "imagen": "/images/preview_academia.webp",
            "url": "https://ziclari.github.io/ziclariv1/education/inicio.html",
            "descripcion": "Diseño y maquetación de varias páginas en HTML y CSS. Versión incompleta",
            "fecha": "09/12/23",
            "tipo": ["sitio"],
            "tecnologias": ["html", "css", "javascript"]
        },
        {
            "id": 6,
            "nombre": "Juego del ahorcado",
            "imagen": "/images/preview_hangman.webp",
            "url": "https://ziclari.github.io/Ahorcado-Brython/",
            "descripcion": "Diseño, gráficos y lógica de un juego en python (brython).",
            "fecha": "14/02/24",
            "tipo": ["juego"],
            "tecnologias": ["python", "brython"]
        },
        {
            "id": 7,
            "nombre": "Diseño de página Sistema Solar",
            "imagen": "/images/preview_solar.webp",
            "url": "https://ziclari.github.io/SistemaSolar/",
            "descripcion": "Diseño y maquetación de una página responsive HTML y CSS. Uso de React js, UseState",
            "fecha": "16/06/24",
            "tipo": ["sitio"],
            "tecnologias": ["react", "html", "css", "javascript"]
        },
        {
            "id": 8,
            "nombre": "Diseño de página de cocteles La Piña Colada",
            "imagen": "/images/preview_pina.webp",
            "url": "https://ziclari.github.io/Cocteles/",
            "descripcion": "Diseño y maquetación de una página responsive HTML y CSS. Uso de React js, UseState, UseEffect, API.",
            "fecha": "18/06/24",
            "tipo": ["sitio"],
            "tecnologias": ["react", "html", "css", "javascript"]
        },
        {
            "id": 9,
            "nombre": "Página de proyectos",
            "imagen": "/images/logo2.svg",
            "url": "#",
            "descripcion": "Diseño y maquetación de una página responsive HTML y CSS. Uso de React js y Tailwind. Página Actual.",
            "fecha": "23/06/24",
            "tipo": ["sitio"],
            "tecnologias": ["react", "html", "css", "javascript", "tailwind"]
        },
        {
            "id": 10,
            "nombre": "Juego de Memoria",
            "imagen": "/images/preview_memoria.webp",
            "url": "https://ziclari.github.io/JuegoDeMemoria/",
            "descripcion": "Diseño, maquetación y programación de una página responsive HTML y CSS. Uso de React js y Tailwind.",
            "fecha": "29/06/24",
            "tipo": ["juego"],
            "tecnologias": ["react", "html", "css", "javascript", "tailwind"]
        },
        {
            "id": 11,
            "nombre": "Test con Scala",
            "imagen": "/images/preview_scala.webp",
            "url": "https://ziclari.github.io/test-scala-js/",
            "descripcion": "Prueba con scala para la web",
            "fecha": "10/05/25",
            "tipo": ["juego", "experimento"],
            "tecnologias": ["scala", "html", "css"]
        },
        {
            "id": 12,
            "nombre": "Ejercitador de contabilidad",
            "imagen": "/images/preview_contabilidad.webp",
            "url": "https://ziclari.github.io/prueba-edu/",
            "descripcion": "Diseño, maquetación y programación de una página responsive HTML y CSS. Uso de React js y Tailwind.",
            "fecha": "21/09/25",
            "tipo": ["juego"],
            "tecnologias": ["react", "html", "css", "javascript", "tailwind"]
        }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    const proyectosContainer = document.getElementById('proyectos-container');
    const countElement = document.getElementById('count');
    const countLabelElement = document.getElementById('count-label');

    // Controles
    const filterBtns = document.querySelectorAll('.filter-btn');
    const orderBtns = document.querySelectorAll('.order-btn');

    // Estado inicial
    let currentTipo = 'todos';
    let currentTech = 'todos';
    let soloDestacados = false;

    let currentOrder = 'descendente';
    const idsFavoritos = [6, 7, 10, 12];

    function renderProyectos() {
        // Filtrar
        let proyectos = proyectosData.proyectos.filter(p => {
            const matchTipo = currentTipo === 'todos' || p.tipo.includes(currentTipo);
            const matchTech = currentTech === 'todos' || p.tecnologias.includes(currentTech);
            const matchDestacados = !soloDestacados || idsFavoritos.includes(p.id);

            return matchTipo && matchTech && matchDestacados;
        });
        // Ordenar
        proyectos.sort((a, b) => {
            if (currentOrder === 'descendente') {
                return b.id - a.id;
            } else {
                return a.id - b.id;
            }
        });

        // Actualizar contador
        countElement.textContent = proyectos.length;
        countLabelElement.textContent = proyectos.length === 1 ? 'proyecto' : 'proyectos';

        // Renderizar HTML
        proyectosContainer.innerHTML = '';

        proyectos.forEach(proyecto => {
            let imgSrc = proyecto.imagen;
            if (imgSrc.startsWith('/images/')) {
                imgSrc = '../public' + imgSrc;
            }

            const card = document.createElement('a');
            card.href = proyecto.url;
            card.target = '_blank';
            card.rel = 'noopener noreferrer';
            card.className = 'card';

            const techTagsHTML = proyecto.tecnologias.map(tech => {
                const isUpper = (tech === 'html' || tech === 'css');
                return `<div class="tech-tag ${isUpper ? 'uppercase' : ''}">${tech}</div>`;
            }).join('');

            card.innerHTML = `
                <img class="card-img" src="${imgSrc}" alt="${proyecto.nombre}" />
                <div class="card-content">
                    <h3 class="card-title">${proyecto.nombre}</h3>
                    <p class="card-desc">${proyecto.descripcion}</p>
                    <p class="card-date">Fecha: ${proyecto.fecha}</p>
                    <img class="card-icon" src="../public/images/patas.png" alt="patitas">
                    <div class="tech-tags">
                        ${techTagsHTML}
                    </div>
                </div>
            `;

            proyectosContainer.appendChild(card);
        });
    }

    // Inicializar eventos de botones de filtro
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const group = e.target.closest('.filters-group').dataset.group;
            const value = e.target.getAttribute('data-filter');

            // reset visual dentro del grupo
            e.target.parentElement.querySelectorAll('.filter-btn')
                .forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');

            if (group === 'tipo') {
                currentTipo = value;
            } else if (group === 'tech') {
                currentTech = value;
            } else if (group === 'destacados') {
                soloDestacados = value === 'destacados';
            }

            renderProyectos();
        });
    });

    // Inicializar eventos de botones de orden
    orderBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Quitar clase active
            orderBtns.forEach(b => b.classList.remove('active'));
            // Añadir clase active
            e.target.classList.add('active');

            currentOrder = e.target.getAttribute('data-order');
            renderProyectos();
        });
    });

    // Primera renderizada
    renderProyectos();
});
