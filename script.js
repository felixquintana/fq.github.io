// Datos de noticias (09 March 2026) - 38 noticias
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
    { title: "RoboLayout: Differentiable 3D Scene Generation for Embodied Agents", summary: "arXiv:2603.05522v1 Announce Type: new 
Abstract: Recent advances in vision language models (VLMs) have shown strong potential for spatial reasoning and 3D scene layout generation from open-ended langu...", link: "https://arxiv.org/abs/2603.05522", source: "ArXiv AI" },
    { title: "Real-Time AI Service Economy: A Framework for Agentic Computing Across the Continuum", summary: "arXiv:2603.05614v1 Announce Type: new 
Abstract: Real-time AI services increasingly operate across the device-edge-cloud continuum, where autonomous AI agents generate latency-sensitive workloads, orc...", link: "https://arxiv.org/abs/2603.05614", source: "ArXiv AI" },
    { title: "Reasoning Models Struggle to Control their Chains of Thought", summary: "arXiv:2603.05706v1 Announce Type: new 
Abstract: Chain-of-thought (CoT) monitoring is a promising tool for detecting misbehaviors and understanding the motivations of modern reasoning models. However,...", link: "https://arxiv.org/abs/2603.05706", source: "ArXiv AI" },
    { title: "Evolving Medical Imaging Agents via Experience-driven Self-skill Discovery", summary: "arXiv:2603.05860v1 Announce Type: new 
Abstract: Clinical image interpretation is inherently multi-step and tool-centric: clinicians iteratively combine visual evidence with patient context, quantify ...", link: "https://arxiv.org/abs/2603.05860", source: "ArXiv AI" },
    { title: "The World Won't Stay Still: Programmable Evolution for Agent Benchmarks", summary: "arXiv:2603.05910v1 Announce Type: new 
Abstract: LLM-powered agents fulfill user requests by interacting with environments, querying data, and invoking tools in a multi-turn process. Yet, most existin...", link: "https://arxiv.org/abs/2603.05910", source: "ArXiv AI" },
    { title: "DeepFact: Co-Evolving Benchmarks and Agents for Deep Research Factuality", summary: "arXiv:2603.05912v1 Announce Type: new 
Abstract: Search-augmented LLM agents can produce deep research reports (DRRs), but verifying claim-level factuality remains challenging. Existing fact-checkers ...", link: "https://arxiv.org/abs/2603.05912", source: "ArXiv AI" },
    { title: "An Interactive Multi-Agent System for Evaluation of New Product Concepts", summary: "arXiv:2603.05980v1 Announce Type: new 
Abstract: Product concept evaluation is a critical stage that determines strategic resource allocation and project success in enterprises. However, traditional e...", link: "https://arxiv.org/abs/2603.05980", source: "ArXiv AI" },
    { title: "Agentic LLM Planning via Step-Wise PDDL Simulation: An Empirical Characterisation", summary: "arXiv:2603.06064v1 Announce Type: new 
Abstract: Task planning, the problem of sequencing actions to reach a goal from an initial state, is a core capability requirement for autonomous robotic systems...", link: "https://arxiv.org/abs/2603.06064", source: "ArXiv AI" },
    { title: "Aggregative Semantics for Quantitative Bipolar Argumentation Frameworks", summary: "arXiv:2603.06067v1 Announce Type: new 
Abstract: Formal argumentation is being used increasingly in artificial intelligence as an effective and understandable way to model potentially conflicting piec...", link: "https://arxiv.org/abs/2603.06067", source: "ArXiv AI" },
    { title: "Offline Materials Optimization with CliqueFlowmer", summary: "arXiv:2603.06082v1 Announce Type: new 
Abstract: Recent advances in deep learning inspired neural network-based approaches to computational materials discovery (CMD). A plethora of problems in this fi...", link: "https://arxiv.org/abs/2603.06082", source: "ArXiv AI" },
    { title: "Conversational Demand Response: Bidirectional Aggregator-Prosumer Coordination through Agentic AI", summary: "arXiv:2603.06217v1 Announce Type: new 
Abstract: Residential demand response depends on sustained prosumer participation, yet existing coordination is either fully automated, or limited to one-way dis...", link: "https://arxiv.org/abs/2603.06217", source: "ArXiv AI" },
    { title: "Artificial Intelligence for Climate Adaptation: Reinforcement Learning for Climate Change-Resilient Transport", summary: "arXiv:2603.06278v1 Announce Type: new 
Abstract: Climate change is expected to intensify rainfall and, consequently, pluvial flooding, leading to increased disruptions in urban transportation systems ...", link: "https://arxiv.org/abs/2603.06278", source: "ArXiv AI" },
    { title: "The EpisTwin: A Knowledge Graph-Grounded Neuro-Symbolic Architecture for Personal AI", summary: "arXiv:2603.06290v1 Announce Type: new 
Abstract: Personal Artificial Intelligence is currently hindered by the fragmentation of user data across isolated silos. While Retrieval-Augmented Generation of...", link: "https://arxiv.org/abs/2603.06290", source: "ArXiv AI" },
    { title: "SAHOO: Safeguarded Alignment for High-Order Optimization Objectives in Recursive Self-Improvement", summary: "arXiv:2603.06333v1 Announce Type: new 
Abstract: Recursive self-improvement is moving from theory to practice: modern systems can critique, revise, and evaluate their own outputs, yet iterative self-m...", link: "https://arxiv.org/abs/2603.06333", source: "ArXiv AI" },
    { title: "Talk Freely, Execute Strictly: Schema-Gated Agentic AI for Flexible and Reproducible Scientific Workflows", summary: "arXiv:2603.06394v1 Announce Type: new 
Abstract: Large language models (LLMs) can now translate a researcher's plain-language goal into executable computation, yet scientific workflows demand determin...", link: "https://arxiv.org/abs/2603.06394", source: "ArXiv AI" },
    { title: "Boosting deep Reinforcement Learning using pretraining with Logical Options", summary: "arXiv:2603.06565v1 Announce Type: new 
Abstract: Deep reinforcement learning agents are often misaligned, as they over-exploit early reward signals. Recently, several symbolic approaches have addresse...", link: "https://arxiv.org/abs/2603.06565", source: "ArXiv AI" },
    { title: "Can LLM Aid in Solving Constraints with Inductive Definitions?", summary: "arXiv:2603.03668v1 Announce Type: cross 
Abstract: Solving constraints involving inductive (aka recursive) definitions is challenging. State-of-the-art SMT/CHC solvers and first-order logic provers pr...", link: "https://arxiv.org/abs/2603.03668", source: "ArXiv AI" },
    { title: "Exploring Human-in-the-Loop Themes in AI Application Development: An Empirical Thematic Analysis", summary: "arXiv:2603.05510v1 Announce Type: cross 
Abstract: Developing and deploying AI applications in organizations is challenging when human decision authority and oversight are underspecified across the sy...", link: "https://arxiv.org/abs/2603.05510", source: "ArXiv AI" },
    { title: "An Embodied Companion for Visual Storytelling", summary: "arXiv:2603.05511v1 Announce Type: cross 
Abstract: As artificial intelligence shifts from pure tool for delegation toward agentic collaboration, its use in the arts can shift beyond the exploration of...", link: "https://arxiv.org/abs/2603.05511", source: "ArXiv AI" },
    { title: "From Toil to Thought: Designing for Strategic Exploration and Responsible AI in Systematic Literature Reviews", summary: "arXiv:2603.05514v1 Announce Type: cross 
Abstract: Systematic Literature Reviews (SLRs) are fundamental to scientific progress, yet the process is hindered by a fragmented tool ecosystem that imposes ...", link: "https://arxiv.org/abs/2603.05514", source: "ArXiv AI" },
    { title: "Traversal-as-Policy: Log-Distilled Gated Behavior Trees as Externalized, Verifiable Policies for Safe, Robust, and Efficient Agents", summary: "arXiv:2603.05517v1 Announce Type: cross 
Abstract: Autonomous LLM agents fail because long-horizon policy remains implicit in model weights and transcripts, while safety is retrofitted post hoc. We pr...", link: "https://arxiv.org/abs/2603.05517", source: "ArXiv AI" },
    { title: "Molecular Representations for AI in Chemistry and Materials Science: An NLP Perspective", summary: "arXiv:2603.05525v1 Announce Type: cross 
Abstract: Deep learning, a subfield of machine learning, has gained importance in various application areas in recent years. Its growing popularity has led it ...", link: "https://arxiv.org/abs/2603.05525", source: "ArXiv AI" },
    { title: "Omni-C: Compressing Heterogeneous Modalities into a Single Dense Encoder", summary: "arXiv:2603.05528v1 Announce Type: cross 
Abstract: Recent multimodal systems often rely on separate expert modality encoders which cause linearly scaling complexity and computational overhead with add...", link: "https://arxiv.org/abs/2603.05528", source: "ArXiv AI" },
    { title: "Towards Neural Graph Data Management", summary: "arXiv:2603.05529v1 Announce Type: cross 
Abstract: While AI systems have made remarkable progress in processing unstructured text, structured data such as graphs stored in databases, continues to grow...", link: "https://arxiv.org/abs/2603.05529", source: "ArXiv AI" },
    { title: "On the Reliability of AI Methods in Drug Discovery: Evaluation of Boltz-2 for Structure and Binding Affinity Prediction", summary: "arXiv:2603.05532v1 Announce Type: cross 
Abstract: Despite continuing hype about the role of AI in drug discovery, no "AI-discovered drugs" have so far received regulatory approval. Here we assess one...", link: "https://arxiv.org/abs/2603.05532", source: "ArXiv AI" },
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
