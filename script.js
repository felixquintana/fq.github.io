// Datos de noticias (actualizado automÃ¡ticamente)
const newsData = [
    {
        title: "Railway recauda 100 millones para desafiar a AWS con infraestructura cloud nativa para IA",
        summary: "Railway, la plataforma cloud con 2 millones de desarrolladores, levanta 100M$ en Serie B para ofrecer despliegues en menos de 1 segundo adaptados a la era de agentes IA.",
        link: "https://venturebeat.com/infrastructure/railway-secures-usd100-million-to-challenge-aws-with-ai-native-cloud",
        source: "VentureBeat"
    },
    {
        title: "City Union Bank crea centro de excelencia en IA para operaciones bancarias",
        summary: "El banco indio City Union Bank anuncia un acuerdo de cuatro partes para desarrollar sistemas de IA enfocados en detecciÃ³n de fraude, anÃ¡lisis de riesgo crediticio y cumplimiento regulatorio.",
        link: "https://www.artificialintelligence-news.com/news/city-union-bank-launches-ai-centre-to-support-banking-operations/",
        source: "Artificial Intelligence News"
    },
    {
        title: "DOGE usÃ³ ChatGPT para decidir quÃ© subvenciones cancelar en Humanidades",
        summary: "La agencia DOGE utilizÃ³ prompts de ChatGPT para decidir quÃ© subvenciones del National Endowment for the Humanities cancelar, sin anÃ¡lisis detallado de los proyectos.",
        link: "https://www.theverge.com/2026/03/07/doge-chatgpt-grants-cancellation",
        source: "The Verge"
    },
    {
        title: "Responsable de robÃ³tica de OpenAI dimite por el acuerdo con el PentÃ¡gono",
        summary: "Caitlin Kalinowski deja OpenAI protestando por el contrato de la empresa con el PentÃ¡gono y la falta de protecciones contra vigilancia sin orden judicial.",
        link: "https://www.theverge.com/ai-artificial-intelligence/886816/openai-reached-a-new-agreement-with-the-pentagon",
        source: "The Verge"
    },
    {
        title: "CISA ordena parchear 3 vulnerabilidades crÃ­ticas de iOS explotadas durante 10 meses",
        summary: "El gobierno de EE.UU. ordena a agencias federales arreglar fallos de iOS que fueron explotados por grupos de hacking que usaban un kit avanzado de 23 exploits.",
        link: "https://arstechnica.com/security/2026/03/cisa-adds-3-ios-flaws-to-its-catalog-of-known-exploited-vulnerabilities/",
        source: "Ars Technica"
    },
    {
        title: "CaÃ­da masiva de Amazon: mÃ¡s de 20.000 reportes de problemas",
        summary: "Amazon experimenta una caÃ­da generalizada afectando su web, Prime Video y AWS, con mÃ¡s de 20.000 reportes en Downdetector.",
        link: "https://arstechnica.com/gadgets/2026/03/amazon-appears-to-be-down-with-over-20000-reported-problems/",
        source: "Ars Technica"
    },
];

// FunciÃ³n para formatear la fecha
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

// FunciÃ³n para crear una tarjeta de noticia
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
            Leer mÃ¡s
        </a>
    `;
    
    return card;
}

// FunciÃ³n para cargar las noticias
function loadNews() {
    const container = document.getElementById('news-container');
    container.innerHTML = '';
    
    newsData.forEach((news, index) => {
        const card = createNewsCard(news, index);
        container.appendChild(card);
    });
}

// FunciÃ³n para actualizar la hora de Ãºltima actualizaciÃ³n
function updateLastUpdateTime() {
    const updateTimeElement = document.getElementById('update-time');
    const now = new Date();
    updateTimeElement.textContent = formatDate(now);
}

// FunciÃ³n para simular la carga de nuevas noticias (para futuras actualizaciones automÃ¡ticas)
async function fetchLatestNews() {
    // Esta funciÃ³n se conectarÃ¡ con el sistema de actualizaciÃ³n automÃ¡tica
    // Por ahora, simula una actualizaciÃ³n
    console.log('Buscando nuevas noticias...');
    
    // AquÃ­ se implementarÃ¡ la lÃ³gica para obtener noticias actualizadas
    // desde el sistema de automatizaciÃ³n
    
    return newsData; // Por ahora retorna los datos estÃ¡ticos
}

// FunciÃ³n para refrescar las noticias
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

// FunciÃ³n para manejar la responsividad
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

// FunciÃ³n de inicializaciÃ³n
function init() {
    console.log('Inicializando BladeRunner Tech News...');
    
    // Cargar noticias iniciales
    loadNews();
    
    // Actualizar hora de Ãºltima actualizaciÃ³n
    updateLastUpdateTime();
    
    // Inicializar efectos visuales
    initializeVisualEffects();
    
    // Manejar responsividad
    handleResponsive();
    
    // Configurar actualizaciÃ³n automÃ¡tica cada hora (para pruebas)
    // En producciÃ³n, esto se manejarÃ¡ desde el servidor
    setInterval(() => {
        console.log('Verificando actualizaciones...');
        // refreshNews(); // Descomentado para evitar actualizaciones constantes en desarrollo
    }, 3600000); // 1 hora
    
    console.log('BladeRunner Tech News inicializado correctamente');
}

// Inicializar cuando el DOM estÃ© listo
document.addEventListener('DOMContentLoaded', init);

// FunciÃ³n para exportar datos (Ãºtil para el sistema de actualizaciÃ³n)
window.BladeRunnerNews = {
    refreshNews,
    updateLastUpdateTime,
    newsData
};
