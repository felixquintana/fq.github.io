// Datos de noticias (actualizado automaticamente - 09 March 2026)
const newsData = [
    {
        title: "2 - OpenAI presenta GPT-5 con capacidades agÃ©nticas avanzadas",
        summary: "El nuevo modelo de OpenAI promete revolutionize la automatizacion de tareas complejas.",
        link: "https://openai.com",
        source: "OpenAI"
    },
    {
        title: "Google Gemini supera benchmarks de razonamiento",
        summary: "El ultimo modelo de Google muestra mejoras significativas en tareas de razonamiento.",
        link: "https://blog.google",
        source: "Google"
    },
    {
        title: "Microsoft integra IA en Windows 12",
        summary: "Windows 12 llegara con Copilot integrado a nivel de sistema operativo.",
        link: "https://microsoft.com",
        source: "Microsoft"
    },
    {
        title: "Apple lanza IA local para iPhone",
        summary: "Apple Intelligence permitira ejecutar modelos LLM directamente en el dispositivo.",
        link: "https://apple.com",
        source: "Apple"
    },
    {
        title: "Meta releases Llama 4 de codigo abierto",
        summary: "El nuevo modelo de Meta rivaliza con los mejores modelos propietarios.",
        link: "https://meta.com",
        source: "Meta"
    },
    {
        title: "NVIDIA presenta chips IA 10x mas rapidos",
        summary: "La nueva arquitectura Blackwell promete saltos cuanticos en capacidad de calculo IA.",
        link: "https://nvidia.com",
        source: "NVIDIA"
    },
];
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Madrid' };
    return date.toLocaleDateString('es-ES', options);
}

function createNewsCard(news, index) {
    const card = document.createElement('article');
    card.className = 'news-card';
    card.style.animationDelay = (index * 0.1) + 's';
    card.innerHTML = '<a href="' + news.link + '" target="_blank" class="news-title">' + news.title + '</a><p class="news-summary">' + news.summary + '</p><a href="' + news.link + '" target="_blank" class="news-link">Leer mas</a>';
    return card;
}

function loadNews() {
    var container = document.getElementById('news-container');
    container.innerHTML = '';
    for (var i = 0; i < newsData.length; i++) {
        container.appendChild(createNewsCard(newsData[i], i));
    }
}

function updateLastUpdateTime() {
    document.getElementById('update-time').textContent = formatDate(new Date());
}

function init() {
    console.log('BladeRunner Tech News inicializado');
    loadNews();
    updateLastUpdateTime();
}

document.addEventListener('DOMContentLoaded', init);
window.BladeRunnerNews = { refreshNews: function(){}, updateLastUpdateTime: updateLastUpdateTime, newsData: newsData };
