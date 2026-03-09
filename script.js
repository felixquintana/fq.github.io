// Datos de noticias (actualizado automaticamente - 09 March 2026)
const newsData = [
    {
        title: "System.Xml.XmlElement",
        summary: "System.Xml.XmlElement",
        link: "https://www.theverge.com/gadgets/891339/google-pixel-watch-3-4-sony-wh-1000xm5-headphones-deal-sale",
        source: "The Verge"
    },
    {
        title: "System.Xml.XmlElement",
        summary: "System.Xml.XmlElement",
        link: "https://www.theverge.com/ai-artificial-intelligence/891377/anthropic-dod-lawsuit",
        source: "The Verge"
    },
    {
        title: "System.Xml.XmlElement",
        summary: "System.Xml.XmlElement",
        link: "https://www.theverge.com/entertainment/891378/battlefield-6-layoffs-ea",
        source: "The Verge"
    },
    {
        title: "System.Xml.XmlElement",
        summary: "System.Xml.XmlElement",
        link: "https://www.theverge.com/policy/891379/live-nation-antitrust-settlement-ticketmaster",
        source: "The Verge"
    },
    {
        title: "System.Xml.XmlElement",
        summary: "System.Xml.XmlElement",
        link: "https://www.theverge.com/transportation/891310/donut-lab-solid-state-battery-supercapacitor-test-result",
        source: "The Verge"
    },
    {
        title: "System.Xml.XmlElement",
        summary: "System.Xml.XmlElement",
        link: "https://www.theverge.com/tech/891299/yashica-tank-digital-point-shoot-camera-retro",
        source: "The Verge"
    },
    {
        title: "System.Xml.XmlElement",
        summary: "System.Xml.XmlElement",
        link: "https://www.theverge.com/tech/891352/x-grok-xai-edit-blocker-photo-toggle",
        source: "The Verge"
    },
    {
        title: "System.Xml.XmlElement",
        summary: "System.Xml.XmlElement",
        link: "https://www.theverge.com/gadgets/891304/switch-2-microsd-express-card-samsung-mario-day-deal-sale",
        source: "The Verge"
    },
    {
        title: "System.Xml.XmlElement",
        summary: "System.Xml.XmlElement",
        link: "https://www.theverge.com/podcast/890703/hasbro-toys-games-magic-exodus-ai-tariffs",
        source: "The Verge"
    },
    {
        title: "System.Xml.XmlElement",
        summary: "System.Xml.XmlElement",
        link: "https://www.theverge.com/games/890010/panic-gaming-big-walk-portland-house-house",
        source: "The Verge"
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
