// Datos de noticias (actualizado automáticamente - 9 Marzo 2026)
const newsData = [
    {
        title: "Railway recauda 100 millones para desafiar a AWS con infraestructura cloud nativa para IA",
        summary: "Railway, la plataforma cloud con 2 millones de desarrolladores, levanta 100M$ en Serie B para ofrecer despliegues en menos de 1 segundo adaptados a la era de agentes IA.",
        link: "https://venturebeat.com/infrastructure/railway-secures-usd100-million-to-challenge-aws-with-ai-native-cloud",
        source: "VentureBeat"
    },
    {
        title: "City Union Bank crea centro de excelencia en IA para operaciones bancarias",
        summary: "El banco indio City Union Bank anuncia un acuerdo de cuatro partes para desarrollar sistemas de IA enfocados en detección de fraude, análisis de riesgo crediticio y cumplimiento regulatorio.",
        link: "https://www.artificialintelligence-news.com/news/city-union-bank-launches-ai-centre-to-support-banking-operations/",
        source: "Artificial Intelligence News"
    },
    {
        title: "DOGE usó ChatGPT para decidir qué subvenciones cancelar en Humanidades",
        summary: "La agencia DOGE utilizó prompts de ChatGPT para decidir qué subvenciones del National Endowment for the Humanities cancelar, sin análisis detallado de los proyectos.",
        link: "https://www.theverge.com/2026/03/07/doge-chatgpt-grants-cancellation",
        source: "The Verge"
    },
    {
        title: "Responsable de robótica de OpenAI dimite por el acuerdo con el Pentágono",
        summary: "Caitlin Kalinowski deja OpenAI protestando por el contrato de la empresa con el Pentágono y la falta de protecciones contra vigilancia sin orden judicial.",
        link: "https://www.theverge.com/ai-artificial-intelligence/886816/openai-reached-a-new-agreement-with-the-pentagon",
        source: "The Verge"
    },
    {
        title: "CISA ordena parchear 3 vulnerabilidades críticas de iOS explotadas durante 10 meses",
        summary: "El gobierno de EE.UU. ordena a agencias federales arreglar fallos de iOS que fueron explotados por grupos de hacking que usaban un kit avanzado de 23 exploits.",
        link: "https://arstechnica.com/security/2026/03/cisa-adds-3-ios-flaws-to-its-catalog-of-known-exploited-vulnerabilities/",
        source: "Ars Technica"
    },
    {
        title: "Caída masiva de Amazon: más de 20.000 reportes de problemas",
        summary: "Amazon experimenta una caída generalizada afectando su web, Prime Video y AWS, con más de 20.000 reportes en Downdetector.",
        link: "https://arstechnica.com/gadgets/2026/03/amazon-appears-to-be-down-with-over-20000-reported-problems/",
        source: "Ars Technica"
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

// Función para cargar noticias
async function fetchLatestNews() {
    console.log('Buscando nuevas noticias...');
    return newsData;
}

// Función para refrescar noticias
async function refreshNews() {
    try {
        const latestNews = await fetchLatestNews();
        newsData.length = 0;
        newsData.push(...latestNews);
        loadNews();
        updateLastUpdateTime();
        console.log('Noticias actualizadas correctamente');
    } catch (error) {
        console.error('Error al actualizar noticias:', error);
    }
}

// Efectos visuales
function initializeVisualEffects() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.background-grid');
        const speed = scrolled * 0.2;
        
        if (parallax) {
            parallax.style.transform = `translate(${speed}px, ${speed}px)`;
        }
    });
    
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

// Responsive
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

// Inicialización
function init() {
    console.log('Inicializando BladeRunner Tech News...');
    loadNews();
    updateLastUpdateTime();
    initializeVisualEffects();
    handleResponsive();
    
    setInterval(() => {
        console.log('Verificando actualizaciones...');
    }, 3600000);
    
    console.log('BladeRunner Tech News inicializado correctamente');
}

document.addEventListener('DOMContentLoaded', init);

window.BladeRunnerNews = {
    refreshNews,
    updateLastUpdateTime,
    newsData
};
