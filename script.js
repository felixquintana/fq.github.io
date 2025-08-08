// Datos de noticias (se actualizarán dinámicamente)
const newsData = [
    {
        title: "La agencia para regular la IA en EE UU pierde fuelle tras los recortes de Trump",
        summary: "Nuevos desarrollos en inteligencia artificial que están transformando la industria tecnológica.",
        link: "https://technologyreview.es/article/la-agencia-para-regular-la-ia-en-ee-uu-pierde-fuelle-tras-los-recortes-de-trump/"
    },
    {
        title: "Por qué no es una buena idea delegar todo en agentes de IA",
        summary: "Nuevos desarrollos en inteligencia artificial que están transformando la industria tecnológica.",
        link: "https://technologyreview.es/article/por-que-no-es-una-buena-idea-delegar-todo-en-agentes-de-ia/"
    },
    {
        title: "Los modelos de lenguaje locales llegan a los portátiles para hacer accesible la IA",
        summary: "Nuevos desarrollos en inteligencia artificial que están transformando la industria tecnológica.",
        link: "https://technologyreview.es/article/los-modelos-de-lenguaje-locales-llegan-a-los-portatiles-para-hacer-accesible-la-ia/"
    },
    {
        title: "La ideología de la salvación tecnológica o cómo los multimillonarios juegan con el futuro de la humanidad",
        summary: "Desarrollo tecnológico relevante que impacta en la industria y los usuarios.",
        link: "https://technologyreview.es/article/la-ideologia-de-la-salvacion-tecnologica-o-como-los-multimillonarios-juegan-con-el-futuro-de-la-humanidad/"
    },
    {
        title: "OpenAI lanza GPT-5 y se acerca a la IA agéntica",
        summary: "Nuevos desarrollos en inteligencia artificial que están transformando la industria tecnológica.",
        link: "https://technologyreview.es/article/openai-lanza-gpt-5-y-se-acerca-a-la-ia-agentica/"
    },
];

// Función para formatear la fecha
function formatDate(date) {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Europe/Madrid'
    };
    return date.toLocaleDateString('es-ES', options);
}

// Función para crear una tarjeta de noticia
function createNewsCard(news, index) {
    const card = document.createElement('article');
    card.className = 'news-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
        <a href="${news.link}" target="_blank" rel="noopener noreferrer" class="news-title">
            ${news.title}
        </a>
        <p class="news-summary">${news.summary}</p>
        <a href="${news.link}" target="_blank" rel="noopener noreferrer" class="news-link">
            Leer más
        </a>
    `;
    
    return card;
}

// Función para cargar las noticias
function loadNews() {
    const container = document.getElementById('news-container');
    container.innerHTML = '';
    
    newsData.forEach((news, index) => {
        const card = createNewsCard(news, index);
        container.appendChild(card);
    });
}

// Función para actualizar la hora de última actualización
function updateLastUpdateTime() {
    const updateTimeElement = document.getElementById('update-time');
    const now = new Date();
    updateTimeElement.textContent = formatDate(now);
}

// Función para simular la carga de nuevas noticias (para futuras actualizaciones automáticas)
async function fetchLatestNews() {
    // Esta función se conectará con el sistema de actualización automática
    // Por ahora, simula una actualización
    console.log('Buscando nuevas noticias...');
    
    // Aquí se implementará la lógica para obtener noticias actualizadas
    // desde el sistema de automatización
    
    return newsData; // Por ahora retorna los datos estáticos
}

// Función para refrescar las noticias
async function refreshNews() {
    try {
        const latestNews = await fetchLatestNews();
        // Actualizar los datos globales
        newsData.length = 0;
        newsData.push(...latestNews);
        
        // Recargar la interfaz
        loadNews();
        updateLastUpdateTime();
        
        console.log('Noticias actualizadas correctamente');
    } catch (error) {
        console.error('Error al actualizar noticias:', error);
    }
}

// Efectos visuales adicionales
function initializeVisualEffects() {
    // Efecto de paralaje suave en el scroll
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.background-grid');
        const speed = scrolled * 0.2;
        
        if (parallax) {
            parallax.style.transform = `translate(${speed}px, ${speed}px)`;
        }
    });
    
    // Efecto de hover en las tarjetas
    document.addEventListener('mouseover', (e) => {
        if (e.target.closest('.news-card')) {
            const card = e.target.closest('.news-card');
            card.style.transform = 'translateY(-8px) scale(1.02)';
        }
    });
    
    document.addEventListener('mouseout', (e) => {
        if (e.target.closest('.news-card')) {
            const card = e.target.closest('.news-card');
            card.style.transform = 'translateY(0) scale(1)';
        }
    });
}

// Función para manejar la responsividad
function handleResponsive() {
    const updateResponsiveLayout = () => {
        const container = document.querySelector('.news-grid');
        const width = window.innerWidth;
        
        if (width < 768) {
            container.style.gridTemplateColumns = '1fr';
        } else if (width < 1200) {
            container.style.gridTemplateColumns = 'repeat(2, 1fr)';
        } else {
            container.style.gridTemplateColumns = 'repeat(auto-fit, minmax(400px, 1fr))';
        }
    };
    
    window.addEventListener('resize', updateResponsiveLayout);
    updateResponsiveLayout();
}

// Función de inicialización
function init() {
    console.log('Inicializando BladeRunner Tech News...');
    
    // Cargar noticias iniciales
    loadNews();
    
    // Actualizar hora de última actualización
    updateLastUpdateTime();
    
    // Inicializar efectos visuales
    initializeVisualEffects();
    
    // Manejar responsividad
    handleResponsive();
    
    // Configurar actualización automática cada hora (para pruebas)
    // En producción, esto se manejará desde el servidor
    setInterval(() => {
        console.log('Verificando actualizaciones...');
        // refreshNews(); // Descomentado para evitar actualizaciones constantes en desarrollo
    }, 3600000); // 1 hora
    
    console.log('BladeRunner Tech News inicializado correctamente');
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', init);

// Función para exportar datos (útil para el sistema de actualización)
window.BladeRunnerNews = {
    refreshNews,
    updateLastUpdateTime,
    newsData
};

