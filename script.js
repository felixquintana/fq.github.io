// Datos de noticias (actualizado automaticamente - 09 March 2026)
const newsData = [
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
