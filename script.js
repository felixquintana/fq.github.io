// Datos de noticias (11 March 2026) - 25 noticias
const newsData = [
    { title: "How PokÃ©mon Go is giving delivery robots an inch-perfect view of the world", summary: "PokÃ©mon Go was the worldâ€™s first augmented-reality megahit. Released in 2016 by the Google spinout Niantic, the AR twist on the juggernaut PokÃ©mon franchise fast became a global phenomenon. From C...", link: "https://www.technologyreview.com/2026/03/10/1134099/how-pokemon-go-is-helping-robots-deliver-pizza-on-time/", source: "MIT Tech Review" },
    { title: "How AI is turning the Iran conflict into theater", summary: "This story originally appeared in The Algorithm, our weekly newsletter on AI. To get stories like this in your inbox first,Â sign up here. â€œAnyone wanna host a get together in SF and pull this up on...", link: "https://www.technologyreview.com/2026/03/09/1134063/how-ai-is-turning-the-iran-conflict-into-theater/", source: "MIT Tech Review" },
    { title: "Prioritizing energy intelligence for sustainable growth", summary: "Loudoun County, Virginia, once known for its pastoral scenery and proximity to Washington, DC, has earned a more modern reputation in recent years: The area has the highest concentration of data cente...", link: "https://www.technologyreview.com/2026/03/10/1133972/prioritizing-energy-intelligence-for-sustainable-growth/", source: "MIT Tech" },
    { title: "Teens Are Using AI-Fueled â€˜Slander Pagesâ€™ to Mock Their Teachers", summary: "Viral student-run TikTok and Instagram accounts are using AI to make memes of school faculty comparing them to figures like Jeffrey Epstein and Benjamin Netanyahu.", link: "https://www.wired.com/story/teens-are-using-ai-fueled-slander-pages-to-mock-their-teachers/", source: "Wired" },
    { title: "Louis Theroux on the Manosphere: â€˜Itâ€™s Highly Profitable to Be a Dick on the Internetâ€™", summary: "With the release of his Netflix documentary Inside the Manosphere, the director talked to WIRED about why so many young men are drawn to toxic influencers.", link: "https://www.wired.com/story/louis-theroux-on-the-manosphere-its-highly-profitable-to-be-a-dick-on-the-internet/", source: "Wired" },
    { title: "Fujifilm Instax Evo Cinema Review: Retro Video Fun", summary: "The latest Instax camera embraces video with a retro cine design and effects-laden video clips that you can share online.", link: "https://www.wired.com/review/fujifilm-instax-evo-cinema/", source: "Wired" },
    { title: "Nick Clegg Doesnâ€™t Want to Talk About Superintelligence", summary: "After leaving Meta last year, the former deputy prime minister of the UK is charting a new path in the AI industry that has nothing to do with AGI.", link: "https://www.wired.com/story/nick-clegg-ai-startup-efekta-superintelligence/", source: "Wired" },
    { title: "Inside OpenAIâ€™s Race to Catch Up to Claude Code", summary: "Why is the biggest name in AI late to the AI coding revolution?", link: "https://www.wired.com/story/openai-codex-race-claude-code/", source: "Wired" },
    { title: "Pulling Espresso by Hand Is More Fun Than Pushing a Button", summary: "A manual espresso machine proves the best coffee-brewing tech is sometimes analog.", link: "https://www.wired.com/story/flair-signature/", source: "Wired" },
    { title: "Rally Orbital Massager Review: The Oscillating Revolution", summary: "There are some minor drawbacks, but the Rally massager stands out as the lone circular massager in a sea of percussive heads.", link: "https://www.wired.com/review/rally-orbital-massager/", source: "Wired" },
    { title: "A Certified Sleep Coach Shares the Sleep Week Deals Sheâ€™s Adding to Cart (2026)", summary: "From mattresses to sateen sheets, these exclusive deals on my personal picks can help you upgrade your sleep for less.", link: "https://www.wired.com/story/sleep-week-deals-2026/", source: "Wired" },
    { title: "Technology Is Reshaping Sleep Apnea Treatment", summary: "For decades, cumbersome CPAP machines have been the primary way to help people with sleep apnea. A range of new options has recently come into focus.", link: "https://www.wired.com/story/sleep-apnea-treatment-tech/", source: "Wired" },
    { title: "What to Do in Chicago If Youâ€™re Here for Business (2026)", summary: "Where to lock in, power down, and actually enjoy your business trip.", link: "https://www.wired.com/story/the-wired-guide-to-chicago-for-business-travelers/", source: "Wired" },
    { title: "Google report: AI is accelerating cloud cyberattacks, and one weak link stands out", summary: "Google's latest threat report warns that third-party tools are now prime targets for attackers - and businesses have only days to prepare defenses.", link: "https://www.zdnet.com/article/google-cloud-threat-report-third-party-software-ai-attacks/", source: "ZDNet" },
    { title: "How to turn off standby mode on your TV (and if it really cuts your power bill)", summary: "Does unplugging your TV overnight actually save you electricity? Yes, but there's a way to get similar results with less effort.", link: "https://www.zdnet.com/article/how-to-disable-standby-mode-on-your-tv/", source: "ZDNet" },
    { title: "This portable SSD with NFC unlock is the most intuitive iPhone accessory I've tested", summary: "The Lexar TouchLock Portable SSD uses the magic of NFC to unlock itself, and fits snugly on the back of most phones.", link: "https://www.zdnet.com/article/lexar-touchlock-portable-ssd-review/", source: "ZDNet" },
    { title: "The best free VPNs of 2026: Expert tested and reviewed", summary: "You don't have to compromise your privacy, security, or data when you use a free VPN -- as long as you pick the right one. Our guide lists the only trustworthy, free VPNs around today.", link: "https://www.zdnet.com/article/best-free-vpn/", source: "ZDNet" },
    { title: "'Icky and heartbreaking': The $2 per hour worker behind the OnlyFans boom", summary: "The BBC talks to a Philippines-based woman paid to pretend to be an OnlyFans star in online chats.", link: "https://www.bbc.com/news/articles/cq571g9gd4lo?at_medium=RSS&at_campaign=rss", source: "BBC Tech" },
    { title: "Meta urged to boost oversight of fake AI videos", summary: "Meta's advisers say its methods for policing AI videos are inadequate, especially at times of crisis.", link: "https://www.bbc.com/news/articles/c4gjyg0g78vo?at_medium=RSS&at_campaign=rss", source: "BBC Tech" },
    { title: "Fortnite-maker raising in-game currency prices 'to help pay the bills'", summary: "Epic Games said it had to increase the price as the cost of running the game had "gone up a lot"", link: "https://www.bbc.com/news/articles/c70kypnl4w8o?at_medium=RSS&at_campaign=rss", source: "BBC Tech" },
    { title: "Signal issues scam warning to users after hackers target officials", summary: "Signal says its systems are secure but it is taking reports of targeted attempts to hack some officials "very seriously".", link: "https://www.bbc.com/news/articles/cp85rpm0lq8o?at_medium=RSS&at_campaign=rss", source: "BBC Tech" },
    { title: "Feds take notice of iOS vulnerabilities exploited under mysterious circumstances", summary: "The long, strange trip of a large assembly of advanced iOS exploits.", link: "https://arstechnica.com/security/2026/03/cisa-adds-3-ios-flaws-to-its-catalog-of-known-exploited-vulnerabilities/", source: "Ars Technica" },
    { title: "Amazon appears to be down, with over 20,000 reported problems", summary: "Problems viewing products and checking out.", link: "https://arstechnica.com/gadgets/2026/03/amazon-appears-to-be-down-with-over-20000-reported-problems/", source: "Ars Technica" },
    { title: "Trump gets data center companies to pledge to pay for power generation", summary: "With no enforcement and questionable economics, it may not make a difference.", link: "https://arstechnica.com/tech-policy/2026/03/leading-ai-datacenter-companies-sign-pledge-to-buy-their-own-power/", source: "Ars Technica" },
    { title: "Downdetector, Speedtest sold to IT service-provider Accenture in $1.2B deal", summary: "Accenture plans to buy Ookla, which also includes RootMetrics and Ekahau.", link: "https://arstechnica.com/information-technology/2026/03/downdetector-speedtest-sold-to-it-service-provider-accenture-in-1-2b-deal/", source: "Ars Technica" },
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
