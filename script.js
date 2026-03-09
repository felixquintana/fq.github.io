// Datos de noticias (09 March 2026) - 13 noticias
const newsData = [
    { title: "How AI is turning the Iran conflict into theater", summary: "This story originally appeared in The Algorithm, our weekly newsletter on AI. To get stories like this in your inbox first,Â sign up here. â€œAnyone wanna host a get together in SF and pull this up on...", link: "https://www.technologyreview.com/2026/03/09/1134063/how-ai-is-turning-the-iran-conflict-into-theater/", source: "MIT Tech Review" },
    { title: "The usability imperative for securing digital asset devices", summary: "When Tony Fadell started working on the iPod, usability often trumped security. The result was an iterative process. Every time someone would find a security weakness or a way to hack the device, the ...", link: "https://www.technologyreview.com/2026/03/09/1132352/the-usability-imperative-for-securing-digital-asset-devices/", source: "MIT Tech" },
    { title: "Your Espresso Machine Doesnâ€™t Have to Be Fancy to Make Good Coffee", summary: "A former barista explains why your espresso machine doesn't have to be fancy to make quality coffee.", link: "https://www.wired.com/story/casabrews-5700-espresso-machine-java-base/", source: "Wired" },
    { title: "Our Favorite Wireless Headphones Are $60 Off", summary: "The Sony WH-1000XM6 get a noticeable markdown for a limited time.", link: "https://www.wired.com/story/sony-wh-1000xm6-deal-326/", source: "Wired" },
    { title: "Anthropic Sues Department of Defense Over Supply-Chain-Risk Designation", summary: "The Claude chatbot developer says the Trump administration overstepped by escalating a contract dispute into a federal ban on the companyâ€™s technology.", link: "https://www.wired.com/story/anthropic-sues-department-of-defense-over-supply-chain-risk-designation/", source: "Wired" },
    { title: "Best Base Layers (2026): Merino Wool, Synthetic, and More", summary: "Whether youâ€™re layering up for winter cold or looking for an ultralight summer system, Iâ€™ve tested and found the best base layers for all your outdoor adventures.", link: "https://www.wired.com/gallery/best-base-layers/", source: "Wired" },
    { title: "Feeld Was a Dating App for the Freaks. Now Some People Call It â€˜Normie Hellâ€™", summary: "The app that catered to unconventional kinks is gaining steam among daters with vanilla preferencesâ€”and some arenâ€™t happy about it.", link: "https://www.wired.com/story/feeld-was-a-dating-app-for-the-freaks-now-some-people-call-it-normie-hell/", source: "Wired" },
    { title: "The average tax scam victim loses $1,020 - here are 5 ways to protect yourself now", summary: "Even savvy people can fall victim to tax scams. Here are five ways to protect yourself before it's too late.", link: "https://www.zdnet.com/article/tax-scam-irs/", source: "ZDNet" },
    { title: "Amazon will give you a $200 gift card when you preorder the Galaxy S26, plus $400 off: Last chance", summary: "Preorder the new Samsung Galaxy S26, S26 Plus, or S26 Ultra from Amazon at a discount, and get a free gift card. We break down the details.", link: "https://www.zdnet.com/article/samsung-galaxy-s26-amazon-deal/", source: "ZDNet" },
    { title: "Anthropic sues US government for calling it a risk", summary: "The artificial intelligence company has been in a public fight with US government leaders over use of its tools like Claude", link: "https://www.bbc.com/news/articles/cq571w5vllxo?at_medium=RSS&at_campaign=rss", source: "BBC Tech" },
    { title: "Mayor Sadiq Khan invites embattled AI firm Anthropic to expand in London", summary: "The letter from London's mayor came as the US moved to designate the company a supply chain risk.", link: "https://www.bbc.com/news/articles/czx7915nn8qo?at_medium=RSS&at_campaign=rss", source: "BBC Tech" },
    { title: "Feds take notice of iOS vulnerabilities exploited under mysterious circumstances", summary: "The long, strange trip of a large assembly of advanced iOS exploits.", link: "https://arstechnica.com/security/2026/03/cisa-adds-3-ios-flaws-to-its-catalog-of-known-exploited-vulnerabilities/", source: "Ars Technica" },
    { title: "Amazon appears to be down, with over 20,000 reported problems", summary: "Problems viewing products and checking out.", link: "https://arstechnica.com/gadgets/2026/03/amazon-appears-to-be-down-with-over-20000-reported-problems/", source: "Ars Technica" },
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
    console.log('BladeRunner Tech News: ' + newsData.length + ' noticias');
    loadNews();
    updateLastUpdateTime();
}
document.addEventListener('DOMContentLoaded', init);
