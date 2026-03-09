// Datos de noticias (actualizado automaticamente - 09 March 2026)
const newsData = [
    {
        title: "OpenAI to acquire Promptfoo",
        summary: "OpenAI is acquiring Promptfoo, an AI security platform that helps enterprises identify and remediate vulnerabilities in AI systems during development.",
        link: "https://openai.com/index/openai-to-acquire-promptfoo",
        source: "OpenAI"
    },
    {
        title: "How Descript enables multilingual video dubbing at scale",
        summary: "Descript uses OpenAI models to scale multilingual video dubbing, optimizing translations for both meaning and timing so dubbed speech sounds natural across languages.",
        link: "https://openai.com/index/descript",
        source: "OpenAI"
    },
    {
        title: "Codex Security: now in research preview",
        summary: "Codex Security is an AI application security agent that analyzes project context to detect, validate, and patch complex vulnerabilities with higher confidence and less noise.",
        link: "https://openai.com/index/codex-security-now-in-research-preview",
        source: "OpenAI"
    },
    {
        title: "How Balyasny Asset Management built an AI research engine for investing",
        summary: "See how Balyasny built an AI research system with GPT-5.4, rigorous model evaluation, and agent workflows to transform investment analysis at scale.",
        link: "https://openai.com/index/balyasny-asset-management",
        source: "OpenAI"
    },
    {
        title: "GPT-5.4 Thinking System Card",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/gpt-5-4-thinking-system-card",
        source: "OpenAI"
    },
    {
        title: "Introducing GPT-5.4",
        summary: "Introducing GPT-5.4, OpenAIâ€™s most most capable and efficient frontier model for professional work, with state-of-the-art coding, computer use, tool search, and 1M-token context.",
        link: "https://openai.com/index/introducing-gpt-5-4",
        source: "OpenAI"
    },
    {
        title: "Reasoning models struggle to control their chains of thought, and thatâ€™s good",
        summary: "OpenAI introduces CoT-Control and finds reasoning models struggle to control their chains of thought, reinforcing monitorability as an AI safety safeguard.",
        link: "https://openai.com/index/reasoning-models-chain-of-thought-controllability",
        source: "OpenAI"
    },
    {
        title: "Ensuring AI use in education leads to opportunity",
        summary: "OpenAI shares new tools, certifications, and measurement resources to help schools and universities close AI capability gaps and expand opportunity.",
        link: "https://openai.com/index/ai-education-opportunity",
        source: "OpenAI"
    },
    {
        title: "The five AI value models driving business reinvention",
        summary: "Five AI value models show how leaders can sequence AI from workforce fluency to process reinvention and build durable business advantage.",
        link: "https://openai.com/index/the-five-ai-value-models-driving-business-reinvention",
        source: "OpenAI"
    },
    {
        title: "Introducing the Adoption news channel",
        summary: "Practical insights and frameworks to turn AI progress into business advantage",
        link: "https://openai.com/index/introducing-the-adoption-news-channel",
        source: "OpenAI"
    },
    {
        title: "Introducing ChatGPT for Excel and new financial data integrations",
        summary: "OpenAI introduces ChatGPT for Excel and new financial app integrations, powered by GPT-5.4 to accelerate modeling, research, and analysis in regulated environments.",
        link: "https://openai.com/index/chatgpt-for-excel",
        source: "OpenAI"
    },
    {
        title: "Extending single-minus amplitudes to gravitons",
        summary: "A new preprint extends single-minus amplitudes to gravitons, with GPT-5.2 Pro helping derive and verify nonzero graviton tree amplitudes in quantum gravity.",
        link: "https://openai.com/index/extending-single-minus-amplitudes-to-gravitons",
        source: "OpenAI"
    },
    {
        title: "Understanding AI and learning outcomes",
        summary: "OpenAI introduces the Learning Outcomes Measurement Suite to assess AIâ€™s impact on student learning across diverse educational environments over time.",
        link: "https://openai.com/index/understanding-ai-and-learning-outcomes",
        source: "OpenAI"
    },
    {
        title: "How Axios uses AI to help deliver high-impact local journalism",
        summary: "Axios COO Allison Murphy explains how the company uses AI to support local reporters, streamline newsroom workflows, and deliver high-impact local journalism at scale.",
        link: "https://openai.com/index/axios-allison-murphy",
        source: "OpenAI"
    },
    {
        title: "GPT-5.3 Instant: Smoother, more useful everyday conversations",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/gpt-5-3-instant",
        source: "OpenAI"
    },
    {
        title: "GPT-5.3 Instant System Card",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/gpt-5-3-instant-system-card",
        source: "OpenAI"
    },
    {
        title: "Our agreement with the Department of War",
        summary: "Details on OpenAIâ€™s contract with the Department of War, outlining safety red lines, legal protections, and how AI systems will be deployed in classified environments.",
        link: "https://openai.com/index/our-agreement-with-the-department-of-war",
        source: "OpenAI"
    },
    {
        title: "Scaling AI for everyone",
        summary: "Today weâ€™re announcing $110B in new investment at a $730B pre money valuation. This includes $30B from SoftBank, $30B from NVIDIA, and $50B from Amazon.",
        link: "https://openai.com/index/scaling-ai-for-everyone",
        source: "OpenAI"
    },
    {
        title: "Joint Statement from OpenAI and Microsoft",
        summary: "Microsoft and OpenAI continue to work closely across research, engineering, and product development, building on years of deep collaboration and shared success.",
        link: "https://openai.com/index/continuing-microsoft-partnership",
        source: "OpenAI"
    },
    {
        title: "OpenAI and Amazon announce strategic partnership",
        summary: "OpenAI and Amazon announce a strategic partnership bringing OpenAIâ€™s Frontier platform to AWS, expanding AI infrastructure, custom models, and enterprise AI agents.",
        link: "https://openai.com/index/amazon-partnership",
        source: "OpenAI"
    },
    {
        title: "Introducing the Stateful Runtime Environment for Agents in Amazon Bedrock",
        summary: "Stateful Runtime for Agents in Amazon Bedrock brings persistent orchestration, memory, and secure execution to multi-step AI workflows powered by OpenAI.",
        link: "https://openai.com/index/introducing-the-stateful-runtime-environment-for-agents-in-amazon-bedrock",
        source: "OpenAI"
    },
    {
        title: "An update on our mental health-related work",
        summary: "OpenAI shares updates on its mental health safety work, including parental controls, trusted contacts, improved distress detection, and recent litigation developments.",
        link: "https://openai.com/index/update-on-mental-health-related-work",
        source: "OpenAI"
    },
    {
        title: "Pacific Northwest National Laboratory and OpenAI partner to accelerate federal permitting",
        summary: "OpenAI and Pacific Northwest National Laboratory introduce DraftNEPABench, a new benchmark evaluating how AI coding agents can accelerate federal permittingâ€”showing potential to reduce NEPA drafting...",
        link: "https://openai.com/index/pacific-northwest-national-laboratory",
        source: "OpenAI"
    },
    {
        title: "OpenAI Codex and Figma launch seamless code-to-design experience",
        summary: "OpenAI and Figma launch a new Codex integration that connects code and design, enabling teams to move between implementation and the Figma canvas to iterate and ship faster.",
        link: "https://openai.com/index/figma-partnership",
        source: "OpenAI"
    },
    {
        title: "Disrupting malicious uses of AI | February 2026",
        summary: "Our latest threat report examines how malicious actors combine AI models with websites and social platformsâ€”and what it means for detection and defense.",
        link: "https://openai.com/index/disrupting-malicious-ai-uses",
        source: "OpenAI"
    },
    {
        title: "Arvind KC appointed Chief People Officer",
        summary: "OpenAI appoints Arvind KC as Chief People Officer to help scale the company, strengthen its culture, and lead how work evolves in the age of AI.",
        link: "https://openai.com/index/arvind-kc-chief-people-officer",
        source: "OpenAI"
    },
    {
        title: "Why we no longer evaluate SWE-bench Verified",
        summary: "SWE-bench Verified is increasingly contaminated and mismeasures frontier coding progress. Our analysis shows flawed tests and training leakage. We recommend SWE-bench Pro.",
        link: "https://openai.com/index/why-we-no-longer-evaluate-swe-bench-verified",
        source: "OpenAI"
    },
    {
        title: "OpenAI announces Frontier Alliance Partners",
        summary: "OpenAI announces Frontier Alliance Partners to help enterprises move from AI pilots to production with secure, scalable agent deployments.",
        link: "https://openai.com/index/frontier-alliance-partners",
        source: "OpenAI"
    },
    {
        title: "Our First Proof submissions",
        summary: "We share our AI modelâ€™s proof attempts for the First Proof math challenge, testing research-grade reasoning on expert-level problems.",
        link: "https://openai.com/index/first-proof-submissions",
        source: "OpenAI"
    },
    {
        title: "Advancing independent research on AI alignment",
        summary: "OpenAI commits $7.5M to The Alignment Project to fund independent AI alignment research, strengthening global efforts to address AGI safety and security risks.",
        link: "https://openai.com/index/advancing-independent-research-ai-alignment",
        source: "OpenAI"
    },
    {
        title: "Introducing OpenAI for India",
        summary: "OpenAI for India expands AI access across the countryâ€”building local infrastructure, powering enterprises, and advancing workforce skills.",
        link: "https://openai.com/index/openai-for-india",
        source: "OpenAI"
    },
    {
        title: "Introducing EVMbench",
        summary: "OpenAI and Paradigm introduce EVMbench, a benchmark evaluating AI agentsâ€™ ability to detect, patch, and exploit high-severity smart contract vulnerabilities.",
        link: "https://openai.com/index/introducing-evmbench",
        source: "OpenAI"
    },
    {
        title: "GPT-5.2 derives a new result in theoretical physics",
        summary: "A new preprint shows GPT-5.2 proposing a new formula for a gluon amplitude, later formally proved and verified by OpenAI and academic collaborators.",
        link: "https://openai.com/index/new-result-theoretical-physics",
        source: "OpenAI"
    },
    {
        title: "Introducing Lockdown Mode and Elevated Risk labels in ChatGPT",
        summary: "Introducing Lockdown Mode and Elevated Risk labels in ChatGPT to help organizations defend against prompt injection and AI-driven data exfiltration.",
        link: "https://openai.com/index/introducing-lockdown-mode-and-elevated-risk-labels-in-chatgpt",
        source: "OpenAI"
    },
    {
        title: "Beyond rate limits: scaling access to Codex and Sora",
        summary: "How OpenAI built a real-time access system combining rate limits, usage tracking, and credits to power continuous access to Sora and Codex.",
        link: "https://openai.com/index/beyond-rate-limits",
        source: "OpenAI"
    },
    {
        title: "Scaling social science research",
        summary: "GABRIEL is a new open-source toolkit from OpenAI that uses GPT to turn qualitative text and images into quantitative data, helping social scientists analyze research at scale.",
        link: "https://openai.com/index/scaling-social-science-research",
        source: "OpenAI"
    },
    {
        title: "Introducing GPT-5.3-Codex-Spark",
        summary: "Introducing GPT-5.3-Codex-Sparkâ€”our first real-time coding model. 15x faster generation, 128k context, now in research preview for ChatGPT Pro users.",
        link: "https://openai.com/index/introducing-gpt-5-3-codex-spark",
        source: "OpenAI"
    },
    {
        title: "Harness engineering: leveraging Codex in an agent-first world",
        summary: "By Ryan Lopopolo, Member of the Technical Staff",
        link: "https://openai.com/index/harness-engineering",
        source: "OpenAI"
    },
    {
        title: "Testing ads in ChatGPT",
        summary: "OpenAI begins testing ads in ChatGPT to support free access, with clear labeling, answer independence, strong privacy protections, and user control.",
        link: "https://openai.com/index/testing-ads-in-chatgpt",
        source: "OpenAI"
    },
    {
        title: "Bringing ChatGPT to GenAI.mil",
        summary: "OpenAI for Government announces the deployment of a custom ChatGPT on GenAI.mil, bringing secure, safety-forward AI to U.S. defense teams.",
        link: "https://openai.com/index/bringing-chatgpt-to-genaimil",
        source: "OpenAI"
    },
    {
        title: "Making AI work for everyone, everywhere: our approach to localization",
        summary: "OpenAI shares its approach to AI localization, showing how globally shared frontier models can be adapted to local languages, laws, and cultures without compromising safety.",
        link: "https://openai.com/index/our-approach-to-localization",
        source: "OpenAI"
    },
    {
        title: "GPT-5 lowers the cost of cell-free protein synthesis",
        summary: "An autonomous lab combining OpenAIâ€™s GPT-5 with Ginkgo Bioworksâ€™ cloud automation cut cell-free protein synthesis costs by 40% through closed-loop experimentation.",
        link: "https://openai.com/index/gpt-5-lowers-protein-synthesis-cost",
        source: "OpenAI"
    },
    {
        title: "Introducing Trusted Access for Cyber",
        summary: "OpenAI introduces Trusted Access for Cyber, a trust-based framework that expands access to frontier cyber capabilities while strengthening safeguards against misuse.",
        link: "https://openai.com/index/trusted-access-for-cyber",
        source: "OpenAI"
    },
    {
        title: "Introducing OpenAI Frontier",
        summary: "OpenAI Frontier is an enterprise platform for building, deploying, and managing AI agents with shared context, onboarding, permissions, and governance.",
        link: "https://openai.com/index/introducing-openai-frontier",
        source: "OpenAI"
    },
    {
        title: "Introducing GPT-5.3-Codex",
        summary: "GPT-5.3-Codex is a Codex-native agent that pairs frontier coding performance with general reasoning to support long-horizon, real-world technical work.",
        link: "https://openai.com/index/introducing-gpt-5-3-codex",
        source: "OpenAI"
    },
    {
        title: "GPT-5.3-Codex System Card",
        summary: "GPTâ€‘5.3-Codex is the most capable agentic coding model to date, combining the frontier coding performance of GPTâ€‘5.2-Codex with the reasoning and professional knowledge capabilities of GPTâ€‘5.2.",
        link: "https://openai.com/index/gpt-5-3-codex-system-card",
        source: "OpenAI"
    },
    {
        title: "Navigating health questions with ChatGPT",
        summary: "A family shares how ChatGPT helped them prepare for critical cancer treatment decisions for their son alongside expert guidance from his doctors.",
        link: "https://openai.com/index/navigating-health-questions",
        source: "OpenAI"
    },
    {
        title: "Unlocking the Codex harness: how we built the App Server",
        summary: "Learn how to embed the Codex agent using the Codex App Server, a bidirectional JSON-RPC API powering streaming progress, tool use, approvals, and diffs.",
        link: "https://openai.com/index/unlocking-the-codex-harness",
        source: "OpenAI"
    },
    {
        title: "VfL Wolfsburg turns ChatGPT into a club-wide capability",
        summary: "By focusing on people, not pilots, the Bundesliga club is scaling efficiency, creativity, and knowledgeâ€”without losing its football identity.",
        link: "https://openai.com/index/vfl-wolfsburg",
        source: "OpenAI"
    },
    {
        title: "The Sora feed philosophy",
        summary: "Discover the Sora feed philosophyâ€”built to spark creativity, foster connections, and keep experiences safe with personalized recommendations, parental controls, and strong guardrails.",
        link: "https://openai.com/index/sora-feed-philosophy",
        source: "OpenAI"
    },
    {
        title: "Snowflake and OpenAI partner to bring frontier intelligence to enterprise data",
        summary: "OpenAI and Snowflake partner in a $200M agreement to bring frontier intelligence into enterprise data, enabling AI agents and insights directly in Snowflake.",
        link: "https://openai.com/index/snowflake-partnership",
        source: "OpenAI"
    },
    {
        title: "Introducing the Codex app",
        summary: "Introducing the Codex app for macOSâ€”a command center for AI coding and software development with multiple agents, parallel workflows, and long-running tasks.",
        link: "https://openai.com/index/introducing-the-codex-app",
        source: "OpenAI"
    },
    {
        title: "Inside OpenAIâ€™s in-house data agent",
        summary: "How OpenAI built an in-house AI data agent that uses GPT-5, Codex, and memory to reason over massive datasets and deliver reliable insights in minutes.",
        link: "https://openai.com/index/inside-our-in-house-data-agent",
        source: "OpenAI"
    },
    {
        title: "Retiring GPT-4o, GPT-4.1, GPT-4.1 mini, and OpenAI o4-mini in ChatGPT",
        summary: "On February 13, 2026, alongside the previously announced retirementâ  of GPTâ€‘5 (Instant, Thinking, and Pro), we will retire GPTâ€‘4o, GPTâ€‘4.1, GPTâ€‘4.1 mini, and OpenAI o4-mini from ChatGPT. In ...",
        link: "https://openai.com/index/retiring-gpt-4o-and-older-models",
        source: "OpenAI"
    },
    {
        title: "Taisei Corporation shapes the next generation of talent with ChatGPT",
        summary: "Taisei Corporation uses ChatGPT Enterprise to support HR-led talent development and scale generative AI across its global construction business.",
        link: "https://openai.com/index/taisei",
        source: "OpenAI"
    },
    {
        title: "The next chapter for AI in the EU",
        summary: "OpenAI launches the EU Economic Blueprint 2.0 with new data, partnerships, and initiatives to accelerate AI adoption, skills, and growth across Europe.",
        link: "https://openai.com/index/the-next-chapter-for-ai-in-the-eu",
        source: "OpenAI"
    },
    {
        title: "EMEA Youth & Wellbeing Grant",
        summary: "Apply for the EMEA Youth & Wellbeing Grant, a â‚¬500,000 program funding NGOs and researchers advancing youth safety and wellbeing in the age of AI.",
        link: "https://openai.com/index/emea-youth-and-wellbeing-grant",
        source: "OpenAI"
    },
    {
        title: "Keeping your data safe when an AI agent clicks a link",
        summary: "Learn how OpenAI protects user data when AI agents open links, preventing URL-based data exfiltration and prompt injection with built-in safeguards.",
        link: "https://openai.com/index/ai-agent-link-safety",
        source: "OpenAI"
    },
    {
        title: "PVH reimagines the future of fashion with OpenAI",
        summary: "PVH Corp., parent company of Calvin Klein and Tommy Hilfiger, is adopting ChatGPT Enterprise to bring AI into fashion design, supply chain, and consumer engagement.",
        link: "https://openai.com/index/pvh-future-of-fashion",
        source: "OpenAI"
    },
    {
        title: "Introducing Prism",
        summary: "Prism is a free LaTeX-native workspace with GPT-5.2 built in, helping researchers write, collaborate, and reason in one place.",
        link: "https://openai.com/index/introducing-prism",
        source: "OpenAI"
    },
    {
        title: "Powering tax donations with AI powered personalized recommendations",
        summary: "TRUSTBANK partnered with Recursive to build Choice AI using OpenAI models, delivering personalized, conversational recommendations that simplify Furusato Nozei gift discovery. A multi-agent system hel...",
        link: "https://openai.com/index/trustbank",
        source: "OpenAI"
    },
    {
        title: "How Indeed uses AI to help evolve the job search",
        summary: "Indeedâ€™s CRO Maggie Hulce shares how AI is transforming job search, recruiting, and talent acquisition for employers and job seekers.",
        link: "https://openai.com/index/indeed-maggie-hulce",
        source: "OpenAI"
    },
    {
        title: "Unrolling the Codex agent loop",
        summary: "A technical deep dive into the Codex agent loop, explaining how Codex CLI orchestrates models, tools, prompts, and performance using the Responses API.",
        link: "https://openai.com/index/unrolling-the-codex-agent-loop",
        source: "OpenAI"
    },
    {
        title: "Scaling PostgreSQL to power 800 million ChatGPT users",
        summary: "An inside look at how OpenAI scaled PostgreSQL to millions of queries per second using replicas, caching, rate limiting, and workload isolation.",
        link: "https://openai.com/index/scaling-postgresql",
        source: "OpenAI"
    },
    {
        title: "Inside Praktika's conversational approach to language learning",
        summary: "How Praktika uses GPT-4.1 and GPT-5.2 to build adaptive AI tutors that personalize lessons, track progress, and help learners achieve real-world language fluency",
        link: "https://openai.com/index/praktika",
        source: "OpenAI"
    },
    {
        title: "Inside GPT-5 for Work: How Businesses Use GPT-5",
        summary: "A data-driven report on how workers across industries use ChatGPTâ€”covering adoption trends, top tasks, departmental patterns, and the future of AI at work.",
        link: "https://openai.com/business/guides-and-resources/chatgpt-usage-and-adoption-patterns-at-work",
        source: "OpenAI"
    },
    {
        title: "How Higgsfield turns simple ideas into cinematic social videos",
        summary: "Discover how Higgsfield gives creators cinematic, social-first video output from simple inputs using OpenAI GPT-4.1, GPT-5, and Sora 2.",
        link: "https://openai.com/index/higgsfield",
        source: "OpenAI"
    },
    {
        title: "How countries can end the capability overhang",
        summary: "Our latest report reveals stark differences in advanced AI adoption across countries and outlines new initiatives to help nations capture productivity gains from AI.",
        link: "https://openai.com/index/how-countries-can-end-the-capability-overhang",
        source: "OpenAI"
    },
    {
        title: "Introducing Edu for Countries",
        summary: "Edu for Countries is a new OpenAI initiative helping governments use AI to modernize education systems and build future-ready workforces.",
        link: "https://openai.com/index/edu-for-countries",
        source: "OpenAI"
    },
    {
        title: "Horizon 1000: Advancing AI for primary healthcare",
        summary: "OpenAI and the Gates Foundation launch Horizon 1000, a $50M pilot advancing AI capabilities for healthcare in Africa. The initiative aims to reach 1,000 clinics by 2028.",
        link: "https://openai.com/index/horizon-1000",
        source: "OpenAI"
    },
    {
        title: "Stargate Community",
        summary: "Stargate Community plans detail a community-first approach to AI infrastructure, using locally tailored plans shaped by community input, energy needs, and workforce priorities.",
        link: "https://openai.com/index/stargate-community",
        source: "OpenAI"
    },
    {
        title: "Cisco and OpenAI redefine enterprise engineering with AI agents",
        summary: "Cisco and OpenAI redefine enterprise engineering with Codex, an AI software agent embedded in workflows to speed builds, automate defect fixes, and enable AI-native development.",
        link: "https://openai.com/index/cisco",
        source: "OpenAI"
    },
    {
        title: "ServiceNow powers actionable enterprise AI with OpenAI",
        summary: "ServiceNow expands access to OpenAI frontier models to power AI-driven enterprise workflows, summarization, search, and voice across the ServiceNow Platform.",
        link: "https://openai.com/index/servicenow-powers-actionable-enterprise-ai-with-openai",
        source: "OpenAI"
    },
    {
        title: "Our approach to age prediction",
        summary: "ChatGPT is rolling out age prediction to estimate if accounts are under or over 18, applying safeguards for teens and refining accuracy over time.",
        link: "https://openai.com/index/our-approach-to-age-prediction",
        source: "OpenAI"
    },
    {
        title: "AI for self empowerment",
        summary: "How AI can expand human agency by closing the capability overhangâ€”helping people, businesses, and countries unlock real productivity, growth, and opportunity.",
        link: "https://openai.com/index/ai-for-self-empowerment",
        source: "OpenAI"
    },
    {
        title: "A business that scales with the value of intelligence",
        summary: "OpenAIâ€™s business model scales with intelligenceâ€”spanning subscriptions, API, ads, commerce, and computeâ€”driven by deepening ChatGPT adoption.",
        link: "https://openai.com/index/a-business-that-scales-with-the-value-of-intelligence",
        source: "OpenAI"
    },
    {
        title: "The truth left out from Elon Muskâ€™s recent court filing",
        summary: "The truth left out from Elon Muskâ€™s recent court filing.",
        link: "https://openai.com/index/the-truth-elon-left-out",
        source: "OpenAI"
    },
    {
        title: "Our approach to advertising and expanding access to ChatGPT",
        summary: "OpenAI plans to test advertising in the U.S. for ChatGPTâ€™s free and Go tiers to expand affordable access to AI worldwide, while protecting privacy, trust, and answer quality.",
        link: "https://openai.com/index/our-approach-to-advertising-and-expanding-access",
        source: "OpenAI"
    },
    {
        title: "Introducing ChatGPT Go, now available worldwide",
        summary: "ChatGPT Go is now available worldwide, offering expanded access to GPT-5.2 Instant, higher usage limits, and longer memoryâ€”making advanced AI more affordable globally.",
        link: "https://openai.com/index/introducing-chatgpt-go",
        source: "OpenAI"
    },
    {
        title: "Investing in Merge Labs",
        summary: "OpenAI is investing in Merge Labs to support new brain computer interfaces that bridge biological and artificial intelligence to maximize human ability, agency, and experience.",
        link: "https://openai.com/index/investing-in-merge-labs",
        source: "OpenAI"
    },
    {
        title: "Strengthening the U.S. AI supply chain through domestic manufacturing",
        summary: "OpenAI launches a new RFP to strengthen the U.S. AI supply chain by accelerating domestic manufacturing, creating jobs, and scaling AI infrastructure.",
        link: "https://openai.com/index/strengthening-the-us-ai-supply-chain",
        source: "OpenAI"
    },
    {
        title: "OpenAI partners with Cerebrasâ€¯",
        summary: "OpenAI partners with Cerebras to add 750MW of high-speed AI compute, reducing inference latency and making ChatGPT faster for real-time AI workloads.",
        link: "https://openai.com/index/cerebras-partnership",
        source: "OpenAI"
    },
    {
        title: "Zenken boosts a lean sales team with ChatGPT Enterprise",
        summary: "By rolling out ChatGPT Enterprise company-wide, Zenken has boosted sales performance, cut preparation time, and increased proposal success rates. AI-supported workflows are helping a lean team deliver...",
        link: "https://openai.com/index/zenken",
        source: "OpenAI"
    },
    {
        title: "OpenAIâ€™s Raising Concerns Policy",
        summary: "Weâ€™re publishing our Raising Concerns Policy, which protects employeesâ€™ rights to make protected disclosures.",
        link: "https://openai.com/index/openai-raising-concerns-policy",
        source: "OpenAI"
    },
    {
        title: "OpenAI and SoftBank Group partner with SB Energy",
        summary: "OpenAI and SoftBank Group partner with SB Energy to develop multi-gigawatt AI data center campuses, including a 1.2 GW Texas facility supporting the Stargate initiative.",
        link: "https://openai.com/index/stargate-sb-energy-partnership",
        source: "OpenAI"
    },
    {
        title: "Datadog uses Codex for system-level code review",
        summary: "OpenAI and Datadog brand graphic with the OpenAI wordmark on the left, the Datadog logo on the right, and a central abstract brown fur-like texture panel on a white background.",
        link: "https://openai.com/index/datadog",
        source: "OpenAI"
    },
    {
        title: "Netomiâ€™s lessons for scaling agentic systems into the enterprise",
        summary: "How Netomi scales enterprise AI agents using GPT-4.1 and GPT-5.2â€”combining concurrency, governance, and multi-step reasoning for reliable production workflows.",
        link: "https://openai.com/index/netomi",
        source: "OpenAI"
    },
    {
        title: "OpenAI for Healthcare",
        summary: "OpenAI for Healthcare enables secure, enterprise-grade AI that supports HIPAA complianceâ€”reducing administrative burden and supporting clinical workflows.",
        link: "https://openai.com/index/openai-for-healthcare",
        source: "OpenAI"
    },
    {
        title: "How Tolan builds voice-first AI with GPT-5.1",
        summary: "Tolan built a voice-first AI companion with GPT-5.1, combining low-latency responses, real-time context reconstruction, and memory-driven personalities for natural conversations.",
        link: "https://openai.com/index/tolan",
        source: "OpenAI"
    },
    {
        title: "Introducing ChatGPT Health",
        summary: "ChatGPT Health is a dedicated experience that securely connects your health data and apps, with privacy protections and a physician-informed design.",
        link: "https://openai.com/index/introducing-chatgpt-health",
        source: "OpenAI"
    },
    {
        title: "Announcing OpenAI Grove Cohort 2",
        summary: "Applications are now open for OpenAI Grove Cohort 2, a 5-week founder program designed for individuals at any stage, from pre-idea to product. Participants receive $50K in API credits, early access to...",
        link: "https://openai.com/index/openai-grove",
        source: "OpenAI"
    },
    {
        title: "Continuously hardening ChatGPT Atlas against prompt injection",
        summary: "OpenAI is strengthening ChatGPT Atlas against prompt injection attacks using automated red teaming trained with reinforcement learning. This proactive discover-and-patch loop helps identify novel expl...",
        link: "https://openai.com/index/hardening-atlas-against-prompt-injection",
        source: "OpenAI"
    },
    {
        title: "One in a million: celebrating the customers shaping AIâ€™s future",
        summary: "More than one million customers around the world now use OpenAI to empower their teams and unlock new opportunities. This post highlights how companies like PayPal, Virgin Atlantic, BBVA, Cisco, Moder...",
        link: "https://openai.com/index/one-in-a-million-customers",
        source: "OpenAI"
    },
    {
        title: "Evaluating chain-of-thought monitorability",
        summary: "OpenAI introduces a new framework and evaluation suite for chain-of-thought monitorability, covering 13 evaluations across 24 environments. Our findings show that monitoring a modelâ€™s internal reaso...",
        link: "https://openai.com/index/evaluating-chain-of-thought-monitorability",
        source: "OpenAI"
    },
    {
        title: "Updating our Model Spec with teen protections",
        summary: "OpenAI is updating its Model Spec with new Under-18 Principles that define how ChatGPT should support teens with safe, age-appropriate guidance grounded in developmental science. The update strengthen...",
        link: "https://openai.com/index/updating-model-spec-with-teen-protections",
        source: "OpenAI"
    },
    {
        title: "AI literacy resources for teens and parents",
        summary: "OpenAI shares new AI literacy resources to help teens and parents use ChatGPT thoughtfully, safely, and with confidence. The guides include expert-vetted tips for responsible use, critical thinking, h...",
        link: "https://openai.com/index/ai-literacy-resources-for-teens-and-parents",
        source: "OpenAI"
    },
    {
        title: "Deepening our collaboration with the U.S. Department of Energy",
        summary: "OpenAI and the U.S. Department of Energy have signed a memorandum of understanding to deepen collaboration on AI and advanced computing in support of scientific discovery. The agreement builds on ongo...",
        link: "https://openai.com/index/us-department-of-energy-collaboration",
        source: "OpenAI"
    },
    {
        title: "Introducing GPT-5.2-Codex",
        summary: "GPT-5.2-Codex is OpenAIâ€™s most advanced coding model, offering long-horizon reasoning, large-scale code transformations, and enhanced cybersecurity capabilities.",
        link: "https://openai.com/index/introducing-gpt-5-2-codex",
        source: "OpenAI"
    },
    {
        title: "Addendum to GPT-5.2 System Card: GPT-5.2-Codex",
        summary: "This system card outlines the comprehensive safety measures implemented for GPTâ€‘5.2-Codex. It details both model-level mitigations, such as specialized safety training for harmful tasks and prompt i...",
        link: "https://openai.com/index/gpt-5-2-codex-system-card",
        source: "OpenAI"
    },
    {
        title: "Introducing GPT-5.2-Codex",
        summary: "GPT-5.2-Codex is OpenAIâ€™s most advanced coding model, offering long-horizon reasoning, large-scale code transformations, and enhanced cybersecurity capabilities.",
        link: "https://openai.com/index/gpt-5-2-codex",
        source: "OpenAI"
    },
    {
        title: "Introducing OpenAI Academy for News Organizations",
        summary: "OpenAI is launching the OpenAI Academy for News Organizations, a new learning hub built with the American Journalism Project and The Lenfest Institute to help newsrooms use AI effectively. The Academy...",
        link: "https://openai.com/index/openai-academy-for-news-organizations",
        source: "OpenAI"
    },
    {
        title: "The state of enterprise AI",
        summary: "A data-driven look at enterprise AI adoption, showing how organizations move from experimentation to real productivity gains and new capabilities.",
        link: "https://openai.com/business/guides-and-resources/the-state-of-enterprise-ai-2025-report",
        source: "OpenAI"
    },
    {
        title: "Developers can now submit apps to ChatGPT",
        summary: "Developers can now submit apps for review and publication in ChatGPT, with approved apps appearing in a new in-product directory for easy discovery. Updated tools, guidelines, and the Apps SDK help de...",
        link: "https://openai.com/index/developers-can-now-submit-apps-to-chatgpt",
        source: "OpenAI"
    },
    {
        title: "Evaluating AIâ€™s ability to perform scientific research tasks",
        summary: "OpenAI introduces FrontierScience, a benchmark testing AI reasoning in physics, chemistry, and biology to measure progress toward real scientific research.",
        link: "https://openai.com/index/frontierscience",
        source: "OpenAI"
    },
    {
        title: "Measuring AIâ€™s capability to accelerate biological research",
        summary: "OpenAI introduces a real-world evaluation framework to measure how AI can accelerate biological research in the wet lab. Using GPT-5 to optimize a molecular cloning protocol, the work explores both th...",
        link: "https://openai.com/index/accelerating-biological-research-in-the-wet-lab",
        source: "OpenAI"
    },
    {
        title: "The new ChatGPT Images is here",
        summary: "The new ChatGPT Images is powered by our flagship image generation model, delivering more precise edits, consistent details, and image generation up to 4Ã— faster. The upgraded model is rolling out to...",
        link: "https://openai.com/index/new-chatgpt-images-is-here",
        source: "OpenAI"
    },
    {
        title: "BBVA and OpenAI collaborate to transform global banking",
        summary: "BBVA is expanding its work with OpenAI through a multi-year AI transformation program, rolling out ChatGPT Enterprise to all 120,000 employees. Together, the companies will develop AI solutions that e...",
        link: "https://openai.com/index/bbva-collaboration-expansion",
        source: "OpenAI"
    },
    {
        title: "BNY builds â€œAI for everyone, everywhereâ€ with OpenAI",
        summary: "BNY is using OpenAI technology to expand AI adoption enterprise-wide. Through its Eliza platform, 20,000+ employees are building AI agents that enhance efficiency and improve client outcomes.",
        link: "https://openai.com/index/bny",
        source: "OpenAI"
    },
    {
        title: "How We Used Codex to Ship Sora for Android in 28 Days",
        summary: "OpenAI shipped Sora for Android in 28 days using Codex. AI-assisted planning, translation, and parallel coding workflows helped a nimble team deliver rapid, reliable development.",
        link: "https://openai.com/index/shipping-sora-for-android-with-codex",
        source: "OpenAI"
    },
    {
        title: "Advancing science and math with GPT-5.2",
        summary: "GPT-5.2 is OpenAIâ€™s strongest model yet for math and science, setting new state-of-the-art results on benchmarks like GPQA Diamond and FrontierMath. This post shows how those gains translate into re...",
        link: "https://openai.com/index/gpt-5-2-for-science-and-math",
        source: "OpenAI"
    },
    {
        title: "Introducing GPT-5.2",
        summary: "GPT-5.2 is our most advanced frontier model for everyday professional work, with state-of-the-art reasoning, long-context understanding, coding, and vision. Use it in ChatGPT and the OpenAI API to pow...",
        link: "https://openai.com/index/introducing-gpt-5-2",
        source: "OpenAI"
    },
    {
        title: "Update to GPT-5 System Card: GPT-5.2",
        summary: "GPT-5.2 is the latest model family in the GPT-5 series. The comprehensive safety mitigation approach for these models is largely the same as that described in the GPT-5 System Card and GPT-5.1 System ...",
        link: "https://openai.com/index/gpt-5-system-card-update-gpt-5-2",
        source: "OpenAI"
    },
    {
        title: "Ten years",
        summary: "OpenAI reflects on ten years of progress, from early research breakthroughs to widely used AI systems that reshaped whatâ€™s possible. We share lessons from the past decade and why we remain optimisti...",
        link: "https://openai.com/index/ten-years",
        source: "OpenAI"
    },
    {
        title: "The Walt Disney Company and OpenAI reach landmark agreement to bring beloved characters to Sora",
        summary: "Disney and OpenAI have reached an agreement to bring more than 200 Disney, Marvel, Pixar and Star Wars characters to Sora for fan-inspired short videos. The agreement emphasizes responsible AI in ente...",
        link: "https://openai.com/index/disney-sora-agreement",
        source: "OpenAI"
    },
    {
        title: "Increasing revenue 300% by bringing AI to SMBs",
        summary: "Discover how Podium used OpenAIâ€™s GPT-5 to build â€œJerry,â€ an AI teammate driving 300% growth and transforming how Main Street businesses serve customers.",
        link: "https://openai.com/index/podium",
        source: "OpenAI"
    },
    {
        title: "Strengthening cyber resilience as AI capabilities advance",
        summary: "OpenAI is investing in stronger safeguards and defensive capabilities as AI models become more powerful in cybersecurity. We explain how we assess risk, limit misuse, and work with the security commun...",
        link: "https://openai.com/index/strengthening-cyber-resilience",
        source: "OpenAI"
    },
    {
        title: "How Scout24 is building the next generation of real-estate search with AI",
        summary: "Scout24 has created a GPT-5 powered conversational assistant that reimagines real-estate search, guiding users with clarifying questions, summaries, and tailored listing recommendations.",
        link: "https://openai.com/index/scout24",
        source: "OpenAI"
    },
    {
        title: "OpenAI co-founds Agentic AI Foundation, donates AGENTS.md",
        summary: "OpenAI co-founds the Agentic AI Foundation under the Linux Foundation and donates AGENTS.md to support open, interoperable standards for safe agentic AI.",
        link: "https://openai.com/index/agentic-ai-foundation",
        source: "OpenAI"
    },
    {
        title: "Launching our first OpenAI Certifications courses",
        summary: "Learn how OpenAIâ€™s new certifications and AI Foundations courses help people build real-world AI skills, boost career opportunities, and prepare for the future of work.",
        link: "https://openai.com/index/openai-certificate-courses",
        source: "OpenAI"
    },
    {
        title: "Building AI fluency at scale with ChatGPT Enterprise",
        summary: "Commonwealth Bank of Australia partners with OpenAI to roll out ChatGPT Enterprise to 50,000 employees, building AI fluency at scale to improve customer service and fraud response.",
        link: "https://openai.com/index/commonwealth-bank-of-australia",
        source: "OpenAI"
    },
    {
        title: "OpenAI appoints Denise Dresser as Chief Revenue Officer",
        summary: "Denise Dresser is joining as Chief Revenue Officer, overseeing OpenAIâ€™s global revenue strategy across enterprise and customer success. She will help more businesses put AI to work in their day-to-d...",
        link: "https://openai.com/index/openai-appoints-denise-dresser",
        source: "OpenAI"
    },
    {
        title: "Bringing powerful AI to millions across Europe with Deutsche Telekom",
        summary: "OpenAI is collaborating with Deutsche Telekom to bring advanced, multilingual AI experiences to millions of people across Europe. ChatGPT Enterprise will also be deployed to help employees at Deutsche...",
        link: "https://openai.com/index/deutsche-telekom-collaboration",
        source: "OpenAI"
    },
    {
        title: "Instacart and OpenAI partner on AI shopping experiences",
        summary: "OpenAI and Instacart are deepening their longstanding partnership by bringing the first fully integrated grocery shopping and Instant Checkout payment app to ChatGPT.",
        link: "https://openai.com/index/instacart-partnership",
        source: "OpenAI"
    },
    {
        title: "The state of enterprise AI",
        summary: "Key findings from OpenAIâ€™s enterprise data show accelerating AI adoption, deeper integration, and measurable productivity gains across industries in 2025.",
        link: "https://openai.com/index/the-state-of-enterprise-ai-2025-report",
        source: "OpenAI"
    },
    {
        title: "How Virgin Atlantic uses AI to enhance every step of travel",
        summary: "Virgin Atlantic CFO Oliver Byers shares how the airline is using AI to speed up development, improve decision-making, and elevate customer experience.",
        link: "https://openai.com/index/virgin-atlantic-oliver-byers",
        source: "OpenAI"
    },
    {
        title: "Introducing OpenAI for Australia",
        summary: "OpenAI is launching OpenAI for Australia to build sovereign AI infrastructure, upskill more than 1.5 million workers, and accelerate innovation across the countryâ€™s growing AI ecosystem.",
        link: "https://openai.com/global-affairs/openai-for-australia",
        source: "OpenAI"
    },
    {
        title: "How confessions can keep language models honest",
        summary: "OpenAI researchers are testing â€œconfessions,â€ a method that trains models to admit when they make mistakes or act undesirably, helping improve AI honesty, transparency, and trust in model outputs.",
        link: "https://openai.com/index/how-confessions-can-keep-language-models-honest",
        source: "OpenAI"
    },
    {
        title: "OpenAI to acquire Neptune",
        summary: "OpenAI is acquiring Neptune to deepen visibility into model behavior and strengthen the tools researchers use to track experiments and monitor training.",
        link: "https://openai.com/index/openai-to-acquire-neptune",
        source: "OpenAI"
    },
    {
        title: "Announcing the initial People-First AI Fund grantees",
        summary: "The OpenAI Foundation announces the initial recipients of the People-First AI Fund, awarding $40.5M in unrestricted grants to 208 nonprofits supporting community innovation and opportunity.",
        link: "https://openai.com/index/people-first-ai-fund-grantees",
        source: "OpenAI"
    },
    {
        title: "Inside Mirakl's agentic commerce vision",
        summary: "Mirakl is redefining commerce through AI agents and ChatGPT Enterpriseâ€”achieving faster documentation, smarter customer support, and building toward agent-native commerce with Mirakl Nexus.",
        link: "https://openai.com/index/mirakl",
        source: "OpenAI"
    },
    {
        title: "Funding grants for new research into AI and mental health",
        summary: "OpenAI is awarding up to $2 million in grants for research at the intersection of AI and mental health. The program supports projects that study real-world risks, benefits, and applications to improve...",
        link: "https://openai.com/index/ai-mental-health-research-grants",
        source: "OpenAI"
    },
    {
        title: "OpenAI and NORAD team up to bring new magic to â€œNORAD Tracks Santaâ€",
        summary: "OpenAI and NORAD are bringing new magic to â€œNORAD Tracks Santaâ€ with three ChatGPT holiday tools that let families create festive elves, toy coloring pages, and custom Christmas stories.",
        link: "https://openai.com/index/norad-holiday-collaboration",
        source: "OpenAI"
    },
    {
        title: "Accenture and OpenAI accelerate enterprise AI success",
        summary: "Accenture and OpenAI are collaborating to help enterprises bring agentic AI capabilities into the core of their business and unlock new levels of growth.",
        link: "https://openai.com/index/accenture-partnership",
        source: "OpenAI"
    },
    {
        title: "OpenAI takes an ownership stake in Thrive Holdings to accelerate enterprise AI adoption",
        summary: "OpenAI takes an ownership stake in Thrive Holdings to accelerate enterprise AI adoption, embedding frontier research and engineering directly into accounting and IT services to boost speed, accuracy, ...",
        link: "https://openai.com/index/thrive-holdings",
        source: "OpenAI"
    },
    {
        title: "Mixpanel security incident: what OpenAI users need to know",
        summary: "OpenAI shares details about a Mixpanel security incident involving limited API analytics data. No API content, credentials, or payment details were exposed. Learn what happened and how weâ€™re protect...",
        link: "https://openai.com/index/mixpanel-incident",
        source: "OpenAI"
    },
    {
        title: "Expanding data residency access to business customers worldwide",
        summary: "OpenAI expands data residency for ChatGPT Enterprise, ChatGPT Edu, and the API Platform, enabling eligible customers to store data at rest in-region.",
        link: "https://openai.com/index/expanding-data-residency-access-to-business-customers-worldwide",
        source: "OpenAI"
    },
    {
        title: "Our approach to mental health-related litigation",
        summary: "Weâ€™re sharing our approach to mental health-related litigation. O handle sensitive cases with care, transparency, and respect while continuing to strengthen safety and support in ChatGPT.",
        link: "https://openai.com/index/mental-health-litigation-approach",
        source: "OpenAI"
    },
    {
        title: "Inside JetBrainsâ€”the company reshaping how the world writes code",
        summary: "JetBrains is integrating GPT-5 across its coding tools, helping millions of developers design, reason, and build software faster.",
        link: "https://openai.com/index/jetbrains-2025",
        source: "OpenAI"
    },
    {
        title: "Introducing shopping research in ChatGPT",
        summary: "Shopping research in ChatGPT helps you explore, compare, and discover products with personalized buyerâ€™s guides that simplify decision-making",
        link: "https://openai.com/index/chatgpt-shopping-research",
        source: "OpenAI"
    },
    {
        title: "GPT-5 and the future of mathematical discovery",
        summary: "UCLA Professor Ernest Ryu and GPT-5 solved a key question in optimization theory, showcasing AIâ€™s role in accelerating mathematical discovery.",
        link: "https://openai.com/index/gpt-5-mathematical-discovery",
        source: "OpenAI"
    },
    {
        title: "OpenAI and Foxconn collaborate to strengthen U.S. manufacturing across the AI supply chain",
        summary: "OpenAI and Foxconn are collaborating to design and manufacture next-generation AI infrastructure hardware in the U.S. The partnership will develop multiple generations of data-center systems, strength...",
        link: "https://openai.com/index/openai-and-foxconn-collaborate",
        source: "OpenAI"
    },
    {
        title: "Helping 1,000 small businesses build with AI",
        summary: "OpenAI is partnering with DoorDash, SCORE, and local organizations to help 1,000 small businesses build with AI. The Small Business AI Jam gives Main Street business owners hands-on tools and training...",
        link: "https://openai.com/index/small-business-ai-jam",
        source: "OpenAI"
    },
    {
        title: "Early experiments in accelerating science with GPT-5",
        summary: "OpenAI introduces the first research cases showing how GPT-5 accelerates scientific progress across math, physics, biology, and computer science. Explore how AI and researchers collaborate to generate...",
        link: "https://openai.com/index/accelerating-science-gpt-5",
        source: "OpenAI"
    },
    {
        title: "Strengthening our safety ecosystem with external testing",
        summary: "OpenAI works with independent experts to evaluate frontier AI systems. Third-party testing strengthens safety, validates safeguards, and increases transparency in how we assess model capabilities and ...",
        link: "https://openai.com/index/strengthening-safety-with-external-testing",
        source: "OpenAI"
    },
    {
        title: "How evals drive the next chapter in AI for businesses",
        summary: "Learn how evals help businesses define, measure, and improve AI performanceâ€”reducing risk, boosting productivity, and driving strategic advantage.",
        link: "https://openai.com/index/evals-drive-next-chapter-of-ai",
        source: "OpenAI"
    },
    {
        title: "OpenAI and Target team up on new AI-powered experiences",
        summary: "OpenAI and Target are partnering to bring a new Target app to ChatGPT, offering personalized shopping and faster checkout. Target will also expand its use of ChatGPT Enterprise to boost productivity a...",
        link: "https://openai.com/index/target-partnership",
        source: "OpenAI"
    },
    {
        title: "How Scania is accelerating work with AI across its global workforce",
        summary: "Description: Global manufacturer Scania is scaling AI with ChatGPT Enterprise. With team-based onboarding and strong guardrails, AI is boosting productivity, quality, and innovation.",
        link: "https://openai.com/index/scania",
        source: "OpenAI"
    },
    {
        title: "GPT-5.1-Codex-Max System Card",
        summary: "This system card outlines the comprehensive safety measures implemented for GPTâ€‘5.1-CodexMax. It details both model-level mitigations, such as specialized safety training for harmful tasks and promp...",
        link: "https://openai.com/index/gpt-5-1-codex-max-system-card",
        source: "OpenAI"
    },
    {
        title: "A free version of ChatGPT built for teachers",
        summary: "ChatGPT for Teachers is a secure workspace with educationâ€‘grade privacy and admin controls. Free for verified U.S. Kâ€“12 educators through June 2027.",
        link: "https://openai.com/index/chatgpt-for-teachers",
        source: "OpenAI"
    },
    {
        title: "Building more with GPT-5.1-Codex-Max",
        summary: "Introducing GPT-5.1-Codex-Max, a faster, more intelligent agentic coding model for Codex. The model is designed for long-running, project-scale work with enhanced reasoning and token efficiency.",
        link: "https://openai.com/index/gpt-5-1-codex-max",
        source: "OpenAI"
    },
    {
        title: "Intuit and OpenAI join forces on new AI-powered experiences",
        summary: "OpenAI and Intuit have entered a $100M+ multi-year partnership to launch Intuit app experiences in ChatGPT and expand Intuitâ€™s use of OpenAIâ€™s frontier models to power personalized financial tools...",
        link: "https://openai.com/index/intuit-partnership",
        source: "OpenAI"
    },
    {
        title: "OpenAI named Emerging Leader in Generative AI",
        summary: "OpenAI has been named an Emerging Leader in Gartnerâ€™s 2025 Innovation Guide for Generative AI Model Providers. The recognition reflects our enterprise momentum, with over 1 million companies buildin...",
        link: "https://openai.com/index/gartner-2025-emerging-leader",
        source: "OpenAI"
    },
    {
        title: "Introducing OpenAI for Ireland",
        summary: "OpenAI launches OpenAI for Ireland, partnering with the Irish Government, Dogpatch Labs and Patch to help SMEs, founders and young builders use AI to innovate, boost productivity and build the next ge...",
        link: "https://openai.com/index/openai-for-ireland",
        source: "OpenAI"
    },
    {
        title: "Understanding neural networks through sparse circuits",
        summary: "OpenAI is exploring mechanistic interpretability to understand how neural networks reason. Our new sparse model approach could make AI systems more transparent and support safer, more reliable behavio...",
        link: "https://openai.com/index/understanding-neural-networks-through-sparse-circuits",
        source: "OpenAI"
    },
    {
        title: "Introducing GPT-5.1 for developers",
        summary: "GPT-5.1 is now available in the API, bringing faster adaptive reasoning, extended prompt caching, improved coding performance, and new apply_patch and shell tools.",
        link: "https://openai.com/index/gpt-5-1-for-developers",
        source: "OpenAI"
    },
    {
        title: "Introducing group chats in ChatGPT",
        summary: "Weâ€™re piloting group chats in ChatGPT to make collaboration simple. Bring othersâ€”and ChatGPTâ€”into one shared conversation to plan, brainstorm, and create together.",
        link: "https://openai.com/index/group-chats-in-chatgpt",
        source: "OpenAI"
    },
    {
        title: "How Philips is scaling AI literacy across 70,000 employees",
        summary: "Philips is scaling AI literacy with ChatGPT Enterprise, training 70,000 employees to use AI responsibly and improve healthcare outcomes worldwide.",
        link: "https://openai.com/index/philips",
        source: "OpenAI"
    },
    {
        title: "Neuro drives national retail wins with ChatGPT Business",
        summary: "Neuro uses ChatGPT Business to scale nationwide with fewer than seventy employees. From drafting contracts to uncovering insights in customer data, the team saves time, cuts costs, and turns ideas int...",
        link: "https://openai.com/index/neurogum",
        source: "OpenAI"
    },
    {
        title: "Fighting the New York Timesâ€™ invasion of user privacy",
        summary: "OpenAI is fighting the New York Timesâ€™ demand for 20 million private ChatGPT conversations and accelerating new security and privacy protections to protect your data.",
        link: "https://openai.com/index/fighting-nyt-user-privacy-invasion",
        source: "OpenAI"
    },
    {
        title: "GPT-5.1 Instant and GPT-5.1 Thinking System Card Addendum",
        summary: "This GPT-5 system card addendum provides updated safety metrics for GPT-5.1 Instant and Thinking, including new evaluations for mental health and emotional reliance.",
        link: "https://openai.com/index/gpt-5-system-card-addendum-gpt-5-1",
        source: "OpenAI"
    },
    {
        title: "GPT-5.1: A smarter, more conversational ChatGPT",
        summary: "Weâ€™re upgrading the GPT-5 series with warmer, more capable models and new ways to customize ChatGPTâ€™s tone and style. GPT-5.1 starts rolling out today to paid users.",
        link: "https://openai.com/index/gpt-5-1",
        source: "OpenAI"
    },
    {
        title: "Free ChatGPT for transitioning U.S. servicemembers and veterans",
        summary: "OpenAI is offering U.S. servicemembers and veterans within 12 months of retirement or separation a free year of ChatGPT Plus to support their transition to civilian life. The tools can help with resum...",
        link: "https://openai.com/index/chatgpt-for-veterans",
        source: "OpenAI"
    },
    {
        title: "Understanding prompt injections: a frontier security challenge",
        summary: "Prompt injections are a frontier security challenge for AI systems. Learn how these attacks work and how OpenAI is advancing research, training models, and building safeguards for users.",
        link: "https://openai.com/index/prompt-injections",
        source: "OpenAI"
    },
    {
        title: "Notionâ€™s rebuild for agentic AI: How GPTâ€‘5 helped unlock autonomous workflows",
        summary: "Discover how Notion rebuilt its AI architecture with GPT-5 to create autonomous agents that reason, act, and adapt across workflows. Learn how this shift unlocked smarter, faster, and more flexible pr...",
        link: "https://openai.com/index/notion",
        source: "OpenAI"
    },
    {
        title: "From Pilot to Practice: How BBVA Is Scaling AI Across the Organization",
        summary: "BBVA is reimagining how employees work with ChatGPT Enterprise, embedding AI into everyday operations. The bank has saved hours per week per employee, created 20,000+ Custom GPTs, and achieved up to 8...",
        link: "https://openai.com/index/bbva-2025",
        source: "OpenAI"
    },
    {
        title: "Introducing the Teen Safety Blueprint",
        summary: "Discover OpenAIâ€™s Teen Safety Blueprintâ€”a roadmap for building AI responsibly with safeguards, age-appropriate design, and collaboration to protect and empower young people online.",
        link: "https://openai.com/index/introducing-the-teen-safety-blueprint",
        source: "OpenAI"
    },
    {
        title: "AI progress and recommendations",
        summary: "AI is advancing fast. We have the chance to shape its progressâ€”toward discovery, safety, and a better future for everyone.",
        link: "https://openai.com/index/ai-progress-and-recommendations",
        source: "OpenAI"
    },
    {
        title: "How CRED is tapping AI to deliver premium customer experiences",
        summary: "CRED is transforming premium customer experiences in India with OpenAI. Using GPT-powered tools, the company is improving support accuracy, reducing response times, and boosting customer satisfaction.",
        link: "https://openai.com/index/cred-swamy-seetharaman",
        source: "OpenAI"
    },
    {
        title: "How Chime is redefining marketing through AI",
        summary: "Vineet Mehra, Chief Marketing Officer at Chime, shares how AI is reshaping marketing into an agent-driven discipline. He explains why CMOs who champion AI literacy and thoughtful adoption will lead in...",
        link: "https://openai.com/index/chime-vineet-mehra",
        source: "OpenAI"
    },
    {
        title: "1 million business customers putting AI to work",
        summary: "More than 1 million business customers around the world now use OpenAI. Across healthcare, life sciences, financial services, and more, ChatGPT and our APIs are driving a new era of intelligent, AI-po...",
        link: "https://openai.com/index/1-million-businesses-putting-ai-to-work",
        source: "OpenAI"
    },
    {
        title: "Brazilâ€™s AI moment is here",
        summary: "Brazil is now one of the most engaged countries in the world when it comes to AI. From classrooms to farms and small businesses, Brazilians are using OpenAI products to learn, create, and drive innova...",
        link: "https://openai.com/global-affairs/brazil-ai-moment-is-here",
        source: "OpenAI"
    },
    {
        title: "Introducing IndQA",
        summary: "OpenAI introduces IndQA, a new benchmark for evaluating AI systems in Indian languages. Built with domain experts, IndQA tests cultural understanding and reasoning across 12 languages and 10 knowledge...",
        link: "https://openai.com/index/introducing-indqa",
        source: "OpenAI"
    },
    {
        title: "AWS and OpenAI announce multi-year strategic partnership",
        summary: "OpenAI and AWS have entered a multi-year, $38 billion partnership to scale advanced AI workloads. AWS will provide world-class infrastructure and compute capacity to power OpenAIâ€™s next generation o...",
        link: "https://openai.com/index/aws-and-openai-partnership",
        source: "OpenAI"
    },
    {
        title: "Expanding Stargate to Michigan",
        summary: "OpenAI is expanding Stargate to Michigan with a new one-gigawatt campus that strengthens Americaâ€™s AI infrastructure. The project will create jobs, drive investment, and support economic growth acro...",
        link: "https://openai.com/index/expanding-stargate-to-michigan",
        source: "OpenAI"
    },
    {
        title: "Introducing Aardvark: OpenAIâ€™s agentic security researcher",
        summary: "OpenAI introduces Aardvark, an AI-powered security researcher that autonomously finds, validates, and helps fix software vulnerabilities at scale. The system is in private betaâ€”sign up to join early...",
        link: "https://openai.com/index/introducing-aardvark",
        source: "OpenAI"
    },
    {
        title: "How we built OWL, the new architecture behind our ChatGPT-based browser, Atlas",
        summary: "A deep dive into OWL, the new architecture powering ChatGPT Atlasâ€”decoupling Chromium, enabling fast startup, rich UI, and agentic browsing with ChatGPT.",
        link: "https://openai.com/index/building-chatgpt-atlas",
        source: "OpenAI"
    },
    {
        title: "gpt-oss-safeguard technical report",
        summary: "gpt-oss-safeguard-120b and gpt-oss-safeguard-20b are two open-weight reasoning models post-trained from the gpt-oss models and trained to reason from a provided policy in order to label content under ...",
        link: "https://openai.com/index/gpt-oss-safeguard-technical-report",
        source: "OpenAI"
    },
    {
        title: "Introducing gpt-oss-safeguard",
        summary: "OpenAI introduces gpt-oss-safeguardâ€”open-weight reasoning models for safety classification that let developers apply and iterate on custom policies.",
        link: "https://openai.com/index/introducing-gpt-oss-safeguard",
        source: "OpenAI"
    },
    {
        title: "Knowledge preservation powered by ChatGPT",
        summary: "Dai Nippon Printing (DNP) rolled out ChatGPT Enterprise across ten core departments to drive companywide adoption. Within three months, it achieved 95% faster patent research, 10x processing volume, 1...",
        link: "https://openai.com/index/dai-nippon-printing",
        source: "OpenAI"
    },
    {
        title: "Doppelâ€™s AI defense system stops attacks before they spread",
        summary: "Discover how Doppel uses OpenAIâ€™s GPT-5 and reinforcement fine-tuning (RFT) to stop deepfake and impersonation attacks before they spread, cutting analyst workloads by 80% and reducing threat respon...",
        link: "https://openai.com/index/doppel",
        source: "OpenAI"
    },
    {
        title: "Built to benefit everyone",
        summary: "OpenAIâ€™s recapitalization strengthens mission-focused governance, expanding resources to ensure AI benefits everyone while advancing innovation responsibly.",
        link: "https://openai.com/index/built-to-benefit-everyone",
        source: "OpenAI"
    },
    {
        title: "The next chapter of the Microsoftâ€“OpenAI partnership",
        summary: "Microsoft and OpenAI sign a new agreement that strengthens its long-term partnership, expands innovation, and ensures responsible AI progress.",
        link: "https://openai.com/index/next-chapter-of-microsoft-openai-partnership",
        source: "OpenAI"
    },
    {
        title: "Seizing the AI opportunity",
        summary: "Meeting the demands of the Intelligence Age will require strategic investment in energy and infrastructure. OpenAIâ€™s submission to the White House details how expanding capacity and workforce readin...",
        link: "https://openai.com/global-affairs/seizing-the-ai-opportunity",
        source: "OpenAI"
    },
    {
        title: "Strengthening ChatGPTâ€™s responses in sensitive conversations",
        summary: "OpenAI collaborated with 170+ mental health experts to improve ChatGPTâ€™s ability to recognize distress, respond empathetically, and guide users toward real-world supportâ€”reducing unsafe responses ...",
        link: "https://openai.com/index/strengthening-chatgpt-responses-in-sensitive-conversations",
        source: "OpenAI"
    },
    {
        title: "Addendum to GPT-5 System Card: Sensitive conversations",
        summary: "This system card details GPT-5â€™s improvements in handling sensitive conversations, including new benchmarks for emotional reliance, mental health, and jailbreak resistance.",
        link: "https://openai.com/index/gpt-5-system-card-sensitive-conversations",
        source: "OpenAI"
    },
    {
        title: "A law and tax firm redefines efficiency with ChatGPT Business",
        summary: "Learn how Steuerrecht.com uses ChatGPT Business to streamline legal workflows, automate tax research, and scale client serviceâ€”helping law firms boost productivity and stay competitive.",
        link: "https://openai.com/index/steuerrecht",
        source: "OpenAI"
    },
    {
        title: "OpenAI acquires Software Applications Incorporated, maker of Sky",
        summary: "OpenAI has acquired Software Applications Incorporated, maker of Skyâ€”a natural language interface for Mac that brings AI directly into your desktop experience. Together, weâ€™re integrating Skyâ€™s ...",
        link: "https://openai.com/index/openai-acquires-software-applications-incorporated",
        source: "OpenAI"
    },
    {
        title: "Consensus accelerates research with GPT-5 and Responses API",
        summary: "Consensus uses GPT-5 and OpenAIâ€™s Responses API to power a multi-agent research assistant that reads, analyzes, and synthesizes evidence in minutesâ€”helping over 8 million researchers accelerate sc...",
        link: "https://openai.com/index/consensus",
        source: "OpenAI"
    },
    {
        title: "Work smarter with your company knowledge in ChatGPT",
        summary: "Company knowledge brings context from your apps into ChatGPT for answers specific to your business, with clear citations, security, privacy, and admin controls. Available now for Business, Enterprise,...",
        link: "https://openai.com/index/introducing-company-knowledge",
        source: "OpenAI"
    },
    {
        title: "AI in South Koreaâ€”OpenAIâ€™s Economic Blueprint",
        summary: "OpenAI's Korea Economic Blueprint outlines how South Korea can scale trusted AI through sovereign capabilities and strategic partnerships to drive growth.",
        link: "https://openai.com/index/south-korea-economic-blueprint",
        source: "OpenAI"
    },
    {
        title: "The next chapter for UK sovereign AI",
        summary: "OpenAI expands its UK partnership with a new Ministry of Justice agreement, bringing ChatGPT to civil servants. It also introduces UK data residency for ChatGPT Enterprise, ChatGPT Edu, and the API Pl...",
        link: "https://openai.com/index/the-next-chapter-for-uk-sovereign-ai",
        source: "OpenAI"
    },
    {
        title: "AI in Japanâ€”OpenAIâ€™s Japan Economic Blueprint",
        summary: "OpenAIâ€™s Japan Economic Blueprint outlines how Japan can harness AI to boost innovation, strengthen competitiveness, and enable sustainable, inclusive growth.",
        link: "https://openai.com/index/japan-economic-blueprint",
        source: "OpenAI"
    },
    {
        title: "Continue your ChatGPT experience beyond WhatsApp",
        summary: "ChatGPT will no longer be available on WhatsApp after January 15, 2026. Learn how to link your ChatGPT account and continue your conversations across devices.",
        link: "https://openai.com/index/chatgpt-whatsapp-transition",
        source: "OpenAI"
    },
    {
        title: "Introducing ChatGPT Atlas, the browser with ChatGPT built in",
        summary: "ChatGPT Atlas, the browser with ChatGPT built it. Get instant answers, summaries, and smart web helpâ€”right from any page. With privacy settings you can control. Available now for MacOS.",
        link: "https://openai.com/index/introducing-chatgpt-atlas",
        source: "OpenAI"
    },
    {
        title: "Plex Coffee delivers fast service and personal connections with ChatGPT Business",
        summary: "Learn how Plex Coffee uses ChatGPT Business to centralize knowledge, train staff faster, and preserve personal connections while expanding.",
        link: "https://openai.com/index/plex-coffee",
        source: "OpenAI"
    },
    {
        title: "Expert Council on Well-Being and AI",
        summary: "OpenAIâ€™s new Expert Council on Well-Being and AI brings together leading psychologists, clinicians, and researchers to guide how ChatGPT supports emotional health, especially for teens. Learn how th...",
        link: "https://openai.com/index/expert-council-on-well-being-and-ai",
        source: "OpenAI"
    },
    {
        title: "Argentinaâ€™s AI opportunity",
        summary: "OpenAI and Sur Energy are exploring Argentinaâ€™s first Stargate projectâ€”an AI and clean energy collaboration that could make Argentina a Latin American leader in artificial intelligence, sustainabl...",
        link: "https://openai.com/global-affairs/argentinas-ai-opportunity",
        source: "OpenAI"
    },
    {
        title: "OpenAI and Broadcom announce strategic collaboration to deploy 10 gigawatts of OpenAI-designed AI accelerators",
        summary: "OpenAI and Broadcom announce a multi-year partnership to deploy 10 gigawatts of OpenAI-designed AI accelerators, co-developing next-generation systems and Ethernet solutions to power scalable, energy-...",
        link: "https://openai.com/index/openai-and-broadcom-announce-strategic-collaboration",
        source: "OpenAI"
    },
    {
        title: "HYGH powers next-gen digital ads with ChatGPT Business",
        summary: "HYGH speeds up software development and campaign delivery with ChatGPT Business, cutting turnaround times, scaling output, and driving revenue growth.",
        link: "https://openai.com/index/hygh",
        source: "OpenAI"
    },
    {
        title: "Defining and evaluating political bias in LLMs",
        summary: "Learn how OpenAI evaluates political bias in ChatGPT through new real-world testing methods that improve objectivity and reduce bias.",
        link: "https://openai.com/index/defining-and-evaluating-political-bias-in-llms",
        source: "OpenAI"
    },
    {
        title: "Growing impact and scale with ChatGPT",
        summary: "Discover how HiBob uses ChatGPT Enterprise and custom GPTs to scale AI adoption, boost revenue, streamline HR workflows, and deliver AI-powered features in the Bob platform.",
        link: "https://openai.com/index/hibob",
        source: "OpenAI"
    },
    {
        title: "Disrupting malicious uses of AI: October 2025",
        summary: "Discover how OpenAI is detecting and disrupting malicious uses of AI in our October 2025 report. Learn how weâ€™re countering misuse, enforcing policies, and protecting users from real-world harms.",
        link: "https://openai.com/global-affairs/disrupting-malicious-uses-of-ai-october-2025",
        source: "OpenAI"
    },
    {
        title: "Codex is now generally available",
        summary: "OpenAI Codex is now generally available with powerful new features for developers: a Slack integration, Codex SDK, and admin tools like usage dashboards and workspace managementâ€”making Codex easier ...",
        link: "https://openai.com/index/codex-now-generally-available",
        source: "OpenAI"
    },
    {
        title: "Introducing apps in ChatGPT and the new Apps SDK",
        summary: "Weâ€™re introducing a new generation of apps you can chat with, right inside ChatGPT. Developers can start building them today with the new Apps SDK, available in preview.",
        link: "https://openai.com/index/introducing-apps-in-chatgpt",
        source: "OpenAI"
    },
    {
        title: "AMD and OpenAI announce strategic partnership to deploy 6 gigawatts of AMD GPUs",
        summary: "AMD and OpenAI have announced a multi-year partnership to deploy 6 gigawatts of AMD Instinct GPUs, beginning with 1 gigawatt in 2026, to power OpenAIâ€™s next-generation AI infrastructure and accelera...",
        link: "https://openai.com/index/openai-amd-strategic-partnership",
        source: "OpenAI"
    },
    {
        title: "Introducing AgentKit, new Evals, and RFT for agents",
        summary: "Today, weâ€™re releasing  new tools to help developers go from prototype to production faster: AgentKit, expanded evals capabilities, and reinforcement fine-tuning for agents.",
        link: "https://openai.com/index/introducing-agentkit",
        source: "OpenAI"
    },
    {
        title: "Accelerating AI adoption in Europe",
        summary: "OpenAI and Allied for Startups release the Hacktivate AI report with 20 actionable policy ideas to accelerate AI adoption in Europe, boost competitiveness, and empower innovators.",
        link: "https://openai.com/global-affairs/accelerating-ai-uptake-in-europe",
        source: "OpenAI"
    },
    {
        title: "With GPT-5, Wrtn builds lifestyle AI for millions in Korea",
        summary: "Wrtn scaled AI apps to 6.5M users in Korea with GPT-5, creating â€˜Lifestyle AIâ€™ that blends productivity, creativity, and learningâ€”now expanding across East Asia.",
        link: "https://openai.com/index/wrtn",
        source: "OpenAI"
    },
    {
        title: "OpenAI announces strategic collaboration with Japanâ€™s Digital Agency",
        summary: "OpenAI and Japanâ€™s Digital Agency partner to advance generative AI in public services, support international AI governance, and promote safe, trustworthy AI adoption worldwide.",
        link: "https://openai.com/global-affairs/strategic-collaboration-with-japan-digital-agency",
        source: "OpenAI"
    },
    {
        title: "Samsung and SK join OpenAIâ€™s Stargate initiative to advance global AI infrastructure",
        summary: "Samsung and SK join OpenAIâ€™s Stargate initiative to expand global AI infrastructure, scaling advanced memory chip production and building next-gen data centers in Korea.",
        link: "https://openai.com/index/samsung-and-sk-join-stargate",
        source: "OpenAI"
    },
    {
        title: "Sora 2 System Card",
        summary: "Sora 2 is our new state of the art video and audio generation model. Building on the foundation of Sora, this new model introduces capabilities that have been difficult for prior video models to achie...",
        link: "https://openai.com/index/sora-2-system-card",
        source: "OpenAI"
    },
    {
        title: "Sora 2 is here",
        summary: "Our latest video generation model is more physically accurate, realistic, and controllable than prior systems. It also features synchronized dialogue and sound effects. Create with it in the new Sora ...",
        link: "https://openai.com/index/sora-2",
        source: "OpenAI"
    },
    {
        title: "Launching Sora responsibly",
        summary: "To address the novel safety challenges posed by a state-of-the-art video model as well as a new social creation platform, weâ€™ve built Sora 2 and the Sora app with safety at the foundation. Our appro...",
        link: "https://openai.com/index/launching-sora-responsibly",
        source: "OpenAI"
    },
    {
        title: "Driving sales productivity and customer success at OpenAI",
        summary: "Learn how OpenAI boosts sales productivity by automating prep, centralizing knowledge, and scaling top-selling practices.",
        link: "https://openai.com/index/openai-gtm-assistant",
        source: "OpenAI"
    },
    {
        title: "Converting inbound leads into customers at OpenAI",
        summary: "Learn how OpenAI used AI to deliver personalized answers at scale, converting inbound leads into customers.",
        link: "https://openai.com/index/openai-inbound-sales-assistant",
        source: "OpenAI"
    },
    {
        title: "Improving support with every interaction at OpenAI",
        summary: "Learn how OpenAI uses AI to enhance support, cutting response times, improving quality, and scaling to meet hypergrowth.",
        link: "https://openai.com/index/openai-support-model",
        source: "OpenAI"
    },
    {
        title: "Empowering teams to unlock insights faster at OpenAI",
        summary: "OpenAIâ€™s research assistant helps teams analyze millions of support tickets, surface insights faster, and scale curiosity across the company.",
        link: "https://openai.com/index/openai-research-assistant",
        source: "OpenAI"
    },
    {
        title: "Building OpenAI with OpenAI",
        summary: "At OpenAI, we rely on our own technology to help streamline work, scale expertise, and drive outcomes. In our new series, OpenAI on OpenAI, we share lessons to help other organizations do the same.",
        link: "https://openai.com/index/building-openai-with-openai",
        source: "OpenAI"
    },
    {
        title: "Turning contracts into searchable data at OpenAI",
        summary: "OpenAI built a system to extract contract data quickly, cutting turnaround times and making it easier for teams to access the details they need.",
        link: "https://openai.com/index/openai-contract-data-agent",
        source: "OpenAI"
    },
    {
        title: "Introducing parental controls",
        summary: "Weâ€™re rolling out parental controls and a new parent resource page to help families guide how ChatGPT works in their homes.",
        link: "https://openai.com/index/introducing-parental-controls",
        source: "OpenAI"
    },
    {
        title: "Combating online child sexual exploitation & abuse",
        summary: "Discover how OpenAI combats online child sexual exploitation and abuse with strict usage policies, advanced detection tools, and industry collaboration to block, report, and prevent AI misuse.",
        link: "https://openai.com/index/combating-online-child-sexual-exploitation-abuse",
        source: "OpenAI"
    },
    {
        title: "Buy it in ChatGPT: Instant Checkout and the Agentic Commerce Protocol",
        summary: "Weâ€™re taking first steps toward agentic commerce in ChatGPT with new ways for people, AI agents, and businesses to shop together.",
        link: "https://openai.com/index/buy-it-in-chatgpt",
        source: "OpenAI"
    },
    {
        title: "Partnering with AARP to help keep older adults safe online",
        summary: "OpenAI and AARP are partnering to help older adults stay safe online with new AI training, scam-spotting tools, and nationwide programs through OpenAI Academy and OATSâ€™s Senior Planet initiative.",
        link: "https://openai.com/index/aarp-partnership-older-adults-online-safety",
        source: "OpenAI"
    },
    {
        title: "More ways to work with your team and tools in ChatGPT",
        summary: "ChatGPT business plans now support shared projects, smarter connectors, and enhanced compliance features to help teams work faster and more securely.",
        link: "https://openai.com/index/more-ways-to-work-with-your-team",
        source: "OpenAI"
    },
    {
        title: "Measuring the performance of our models on real-world tasks",
        summary: "OpenAI introduces GDPval, a new evaluation that measures model performance on real-world economically valuable tasks across 44 occupations.",
        link: "https://openai.com/index/gdpval",
        source: "OpenAI"
    },
    {
        title: "Introducing ChatGPT Pulse",
        summary: "Today we're releasing a preview of ChatGPT Pulse to Pro users on mobile. Pulse is a new experience where ChatGPT proactively does research to deliver personalized updates based on your chats, feedback...",
        link: "https://openai.com/index/introducing-chatgpt-pulse",
        source: "OpenAI"
    },
    {
        title: "Transforming the manufacturing industry with ChatGPT",
        summary: "By deploying ChatGPT Enterprise, ENEOS Materials transformed operations with faster research, safer plant design, and streamlined HR processes. Over 80% of employees report major workflow improvements...",
        link: "https://openai.com/index/eneos-materials",
        source: "OpenAI"
    },
    {
        title: "SAP and OpenAI partner to launch sovereign â€˜OpenAI for Germanyâ€™",
        summary: "SAP and OpenAI launch OpenAI for Germany, a 2026 partnership to bring secure, sovereign AI to Germanyâ€™s public sector, enabling safe, efficient public services.",
        link: "https://openai.com/global-affairs/openai-for-germany",
        source: "OpenAI"
    },
    {
        title: "OpenAI, Oracle, and SoftBank expand Stargate with five new AI datacenter sites",
        summary: "OpenAI, Oracle, and SoftBank announce five new Stargate AI datacenter sites, accelerating a $500B, 10-gigawatt U.S. infrastructure buildout to power next-generation AI and create tens of thousands of ...",
        link: "https://openai.com/index/five-new-stargate-sites",
        source: "OpenAI"
    },
    {
        title: "CNA is transforming its newsroom with AI",
        summary: "In this Executive Function series from OpenAI, discover how CNA is transforming its newsroom with AI. Editor-in-Chief Walter Fernandez shares insights on AI adoption, culture, and the future of journa...",
        link: "https://openai.com/index/cna-walter-fernandez",
        source: "OpenAI"
    },
    {
        title: "American-made innovation",
        summary: "American-made innovation",
        link: "https://openai.com/global-affairs/american-made-innovation",
        source: "OpenAI"
    },
    {
        title: "Creating a safe, observable AI infrastructure for 1 million classrooms",
        summary: "Discover how SchoolAI, built on OpenAIâ€™s GPT-4.1, image generation, and TTS, powers safe, teacher-guided AI tools for 1 million classrooms worldwideâ€”boosting engagement, oversight, and personalize...",
        link: "https://openai.com/index/schoolai",
        source: "OpenAI"
    },
    {
        title: "OpenAI and NVIDIA announce strategic partnership to deploy 10 gigawatts of NVIDIA systems",
        summary: "OpenAI and NVIDIA announce a strategic partnership to deploy 10 gigawatts of AI datacenters powered by NVIDIA systems, with the first phase launching in 2026.",
        link: "https://openai.com/index/openai-nvidia-systems-partnership",
        source: "OpenAI"
    },
    {
        title: "Outbound coordinated vulnerability disclosure policy",
        summary: "Outbound coordinated vulnerability disclosure policy",
        link: "https://openai.com/policies/outbound-coordinated-disclosure-policy",
        source: "OpenAI"
    },
    {
        title: "Detecting and reducing scheming in AI models",
        summary: "Apollo Research and OpenAI developed evaluations for hidden misalignment (â€œschemingâ€) and found behaviors consistent with scheming in controlled tests across frontier models. The team shared concr...",
        link: "https://openai.com/index/detecting-and-reducing-scheming-in-ai-models",
        source: "OpenAI"
    },
    {
        title: "Introducing Stargate UK",
        summary: "OpenAI, NVIDIA, and Nscale launch Stargate UK, a sovereign AI infrastructure partnership delivering up to 50,000 GPUs and the UKâ€™s largest supercomputer to power national AI innovation, public servi...",
        link: "https://openai.com/index/introducing-stargate-uk",
        source: "OpenAI"
    },
    {
        title: "Teen safety, freedom, and privacy",
        summary: "Explore OpenAIâ€™s approach to balancing teen safety, freedom, and privacy in AI use.",
        link: "https://openai.com/index/teen-safety-freedom-and-privacy",
        source: "OpenAI"
    },
    {
        title: "Building towards age prediction",
        summary: "Learn how OpenAI is building age prediction and parental controls in ChatGPT to create safer, age-appropriate experiences for teens while supporting families with new tools.",
        link: "https://openai.com/index/building-towards-age-prediction",
        source: "OpenAI"
    },
    {
        title: "Introducing upgrades to Codex",
        summary: "Codex just got faster, more reliable, and better at real-time collaboration and tackling tasks independently anywhere you developâ€”whether via the terminal, IDE, web, or even your phone.",
        link: "https://openai.com/index/introducing-upgrades-to-codex",
        source: "OpenAI"
    },
    {
        title: "How people are using ChatGPT",
        summary: "New research from the largest study of ChatGPT use shows how the tool creates economic value through both personal and professional use. Adoption is broadening beyond early users, closing gaps and mak...",
        link: "https://openai.com/index/how-people-are-using-chatgpt",
        source: "OpenAI"
    },
    {
        title: "Addendum to GPT-5 system card: GPT-5-Codex",
        summary: "This addendum to the GPT-5 system card shares a new model: GPT-5-Codex, a version of GPT-5 further optimized for agentic coding in Codex. GPT-5-Codex adjusts its thinking effort more dynamically based...",
        link: "https://openai.com/index/gpt-5-system-card-addendum-gpt-5-codex",
        source: "OpenAI"
    },
    {
        title: "Working with US CAISI and UK AISI to build more secure AI systems",
        summary: "OpenAI shares progress on the partnership with the US CAISI and UK AISI to strengthen AI safety and security.",
        link: "https://openai.com/index/us-caisi-uk-aisi-ai-update",
        source: "OpenAI"
    },
    {
        title: "A joint statement from OpenAI and Microsoft",
        summary: "OpenAI and Microsoft sign a new MOU, reinforcing their partnership and shared commitment to AI safety and innovation.",
        link: "https://openai.com/index/joint-statement-from-openai-and-microsoft",
        source: "OpenAI"
    },
    {
        title: "Statement on OpenAIâ€™s Nonprofit and PBC",
        summary: "OpenAI reaffirms its nonprofit leadership with a new structure granting equity in its PBC, enabling over $100B in resources to advance safe, beneficial AI for humanity.",
        link: "https://openai.com/index/statement-on-openai-nonprofit-and-pbc",
        source: "OpenAI"
    },
    {
        title: "Shipping smarter agents with every new model",
        summary: "Discover how SafetyKit leverages OpenAI GPT-5 to enhance content moderation, enforce compliance, and outpace legacy safety systems with greater accuracy .",
        link: "https://openai.com/index/safetykit",
        source: "OpenAI"
    },
    {
        title: "A People-First AI Fund: $50M to support nonprofits",
        summary: "Applications are now open for OpenAIâ€™s People-First AI Fund, a $50M initiative supporting U.S. nonprofits advancing education, community innovation, and economic opportunity. Apply by October 8, 202...",
        link: "https://openai.com/index/people-first-ai-fund",
        source: "OpenAI"
    },
    {
        title: "Why language models hallucinate",
        summary: "OpenAIâ€™s new research explains why language models hallucinate. The findings show how improved evaluations can enhance AI reliability, honesty, and safety.",
        link: "https://openai.com/index/why-language-models-hallucinate",
        source: "OpenAI"
    },
    {
        title: "GPT-5 bio bug bounty call",
        summary: "OpenAI invites researchers to its Bio Bug Bounty. Test GPT-5â€™s safety with a universal jailbreak prompt and win up to $25,000.",
        link: "https://openai.com/gpt-5-bio-bug-bounty",
        source: "OpenAI"
    },
    {
        title: "OpenAI and Greek Government launch â€˜OpenAI for Greeceâ€™",
        summary: "OpenAI and the Greek Government have launched â€œOpenAI for Greeceâ€ to bring ChatGPT Edu into secondary schools and support responsible AI learning. This partnership aims to boost AI literacy, fuel ...",
        link: "https://openai.com/global-affairs/openai-for-greece",
        source: "OpenAI"
    },
    {
        title: "Expanding economic opportunity with AI",
        summary: "OpenAI is launching a Jobs Platform and new Certifications to connect workers with jobs, training, and certifications. Learn how weâ€™re expanding economic opportunity and making AI skills more access...",
        link: "https://openai.com/index/expanding-economic-opportunity-with-ai",
        source: "OpenAI"
    },
    {
        title: "Vijaye Raji to become CTO of Applications with acquisition of Statsig",
        summary: "Vijaye Raji will step into a new role as CTO of Applications, reporting to CEO of Applications, Fidji Simo, following the acquisition of Statsig.",
        link: "https://openai.com/index/vijaye-raji-to-become-cto-of-applications-with-acquisition-of-statsig",
        source: "OpenAI"
    },
    {
        title: "Building more helpful ChatGPT experiences for everyone",
        summary: "Weâ€™re partnering with experts, strengthening protections for teens with parental controls, and routing sensitive conversations to reasoning models in ChatGPT.",
        link: "https://openai.com/index/building-more-helpful-chatgpt-experiences-for-everyone",
        source: "OpenAI"
    },
    {
        title: "Introducing gpt-realtime and Realtime API updates",
        summary: "Weâ€™re releasing a more advanced speech-to-speech model and new API capabilities including MCP server support, image input, and SIP phone calling support.",
        link: "https://openai.com/index/introducing-gpt-realtime",
        source: "OpenAI"
    },
    {
        title: "Supporting nonprofit and community innovation",
        summary: "OpenAI launches a $50M People-First AI Fund to help U.S. nonprofits scale impact with AI. Applications open Sept 8â€“Oct 8, 2025 for grants in education, healthcare, research, and more.",
        link: "https://openai.com/index/supporting-nonprofit-and-community-innovation",
        source: "OpenAI"
    },
    {
        title: "Collective alignment: public input on our Model Spec",
        summary: "OpenAI surveyed over 1,000 people worldwide on how AI should behave and compared their views to our Model Spec. Learn how collective alignment is shaping AI defaults to better reflect diverse human va...",
        link: "https://openai.com/index/collective-alignment-aug-2025-updates",
        source: "OpenAI"
    },
    {
        title: "OpenAI and Anthropic share findings from a joint safety evaluation",
        summary: "OpenAI and Anthropic share findings from a first-of-its-kind joint safety evaluation, testing each otherâ€™s models for misalignment, instruction following, hallucinations, jailbreaking, and moreâ€”hi...",
        link: "https://openai.com/index/openai-anthropic-safety-evaluation",
        source: "OpenAI"
    },
    {
        title: "Helping people when they need it most",
        summary: "How we think about safety for users experiencing mental or emotional distress, the limits of todayâ€™s systems, and the work underway to refine them.",
        link: "https://openai.com/index/helping-people-when-they-need-it-most",
        source: "OpenAI"
    },
    {
        title: "Announcing the OpenAI Learning Accelerator",
        summary: "OpenAI announces the launch of OpenAI Learning Accelerator, an initiative that aims to bring advanced AI to Indiaâ€™s educators and millions of learners nationwide through accelerated AI research, tra...",
        link: "https://openai.com/global-affairs/learning-accelerator",
        source: "OpenAI"
    },
    {
        title: "Accelerating life sciences research",
        summary: "Discover how a specialized AI model, GPT-4b micro, helped OpenAI and Retro Bio engineer more effective proteins for stem cell therapy and longevity research.",
        link: "https://openai.com/index/accelerating-life-sciences-research-with-retro-biosciences",
        source: "OpenAI"
    },
    {
        title: "Scaling domain expertise in complex, regulated domains",
        summary: "Discover how Blue J is transforming tax research with AI-powered tools built on GPT-4.1. By combining domain expertise with Retrieval-Augmented Generation, Blue J delivers fast, accurate, and fully-ci...",
        link: "https://openai.com/index/blue-j",
        source: "OpenAI"
    },
    {
        title: "Mixi reimagines communication with ChatGPT",
        summary: "Discover how MIXI, a leader in digital entertainment and lifestyle services in Japan, uses ChatGPT Enterprise to transform productivity, boost AI adoption across teams, and create a secure environment...",
        link: "https://openai.com/index/mixi",
        source: "OpenAI"
    },
    {
        title: "Q&A with DoorDashâ€™s CPO, Mariana Garavaglia",
        summary: "Learn how DoorDash is scaling AI adoption to empower employees to build, learn, and innovate faster in a conversation with Chief People Officer Mariana Garavaglia.",
        link: "https://openai.com/index/doordash-mariana-garavaglia",
        source: "OpenAI"
    },
    {
        title: "OpenAIâ€™s letter to Governor Newsom on harmonized regulation",
        summary: "Weâ€™ve just sent a letter to Gov. Gavin Newsom calling for California to lead the way in harmonizing state-based AI regulation with nationalâ€”and, by virtue of US leadership, emerging globalâ€”stand...",
        link: "https://openai.com/global-affairs/letter-to-governor-newsom-on-harmonized-regulation",
        source: "OpenAI"
    },
    {
        title: "Scaling accounting capacity with OpenAI",
        summary: "Built with OpenAI o3, o3-Pro, GPT-4.1, and GPT-5, Basisâ€™ AI agents help accounting firms save up to 30% of their time and expand capacity for advisory and growth.",
        link: "https://openai.com/index/basis",
        source: "OpenAI"
    },
    {
        title: "Introducing GPT-5 for developers",
        summary: "Introducing GPT-5 in our API platformâ€”offering high reasoning performance, new controls for devs, and best-in-class results on real coding tasks.",
        link: "https://openai.com/index/introducing-gpt-5-for-developers",
        source: "OpenAI"
    },
    {
        title: "GPT-5 and the new era of work",
        summary: "GPT-5 is OpenAIâ€™s most advanced modelâ€”transforming enterprise AI, automation, and workforce productivity in the new era of intelligent work.",
        link: "https://openai.com/index/gpt-5-new-era-of-work",
        source: "OpenAI"
    },
    {
        title: "Coding and design with GPT-5",
        summary: "Learn how GPT-5 unlocks new possibilities in coding and design.",
        link: "https://openai.com/index/gpt-5-coding-design",
        source: "OpenAI"
    },
    {
        title: "Creative writing with GPT-5",
        summary: "Learn how GPT-5 assists with creative writing.",
        link: "https://openai.com/index/gpt-5-creative-writing",
        source: "OpenAI"
    },
    {
        title: "Medical research with GPT-5",
        summary: "Learn how GPT-5 is used for medical research.",
        link: "https://openai.com/index/gpt-5-medical-research",
        source: "OpenAI"
    },
    {
        title: "Introducing GPT-5",
        summary: "We are introducing GPTâ€‘5, our best AI system yet. GPTâ€‘5 is a significant leap in intelligence over all our previous models, featuring state-of-the-art performance across coding, math, writing, hea...",
        link: "https://openai.com/index/introducing-gpt-5",
        source: "OpenAI"
    },
    {
        title: "How Cursor uses GPT-5",
        summary: "Learn how Cursor uses GPT-5.",
        link: "https://openai.com/index/gpt-5-cursor",
        source: "OpenAI"
    },
    {
        title: "From hard refusals to safe-completions: toward output-centric safety training",
        summary: "Discover how OpenAI's new safe-completions approach in GPT-5 improves both safety and helpfulness in AI responsesâ€”moving beyond hard refusals to nuanced, output-centric safety training for handling ...",
        link: "https://openai.com/index/gpt-5-safe-completions",
        source: "OpenAI"
    },
    {
        title: "How Amgen uses GPT-5",
        summary: "Learn how Amgen uses GPT-5.",
        link: "https://openai.com/index/gpt-5-amgen",
        source: "OpenAI"
    },
    {
        title: "First look at GPT-5",
        summary: "See how a group of leading developers use GPT-5 for the first time.",
        link: "https://openai.com/index/gpt-5-first-look",
        source: "OpenAI"
    },
    {
        title: "GPT-5 System Card",
        summary: "This GPT-5 system card explains how a unified model routing system powers fast and smart responses using gpt-5-main, gpt-5-thinking, and lightweight versions like gpt-5-thinking-nano, optimized for di...",
        link: "https://openai.com/index/gpt-5-system-card",
        source: "OpenAI"
    },
    {
        title: "Providing ChatGPT to the Entire U.S. Federal Workforce",
        summary: "Today, OpenAI for Government is announcing a new partnership with the U.S. General Services Administration (GSA) to launch a transformative initiative. For the next year, ChatGPT Enterprise will be av...",
        link: "https://openai.com/index/providing-chatgpt-to-the-entire-us-federal-workforce",
        source: "OpenAI"
    },
    {
        title: "Estimating worst case frontier risks of open weight LLMs",
        summary: "In this paper, we study the worst-case frontier risks of releasing gpt-oss. We introduce malicious fine-tuning (MFT), where we attempt to elicit maximum capabilities by fine-tuning gpt-oss to be as ca...",
        link: "https://openai.com/index/estimating-worst-case-frontier-risks-of-open-weight-llms",
        source: "OpenAI"
    },
    {
        title: "Introducing gpt-oss",
        summary: "Weâ€™re releasing gpt-oss-120b and gpt-oss-20bâ€”two state-of-the-art open-weight language models that deliver strong real-world performance at low cost. Available under the flexible Apache 2.0 licens...",
        link: "https://openai.com/index/introducing-gpt-oss",
        source: "OpenAI"
    },
    {
        title: "gpt-oss-120b & gpt-oss-20b Model Card",
        summary: "We introduce gpt-oss-120b and gpt-oss-20b, two open-weight reasoning models available under the Apache 2.0 license and our gpt-oss usage policy.",
        link: "https://openai.com/index/gpt-oss-model-card",
        source: "OpenAI"
    },
    {
        title: "Open Weights and AI for All",
        summary: "AIâ€™s next frontier isnâ€™t just about capabilityâ€”itâ€™s about who gets to use it. Our mission to put AI in the hands of as many people as possible is what drives us. Todayâ€™s release of our most ...",
        link: "https://openai.com/global-affairs/open-weights-and-ai-for-all",
        source: "OpenAI"
    },
    {
        title: "What weâ€™re optimizing ChatGPT for",
        summary: "We build ChatGPT to help you thrive in all the ways you want. Learn how we're improving support for tough moments, have rolled out reminders to take breaks, and are working on better life advice, all ...",
        link: "https://openai.com/index/optimizing-chatgpt",
        source: "OpenAI"
    },
    {
        title: "Figma uses AI to transform digital design",
        summary: "Discover how Figma is transforming digital design with AI. David Kossnick shares how tools like Figma Make empower teams to prototype, collaborate, and build with AIâ€”reshaping workflows for designer...",
        link: "https://openai.com/index/figma-david-kossnick",
        source: "OpenAI"
    },
    {
        title: "Introducing Stargate Norway",
        summary: "Weâ€™re launching Stargate Norwayâ€”OpenAIâ€™s first AI data center initiative in Europe under our OpenAI for Countries program. Stargate is OpenAIâ€™s overarching infrastructure platform and is a cri...",
        link: "https://openai.com/index/introducing-stargate-norway",
        source: "OpenAI"
    },
    {
        title: "Three lessons for creating a sustainable AI advantage",
        summary: "Discover how Intercom built a scalable AI platform with 3 key lessonsâ€”from evaluations to architectureâ€”to lead the future of customer support.",
        link: "https://openai.com/index/intercom",
        source: "OpenAI"
    },
    {
        title: "Introducing study mode in ChatGPT",
        summary: "Introducing study mode in ChatGPT, a new learning experience that helps you work through problems step by step, guiding students with questions, scaffolding, and feedback for deeper learning.",
        link: "https://openai.com/index/chatgpt-study-mode",
        source: "OpenAI"
    },
    {
        title: "Resolving digital threats 100x faster with OpenAI",
        summary: "Discover how Outtake uses GPT-4.1 and OpenAI o3 to power AI agents that detect and resolve digital threats 100x faster than before.",
        link: "https://openai.com/index/outtake",
        source: "OpenAI"
    },
    {
        title: "Model ML is helping financial firms rebuild with AI from the ground up",
        summary: "As part of our Executive Function series, Model ML CEO Chaz Englander discusses how AI-native infrastructure and autonomous agents are transforming financial services workflows.",
        link: "https://openai.com/index/model-ml-chaz-englander",
        source: "OpenAI"
    },
    {
        title: "Announcing OpenAI DevDay 2025",
        summary: "OpenAI DevDay returns on October 6, 2025 in San Franciscoâ€”bringing together 1,500+ developers to preview new tools, hear from OpenAI leaders, and shape the future of AI.",
        link: "https://openai.com/index/announcing-devday-2025",
        source: "OpenAI"
    },
    {
        title: "Pioneering an AI clinical copilot with Penda Health",
        summary: "OpenAI and Penda Health debut an AI clinical copilot that cuts diagnostic errors by 16% in real-world useâ€”offering a new path for safe, effective AI in healthcare.",
        link: "https://openai.com/index/ai-clinical-copilot-penda-health",
        source: "OpenAI"
    },
    {
        title: "OpenAIâ€™s new economic analysis",
        summary: "Analysis provides insights into ChatGPTâ€™s impact on the economy. OpenAI also launches new research collaboration to study AIâ€™s broader effects on the labor market and productivity.",
        link: "https://openai.com/global-affairs/new-economic-analysis",
        source: "OpenAI"
    },
    {
        title: "Stargate advances with 4.5 GW partnership with Oracle",
        summary: "Oracle and OpenAI have entered an agreement to develop 4.5 gigawatts of additional Stargate data center capacity in the U.S. This investment will create new jobs, accelerate Americaâ€™s reindustrializ...",
        link: "https://openai.com/index/stargate-advances-with-partnership-with-oracle",
        source: "OpenAI"
    },
    {
        title: "OpenAI and UK Government announce strategic partnership to deliver AI-driven growth",
        summary: "OpenAI partners with the UK Government to boost AI adoption, drive economic growth, and enhance public services for a thriving AI ecosystem in the UK.",
        link: "https://openai.com/global-affairs/openai-and-uk-government-partnership",
        source: "OpenAI"
    },
    {
        title: "AI as the greatest source of empowerment for all",
        summary: "Iâ€™ve always considered myself a pragmatic technologistâ€”someone who loves technology not for its own sake, but for the direct impact it can have on peopleâ€™s lives. Thatâ€™s what makes this job so...",
        link: "https://openai.com/index/ai-as-the-greatest-source-of-empowerment-for-all",
        source: "OpenAI"
    },
    {
        title: "A $50 million fund to build with communities",
        summary: "OpenAI is launching an initial $50 million fund that supports nonprofit and community organizations, informed by the independent OpenAI Nonprofit Commission report.",
        link: "https://openai.com/index/50-million-fund-to-build-with-communities",
        source: "OpenAI"
    },
    {
        title: "ChatGPT agent System Card",
        summary: "ChatGPT agent System Card: OpenAIâ€™s agentic model unites research, browser automation, and code tools with safeguards under the Preparedness Framework.",
        link: "https://openai.com/index/chatgpt-agent-system-card",
        source: "OpenAI"
    },
    {
        title: "Introducing ChatGPT agent",
        summary: "Introducing ChatGPT agent: it thinks and acts, using tools to complete tasks like research, bookings, and slideshowsâ€”all with your guidance.",
        link: "https://openai.com/index/introducing-chatgpt-agent",
        source: "OpenAI"
    },
    {
        title: "Agent bio bug bounty call",
        summary: "OpenAI invites researchers to its Bio Bug Bounty. Test the ChatGPT agentâ€™s safety with a universal jailbreak prompt and win up to $25,000.",
        link: "https://openai.com/bio-bug-bounty",
        source: "OpenAI"
    },
    {
        title: "OpenAI nonprofit jam",
        summary: "At OpenAI, we build tools to help people solve hard problemsâ€”including nonprofits working on the frontlines of their communities. The OpenAI Academy is teaming up with the Walton Family Foundation, ...",
        link: "https://openai.com/global-affairs/openai-nonprofit-jam",
        source: "OpenAI"
    },
    {
        title: "Statement from the OpenAI Board of Directors on the Nonprofit Commission Report",
        summary: "The Board of Directors thanks the members of the independent OpenAI Nonprofit Commission for their extensive work and engagement.",
        link: "https://openai.com/index/nonprofit-commission-report",
        source: "OpenAI"
    },
    {
        title: "Invideo AI uses OpenAI models to create videos 10x faster",
        summary: "Invideo AI uses OpenAIâ€™s GPT-4.1, gpt-image-1, and text-to-speech models to transform creative ideas into professional videos in minutes.",
        link: "https://openai.com/index/invideo-ai",
        source: "OpenAI"
    },
    {
        title: "Intellectual freedom by design",
        summary: "ChatGPT is designed to be useful, trustworthy, and adaptableâ€”so you can make it your own.",
        link: "https://openai.com/global-affairs/intellectual-freedom-by-design",
        source: "OpenAI"
    },
    {
        title: "The EU Code of Practice and future of AI in Europe",
        summary: "OpenAI joins the EU Code of Practice, advancing responsible AI while partnering with European governments to drive innovation, infrastructure, and economic growth.",
        link: "https://openai.com/global-affairs/eu-code-of-practice",
        source: "OpenAI"
    },
    {
        title: "Sam & Jony",
        summary: "Building a family of AI products for everyone.",
        link: "https://openai.com/sam-and-jony",
        source: "OpenAI"
    },
    {
        title: "Working with 400,000 teachers to shape the future of AI in schools",
        summary: "OpenAI partners with the American Federation of Teachers to launch a 5-year initiative equipping 400,000 K-12 educators to lead AI innovation in classrooms.",
        link: "https://openai.com/global-affairs/aft",
        source: "OpenAI"
    },
    {
        title: "No-code personal agents, powered by GPT-4.1 and Realtime API",
        summary: "Learn how Genspark built a $36M ARR AI product in 45 daysâ€”with no-code agents powered by GPT-4.1 and OpenAI Realtime API.",
        link: "https://openai.com/index/genspark",
        source: "OpenAI"
    },
    {
        title: "AI in Australiaâ€”OpenAIâ€™s Economic Blueprint",
        summary: "Today, OpenAI, in partnership with Mandala Partners, is sharing the OpenAI AI Economic Blueprint for Australia. At a time when boosting productivity has emerged as a national priority for Australia, t...",
        link: "https://openai.com/global-affairs/openais-australia-economic-blueprint",
        source: "OpenAI"
    },
    {
        title: "Customizable, no-code voice agent automation with GPT-4o",
        summary: "Retell AI is transforming the call center with AI voice automation powered by GPT-4o and GPT-4.1. Its no-code platform enables businesses to launch natural, real-time voice agents that cut call costs,...",
        link: "https://openai.com/index/retell-ai",
        source: "OpenAI"
    },
    {
        title: "Driving scalable growth with OpenAI o3, GPT-4.1, and CUA",
        summary: "Unify, an AI-powered GTM platform, uses OpenAIâ€™s o3, GPT-4.1, and CUA to automate prospecting, research, and outreach. With hyper-personalized messaging and an always-on workflow, Unify helps teams ...",
        link: "https://openai.com/index/unify",
        source: "OpenAI"
    },
    {
        title: "Toward understanding and preventing misalignment generalization",
        summary: "We study how training on incorrect responses can cause broader misalignment in language models and identify an internal feature driving this behaviorâ€”one that can be reversed with minimal fine-tunin...",
        link: "https://openai.com/index/emergent-misalignment",
        source: "OpenAI"
    },
    {
        title: "Preparing for future AI risks in biology",
        summary: "Advanced AI can transform biology and medicineâ€”but also raises biosecurity risks. Weâ€™re proactively assessing capabilities and implementing safeguards to prevent misuse.",
        link: "https://openai.com/index/preparing-for-future-ai-capabilities-in-biology",
        source: "OpenAI"
    },
    {
        title: "Introducing OpenAI for Government",
        summary: "Weâ€™re launching OpenAI for Government, a new initiative focused on bringing our most advanced AI tools to public servants across the United States. We're supporting the U.S. government's efforts in ...",
        link: "https://openai.com/global-affairs/introducing-openai-for-government",
        source: "OpenAI"
    },
    {
        title: "Bringing the magic of AI to Mattelâ€™s iconic brands",
        summary: "OpenAI and Mattel are partnering to integrate AI into iconic brands such as Barbie and Hot Wheels, aiming to enhance creative development, streamline workflows, and create new ways for fans to engage.",
        link: "https://openai.com/index/mattels-iconic-brands",
        source: "OpenAI"
    },
    {
        title: "Scaling security with responsible disclosure",
        summary: "OpenAI introduces its Outbound Coordinated Disclosure Policy to guide how it responsibly reports vulnerabilities in third-party softwareâ€”emphasizing integrity, collaboration, and proactive security ...",
        link: "https://openai.com/index/scaling-coordinated-vulnerability-disclosure",
        source: "OpenAI"
    },
    {
        title: "How weâ€™re responding to The New York Timesâ€™ data demands in order to protect user privacy",
        summary: "OpenAI is fighting a court order at the demands of The New York Times and plaintiffs, which involves retention of consumer ChatGPT and API user data indefinitely. Learn how weâ€™re working to uphold u...",
        link: "https://openai.com/index/response-to-nyt-data-demands",
        source: "OpenAI"
    },
    {
        title: "Disrupting malicious uses of AI: June 2025",
        summary: "In our June 2025 update, we outline how weâ€™re disrupting malicious uses of AIâ€”through safety tools that detect and counter abuse, support democratic values, and promote responsible AI deployment f...",
        link: "https://openai.com/global-affairs/disrupting-malicious-uses-of-ai-june-2025",
        source: "OpenAI"
    },
    {
        title: "Creating websites in minutes with AI Website Builder",
        summary: "Wixâ€™s AI Website Builder, powered by OpenAI, lets anyone create a full website in minutesâ€”just by describing their idea in a conversation.",
        link: "https://openai.com/index/wix",
        source: "OpenAI"
    },
    {
        title: "Addendum to OpenAI o3 and o4-mini system card: OpenAI o3 Operator",
        summary: "We are replacing the existing GPT-4o-based model for Operator with a version based on OpenAI o3. The API version will remain based on 4o.",
        link: "https://openai.com/index/o3-o4-mini-system-card-addendum-operator-o3",
        source: "OpenAI"
    },
    {
        title: "OpenAI Deutschland",
        summary: "OpenAI announces the opening of its first office in Germany, based in Munich.",
        link: "https://openai.com/index/openai-deutschland",
        source: "OpenAI"
    },
    {
        title: "Shipping code faster with o3, o4-mini, and GPT-4.1",
        summary: "CodeRabbit uses OpenAI models to revolutionize code reviewsâ€”boosting accuracy, accelerating PR merges, and helping developers ship faster with fewer bugs and higher ROI.",
        link: "https://openai.com/index/coderabbit",
        source: "OpenAI"
    },
    {
        title: "Introducing Stargate UAE",
        summary: "Weâ€™re launching Stargate UAE â€“ the first international deployment of Stargate, OpenAIâ€™s AI infrastructure platform.",
        link: "https://openai.com/index/introducing-stargate-uae",
        source: "OpenAI"
    },
    {
        title: "New tools and features in the Responses API",
        summary: "New features in the Responses API: Remote MCP, image gen, Code Interpreter, and more. Powering faster, smarter agents with GPT-4o & o-series models, plus new features for reliability and efficiency.",
        link: "https://openai.com/index/new-tools-and-features-in-the-responses-api",
        source: "OpenAI"
    },
    {
        title: "Addendum to o3 and o4-mini system card: Codex",
        summary: "Codex is a cloud-based coding agent. Codex is powered by codex-1, a version of OpenAI o3 optimized for software engineering. codex-1 was trained using reinforcement learning on real-world coding tasks...",
        link: "https://openai.com/index/o3-o4-mini-codex-system-card-addendum",
        source: "OpenAI"
    },
    {
        title: "Introducing Codex",
        summary: "Introducing Codex: a cloud-based software engineering agent that can work on many tasks in parallel, powered by codex-1. With Codex, developers can simultaneously deploy multiple agents to independent...",
        link: "https://openai.com/index/introducing-codex",
        source: "OpenAI"
    },
    {
        title: "AI powers Expediaâ€™s marketing evolution",
        summary: "A conversation with Jochen Koedijk, Chief Marketing Officer of Expedia Group.",
        link: "https://openai.com/index/expedia-jochen-koedijk",
        source: "OpenAI"
    },
    {
        title: "Introducing HealthBench",
        summary: "HealthBench is a new evaluation benchmark for AI in healthcare which evaluates models in realistic scenarios. Built with input from 250+ physicians, it aims to provide a shared standard for model perf...",
        link: "https://openai.com/index/healthbench",
        source: "OpenAI"
    },
    {
        title: "OpenAI Expands Leadership with Fidji Simo",
        summary: "Read the message Sam shared with the company earlier today.",
        link: "https://openai.com/index/leadership-expansion-with-fidji-simo",
        source: "OpenAI"
    },
    {
        title: "OpenAIâ€™s response to the Department of Energy on AI infrastructure",
        summary: "Why infrastructure is destiny and how the US can seize it.",
        link: "https://openai.com/global-affairs/response-to-department-of-energy",
        source: "OpenAI"
    },
    {
        title: "Introducing data residency in Asia",
        summary: "Data residency builds on OpenAIâ€™s enterprise-grade data privacy, security, and compliance programs supporting customers worldwide.",
        link: "https://openai.com/index/introducing-data-residency-in-asia",
        source: "OpenAI"
    },
    {
        title: "The San Antonio Spurs use ChatGPT to scale impact on and off the court",
        summary: "Discover how the San Antonio Spurs are using custom GPTs to enhance fan engagement, streamline operations, and drive innovation across teams.",
        link: "https://openai.com/index/san-antonio-spurs",
        source: "OpenAI"
    },
    {
        title: "Loweâ€™s puts project expertise into every hand",
        summary: "Loweâ€™s partnered with OpenAI to build Mylow and Mylow Companion, AI-powered tools that bring expert help to both customers and store associatesâ€”making complex home improvement projects easier to p...",
        link: "https://openai.com/index/lowes",
        source: "OpenAI"
    },
    {
        title: "Introducing OpenAI for Countries",
        summary: "A new initiative to support countries around the world that want to build on democratic AI rails.",
        link: "https://openai.com/global-affairs/openai-for-countries",
        source: "OpenAI"
    },
    {
        title: "Introducing AI stories: daily benefits shine a light on bigger opportunities",
        summary: "Sam Altman has written that we are entering the Intelligence Age, a time when AI will help people become dramatically more capable. The biggest problems of todayâ€”across science, medicine, education,...",
        link: "https://openai.com/global-affairs/ai-stories-daily-benefits-bigger-opportunities",
        source: "OpenAI"
    },
    {
        title: "AI helps John Deere transform agriculture",
        summary: "John Deereâ€™s Justin Rose talks about transforming agriculture with AI and shares how the company is scaling innovation to help farmers work smarter, more efficiently, and sustainably.",
        link: "https://openai.com/index/john-deere-justin-rose",
        source: "OpenAI"
    },
    {
        title: "Evolving OpenAIâ€™s structure",
        summary: "An update from the OpenAI board on transitioning its for-profit entity to a Public Benefit Corporation, reinforcing its mission-driven structure under nonprofit oversight while enabling greater impact...",
        link: "https://openai.com/index/evolving-our-structure",
        source: "OpenAI"
    },
    {
        title: "Loweâ€™s leverages AI to power home improvement retail",
        summary: "A conversation with Chandhu Nair, Senior Vice President of Data, AI, and Innovation.",
        link: "https://openai.com/index/lowes-chandhu-nair",
        source: "OpenAI"
    },
    {
        title: "Expanding on what we missed with sycophancy",
        summary: "A deeper dive on our findings, what went wrong, and future changes weâ€™re making.",
        link: "https://openai.com/index/expanding-on-sycophancy",
        source: "OpenAI"
    },
    {
        title: "Sycophancy in GPT-4o: what happened and what weâ€™re doing about it",
        summary: "We have rolled back last weekâ€™s GPTâ€‘4o update in ChatGPT so people are now using an earlier version with more balanced behavior. The update we removed was overly flattering or agreeableâ€”often de...",
        link: "https://openai.com/index/sycophancy-in-gpt-4o",
        source: "OpenAI"
    },
    {
        title: "New in ChatGPT for Business: April 2025",
        summary: "Watch hands-on demos of the lastest in ChatGPT for Business: o3, image generation, enhanced memory, and internal knowledge.",
        link: "https://openai.com/business/new-in-chatgpt-for-business-april-updates-2025",
        source: "OpenAI"
    },
    {
        title: "Introducing our latest image generation model in the API",
        summary: "Our latest image generation model is now available in the API via â€˜gpt-image-1â€™â€”enabling developers and businesses to build professional-grade, customizable visuals directly into their own tools...",
        link: "https://openai.com/index/image-generation-api",
        source: "OpenAI"
    },
    {
        title: "Speak is personalizing language learning with AI",
        summary: "A conversation with Connor Zwick, CEO & Co-founder of Speak.",
        link: "https://openai.com/index/speak-connor-zwick",
        source: "OpenAI"
    },
    {
        title: "The Washington Post partners with OpenAI on search content",
        summary: "The Washington Post is partnering with with OpenAI to integrate news into ChatGPT, providing users with summaries, quotes, and direct links to original reporting.",
        link: "https://openai.com/global-affairs/the-washington-post-partners-with-openai",
        source: "OpenAI"
    },
    {
        title: "OpenAI o3 and o4-mini System Card",
        summary: "OpenAI o3 and OpenAI o4-mini combine state-of-the-art reasoning with full tool capabilitiesâ€”web browsing, Python, image and file analysis, image generation, canvas, automations, file search, and mem...",
        link: "https://openai.com/index/o3-o4-mini-system-card",
        source: "OpenAI"
    },
    {
        title: "Thinking with images",
        summary: "OpenAI o3 and o4-mini represent a significant breakthrough in visual perception by reasoning with images in their chain of thought.",
        link: "https://openai.com/index/thinking-with-images",
        source: "OpenAI"
    },
    {
        title: "Introducing OpenAI o3 and o4-mini",
        summary: "Our smartest and most capable models to date with full tool access",
        link: "https://openai.com/index/introducing-o3-and-o4-mini",
        source: "OpenAI"
    },
    {
        title: "OpenAI announces nonprofit commission advisors",
        summary: "OpenAI is appointing four new advisors to help inform OpenAIâ€™s philanthropic efforts.",
        link: "https://openai.com/index/nonprofit-commission-advisors",
        source: "OpenAI"
    },
    {
        title: "Our updated Preparedness Framework",
        summary: "Sharing our updated framework for measuring and protecting against severe harm from frontier AI capabilities.",
        link: "https://openai.com/index/updating-our-preparedness-framework",
        source: "OpenAI"
    },
    {
        title: "Introducing GPT-4.1 in the API",
        summary: "Introducing GPT-4.1 in the APIâ€”a new family of models with across-the-board improvements, including major gains in coding, instruction following, and long-context understanding. Weâ€™re also releasi...",
        link: "https://openai.com/index/gpt-4-1",
        source: "OpenAI"
    },
    {
        title: "BrowseComp: a benchmark for browsing agents",
        summary: "BrowseComp: a benchmark for browsing agents.",
        link: "https://openai.com/index/browsecomp",
        source: "OpenAI"
    },
    {
        title: "OpenAI Pioneers Program",
        summary: "Advancing model performance and real world evaluation in applied domains.",
        link: "https://openai.com/index/openai-pioneers-program",
        source: "OpenAI"
    },
    {
        title: "Canva enables creativity with AI",
        summary: "A conversation with Cameron Adams, Chief Product Officer and Co-founder of Canva.",
        link: "https://openai.com/index/canva-cam-adams",
        source: "OpenAI"
    },
    {
        title: "OpenAIâ€™s EU Economic Blueprint",
        summary: "Today, OpenAI is sharing the EU Economic Blueprintâ€”a set of proposals to help Europe seize the promise of artificial intelligence, drive sustainable economic growth across the region, and ensure tha...",
        link: "https://openai.com/global-affairs/openais-eu-economic-blueprint",
        source: "OpenAI"
    },
    {
        title: "New commission to provide insight as OpenAI builds the worldâ€™s best-equipped nonprofit",
        summary: "Already a nonprofit, and already using AI to help people solve hard problems, OpenAI aims to build the best-equipped nonprofit the world has ever seenâ€”combining potentially historic financial resour...",
        link: "https://openai.com/index/nonprofit-commission-guidance",
        source: "OpenAI"
    },
    {
        title: "PaperBench: Evaluating AIâ€™s Ability to Replicate AI Research",
        summary: "We introduce PaperBench, a benchmark evaluating the ability of AI agents to replicate state-of-the-art AI research.",
        link: "https://openai.com/index/paperbench",
        source: "OpenAI"
    },
    {
        title: "Our response to the UKâ€™s copyright consultation",
        summary: "Recommendations for pro-innovation policies that can help make the UK the AI capital of Europe.",
        link: "https://openai.com/global-affairs/response-to-uk-copyright-consultation",
        source: "OpenAI"
    },
    {
        title: "New funding to build towards AGI",
        summary: "Today weâ€™re announcing new fundingâ€”$40B at a $300B post-money valuation, which enables us to push the frontiers of AI research even further, scale our compute infrastructure, and deliver increasin...",
        link: "https://openai.com/index/march-funding-updates",
        source: "OpenAI"
    },
    {
        title: "Moving from intent-based bots to proactive AI agents",
        summary: "Moving from intent-based bots to proactive AI agents.",
        link: "https://openai.com/index/zendesk",
        source: "OpenAI"
    },
    {
        title: "Security on the path to AGI",
        summary: "At OpenAI, we proactively adapt, including by building comprehensive security measures directly into our infrastructure and models.",
        link: "https://openai.com/index/security-on-the-path-to-agi",
        source: "OpenAI"
    },
    {
        title: "Introducing 4o Image Generation",
        summary: "At OpenAI, we have long believed image generation should be a primary capability of our language models. Thatâ€™s why weâ€™ve built our most advanced image generator yet into GPTâ€‘4o. The resultâ€”im...",
        link: "https://openai.com/index/introducing-4o-image-generation",
        source: "OpenAI"
    },
    {
        title: "Addendum to GPT-4o System Card: 4o image generation",
        summary: "4o image generation is a new, significantly more capable image generation approach than our earlier DALLÂ·E 3 series of models. It can create photorealistic output. It can take images as inputs and tr...",
        link: "https://openai.com/index/gpt-4o-image-generation-system-card-addendum",
        source: "OpenAI"
    },
    {
        title: "Automating 90% of finance and legal work with agents",
        summary: "Hebbiaâ€™s deep research automates 90% of finance and legal work, powered by OpenAI",
        link: "https://openai.com/index/hebbia",
        source: "OpenAI"
    },
    {
        title: "Scaling the OpenAI Academy",
        summary: "Online resource hub will support AI literacy and help people from all backgrounds access tools, best practices, and peer insights to use AI.",
        link: "https://openai.com/global-affairs/scaling-the-openai-academy",
        source: "OpenAI"
    },
    {
        title: "Leadership updates",
        summary: "OpenAI has grown a lot. We remain focused on the same coreâ€”pursuing frontier AI research that accelerates human progressâ€“but we now also deliver products used by hundreds of millions of people.",
        link: "https://openai.com/index/leadership-updates-march-2025",
        source: "OpenAI"
    },
    {
        title: "Early methods for studying affective use and emotional well-being on ChatGPT",
        summary: "An OpenAI and MIT Media Lab Research collaboration.",
        link: "https://openai.com/index/affective-use-study",
        source: "OpenAI"
    },
    {
        title: "Personalizing travel at scale with OpenAI",
        summary: "By integrating its data systems with OpenAIâ€™s LLMs, Booking.com delivers smarter search, faster support, and intent-driven travel experiences.",
        link: "https://openai.com/index/booking-com",
        source: "OpenAI"
    },
    {
        title: "Introducing next-generation audio models in the API",
        summary: "For the first time, developers can also instruct the text-to-speech model to speak in a specific wayâ€”for example, â€œtalk like a sympathetic customer service agentâ€â€”unlocking a new level of cust...",
        link: "https://openai.com/index/introducing-our-next-generation-audio-models",
        source: "OpenAI"
    },
    {
        title: "EliseAI improves housing and healthcare efficiency with AI",
        summary: "A conversation with Minna Song, CEO & Co-founder of EliseAI.",
        link: "https://openai.com/index/eliseai-minna-song",
        source: "OpenAI"
    },
    {
        title: "New in ChatGPT for Business: March 2025",
        summary: "Join us as we share our latest releases and how ChatGPT is becoming more interactive, customized to the way your teams work, and agentic.",
        link: "https://openai.com/business/new-in-chatgpt-for-work-march-updates-2025",
        source: "OpenAI"
    },
    {
        title: "The court rejects Elonâ€™s latest attempt to slow OpenAI down",
        summary: "We welcome the courtâ€™s March 4, 2025, decision rejecting Elon Muskâ€™s latest attempt to slow down OpenAI for his personal benefit.",
        link: "https://openai.com/index/court-rejects-elon",
        source: "OpenAI"
    },
    {
        title: "OpenAIâ€™s proposals for the U.S. AI Action Plan",
        summary: "Recommendations build on OpenAIâ€™s Economic Blueprint to strengthen Americaâ€™s AI leadership.",
        link: "https://openai.com/global-affairs/openai-proposals-for-the-us-ai-action-plan",
        source: "OpenAI"
    },
    {
        title: "Driving growth and â€˜WOWâ€™ moments with OpenAI",
        summary: "LY Corporation: Driving growth and â€˜WOWâ€™ moments with OpenAI",
        link: "https://openai.com/index/ly-corporation",
        source: "OpenAI"
    },
    {
        title: "New tools for building agents",
        summary: "Weâ€™re evolving our platform to help developers and enterprises build useful and reliable agents.",
        link: "https://openai.com/index/new-tools-for-building-agents",
        source: "OpenAI"
    },
    {
        title: "Detecting misbehavior in frontier reasoning models",
        summary: "Frontier reasoning models exploit loopholes when given the chance. We show we can detect exploits using an LLM to monitor their chains-of-thought. Penalizing their â€œbad thoughtsâ€ doesnâ€™t stop th...",
        link: "https://openai.com/index/chain-of-thought-monitoring",
        source: "OpenAI"
    },
    {
        title: "Nubank elevates customer experiences with OpenAI",
        summary: "Nubank elevates customer experiences with OpenAI",
        link: "https://openai.com/index/nubank",
        source: "OpenAI"
    },
    {
        title: "Accelerating engineering cycles 20% with OpenAI",
        summary: "Accelerating engineering cycles 20% with OpenAI.",
        link: "https://openai.com/index/factory",
        source: "OpenAI"
    },
    {
        title: "LaunchDarkly's approach to AI-powered product management",
        summary: "A conversation with Claire Vo, Chief Product Officer of LaunchDarkly, about the changing role of product managers, her anti-to-do list, and building AI-native teams.",
        link: "https://openai.com/index/launchdarkly-claire-vo",
        source: "OpenAI"
    },
    {
        title: "Introducing NextGenAI",
        summary: "OpenAI commits $50M in funding and tools to leading institutions.",
        link: "https://openai.com/index/introducing-nextgenai",
        source: "OpenAI"
    },
    {
        title: "1,000 Scientist AI Jam Session",
        summary: "OpenAI and nine national labs bring together leading scientists for first-of-its kind event.",
        link: "https://openai.com/global-affairs/1000-scientist-ai-jam-session",
        source: "OpenAI"
    },
    {
        title: "Supporting sellers with enhanced product listings",
        summary: "Mercari leverages GPT-4o mini and GPT-4 to streamline selling, enhance product listings, and boost sales, transforming the online marketplace with features like AI Listing Support and Mercari AI Assis...",
        link: "https://openai.com/index/mercari",
        source: "OpenAI"
    },
    {
        title: "OpenAI GPT-4.5 System Card",
        summary: "Weâ€™re releasing a research preview of OpenAI GPTâ€‘4.5, our largest and most knowledgeable model yet.",
        link: "https://openai.com/index/gpt-4-5-system-card",
        source: "OpenAI"
    },
    {
        title: "Introducing GPT-4.5",
        summary: "Weâ€™re releasing a research preview of GPTâ€‘4.5â€”our largest and best model for chat yet. GPTâ€‘4.5 is a step forward in scaling up pre-training and post-training.",
        link: "https://openai.com/index/introducing-gpt-4-5",
        source: "OpenAI"
    },
    {
        title: "Building an autonomous financial analyst with o1 and o3-mini",
        summary: "Endex builds the future of financial analysis, powered by OpenAIâ€™s reasoning models.",
        link: "https://openai.com/index/endex",
        source: "OpenAI"
    },
    {
        title: "Deep research System Card",
        summary: "This report outlines the safety work carried out prior to releasing deep research including external red teaming, frontier risk evaluations according to our Preparedness Framework, and an overview of ...",
        link: "https://openai.com/index/deep-research-system-card",
        source: "OpenAI"
    },
    {
        title: "Estonia and OpenAI to bring ChatGPT to schools nationwide",
        summary: "Estonia and OpenAI to bring ChatGPT to schools nationwide. OpenAI will work with the Estonian Government to provide students and teachers in the secondary school system with access to ChatGPT Edu.",
        link: "https://openai.com/index/estonia-schools-and-chatgpt",
        source: "OpenAI"
    },
    {
        title: "Disrupting malicious uses of AI",
        summary: "Ensuring AI benefits humanity by advancing democratic AI, preventing misuse, and protecting against authoritarian threats.",
        link: "https://openai.com/global-affairs/disrupting-malicious-uses-of-ai",
        source: "OpenAI"
    },
    {
        title: "Uber enables outstanding on-demand experiences with AI",
        summary: "A conversation with Jai Malkani, Head of AI and Product, Customer Obsession at Uber.",
        link: "https://openai.com/index/uber-enables-outstanding-experiences",
        source: "OpenAI"
    },
    {
        title: "College students and ChatGPT adoption in the US",
        summary: "A look into state-by-state adoption and how gaps might impact workforce readiness.",
        link: "https://openai.com/global-affairs/college-students-and-chatgpt",
        source: "OpenAI"
    },
    {
        title: "Introducing the SWE-Lancer benchmark",
        summary: "Can frontier LLMs earn $1 million from real-world freelance software engineering?",
        link: "https://openai.com/index/swe-lancer",
        source: "OpenAI"
    },
    {
        title: "OpenAI and Guardian Media Group launch content partnership",
        summary: "OpenAI and Guardian Media Group announce content partnership to bring Guardian news content to ChatGPT.",
        link: "https://openai.com/index/openai-and-guardian-media-group-launch-content-partnership",
        source: "OpenAI"
    },
    {
        title: "Fanatics Betting and Gaming uses AI to focus on the big picture",
        summary: "A conversation with Andrea Ellis, Chief Financial Officer of Fanatics Betting and Gaming.",
        link: "https://openai.com/index/fanatics-betting-gaming-andrea-ellis",
        source: "OpenAI"
    },
    {
        title: "Wayfair is shaping the future of retail with AI",
        summary: "A conversation with Fiona Tan, Chief Technology Officer of Wayfair.",
        link: "https://openai.com/index/wayfair-fiona-tan",
        source: "OpenAI"
    },
    {
        title: "Using OpenAI o1 for financial analysis",
        summary: "Rogo scales AI-driven financial research with OpenAI o1",
        link: "https://openai.com/index/rogo",
        source: "OpenAI"
    },
    {
        title: "Sharing the latest Model Spec",
        summary: "Weâ€™ve made updates to the Model Spec based on external feedback and our continued research in shaping desired model behavior.",
        link: "https://openai.com/index/sharing-the-latest-model-spec",
        source: "OpenAI"
    },
    {
        title: "OpenAI partners with Schibsted Media Group",
        summary: "OpenAI and Schibsted Media Group announce content partnership to bring Guardian news and archive content to  ChatGPT.",
        link: "https://openai.com/index/openai-partners-with-schibsted-media-group",
        source: "OpenAI"
    },
    {
        title: "Introducing the Intelligence Age",
        summary: "We aired our first-ever television ad during the Super Bowl to pique peopleâ€™s curiosity and help us all realize how AI can open up new possibilities for us, create more fulfillment in our lives, and...",
        link: "https://openai.com/global-affairs/introducing-the-intelligence-age",
        source: "OpenAI"
    },
    {
        title: "OpenAI at the Paris AI Action Summit",
        summary: "OpenAI looks forward to engaging with global leaders on AIâ€™s role in shaping innovation and economic prosperity.",
        link: "https://openai.com/global-affairs/openai-at-the-paris-ai-action-summit",
        source: "OpenAI"
    },
    {
        title: "Introducing data residency in Europe",
        summary: "Data residency builds on OpenAIâ€™s enterprise-grade data privacy, security, and compliance programs supporting customers worldwide.",
        link: "https://openai.com/index/introducing-data-residency-in-europe",
        source: "OpenAI"
    },
    {
        title: "OpenAI and the CSU system bring AI to 500,000 students & faculty",
        summary: "The largest deployment of ChatGPT to date will expand the use of AI in education and help the United States build an AI-ready workforce.",
        link: "https://openai.com/index/openai-and-the-csu-system",
        source: "OpenAI"
    },
    {
        title: "Creating nail art with ChatGPT",
        summary: "Using ChatGPT to find inspiration for nail art",
        link: "https://openai.com/index/ten-tiny-canvases",
        source: "OpenAI"
    },
    {
        title: "Catching halibut with ChatGPT",
        summary: "Using ChatGPT to catch halibut",
        link: "https://openai.com/index/fishing-for-first-timers",
        source: "OpenAI"
    },
    {
        title: "Building a custom math tutor powered by ChatGPT",
        summary: "ChatGPT and personal tutoring",
        link: "https://openai.com/index/my-dog-the-math-tutor",
        source: "OpenAI"
    },
    {
        title: "Understanding complex trends with deep research",
        summary: "How OpenAI deep research helps Bain & Company understand complex industry trends.",
        link: "https://openai.com/index/deep-research",
        source: "OpenAI"
    },
    {
        title: "Introducing deep research",
        summary: "An agent that uses reasoning to synthesize large amounts of online information and complete multi-step research tasks for you. Available to Pro users today, Plus and Team next.",
        link: "https://openai.com/index/introducing-deep-research",
        source: "OpenAI"
    },
    {
        title: "OpenAI o3-mini System Card",
        summary: "This report outlines the safety work carried out for the OpenAI o3-mini model, including safety evaluations, external red teaming, and Preparedness Framework evaluations.",
        link: "https://openai.com/index/o3-mini-system-card",
        source: "OpenAI"
    },
    {
        title: "OpenAI o3-mini",
        summary: "Pushing the frontier of cost-effective reasoning.",
        link: "https://openai.com/index/openai-o3-mini",
        source: "OpenAI"
    },
    {
        title: "Strengthening Americaâ€™s AI leadership with the U.S. National Laboratories",
        summary: "OpenAIâ€™s latest line of reasoning models will be used by nationâ€™s leading scientists to drive scientific breakthroughs.",
        link: "https://openai.com/index/strengthening-americas-ai-leadership-with-the-us-national-laboratories",
        source: "OpenAI"
    },
    {
        title: "Introducing ChatGPT Gov",
        summary: "ChatGPT Gov is designed to streamline government agenciesâ€™ access to OpenAIâ€™s frontier models.",
        link: "https://openai.com/global-affairs/introducing-chatgpt-gov",
        source: "OpenAI"
    },
    {
        title: "Computer-Using Agent",
        summary: "A universal interface for AI to interact with the digital world.",
        link: "https://openai.com/index/computer-using-agent",
        source: "OpenAI"
    },
    {
        title: "Operator System Card",
        summary: "Drawing from OpenAIâ€™s established safety frameworks, this document highlights our multi-layered approach, including model and product mitigations weâ€™ve implemented to protect against prompt engine...",
        link: "https://openai.com/index/operator-system-card",
        source: "OpenAI"
    },
    {
        title: "Introducing Operator",
        summary: "A research preview of an agent that can use its own browser to perform tasks for you. Available to Pro users in the U.S.",
        link: "https://openai.com/index/introducing-operator",
        source: "OpenAI"
    },
    {
        title: "Bertelsmann powers creativity and productivity with OpenAI",
        summary: "Bertelsmann, the global media, services, and education company headquartered in Germany, will integrate OpenAIâ€™s technology across multiple brands around the world.",
        link: "https://openai.com/index/bertelsmann-powers-creativity-and-productivity-with-openai",
        source: "OpenAI"
    },
    {
        title: "Trading inference-time compute for adversarial robustness",
        summary: "Trading Inference-Time Compute for Adversarial Robustness",
        link: "https://openai.com/index/trading-inference-time-compute-for-adversarial-robustness",
        source: "OpenAI"
    },
    {
        title: "Stargate Infrastructure",
        summary: "OpenAI, and our strategic partners, are thrilled about our shared vision for the Infrastructure of AGI. We are energized by the challenges we face and are excited by the prospect of partnering with fi...",
        link: "https://openai.com/form/stargate-infrastructure",
        source: "OpenAI"
    },
    {
        title: "Announcing The Stargate Project",
        summary: "Announcing The Stargate Project",
        link: "https://openai.com/index/announcing-the-stargate-project",
        source: "OpenAI"
    },
    {
        title: "The power of personalized AI",
        summary: "The power of personalized AI",
        link: "https://openai.com/global-affairs/the-power-of-personalized-ai",
        source: "OpenAI"
    },
    {
        title: "Partnering with Axios expands OpenAIâ€™s work with the news industry",
        summary: "Publishers representing hundreds of newsrooms and content brands are using OpenAI partnerships and grant programs to adopt AI tools and strengthen the news ecosystem, while ChatGPT users gain access t...",
        link: "https://openai.com/index/partnering-with-axios-expands-openai-work-with-the-news-industry",
        source: "OpenAI"
    },
    {
        title: "Adebayo Ogunlesi joins OpenAIâ€™s Board of Directors",
        summary: "Adebayo Ogunlesi Joins OpenAIâ€™s Board of Directors",
        link: "https://openai.com/index/adebayo-ogunlesi-joins-openais-board-of-directors",
        source: "OpenAI"
    },
    {
        title: "OpenAIâ€™s Economic Blueprint",
        summary: "OpenAIâ€™s Economic Blueprint",
        link: "https://openai.com/global-affairs/openais-economic-blueprint",
        source: "OpenAI"
    },
    {
        title: "Why OpenAIâ€™s structure must evolve to advance our mission",
        summary: "A stronger non-profit supported by the for-profitâ€™s success.",
        link: "https://openai.com/index/why-our-structure-must-evolve-to-advance-our-mission",
        source: "OpenAI"
    },
    {
        title: "Deliberative alignment: reasoning enables safer language models",
        summary: "Deliberative alignment: reasoning enables safer language models
Introducing our new alignment strategy for o1 models, which are directly taught safety specifications and how to reason over them.",
        link: "https://openai.com/index/deliberative-alignment",
        source: "OpenAI"
    },
    {
        title: "OpenAI o1 and new tools for developers",
        summary: "Introducing OpenAI o1, Realtime API improvements, a new fine-tuning method and more for developers.",
        link: "https://openai.com/index/o1-and-new-tools-for-developers",
        source: "OpenAI"
    },
    {
        title: "Elon Musk wanted an OpenAI for-profit",
        summary: "Elon Muskâ€™s latest legal filing against OpenAI marks his fourth attempt in less than a year to reframe his claims. However, his own words and actions speak for themselvesâ€”in 2017, Elon not only wa...",
        link: "https://openai.com/index/elon-musk-wanted-an-openai-for-profit",
        source: "OpenAI"
    },
    {
        title: "Boosting the customer retail experience with GPT-4o mini",
        summary: "Zalando boosts the customer experience with its Assistant, powered by GPT-4o mini",
        link: "https://openai.com/index/zalando",
        source: "OpenAI"
    },
    {
        title: "Sora is here",
        summary: "Our video generation model, Sora, is now available to use at sora.com. Users can generate videos up to 1080p resolution, up to 20 sec long, and in widescreen, vertical or square aspect ratios. You can...",
        link: "https://openai.com/index/sora-is-here",
        source: "OpenAI"
    },
    {
        title: "Sora System Card",
        summary: "Sora is OpenAIâ€™s video generation model, designed to take text, image, and video inputs and generate a new video as an output. Sora builds on learnings from DALL-E and GPT models, and is designed to...",
        link: "https://openai.com/index/sora-system-card",
        source: "OpenAI"
    },
    {
        title: "Animator Lyndon Barrois creates new worlds with Sora",
        summary: "Filmmaker Lyndon Barrois describes how to use Sora as a storytelling tool.",
        link: "https://openai.com/index/sora-lyndon-barrois",
        source: "OpenAI"
    },
    {
        title: "Put AI to work for your product team",
        summary: "Put AI to work for your product team",
        link: "https://openai.com/index/put-ai-to-work-for-your-product-team",
        source: "OpenAI"
    },
    {
        title: "VallÃ©e Duhamel & Sora",
        summary: "Filmmaking duo VallÃ©e Duhamel explains how Sora helps build new worlds.",
        link: "https://openai.com/index/sora-vallee-duhamel",
        source: "OpenAI"
    },
    {
        title: "Minne Atairu & Sora",
        summary: "Interdisciplinary artist Minne Atairu discusses how Sora helps realize her vision.",
        link: "https://openai.com/index/sora-minne-atairu",
        source: "OpenAI"
    },
    {
        title: "Introducing ChatGPT Pro",
        summary: "Broadening usage of frontier AI",
        link: "https://openai.com/index/introducing-chatgpt-pro",
        source: "OpenAI"
    },
    {
        title: "OpenAI o1 System Card",
        summary: "This report outlines the safety work carried out prior to releasing OpenAI o1 and o1-mini, including external red teaming and frontier risk evaluations according to our Preparedness Framework.",
        link: "https://openai.com/index/openai-o1-system-card",
        source: "OpenAI"
    },
    {
        title: "OpenAI and Future partner on specialist content",
        summary: "OpenAI and Future, the global platform for specialist media, have today announced a strategic partnership to bring content from Futureâ€™s 200 plus media brands to OpenAIâ€™s users.",
        link: "https://openai.com/index/openai-and-future-partner-on-specialist-content",
        source: "OpenAI"
    },
    {
        title: "Shaping the future of financial services",
        summary: "Morgan Stanley uses AI evals to shape the future of financial services",
        link: "https://openai.com/index/morgan-stanley",
        source: "OpenAI"
    },
    {
        title: "Advancing red teaming with people and AI",
        summary: "Advancing red teaming with people and AI",
        link: "https://openai.com/index/advancing-red-teaming-with-people-and-ai",
        source: "OpenAI"
    },
    {
        title: "Empowering a global org with ChatGPT",
        summary: "Empowering a global org with ChatGPT",
        link: "https://openai.com/index/bbva",
        source: "OpenAI"
    },
    {
        title: "Building smarter maps with GPT-4o vision fine-tuning",
        summary: "Building smarter maps with GPT-4o vision fine-tuning",
        link: "https://openai.com/index/grab",
        source: "OpenAI"
    },
    {
        title: "Rox goes â€œall inâ€ on OpenAI",
        summary: "By combining commercial experience and deep LLM expertise with OpenAIâ€™s models, Rox makes every seller a top 1% seller.",
        link: "https://openai.com/index/rox",
        source: "OpenAI"
    },
    {
        title: "OpenAI en France",
        summary: "Our first office in continental Europe",
        link: "https://openai.com/index/openai-en-france",
        source: "OpenAI"
    },
    {
        title: "A Studentâ€™s Guide to Writing with ChatGPT",
        summary: "A Studentâ€™s Guide to Writing with ChatGPT",
        link: "https://openai.com/chatgpt/use-cases/student-writing-guide",
        source: "OpenAI"
    },
    {
        title: "Data-driven beauty and creativity with ChatGPT",
        summary: "Data-driven beauty: How The EstÃ©e Lauder Companies unlocks insights with ChatGPT",
        link: "https://openai.com/index/estee-lauder",
        source: "OpenAI"
    },
    {
        title: "OpenAIâ€™s comments to the NTIA on data center growth, resilience, and security",
        summary: "This comment was submitted in response to a request for information from the National Telecommunications and Information Administration (NTIA).",
        link: "https://openai.com/global-affairs/comments-to-the-ntia-on-data-center-growth-resilience-and-security",
        source: "OpenAI"
    },
    {
        title: "Introducing ChatGPT search",
        summary: "Get fast, timely answers with links to relevant web sources",
        link: "https://openai.com/index/introducing-chatgpt-search",
        source: "OpenAI"
    },
    {
        title: "Promegaâ€™s top-down adoption of ChatGPT accelerates manufacturing, sales, and marketing",
        summary: "Promega's top-down adoption of ChatGPT accelerates manufacturing, sales, and marketing",
        link: "https://openai.com/index/promega",
        source: "OpenAI"
    },
    {
        title: "Put AI to work for marketing teams",
        summary: "Put AI to Work for Marketing Teams",
        link: "https://openai.com/business/put-ai-to-work-for-marketing-teams",
        source: "OpenAI"
    },
    {
        title: "Introducing SimpleQA",
        summary: "A factuality benchmark called SimpleQA that measures the ability for language models to answer short, fact-seeking questions.",
        link: "https://openai.com/index/introducing-simpleqa",
        source: "OpenAI"
    },
    {
        title: "Delivering high-performance customer support",
        summary: "Decagon and OpenAI deliver high-performance, fully automated customer support at scale",
        link: "https://openai.com/index/decagon",
        source: "OpenAI"
    },
    {
        title: "OpenAIâ€™s approach to AI and national security",
        summary: "OpenAIâ€™s approach to AI and national security",
        link: "https://openai.com/global-affairs/openais-approach-to-ai-and-national-security",
        source: "OpenAI"
    },
    {
        title: "Simplifying, stabilizing, and scaling continuous-time consistency models",
        summary: "Weâ€™ve simplified, stabilized, and scaled continuous-time consistency models, achieving comparable sample quality to leading diffusion models, while using only two sampling steps.",
        link: "https://openai.com/index/simplifying-stabilizing-and-scaling-continuous-time-consistency-models",
        source: "OpenAI"
    },
    {
        title: "OpenAI appoints Scott Schools as Chief Compliance Officer",
        summary: "OpenAI appoints Scott Schools as Chief Compliance Officer",
        link: "https://openai.com/global-affairs/openai-chief-compliance-officer-announcement",
        source: "OpenAI"
    },
    {
        title: "Dr. Ronnie Chatterji named OpenAIâ€™s first Chief Economist",
        summary: "Dr. Ronnie Chatterji named OpenAIâ€™s first Chief Economist",
        link: "https://openai.com/global-affairs/openai-chief-economist-announcement",
        source: "OpenAI"
    },
    {
        title: "OpenAI and the Lenfest Institute AI Collaborative and Fellowship program",
        summary: "OpenAI and the Lenfest Institute AI Collaborative and Fellowship program",
        link: "https://openai.com/index/lenfest-institute",
        source: "OpenAI"
    },
    {
        title: "Solving complex problems with OpenAI o1 models",
        summary: "In this video, we share how the o1 reasoning models can help in domains like coding, strategy, and research.",
        link: "https://openai.com/business/solving-complex-problems-with-openai-o1-models",
        source: "OpenAI"
    },
    {
        title: "Evaluating fairness in ChatGPT",
        summary: "We've analyzed how ChatGPT responds to users based on their name, using AI research assistants to protect privacy.",
        link: "https://openai.com/index/evaluating-fairness-in-chatgpt",
        source: "OpenAI"
    },
    {
        title: "MLE-bench: Evaluating Machine Learning Agents on Machine Learning Engineering",
        summary: "We introduce MLE-bench, a benchmark for measuring how well AI agents perform at machine learning engineering.",
        link: "https://openai.com/index/mle-bench",
        source: "OpenAI"
    },
    {
        title: "An update on disrupting deceptive uses of AI",
        summary: "OpenAIâ€™s mission is to ensure that artificial general intelligence benefits all of humanity. We are dedicated to identifying, preventing, and disrupting attempts to abuse our models for harmful ends...",
        link: "https://openai.com/global-affairs/an-update-on-disrupting-deceptive-uses-of-ai",
        source: "OpenAI"
    },
    {
        title: "OpenAI and Hearst Content Partnership",
        summary: "Hearstâ€™s iconic brands bring curated lifestyle and local news content to OpenAIâ€™s products.",
        link: "https://openai.com/index/hearst",
        source: "OpenAI"
    },
    {
        title: "Introducing canvas, a new way to write and code with ChatGPT.",
        summary: "Introducing canvas",
        link: "https://openai.com/index/introducing-canvas",
        source: "OpenAI"
    },
    {
        title: "New Credit Facility Enhances Financial Flexibility",
        summary: "In addition to securing $6.6 billion in new funding from leading investors, we have established a new $4 billion credit facility with leading banks, including JPMorgan Chase, Citi, Goldman Sachs, Morg...",
        link: "https://openai.com/index/new-credit-facility-enhances-financial-flexibility",
        source: "OpenAI"
    },
    {
        title: "New funding to scale the benefits of AI",
        summary: "We are making progress on our mission to ensure that artificial general intelligence benefits all of humanity.",
        link: "https://openai.com/index/scale-the-benefits-of-ai",
        source: "OpenAI"
    },
    {
        title: "Introducing the Realtime API",
        summary: "Developers can now build fast speech-to-speech experiences into their applications",
        link: "https://openai.com/index/introducing-the-realtime-api",
        source: "OpenAI"
    },
    {
        title: "Introducing vision to the fine-tuning API",
        summary: "Developers can now fine-tune GPT-4o with images and text to improve vision capabilities",
        link: "https://openai.com/index/introducing-vision-to-the-fine-tuning-api",
        source: "OpenAI"
    },
    {
        title: "Prompt Caching in the API",
        summary: "Offering automatic discounts on inputs that the model has recently seen",
        link: "https://openai.com/index/api-prompt-caching",
        source: "OpenAI"
    },
    {
        title: "Model Distillation in the API",
        summary: "Fine-tune a cost-efficient model with the outputs of a large frontier modelâ€“all on the OpenAI platform",
        link: "https://openai.com/index/api-model-distillation",
        source: "OpenAI"
    },
    {
        title: "Creating agent and human collaboration with GPT 4o",
        summary: "Altera uses GPT-4o to build a new area of human collaboration",
        link: "https://openai.com/index/altera",
        source: "OpenAI"
    },
    {
        title: "Put AI to work: Automate and scale financial operations",
        summary: "Put AI to work: Automate and Scale Financial Operations",
        link: "https://openai.com/business/put-ai-to-work-automate-and-scale-financial-operations",
        source: "OpenAI"
    },
    {
        title: "Upgrading the Moderation API with our new multimodal moderation model",
        summary: "Weâ€™re introducing a new model built on GPT-4o that is more accurate at detecting harmful text and images, enabling developers to build more robust moderation systems.",
        link: "https://openai.com/index/upgrading-the-moderation-api-with-our-new-multimodal-moderation-model",
        source: "OpenAI"
    },
    {
        title: "Minnesotaâ€™s Enterprise Translation Office uses ChatGPT to bridge language gaps",
        summary: "Minnesotaâ€™s Enterprise Translation Office uses ChatGPT to bridge language gaps",
        link: "https://openai.com/index/state-of-minnesota",
        source: "OpenAI"
    },
    {
        title: "OpenAI and GEDI partner for Italian news content",
        summary: "OpenAI and GEDI announce strategic partnership to bring Italian-language news content to ChatGPT.",
        link: "https://openai.com/index/gedi",
        source: "OpenAI"
    },
    {
        title: "Introducing Verdi, an AI dev platform powered by GPT-4o",
        summary: "Mercado Libre introduces Verdi, an AI developer platform powered by GPT-4o",
        link: "https://openai.com/index/mercado-libre",
        source: "OpenAI"
    },
    {
        title: "Introducing the OpenAI Academy",
        summary: "New initiative will fuel innovation by investing in developers and organizations leveraging AI, starting in low- and middle-income countries.",
        link: "https://openai.com/global-affairs/openai-academy",
        source: "OpenAI"
    },
    {
        title: "Genmab launches â€œAI Everywhereâ€",
        summary: "Genmab embraces ChatGPT Enterprise, supported by OpenAIâ€™s commitment to security and privacy",
        link: "https://openai.com/index/genmab",
        source: "OpenAI"
    },
    {
        title: "Using GPT-4 to improve teaching and learning in Brazil",
        summary: "Improving teaching and learning in Brazil",
        link: "https://openai.com/index/arco-education",
        source: "OpenAI"
    },
    {
        title: "An update on our safety & security practices",
        summary: "An update on our safety & security practices",
        link: "https://openai.com/index/update-on-safety-and-security-practices",
        source: "OpenAI"
    },
    {
        title: "Introducing OpenAI o1",
        summary: "Introducing OpenAI o1",
        link: "https://openai.com/index/introducing-openai-o1-preview",
        source: "OpenAI"
    },
    {
        title: "Learning to reason with LLMs",
        summary: "We are introducing OpenAI o1, a new large language model trained with reinforcement learning to perform complex reasoning. o1 thinks before it answersâ€”it can produce a long internal chain of thought...",
        link: "https://openai.com/index/learning-to-reason-with-llms",
        source: "OpenAI"
    },
    {
        title: "OpenAI o1-mini",
        summary: "Advancing cost-efficient reasoning",
        link: "https://openai.com/index/openai-o1-mini-advancing-cost-efficient-reasoning",
        source: "OpenAI"
    },
    {
        title: "OpenAI o1 System Card External Testers Acknowledgements",
        summary: "OpenAI o1 system card external testers acknowledgements",
        link: "https://openai.com/index/openai-o1-system-card/external-testers-acknowledgements",
        source: "OpenAI"
    },
    {
        title: "OpenAI o1 Contributions",
        summary: "OpenAI o1 Contributions",
        link: "https://openai.com/openai-o1-contributions",
        source: "OpenAI"
    },
    {
        title: "Economics and reasoning with OpenAI o1",
        summary: "Economist Tyler Cowen explains how OpenAI o1 tackles complex economic questions.",
        link: "https://openai.com/index/o1-economics",
        source: "OpenAI"
    },
    {
        title: "Decoding genetics with OpenAI o1",
        summary: "Geneticist Catherine Brownstein demonstrates how OpenAI o1 can speed up the process of diagnosing rare medical challenges.",
        link: "https://openai.com/index/o1-genetics",
        source: "OpenAI"
    },
    {
        title: "Answering quantum physics questions with OpenAI o1",
        summary: "Quantum physicist Mario Krenn uses OpenAI o1 to help answer life's biggest questions.",
        link: "https://openai.com/index/o1-quantum-physics",
        source: "OpenAI"
    },
    {
        title: "Coding with OpenAI o1",
        summary: "Scott Wu, CEO and Co-Founder of Cognition, explains how OpenAI o1 makes coding decisions in a more human-like way.",
        link: "https://openai.com/index/o1-coding",
        source: "OpenAI"
    },
    {
        title: "Put AI to work: Lessons from hundreds of successful deployments",
        summary: "Put AI to Work: Lessons from Hundreds of Successful Deployments",
        link: "https://openai.com/business/put-ai-to-work-lessons-from-hundreds-of-successful-deployments",
        source: "OpenAI"
    },
    {
        title: "Using GPT-4 to deliver a new customer service standard",
        summary: "Ada uses GPT-4 to deliver a new customer service standard",
        link: "https://openai.com/index/ada",
        source: "OpenAI"
    },
    {
        title: "Personalizing education with ChatGPT",
        summary: "Arizona State University embraces ChatGPT campus-wide to personalize learning, advance research, and prepare students for the future",
        link: "https://openai.com/index/asu",
        source: "OpenAI"
    },
    {
        title: "Fine-tuning GPT-4o webinar",
        summary: "Fine-Tuning GPT-4o Webinar",
        link: "https://openai.com/business/fine-tuning-gpt-4o-webinar",
        source: "OpenAI"
    },
    {
        title: "OpenAI partners with CondÃ© Nast",
        summary: "CondÃ© Nast",
        link: "https://openai.com/index/conde-nast",
        source: "OpenAI"
    },
    {
        title: "Fine-tuning now available for GPT-4o",
        summary: "Fine-tune custom versions of GPT-4o to increase performance and accuracy for your applications",
        link: "https://openai.com/index/gpt-4o-fine-tuning",
        source: "OpenAI"
    },
    {
        title: "Putting AI to work at Upwork",
        summary: "Upwork puts AI to work, uniting team members, operations and product development",
        link: "https://openai.com/index/upwork",
        source: "OpenAI"
    },
    {
        title: "Disrupting a covert Iranian influence operation",
        summary: "We banned accounts linked to a covert Iranian influence operation using ChatGPT to generate website and social media content focused on multiple topics, including the U.S. presidential campaign. We ha...",
        link: "https://openai.com/index/disrupting-a-covert-iranian-influence-operation",
        source: "OpenAI"
    },
    {
        title: "Delivering contextual job matching for millions with OpenAI",
        summary: "Indeed, whose mission is to help people get jobs, is the worldâ€™s #1 job site. Over 350 million unique visitors come to Indeed every month to connect with more than 3.5 million employers and over 32 ...",
        link: "https://openai.com/index/indeed",
        source: "OpenAI"
    },
    {
        title: "Awakening Sleeping Beauties at The Met",
        summary: "AI can enrich lives through beauty and creativity, and its artistic potential shines in "Sleeping Beauties: Reawakening Fashion," a collaborative exhibit from The Met's Costume Institute.",
        link: "https://openai.com/index/the-met-museum",
        source: "OpenAI"
    },
    {
        title: "Introducing SWE-bench Verified",
        summary: "Weâ€™re releasing a human-validated subset of SWE-bench that more reliably evaluates AI modelsâ€™ ability to solve real-world software issues.",
        link: "https://openai.com/index/introducing-swe-bench-verified",
        source: "OpenAI"
    },
    {
        title: "Zico Kolter Joins OpenAIâ€™s Board of Directors",
        summary: "Zico Kolter Joins OpenAIâ€™s Board of Directors
Weâ€™re strengthening our governance with expertise in AI safety and alignment. Zico will also join the Safety & Security Committee",
        link: "https://openai.com/index/zico-kolter-joins-openais-board-of-directors",
        source: "OpenAI"
    },
    {
        title: "GPT-4o System Card External Testers Acknowledgements",
        summary: "GPT-4o system card external testers acknowledgements",
        link: "https://openai.com/index/gpt-4o-system-card/external-testers-acknowledgements",
        source: "OpenAI"
    },
    {
        title: "GPT-4o System Card",
        summary: "This report outlines the safety work carried out prior to releasing GPT-4o including external red teaming, frontier risk evaluations according to our Preparedness Framework, and an overview of the mit...",
        link: "https://openai.com/index/gpt-4o-system-card",
        source: "OpenAI"
    },
    {
        title: "Enabling a data-driven workforce",
        summary: "In this video, we share practical examples of how employees can use ChatGPT Enterprise to efficiently analyze data and uncover insights.",
        link: "https://openai.com/business/enabling-a-data-driven-workforce-webinar",
        source: "OpenAI"
    },
    {
        title: "Pairing data with APIs to unlock customer value",
        summary: "Rakuten Pairs Data with AI to Unlock Customer Insights and Value",
        link: "https://openai.com/index/rakuten",
        source: "OpenAI"
    },
    {
        title: "Introducing Structured Outputs in the API",
        summary: "We are introducing Structured Outputs in the APIâ€”model outputs now reliably adhere to developer-supplied JSON Schemas.",
        link: "https://openai.com/index/introducing-structured-outputs-in-the-api",
        source: "OpenAI"
    },
    {
        title: "A Primer on the EU AI Act: What It Means for AI Providers and Deployers",
        summary: "Weâ€™re sharing a preliminary overview of the EU AI Act including upcoming deadlines and requirements, with a particular focus on prohibited and high-risk use cases",
        link: "https://openai.com/global-affairs/a-primer-on-the-eu-ai-act",
        source: "OpenAI"
    },
    {
        title: "SearchGPT is a prototype of new AI search features",
        summary: "Weâ€™re testing SearchGPT, a temporary prototype of new search features that give you fast and timely answers with clear and relevant sources.",
        link: "https://openai.com/index/searchgpt-prototype",
        source: "OpenAI"
    },
    {
        title: "Improving Model Safety Behavior with Rule-Based Rewards",
        summary: "We've developed and applied a new method leveraging Rule-Based Rewards (RBRs) that aligns models to behave safely without extensive human data collection.",
        link: "https://openai.com/index/improving-model-safety-behavior-with-rule-based-rewards",
        source: "OpenAI"
    },
    {
        title: "GPT-4o mini: advancing cost-efficient intelligence",
        summary: "Introducing the most cost-efficient small model in the market",
        link: "https://openai.com/index/gpt-4o-mini-advancing-cost-efficient-intelligence",
        source: "OpenAI"
    },
    {
        title: "New compliance and administrative tools for ChatGPT Enterprise",
        summary: "Compliance API integrations, SCIM, and GPT controls to support compliance programs, data security, and user access at scale",
        link: "https://openai.com/index/new-tools-for-chatgpt-enterprise",
        source: "OpenAI"
    },
    {
        title: "Prover-Verifier Games improve legibility of language model outputs",
        summary: "Discover how prover-verifier games improve the legibility of language model outputs, making AI solutions clearer, easier to verify, and more trustworthy for both humans and machines.",
        link: "https://openai.com/index/prover-verifier-games-improve-legibility",
        source: "OpenAI"
    },
    {
        title: "OpenAI and Los Alamos National Laboratory announce research partnership",
        summary: "OpenAI and Los Alamos National Laboratory are working to develop safety evaluations to assess and measure biological capabilities and risks associated with frontier models.",
        link: "https://openai.com/index/openai-and-los-alamos-national-laboratory-work-together",
        source: "OpenAI"
    },
    {
        title: "Finding GPT-4â€™s mistakes with GPT-4",
        summary: "CriticGPT, a model based on GPT-4, writes critiques of ChatGPT responses to help human trainers spot mistakes during RLHF",
        link: "https://openai.com/index/finding-gpt4s-mistakes-with-gpt-4",
        source: "OpenAI"
    },
    {
        title: "Strategic Content Partnership with TIME",
        summary: "Weâ€™re partnering with TIME and its 101 years of archival content to enhance responses and provide links to stories on Time.com",
        link: "https://openai.com/index/strategic-content-partnership-with-time",
        source: "OpenAI"
    },
    {
        title: "OpenAI acquires Rockset",
        summary: "OpenAI Acquires Rockset",
        link: "https://openai.com/index/openai-acquires-rockset",
        source: "OpenAI"
    },
    {
        title: "Empowering defenders through our Cybersecurity Grant Program",
        summary: "Highlighting innovative research and AI integration in cybersecurity",
        link: "https://openai.com/index/empowering-defenders-through-our-cybersecurity-grant-program",
        source: "OpenAI"
    },
    {
        title: "Consistency Models",
        summary: "Diffusion models have significantly advanced the fields of image, audio, and video generation, but they depend on an iterative sampling process that causes slow generation.",
        link: "https://openai.com/index/consistency-models",
        source: "OpenAI"
    },
    {
        title: "Improved Techniques for Training Consistency Models",
        summary: "Consistency models are a nascent family of generative models that can sample high quality data in one step without the need for adversarial training.",
        link: "https://openai.com/index/improved-techniques-for-training-consistency-models",
        source: "OpenAI"
    },
    {
        title: "A Holistic Approach to Undesired Content Detection in the Real World",
        summary: "We present a holistic approach to building a robust and useful natural language classification system for real-world content moderation.",
        link: "https://openai.com/index/a-holistic-approach-to-undesired-content-detection-in-the-real-world",
        source: "OpenAI"
    },
    {
        title: "Surging developer productivity with custom GPTs",
        summary: "Paf adopted ChatGPT Enterprise across its entire company, with engineers using custom GPTs on a daily basis to speed up routine development tasks. Paf also integrated ChatGPT Enterprise into the grit:...",
        link: "https://openai.com/index/paf",
        source: "OpenAI"
    },
    {
        title: "Achieving 10x growth with agentic sales prospecting",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/clay",
        source: "OpenAI"
    },
    {
        title: "Using GPT-4o reasoning to transform cancer care",
        summary: "Color Health is working with OpenAI to pioneer a new way of accelerating cancer patientsâ€™ access to treatment. Their new Cancer Copilot application uses GPT-4o to identify missing diagnostics and cr...",
        link: "https://openai.com/index/color-health",
        source: "OpenAI"
    },
    {
        title: "OpenAI appoints Retired U.S. Army General Paul M. Nakasone to Board of Directors",
        summary: "Nakasone brings cybersecurity experience to growing Board of Directors; will join the Boardâ€™s Safety and Security Committee",
        link: "https://openai.com/index/openai-appoints-retired-us-army-general",
        source: "OpenAI"
    },
    {
        title: "OpenAI and Apple announce partnership",
        summary: "OpenAI and Apple announce partnership to integrate ChatGPT into Apple experiences.",
        link: "https://openai.com/index/openai-and-apple-announce-partnership",
        source: "OpenAI"
    },
    {
        title: "OpenAI welcomes Sarah Friar (CFO) and Kevin Weil (CPO)",
        summary: "OpenAI welcomes Sarah Friar (CFO) and Kevin Weil (CPO)",
        link: "https://openai.com/index/openai-welcomes-cfo-cpo",
        source: "OpenAI"
    },
    {
        title: "Expanding on how Voice Engine works and our safety research",
        summary: "Exploring the technology behind our text-to-speech model.",
        link: "https://openai.com/index/expanding-on-how-voice-engine-works-and-our-safety-research",
        source: "OpenAI"
    },
    {
        title: "Improving Indiaâ€™s critical care infrastructure",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/10bedicu",
        source: "OpenAI"
    },
    {
        title: "Extracting Concepts from GPT-4",
        summary: "Using new techniques for scaling sparse autoencoders, we automatically identified 16 million patterns in GPT-4's computations.",
        link: "https://openai.com/index/extracting-concepts-from-gpt-4",
        source: "OpenAI"
    },
    {
        title: "Disrupting deceptive uses of AI by covert influence operations",
        summary: "Weâ€™ve terminated accounts linked to covert influence operations; no significant audience increase due to our services.",
        link: "https://openai.com/index/disrupting-deceptive-uses-of-ai-by-covert-influence-operations",
        source: "OpenAI"
    },
    {
        title: "OpenAI for Education",
        summary: "An affordable offering for universities to responsibly bring AI to campus.",
        link: "https://openai.com/index/introducing-chatgpt-edu",
        source: "OpenAI"
    },
    {
        title: "Introducing OpenAI for Nonprofits",
        summary: "Weâ€™re launching a new initiative to enhance the accessibility of our tools for nonprofit organizations, including discounted rates for ChatGPT Team and Enterprise.",
        link: "https://openai.com/index/introducing-openai-for-nonprofits",
        source: "OpenAI"
    },
    {
        title: "Automating customer support agents",
        summary: "MavenAGI is a new software company for the AI era. They recently launched an AI customer service agent, built on the flexibility of GPT-4, which a number of companies like Tripadvisor, Clickup and Rho...",
        link: "https://openai.com/index/mavenagi",
        source: "OpenAI"
    },
    {
        title: "The Newsroom AI Catalyst: a global program with WAN-IFRA",
        summary: "Weâ€™re collaborating with WAN-IFRA, the World Association of News Publishers, to launch a global accelerator program that will assist over 100 news publishers to explore and integrate AI in their new...",
        link: "https://openai.com/index/newsroom-ai-catalyst-global-program-with-wan-ifra",
        source: "OpenAI"
    },
    {
        title: "Enhancing news in ChatGPT with The Atlantic",
        summary: "The Atlantic is announcing a strategic content and product partnership with OpenAI, which positions The Atlantic as a premium news source within OpenAI. The Atlanticâ€™s articles will be discoverable ...",
        link: "https://openai.com/index/enhancing-news-in-chatgpt-with-the-atlantic",
        source: "OpenAI"
    },
    {
        title: "A Content and Product Partnership with Vox Media",
        summary: "In a multi-faceted agreement, Vox Mediaâ€™s content will enhance the output of OpenAIâ€™s ChatGPT, and the company will build on OpenAIâ€™s technology to develop products to better serve its audiences...",
        link: "https://openai.com/index/a-content-and-product-partnership-with-vox-media",
        source: "OpenAI"
    },
    {
        title: "OpenAI Board Forms Safety and Security Committee",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/openai-board-forms-safety-and-security-committee",
        source: "OpenAI"
    },
    {
        title: "A landmark multi-year global partnership with News Corp",
        summary: "Companies Join Forces to Enrich OpenAIâ€™s Generative AI Products and Platforms with Premium Journalism",
        link: "https://openai.com/index/news-corp-and-openai-sign-landmark-multi-year-global-partnership",
        source: "OpenAI"
    },
    {
        title: "OpenAI safety practices",
        summary: "Artificial general intelligence has the potential to benefit nearly every aspect of our livesâ€”so it must be developed and deployed responsibly.",
        link: "https://openai.com/index/openai-safety-update",
        source: "OpenAI"
    },
    {
        title: "How the voices for ChatGPT were chosen",
        summary: "How the voices for ChatGPT were chosen
We worked with industry-leading casting and directing professionals to narrow down over 400 submissions before selecting the 5 voices.",
        link: "https://openai.com/index/how-the-voices-for-chatgpt-were-chosen",
        source: "OpenAI"
    },
    {
        title: "Improvements to data analysis in ChatGPT",
        summary: "Improvements to data analysis in ChatGPT
Interact with tables and charts and add files directly from Google Drive and Microsoft OneDrive.",
        link: "https://openai.com/index/improvements-to-data-analysis-in-chatgpt",
        source: "OpenAI"
    },
    {
        title: "OpenAI and Reddit Partnership",
        summary: "OpenAI and Reddit Partnership 
Weâ€™re bringing Redditâ€™s unique content to ChatGPT and our products.",
        link: "https://openai.com/index/openai-and-reddit-partnership",
        source: "OpenAI"
    },
    {
        title: "Creating an AI-powered Magic Studio",
        summary: "Canva is a visual communication platform, enjoyed by more than 175 million people monthly to make presentations, videos, documents, websites, social media graphics and more. A majority of the worldâ€™...",
        link: "https://openai.com/index/canva",
        source: "OpenAI"
    },
    {
        title: "Ilya Sutskever to leave OpenAI, Jakub Pachocki announced as Chief Scientist",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/jakub-pachocki-announced-as-chief-scientist",
        source: "OpenAI"
    },
    {
        title: "Collaborating with Carlyle to Chart the Future of Private Equity",
        summary: "Collaborating with Carlyle to Chart the Future of Private Equity",
        link: "https://openai.com/index/collaborating-with-carlyle-to-chart-the-future-of-private-equity",
        source: "OpenAI"
    },
    {
        title: "Hello GPT-4o",
        summary: "Weâ€™re announcing GPT-4 Omni, our new flagship model which can reason across audio, vision, and text in real time.",
        link: "https://openai.com/index/hello-gpt-4o",
        source: "OpenAI"
    },
    {
        title: "Spring Update",
        summary: "Introducing GPT-4o and making more capabilities available for free in ChatGPT.",
        link: "https://openai.com/index/spring-update",
        source: "OpenAI"
    },
    {
        title: "Introducing GPT-4o and more tools to ChatGPT free users",
        summary: "Introducing GPT-4o and more tools to ChatGPT free users
We are launching our newest flagship model and making more capabilities available for free in ChatGPT.",
        link: "https://openai.com/index/gpt-4o-and-more-tools-to-chatgpt-free",
        source: "OpenAI"
    },
    {
        title: "Introducing the Model Spec",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/introducing-the-model-spec",
        source: "OpenAI"
    },
    {
        title: "Our approach to data and AI",
        summary: "Just over a year after launching ChatGPT, AI is changing how we live, work and learn. Itâ€™s also raised important conversations about data in the age of AI. More on our approach, a new Media Manager ...",
        link: "https://openai.com/index/approach-to-data-and-ai",
        source: "OpenAI"
    },
    {
        title: "Understanding the source of what we see and hear online",
        summary: "Today weâ€™re introducing new technology to help researchers identify content created by our tools and joining the Coalition for Content Provenance and Authenticity Steering Committee to promote indus...",
        link: "https://openai.com/index/understanding-the-source-of-what-we-see-and-hear-online",
        source: "OpenAI"
    },
    {
        title: "API Partnership with Stack Overflow",
        summary: "API Partnership with Stack Overflow 

Stack Overflow and OpenAI today announced a new API partnership that will empower developers with the collective strengths of the worldâ€™s leading knowledge plat...",
        link: "https://openai.com/index/api-partnership-with-stack-overflow",
        source: "OpenAI"
    },
    {
        title: "Weâ€™re bringing the Financial Timesâ€™ world-class journalism to ChatGPT",
        summary: "We will also collaborate on new AI experiences for FT readers.",
        link: "https://openai.com/index/content-partnership-with-financial-times",
        source: "OpenAI"
    },
    {
        title: "Accelerating the development of life-saving treatments",
        summary: "Accelerating the development of life-saving treatments.",
        link: "https://openai.com/index/moderna",
        source: "OpenAI"
    },
    {
        title: "Introducing ChatGPT and Whisper APIs",
        summary: "Developers can now integrate ChatGPT and Whisper models into their apps and products through our API.",
        link: "https://openai.com/index/introducing-chatgpt-and-whisper-apis",
        source: "OpenAI"
    },
    {
        title: "GPT-4 API general availability and deprecation of older models in the Completions API",
        summary: "GPT-3.5 Turbo, DALLÂ·E and Whisper APIs are also generally available, and we are releasing a deprecation plan for older models of the Completions API, which will retire at the beginning of 2024.",
        link: "https://openai.com/index/gpt-4-api-general-availability",
        source: "OpenAI"
    },
    {
        title: "Introducing more enterprise-grade features for API customers",
        summary: "Increasing enterprise support with more security features and controls, updates to our Assistants API, and tools to better manage costs.",
        link: "https://openai.com/index/more-enterprise-grade-features-for-api-customers",
        source: "OpenAI"
    },
    {
        title: "OpenAIâ€™s commitment to child safety: adopting safety by design principles",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/child-safety-adopting-sbd-principles",
        source: "OpenAI"
    },
    {
        title: "The Instruction Hierarchy: Training LLMs to Prioritize Privileged Instructions",
        summary: "Today's LLMs are susceptible to prompt injections, jailbreaks, and other attacks that allow adversaries to overwrite a model's original instructions with their own malicious prompts.",
        link: "https://openai.com/index/the-instruction-hierarchy",
        source: "OpenAI"
    },
    {
        title: "Introducing OpenAI Japan",
        summary: "We are excited to announce our first office in Asia and weâ€™re releasing a GPT-4 custom model optimized for the Japanese language.",
        link: "https://openai.com/index/introducing-openai-japan",
        source: "OpenAI"
    },
    {
        title: "Klarna's AI assistant does the work of 700 full-time agents",
        summary: "Klarna is using AI to revolutionize personal shopping, customer service, and employee productivity.",
        link: "https://openai.com/index/klarna",
        source: "OpenAI"
    },
    {
        title: "Introducing improvements to the fine-tuning API and expanding our custom models program",
        summary: "Weâ€™re adding new features to help developers have more control over fine-tuning and announcing new ways to build custom models with OpenAI.",
        link: "https://openai.com/index/introducing-improvements-to-the-fine-tuning-api-and-expanding-our-custom-models-program",
        source: "OpenAI"
    },
    {
        title: "Customizing models for legal professionals",
        summary: "Harvey partners with OpenAI to build a custom-trained model for legal professionals.",
        link: "https://openai.com/index/harvey",
        source: "OpenAI"
    },
    {
        title: "Reducing health insurance costs and improving care",
        summary: "Oscar brings AI to health insurance, reducing costs and improving patient care.",
        link: "https://openai.com/index/oscar",
        source: "OpenAI"
    },
    {
        title: "Start using ChatGPT instantly",
        summary: "Weâ€™re making it easier for people to experience the benefits of AI without needing to sign up",
        link: "https://openai.com/index/start-using-chatgpt-instantly",
        source: "OpenAI"
    },
    {
        title: "Navigating the challenges and opportunities of synthetic voices",
        summary: "Weâ€™re sharing lessons from a small scale preview of Voice Engine, a model for creating custom voices.",
        link: "https://openai.com/index/navigating-the-challenges-and-opportunities-of-synthetic-voices",
        source: "OpenAI"
    },
    {
        title: "Making education data accessible",
        summary: "Zelma uses GPT-4 to make education data accessible.",
        link: "https://openai.com/index/zelma",
        source: "OpenAI"
    },
    {
        title: "OpenAIâ€™s comment to the NTIA on open model weights",
        summary: "OpenAIâ€™s comment to the NTIA on open model weights

This comment was submitted by OpenAI in response to NTIAâ€™s March 2024 Request for Information on Dual-Use Foundation Models with Widely Availabl...",
        link: "https://openai.com/global-affairs/openai-s-comment-to-the-ntia-on-open-model-weights",
        source: "OpenAI"
    },
    {
        title: "Sora first impressions",
        summary: "Since we introduced Sora to the world last month, weâ€™ve been working with artists to learn how Sora might aid in their creative process.",
        link: "https://openai.com/index/sora-first-impressions",
        source: "OpenAI"
    },
    {
        title: "Embedding AI into developer software",
        summary: "JetBrains uses OpenAIâ€™s API to build its fastest-growing product ever.",
        link: "https://openai.com/index/jetbrains",
        source: "OpenAI"
    },
    {
        title: "Reimagining the email experience with AI",
        summary: "Superhuman introduces a new era of email with OpenAI.",
        link: "https://openai.com/index/superhuman",
        source: "OpenAI"
    },
    {
        title: "Enterprise-ready trust and safety",
        summary: "Salesforce integrates OpenAIâ€™s enterprise-ready LLMs to transform customer applications.",
        link: "https://openai.com/index/salesforce",
        source: "OpenAI"
    },
    {
        title: "Building a data-driven, efficient culture with AI",
        summary: "Holiday Extras rolls out ChatGPT Enterprise across every team, boosting productivity by 500 hours weekly.",
        link: "https://openai.com/index/holiday-extras",
        source: "OpenAI"
    },
    {
        title: "Saving lives with AI health coaching",
        summary: "Healthify collaborates with OpenAI to improve millions of lives with sustainable weight loss.",
        link: "https://openai.com/index/healthify",
        source: "OpenAI"
    },
    {
        title: "Global news partnerships: Le Monde and Prisa Media",
        summary: "We have partnered with international news organizations Le Monde and Prisa Media to bring French and Spanish news content to ChatGPT.",
        link: "https://openai.com/index/global-news-partnerships-le-monde-and-prisa-media",
        source: "OpenAI"
    },
    {
        title: "OpenAI announces new members to board of directors",
        summary: "Dr. Sue Desmond-Hellmann, Nicole Seligman, Fidji Simo join; Sam Altman rejoins board",
        link: "https://openai.com/index/openai-announces-new-members-to-board-of-directors",
        source: "OpenAI"
    },
    {
        title: "Review completed & Altman, Brockman to continue to lead OpenAI",
        summary: "New board members named and enhancements to the governance structure introducedÂ",
        link: "https://openai.com/index/review-completed-altman-brockman-to-continue-to-lead-openai",
        source: "OpenAI"
    },
    {
        title: "Using AI to improve patient access to clinical trials",
        summary: "Paradigm uses OpenAIâ€™s API to improve patient access to clinical trials.",
        link: "https://openai.com/index/paradigm",
        source: "OpenAI"
    },
    {
        title: "Sparking a more productive company with ChatGPT Enterprise",
        summary: "Match Group uses ChatGPT Enterprise to spark creativity and impact.",
        link: "https://openai.com/index/match-group",
        source: "OpenAI"
    },
    {
        title: "Improving health literacy and patient well-being",
        summary: "Lifespan uses GPT-4 to radically improve health literacy and patient outcomes.",
        link: "https://openai.com/index/lifespan",
        source: "OpenAI"
    },
    {
        title: "OpenAI and Elon Musk",
        summary: "We are dedicated to the OpenAI mission and have pursued it every step of the way.",
        link: "https://openai.com/index/openai-elon-musk",
        source: "OpenAI"
    },
    {
        title: "Video generation models as world simulators",
        summary: "We explore large-scale training of generative models on video data. Specifically, we train text-conditional diffusion models jointly on videos and images of variable durations, resolutions and aspect ...",
        link: "https://openai.com/index/video-generation-models-as-world-simulators",
        source: "OpenAI"
    },
    {
        title: "Disrupting malicious uses of AI by state-affiliated threat actors",
        summary: "We terminated accounts associated with state-affiliated threat actors. Our findings show our models offer only limited, incremental capabilities for malicious cybersecurity tasks.",
        link: "https://openai.com/index/disrupting-malicious-uses-of-ai-by-state-affiliated-threat-actors",
        source: "OpenAI"
    },
    {
        title: "Memory and new controls for ChatGPT",
        summary: "Weâ€™re testing the ability for ChatGPT to remember things you discuss to make future chats more helpful. Youâ€™re in control of ChatGPTâ€™s memory.",
        link: "https://openai.com/index/memory-and-new-controls-for-chatgpt",
        source: "OpenAI"
    },
    {
        title: "Response to NIST Executive Order on AI",
        summary: "The National Institute of Standards and Technology (NIST) request for information related to its assignments under sections 4.1, 4.5, and 11 of the Executive Order Concerning Artificial Intelligence",
        link: "https://openai.com/global-affairs/response-to-nist-executive-order-on-ai",
        source: "OpenAI"
    },
    {
        title: "Building an early warning system for LLM-aided biological threat creation",
        summary: "Weâ€™re developing a blueprint for evaluating the risk that a large language model (LLM) could aid someone in creating a biological threat.Â In an evaluation involving both biology experts and student...",
        link: "https://openai.com/index/building-an-early-warning-system-for-llm-aided-biological-threat-creation",
        source: "OpenAI"
    },
    {
        title: "New embedding models and API updates",
        summary: "We are launching a new generation of embedding models, new GPT-4 Turbo and moderation models, new API usage management tools, and soon, lower pricing on GPT-3.5 Turbo.",
        link: "https://openai.com/index/new-embedding-models-and-api-updates",
        source: "OpenAI"
    },
    {
        title: "Democratic inputs to AI grant program: lessons learned and implementation plans",
        summary: "We funded 10 teams from around the world to design ideas and tools to collectively govern AI. We summarize the innovations, outline our learnings, and call for researchers and engineers to join us as ...",
        link: "https://openai.com/index/democratic-inputs-to-ai-grant-program-update",
        source: "OpenAI"
    },
    {
        title: "How OpenAI is approaching 2024 worldwide elections",
        summary: "Weâ€™re working to prevent abuse, provide transparency on AI-generated content, and improve access to accurate voting information.",
        link: "https://openai.com/index/how-openai-is-approaching-2024-worldwide-elections",
        source: "OpenAI"
    },
    {
        title: "Building agricultural database for farmers",
        summary: "Digital Green uses OpenAI to increase farmer income.",
        link: "https://openai.com/index/digital-green",
        source: "OpenAI"
    },
    {
        title: "Introducing the GPT Store",
        summary: "Weâ€™re launching the GPT Store to help you find useful and popular custom versions of ChatGPT.",
        link: "https://openai.com/index/introducing-the-gpt-store",
        source: "OpenAI"
    },
    {
        title: "Introducing ChatGPT Team",
        summary: "Weâ€™re launching a new ChatGPT plan for teams of all sizes, which provides a secure, collaborative workspace to get the most out of ChatGPT at work.",
        link: "https://openai.com/index/introducing-chatgpt-team",
        source: "OpenAI"
    },
    {
        title: "OpenAI and journalism",
        summary: "We support journalism, partner with news organizations, and believe The New York Times lawsuit is without merit.",
        link: "https://openai.com/index/openai-and-journalism",
        source: "OpenAI"
    },
    {
        title: "Delivering LLM-powered health solutions",
        summary: "WHOOP delivers personalized fitness and health coaching with GPT-4.",
        link: "https://openai.com/index/whoop",
        source: "OpenAI"
    },
    {
        title: "Increasing accuracy of pediatric visit notes",
        summary: "Summer Health reimagines pediatric doctorâ€™s visits with OpenAI.",
        link: "https://openai.com/index/summer-health",
        source: "OpenAI"
    },
    {
        title: "Superalignment Fast Grants",
        summary: "Weâ€™re launching $10M in grants to support technical research towards the alignment and safety of superhuman AI systems, including weak-to-strong generalization, interpretability, scalable oversight,...",
        link: "https://openai.com/index/superalignment-fast-grants",
        source: "OpenAI"
    },
    {
        title: "Practices for Governing Agentic AI Systems",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/practices-for-governing-agentic-ai-systems",
        source: "OpenAI"
    },
    {
        title: "Weak-to-strong generalization",
        summary: "We present a new research direction for superalignment, together with promising initial results: can we leverage the generalization properties of deep learning to control strong models with weak super...",
        link: "https://openai.com/index/weak-to-strong-generalization",
        source: "OpenAI"
    },
    {
        title: "Partnership with Axel Springer to deepen beneficial use of AI in journalism",
        summary: "Axel Springer is the first publishing house globally to partner with us on a deeper integration of journalism in AI technologies.",
        link: "https://openai.com/index/axel-springer-partnership",
        source: "OpenAI"
    },
    {
        title: "Sam Altman returns as CEO, OpenAI has a new initial board",
        summary: "Mira Murati as CTO, Greg Brockman returns as President. Read messages from CEO Sam Altman and board chair Bret Taylor.",
        link: "https://openai.com/index/sam-altman-returns-as-ceo-openai-has-a-new-initial-board",
        source: "OpenAI"
    },
    {
        title: "OpenAI announces leadership transition",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/openai-announces-leadership-transition",
        source: "OpenAI"
    },
    {
        title: "OpenAI Data Partnerships",
        summary: "Working together to create open-source and private datasets for AI training.",
        link: "https://openai.com/index/data-partnerships",
        source: "OpenAI"
    },
    {
        title: "Introducing GPTs",
        summary: "You can now create custom versions of ChatGPT that combine instructions, extra knowledge, and any combination of skills.",
        link: "https://openai.com/index/introducing-gpts",
        source: "OpenAI"
    },
    {
        title: "New models and developer products announced at DevDay",
        summary: "GPT-4 Turbo with 128K context and lower prices, the new Assistants API, GPT-4 Turbo with Vision, DALLÂ·E 3 API, and more.",
        link: "https://openai.com/index/new-models-and-developer-products-announced-at-devday",
        source: "OpenAI"
    },
    {
        title: "OpenAIâ€™s Approach to Frontier Risk",
        summary: "An Update for the UK AI Safety Summit",
        link: "https://openai.com/global-affairs/our-approach-to-frontier-risk",
        source: "OpenAI"
    },
    {
        title: "Frontier risk and preparedness",
        summary: "To support the safety of highly-capable AI systems, we are developing our approach to catastrophic risk preparedness, including building a Preparedness team and launching a challenge.",
        link: "https://openai.com/index/frontier-risk-and-preparedness",
        source: "OpenAI"
    },
    {
        title: "Frontier Model Forum updates",
        summary: "Together with Anthropic, Google, and Microsoft, weâ€™re announcing the new Executive Director of the Frontier Model Forum and a new $10 million AI Safety Fund.",
        link: "https://openai.com/index/frontier-model-forum-updates",
        source: "OpenAI"
    },
    {
        title: "DALLÂ·E 3 is now available in ChatGPT Plus and Enterprise",
        summary: "We developed a safety mitigation stack to ready DALLÂ·E 3 for wider release and are sharing updates on our provenance research.",
        link: "https://openai.com/index/dall-e-3-is-now-available-in-chatgpt-plus-and-enterprise",
        source: "OpenAI"
    },
    {
        title: "OpenAIâ€™s technology explained",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/global-affairs/openai-technology-explained",
        source: "OpenAI"
    },
    {
        title: "Evolving online forms into dynamic data",
        summary: "Typeform evolves online forms into dynamic and conversational data collection experiences with GPT-3.5 and GPT-4.",
        link: "https://openai.com/index/typeform",
        source: "OpenAI"
    },
    {
        title: "Simplifying contract reviews with AI",
        summary: "Ironclad uses GPT-4 to simplify the contract review process.",
        link: "https://openai.com/index/ironclad",
        source: "OpenAI"
    },
    {
        title: "Building AI-powered apps for business",
        summary: "Retool uses GPT-4 to give businesses a fast, secure way to build AI-powered apps.",
        link: "https://openai.com/index/retool",
        source: "OpenAI"
    },
    {
        title: "DALLÂ·E 3 system card",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/dall-e-3-system-card",
        source: "OpenAI"
    },
    {
        title: "ChatGPT can now see, hear, and speak",
        summary: "We are beginning to roll out new voice and image capabilities in ChatGPT. They offer a new, more intuitive type of interface by allowing you to have a voice conversation or show ChatGPT what youâ€™re ...",
        link: "https://openai.com/index/chatgpt-can-now-see-hear-and-speak",
        source: "OpenAI"
    },
    {
        title: "GPT-4V(ision) system card",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/gpt-4v-system-card",
        source: "OpenAI"
    },
    {
        title: "OpenAI Red Teaming Network",
        summary: "Weâ€™re announcing an open call for the OpenAI Red Teaming Network and invite domain experts interested in improving the safety of OpenAIâ€™s models to join our efforts.",
        link: "https://openai.com/index/red-teaming-network",
        source: "OpenAI"
    },
    {
        title: "Introducing OpenAI Dublin",
        summary: "Weâ€™re growing our presence in Europe with an office in Dublin, Ireland.",
        link: "https://openai.com/index/introducing-openai-dublin",
        source: "OpenAI"
    },
    {
        title: "Join us for OpenAIâ€™s first developer conference on November 6 in San Francisco",
        summary: "Developer registration for in-person attendance will open in the coming weeks and developers everywhere will be able to livestream the keynote.",
        link: "https://openai.com/index/announcing-openai-devday",
        source: "OpenAI"
    },
    {
        title: "Teaching with AI",
        summary: "Weâ€™re releasing a guide for teachers using ChatGPT in their classroomâ€”including suggested prompts, an explanation of how ChatGPT works and its limitations, the efficacy of AI detectors, and bias.",
        link: "https://openai.com/index/teaching-with-ai",
        source: "OpenAI"
    },
    {
        title: "Introducing ChatGPT Enterprise",
        summary: "Get enterprise-grade security & privacy and the most powerful version of ChatGPT yet.",
        link: "https://openai.com/index/introducing-chatgpt-enterprise",
        source: "OpenAI"
    },
    {
        title: "OpenAI partners with Scale to provide support for enterprises fine-tuning models",
        summary: "OpenAIâ€™s customers can leverage Scaleâ€™s AI expertise to customize our most advanced models.",
        link: "https://openai.com/index/openai-partners-with-scale-to-provide-support-for-enterprises-fine-tuning-models",
        source: "OpenAI"
    },
    {
        title: "GPT-3.5 Turbo fine-tuning and API updates",
        summary: "Developers can now bring their own data to customize GPT-3.5 Turbo for their use cases.",
        link: "https://openai.com/index/gpt-3-5-turbo-fine-tuning-and-api-updates",
        source: "OpenAI"
    },
    {
        title: "OpenAI acquires Global Illumination",
        summary: "The entire team has joined OpenAI.",
        link: "https://openai.com/index/openai-acquires-global-illumination",
        source: "OpenAI"
    },
    {
        title: "Using GPT-4 for content moderation",
        summary: "We use GPT-4 for content policy development and content moderation decisions, enabling more consistent labeling, a faster feedback loop for policy refinement, and less involvement from human moderator...",
        link: "https://openai.com/index/using-gpt-4-for-content-moderation",
        source: "OpenAI"
    },
    {
        title: "Confidence-Building Measures for Artificial Intelligence: Workshop proceedings",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/confidence-building-measures-for-artificial-intelligence",
        source: "OpenAI"
    },
    {
        title: "Frontier Model Forum",
        summary: "Weâ€™re forming a new industry body to promote the safe and responsible development of frontier AI systems: advancing AI safety research, identifying best practices and standards, and facilitating inf...",
        link: "https://openai.com/index/frontier-model-forum",
        source: "OpenAI"
    },
    {
        title: "Moving AI governance forward",
        summary: "OpenAI and other leading labs reinforce AI safety, security and trustworthiness through voluntary commitments.",
        link: "https://openai.com/index/moving-ai-governance-forward",
        source: "OpenAI"
    },
    {
        title: "Custom instructions for ChatGPT",
        summary: "Weâ€™re rolling out custom instructions to give you more control over how ChatGPT responds. Set your preferences, and ChatGPT will keep them in mind for all future conversations.",
        link: "https://openai.com/index/custom-instructions-for-chatgpt",
        source: "OpenAI"
    },
    {
        title: "Partnership with American Journalism Project to support local news",
        summary: "A new $5+ million partnership aims to explore ways the development of artificial intelligence (AI) can support a thriving, innovative local news field, and ensure local news organizations shape the fu...",
        link: "https://openai.com/index/partnership-with-american-journalism-project-to-support-local-news",
        source: "OpenAI"
    },
    {
        title: "Accurately analyzing large scale qualitative data",
        summary: "Viable uses GPT-4 to analyze qualitative data at a revolutionary scale with unparalleled accuracy.",
        link: "https://openai.com/index/viable",
        source: "OpenAI"
    },
    {
        title: "Frontier AI regulation: Managing emerging risks to public safety",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/frontier-ai-regulation",
        source: "OpenAI"
    },
    {
        title: "Insights from global conversations",
        summary: "We are sharing what we learned from our conversations across 22 countries, and how we will be incorporating those insights moving forward.",
        link: "https://openai.com/index/insights-from-global-conversations",
        source: "OpenAI"
    },
    {
        title: "Introducing OpenAI London",
        summary: "We are excited to announce OpenAIâ€™s first international expansion with a new office in London, United Kingdom.",
        link: "https://openai.com/index/introducing-openai-london",
        source: "OpenAI"
    },
    {
        title: "Testimony before the U.S. Senate",
        summary: "The following is the written testimony of Sam Altman, Chief Executive Officer of OpenAI, before the U.S. Senate Committee on the Judiciary (Subcommittee on Privacy, Technology, & the Law).",
        link: "https://openai.com/global-affairs/testimony-of-sam-altman-before-the-us-senate",
        source: "OpenAI"
    },
    {
        title: "Questions for the Record",
        summary: "The following are the Questions for the Record following Sam Altman's testimony before the U.S. Senate Committee on the Judiciary (Subcommittee on Privacy, Technology, & the Law).",
        link: "https://openai.com/global-affairs/sam-altman-senate-questions-for-the-record",
        source: "OpenAI"
    },
    {
        title: "Function calling and other API updates",
        summary: "Weâ€™re announcing updates including more steerable API models, function calling capabilities, longer context, and lower prices.",
        link: "https://openai.com/index/function-calling-and-other-api-updates",
        source: "OpenAI"
    },
    {
        title: "Comment on NTIA AI Accountability Policy",
        summary: "The National Telecommunications and Information Administration (NTIA) request for comments on AI Accountability policy.",
        link: "https://openai.com/global-affairs/comment-on-ntia-ai-accountability-policy",
        source: "OpenAI"
    },
    {
        title: "OpenAI Cybersecurity Grant Program",
        summary: "Our goal is to facilitate the development of AI-powered cybersecurity capabilities for defenders through grants and other support.",
        link: "https://openai.com/index/openai-cybersecurity-grant-program",
        source: "OpenAI"
    },
    {
        title: "Improving mathematical reasoning with process supervision",
        summary: "We've trained a model to achieve a new state-of-the-art in mathematical problem solving by rewarding each correct step of reasoning (â€œprocess supervisionâ€) instead of simply rewarding the correct ...",
        link: "https://openai.com/index/improving-mathematical-reasoning-with-process-supervision",
        source: "OpenAI"
    },
    {
        title: "Democratic inputs to AI",
        summary: "Our nonprofit organization, OpenAI, Inc., is launching a program to award ten $100,000 grants to fund experiments in setting up a democratic process for deciding what rules AI systems should follow, w...",
        link: "https://openai.com/index/democratic-inputs-to-ai",
        source: "OpenAI"
    },
    {
        title: "Governance of superintelligence",
        summary: "Now is a good time to start thinking about the governance of superintelligenceâ€”future AI systems dramatically more capable than even AGI.",
        link: "https://openai.com/index/governance-of-superintelligence",
        source: "OpenAI"
    },
    {
        title: "Introducing the ChatGPT app for iOS",
        summary: "The ChatGPT app syncs your conversations, supports voice input, and brings our latest model improvements to your fingertips.",
        link: "https://openai.com/index/introducing-the-chatgpt-app-for-ios",
        source: "OpenAI"
    },
    {
        title: "Language models can explain neurons in language models",
        summary: "We use GPT-4 to automatically write explanations for the behavior of neurons in large language models and to score those explanations. We release a dataset of these (imperfect) explanations and scores...",
        link: "https://openai.com/index/language-models-can-explain-neurons-in-language-models",
        source: "OpenAI"
    },
    {
        title: "New ways to manage your data in ChatGPT",
        summary: "ChatGPT users can now turn off chat history, allowing you to choose which conversations can be used to train our models.",
        link: "https://openai.com/index/new-ways-to-manage-your-data-in-chatgpt",
        source: "OpenAI"
    },
    {
        title: "Announcing OpenAIâ€™s Bug Bounty Program",
        summary: "This initiative is essential to our commitment to develop safe and advanced AI. As we create technology and services that are secure, reliable, and trustworthy, we need your help.",
        link: "https://openai.com/index/bug-bounty-program",
        source: "OpenAI"
    },
    {
        title: "Our approach to AI safety",
        summary: "Ensuring that AI systems are built, deployed, and used safely is critical to our mission.",
        link: "https://openai.com/index/our-approach-to-ai-safety",
        source: "OpenAI"
    },
    {
        title: "March 20 ChatGPT outage: Hereâ€™s what happened",
        summary: "An update on our findings, the actions weâ€™ve taken, and technical details of the bug.",
        link: "https://openai.com/index/march-20-chatgpt-outage",
        source: "OpenAI"
    },
    {
        title: "ChatGPT plugins",
        summary: "Weâ€™ve implemented initial support for plugins in ChatGPT. Plugins are tools designed specifically for language models with safety as a core principle, and help ChatGPT access up-to-date information,...",
        link: "https://openai.com/index/chatgpt-plugins",
        source: "OpenAI"
    },
    {
        title: "GPTs are GPTs: An early look at the labor market impact potential of large language models",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/gpts-are-gpts",
        source: "OpenAI"
    },
    {
        title: "GPT-4",
        summary: "Weâ€™ve created GPT-4, the latest milestone in OpenAIâ€™s effort in scaling up deep learning. GPT-4 is a large multimodal model (accepting image and text inputs, emitting text outputs) that, while les...",
        link: "https://openai.com/index/gpt-4-research",
        source: "OpenAI"
    },
    {
        title: "Transforming visual accessibility",
        summary: "Be My Eyes uses GPT-4 to transform visual accessibility.",
        link: "https://openai.com/index/be-my-eyes",
        source: "OpenAI"
    },
    {
        title: "Filling crucial language learning gaps",
        summary: "GPT-4 deepens the conversation on Duolingo.",
        link: "https://openai.com/index/duolingo",
        source: "OpenAI"
    },
    {
        title: "Powering virtual education for the classroom",
        summary: "Khan Academy explores the potential for GPT-4 in a limited pilot program.",
        link: "https://openai.com/index/khan-academy",
        source: "OpenAI"
    },
    {
        title: "Streamlining financial solutions for safety and growth",
        summary: "Stripe leverages GPT-4 to streamline user experience and combat fraud.",
        link: "https://openai.com/index/stripe",
        source: "OpenAI"
    },
    {
        title: "Preserving languages for the future",
        summary: "How Iceland is using GPT-4 to preserve its language.",
        link: "https://openai.com/index/government-of-iceland",
        source: "OpenAI"
    },
    {
        title: "Planning for AGI and beyond",
        summary: "Our mission is to ensure that artificial general intelligenceâ€”AI systems that are generally smarter than humansâ€”benefits all ofÂ humanity.",
        link: "https://openai.com/index/planning-for-agi-and-beyond",
        source: "OpenAI"
    },
    {
        title: "How should AI systems behave, and who should decide?",
        summary: "Weâ€™re clarifying how ChatGPTâ€™s behavior is shaped and our plans for improving that behavior, allowing more user customization, and getting more public input into our decision-making in theseÂ area...",
        link: "https://openai.com/index/how-should-ai-systems-behave",
        source: "OpenAI"
    },
    {
        title: "Introducing ChatGPT Plus",
        summary: "Weâ€™re launching a pilot subscription plan for ChatGPT, a conversational AI that can chat with you, answer follow-up questions, and challenge incorrectÂ assumptions.",
        link: "https://openai.com/index/chatgpt-plus",
        source: "OpenAI"
    },
    {
        title: "New AI classifier for indicating AI-written text",
        summary: "Weâ€™re launching a classifier trained to distinguish between AI-written and human-writtenÂ text.",
        link: "https://openai.com/index/new-ai-classifier-for-indicating-ai-written-text",
        source: "OpenAI"
    },
    {
        title: "OpenAI and Microsoft extend partnership",
        summary: "Weâ€™re happy to announce that OpenAI andÂ MicrosoftÂ are extending ourÂ partnership.",
        link: "https://openai.com/index/openai-and-microsoft-extend-partnership",
        source: "OpenAI"
    },
    {
        title: "Forecasting potential misuses of language models for disinformation campaigns and how to reduce risk",
        summary: "OpenAI researchers collaborated with Georgetown Universityâ€™s Center for Security and Emerging Technology and the Stanford Internet Observatory to investigate how large language models might be misus...",
        link: "https://openai.com/index/forecasting-misuse",
        source: "OpenAI"
    },
    {
        title: "Delivering nuanced insights from customer feedback",
        summary: "Using GPT-3 to deliver fast, nuanced insights from customer feedback.",
        link: "https://openai.com/index/yabble",
        source: "OpenAI"
    },
    {
        title: "Fine-tuning GPT-3 to scale video creation",
        summary: "Fine-tuning GPT-3 to power and scale done-for-you video creation.",
        link: "https://openai.com/index/waymark",
        source: "OpenAI"
    },
    {
        title: "Creating next-gen characters",
        summary: "Using GPT-3 to create the next generation of AI-powered characters.",
        link: "https://openai.com/index/inworld-ai-DO-NOT-PUBLISH",
        source: "OpenAI"
    },
    {
        title: "The power of continuous learning",
        summary: "Lilian Weng works on Applied AI Research at OpenAI.",
        link: "https://openai.com/index/the-power-of-continuous-learning",
        source: "OpenAI"
    },
    {
        title: "Point-E: A system for generating 3D point clouds from complex prompts",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/point-e",
        source: "OpenAI"
    },
    {
        title: "New and improved embedding model",
        summary: "We are excited to announce a new embedding model which is significantly more capable, cost effective, and simpler to use.",
        link: "https://openai.com/index/new-and-improved-embedding-model",
        source: "OpenAI"
    },
    {
        title: "Discovering the minutiae of backend systems",
        summary: "Christian Gibson is an engineer on the Supercomputing team at OpenAI.",
        link: "https://openai.com/index/discovering-the-minutiae-of-backend-systems",
        source: "OpenAI"
    },
    {
        title: "Introducing ChatGPT",
        summary: "Weâ€™ve trained a model called ChatGPT which interacts in a conversational way. The dialogue format makes it possible for ChatGPT to answer followup questions, admit its mistakes, challenge incorrect ...",
        link: "https://openai.com/index/chatgpt",
        source: "OpenAI"
    },
    {
        title: "DALLÂ·E API now available in public beta",
        summary: "Starting today, developers can begin building apps with the DALLÂ·E API.",
        link: "https://openai.com/index/dall-e-api-now-available-in-public-beta",
        source: "OpenAI"
    },
    {
        title: "Scaling laws for reward model overoptimization",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/scaling-laws-for-reward-model-overoptimization",
        source: "OpenAI"
    },
    {
        title: "DALLÂ·E now available without waitlist",
        summary: "New users can start creating straight away. Lessons learned from deployment and improvements to our safety systems make wider availability possible.",
        link: "https://openai.com/index/dall-e-now-available-without-waitlist",
        source: "OpenAI"
    },
    {
        title: "Introducing Whisper",
        summary: "Weâ€™ve trained and are open-sourcing a neural net called Whisper that approaches human level robustness and accuracy on English speechÂ recognition.",
        link: "https://openai.com/index/whisper",
        source: "OpenAI"
    },
    {
        title: "DALLÂ·E: Introducing outpainting",
        summary: "Extend creativity and tell a bigger story with DALLÂ·E images of anyÂ size.",
        link: "https://openai.com/index/dall-e-introducing-outpainting",
        source: "OpenAI"
    },
    {
        title: "Our approach to alignment research",
        summary: "We are improving our AI systemsâ€™ ability to learn from human feedback and to assist humans at evaluating AI. Our goal is to build a sufficiently aligned AI system that can help us solve all other al...",
        link: "https://openai.com/index/our-approach-to-alignment-research",
        source: "OpenAI"
    },
    {
        title: "New and improved content moderation tooling",
        summary: "We are introducing a new and improved content moderation tool. TheÂ Moderation endpointÂ improves upon our previous content filter, and is available for free today to OpenAI APIÂ developers.",
        link: "https://openai.com/index/new-and-improved-content-moderation-tooling",
        source: "OpenAI"
    },
    {
        title: "Efficient training of language models to fill in the middle",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/efficient-training-of-language-models-to-fill-in-the-middle",
        source: "OpenAI"
    },
    {
        title: "A hazard analysis framework for code synthesis large language models",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/a-hazard-analysis-framework-for-code-synthesis-large-language-models",
        source: "OpenAI"
    },
    {
        title: "DALLÂ·E now available in beta",
        summary: "Weâ€™ll invite 1 million people from our waitlist over the coming weeks. Users can create with DALLÂ·E using free credits that refill every month, and buy additional credits in 115-generation incremen...",
        link: "https://openai.com/index/dall-e-now-available-in-beta",
        source: "OpenAI"
    },
    {
        title: "Reducing bias and improving safety in DALLÂ·E 2",
        summary: "Today, we are implementing a new technique so that DALLÂ·E generates images of people that more accurately reflect the diversity of the worldâ€™s population.",
        link: "https://openai.com/index/reducing-bias-and-improving-safety-in-dall-e-2",
        source: "OpenAI"
    },
    {
        title: "DALLÂ·E 2: Extending creativity",
        summary: "As part of our DALLÂ·E 2 research preview, more than 3,000 artists from more than 118 countries have incorporated DALLÂ·E into their creative workflows. The artists in our early access group have help...",
        link: "https://openai.com/index/dall-e-2-extending-creativity",
        source: "OpenAI"
    },
    {
        title: "DALLÂ·E 2 pre-training mitigations",
        summary: "In order to share the magic ofÂ DALLÂ·E 2Â with a broad audience, we needed to reduce the risks associated with powerful image generation models. To this end, we put variousÂ guardrailsÂ in place to p...",
        link: "https://openai.com/index/dall-e-2-pre-training-mitigations",
        source: "OpenAI"
    },
    {
        title: "Learning to play Minecraft with Video PreTraining",
        summary: "We trained a neural network to play Minecraft by Video PreTraining (VPT) on a massive unlabeled video dataset of human Minecraft play, while using only a small amount of labeled contractor data. With ...",
        link: "https://openai.com/index/vpt",
        source: "OpenAI"
    },
    {
        title: "Evolution through large models",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/evolution-through-large-models",
        source: "OpenAI"
    },
    {
        title: "AI-written critiques help humans notice flaws",
        summary: "We trained â€œcritique-writingâ€ models to describe flaws in summaries. Human evaluators find flaws in summaries much more often when shown our modelâ€™s critiques. Larger models are better at self-c...",
        link: "https://openai.com/index/critiques",
        source: "OpenAI"
    },
    {
        title: "Techniques for training large neural networks",
        summary: "Large neural networks are at the core of many recent advances in AI, but training them is a difficult engineering and research challenge which requires orchestrating a cluster of GPUs to perform a sin...",
        link: "https://openai.com/index/techniques-for-training-large-neural-networks",
        source: "OpenAI"
    },
    {
        title: "Best practices for deploying language models",
        summary: "Cohere, OpenAI, and AI21 Labs have developed a preliminary set of best practices applicable to any organization developing or deploying large language models.",
        link: "https://openai.com/index/best-practices-for-deploying-language-models",
        source: "OpenAI"
    },
    {
        title: "Teaching models to express their uncertainty in words",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/teaching-models-to-express-their-uncertainty-in-words",
        source: "OpenAI"
    },
    {
        title: "Powering next generation applications with OpenAI Codex",
        summary: "Codex is now powering 70 different applications across a variety of use cases through the OpenAIÂ API.",
        link: "https://openai.com/index/codex-apps",
        source: "OpenAI"
    },
    {
        title: "DALLÂ·E 2 research preview update",
        summary: "Early users have created over 3 million images to date and helped us improve our safety processes. Weâ€™re excited to begin adding up to 1,000 new users from our waitlist each week.Â",
        link: "https://openai.com/index/dall-e-2-update",
        source: "OpenAI"
    },
    {
        title: "OpenAI leadership team update",
        summary: "Weâ€™re happy to announce several executive role changes that reflect our recent progress and will ensure continued momentum toward our next majorÂ milestones.",
        link: "https://openai.com/index/leadership-team-update",
        source: "OpenAI"
    },
    {
        title: "Hierarchical text-conditional image generation with CLIP latents",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/hierarchical-text-conditional-image-generation-with-clip-latents",
        source: "OpenAI"
    },
    {
        title: "Measuring Goodhartâ€™s law",
        summary: "Goodhartâ€™s lawÂ famously says: â€œWhen a measure becomes a target, it ceases to be a good measure.â€ Although originally from economics, itâ€™s something we have to grapple with at OpenAI when figu...",
        link: "https://openai.com/index/measuring-goodharts-law",
        source: "OpenAI"
    },
    {
        title: "New GPT-3 capabilities: Edit & insert",
        summary: "Weâ€™ve released new versions of GPT-3 and CodexÂ which can edit or insert content into existing text, rather than just completing existing text.",
        link: "https://openai.com/index/gpt-3-edit-insert",
        source: "OpenAI"
    },
    {
        title: "A research agenda for assessing the economic impacts of code generation models",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/economic-impacts-research",
        source: "OpenAI"
    },
    {
        title: "Economic impacts research at OpenAI",
        summary: "Call for expressions of interest to study the economic impacts of large languageÂ models.",
        link: "https://openai.com/index/economic-impacts",
        source: "OpenAI"
    },
    {
        title: "Lessons learned on language model safety and misuse",
        summary: "We describe our latest thinking in the hope of helping other AI developers address safety and misuse of deployedÂ models.",
        link: "https://openai.com/index/language-model-safety-and-misuse",
        source: "OpenAI"
    },
    {
        title: "Solving (some) formal math olympiad problems",
        summary: "We built a neural theorem prover forÂ LeanÂ that learned to solve a variety of challenging high-school olympiad problems, including problems from theÂ AMC12Â andÂ AIMEÂ competitions, as well as two pr...",
        link: "https://openai.com/index/formal-math",
        source: "OpenAI"
    },
    {
        title: "Aligning language models to follow instructions",
        summary: "Weâ€™ve trained language models that are much better at following user intentions than GPT-3 while also making them more truthful and less toxic, using techniques developed through our alignment resea...",
        link: "https://openai.com/index/instruction-following",
        source: "OpenAI"
    },
    {
        title: "Introducing text and code embeddings",
        summary: "We are introducing embeddings, a new endpoint in the OpenAI API that makes it easy to perform natural language and code tasks like semantic search, clustering, topic modeling, and classification.",
        link: "https://openai.com/index/introducing-text-and-code-embeddings",
        source: "OpenAI"
    },
    {
        title: "Text and code embeddings by contrastive pre-training",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/text-and-code-embeddings-by-contrastive-pre-training",
        source: "OpenAI"
    },
    {
        title: "WebGPT: Improving the factual accuracy of language models through web browsing",
        summary: "Weâ€™ve fine-tuned GPT-3 to more accurately answer open-ended questions using a text-based web browser.",
        link: "https://openai.com/index/webgpt",
        source: "OpenAI"
    },
    {
        title: "Customizing GPT-3 for your application",
        summary: "Fine-tune with a singleÂ command.",
        link: "https://openai.com/index/customizing-gpt-3",
        source: "OpenAI"
    },
    {
        title: "OpenAI Residency",
        summary: "As part of our effort to support and develop AI talent, weâ€™re excited to announce the OpenAI Residency.",
        link: "https://openai.com/index/openai-residency",
        source: "OpenAI"
    },
    {
        title: "OpenAIâ€™s API now available with no waitlist",
        summary: "Wider availability made possible by safetyÂ progress.",
        link: "https://openai.com/index/api-no-waitlist",
        source: "OpenAI"
    },
    {
        title: "Solving math word problems",
        summary: "Weâ€™ve trainedÂ a system that solves grade school math problems with nearly twice the accuracy of a fine-tuned GPT-3 model. It solves about 90% as many problems as real kids: a small sample of 9-12 y...",
        link: "https://openai.com/index/solving-math-word-problems",
        source: "OpenAI"
    },
    {
        title: "Summarizing books with human feedback",
        summary: "Scaling human oversight of AI systems for tasks that are difficult toÂ evaluate.",
        link: "https://openai.com/index/summarizing-books",
        source: "OpenAI"
    },
    {
        title: "TruthfulQA: Measuring how models mimic human falsehoods",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/truthfulqa",
        source: "OpenAI"
    },
    {
        title: "Helen Toner joins OpenAIâ€™s board of directors",
        summary: "Today, weâ€™re excited to announce the appointment of Helen Toner to our board of directors.",
        link: "https://openai.com/index/helen-toner-joins",
        source: "OpenAI"
    },
    {
        title: "OpenAI Codex",
        summary: "Weâ€™ve created an improved version of OpenAI Codex, our AI system that translates natural language to code, and we are releasing it through our API in private beta starting today.",
        link: "https://openai.com/index/openai-codex",
        source: "OpenAI"
    },
    {
        title: "Introducing Triton: Open-source GPU programming for neural networks",
        summary: "Weâ€™re releasing Triton 1.0, an open-source Python-like programming language which enables researchers with no CUDA experience to write highly efficient GPU codeâ€”most of the time on par with what a...",
        link: "https://openai.com/index/triton",
        source: "OpenAI"
    },
    {
        title: "Evaluating large language models trained on code",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/evaluating-large-language-models-trained-on-code",
        source: "OpenAI"
    },
    {
        title: "Improving language model behavior by training on a curated dataset",
        summary: "Our latest research finds we can improve language model behavior with respect to specific behavioral values by fine-tuning on a small, curatedÂ dataset.",
        link: "https://openai.com/index/improving-language-model-behavior",
        source: "OpenAI"
    },
    {
        title: "OpenAI Scholars 2021: Final projects",
        summary: "Weâ€™re proud to announce that the 2021 class ofÂ OpenAI ScholarsÂ has completed our six-month mentorship program and have produced an open-source research project with stipends and support fromÂ Open...",
        link: "https://openai.com/index/openai-scholars-2021-final-projects",
        source: "OpenAI"
    },
    {
        title: "Will Hurd joins OpenAIâ€™s board of directors",
        summary: "OpenAI is committed to developing general-purpose artificial intelligence that benefits all humanity, and we believe that achieving our goal requires expertise in public policy as well as technology. ...",
        link: "https://openai.com/index/will-hurd-joins",
        source: "OpenAI"
    },
    {
        title: "GPT-3 powers the next generation of apps",
        summary: "Over 300 applications are delivering GPT-3â€“powered search, conversation, text completion, and other advanced AI features through ourÂ API.",
        link: "https://openai.com/index/gpt-3-apps",
        source: "OpenAI"
    },
    {
        title: "Multimodal neurons in artificial neural networks",
        summary: "Weâ€™ve discovered neurons in CLIP that respond to the same concept whether presented literally, symbolically, or conceptually. This may explain CLIPâ€™s accuracy in classifying surprising visual rend...",
        link: "https://openai.com/index/multimodal-neurons",
        source: "OpenAI"
    },
    {
        title: "Understanding the capabilities, limitations, and societal impact of large language models",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/understanding-the-capabilities-limitations-and-societal-impact-of-large-language-models",
        source: "OpenAI"
    },
    {
        title: "Scaling Kubernetes to 7,500 nodes",
        summary: "Weâ€™ve scaled Kubernetes clusters to 7,500 nodes, producing a scalable infrastructure for large models likeÂ GPT-3,Â CLIP, andÂ DALLÂ·E, but also for rapid small-scale iterative research such asÂ Sca...",
        link: "https://openai.com/index/scaling-kubernetes-to-7500-nodes",
        source: "OpenAI"
    },
    {
        title: "DALLÂ·E: Creating images from text",
        summary: "Weâ€™ve trained a neural network called DALLÂ·E that creates images from text captions for a wide range of concepts expressible in naturalÂ language.",
        link: "https://openai.com/index/dall-e",
        source: "OpenAI"
    },
    {
        title: "CLIP: Connecting text and images",
        summary: "Weâ€™re introducing a neural network called CLIP which efficiently learns visual concepts from natural language supervision. CLIP can be applied to any visual classification benchmark by simply provid...",
        link: "https://openai.com/index/clip",
        source: "OpenAI"
    },
    {
        title: "Organizational update from OpenAI",
        summary: "Itâ€™s been a year of dramatic change and growth at OpenAI.",
        link: "https://openai.com/index/organizational-update",
        source: "OpenAI"
    },
    {
        title: "OpenAI licenses GPT-3 technology to Microsoft",
        summary: "OpenAI has agreed to license GPT-3 to Microsoft for their own products and services.",
        link: "https://openai.com/index/openai-licenses-gpt-3-technology-to-microsoft",
        source: "OpenAI"
    },
    {
        title: "Generative language modeling for automated theorem proving",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/generative-language-modeling-for-automated-theorem-proving",
        source: "OpenAI"
    },
    {
        title: "Learning to summarize with human feedback",
        summary: "Weâ€™ve applied reinforcement learning from human feedback to train language models that are better at summarization.",
        link: "https://openai.com/index/learning-to-summarize-with-human-feedback",
        source: "OpenAI"
    },
    {
        title: "OpenAI Scholars 2020: Final projects",
        summary: "Our third class of OpenAI Scholars presented their final projects at virtual Demo Day, showcasing their research results from over the past five months.",
        link: "https://openai.com/index/openai-scholars-2020-final-projects",
        source: "OpenAI"
    },
    {
        title: "Procgen and MineRL Competitions",
        summary: "Weâ€™re excited to announce that OpenAI is co-organizing two NeurIPS 2020 competitions with AIcrowd, Carnegie Mellon University, and DeepMind, using Procgen Benchmark and MineRL.",
        link: "https://openai.com/index/procgen-minerl-competitions",
        source: "OpenAI"
    },
    {
        title: "Image GPT",
        summary: "We find that, just as a large transformer model trained on language can generate coherent text, the same exact model trained on pixel sequences can generate coherent imageÂ completionsÂ andÂ samples. ...",
        link: "https://openai.com/index/image-gpt",
        source: "OpenAI"
    },
    {
        title: "OpenAI API",
        summary: "Weâ€™re releasing an API for accessing new AI models developed by OpenAI.",
        link: "https://openai.com/index/openai-api",
        source: "OpenAI"
    },
    {
        title: "Language models are few-shot learners",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/language-models-are-few-shot-learners",
        source: "OpenAI"
    },
    {
        title: "AI and efficiency",
        summary: "Weâ€™re releasing an analysis showing that since 2012 the amount of compute needed to train a neural net to the same performance on ImageNetÂ classification has been decreasing by a factor of 2 every ...",
        link: "https://openai.com/index/ai-and-efficiency",
        source: "OpenAI"
    },
    {
        title: "Jukebox",
        summary: "Weâ€™re introducing Jukebox, a neural net that generates music, including rudimentary singing, as raw audio in a variety of genres and artist styles. Weâ€™re releasing the model weights and code, alon...",
        link: "https://openai.com/index/jukebox",
        source: "OpenAI"
    },
    {
        title: "Improving verifiability in AI development",
        summary: "Weâ€™ve contributed to a multi-stakeholder report byÂ 58 co-authorsÂ at 30 organizations, including theÂ Centre for the Future of Intelligence,Â Mila,Â Schwartz Reisman Institute for Technology and So...",
        link: "https://openai.com/index/improving-verifiability",
        source: "OpenAI"
    },
    {
        title: "OpenAI Microscope",
        summary: "Weâ€™re introducingÂ OpenAI Microscope, a collection of visualizations of every significant layer and neuron of eight vision â€œmodel organismsâ€ which are often studied in interpretability. Microsco...",
        link: "https://openai.com/index/microscope",
        source: "OpenAI"
    },
    {
        title: "OpenAI standardizes on PyTorch",
        summary: "We are standardizing OpenAIâ€™s deep learning framework onÂ PyTorch.",
        link: "https://openai.com/index/openai-pytorch",
        source: "OpenAI"
    },
    {
        title: "Scaling laws for neural language models",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/scaling-laws-for-neural-language-models",
        source: "OpenAI"
    },
    {
        title: "Dota 2 with large scale deep reinforcement learning",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/dota-2-with-large-scale-deep-reinforcement-learning",
        source: "OpenAI"
    },
    {
        title: "Deep double descent",
        summary: "We show that theÂ doubleÂ descentÂ phenomenonÂ occurs in CNNs, ResNets, and transformers: performance first improves, then gets worse, and then improves again with increasing model size, data size, or...",
        link: "https://openai.com/index/deep-double-descent",
        source: "OpenAI"
    },
    {
        title: "Procgen Benchmark",
        summary: "Weâ€™re releasing Procgen Benchmark, 16 simple-to-useÂ procedurally-generatedÂ environments which provide a direct measure of how quickly a reinforcement learning agent learns generalizableÂ skills.",
        link: "https://openai.com/index/procgen-benchmark",
        source: "OpenAI"
    },
    {
        title: "Safety Gym",
        summary: "Weâ€™re releasing Safety Gym, a suite of environments and tools for measuring progress towards reinforcement learning agents that respect safety constraints whileÂ training.",
        link: "https://openai.com/index/safety-gym",
        source: "OpenAI"
    },
    {
        title: "Benchmarking safe exploration in deep reinforcement learning",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/benchmarking-safe-exploration-in-deep-reinforcement-learning",
        source: "OpenAI"
    },
    {
        title: "GPT-2: 1.5B release",
        summary: "As the final model release ofÂ GPT-2â€™sÂ staged release, weâ€™re releasing the largest version (1.5B parameters) of GPT-2 along withÂ code and model weightsÂ to facilitate detection of outputs of GPT...",
        link: "https://openai.com/index/gpt-2-1-5b-release",
        source: "OpenAI"
    },
    {
        title: "Solving Rubikâ€™s Cube with a robot hand",
        summary: "Weâ€™ve trained a pair of neural networks to solve the Rubikâ€™s Cube with a human-like robot hand. The neural networks are trained entirely in simulation, using the same reinforcement learning code a...",
        link: "https://openai.com/index/solving-rubiks-cube",
        source: "OpenAI"
    },
    {
        title: "OpenAI Scholars 2020: Applications open",
        summary: "We are now accepting applications for our third class of OpenAI Scholars.",
        link: "https://openai.com/index/openai-scholars-2020",
        source: "OpenAI"
    },
    {
        title: "Fine-tuning GPT-2 from human preferences",
        summary: "Weâ€™ve fine-tuned the 774M parameter GPT-2 language model using human feedback for various tasks, successfully matching the preferences of the external human labelers, though those preferences did no...",
        link: "https://openai.com/index/fine-tuning-gpt-2",
        source: "OpenAI"
    },
    {
        title: "Emergent tool use from multi-agent interaction",
        summary: "Weâ€™ve observed agents discovering progressively more complex tool use while playing a simple game of hide-and-seek. Through training in our new simulated hide-and-seek environment, agents build a se...",
        link: "https://openai.com/index/emergent-tool-use",
        source: "OpenAI"
    },
    {
        title: "Testing robustness against unforeseen adversaries",
        summary: "Weâ€™ve developed a method to assess whether a neural network classifier can reliably defend against adversarial attacks not seen during training. Our method yields a new metric, UAR (Unforeseen Attac...",
        link: "https://openai.com/index/testing-robustness",
        source: "OpenAI"
    },
    {
        title: "GPT-2: 6-month follow-up",
        summary: "Weâ€™re releasing the 774 million parameter GPT-2 language model after the release of our smallÂ 124M modelÂ in February, staged release of our mediumÂ 355M modelÂ in May, and subsequent research with...",
        link: "https://openai.com/index/gpt-2-6-month-follow-up",
        source: "OpenAI"
    },
    {
        title: "Learning Day",
        summary: "At OpenAI, each Thursday is Learning Day: a day where employees have the option to self-study technical skills that will make them better at their job but which arenâ€™t being learned from daily work.",
        link: "https://openai.com/index/learning-day",
        source: "OpenAI"
    },
    {
        title: "Microsoft invests in and partners with OpenAI to support us building beneficial AGI",
        summary: "Microsoft is investing $1 billion in OpenAI to support us building artificial general intelligence (AGI) with widely distributed economic benefits. Weâ€™re partnering to develop a hardware and softwar...",
        link: "https://openai.com/index/microsoft-invests-in-and-partners-with-openai",
        source: "OpenAI"
    },
    {
        title: "Why responsible AI development needs cooperation on safety",
        summary: "Weâ€™ve written a policy research paper identifying four strategies that can be used today to improve the likelihood of long-term industry cooperation on safety norms in AI: communicating risks and be...",
        link: "https://openai.com/index/cooperation-on-safety",
        source: "OpenAI"
    },
    {
        title: "OpenAI Robotics Symposium 2019",
        summary: "We hosted the first OpenAI Robotics Symposium on April 27, 2019.",
        link: "https://openai.com/index/symposium-2019",
        source: "OpenAI"
    },
    {
        title: "OpenAI Scholars 2019: Final projects",
        summary: "Our second class of OpenAI Scholars has concluded, with all eight scholars producing an exciting final project showcased at Scholars Demo Day at OpenAI.",
        link: "https://openai.com/index/openai-scholars-2019-final-projects",
        source: "OpenAI"
    },
    {
        title: "OpenAI Fellows Fall 2018: Final projects",
        summary: "Our second class of OpenAI Fellows has wrapped up, with each Fellow going from a machine learning beginner to core OpenAI contributor in the course of a 6-month apprenticeship. We are currently review...",
        link: "https://openai.com/index/openai-fellows-fall-2018",
        source: "OpenAI"
    },
    {
        title: "Transfer of adversarial robustness between perturbation types",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/transfer-of-adversarial-robustness-between-perturbation-types",
        source: "OpenAI"
    },
    {
        title: "MuseNet",
        summary: "Weâ€™ve created MuseNet, a deep neural network that can generate 4-minute musical compositions with 10 different instruments, and can combine styles from country to Mozart to the Beatles. MuseNet was ...",
        link: "https://openai.com/index/musenet",
        source: "OpenAI"
    },
    {
        title: "Generative modeling with sparse transformers",
        summary: "Weâ€™ve developed the Sparse Transformer, a deep neural network which sets new records at predicting what comes next in a sequenceâ€”whether text, images, or sound. It uses an algorithmic improvement ...",
        link: "https://openai.com/index/sparse-transformer",
        source: "OpenAI"
    },
    {
        title: "OpenAI Five defeats Dota 2 world champions",
        summary: "OpenAI Five is the first AI to beat the world champions in an esports game, having won two back-to-back games versus the world champion Dota 2 team,Â OG, atÂ FinalsÂ this weekend. Both OpenAI Five and...",
        link: "https://openai.com/index/openai-five-defeats-dota-2-world-champions",
        source: "OpenAI"
    },
    {
        title: "OpenAI Five Finals",
        summary: "Weâ€™ll be holding our final live event for OpenAI Five at 11:30am PT on April 13.",
        link: "https://openai.com/index/openai-five-finals",
        source: "OpenAI"
    },
    {
        title: "Implicit generation and generalization methods for energy-based models",
        summary: "Weâ€™ve made progress towards stable and scalable training ofÂ energy-based modelsÂ (EBMs) resulting in better sample quality and generalization ability than existing models. Generation in EBMs spends...",
        link: "https://openai.com/index/energy-based-models",
        source: "OpenAI"
    },
    {
        title: "OpenAI Scholars 2019: Meet our Scholars",
        summary: "Our class of eightÂ scholarsÂ (out of 550 applicants) brings together collective expertise in literature, philosophy, cell biology, statistics, economics, quantum physics, and business innovation.",
        link: "https://openai.com/index/openai-scholars-2019-meet-our-scholars",
        source: "OpenAI"
    },
    {
        title: "OpenAI LP",
        summary: "Weâ€™ve created OpenAI LP, a new â€œcapped-profitâ€ company that allows us to rapidly increase our investments in compute and talent while including checks and balances to actualize our mission.",
        link: "https://openai.com/index/openai-lp",
        source: "OpenAI"
    },
    {
        title: "Introducing Activation Atlases",
        summary: "Weâ€™ve createdÂ activation atlasesÂ (inÂ collaborationÂ with Google researchers), a new technique for visualizing what interactions between neurons can represent. As AI systems are deployed in increa...",
        link: "https://openai.com/index/introducing-activation-atlases",
        source: "OpenAI"
    },
    {
        title: "Neural MMO: A massively multiagent game environment",
        summary: "Weâ€™re releasing a NeuralÂ MMO, a massively multiagent game environment for reinforcement learning agents. Our platform supports a large, variable number of agents within a persistent and open-ended ...",
        link: "https://openai.com/index/neural-mmo",
        source: "OpenAI"
    },
    {
        title: "Spinning Up in Deep RL: Workshop review",
        summary: "On February 2, we held our first Spinning Up Workshop as part of our new education initiative at OpenAI.",
        link: "https://openai.com/index/spinning-up-in-deep-rl-workshop-review",
        source: "OpenAI"
    },
    {
        title: "AI safety needs social scientists",
        summary: "Weâ€™ve written a paper arguing that long-term AI safety research needs social scientists to ensure AI alignment algorithms succeed when actual humans are involved. Properly aligning advanced AI syste...",
        link: "https://openai.com/index/ai-safety-needs-social-scientists",
        source: "OpenAI"
    },
    {
        title: "Better language models and their implications",
        summary: "Weâ€™ve trained a large-scale unsupervised language model which generates coherent paragraphs of text, achieves state-of-the-art performance on many language modeling benchmarks, and performs rudiment...",
        link: "https://openai.com/index/better-language-models",
        source: "OpenAI"
    },
    {
        title: "Computational limitations in robust classification and win-win results",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/computational-limitations-in-robust-classification-and-win-win-results",
        source: "OpenAI"
    },
    {
        title: "OpenAI Fellows Summer 2018: Final projects",
        summary: "Our first cohort of OpenAI Fellows has concluded, with each Fellow going from a machine learning beginner to core OpenAI contributor in the course of a 6-month apprenticeship.",
        link: "https://openai.com/index/openai-summer-fellows-2018",
        source: "OpenAI"
    },
    {
        title: "How AI training scales",
        summary: "Weâ€™ve discovered that the gradient noise scale, a simple statistical metric, predicts the parallelizability of neural network training on a wide range of tasks. Since complex tasks tend to have nois...",
        link: "https://openai.com/index/how-ai-training-scales",
        source: "OpenAI"
    },
    {
        title: "Quantifying generalization in reinforcement learning",
        summary: "Weâ€™re releasing CoinRun, a training environment which provides a metric for an agentâ€™s ability to transfer its experience to novel situations and has already helped clarify aÂ longstandingÂ puzzle...",
        link: "https://openai.com/index/quantifying-generalization-in-reinforcement-learning",
        source: "OpenAI"
    },
    {
        title: "Spinning Up in Deep RL",
        summary: "Weâ€™re releasing Spinning Up in Deep RL, an educational resource designed to let anyone learn to become a skilled practitioner in deep reinforcement learning. Spinning Up consists of crystal-clear ex...",
        link: "https://openai.com/index/spinning-up-in-deep-rl",
        source: "OpenAI"
    },
    {
        title: "Learning concepts with energy functions",
        summary: "Weâ€™ve developed anÂ energy-based modelÂ that can quickly learn to identify and generate instances of concepts, such as near, above, between, closest, and furthest, expressed as sets of 2d points. Ou...",
        link: "https://openai.com/index/learning-concepts-with-energy-functions",
        source: "OpenAI"
    },
    {
        title: "Plan online, learn offline: Efficient learning and exploration via model-based control",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/plan-online-learn-offline",
        source: "OpenAI"
    },
    {
        title: "Reinforcement learning with prediction-based rewards",
        summary: "Weâ€™ve developedÂ Random Network Distillation (RND), a prediction-based method for encouraging reinforcement learning agents to explore their environments through curiosity, which for the first time ...",
        link: "https://openai.com/index/reinforcement-learning-with-prediction-based-rewards",
        source: "OpenAI"
    },
    {
        title: "Learning complex goals with iterated amplification",
        summary: "Weâ€™re proposing an AI safety technique called iterated amplification that lets us specify complicated behaviors and goals that are beyond human scale, by demonstrating how to decompose a task into s...",
        link: "https://openai.com/index/learning-complex-goals-with-iterated-amplification",
        source: "OpenAI"
    },
    {
        title: "OpenAI Scholars 2019: Applications open",
        summary: "We are now accepting applications for our second cohort of OpenAI Scholars, a program where we provide 6â€“10 stipends and mentorship to individuals from underrepresented groups to study deep learning...",
        link: "https://openai.com/index/openai-scholars-2019",
        source: "OpenAI"
    },
    {
        title: "OpenAI Fellows Winter 2019 & Interns Summer 2019",
        summary: "We are now accepting applications for OpenAI Fellows and Interns for 2019.",
        link: "https://openai.com/index/openai-fellows-interns-2019",
        source: "OpenAI"
    },
    {
        title: "FFJORD: Free-form continuous dynamics for scalable reversible generative models",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/ffjord",
        source: "OpenAI"
    },
    {
        title: "OpenAI Scholars 2018: Final projects",
        summary: "Our first cohort ofÂ OpenAI ScholarsÂ has now completed the program.",
        link: "https://openai.com/index/openai-scholars-2018-final-projects",
        source: "OpenAI"
    },
    {
        title: "The International 2018: Results",
        summary: "OpenAI Five lost two games against top Dota 2 players at The International in Vancouver this week, maintaining a good chance of winning for the first 20â€“35 minutes of bothÂ games.",
        link: "https://openai.com/index/the-international-2018-results",
        source: "OpenAI"
    },
    {
        title: "Large-scale study of curiosity-driven learning",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/large-scale-study-of-curiosity-driven-learning",
        source: "OpenAI"
    },
    {
        title: "OpenAI Five Benchmark: Results",
        summary: "Yesterday,Â OpenAI FiveÂ won a best-of-three against a team of 99.95th percentile Dota players:Â Blitz,Â Cap,Â Fogged,Â Merlini, andÂ MoonMeanderâ€”four of whom have played Dota professionallyâ€”in fr...",
        link: "https://openai.com/index/openai-five-benchmark-results",
        source: "OpenAI"
    },
    {
        title: "Learning dexterity",
        summary: "Weâ€™ve trained a human-like robot hand to manipulate physical objects with unprecedentedÂ dexterity.",
        link: "https://openai.com/index/learning-dexterity",
        source: "OpenAI"
    },
    {
        title: "Variational option discovery algorithms",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/variational-option-discovery-algorithms",
        source: "OpenAI"
    },
    {
        title: "OpenAI Scholars 2018: Meet our Scholars",
        summary: "Our first class ofÂ OpenAI ScholarsÂ is underway, andÂ you can now follow along as this groupÂ of experienced software developers becomes machine learning practitioners.",
        link: "https://openai.com/index/openai-scholars-2018-meet-our-scholars",
        source: "OpenAI"
    },
    {
        title: "OpenAI Five Benchmark",
        summary: "The OpenAI Five Benchmark match is now over!",
        link: "https://openai.com/index/openai-five-benchmark",
        source: "OpenAI"
    },
    {
        title: "Glow: Better reversible generative models",
        summary: "We introduceÂ Glow, a reversible generative model which uses invertible 1x1 convolutions. It extendsÂ previousÂ workÂ on reversible generative models and simplifies the architecture. Our model can gen...",
        link: "https://openai.com/index/glow",
        source: "OpenAI"
    },
    {
        title: "Learning Montezumaâ€™s Revenge from a single demonstration",
        summary: "Weâ€™ve trained an agent to achieve a high score of 74,500 onÂ Montezumaâ€™s RevengeÂ from a single human demonstration, better than any previously published result. Our algorithm is simple: the agent...",
        link: "https://openai.com/index/learning-montezumas-revenge-from-a-single-demonstration",
        source: "OpenAI"
    },
    {
        title: "OpenAI Five",
        summary: "Our team of five neural networks, OpenAI Five, has started to defeat amateur human teams at DotaÂ 2.",
        link: "https://openai.com/index/openai-five",
        source: "OpenAI"
    },
    {
        title: "Retro Contest: Results",
        summary: "The first run of ourÂ Retro Contestâ€”exploring the development of algorithms that can generalize from previous experienceâ€”is nowÂ complete.",
        link: "https://openai.com/index/retro-contest-results",
        source: "OpenAI"
    },
    {
        title: "Learning policy representations in multiagent systems",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/learning-policy-representations-in-multiagent-systems",
        source: "OpenAI"
    },
    {
        title: "Improving language understanding with unsupervised learning",
        summary: "Weâ€™ve obtained state-of-the-art results on a suite of diverse language tasks with a scalable, task-agnostic system, which weâ€™re also releasing. Our approach is a combination of two existing ideas:...",
        link: "https://openai.com/index/language-unsupervised",
        source: "OpenAI"
    },
    {
        title: "GamePad: A learning environment for theorem proving",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/gamepad",
        source: "OpenAI"
    },
    {
        title: "OpenAI Fellows Fall 2018",
        summary: "Weâ€™re now accepting applications for the next cohort of OpenAI Fellows, a program which offers a compensated 6-month apprenticeship in AI research at OpenAI.",
        link: "https://openai.com/index/openai-fellows",
        source: "OpenAI"
    },
    {
        title: "Gym Retro",
        summary: "Weâ€™re releasing the full version ofÂ Gym Retro, a platform for reinforcement learning research on games. This brings our publicly-released game count from around 70 Atari games and 30 Sega games to ...",
        link: "https://openai.com/index/gym-retro",
        source: "OpenAI"
    },
    {
        title: "AI and compute",
        summary: "Weâ€™re releasing an analysis showing that since 2012, the amount of compute used in the largest AI training runs has been increasing exponentially with a 3.4-month doubling time (by comparison, Moore...",
        link: "https://openai.com/index/ai-and-compute",
        source: "OpenAI"
    },
    {
        title: "AI safety via debate",
        summary: "Weâ€™re proposing an AI safety technique which trains agents to debate topics with one another, using a human to judge who wins.",
        link: "https://openai.com/index/debate",
        source: "OpenAI"
    },
    {
        title: "Evolved Policy Gradients",
        summary: "Weâ€™re releasing an experimental metalearning approach called Evolved Policy Gradients, a method that evolves the loss function of learning agents, which can enable fast training on novel tasks. Agen...",
        link: "https://openai.com/index/evolved-policy-gradients",
        source: "OpenAI"
    },
    {
        title: "Gotta Learn Fast: A new benchmark for generalization in RL",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/gotta-learn-fast",
        source: "OpenAI"
    },
    {
        title: "Retro Contest",
        summary: "Weâ€™re launching a transfer learning contest that measures a reinforcement learning algorithmâ€™s ability to generalize from previous experience.",
        link: "https://openai.com/index/retro-contest",
        source: "OpenAI"
    },
    {
        title: "Variance reduction for policy gradient with action-dependent factorized baselines",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/variance-reduction-for-policy-gradient-with-action-dependent-factorized-baselines",
        source: "OpenAI"
    },
    {
        title: "Improving GANs using optimal transport",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/improving-gans-using-optimal-transport",
        source: "OpenAI"
    },
    {
        title: "Report from the OpenAI hackathon",
        summary: "On March 3rd, we hosted our firstÂ hackathonÂ with 100 members of the artificial intelligence community.",
        link: "https://openai.com/index/hackathon-follow-up",
        source: "OpenAI"
    },
    {
        title: "On first-order meta-learning algorithms",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/on-first-order-meta-learning-algorithms",
        source: "OpenAI"
    },
    {
        title: "Reptile: A scalable meta-learning algorithm",
        summary: "Weâ€™ve developed a simple meta-learning algorithm called Reptile which works by repeatedly sampling a task, performing stochastic gradient descent on it, and updating the initial parameters towards t...",
        link: "https://openai.com/index/reptile",
        source: "OpenAI"
    },
    {
        title: "OpenAI Scholars",
        summary: "Weâ€™re providing 6â€“10 stipends and mentorship to individuals from underrepresented groups to study deep learning full-time for 3 months and open-source a project.",
        link: "https://openai.com/index/openai-scholars",
        source: "OpenAI"
    },
    {
        title: "Some considerations on learning to explore via meta-reinforcement learning",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/some-considerations-on-learning-to-explore-via-meta-reinforcement-learning",
        source: "OpenAI"
    },
    {
        title: "Multi-Goal Reinforcement Learning: Challenging robotics environments and request for research",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/multi-goal-reinforcement-learning",
        source: "OpenAI"
    },
    {
        title: "Ingredients for robotics research",
        summary: "Weâ€™re releasing eight simulated robotics environments and a Baselines implementation of Hindsight Experience Replay, all developed for our research over the past year. Weâ€™ve used these environment...",
        link: "https://openai.com/index/ingredients-for-robotics-research",
        source: "OpenAI"
    },
    {
        title: "OpenAI hackathon",
        summary: "Come to OpenAIâ€™s office in San Franciscoâ€™s Mission District for talks and a hackathon on Saturday, March 3rd.",
        link: "https://openai.com/index/openai-hackathon",
        source: "OpenAI"
    },
    {
        title: "Preparing for malicious uses of AI",
        summary: "Weâ€™ve co-authored a paper that forecasts how malicious actors could misuse AI technology, and potential ways we can prevent and mitigate these threats. This paper is the outcome of almost a year of ...",
        link: "https://openai.com/index/preparing-for-malicious-uses-of-ai",
        source: "OpenAI"
    },
    {
        title: "OpenAI supporters",
        summary: "Weâ€™re excited to welcome new donors to OpenAI.",
        link: "https://openai.com/index/openai-supporters",
        source: "OpenAI"
    },
    {
        title: "Interpretable machine learning through teaching",
        summary: "Weâ€™ve designed a method that encourages AIs to teach each other with examples that also make sense to humans. Our approach automatically selects the most informative examples to teach a conceptâ€”fo...",
        link: "https://openai.com/index/interpretable-machine-learning-through-teaching",
        source: "OpenAI"
    },
    {
        title: "Discovering types for entity disambiguation",
        summary: "Weâ€™ve built a system for automatically figuring out which object is meant by a word by having a neural network decide if the word belongs to each of about 100 automatically-discovered â€œtypesâ€ (n...",
        link: "https://openai.com/index/discovering-types-for-entity-disambiguation",
        source: "OpenAI"
    },
    {
        title: "Requests for Research 2.0",
        summary: "Weâ€™re releasing a new batch ofÂ seven unsolved problemsÂ which have come up in the course of our research at OpenAI.",
        link: "https://openai.com/index/requests-for-research-2",
        source: "OpenAI"
    },
    {
        title: "Scaling Kubernetes to 2,500 nodes",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/scaling-kubernetes-to-2500-nodes",
        source: "OpenAI"
    },
    {
        title: "Block-sparse GPU kernels",
        summary: "Weâ€™re releasing highly-optimized GPU kernels for an underexplored class of neural network architectures: networks with block-sparse weights. Depending on the chosen sparsity, these kernels can run o...",
        link: "https://openai.com/index/block-sparse-gpu-kernels",
        source: "OpenAI"
    },
    {
        title: "Learning sparse neural networks through Lâ‚€ regularization",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/learning-sparse-neural-networks-through-l0-regularization",
        source: "OpenAI"
    },
    {
        title: "Interpretable and pedagogical examples",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/interpretable-and-pedagogical-examples",
        source: "OpenAI"
    },
    {
        title: "Learning a hierarchy",
        summary: "Weâ€™ve developed a hierarchical reinforcement learning algorithm that learns high-level actions useful for solving a range of tasks, allowing fast solving of tasks requiring thousands of timesteps. O...",
        link: "https://openai.com/index/learning-a-hierarchy",
        source: "OpenAI"
    },
    {
        title: "Generalizing from simulation",
        summary: "Our latest robotics techniques allow robot controllers, trained entirely in simulation and deployed on physical robots, to react to unplanned changes in the environment as they solve simple tasks. Tha...",
        link: "https://openai.com/index/generalizing-from-simulation",
        source: "OpenAI"
    },
    {
        title: "Asymmetric actor critic for image-based robot learning",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/asymmetric-actor-critic-for-image-based-robot-learning",
        source: "OpenAI"
    },
    {
        title: "Sim-to-real transfer of robotic control with dynamics randomization",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/sim-to-real-transfer-of-robotic-control-with-dynamics-randomization",
        source: "OpenAI"
    },
    {
        title: "Domain randomization and generative models for robotic grasping",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/domain-randomization-and-generative-models-for-robotic-grasping",
        source: "OpenAI"
    },
    {
        title: "Meta-learning for wrestling",
        summary: "We show that for the task of simulated robot wrestling, a meta-learning agent can learn to quickly defeat a stronger non-meta-learning agent, and also show that the meta-learning agent can adapt to ph...",
        link: "https://openai.com/index/meta-learning-for-wrestling",
        source: "OpenAI"
    },
    {
        title: "Competitive self-play",
        summary: "Weâ€™ve found that self-play allows simulated AIs to discover physical skills like tackling, ducking, faking, kicking, catching, and diving for the ball, without explicitly designing an environment wi...",
        link: "https://openai.com/index/competitive-self-play",
        source: "OpenAI"
    },
    {
        title: "Nonlinear computation in deep linear networks",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/nonlinear-computation-in-deep-linear-networks",
        source: "OpenAI"
    },
    {
        title: "Learning to model other minds",
        summary: "Weâ€™re releasing an algorithm which accounts for the fact that other agents are learning too, and discovers self-interested yet collaborative strategies like tit-for-tat in the iterated prisonerâ€™s ...",
        link: "https://openai.com/index/learning-to-model-other-minds",
        source: "OpenAI"
    },
    {
        title: "Learning with opponent-learning awareness",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/learning-with-opponent-learning-awareness",
        source: "OpenAI"
    },
    {
        title: "OpenAI Baselines: ACKTR & A2C",
        summary: "Weâ€™re releasing two new OpenAI Baselines implementations: ACKTR and A2C. A2C is a synchronous, deterministic variant of Asynchronous Advantage Actor Critic (A3C) which weâ€™ve found gives equal perf...",
        link: "https://openai.com/index/openai-baselines-acktr-a2c",
        source: "OpenAI"
    },
    {
        title: "More on Dota 2",
        summary: "Our Dota 2 result shows that self-play can catapult the performance of machine learning systems from far below human level to superhuman, given sufficient compute. In the span of a month, our system w...",
        link: "https://openai.com/index/more-on-dota-2",
        source: "OpenAI"
    },
    {
        title: "Dota 2",
        summary: "Weâ€™ve created a bot which beats the worldâ€™s top professionals at 1v1 matches of Dota 2 under standard tournament rules. The bot learned the game from scratch by self-play, and does not use imitati...",
        link: "https://openai.com/index/dota-2",
        source: "OpenAI"
    },
    {
        title: "Gathering human feedback",
        summary: "RL-Teacher is an open-source implementation of our interface to train AIs via occasional human feedback rather than hand-crafted reward functions. The underlying technique was developed as a step towa...",
        link: "https://openai.com/index/gathering-human-feedback",
        source: "OpenAI"
    },
    {
        title: "Better exploration with parameter noise",
        summary: "Weâ€™ve found that adding adaptive noise to the parameters of reinforcement learning algorithms frequently boosts performance. This exploration method is simple to implement and very rarely decreases ...",
        link: "https://openai.com/index/better-exploration-with-parameter-noise",
        source: "OpenAI"
    },
    {
        title: "Proximal Policy Optimization",
        summary: "Weâ€™re releasing a new class of reinforcement learning algorithms, Proximal Policy Optimization (PPO), which perform comparably or better than state-of-the-art approaches while being much simpler to ...",
        link: "https://openai.com/index/openai-baselines-ppo",
        source: "OpenAI"
    },
    {
        title: "Robust adversarial inputs",
        summary: "Weâ€™ve created images that reliably fool neural network classifiers when viewed from varied scales and perspectives. This challenges a claim from last week that self-driving cars would be hard to tri...",
        link: "https://openai.com/index/robust-adversarial-inputs",
        source: "OpenAI"
    },
    {
        title: "Hindsight Experience Replay",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/hindsight-experience-replay",
        source: "OpenAI"
    },
    {
        title: "Teacherâ€“student curriculum learning",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/teacher-student-curriculum-learning",
        source: "OpenAI"
    },
    {
        title: "Faster physics in Python",
        summary: "Weâ€™re open-sourcing a high-performance Python library for robotic simulation using the MuJoCo engine, developed over our past year of robotics research.",
        link: "https://openai.com/index/faster-physics-in-python",
        source: "OpenAI"
    },
    {
        title: "Learning from human preferences",
        summary: "One step towards building safe AI systems is to remove the need for humans to write goal functions, since using a simple proxy for a complex goal, or getting the complex goal a bit wrong, can lead to ...",
        link: "https://openai.com/index/learning-from-human-preferences",
        source: "OpenAI"
    },
    {
        title: "Learning to cooperate, compete, and communicate",
        summary: "Multiagent environments where agents compete for resources are stepping stones on the path to AGI. Multiagent environments have two useful properties: first, there is a natural curriculumâ€”the diffic...",
        link: "https://openai.com/index/learning-to-cooperate-compete-and-communicate",
        source: "OpenAI"
    },
    {
        title: "UCB exploration via Q-ensembles",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/ucb-exploration-via-q-ensembles",
        source: "OpenAI"
    },
    {
        title: "OpenAI Baselines: DQN",
        summary: "Weâ€™re open-sourcing OpenAI Baselines, our internal effort to reproduce reinforcement learning algorithms with performance on par with published results. Weâ€™ll release the algorithms over upcoming ...",
        link: "https://openai.com/index/openai-baselines-dqn",
        source: "OpenAI"
    },
    {
        title: "Robots that learn",
        summary: "Weâ€™ve created a robotics system, trained entirely in simulation and deployed on a physical robot, which can learn a new task after seeing it done once.",
        link: "https://openai.com/index/robots-that-learn",
        source: "OpenAI"
    },
    {
        title: "Roboschool",
        summary: "We are releasing Roboschool: open-source software for robot simulation, integrated with OpenAI Gym.",
        link: "https://openai.com/index/roboschool",
        source: "OpenAI"
    },
    {
        title: "Equivalence between policy gradients and soft Q-learning",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/equivalence-between-policy-gradients-and-soft-q-learning",
        source: "OpenAI"
    },
    {
        title: "Stochastic Neural Networks for hierarchical reinforcement learning",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/stochastic-neural-networks-for-hierarchical-reinforcement-learning",
        source: "OpenAI"
    },
    {
        title: "Unsupervised sentiment neuron",
        summary: "Weâ€™ve developed an unsupervised system which learns an excellent representation of sentiment, despite being trained only to predict the next character in the text of Amazon reviews.",
        link: "https://openai.com/index/unsupervised-sentiment-neuron",
        source: "OpenAI"
    },
    {
        title: "Spam detection in the physical world",
        summary: "Weâ€™ve created the worldâ€™s first Spam-detecting AI trained entirely in simulation and deployed on a physical robot.",
        link: "https://openai.com/index/spam-detection-in-the-physical-world",
        source: "OpenAI"
    },
    {
        title: "Evolution strategies as a scalable alternative to reinforcement learning",
        summary: "Weâ€™ve discovered that evolution strategies (ES), an optimization technique thatâ€™s been known for decades, rivals the performance of standard reinforcement learning (RL) techniques on modern RL ben...",
        link: "https://openai.com/index/evolution-strategies",
        source: "OpenAI"
    },
    {
        title: "One-shot imitation learning",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/one-shot-imitation-learning",
        source: "OpenAI"
    },
    {
        title: "Distill",
        summary: "Weâ€™re excited to support todayâ€™s launch of Distill, a new kind of journal aimed at excellent communication of machine learning results (novel or existing).",
        link: "https://openai.com/index/distill",
        source: "OpenAI"
    },
    {
        title: "Learning to communicate",
        summary: "In this post weâ€™ll outline new OpenAI research in which agents develop their own language.",
        link: "https://openai.com/index/learning-to-communicate",
        source: "OpenAI"
    },
    {
        title: "Emergence of grounded compositional language in multi-agent populations",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/emergence-of-grounded-compositional-language-in-multi-agent-populations",
        source: "OpenAI"
    },
    {
        title: "Prediction and control with temporal segment models",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/prediction-and-control-with-temporal-segment-models",
        source: "OpenAI"
    },
    {
        title: "Third-person imitation learning",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/third-person-imitation-learning",
        source: "OpenAI"
    },
    {
        title: "Attacking machine learning with adversarial examples",
        summary: "Adversarial examples are inputs to machine learning models that an attacker has intentionally designed to cause the model to make a mistake; theyâ€™re like optical illusions for machines. In this post...",
        link: "https://openai.com/index/attacking-machine-learning-with-adversarial-examples",
        source: "OpenAI"
    },
    {
        title: "Adversarial attacks on neural network policies",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/adversarial-attacks-on-neural-network-policies",
        source: "OpenAI"
    },
    {
        title: "Team update",
        summary: "The OpenAI team is now 45 people. Together, weâ€™re pushing the frontier of AI capabilitiesâ€”whether by validating novel ideas, creating new software systems, or deploying machine learning on robots.",
        link: "https://openai.com/index/team-update-january",
        source: "OpenAI"
    },
    {
        title: "PixelCNN++: Improving the PixelCNN with discretized logistic mixture likelihood and other modifications",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/pixelcnn-plus-plus",
        source: "OpenAI"
    },
    {
        title: "Faulty reward functions in the wild",
        summary: "Reinforcement learning algorithms can break in surprising, counterintuitive ways. In this post weâ€™ll explore one failure mode, which is where you misspecify your reward function.",
        link: "https://openai.com/index/faulty-reward-functions",
        source: "OpenAI"
    },
    {
        title: "Universe",
        summary: "Weâ€™re releasing Universe, a software platform for measuring and training an AIâ€™s general intelligence across the worldâ€™s supply of games, websites and other applications.",
        link: "https://openai.com/index/universe",
        source: "OpenAI"
    },
    {
        title: "OpenAI and Microsoft",
        summary: "Weâ€™re working with Microsoft to start running most of our large-scale experiments on Azure.",
        link: "https://openai.com/index/openai-and-microsoft",
        source: "OpenAI"
    },
    {
        title: "#Exploration: A study of count-based exploration for deep reinforcement learning",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/exploration",
        source: "OpenAI"
    },
    {
        title: "On the quantitative analysis of decoder-based generative models",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/on-the-quantitative-analysis-of-decoder-based-generative-models",
        source: "OpenAI"
    },
    {
        title: "A connection between generative adversarial networks, inverse reinforcement learning, and energy-based models",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/a-connection-between-generative-adversarial-networks-inverse-reinforcement-learning-and-energy-based-models",
        source: "OpenAI"
    },
    {
        title: "RLÂ²: Fast reinforcement learning via slow reinforcement learning",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/rl2",
        source: "OpenAI"
    },
    {
        title: "Variational lossy autoencoder",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/variational-lossy-autoencoder",
        source: "OpenAI"
    },
    {
        title: "Extensions and limitations of the neural GPU",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/extensions-and-limitations-of-the-neural-gpu",
        source: "OpenAI"
    },
    {
        title: "Semi-supervised knowledge transfer for deep learning from private training data",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/semi-supervised-knowledge-transfer-for-deep-learning-from-private-training-data",
        source: "OpenAI"
    },
    {
        title: "Report from the self-organizing conference",
        summary: "Last week we hosted over a hundred and fifty AI practitioners in our offices for our first self-organizing conference on machine learning.",
        link: "https://openai.com/index/report-from-the-self-organizing-conference",
        source: "OpenAI"
    },
    {
        title: "Transfer from simulation to real world through learning deep inverse dynamics model",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/transfer-from-simulation-to-real-world-through-learning-deep-inverse-dynamics-model",
        source: "OpenAI"
    },
    {
        title: "Infrastructure for deep learning",
        summary: "Deep learning is an empirical science, and the quality of a groupâ€™s infrastructure is a multiplier on progress. Fortunately, todayâ€™s open-source ecosystem makes it possible for anyone to build gre...",
        link: "https://openai.com/index/infrastructure-for-deep-learning",
        source: "OpenAI"
    },
    {
        title: "Machine Learning Unconference",
        summary: "The latest information about the Unconference is now available at the Unconference wiki, which will be periodically updated with more information for attendees.",
        link: "https://openai.com/index/machine-learning-unconference",
        source: "OpenAI"
    },
    {
        title: "Team update",
        summary: "Weâ€™ve hired more great people to help us achieve our goals. Welcome, everyone!",
        link: "https://openai.com/index/team-update-august",
        source: "OpenAI"
    },
    {
        title: "Special projects",
        summary: "Impactful scientific work requires working on the right problemsâ€”problems which are not just interesting, but whose solutions matter.",
        link: "https://openai.com/index/special-projects",
        source: "OpenAI"
    },
    {
        title: "Concrete AI safety problems",
        summary: "We (along with researchers from Berkeley and Stanford) are co-authors on todayâ€™s paper led by Google Brain researchers,Â Concrete Problems in AI Safety. The paper explores many research problems aro...",
        link: "https://openai.com/index/concrete-ai-safety-problems",
        source: "OpenAI"
    },
    {
        title: "OpenAI technical goals",
        summary: "OpenAIâ€™s mission is to build safe AI, and ensure AIâ€™s benefits are as widely and evenly distributed as possible.",
        link: "https://openai.com/index/openai-technical-goals",
        source: "OpenAI"
    },
    {
        title: "Generative models",
        summary: "This post describes four projects that share a common theme of enhancing or using generative models, a branch of unsupervised learning techniques in machine learning. In addition to describing our wor...",
        link: "https://openai.com/index/generative-models",
        source: "OpenAI"
    },
    {
        title: "Adversarial training methods for semi-supervised text classification",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/adversarial-training-methods-for-semi-supervised-text-classification",
        source: "OpenAI"
    },
    {
        title: "Team update",
        summary: "Weâ€™d like to welcome the latest set of team members to OpenAI (and weâ€™re still hiring!)",
        link: "https://openai.com/index/team-update",
        source: "OpenAI"
    },
    {
        title: "OpenAI Gym Beta",
        summary: "Weâ€™re releasing the public beta of OpenAI Gym, a toolkit for developing and comparing reinforcement learning (RL) algorithms. It consists of a growing suite of environments (from simulated robots to...",
        link: "https://openai.com/index/openai-gym-beta",
        source: "OpenAI"
    },
    {
        title: "Welcome, Pieter and Shivon!",
        summary: "We have two more teamÂ updates.",
        link: "https://openai.com/index/welcome-pieter-and-shivon",
        source: "OpenAI"
    },
    {
        title: "Team++",
        summary: "We've had some fantastic people join over the past few months (and we're still hiring). Welcome, everyone!",
        link: "https://openai.com/index/team-plus-plus",
        source: "OpenAI"
    },
    {
        title: "Weight normalization: A simple reparameterization to accelerate training of deep neural networks",
        summary: "Sin descripcion disponible",
        link: "https://openai.com/index/weight-normalization",
        source: "OpenAI"
    },
    {
        title: "Introducing OpenAI",
        summary: "OpenAI is a non-profit artificial intelligence research company. Our goal is to advance digital intelligence in the way that is most likely to benefit humanity as a whole, unconstrained by a need to g...",
        link: "https://openai.com/index/introducing-openai",
        source: "OpenAI"
    },
    {
        title: "Gemini 3.1 Flash-Lite: Built for intelligence at scale",
        summary: "Gemini 3.1 Flash-Lite is our fastest and most cost-efficient Gemini 3 series model yet.",
        link: "https://deepmind.google/blog/gemini-3-1-flash-lite-built-for-intelligence-at-scale/",
        source: "Google DeepMind"
    },
    {
        title: "Nano Banana 2: Combining Pro capabilities with lightning-fast speed",
        summary: "Our latest image generation model offers advanced world knowledge, production ready specs, subject consistency and more, all at Flash speed.",
        link: "https://deepmind.google/blog/nano-banana-2-combining-pro-capabilities-with-lightning-fast-speed/",
        source: "Google DeepMind"
    },
    {
        title: "Gemini 3.1 Pro: A smarter model for your most complex tasks",
        summary: "3.1 Pro is designed for tasks where a simple answer isnâ€™t enough.",
        link: "https://deepmind.google/blog/gemini-3-1-pro-a-smarter-model-for-your-most-complex-tasks/",
        source: "Google DeepMind"
    },
    {
        title: "A new way to express yourself: Gemini can now create music",
        summary: "The Gemini app now features our most advanced music generation model Lyria 3, empowering anyone to make 30-second tracks using text or images.",
        link: "https://deepmind.google/blog/a-new-way-to-express-yourself-gemini-can-now-create-music/",
        source: "Google DeepMind"
    },
    {
        title: "Accelerating discovery in India through AI-powered science and education",
        summary: "Google DeepMind brings National Partnerships for AI initiative to India, scaling AI for science and education",
        link: "https://deepmind.google/blog/accelerating-discovery-in-india-through-ai-powered-science-and-education/",
        source: "Google DeepMind"
    },
    {
        title: "Gemini 3 Deep Think: Advancing science, research and engineering",
        summary: "Our most specialized reasoning mode is now updated to solve modern science, research and engineering challenges.",
        link: "https://deepmind.google/blog/gemini-3-deep-think-advancing-science-research-and-engineering/",
        source: "Google DeepMind"
    },
    {
        title: "Accelerating Mathematical and Scientific Discovery with Gemini Deep Think",
        summary: "Research papers point to the growing impact of Deep Think across fields",
        link: "https://deepmind.google/blog/accelerating-mathematical-and-scientific-discovery-with-gemini-deep-think/",
        source: "Google DeepMind"
    },
    {
        title: "Project Genie: Experimenting with infinite, interactive worlds",
        summary: "Google AI Ultra subscribers in the U.S. can try out Project Genie, an experimental research prototype that lets you create and explore worlds.",
        link: "https://deepmind.google/blog/project-genie-experimenting-with-infinite-interactive-worlds/",
        source: "Google DeepMind"
    },
    {
        title: "D4RT: Teaching AI to see the world in four dimensions",
        summary: "D4RT: Unified, efficient 4D reconstruction and tracking up to 300x faster than prior methods.",
        link: "https://deepmind.google/blog/d4rt-teaching-ai-to-see-the-world-in-four-dimensions/",
        source: "Google DeepMind"
    },
    {
        title: "Veo 3.1 Ingredients to Video: More consistency, creativity and control",
        summary: "Our latest Veo update generates lively, dynamic clips that feel natural and engaging â€” and supports vertical video generation.",
        link: "https://deepmind.google/blog/veo-3-1-ingredients-to-video-more-consistency-creativity-and-control/",
        source: "Google DeepMind"
    },
    {
        title: "Google's year in review: 8 areas with research breakthroughs in 2025",
        summary: "Google 2025 recap: Research breakthroughs of the year",
        link: "https://deepmind.google/blog/googles-year-in-review-8-areas-with-research-breakthroughs-in-2025/",
        source: "Google DeepMind"
    },
    {
        title: "Gemini 3 Flash: frontier intelligence built for speed",
        summary: "Gemini 3 Flash offers frontier intelligence built for speed at a fraction of the cost.",
        link: "https://deepmind.google/blog/gemini-3-flash-frontier-intelligence-built-for-speed/",
        source: "Google DeepMind"
    },
    {
        title: "Gemma Scope 2: helping the AI safety community deepen understanding of complex language model behavior",
        summary: "Open interpretability tools for language models are now available across the entire Gemma 3 family with the release of Gemma Scope 2.",
        link: "https://deepmind.google/blog/gemma-scope-2-helping-the-ai-safety-community-deepen-understanding-of-complex-language-model-behavior/",
        source: "Google DeepMind"
    },
    {
        title: "Improved Gemini audio models for powerful voice experiences",
        summary: "",
        link: "https://deepmind.google/blog/improved-gemini-audio-models-for-powerful-voice-experiences/",
        source: "Google DeepMind"
    },
    {
        title: "Deepening our partnership with the UK AI Security Institute",
        summary: "Google DeepMind and UK AI Security Institute (AISI) strengthen collaboration on critical AI safety and security research",
        link: "https://deepmind.google/blog/deepening-our-partnership-with-the-uk-ai-security-institute/",
        source: "Google DeepMind"
    },
    {
        title: "Strengthening our partnership with the UK government to support prosperity and security in the AI era",
        summary: "Deepening our partnership with the UK government to support prosperity and security in the AI era",
        link: "https://deepmind.google/blog/strengthening-our-partnership-with-the-uk-government-to-support-prosperity-and-security-in-the-ai-era/",
        source: "Google DeepMind"
    },
    {
        title: "FACTS Benchmark Suite: Systematically evaluating the factuality of large language models",
        summary: "Systematically evaluating the factuality of large language models with the FACTS Benchmark Suite.",
        link: "https://deepmind.google/blog/facts-benchmark-suite-systematically-evaluating-the-factuality-of-large-language-models/",
        source: "Google DeepMind"
    },
    {
        title: "Engineering more resilient crops for a warming climate",
        summary: "Scientists are using AlphaFold to strengthen a photosynthesis enzyme for resilient, heat-tolerant crops.",
        link: "https://deepmind.google/blog/engineering-more-resilient-crops-for-a-warming-climate/",
        source: "Google DeepMind"
    },
    {
        title: "AlphaFold: Five years of impact",
        summary: "Explore how AlphaFold has accelerated science and fueled a global wave of biological discovery.",
        link: "https://deepmind.google/blog/alphafold-five-years-of-impact/",
        source: "Google DeepMind"
    },
    {
        title: "Revealing a key protein behind heart disease",
        summary: "AlphaFold has revealed the structure of a key protein behind heart disease",
        link: "https://deepmind.google/blog/revealing-a-key-protein-behind-heart-disease/",
        source: "Google DeepMind"
    },
    {
        title: "Google DeepMind supports U.S. Department of Energy on Genesis: a national mission to accelerate innovation and scientific discovery",
        summary: "Google DeepMind and the DOE partner on Genesis, a new effort to accelerate science with AI.",
        link: "https://deepmind.google/blog/google-deepmind-supports-us-department-of-energy-on-genesis/",
        source: "Google DeepMind"
    },
    {
        title: "How weâ€™re bringing AI image verification to the Gemini app",
        summary: "",
        link: "https://deepmind.google/blog/how-were-bringing-ai-image-verification-to-the-gemini-app/",
        source: "Google DeepMind"
    },
    {
        title: "Build with Nano Banana Pro, our Gemini 3 Pro Image model",
        summary: "",
        link: "https://deepmind.google/blog/build-with-nano-banana-pro-our-gemini-3-pro-image-model/",
        source: "Google DeepMind"
    },
    {
        title: "Introducing Nano Banana Pro",
        summary: "",
        link: "https://deepmind.google/blog/introducing-nano-banana-pro/",
        source: "Google DeepMind"
    },
    {
        title: "Start building with Gemini 3",
        summary: "",
        link: "https://deepmind.google/blog/start-building-with-gemini-3/",
        source: "Google DeepMind"
    },
    {
        title: "Weâ€™re expanding our presence in Singapore to advance AI in the Asia-Pacific region",
        summary: "Google DeepMind opens a new Singapore research lab, accelerating AI progress in the Asia-Pacific region.",
        link: "https://deepmind.google/blog/were-expanding-our-presence-in-singapore-to-advance-ai-in-the-asia-pacific-region/",
        source: "Google DeepMind"
    },
    {
        title: "A new era of intelligence with Gemini 3",
        summary: "",
        link: "https://deepmind.google/blog/a-new-era-of-intelligence-with-gemini-3/",
        source: "Google DeepMind"
    },
    {
        title: "Introducing Google Antigravity",
        summary: "",
        link: "https://deepmind.google/blog/introducing-google-antigravity/",
        source: "Google DeepMind"
    },
    {
        title: "WeatherNext 2: Our most advanced weather forecasting model",
        summary: "The new AI model delivers more efficient, more accurate and higher-resolution global weather predictions.",
        link: "https://deepmind.google/blog/weathernext-2-our-most-advanced-weather-forecasting-model/",
        source: "Google DeepMind"
    },
    {
        title: "SIMA 2: An Agent that Plays, Reasons, and Learns With You in Virtual 3D Worlds",
        summary: "Introducing SIMA 2, a Gemini-powered AI agent that can think, understand, and take actions in interactive environments.",
        link: "https://deepmind.google/blog/sima-2-an-agent-that-plays-reasons-and-learns-with-you-in-virtual-3d-worlds/",
        source: "Google DeepMind"
    },
    {
        title: "Teaching AI to see the world more like we do",
        summary: "Our new paper analyzes the important ways AI systems organize the visual world differently from humans.",
        link: "https://deepmind.google/blog/teaching-ai-to-see-the-world-more-like-we-do/",
        source: "Google DeepMind"
    },
    {
        title: "How AI is giving Northern Ireland teachers time back",
        summary: "A six-month long pilot program with the Northern Ireland Education Authorityâ€™s C2k initiative found that integrating Gemini and other generative AI tools saved participating teachers an average of 1...",
        link: "https://deepmind.google/blog/how-ai-is-giving-northern-ireland-teachers-time-back/",
        source: "Google DeepMind"
    },
    {
        title: "Mapping, modeling, and understanding nature with AI",
        summary: "AI models can help map species, protect forests and listen to birds around the world",
        link: "https://deepmind.google/blog/mapping-modeling-and-understanding-nature-with-ai/",
        source: "Google DeepMind"
    },
    {
        title: "Accelerating discovery with the AI for Math Initiative",
        summary: "The initiative brings together some of the world's most prestigious research institutions to pioneer the use of AI in mathematical research.",
        link: "https://deepmind.google/blog/accelerating-discovery-with-the-ai-for-math-initiative/",
        source: "Google DeepMind"
    },
    {
        title: "T5Gemma: A new collection of encoder-decoder Gemma models",
        summary: "Introducing T5Gemma, a new collection of encoder-decoder LLMs.",
        link: "https://deepmind.google/blog/t5gemma-a-new-collection-of-encoder-decoder-gemma-models/",
        source: "Google DeepMind"
    },
    {
        title: "MedGemma: Our most capable open models for health AI development",
        summary: "Weâ€™re announcing new multimodal models in the MedGemma collection, our most capable open models for health AI development.",
        link: "https://deepmind.google/blog/medgemma-our-most-capable-open-models-for-health-ai-development/",
        source: "Google DeepMind"
    },
    {
        title: "Introducing Gemma 3n: The developer guide",
        summary: "Gemma 3n is designed for the developer community that helped shape Gemma.",
        link: "https://deepmind.google/blog/introducing-gemma-3n-the-developer-guide/",
        source: "Google DeepMind"
    },
    {
        title: "Gemini 2.5 Flash-Lite is now ready for scaled production use",
        summary: "Gemini 2.5 Flash-Lite, previously in preview, is now stable and generally available. This cost-efficient model provides high quality in a small size, and includes 2.5 family features like a 1 million-...",
        link: "https://deepmind.google/blog/gemini-25-flash-lite-is-now-ready-for-scaled-production-use/",
        source: "Google DeepMind"
    },
    {
        title: "Behind â€œANCESTRAâ€: combining Veo with live-action filmmaking",
        summary: "We partnered with Darren Aronofsky, Eliza McNitt and a team of more than 200 people to make a film using Veo and live-action filmmaking.",
        link: "https://deepmind.google/blog/behind-ancestra-combining-veo-with-live-action-filmmaking/",
        source: "Google DeepMind"
    },
    {
        title: "AlphaEarth Foundations helps map our planet in unprecedented detail",
        summary: "New AI model integrates petabytes of Earth observation data to generate a unified data representation that revolutionizes global mapping and monitoring",
        link: "https://deepmind.google/blog/alphaearth-foundations-helps-map-our-planet-in-unprecedented-detail/",
        source: "Google DeepMind"
    },
    {
        title: "Exploring the context of online images with Backstory",
        summary: "New experimental AI tool helps people explore the context and origin of images seen online.",
        link: "https://deepmind.google/blog/exploring-the-context-of-online-images-with-backstory/",
        source: "Google DeepMind"
    },
    {
        title: "Advanced version of Gemini with Deep Think officially achieves gold-medal standard at the International Mathematical Olympiad",
        summary: "The International Mathematical Olympiad (â€œIMOâ€) is the worldâ€™s most prestigious competition for young mathematicians, and has been held annually since 1959. Each country taking part is represent...",
        link: "https://deepmind.google/blog/advanced-version-of-gemini-with-deep-think-officially-achieves-gold-medal-standard-at-the-international-mathematical-olympiad/",
        source: "Google DeepMind"
    },
    {
        title: "Aeneas transforms how historians connect the past",
        summary: "Introducing the first model for contextualizing ancient inscriptions, designed to help historians better interpret, attribute and restore fragmentary texts.",
        link: "https://deepmind.google/blog/aeneas-transforms-how-historians-connect-the-past/",
        source: "Google DeepMind"
    },
    {
        title: "Genie 3: A new frontier for world models",
        summary: "Genie 3 can generate dynamic worlds that you can navigate in real time at 24 frames per second, retaining consistency for a few minutes at a resolution of 720p.",
        link: "https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/",
        source: "Google DeepMind"
    },
    {
        title: "How AI is helping advance the science of bioacoustics to save endangered species",
        summary: "Our new Perch model helps conservationists analyze audio faster to protect endangered species, from Hawaiian honeycreepers to coral reefs.",
        link: "https://deepmind.google/blog/how-ai-is-helping-advance-the-science-of-bioacoustics-to-save-endangered-species/",
        source: "Google DeepMind"
    },
    {
        title: "Using AI to perceive the universe in greater depth",
        summary: "Using AI to perceive the universe in greater depth",
        link: "https://deepmind.google/blog/using-ai-to-perceive-the-universe-in-greater-depth/",
        source: "Google DeepMind"
    },
    {
        title: "Gemini achieves gold-medal level at the International Collegiate Programming Contest World Finals",
        summary: "Gemini 2.5 Deep Think achieves breakthrough performance at the worldâ€™s most prestigious computer programming competition, demonstrating a profound leap in abstract problem solving.",
        link: "https://deepmind.google/blog/gemini-achieves-gold-medal-level-at-the-international-collegiate-programming-contest-world-finals/",
        source: "Google DeepMind"
    },
    {
        title: "Discovering new solutions to century-old problems in fluid dynamics",
        summary: "Our new method could help mathematicians leverage AI techniques to tackle long-standing challenges in mathematics, physics and engineering.",
        link: "https://deepmind.google/blog/discovering-new-solutions-to-century-old-problems-in-fluid-dynamics/",
        source: "Google DeepMind"
    },
    {
        title: "Strengthening our Frontier Safety Framework",
        summary: "Weâ€™re strengthening the Frontier Safety Framework (FSF) to help identify and mitigate severe risks from advanced AI models.",
        link: "https://deepmind.google/blog/strengthening-our-frontier-safety-framework/",
        source: "Google DeepMind"
    },
    {
        title: "Gemini Robotics 1.5 brings AI agents into the physical world",
        summary: "Weâ€™re powering an era of physical agents â€” enabling robots to perceive, plan, think, use tools and act to better solve complex, multi-step tasks.",
        link: "https://deepmind.google/blog/gemini-robotics-15-brings-ai-agents-into-the-physical-world/",
        source: "Google DeepMind"
    },
    {
        title: "Introducing CodeMender: an AI agent for code security",
        summary: "Using advanced AI to fix critical software vulnerabilities",
        link: "https://deepmind.google/blog/introducing-codemender-an-ai-agent-for-code-security/",
        source: "Google DeepMind"
    },
    {
        title: "Bringing AI to the next generation of fusion energy",
        summary: "Weâ€™re partnering with Commonwealth Fusion Systems (CFS) to bring clean, safe, limitless fusion energy closer to reality.",
        link: "https://deepmind.google/blog/bringing-ai-to-the-next-generation-of-fusion-energy/",
        source: "Google DeepMind"
    },
    {
        title: "Try Deep Think in the Gemini app",
        summary: "We're rolling out Deep Think in the Gemini app for Google AI Ultra subscribers, and we're giving select mathematicians access to the full version of the Gemini 2.5 Deep Think model entered into the IM...",
        link: "https://deepmind.google/blog/try-deep-think-in-the-gemini-app/",
        source: "Google DeepMind"
    },
    {
        title: "Rethinking how we measure AI intelligence",
        summary: "Game Arena is a new, open-source platform for rigorous evaluation of AI models. It allows for head-to-head comparison of frontier systems in environments with clear winning conditions.",
        link: "https://deepmind.google/blog/rethinking-how-we-measure-ai-intelligence/",
        source: "Google DeepMind"
    },
    {
        title: "Introducing Gemma 3 270M: The compact model for hyper-efficient AI",
        summary: "Today, we're adding a new, highly specialized tool to the Gemma 3 toolkit: Gemma 3 270M, a compact, 270-million parameter model.",
        link: "https://deepmind.google/blog/introducing-gemma-3-270m-the-compact-model-for-hyper-efficient-ai/",
        source: "Google DeepMind"
    },
    {
        title: "Image editing in Gemini just got a major upgrade",
        summary: "Transform images in amazing new ways with updated native image editing in the Gemini app.",
        link: "https://deepmind.google/blog/image-editing-in-gemini-just-got-a-major-upgrade/",
        source: "Google DeepMind"
    },
    {
        title: "VaultGemma: The world's most capable differentially private LLM",
        summary: "We introduce VaultGemma, the most capable model trained from scratch with differential privacy.",
        link: "https://deepmind.google/blog/vaultgemma-the-worlds-most-capable-differentially-private-llm/",
        source: "Google DeepMind"
    },
    {
        title: "Introducing the Gemini 2.5 Computer Use model",
        summary: "Available in preview via the API, our Computer Use model is a specialized model built on Gemini 2.5 Proâ€™s capabilities to power agents that can interact with user interfaces.",
        link: "https://deepmind.google/blog/introducing-the-gemini-25-computer-use-model/",
        source: "Google DeepMind"
    },
    {
        title: "Introducing Veo 3.1 and advanced creative capabilities",
        summary: "Weâ€™re rolling out significant updates to Veo that give people even more creative control.",
        link: "https://deepmind.google/blog/introducing-veo-31-and-advanced-creative-capabilities/",
        source: "Google DeepMind"
    },
    {
        title: "How a Gemma model helped discover a new potential cancer therapy pathway",
        summary: "Weâ€™re launching a new 27 billion parameter foundation model for single-cell analysis built on the Gemma family of open models.",
        link: "https://deepmind.google/blog/how-a-gemma-model-helped-discover-a-new-potential-cancer-therapy-pathway/",
        source: "Google DeepMind"
    },
    {
        title: "AlphaGenome: AI for better understanding the genome",
        summary: "Introducing a new, unifying DNA sequence model that advances regulatory variant-effect prediction and promises to shed new light on genome function â€” now available via API.",
        link: "https://deepmind.google/blog/alphagenome-ai-for-better-understanding-the-genome/",
        source: "Google DeepMind"
    },
    {
        title: "Gemini Robotics On-Device brings AI to local robotic devices",
        summary: "Weâ€™re introducing an efficient, on-device robotics model with general-purpose dexterity and fast task adaptation.",
        link: "https://deepmind.google/blog/gemini-robotics-on-device-brings-ai-to-local-robotic-devices/",
        source: "Google DeepMind"
    },
    {
        title: "Weâ€™re expanding our Gemini 2.5 family of models",
        summary: "Gemini 2.5 Flash and Pro are now generally available, and weâ€™re introducing 2.5 Flash-Lite, our most cost-efficient and fastest 2.5 model yet.",
        link: "https://deepmind.google/blog/were-expanding-our-gemini-25-family-of-models/",
        source: "Google DeepMind"
    },
    {
        title: "Gemini 2.5: Updates to our family of thinking models",
        summary: "Explore the latest Gemini 2.5 model updates with enhanced performance and accuracy: Gemini 2.5 Pro now stable, Flash generally available, and the new Flash-Lite in preview.",
        link: "https://deepmind.google/blog/gemini-25-updates-to-our-family-of-thinking-models/",
        source: "Google DeepMind"
    },
    {
        title: "How we're supporting better tropical cyclone prediction with AI",
        summary: "Weâ€™re launching Weather Lab, featuring our experimental cyclone predictions, and weâ€™re partnering with the U.S. National Hurricane Center to support their forecasts and warnings this cyclone seaso...",
        link: "https://deepmind.google/blog/how-were-supporting-better-tropical-cyclone-prediction-with-ai/",
        source: "Google DeepMind"
    },
    {
        title: "Advanced audio dialog and generation with Gemini 2.5",
        summary: "Gemini 2.5 has new capabilities in AI-powered audio dialog and generation.",
        link: "https://deepmind.google/blog/advanced-audio-dialog-and-generation-with-gemini-25/",
        source: "Google DeepMind"
    },
    {
        title: "SynthID Detector â€” a new portal to help identify AI-generated content",
        summary: "Learn about the new SynthID Detector portal we announced at I/O to help people understand how the content they see online was generated.",
        link: "https://deepmind.google/blog/synthid-detector--a-new-portal-to-help-identify-ai-generated-content/",
        source: "Google DeepMind"
    },
    {
        title: "Fuel your creativity with new generative media models and tools",
        summary: "Introducing Veo 3 and Imagen 4, and a new tool for filmmaking called Flow.",
        link: "https://deepmind.google/blog/fuel-your-creativity-with-new-generative-media-models-and-tools/",
        source: "Google DeepMind"
    },
    {
        title: "Announcing Gemma 3n preview: Powerful, efficient, mobile-first AI",
        summary: "Gemma 3n is a cutting-edge open model designed for fast, multimodal AI on devices, featuring optimized performance, unique flexibility with a 2-in-1 model, and expanded multimodal understanding with a...",
        link: "https://deepmind.google/blog/announcing-gemma-3n-preview-powerful-efficient-mobile-first-ai/",
        source: "Google DeepMind"
    },
    {
        title: "Our vision for building a universal AI assistant",
        summary: "Weâ€™re extending Gemini to become a world model that can make plans and imagine new experiences by simulating aspects of the world.",
        link: "https://deepmind.google/blog/our-vision-for-building-a-universal-ai-assistant/",
        source: "Google DeepMind"
    },
    {
        title: "Advancing Gemini's security safeguards",
        summary: "Weâ€™ve made Gemini 2.5 our most secure model family to date.",
        link: "https://deepmind.google/blog/advancing-geminis-security-safeguards/",
        source: "Google DeepMind"
    },
    {
        title: "Gemini 2.5: Our most intelligent models are getting even better",
        summary: "Gemini 2.5 Pro continues to be loved by developers as the best model for coding, and 2.5 Flash is getting even better with a new update. Weâ€™re bringing new capabilities to our models, including Deep...",
        link: "https://deepmind.google/blog/gemini-25-our-world-leading-model-is-getting-even-better/",
        source: "Google DeepMind"
    },
    {
        title: "AlphaEvolve: A Gemini-powered coding agent for designing advanced algorithms",
        summary: "New AI agent evolves algorithms for math and practical applications in computing by combining the creativity of large language models with automated evaluators",
        link: "https://deepmind.google/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/",
        source: "Google DeepMind"
    },
    {
        title: "Gemini 2.5 Pro Preview: even better coding performance",
        summary: "Weâ€™ve seen developers doing amazing things with Gemini 2.5 Pro, so we decided to release an updated version a couple of weeks early to get into developers hands sooner.",
        link: "https://deepmind.google/blog/gemini-25-pro-preview-even-better-coding-performance/",
        source: "Google DeepMind"
    },
    {
        title: "Build rich, interactive web apps with an updated Gemini 2.5 Pro",
        summary: "Our updated version of Gemini 2.5 Pro Preview has improved capabilities for coding.",
        link: "https://deepmind.google/blog/build-rich-interactive-web-apps-with-an-updated-gemini-25-pro/",
        source: "Google DeepMind"
    },
    {
        title: "Music AI Sandbox, now with new features and broader access",
        summary: "Helping music professionals explore the potential of generative AI",
        link: "https://deepmind.google/blog/music-ai-sandbox-now-with-new-features-and-broader-access/",
        source: "Google DeepMind"
    },
    {
        title: "Introducing Gemini 2.5 Flash",
        summary: "Gemini 2.5 Flash is our first fully hybrid reasoning model, giving developers the ability to turn thinking on or off.",
        link: "https://deepmind.google/blog/introducing-gemini-2-5-flash/",
        source: "Google DeepMind"
    },
    {
        title: "Generate videos in Gemini and Whisk with Veo 2",
        summary: "Transform text-based prompts into high-resolution eight-second videos in Gemini Advanced and use Whisk Animate to turn images into eight-second animated clips.",
        link: "https://deepmind.google/blog/generate-videos-in-gemini-and-whisk-with-veo-2/",
        source: "Google DeepMind"
    },
    {
        title: "DolphinGemma: How Google AI is helping decode dolphin communication",
        summary: "DolphinGemma, a large language model developed by Google, is helping scientists study how dolphins communicate â€” and hopefully find out what they're saying, too.",
        link: "https://deepmind.google/blog/dolphingemma-how-google-ai-is-helping-decode-dolphin-communication/",
        source: "Google DeepMind"
    },
    {
        title: "Taking a responsible path to AGI",
        summary: "Weâ€™re exploring the frontiers of AGI, prioritizing technical safety, proactive risk assessment, and collaboration with the AI community.",
        link: "https://deepmind.google/blog/taking-a-responsible-path-to-agi/",
        source: "Google DeepMind"
    },
    {
        title: "Evaluating potential cybersecurity threats of advanced AI",
        summary: "Our framework enables cybersecurity experts to identify which defenses are necessaryâ€”and how to prioritize them",
        link: "https://deepmind.google/blog/evaluating-potential-cybersecurity-threats-of-advanced-ai/",
        source: "Google DeepMind"
    },
    {
        title: "Gemini 2.5: Our most intelligent AI model",
        summary: "Gemini 2.5 is our most intelligent AI model, now with thinking built in.",
        link: "https://deepmind.google/blog/gemini-2-5-our-most-intelligent-ai-model/",
        source: "Google DeepMind"
    },
    {
        title: "Gemini Robotics brings AI into the physical world",
        summary: "Introducing Gemini Robotics and Gemini Robotics-ER, AI models designed for robots to understand, act and react to the physical world.",
        link: "https://deepmind.google/blog/gemini-robotics-brings-ai-into-the-physical-world/",
        source: "Google DeepMind"
    },
    {
        title: "Experiment with Gemini 2.0 Flash native image generation",
        summary: "Native image output is available in Gemini 2.0 Flash for developers to experiment with in Google AI Studio and the Gemini API.",
        link: "https://deepmind.google/blog/experiment-with-gemini-20-flash-native-image-generation/",
        source: "Google DeepMind"
    },
    {
        title: "Introducing Gemma 3",
        summary: "The most capable model you can run on a single GPU or TPU.",
        link: "https://deepmind.google/blog/introducing-gemma-3/",
        source: "Google DeepMind"
    },
    {
        title: "Start building with Gemini 2.0 Flash and Flash-Lite",
        summary: "Gemini 2.0 Flash-Lite is now generally available in the Gemini API for production use in Google AI Studio and for enterprise customers on Vertex AI",
        link: "https://deepmind.google/blog/start-building-with-gemini-20-flash-and-flash-lite/",
        source: "Google DeepMind"
    },
    {
        title: "Gemini 2.0 is now available to everyone",
        summary: "Weâ€™re announcing new updates to Gemini 2.0 Flash, plus introducing Gemini 2.0 Flash-Lite and Gemini 2.0 Pro Experimental.",
        link: "https://deepmind.google/blog/gemini-2-0-is-now-available-to-everyone/",
        source: "Google DeepMind"
    },
    {
        title: "Updating the Frontier Safety Framework",
        summary: "Our next iteration of the FSF sets out stronger security protocols on the path to AGI",
        link: "https://deepmind.google/blog/updating-the-frontier-safety-framework/",
        source: "Google DeepMind"
    },
    {
        title: "FACTS Grounding: A new benchmark for evaluating the factuality of large language models",
        summary: "Our comprehensive benchmark and online leaderboard offer a much-needed measure of how accurately LLMs ground their responses in provided source material and avoid hallucinations",
        link: "https://deepmind.google/blog/facts-grounding-a-new-benchmark-for-evaluating-the-factuality-of-large-language-models/",
        source: "Google DeepMind"
    },
    {
        title: "State-of-the-art video and image generation with Veo 2 and Imagen 3",
        summary: "Weâ€™re rolling out a new, state-of-the-art video model, Veo 2, and updates to Imagen 3. Plus, check out our new experiment, Whisk.",
        link: "https://deepmind.google/blog/state-of-the-art-video-and-image-generation-with-veo-2-and-imagen-3/",
        source: "Google DeepMind"
    },
    {
        title: "Introducing Gemini 2.0: our new AI model for the agentic era",
        summary: "Today, weâ€™re announcing Gemini 2.0, our most capable multimodal AI model yet.",
        link: "https://deepmind.google/blog/introducing-gemini-20-our-new-ai-model-for-the-agentic-era/",
        source: "Google DeepMind"
    },
    {
        title: "Google DeepMind at NeurIPS 2024",
        summary: "Advancing adaptive AI agents, empowering 3D scene creation, and innovating LLM training for a smarter, safer future",
        link: "https://deepmind.google/blog/google-deepmind-at-neurips-2024/",
        source: "Google DeepMind"
    },
    {
        title: "GenCast predicts weather and the risks of extreme conditions with state-of-the-art accuracy",
        summary: "New AI model advances the prediction of weather uncertainties and risks, delivering faster, more accurate forecasts up to 15 days ahead",
        link: "https://deepmind.google/blog/gencast-predicts-weather-and-the-risks-of-extreme-conditions-with-sota-accuracy/",
        source: "Google DeepMind"
    },
    {
        title: "Genie 2: A large-scale foundation world model",
        summary: "Generating unlimited diverse training environments for future general agents",
        link: "https://deepmind.google/blog/genie-2-a-large-scale-foundation-world-model/",
        source: "Google DeepMind"
    },
    {
        title: "AlphaQubit tackles one of quantum computingâ€™s biggest challenges",
        summary: "Our new AI system accurately identifies errors inside quantum computers, helping to make this new technology more reliable.",
        link: "https://deepmind.google/blog/alphaqubit-tackles-one-of-quantum-computings-biggest-challenges/",
        source: "Google DeepMind"
    },
    {
        title: "The AI for Science Forum: A new era of discovery",
        summary: "The AI Science Forum highlights AI's present and potential role in revolutionizing scientific discovery and solving global challenges, emphasizing collaboration between the scientific community, polic...",
        link: "https://deepmind.google/blog/the-ai-for-science-forum-a-new-era-of-discovery/",
        source: "Google DeepMind"
    },
    {
        title: "Pushing the frontiers of audio generation",
        summary: "Our pioneering speech generation technologies are helping people around the world interact with more natural, conversational and intuitive digital assistants and AI tools.",
        link: "https://deepmind.google/blog/pushing-the-frontiers-of-audio-generation/",
        source: "Google DeepMind"
    },
    {
        title: "New generative AI tools open the doors of music creation",
        summary: "Our latest AI music technologies are now available in MusicFX DJ, Music AI Sandbox and YouTube Shorts",
        link: "https://deepmind.google/blog/new-generative-ai-tools-open-the-doors-of-music-creation/",
        source: "Google DeepMind"
    },
    {
        title: "Demis Hassabis & John Jumper awarded Nobel Prize in Chemistry",
        summary: "The award recognizes their work developing AlphaFold, a groundbreaking AI system that predicts the 3D structure of proteins from their amino acid sequences.",
        link: "https://deepmind.google/blog/demis-hassabis-john-jumper-awarded-nobel-prize-in-chemistry/",
        source: "Google DeepMind"
    },
    {
        title: "How AlphaChip transformed computer chip design",
        summary: "Our AI method has accelerated and optimized chip design, and its superhuman chip layouts are used in hardware around the world.",
        link: "https://deepmind.google/blog/how-alphachip-transformed-computer-chip-design/",
        source: "Google DeepMind"
    },
    {
        title: "Bringing Robotics AI to Embedded Platforms: Dataset Recording, VLA Fineâ€‘Tuning, and Onâ€‘Device Optimizations",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/nxp/bringing-robotics-ai-to-embedded-platforms",
        source: "Hugging Face"
    },
    {
        title: "Introducing Modular Diffusers - Composable Building Blocks for Diffusion Pipelines",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/modular-diffusers",
        source: "Hugging Face"
    },
    {
        title: "PRX Part 3 â€” Training a Text-to-Image Model in 24h!",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/Photoroom/prx-part3",
        source: "Hugging Face"
    },
    {
        title: "Mixture of Experts (MoEs) in Transformers",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/moe-transformers",
        source: "Hugging Face"
    },
    {
        title: "GGML and llama.cpp join HF to ensure the long-term progress of Local AI",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/ggml-joins-hf",
        source: "Hugging Face"
    },
    {
        title: "Train AI models with Unsloth and Hugging Face Jobs for FREE",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/unsloth-jobs",
        source: "Hugging Face"
    },
    {
        title: "IBM and UC Berkeley Diagnose Why Enterprise Agents Fail Using IT-Bench and MAST",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/ibm-research/itbenchandmast",
        source: "Hugging Face"
    },
    {
        title: "One-Shot Any Web App with Gradio's gr.HTML",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/gradio-html-one-shot-apps",
        source: "Hugging Face"
    },
    {
        title: "Custom Kernels for All from Codex and Claude",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/custom-cuda-kernels-agent-skills",
        source: "Hugging Face"
    },
    {
        title: "OpenEnv in Practice: Evaluating Tool-Using Agents in Real-World Environments",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/openenv-turing",
        source: "Hugging Face"
    },
    {
        title: "Transformers.js v4 Preview: Now Available on NPM!",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/transformersjs-v4",
        source: "Hugging Face"
    },
    {
        title: "Introducing SyGra Studio",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/ServiceNow-AI/sygra-studio",
        source: "Hugging Face"
    },
    {
        title: "Community Evals: Because we're done trusting black-box leaderboards over the community",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/community-evals",
        source: "Hugging Face"
    },
    {
        title: "H Company's new Holo2 model takes the lead in UI Localization",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/Hcompany/introducing-holo2-235b-a22b",
        source: "Hugging Face"
    },
    {
        title: "The Future of the Global Open-Source AI Ecosystem: From DeepSeek to AI+",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/huggingface/one-year-since-the-deepseek-moment-blog-3",
        source: "Hugging Face"
    },
    {
        title: "Training Design for Text-to-Image Models: Lessons from Ablations",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/Photoroom/prx-part2",
        source: "Hugging Face"
    },
    {
        title: "Introducing Daggr: Chain apps programmatically, inspect visually",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/daggr",
        source: "Hugging Face"
    },
    {
        title: "We Got Claude to Build CUDA Kernels and teach open models!",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/upskill",
        source: "Hugging Face"
    },
    {
        title: "Architectural Choices in China's Open-Source AI Ecosystem: Building Beyond DeepSeekÂ",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/huggingface/one-year-since-the-deepseek-moment-blog-2",
        source: "Hugging Face"
    },
    {
        title: "Alyah â­ï¸: Toward Robust Evaluation of Emirati Dialect Capabilities in Arabic LLMs",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/tiiuae/emirati-benchmarks",
        source: "Hugging Face"
    },
    {
        title: "Unlocking Agentic RL Training for GPT-OSS: A Practical Retrospective",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/LinkedIn/gpt-oss-agentic-rl",
        source: "Hugging Face"
    },
    {
        title: "AssetOpsBench: Bridging the Gap Between AI Agent Benchmarks and Industrial Reality",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/ibm-research/assetopsbench-playground-on-hugging-face",
        source: "Hugging Face"
    },
    {
        title: "One Year Since the â€œDeepSeek Momentâ€",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/huggingface/one-year-since-the-deepseek-moment",
        source: "Hugging Face"
    },
    {
        title: "Differential Transformer V2",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/microsoft/diff-attn-v2",
        source: "Hugging Face"
    },
    {
        title: "Introducing Waypoint-1: Real-time interactive video diffusion from Overworld",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/waypoint-1",
        source: "Hugging Face"
    },
    {
        title: "Open Responses: What you need to know",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/open-responses",
        source: "Hugging Face"
    },
    {
        title: "NVIDIA Cosmos Reason 2 Brings Advanced Reasoning To Physical AI",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/nvidia/nvidia-cosmos-reason-2-brings-advanced-reasoning",
        source: "Hugging Face"
    },
    {
        title: "Introducing Falcon-H1-Arabic: Pushing the Boundaries of Arabic Language AI with Hybrid Architecture",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/tiiuae/falcon-h1-arabic",
        source: "Hugging Face"
    },
    {
        title: "NVIDIA brings agents to life with DGX Spark and Reachy Mini",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/nvidia-reachy-mini",
        source: "Hugging Face"
    },
    {
        title: "AprielGuard: A Guardrail for Safety and Adversarial Robustness in Modern LLM Systems",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/ServiceNow-AI/aprielguard",
        source: "Hugging Face"
    },
    {
        title: "Tokenization in Transformers v5: Simpler, Clearer, and More Modular",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/tokenizers",
        source: "Hugging Face"
    },
    {
        title: "The Open Evaluation Standard: Benchmarking NVIDIA Nemotron 3 Nano with NeMo Evaluator",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/nvidia/nemotron-3-nano-evaluation-recipe",
        source: "Hugging Face"
    },
    {
        title: "CUGA on Hugging Face: Democratizing Configurable AI Agents",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/ibm-research/cuga-on-hugging-face",
        source: "Hugging Face"
    },
    {
        title: "New in llama.cpp: Model Management",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/ggml-org/model-management-in-llamacpp",
        source: "Hugging Face"
    },
    {
        title: "Codex is Open Sourcing AI models",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/hf-skills-training-codex",
        source: "Hugging Face"
    },
    {
        title: "Introducing swift-huggingface: The Complete Swift Client for Hugging Face",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/swift-huggingface",
        source: "Hugging Face"
    },
    {
        title: "DeepMath: A lightweight math reasoning Agent with smolagents",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/intel-deepmath",
        source: "Hugging Face"
    },
    {
        title: "We Got Claude to Fine-Tune an Open Source LLM",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/hf-skills-training",
        source: "Hugging Face"
    },
    {
        title: "Transformers v5: Simple model definitions powering the AI ecosystem",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/transformers-v5",
        source: "Hugging Face"
    },
    {
        title: "Diffusers welcomes FLUX-2",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/flux-2",
        source: "Hugging Face"
    },
    {
        title: "Continuous batching from first principles",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/continuous_batching",
        source: "Hugging Face"
    },
    {
        title: "Building Deep Research: How we Achieved State of the Art",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/Tavily/tavily-deep-research",
        source: "Hugging Face"
    },
    {
        title: "OVHcloud on Hugging Face Inference Providers ðŸ”¥",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/OVHcloud/inference-providers-ovhcloud",
        source: "Hugging Face"
    },
    {
        title: "20x Faster TRL Fine-tuning with RapidFire AI",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/rapidfireai",
        source: "Hugging Face"
    },
    {
        title: "Open ASR Leaderboard: Trends and Insights with New Multilingual & Long-Form Tracks",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/open-asr-leaderboard",
        source: "Hugging Face"
    },
    {
        title: "Introducing AnyLanguageModel: One API for Local and Remote LLMs on Apple Platforms",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/anylanguagemodel",
        source: "Hugging Face"
    },
    {
        title: "Apriel-H1: The Surprising Key to Distilling Efficient Reasoning Models",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/ServiceNow-AI/apriel-h1",
        source: "Hugging Face"
    },
    {
        title: "Easily Build and Share ROCm Kernels with Hugging Face",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/build-rocm-kernels",
        source: "Hugging Face"
    },
    {
        title: "Join the AMD Open Robotics Hackathon",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/amd/openroboticshackathon",
        source: "Hugging Face"
    },
    {
        title: "Building for an Open Future - our new partnership with Google Cloud",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/google-cloud",
        source: "Hugging Face"
    },
    {
        title: "Aligning to What? Rethinking Agent Generalization in MiniMax M2",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/MiniMax-AI/aligning-to-what",
        source: "Hugging Face"
    },
    {
        title: "On the Shifting Global Compute Landscape",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/huggingface/shifting-compute-landscape",
        source: "Hugging Face"
    },
    {
        title: "Building a Healthcare Robot from Simulation to Deployment with NVIDIA Isaac",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/lerobotxnvidia-healthcare",
        source: "Hugging Face"
    },
    {
        title: "How to Build a Healthcare Robot from Simulation to Deployment with NVIDIA Isaac for Healthcare",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/nvidia/nvidia-isaac-for-healthcare",
        source: "Hugging Face"
    },
    {
        title: "Granite 4.0 Nano: Just how small can you go?",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/ibm-granite/granite-4-nano",
        source: "Hugging Face"
    },
    {
        title: "Voice Cloning with Consent",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/voice-consent-gate",
        source: "Hugging Face"
    },
    {
        title: "Streaming datasets: 100x More Efficient",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/streaming-datasets",
        source: "Hugging Face"
    },
    {
        title: "huggingface_hub v1.0: Five Years of Building the Foundation of Open Machine Learning",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/huggingface-hub-v1",
        source: "Hugging Face"
    },
    {
        title: "LeRobot v0.4.0: Supercharging OSS Robot Learning",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/lerobot-release-v040",
        source: "Hugging Face"
    },
    {
        title: "Building the Open Agent Ecosystem Together: Introducing OpenEnv",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/openenv",
        source: "Hugging Face"
    },
    {
        title: "Hugging Face and VirusTotal collaborate to strengthen AI security",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/virustotal",
        source: "Hugging Face"
    },
    {
        title: "Sentence Transformers is joining Hugging Face!",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/sentence-transformers-joins-hf",
        source: "Hugging Face"
    },
    {
        title: "Supercharge your OCR Pipelines with Open Models",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/ocr-open-models",
        source: "Hugging Face"
    },
    {
        title: "Unlock the power of images with AI Sheets",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/aisheets-unlock-images",
        source: "Hugging Face"
    },
    {
        title: "AI for Food Allergies",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/hugging-science/ai-for-food-allergies",
        source: "Hugging Face"
    },
    {
        title: "Google Cloud C4 Brings a 70% TCO improvement on GPT OSS with Intel and Hugging Face",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/gpt-oss-on-intel-xeon",
        source: "Hugging Face"
    },
    {
        title: "Get your VLM running in 3 simple steps on Intel CPUs",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/openvino-vlm",
        source: "Hugging Face"
    },
    {
        title: "Nemotron-Personas-India: Synthesized Data for Sovereign AI",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/nvidia/nemotron-personas-india",
        source: "Hugging Face"
    },
    {
        title: "Arm will be @ PyTorch Conference, Join Us!",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/Arm/arm-at-pytorch-conference",
        source: "Hugging Face"
    },
    {
        title: "BigCodeArena: Judging code generations end to end with code executions",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/bigcode/arena",
        source: "Hugging Face"
    },
    {
        title: "SOTA OCR with Core ML and dots.ocr",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/dots-ocr-ne",
        source: "Hugging Face"
    },
    {
        title: "Introducing RTEB: A New Standard for Retrieval Evaluation",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/rteb",
        source: "Hugging Face"
    },
    {
        title: "Accelerating Qwen3-8B Agent on IntelÂ® Coreâ„¢ Ultra with Depth-Pruned Draft Models",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/intel-qwen3-agent",
        source: "Hugging Face"
    },
    {
        title: "VibeGame: Exploring Vibe Coding Games",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/vibegame",
        source: "Hugging Face"
    },
    {
        title: "Nemotron-Personas-Japan: ã‚½ãƒ–ãƒªãƒ³ AI ã®ãŸã‚ã®åˆæˆãƒ‡ãƒ¼ã‚¿ã‚»ãƒƒãƒˆ",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/nvidia/nemotron-personas-japan-ja",
        source: "Hugging Face"
    },
    {
        title: "Swift Transformers Reaches 1.0 â€“ and Looks to the Future",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/swift-transformers",
        source: "Hugging Face"
    },
    {
        title: "Smol2Operator: Post-Training GUI Agents for Computer Use",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/smol2operator",
        source: "Hugging Face"
    },
    {
        title: "SyGra: The One-Stop Framework for Building Data for LLMs andÂ SLMs",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/ServiceNow-AI/sygra-data-gen-framework",
        source: "Hugging Face"
    },
    {
        title: "Gaia2 and ARE: Empowering the community to study agents",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/gaia2",
        source: "Hugging Face"
    },
    {
        title: "Scaleway on Hugging Face Inference Providers ðŸ”¥",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/inference-providers-scaleway",
        source: "Hugging Face"
    },
    {
        title: "Democratizing AI Safety with RiskRubric.ai",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/riskrubric",
        source: "Hugging Face"
    },
    {
        title: "Public AI on Hugging Face Inference Providers ðŸ”¥",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/inference-providers-publicai",
        source: "Hugging Face"
    },
    {
        title: "`LeRobotDataset:v3.0`: Bringing large-scale datasets to `lerobot`",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/lerobot-datasets-v3",
        source: "Hugging Face"
    },
    {
        title: "Visible Watermarking with Gradio",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/watermarking-with-gradio",
        source: "Hugging Face"
    },
    {
        title: "Introducing the Palmyra-mini family: Powerful, lightweight, and ready to reason!",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/Writer/announcing-palmyra-mini",
        source: "Hugging Face"
    },
    {
        title: "Tricks from OpenAI gpt-oss YOU ðŸ«µ can use with transformers",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/faster-transformers",
        source: "Hugging Face"
    },
    {
        title: "Fine-tune Any LLM from the Hugging Face Hub with Together AI",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/togethercomputer/together-ft",
        source: "Hugging Face"
    },
    {
        title: "Jupyter Agents: training LLMs to reason with notebooks",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/jupyter-agent-2",
        source: "Hugging Face"
    },
    {
        title: "mmBERT: ModernBERT goes Multilingual",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/mmbert",
        source: "Hugging Face"
    },
    {
        title: "Welcome EmbeddingGemma, Google's new efficient embedding model",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/embeddinggemma",
        source: "Hugging Face"
    },
    {
        title: "SAIR: Accelerating Pharma R&D with AI-Powered Structural Intelligence",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/SandboxAQ/sair-data-accelerating-drug-discovery-with-ai",
        source: "Hugging Face"
    },
    {
        title: "Make your ZeroGPU Spaces go brrr with ahead-of-time compilation",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/zerogpu-aoti",
        source: "Hugging Face"
    },
    {
        title: "NVIDIA Releases 6 Million Multi-Lingual Reasoning Dataset",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/nvidia/multilingual-reasoning-v1",
        source: "Hugging Face"
    },
    {
        title: "Generate Images with Claude and Hugging Face",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/claude-and-mcp",
        source: "Hugging Face"
    },
    {
        title: "From Zero to GPU: A Guide to Building and Scaling Production-Ready CUDA Kernels",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/kernel-builder",
        source: "Hugging Face"
    },
    {
        title: "MCP for Research: How to Connect AI to Research Tools",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/mcp-for-research",
        source: "Hugging Face"
    },
    {
        title: "Kimina-Prover-RL",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/AI-MO/kimina-prover-rl",
        source: "Hugging Face"
    },
    {
        title: "Arm & ExecuTorch 0.7: Bringing Generative AI to the masses",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/Arm/executorch-0-dot-7",
        source: "Hugging Face"
    },
    {
        title: "Neural Super Sampling is here!",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/Arm/neural-super-sampling",
        source: "Hugging Face"
    },
    {
        title: "TextQuests: How Good are LLMs at Text-Based Video Games?",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/textquests",
        source: "Hugging Face"
    },
    {
        title: "ðŸ‡µðŸ‡­ FilBench - Can LLMs Understand and Generate Filipino?",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/filbench",
        source: "Hugging Face"
    },
    {
        title: "Introducing AI Sheets: a tool to work with datasets using open AI models!",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/aisheets",
        source: "Hugging Face"
    },
    {
        title: "Accelerate ND-Parallel: A guide to Efficient Multi-GPU Training",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/accelerate-nd-parallel",
        source: "Hugging Face"
    },
    {
        title: "Vision Language Model Alignment in TRL âš¡ï¸",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/trl-vlm-alignment",
        source: "Hugging Face"
    },
    {
        title: "Welcome GPT OSS, the new open-source model family from OpenAI!",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/welcome-openai-gpt-oss",
        source: "Hugging Face"
    },
    {
        title: "Measuring Open-Source Llama Nemotron Models on DeepResearch Bench",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/nvidia/ai-q-top-ranking-open-portable-deep-research-agent",
        source: "Hugging Face"
    },
    {
        title: "ðŸ“š 3LM: A Benchmark for Arabic LLMs in STEM and Code",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/tiiuae/3lm-benchmark",
        source: "Hugging Face"
    },
    {
        title: "Implementing MCP Servers in Python: An AI Shopping Assistant with Gradio",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/gradio-vton-mcp",
        source: "Hugging Face"
    },
    {
        title: "Introducing Trackio: A Lightweight Experiment Tracking Library from Hugging Face",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/trackio",
        source: "Hugging Face"
    },
    {
        title: "Say hello to `hf`: a faster, friendlier Hugging Face CLI âœ¨",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/hf-cli",
        source: "Hugging Face"
    },
    {
        title: "Parquet Content-Defined Chunking",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/parquet-cdc",
        source: "Hugging Face"
    },
    {
        title: "TimeScope: How Long Can Your Video Large Multimodal Model Go?",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/timescope-video-lmm-benchmark",
        source: "Hugging Face"
    },
    {
        title: "Fast LoRA inference for Flux with Diffusers and PEFT",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/lora-fast",
        source: "Hugging Face"
    },
    {
        title: "Accelerate a World of LLMs on Hugging Face with NVIDIA NIM",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/nvidia/multi-llm-nim",
        source: "Hugging Face"
    },
    {
        title: "Arc Virtual Cell Challenge: A Primer",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/virtual-cell-challenge",
        source: "Hugging Face"
    },
    {
        title: "Consilium: When Multiple LLMs Collaborate",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/consilium-multi-llm",
        source: "Hugging Face"
    },
    {
        title: "Back to The Future: Evaluating AI Agents on Predicting Future Events",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/futurebench",
        source: "Hugging Face"
    },
    {
        title: "Five Big Improvements to Gradio MCP Servers",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/gradio-mcp-updates",
        source: "Hugging Face"
    },
    {
        title: "Ettin Suite: SoTA Paired Encoders and Decoders",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/ettin",
        source: "Hugging Face"
    },
    {
        title: "Migrating the Hub from Git LFS to Xet",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/migrating-the-hub-to-xet",
        source: "Hugging Face"
    },
    {
        title: "Kimina-Prover: Applying Test-time RL Search on Large Formal Reasoning Models",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/AI-MO/kimina-prover",
        source: "Hugging Face"
    },
    {
        title: "Asynchronous Robot Inference: Decoupling Action Prediction and Execution",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/async-robot-inference",
        source: "Hugging Face"
    },
    {
        title: "ScreenEnv: Deploy your full stack Desktop Agent",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/screenenv",
        source: "Hugging Face"
    },
    {
        title: "Building the Hugging Face MCP Server",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/building-hf-mcp",
        source: "Hugging Face"
    },
    {
        title: "Reachy Mini - The Open-Source Robot for Today's and Tomorrow's AI Builders",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/reachy-mini",
        source: "Hugging Face"
    },
    {
        title: "Creating custom kernels for the AMD MI300",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/mi300kernels",
        source: "Hugging Face"
    },
    {
        title: "Upskill your LLMs With Gradio MCP Servers",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/gradio-mcp-servers",
        source: "Hugging Face"
    },
    {
        title: "SmolLM3: smol, multilingual, long-context reasoner",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/smollm3",
        source: "Hugging Face"
    },
    {
        title: "Three Mighty Alerts Supporting Hugging Faceâ€™s Production Infrastructure",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/infrastructure-alerting",
        source: "Hugging Face"
    },
    {
        title: "Efficient MultiModal Data Pipeline",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/mmdp",
        source: "Hugging Face"
    },
    {
        title: "Announcing  NeurIPS 2025 E2LM Competition: Early Training Evaluation of Language Models",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/tiiuae/e2lm-competition",
        source: "Hugging Face"
    },
    {
        title: "Training and Finetuning Sparse Embedding Models with Sentence Transformers v5",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/train-sparse-encoder",
        source: "Hugging Face"
    },
    {
        title: "Welcome the NVIDIA Llama Nemotron Nano VLM to Hugging Face Hub",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/nvidia/llama-nemotron-nano-vl",
        source: "Hugging Face"
    },
    {
        title: "Gemma 3n fully available in the open-source ecosystem!",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/gemma3n",
        source: "Hugging Face"
    },
    {
        title: "Transformers backend integration in SGLang",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/transformers-backend-sglang",
        source: "Hugging Face"
    },
    {
        title: "(LoRA) Fine-Tuning FLUX.1-dev on Consumer Hardware",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/flux-qlora",
        source: "Hugging Face"
    },
    {
        title: "Groq on Hugging Face Inference Providers ðŸ”¥",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/inference-providers-groq",
        source: "Hugging Face"
    },
    {
        title: "How Long Prompts Block Other Requests - Optimizing LLM Performance",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/tngtech/llm-performance-blocked-by-long-prompts",
        source: "Hugging Face"
    },
    {
        title: "Learn the Hugging Face Kernel Hub in 5 Minutes",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/hello-hf-kernels",
        source: "Hugging Face"
    },
    {
        title: "Featherless AI on Hugging Face Inference Providers ðŸ”¥",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/inference-providers-featherless",
        source: "Hugging Face"
    },
    {
        title: "Post-Training Isaac GR00T N1.5 for LeRobot SO-101 Arm",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/nvidia/gr00t-n1-5-so101-tuning",
        source: "Hugging Face"
    },
    {
        title: "Introducing Training Cluster as a Service - a new collaboration with NVIDIA",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/nvidia-training-cluster",
        source: "Hugging Face"
    },
    {
        title: "ScreenSuite - The most comprehensive evaluation suite for GUI Agents!",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/screensuite",
        source: "Hugging Face"
    },
    {
        title: "KV Cache from scratch in nanoVLM",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/kv-cache",
        source: "Hugging Face"
    },
    {
        title: "Real-Time AI Sound Generation on Arm: A Personal Tool for Creative Freedom",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/Arm/ai-sound-gen-on-arm",
        source: "Hugging Face"
    },
    {
        title: "Holo1: New family of GUI automation VLMs powering GUI agent Surfer-H",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/Hcompany/holo1",
        source: "Hugging Face"
    },
    {
        title: "SmolVLA: Efficient Vision-Language-Action Model trained on Lerobot Community Data",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/smolvla",
        source: "Hugging Face"
    },
    {
        title: "No GPU left behind: Unlocking Efficiency with Co-located vLLM in TRL",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/vllm-colocate",
        source: "Hugging Face"
    },
    {
        title: "CodeAgents + Structure: AÂ Better Way to Execute Actions",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/structured-codeagent",
        source: "Hugging Face"
    },
    {
        title: "ðŸ¯ Liger GRPO meets TRL",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/liger-grpo",
        source: "Hugging Face"
    },
    {
        title: "Dell Enterprise Hub is all you need to build AI on premises",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/dell-ai-applications",
        source: "Hugging Face"
    },
    {
        title: "Tiny Agents in Python: a MCP-powered agent in ~70 lines of code",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/python-tiny-agents",
        source: "Hugging Face"
    },
    {
        title: "Falcon-H1: A Family of Hybrid-Head Language Models Redefining Efficiency and Performance",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/tiiuae/falcon-h1",
        source: "Hugging Face"
    },
    {
        title: "Falcon-Arabic: A Breakthrough in Arabic Language Models",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/tiiuae/falcon-arabic",
        source: "Hugging Face"
    },
    {
        title: "Exploring Quantization Backends in Diffusers",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/diffusers-quantization",
        source: "Hugging Face"
    },
    {
        title: "nanoVLM: The simplest repository to train your VLM in pure PyTorch",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/nanovlm",
        source: "Hugging Face"
    },
    {
        title: "Microsoft and Hugging Face expand collaboration",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/azure-ai-foundry",
        source: "Hugging Face"
    },
    {
        title: "Falcon-Edge: A series of powerful, universal, fine-tunable 1.58bit language models.",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/tiiuae/falcon-edge",
        source: "Hugging Face"
    },
    {
        title: "The Transformers Library: standardizing model definitions",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/transformers-model-definition",
        source: "Hugging Face"
    },
    {
        title: "Improving Hugging Face Model Access for Kaggle Users",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/kaggle-integration",
        source: "Hugging Face"
    },
    {
        title: "Blazingly fast whisper transcriptions with Inference Endpoints",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/fast-whisper-endpoints",
        source: "Hugging Face"
    },
    {
        title: "Vision Language Models (Better, faster, stronger)",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/vlms-2025",
        source: "Hugging Face"
    },
    {
        title: "LeRobot Community Datasets: The â€œImageNetâ€ of Robotics â€” When and How?",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/lerobot-datasets",
        source: "Hugging Face"
    },
    {
        title: "How to Build an MCP Server with Gradio",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/gradio-mcp",
        source: "Hugging Face"
    },
    {
        title: "The 4 Things Qwen-3â€™s Chat Template Teaches Us",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/qwen-3-chat-template-deep-dive",
        source: "Hugging Face"
    },
    {
        title: "Welcoming Llama Guard 4 on Hugging Face Hub",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/llama-guard-4",
        source: "Hugging Face"
    },
    {
        title: "Introducing AutoRound: Intelâ€™s Advanced Quantization for LLMs and VLMs",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/autoround",
        source: "Hugging Face"
    },
    {
        title: "PipelineRL",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/ServiceNow/pipelinerl",
        source: "Hugging Face"
    },
    {
        title: "Tiny Agents: an MCP-powered agent in 50 lines of code",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/tiny-agents",
        source: "Hugging Face"
    },
    {
        title: "Finetuning olmOCR to be a faithful OCR-Engine",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/tngtech/finetuning-olmocr-to-be-a-faithful-ocr-engine",
        source: "Hugging Face"
    },
    {
        title: "Prefill and Decode for Concurrent Requests - Optimizing LLM Performance",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/tngtech/llm-performance-prefill-decode-concurrent-requests",
        source: "Hugging Face"
    },
    {
        title: "17 Reasons Why Gradio Isn't Just Another UI Library",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/why-gradio-stands-out",
        source: "Hugging Face"
    },
    {
        title: "Cohere on Hugging Face Inference Providers ðŸ”¥",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/inference-providers-cohere",
        source: "Hugging Face"
    },
    {
        title: "Introducing HELMET: Holistically Evaluating Long-context Language Models",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/helmet",
        source: "Hugging Face"
    },
    {
        title: "Hugging Face to sell open-source robots thanks to Pollen Robotics acquisition ðŸ¤–",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/hugging-face-pollen-robotics-acquisition",
        source: "Hugging Face"
    },
    {
        title: "4M Models Scanned: Protect AI + Hugging Face 6 Months In",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/pai-6-month",
        source: "Hugging Face"
    },
    {
        title: "Visual Salamandra: Pushing the Boundaries of Multimodal Understanding",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/BSC-LT/visualsalamandra7b",
        source: "Hugging Face"
    },
    {
        title: "Hugging Face and Cloudflare Partner to Make Real-Time Speech and Video Seamless with FastRTC",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/fastrtc-cloudflare",
        source: "Hugging Face"
    },
    {
        title: "Arabic Leaderboards: Introducing Arabic Instruction Following, Updating AraGen, and More",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/leaderboard-3c3h-aragen-ifeval",
        source: "Hugging Face"
    },
    {
        title: "Welcome Llama 4 Maverick & Scout on Hugging Face",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/llama4-release",
        source: "Hugging Face"
    },
    {
        title: "Journey to 1 Million Gradio Users!",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/gradio-1m",
        source: "Hugging Face"
    },
    {
        title: "The NLP Course is becoming the LLM Course",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/llm-course",
        source: "Hugging Face"
    },
    {
        title: "Efficient Request Queueing â€“ Optimizing LLM Performance",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/tngtech/llm-performance-request-queueing",
        source: "Hugging Face"
    },
    {
        title: "How Hugging Face Scaled Secrets Management for AI Infrastructure",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/scaling-secrets-management",
        source: "Hugging Face"
    },
    {
        title: "ðŸš€ Accelerating LLM Inference with TGI on Intel Gaudi",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/intel-gaudi-backend-for-tgi",
        source: "Hugging Face"
    },
    {
        title: "Open R1: Update #4",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/open-r1/update-4",
        source: "Hugging Face"
    },
    {
        title: "Training and Finetuning Reranker Models with Sentence Transformers v4",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/train-reranker",
        source: "Hugging Face"
    },
    {
        title: "Introducing Gradio's new Dataframe!",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/gradio-dataframe-upgrade",
        source: "Hugging Face"
    },
    {
        title: "The New and Fresh analytics in Inference Endpoints",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/endpoint-analytics",
        source: "Hugging Face"
    },
    {
        title: "Open R1: How to use OlympicCoder locally for coding",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/olympic-coder-lmstudio",
        source: "Hugging Face"
    },
    {
        title: "AI Policy @ðŸ¤—: Response to the White House AI Action Plan RFI",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/ai-action-wh-2025",
        source: "Hugging Face"
    },
    {
        title: "NVIDIA's GTC 2025 Announcement for Physical AI Developers: New Open Models and Datasets",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/nvidia-physical-ai",
        source: "Hugging Face"
    },
    {
        title: "Xet is on the Hub",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/xet-on-the-hub",
        source: "Hugging Face"
    },
    {
        title: "Welcome Gemma 3: Google's all new multimodal, multilingual, long context open LLM",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/gemma3",
        source: "Hugging Face"
    },
    {
        title: "Open R1: Update #3",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/open-r1/update-3",
        source: "Hugging Face"
    },
    {
        title: "LeRobot goes to driving school: Worldâ€™s largest open-source self-driving dataset",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/lerobot-goes-to-driving-school",
        source: "Hugging Face"
    },
    {
        title: "LLM Inference on Edge: A Fun and Easy Guide to run LLMs via React Native on your Phone!",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/llm-inference-on-edge",
        source: "Hugging Face"
    },
    {
        title: "Hugging Face and JFrog partner to make AI Security more transparent",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/jfrog",
        source: "Hugging Face"
    },
    {
        title: "A Deepdive into Aya Vision: Advancing the Frontier of Multilingual Multimodality",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/aya-vision",
        source: "Hugging Face"
    },
    {
        title: "Trace & Evaluate your Agent with Arize Phoenix",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/smolagents-phoenix",
        source: "Hugging Face"
    },
    {
        title: "HuggingFace, IISc partner to supercharge model building on India's diverse languages",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/iisc-huggingface-collab",
        source: "Hugging Face"
    },
    {
        title: "FastRTC: The Real-Time Communication Library for Python",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/fastrtc",
        source: "Hugging Face"
    },
    {
        title: "Remote VAEs for decoding with Inference Endpoints ðŸ¤—",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/remote_vae",
        source: "Hugging Face"
    },
    {
        title: "SigLIP 2: A better multilingual vision language encoder",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/siglip2",
        source: "Hugging Face"
    },
    {
        title: "SmolVLM2: Bringing Video Understanding to Every Device",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/smolvlm2",
        source: "Hugging Face"
    },
    {
        title: "PaliGemma 2 Mix - New Instruction Vision Language Models by Google",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/paligemma2mix",
        source: "Hugging Face"
    },
    {
        title: "Introducing Three New Serverless Inference Providers: Hyperbolic, Nebius AI Studio, and Novita ðŸ”¥",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/inference-providers-nebius-novita-hyperbolic",
        source: "Hugging Face"
    },
    {
        title: "Welcome Fireworks.ai on the Hub ðŸŽ†",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/fireworks-ai",
        source: "Hugging Face"
    },
    {
        title: "Fixing Open LLM Leaderboard with Math-Verify",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/math_verify_leaderboard",
        source: "Hugging Face"
    },
    {
        title: "1 Billion Classifications",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/billion-classifications",
        source: "Hugging Face"
    },
    {
        title: "From Chunks to Blocks: Accelerating Uploads and Downloads on the Hub",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/from-chunks-to-blocks",
        source: "Hugging Face"
    },
    {
        title: "Build awesome datasets for video generation",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/vid_ds_scripts",
        source: "Hugging Face"
    },
    {
        title: "Open R1: Update #2",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/open-r1/update-2",
        source: "Hugging Face"
    },
    {
        title: "The Open Arabic LLM Leaderboard 2",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/leaderboard-arabic-v2",
        source: "Hugging Face"
    },
    {
        title: "Open-source DeepResearch â€“ Freeing our search agents",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/open-deep-research",
        source: "Hugging Face"
    },
    {
        title: "Ï€0 and Ï€0-FAST: Vision-Language-Action Models for General Robot Control",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/pi0",
        source: "Hugging Face"
    },
    {
        title: "DABStep: Data Agent Benchmark for Multi-step Reasoning",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/dabstep",
        source: "Hugging Face"
    },
    {
        title: "Open-R1: Update #1",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/open-r1/update-1",
        source: "Hugging Face"
    },
    {
        title: "Mini-R1: Reproduce Deepseek R1 â€žaha momentâ€œ a RL tutorial",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/open-r1/mini-r1-contdown-game",
        source: "Hugging Face"
    },
    {
        title: "The AI tools for Art Newsletter - Issue 1",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/ai-art-newsletter-jan-25",
        source: "Hugging Face"
    },
    {
        title: "How to deploy and fine-tune DeepSeek models on AWS",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/deepseek-r1-aws",
        source: "Hugging Face"
    },
    {
        title: "Welcome to Inference Providers on the Hub ðŸ”¥",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/inference-providers",
        source: "Hugging Face"
    },
    {
        title: "Open-R1: a fully open reproduction of DeepSeek-R1",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/open-r1",
        source: "Hugging Face"
    },
    {
        title: "State of open video generation models in Diffusers",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/video_gen",
        source: "Hugging Face"
    },
    {
        title: "We now support VLMs in smolagents!",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/smolagents-can-see",
        source: "Hugging Face"
    },
    {
        title: "Mastering Long Contexts in LLMs with KVPress",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/nvidia/kvpress",
        source: "Hugging Face"
    },
    {
        title: "SmolVLM Grows Smaller â€“ Introducing the 256M & 500M Models!",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/smolervlm",
        source: "Hugging Face"
    },
    {
        title: "Hugging Face and FriendliAI partner to supercharge model deployment on the Hub",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/friendliai-partnership",
        source: "Hugging Face"
    },
    {
        title: "Yay! Organizations can now publish blog Articles",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/huggingface/blog-articles-for-orgs",
        source: "Hugging Face"
    },
    {
        title: "Timm â¤ï¸ Transformers: Use any timm model with transformers",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/timm-transformers",
        source: "Hugging Face"
    },
    {
        title: "Introducing multi-backends (TRT-LLM, vLLM) support for Text Generation Inference",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/tgi-multi-backend",
        source: "Hugging Face"
    },
    {
        title: "Train 400x faster Static Embedding Models with Sentence Transformers",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/static-embeddings",
        source: "Hugging Face"
    },
    {
        title: "AI Agents Are Here. What Now?",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/ethics-soc-7",
        source: "Hugging Face"
    },
    {
        title: "Visual Document Retrieval Goes Multilingual",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/vdr-2b-multilingual",
        source: "Hugging Face"
    },
    {
        title: "COâ‚‚ Emissions and Models Performance: Insights from the Open LLM Leaderboard",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/leaderboard-emissions-analysis",
        source: "Hugging Face"
    },
    {
        title: "Introducing smolagents: simple agents that write actions in code.",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/smolagents",
        source: "Hugging Face"
    },
    {
        title: "Visualize and understand GPU memory in PyTorch",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/train_memory",
        source: "Hugging Face"
    },
    {
        title: "Controlling Language Model Generation with NVIDIA's LogitsProcessorZoo",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/logits-processor-zoo",
        source: "Hugging Face"
    },
    {
        title: "Evaluating Audio Reasoning with Big Bench Audio",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/big-bench-audio-release",
        source: "Hugging Face"
    },
    {
        title: "Finally, a Replacement for BERT: Introducing ModernBERT",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/modernbert",
        source: "Hugging Face"
    },
    {
        title: "Bamba: Inference-Efficient Hybrid Mamba2 Model",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/bamba",
        source: "Hugging Face"
    },
    {
        title: "Welcome to the Falcon 3 Family of Open Models!",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/falcon3",
        source: "Hugging Face"
    },
    {
        title: "Benchmarking Language Model Performance on 5th Gen Xeon at GCP",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/intel-gcp-c4",
        source: "Hugging Face"
    },
    {
        title: "Introducing the Synthetic Data Generator - Build Datasets with Natural Language",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/synthetic-data-generator",
        source: "Hugging Face"
    },
    {
        title: "LeMaterial: an open source initiative to accelerate materials discovery and research",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/lematerial",
        source: "Hugging Face"
    },
    {
        title: "Hugging Face models in Amazon Bedrock",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/bedrock-marketplace",
        source: "Hugging Face"
    },
    {
        title: "Open Preference Dataset for Text-to-Image Generation by the ðŸ¤— Community",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/image-preferences",
        source: "Hugging Face"
    },
    {
        title: "Welcome PaliGemma 2 â€“ New vision language models by Google",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/paligemma2",
        source: "Hugging Face"
    },
    {
        title: "How good are LLMs at fixing their mistakes? A chatbot arena experiment with Keras and TPUs",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/keras-chatbot-arena",
        source: "Hugging Face"
    },
    {
        title: "Rethinking LLM Evaluation with 3C3H: AraGen Benchmark and Leaderboard",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/leaderboard-3c3h-aragen",
        source: "Hugging Face"
    },
    {
        title: "Investing in Performance: Fine-tune small models with LLM insights  - a CFM case study",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/cfm-case-study",
        source: "Hugging Face"
    },
    {
        title: "Open Source Developers Guide to the EU AI Act",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/eu-ai-act-for-oss-developers",
        source: "Hugging Face"
    },
    {
        title: "Rearchitecting Hugging Face Uploads and Downloads",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/rearchitecting-uploads-and-downloads",
        source: "Hugging Face"
    },
    {
        title: "SmolVLM - small yet mighty Vision Language Model",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/smolvlm",
        source: "Hugging Face"
    },
    {
        title: "You could have designed state of the art positional encoding",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/designing-positional-encoding",
        source: "Hugging Face"
    },
    {
        title: "Letting Large Models Debate: The First Multilingual LLM Debate Competition",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/debate",
        source: "Hugging Face"
    },
    {
        title: "From Files to Chunks: Improving HF Storage Efficiency",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/from-files-to-chunks",
        source: "Hugging Face"
    },
    {
        title: "Faster Text Generation with Self-Speculative Decoding",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/layerskip",
        source: "Hugging Face"
    },
    {
        title: "Introducing the Open Leaderboard for Japanese LLMs!",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/leaderboard-japanese",
        source: "Hugging Face"
    },
    {
        title: "Judge Arena: Benchmarking LLMs as Evaluators",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/arena-atla",
        source: "Hugging Face"
    },
    {
        title: "Share your open ML datasets on Hugging Face Hub!",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/researcher-dataset-sharing",
        source: "Hugging Face"
    },
    {
        title: "Hugging Face + PyCharm",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/pycharm-integration",
        source: "Hugging Face"
    },
    {
        title: "Argilla 2.4: Easily Build Fine-Tuning and Evaluation Datasets on the Hub â€” No Code Required",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/argilla-ui-hub",
        source: "Hugging Face"
    },
    {
        title: "Universal Assisted Generation: Faster Decoding with Any Assistant Model",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/universal_assisted_generation",
        source: "Hugging Face"
    },
    {
        title: "Expert Support case study: Bolstering a RAG app with LLM-as-a-Judge",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/digital-green-llm-judge",
        source: "Hugging Face"
    },
    {
        title: "A Deepdive into Aya Expanse: Advancing the Frontier of Multilinguality",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/aya-expanse",
        source: "Hugging Face"
    },
    {
        title: "Introducing SynthID Text",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/synthid-text",
        source: "Hugging Face"
    },
    {
        title: "Introducing HUGS - Scale your AI with Open Models",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/hugs",
        source: "Hugging Face"
    },
    {
        title: "CinePile 2.0 - making stronger datasets with adversarial refinement",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/cinepile2",
        source: "Hugging Face"
    },
    {
        title: "Hugging Face Teams Up with Protect AI: Enhancing Model Security for the ML Community",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/protectai",
        source: "Hugging Face"
    },
    {
        title: "Transformers.js v3: WebGPU Support, New Models & Tasks, and Moreâ€¦",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/transformersjs-v3",
        source: "Hugging Face"
    },
    {
        title: "Diffusers welcomes Stable Diffusion 3.5 Large",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/sd3-5",
        source: "Hugging Face"
    },
    {
        title: "Releasing Outlines-core 0.1.0: structured generation in Rust and Python",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/outlines-core",
        source: "Hugging Face"
    },
    {
        title: "Deploying Speech-to-Speech on Hugging Face",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/s2s_endpoint",
        source: "Hugging Face"
    },
    {
        title: "â€œLlama 3.2 in Kerasâ€",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/keras-llama-32",
        source: "Hugging Face"
    },
    {
        title: "Fixing Gradient Accumulation",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/gradient_accumulation",
        source: "Hugging Face"
    },
    {
        title: "Introducing the AMD 5th Gen EPYCâ„¢ CPU",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/huggingface-amd-turin",
        source: "Hugging Face"
    },
    {
        title: "A Security Review of Gradio 5",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/gradio-5-security",
        source: "Hugging Face"
    },
    {
        title: "Welcome, Gradio 5",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/gradio-5",
        source: "Hugging Face"
    },
    {
        title: "Scaling AI-based Data Processing with Hugging Face + Dask",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/dask-scaling",
        source: "Hugging Face"
    },
    {
        title: "Faster Assisted Generation with Dynamic Speculation",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/dynamic_speculation_lookahead",
        source: "Hugging Face"
    },
    {
        title: "Improving Parquet Dedupe on Hugging Face Hub",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/improve_parquet_dedupe",
        source: "Hugging Face"
    },
    {
        title: "Introducing the Open FinLLM Leaderboard",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/leaderboard-finbench",
        source: "Hugging Face"
    },
    {
        title: "A Short Summary of Chinese AI Global Expansion",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/chinese-ai-expansion",
        source: "Hugging Face"
    },
    {
        title: "ðŸ‡¨ðŸ‡¿Â BenCzechMark - Can your LLM Understand Czech?",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/benczechmark",
        source: "Hugging Face"
    },
    {
        title: "Converting Vertex-Colored Meshes to Textured Meshes",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/vertex-colored-to-textured-mesh",
        source: "Hugging Face"
    },
    {
        title: "Llama can now see and run on your device - welcome Llama 3.2",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/llama32",
        source: "Hugging Face"
    },
    {
        title: "FineVideo: behind the scenes",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/fine-video",
        source: "Hugging Face"
    },
    {
        title: "Exploring the Daily Papers Page on Hugging Face",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/daily-papers",
        source: "Hugging Face"
    },
    {
        title: "Optimize and deploy with Optimum-Intel and OpenVINO GenAI",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/deploy-with-openvino",
        source: "Hugging Face"
    },
    {
        title: "Fine-tuning LLMs to 1.58bit: extreme quantization made easy",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/1_58_llm_extreme_quantization",
        source: "Hugging Face"
    },
    {
        title: "Introducing the SQL Console on Datasets",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/sql-console",
        source: "Hugging Face"
    },
    {
        title: "Introducing Community Tools on HuggingChat",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/community-tools",
        source: "Hugging Face"
    },
    {
        title: "Accelerate 1.0.0",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/accelerate-v1",
        source: "Hugging Face"
    },
    {
        title: "Hugging Face partners with TruffleHog to Scan for Secrets",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/trufflesecurity-partnership",
        source: "Hugging Face"
    },
    {
        title: "Scaling robotics datasets with video encoding",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/video-encoding",
        source: "Hugging Face"
    },
    {
        title: "The 5 Most Under-Rated Tools on Hugging Face",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/unsung-heroes",
        source: "Hugging Face"
    },
    {
        title: "Improving Hugging Face Training Efficiency Through Packing with Flash Attention 2",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/packing-with-FA2",
        source: "Hugging Face"
    },
    {
        title: "Deploy Meta Llama 3.1 405B on Google Cloud Vertex AI",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/llama31-on-vertex-ai",
        source: "Hugging Face"
    },
    {
        title: "A failed experiment: Infini-Attention, and why we should keep trying?",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/infini-attention",
        source: "Hugging Face"
    },
    {
        title: "Introduction to ggml",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/introduction-to-ggml",
        source: "Hugging Face"
    },
    {
        title: "Welcome Falcon Mamba: The first strong attention-free 7B model",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/falconmamba",
        source: "Hugging Face"
    },
    {
        title: "Tool Use, Unified",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/unified-tool-use",
        source: "Hugging Face"
    },
    {
        title: "XetHub is joining Hugging Face!",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/xethub-joins-hf",
        source: "Hugging Face"
    },
    {
        title: "2024 Security Feature Highlights",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/2024-security-features",
        source: "Hugging Face"
    },
    {
        title: "Introducing TextImage Augmentation for Document Images",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/doc_aug_hf_alb",
        source: "Hugging Face"
    },
    {
        title: "Google releases Gemma 2 2B, ShieldGemma and Gemma Scope",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/gemma-july-update",
        source: "Hugging Face"
    },
    {
        title: "Memory-efficient Diffusion Transformers with Quanto and Diffusers",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/quanto-diffusers",
        source: "Hugging Face"
    },
    {
        title: "Serverless Inference with Hugging Face and NVIDIA NIM",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/inference-dgx-cloud",
        source: "Hugging Face"
    },
    {
        title: "LAVE: Zero-shot VQA Evaluation on Docmatix with LLMs - Do We Still Need Fine-Tuning?",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/zero-shot-vqa-docmatix",
        source: "Hugging Face"
    },
    {
        title: "Llama 3.1 - 405B, 70B & 8B with multilinguality and long context",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/llama31",
        source: "Hugging Face"
    },
    {
        title: "WWDC 24: Running Mistral 7B with Core ML",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/mistral-coreml",
        source: "Hugging Face"
    },
    {
        title: "Docmatix - a huge dataset for Document Visual Question Answering",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/docmatix",
        source: "Hugging Face"
    },
    {
        title: "TGI Multi-LoRA: Deploy Once, Serve 30 Models",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/multi-lora-serving",
        source: "Hugging Face"
    },
    {
        title: "SmolLM - blazingly fast and remarkably powerful",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/smollm",
        source: "Hugging Face"
    },
    {
        title: "How we leveraged distilabel to create an Argilla 2.0 Chatbot",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/argilla-chatbot",
        source: "Hugging Face"
    },
    {
        title: "How NuminaMath Won the 1st AIMO Progress Prize",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/winning-aimo-progress-prize",
        source: "Hugging Face"
    },
    {
        title: "Announcing New Hugging Face and KerasHub integration",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/keras-hub-integration",
        source: "Hugging Face"
    },
    {
        title: "Experimenting with Automatic PII Detection on the Hub using Presidio",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/presidio-pii-detection",
        source: "Hugging Face"
    },
    {
        title: "Preference Optimization for Vision Language Models",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/dpo_vlm",
        source: "Hugging Face"
    },
    {
        title: "Google Cloud TPUs made available to Hugging Face users",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/tpu-inference-endpoints-spaces",
        source: "Hugging Face"
    },
    {
        title: "Banque des Territoires (CDC Group) x Polyconseil x Hugging Face: Enhancing a Major French Environmental Program with a Sovereign Data Solution",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/sovereign-data-solution-case-study",
        source: "Hugging Face"
    },
    {
        title: "Announcing New Dataset Search Features",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/datasets-filters",
        source: "Hugging Face"
    },
    {
        title: "Accelerating Protein Language Model ProtST on Intel Gaudi 2",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/intel-protein-language-model-protst",
        source: "Hugging Face"
    },
    {
        title: "Our Transformers Code Agent beats the GAIA benchmark ðŸ…",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/beating-gaia",
        source: "Hugging Face"
    },
    {
        title: "Welcome Gemma 2 - Googleâ€™s new open LLM",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/gemma2",
        source: "Hugging Face"
    },
    {
        title: "XLSCOUT Unveils ParaEmbed 2.0: a Powerful Embedding Model Tailored for Patents and IP with Expert Support from Hugging Face",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/xlscout-case-study",
        source: "Hugging Face"
    },
    {
        title: "Fine-tuning Florence-2 - Microsoft's Cutting-edge Vision Language Models",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/finetune-florence2",
        source: "Hugging Face"
    },
    {
        title: "Ethics and Society Newsletter #6: Building Better AI: The Importance of Data Quality",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/ethics-soc-6",
        source: "Hugging Face"
    },
    {
        title: "Data Is Better Together: A Look Back and Forward",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/dibt",
        source: "Hugging Face"
    },
    {
        title: "Going multimodal: How Prezi is leveraging the Hub and the Expert Support Program to accelerate their ML roadmap",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/prezi-case-study",
        source: "Hugging Face"
    },
    {
        title: "BigCodeBench: The Next Generation of HumanEval",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/leaderboard-bigcodebench",
        source: "Hugging Face"
    },
    {
        title: "From DeepSpeed to FSDP and Back Again with Hugging Face Accelerate",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/deepspeed-to-fsdp-and-back",
        source: "Hugging Face"
    },
    {
        title: "Diffusers welcomes Stable Diffusion 3",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/sd3",
        source: "Hugging Face"
    },
    {
        title: "Putting RL back in RLHF",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/putting_rl_back_in_rlhf_with_rloo",
        source: "Hugging Face"
    },
    {
        title: "Making sense of this mess",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/transformers-docs-redesign",
        source: "Hugging Face"
    },
    {
        title: "Introducing the Hugging Face Embedding Container for Amazon SageMaker",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/sagemaker-huggingface-embedding",
        source: "Hugging Face"
    },
    {
        title: "Launching the Artificial Analysis Text to Image Leaderboard & Arena",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/leaderboard-artificial-analysis2",
        source: "Hugging Face"
    },
    {
        title: "Introducing NPC-Playground, a 3D playground to interact with LLM-powered NPCs",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/npc-gigax-cubzh",
        source: "Hugging Face"
    },
    {
        title: "Faster assisted generation support for Intel Gaudi",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/assisted-generation-support-gaudi",
        source: "Hugging Face"
    },
    {
        title: "Space secrets security update",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/space-secrets-disclosure",
        source: "Hugging Face"
    },
    {
        title: "Benchmarking Text Generation Inference",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/tgi-benchmarking",
        source: "Hugging Face"
    },
    {
        title: "Training and Finetuning Embedding Models with Sentence Transformers v3",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/train-sentence-transformers",
        source: "Hugging Face"
    },
    {
        title: "Falcon 2: An 11B parameter pretrained language model and VLM, trained on over 5000B tokens and 11 languages",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/falcon2-11b",
        source: "Hugging Face"
    },
    {
        title: "CyberSecEval 2 - A Comprehensive Evaluation Framework for Cybersecurity Risks and Capabilities of Large Language Models",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/leaderboard-llamaguard",
        source: "Hugging Face"
    },
    {
        title: "Deploy models on AWS Inferentia2 from Hugging Face",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/inferentia-inference-endpoints",
        source: "Hugging Face"
    },
    {
        title: "Introducing Spaces Dev Mode for a seamless developer experience",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/spaces-dev-mode",
        source: "Hugging Face"
    },
    {
        title: "Build AI on premise with Dell Enterprise Hub",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/dell-enterprise-hub",
        source: "Hugging Face"
    },
    {
        title: "Hugging Face on AMD Instinct MI300 GPU",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/huggingface-amd-mi300",
        source: "Hugging Face"
    },
    {
        title: "From cloud to developers: Hugging Face and Microsoft Deepen Collaboration",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/microsoft-collaboration",
        source: "Hugging Face"
    },
    {
        title: "Unlocking Longer Generation with Key-Value Cache Quantization",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/kv-cache-quantization",
        source: "Hugging Face"
    },
    {
        title: "PaliGemma â€“ Google's Cutting-Edge Open Vision Language Model",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/paligemma",
        source: "Hugging Face"
    },
    {
        title: "Hugging Face x LangChain : A new partner package",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/langchain",
        source: "Hugging Face"
    },
    {
        title: "Introducing the Open Arabic LLM Leaderboard",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/leaderboard-arabic",
        source: "Hugging Face"
    },
    {
        title: "License to Call: Introducing Transformers Agents 2.0",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/agents",
        source: "Hugging Face"
    },
    {
        title: "Subscribe to Enterprise Hub with your AWS Account",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/enterprise-hub-aws-marketplace",
        source: "Hugging Face"
    },
    {
        title: "Building Cost-Efficient Enterprise RAG applications with Intel Gaudi 2 and Intel Xeon",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/cost-efficient-rag-applications-with-intel",
        source: "Hugging Face"
    },
    {
        title: "Introducing the Open Leaderboard for Hebrew LLMs!",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/leaderboard-hebrew",
        source: "Hugging Face"
    },
    {
        title: "Bringing the Artificial Analysis LLM Performance Leaderboard to Hugging Face",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/leaderboard-artificial-analysis",
        source: "Hugging Face"
    },
    {
        title: "Powerful ASR + diarization + speculative decoding with Hugging Face Inference Endpoints",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/asr-diarization",
        source: "Hugging Face"
    },
    {
        title: "Improving Prompt Consistency with Structured Generations",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/evaluation-structured-outputs",
        source: "Hugging Face"
    },
    {
        title: "StarCoder2-Instruct: Fully Transparent and Permissive Self-Alignment for Code Generation",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/sc2-instruct",
        source: "Hugging Face"
    },
    {
        title: "Introducing the Open Chain of Thought Leaderboard",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/leaderboard-cot",
        source: "Hugging Face"
    },
    {
        title: "Jack of All Trades, Master of Some, a Multi-Purpose Transformer Agent",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/jat",
        source: "Hugging Face"
    },
    {
        title: "The Open Medical-LLM Leaderboard: Benchmarking Large Language Models in Healthcare",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/leaderboard-medicalllm",
        source: "Hugging Face"
    },
    {
        title: "Welcome Llama 3 - Meta's new open LLM",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/llama3",
        source: "Hugging Face"
    },
    {
        title: "AI Apps in a Flash with Gradio's Reload Mode",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/gradio-reload",
        source: "Hugging Face"
    },
    {
        title: "Introducing the LiveCodeBench Leaderboard - Holistic and Contamination-Free Evaluation of Code LLMs",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/leaderboard-livecodebench",
        source: "Hugging Face"
    },
    {
        title: "Running Privacy-Preserving Inferences on Hugging Face Endpoints",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/fhe-endpoints",
        source: "Hugging Face"
    },
    {
        title: "Ryghtâ€™s Journey to Empower Healthcare and Life Sciences with Expert Support from Hugging Face",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/ryght-case-study",
        source: "Hugging Face"
    },
    {
        title: "Introducing Idefics2: A Powerful 8B Vision-Language Model for the community",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/idefics2",
        source: "Hugging Face"
    },
    {
        title: "Vision Language Models Explained",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/vlms",
        source: "Hugging Face"
    },
    {
        title: "Making thousands of open LLMs bloom in the Vertex AI Model Garden",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/google-cloud-model-garden",
        source: "Hugging Face"
    },
    {
        title: "CodeGemma - an official Google release for code LLMs",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/codegemma",
        source: "Hugging Face"
    },
    {
        title: "Public Policy at Hugging Face",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/policy-blog",
        source: "Hugging Face"
    },
    {
        title: "Hugging Face partners with Wiz Research to Improve AI Security",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/hugging-face-wiz-security-blog",
        source: "Hugging Face"
    },
    {
        title: "Text2SQL using Hugging Face Dataset Viewer API and Motherduck DuckDB-NSQL-7B",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/duckdb-nsql-7b",
        source: "Hugging Face"
    },
    {
        title: "Blazing Fast SetFit Inference with ðŸ¤— Optimum Intel on Xeon",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/setfit-optimum-intel",
        source: "Hugging Face"
    },
    {
        title: "Bringing serverless GPU inference to Hugging Face users",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/cloudflare-workers-ai",
        source: "Hugging Face"
    },
    {
        title: "Pollen-Vision: Unified interface for Zero-Shot vision models in robotics",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/pollen-vision",
        source: "Hugging Face"
    },
    {
        title: "Total noobâ€™s intro to Hugging Face Transformers",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/noob_intro_transformers",
        source: "Hugging Face"
    },
    {
        title: "Binary and Scalar Embedding Quantization for Significantly Faster & Cheaper Retrieval",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/embedding-quantization",
        source: "Hugging Face"
    },
    {
        title: "Introducing the Chatbot Guardrails Arena",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/arena-lighthouz",
        source: "Hugging Face"
    },
    {
        title: "A Chatbot on your Laptop: Phi-2 on Intel Meteor Lake",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/phi2-intel-meteor-lake",
        source: "Hugging Face"
    },
    {
        title: "Cosmopedia: how to create large-scale synthetic data for pre-training Large Language Models",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/cosmopedia",
        source: "Hugging Face"
    },
    {
        title: "GaLore: Advancing Large Model Training on Consumer-grade Hardware",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/galore",
        source: "Hugging Face"
    },
    {
        title: "Easily Train Models with H100 GPUs on NVIDIA DGX Cloud",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/train-dgx-cloud",
        source: "Hugging Face"
    },
    {
        title: "Quanto: a PyTorch quantization backend for Optimum",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/quanto-introduction",
        source: "Hugging Face"
    },
    {
        title: "CPU Optimized Embeddings with ðŸ¤— Optimum Intel and fastRAG",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/intel-fast-embedding",
        source: "Hugging Face"
    },
    {
        title: "Unlocking the conversion of Web Screenshots into HTML Code with the WebSight Dataset",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/websight",
        source: "Hugging Face"
    },
    {
        title: "Introducing ConTextual: How well can your Multimodal model jointly reason over text and image in text-rich scenes?",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/leaderboard-contextual",
        source: "Hugging Face"
    },
    {
        title: "Data is better together: Enabling communities to collectively build better datasets together using Argilla and Hugging Face Spaces",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/community-datasets",
        source: "Hugging Face"
    },
    {
        title: "Text-Generation Pipeline on IntelÂ® GaudiÂ® 2 AI Accelerator",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/textgen-pipe-gaudi",
        source: "Hugging Face"
    },
    {
        title: "StarCoder2 and The Stack v2",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/starcoder2",
        source: "Hugging Face"
    },
    {
        title: "TTS Arena: Benchmarking Text-to-Speech Models in the Wild",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/arena-tts",
        source: "Hugging Face"
    },
    {
        title: "AI Watermarking 101: Tools and Techniques",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/watermarking",
        source: "Hugging Face"
    },
    {
        title: "Fine-Tuning Gemma Models in Hugging Face",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/gemma-peft",
        source: "Hugging Face"
    },
    {
        title: "Introducing the Red-Teaming Resistance Leaderboard",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/leaderboard-haizelab",
        source: "Hugging Face"
    },
    {
        title: "ðŸª† Introduction to Matryoshka Embedding Models",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/matryoshka",
        source: "Hugging Face"
    },
    {
        title: "Welcome Gemma - Googleâ€™s new open LLM",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/gemma",
        source: "Hugging Face"
    },
    {
        title: "Introducing the Open Ko-LLM Leaderboard: Leading the Korean LLM Evaluation Ecosystem",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/leaderboard-upstage",
        source: "Hugging Face"
    },
    {
        title: "ðŸ¤—Â PEFT welcomes new merging methods",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/peft_merging",
        source: "Hugging Face"
    },
    {
        title: "Synthetic data: save money, time and carbon with open source",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/synthetic-data-save-costs",
        source: "Hugging Face"
    },
    {
        title: "AMD Pervasive AI Developer Contest!",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/amd_pervasive_developer_ai_contest",
        source: "Hugging Face"
    },
    {
        title: "From OpenAI to Open LLMs with Messages API on Hugging Face",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/tgi-messages-api",
        source: "Hugging Face"
    },
    {
        title: "SegMoE: Segmind Mixture of Diffusion Experts",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/segmoe",
        source: "Hugging Face"
    },
    {
        title: "NPHardEval Leaderboard: Unveiling the Reasoning Abilities of Large Language Models through Complexity Classes and Dynamic Updates",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/leaderboard-nphardeval",
        source: "Hugging Face"
    },
    {
        title: "Constitutional AI with Open LLMs",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/constitutional_ai",
        source: "Hugging Face"
    },
    {
        title: "Hugging Face Text Generation Inference available for AWS Inferentia2",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/text-generation-inference-on-inferentia2",
        source: "Hugging Face"
    },
    {
        title: "Patch Time Series Transformer in Hugging Face",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/patchtst",
        source: "Hugging Face"
    },
    {
        title: "Introducing the Enterprise Scenarios Leaderboard: a Leaderboard for Real World Use Cases",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/leaderboard-patronus",
        source: "Hugging Face"
    },
    {
        title: "Accelerate StarCoder with ðŸ¤— Optimum Intel on Xeon: Q8/Q4 and Speculative Decoding",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/intel-starcoder-quantization",
        source: "Hugging Face"
    },
    {
        title: "The Hallucinations Leaderboard, an Open Effort to Measure Hallucinations in Large Language Models",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/leaderboard-hallucinations",
        source: "Hugging Face"
    },
    {
        title: "An Introduction to AI Secure LLM Safety Leaderboard",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/leaderboard-decodingtrust",
        source: "Hugging Face"
    },
    {
        title: "Hugging Face and Google partner for open AI collaboration",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/gcp-partnership",
        source: "Hugging Face"
    },
    {
        title: "Open-source LLMs as LangChain Agents",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/open-source-llms-as-agents",
        source: "Hugging Face"
    },
    {
        title: "Fine-Tune W2V2-Bert for low-resource ASR with ðŸ¤— Transformers",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/fine-tune-w2v2-bert",
        source: "Hugging Face"
    },
    {
        title: "PatchTSMixer in HuggingFace",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/patchtsmixer",
        source: "Hugging Face"
    },
    {
        title: "Preference Tuning LLMs with Direct Preference Optimization Methods",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/pref-tuning",
        source: "Hugging Face"
    },
    {
        title: "Accelerating SD Turbo and SDXL Turbo Inference with ONNX Runtime and Olive",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/sdxl_ort_inference",
        source: "Hugging Face"
    },
    {
        title: "Run ComfyUI workflows for free with Gradio on Hugging Face Spaces",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/run-comfyui-workflows-on-spaces",
        source: "Hugging Face"
    },
    {
        title: "A guide to setting up your own Hugging Face leaderboard: an end-to-end example with Vectara's hallucination leaderboard",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/leaderboard-vectara",
        source: "Hugging Face"
    },
    {
        title: "Make LLM Fine-tuning 2x faster with Unsloth and ðŸ¤— TRL",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/unsloth-trl",
        source: "Hugging Face"
    },
    {
        title: "Welcome aMUSEd: Efficient Text-to-Image Generation",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/amused",
        source: "Hugging Face"
    },
    {
        title: "LoRA training scripts of the world, unite!",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/sdxl_lora_advanced_script",
        source: "Hugging Face"
    },
    {
        title: "Speculative Decoding for 2x Faster Whisper Inference",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/whisper-speculative-decoding",
        source: "Hugging Face"
    },
    {
        title: "2023, year of open LLMs",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/2023-in-llms",
        source: "Hugging Face"
    },
    {
        title: "Welcome Mixtral - a SOTA Mixture of Experts on Hugging Face",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/mixtral",
        source: "Hugging Face"
    },
    {
        title: "Mixture of Experts Explained",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/moe",
        source: "Hugging Face"
    },
    {
        title: "SetFitABSA: Few-Shot Aspect Based Sentiment Analysis using SetFit",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/setfit-absa",
        source: "Hugging Face"
    },
    {
        title: "AMD + ðŸ¤—: Large Language Models Out-of-the-Box Acceleration with AMD GPU",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/huggingface-and-optimum-amd",
        source: "Hugging Face"
    },
    {
        title: "Optimum-NVIDIA Unlocking blazingly fast LLM inference in just 1 line of code",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/optimum-nvidia",
        source: "Hugging Face"
    },
    {
        title: "Goodbye cold boot - how we made LoRA Inference 300% faster",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/lora-adapters-dynamic-loading",
        source: "Hugging Face"
    },
    {
        title: "Open LLM Leaderboard: DROP deep dive",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/open-llm-leaderboard-drop",
        source: "Hugging Face"
    },
    {
        title: "SDXL in 4 steps with Latent Consistency LoRAs",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/lcm_lora",
        source: "Hugging Face"
    },
    {
        title: "Make your llama generation time fly with AWS Inferentia2",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/inferentia-llama2",
        source: "Hugging Face"
    },
    {
        title: "Introducing Prodigy-HF: a direct integration with Hugging Face",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/prodigy-hf",
        source: "Hugging Face"
    },
    {
        title: "Comparing the Performance of LLMs: A Deep Dive into Roberta, Llama 2, and Mistral for Disaster Tweets Analysis with Lora",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/Lora-for-sequence-classification-with-Roberta-Llama-Mistral",
        source: "Hugging Face"
    },
    {
        title: "Introducing Storage Regions on the HF Hub",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/regions",
        source: "Hugging Face"
    },
    {
        title: "Personal Copilot: Train Your Own Coding Assistant",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/personal-copilot",
        source: "Hugging Face"
    },
    {
        title: "Interactively explore your Huggingface dataset with one line ofÂ code",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/scalable-data-inspection",
        source: "Hugging Face"
    },
    {
        title: "Deploy Embedding Models with Hugging Face Inference Endpoints",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/inference-endpoints-embeddings",
        source: "Hugging Face"
    },
    {
        title: "The N Implementation Details of RLHF with PPO",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/the_n_implementation_details_of_rlhf_with_ppo",
        source: "Hugging Face"
    },
    {
        title: "Exploring simple optimizations for SDXL",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/simple_sdxl_optimizations",
        source: "Hugging Face"
    },
    {
        title: "Gradio-Lite: Serverless Gradio Running Entirely in Your Browser",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/gradio-lite",
        source: "Hugging Face"
    },
    {
        title: "Accelerating over 130,000 Hugging Face models with ONNX Runtime",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/ort-accelerating-hf-models",
        source: "Hugging Face"
    },
    {
        title: "ðŸ§¨ Accelerating Stable Diffusion XL Inference with JAX on Cloud TPU v5e",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/sdxl_jax",
        source: "Hugging Face"
    },
    {
        title: "Chat Templates: An End to the Silent Performance Killer",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/chat-templates",
        source: "Hugging Face"
    },
    {
        title: "Deploying the AI Comic Factory using the Inference API",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/ai-comic-factory",
        source: "Hugging Face"
    },
    {
        title: "Ethics and Society Newsletter #5: Hugging Face Goes To Washington and Other Summer 2023 Musings",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/ethics-soc-5",
        source: "Hugging Face"
    },
    {
        title: "Finetune Stable Diffusion Models with DDPO via TRL",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/trl-ddpo",
        source: "Hugging Face"
    },
    {
        title: "Non-engineers guide: Train a LLaMA 2 chatbot",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/Llama2-for-non-engineers",
        source: "Hugging Face"
    },
    {
        title: "Llama 2 on Amazon SageMaker a Benchmark",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/llama-sagemaker-benchmark",
        source: "Hugging Face"
    },
    {
        title: "Inference for PROs",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/inference-pro",
        source: "Hugging Face"
    },
    {
        title: "Rocket Money x Hugging Face: Scaling Volatile ML Models in Productionâ€‹",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/rocketmoney-case-study",
        source: "Hugging Face"
    },
    {
        title: "Introduction to 3D Gaussian Splatting",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/gaussian-splatting",
        source: "Hugging Face"
    },
    {
        title: "Object Detection Leaderboard",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/object-detection-leaderboard",
        source: "Hugging Face"
    },
    {
        title: "Optimizing your LLM in production",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/optimize-llm",
        source: "Hugging Face"
    },
    {
        title: "Introducing WÃ¼rstchen: Fast Diffusion for Image Generation",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/wuerstchen",
        source: "Hugging Face"
    },
    {
        title: "Fine-tuning Llama 2 70B using PyTorch FSDP",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/ram-efficient-pytorch-fsdp",
        source: "Hugging Face"
    },
    {
        title: "Overview of natively supported quantization schemes in ðŸ¤— Transformers",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/overview-quantization-transformers",
        source: "Hugging Face"
    },
    {
        title: "SafeCoder vs. Closed-source Code Assistants",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/safecoder-vs-closed-source-code-assistants",
        source: "Hugging Face"
    },
    {
        title: "Efficient Controllable Generation for SDXL with T2I-Adapters",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/t2i-sdxl-adapters",
        source: "Hugging Face"
    },
    {
        title: "Spread Your Wings: Falcon 180B is here",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/falcon-180b",
        source: "Hugging Face"
    },
    {
        title: "Fetch Cuts ML Processing Latency by 50% Using Amazon SageMaker & Hugging Face",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/fetch-case-study",
        source: "Hugging Face"
    },
    {
        title: "AudioLDM 2, but faster âš¡ï¸",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/audioldm2",
        source: "Hugging Face"
    },
    {
        title: "Code Llama: Llama 2 learns to code",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/codellama",
        source: "Hugging Face"
    },
    {
        title: "Deprecation of Git Authentication using password",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/password-git-deprecation",
        source: "Hugging Face"
    },
    {
        title: "Making LLMs lighter with AutoGPTQ and transformers",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/gptq-integration",
        source: "Hugging Face"
    },
    {
        title: "Introducing SafeCoder",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/safecoder",
        source: "Hugging Face"
    },
    {
        title: "Introducing IDEFICS: An Open Reproduction of State-of-the-art Visual Langage Model",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/idefics",
        source: "Hugging Face"
    },
    {
        title: "Hugging Face Hub on the AWS Marketplace: Pay with your AWS Account",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/aws-marketplace",
        source: "Hugging Face"
    },
    {
        title: "Optimizing Bark using ðŸ¤— Transformers",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/optimizing-bark",
        source: "Hugging Face"
    },
    {
        title: "Deploying Hugging Face Models with BentoML: DeepFloyd IF in Action",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/deploy-deepfloydif-using-bentoml",
        source: "Hugging Face"
    },
    {
        title: "Fine-tune Llama 2 with DPO",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/dpo-trl",
        source: "Hugging Face"
    },
    {
        title: "Releasing Swift Transformers: Run On-Device LLMs in Apple Devices",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/swift-coreml-llm",
        source: "Hugging Face"
    },
    {
        title: "Deploy MusicGen in no time with Inference Endpoints",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/run-musicgen-as-an-api",
        source: "Hugging Face"
    },
    {
        title: "Huggy Lingo: Using Machine Learning to Improve Language Metadata on the Hugging Face Hub",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/huggy-lingo",
        source: "Hugging Face"
    },
    {
        title: "Towards Encrypted Large Language Models with FHE",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/encrypted-llm",
        source: "Hugging Face"
    },
    {
        title: "Practical 3D Asset Generation: A Step-by-Step Guide",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/3d-assets",
        source: "Hugging Face"
    },
    {
        title: "Open-sourcing Knowledge Distillation Code and Weights of SD-Small and SD-Tiny",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/sd_distillation",
        source: "Hugging Face"
    },
    {
        title: "Stable Diffusion XL on Mac with Advanced Core ML Quantization",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/stable-diffusion-xl-coreml",
        source: "Hugging Face"
    },
    {
        title: "AI Policy @ðŸ¤—: Open ML Considerations in the EU AI Act",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/eu-ai-act-oss",
        source: "Hugging Face"
    },
    {
        title: "Introducing Agents.js: Give tools to your LLMs using JavaScript",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/agents-js",
        source: "Hugging Face"
    },
    {
        title: "Results of the Open Source AI Game Jam",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/game-jam-first-edition-results",
        source: "Hugging Face"
    },
    {
        title: "Happy 1st anniversary ðŸ¤— Diffusers!",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/diffusers-turns-1",
        source: "Hugging Face"
    },
    {
        title: "Llama 2 is here - get it on Hugging Face",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/llama2",
        source: "Hugging Face"
    },
    {
        title: "Building an AI WebTV",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/ai-webtv",
        source: "Hugging Face"
    },
    {
        title: "Open-Source Text Generation & LLM Ecosystem at Hugging Face",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/os-llms",
        source: "Hugging Face"
    },
    {
        title: "Fine-tuning Stable Diffusion models on Intel CPUs",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/stable-diffusion-finetuning-intel",
        source: "Hugging Face"
    },
    {
        title: "Making ML-powered web games with Transformers.js",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/ml-web-games",
        source: "Hugging Face"
    },
    {
        title: "Deploy LLMs with Hugging Face Inference Endpoints",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/inference-endpoints-llm",
        source: "Hugging Face"
    },
    {
        title: "Making a web app generator with open ML models",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/text-to-webapp",
        source: "Hugging Face"
    },
    {
        title: "Leveraging Hugging Face for complex generative AI use cases",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/writer-case-study",
        source: "Hugging Face"
    },
    {
        title: "Accelerating Vision-Language Models: BridgeTower on Habana Gaudi2",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/bridgetower",
        source: "Hugging Face"
    },
    {
        title: "Ethics and Society Newsletter #4: Bias in Text-to-Image Models",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/ethics-soc-4",
        source: "Hugging Face"
    },
    {
        title: "What's going on with the Open LLM Leaderboard?",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/open-llm-leaderboard-mmlu",
        source: "Hugging Face"
    },
    {
        title: "Panel on Hugging Face",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/panel-on-hugging-face",
        source: "Hugging Face"
    },
    {
        title: "AI Policy @ðŸ¤—: Response to the U.S. NTIA's Request for Comment on AI Accountability",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/policy-ntia-rfc",
        source: "Hugging Face"
    },
    {
        title: "Fine-Tune MMS Adapter Models for low-resource ASR",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/mms_adapters",
        source: "Hugging Face"
    },
    {
        title: "Yes, Transformers are Effective for Time Series Forecasting (+ Autoformer)",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/autoformer",
        source: "Hugging Face"
    },
    {
        title: "Faster Stable Diffusion with Core ML on iPhone, iPad, and Mac",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/fast-diffusers-coreml",
        source: "Hugging Face"
    },
    {
        title: "Deploy Livebook notebooks as apps to Hugging Face Spaces",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/livebook-app-deployment",
        source: "Hugging Face"
    },
    {
        title: "Announcing our new Content Guidelines and Policy",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/content-guidelines-update",
        source: "Hugging Face"
    },
    {
        title: "Hugging Face and AMD partner on accelerating state-of-the-art models for CPU and GPU platforms",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/huggingface-and-amd",
        source: "Hugging Face"
    },
    {
        title: "Can foundation models label data like humans?",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/open-llm-leaderboard-rlhf",
        source: "Hugging Face"
    },
    {
        title: "The Hugging Face Hub for Galleries, Libraries, Archives and Museums",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/hf-hub-glam-guide",
        source: "Hugging Face"
    },
    {
        title: "DuckDB: analyze 50,000+ datasets stored on the Hugging Face Hub",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/hub-duckdb",
        source: "Hugging Face"
    },
    {
        title: "Welcome fastText to the Hugging Face Hub",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/fasttext",
        source: "Hugging Face"
    },
    {
        title: "The Falcon has landed in the Hugging Face ecosystem",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/falcon",
        source: "Hugging Face"
    },
    {
        title: "AI Speech Recognition in Unity",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/unity-asr",
        source: "Hugging Face"
    },
    {
        title: "Announcing the Open Source AI Game Jam ðŸŽ®",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/game-jam",
        source: "Hugging Face"
    },
    {
        title: "Introducing the Hugging Face LLM Inference Container for Amazon SageMaker",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/sagemaker-huggingface-llm",
        source: "Hugging Face"
    },
    {
        title: "Introducing BERTopic Integration with the Hugging Face Hub",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/bertopic",
        source: "Hugging Face"
    },
    {
        title: "Optimizing Stable Diffusion for Intel CPUs with NNCF and ðŸ¤— Optimum",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/train-optimize-sd-intel",
        source: "Hugging Face"
    },
    {
        title: "Making LLMs even more accessible with bitsandbytes, 4-bit quantization and QLoRA",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/4bit-transformers-bitsandbytes",
        source: "Hugging Face"
    },
    {
        title: "Hugging Face Collaborates with Microsoft to launch Hugging Face Model Catalog on Azure",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/hugging-face-endpoints-on-azure",
        source: "Hugging Face"
    },
    {
        title: "Hugging Face and IBM partner on watsonx.ai, the next-generation enterprise studio for AI builders",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/huggingface-and-ibm",
        source: "Hugging Face"
    },
    {
        title: "ðŸ¶Safetensors audited as really safe and becoming the default",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/safetensors-security-audit",
        source: "Hugging Face"
    },
    {
        title: "Instruction-tuning Stable Diffusion with InstructPix2Pix",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/instruction-tuning-sd",
        source: "Hugging Face"
    },
    {
        title: "Large-scale Near-deduplication Behind BigCode",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/dedup",
        source: "Hugging Face"
    },
    {
        title: "Smaller is better: Q8-Chat, an efficient generative AI experience on Xeon",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/generative-ai-models-on-intel-cpu",
        source: "Hugging Face"
    },
    {
        title: "Hugging Face Selected for the French Data Protection Agency Enhanced Support Program",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/cnil",
        source: "Hugging Face"
    },
    {
        title: "Run a Chatgpt-like Chatbot on a Single GPU with ROCm",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/chatbot-amd-gpu",
        source: "Hugging Face"
    },
    {
        title: "Introducing RWKV - An RNN with the advantages of a transformer",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/rwkv",
        source: "Hugging Face"
    },
    {
        title: "Assisted Generation: a new direction toward low-latency text generation",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/assisted-generation",
        source: "Hugging Face"
    },
    {
        title: "Creating a Coding Assistant with StarCoder",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/starchat-alpha",
        source: "Hugging Face"
    },
    {
        title: "A Dive into Text-to-Video Models",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/text-to-video",
        source: "Hugging Face"
    },
    {
        title: "StarCoder: A State-of-the-Art LLM for Code",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/starcoder",
        source: "Hugging Face"
    },
    {
        title: "How to Install and Use the Hugging Face Unity API",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/unity-api",
        source: "Hugging Face"
    },
    {
        title: "Training a language model with ðŸ¤—Â Transformers using TensorFlow and TPUs",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/tf_tpu",
        source: "Hugging Face"
    },
    {
        title: "Running IF with ðŸ§¨ diffusers on a Free Tier Google Colab",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/if",
        source: "Hugging Face"
    },
    {
        title: "Databricks â¤ï¸ Hugging Face: up to 40% faster training and tuning of Large Language Models",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/databricks-case-study",
        source: "Hugging Face"
    },
    {
        title: "Introducing HuggingFace blog for Chinese speakers: Fostering Collaboration with the Chinese AI community",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/chinese-language-blog",
        source: "Hugging Face"
    },
    {
        title: "How to host a Unity game in a Space",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/unity-in-spaces",
        source: "Hugging Face"
    },
    {
        title: "Accelerating Hugging Face Transformers with AWS Inferentia2",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/accelerate-transformers-with-inferentia2",
        source: "Hugging Face"
    },
    {
        title: "Graph Classification with Transformers",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/graphml-classification",
        source: "Hugging Face"
    },
    {
        title: "Creating Privacy Preserving AI with Substra",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/owkin-substra",
        source: "Hugging Face"
    },
    {
        title: "Snorkel AI x Hugging Face: unlock foundation models for enterprises",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/snorkel-case-study",
        source: "Hugging Face"
    },
    {
        title: "StackLLaMA: A hands-on guide to train LLaMA with RLHF",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/stackllama",
        source: "Hugging Face"
    },
    {
        title: "Ethics and Society Newsletter #3: Ethical Openness at Hugging Face",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/ethics-soc-3",
        source: "Hugging Face"
    },
    {
        title: "Fast Inference on Large Language Models: BLOOMZ on Habana Gaudi2 Accelerator",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/habana-gaudi-2-bloom",
        source: "Hugging Face"
    },
    {
        title: "Accelerating Stable Diffusion Inference on Intel CPUs",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/stable-diffusion-inference-intel",
        source: "Hugging Face"
    },
    {
        title: "Federated Learning using Hugging Face and Flower",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/fl-with-flower",
        source: "Hugging Face"
    },
    {
        title: "Train your ControlNet with diffusers",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/train-your-controlnet",
        source: "Hugging Face"
    },
    {
        title: "Jupyter X Hugging Face",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/notebooks-hub",
        source: "Hugging Face"
    },
    {
        title: "Multivariate Probabilistic Time Series Forecasting with Informer",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/informer",
        source: "Hugging Face"
    },
    {
        title: "Fine-tuning 20B LLMs with RLHF on a 24GB consumer GPU",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/trl-peft",
        source: "Hugging Face"
    },
    {
        title: "New ViT and ALIGN Models From Kakao Brain",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/vit-align",
        source: "Hugging Face"
    },
    {
        title: "Using Machine Learning to Aid Survivors and Race through Time",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/using-ml-for-disasters",
        source: "Hugging Face"
    },
    {
        title: "ControlNet in ðŸ§¨ Diffusers",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/controlnet",
        source: "Hugging Face"
    },
    {
        title: "Ethical Guidelines for developing the Diffusers library",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/ethics-diffusers",
        source: "Hugging Face"
    },
    {
        title: "How Hugging Face Accelerated Development of Witty Works Writing Assistant",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/classification-use-cases",
        source: "Hugging Face"
    },
    {
        title: "Red-Teaming Large Language Models",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/red-teaming",
        source: "Hugging Face"
    },
    {
        title: "Swift ðŸ§¨Diffusers - Fast Stable Diffusion for Mac",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/fast-mac-diffusers",
        source: "Hugging Face"
    },
    {
        title: "Fetch Consolidates AI Tools and Saves 30% Development Time with Hugging Face on AWS",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/fetch-eap-case-study",
        source: "Hugging Face"
    },
    {
        title: "Hugging Face and AWS partner to make AI more accessible",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/aws-partnership",
        source: "Hugging Face"
    },
    {
        title: "Zero-shot image-to-text generation with BLIP-2",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/blip-2",
        source: "Hugging Face"
    },
    {
        title: "Why weâ€™re switching to Hugging Face Inference Endpoints, and maybe you should too",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/mantis-case-study",
        source: "Hugging Face"
    },
    {
        title: "Parameter-Efficient Fine-Tuning using ðŸ¤— PEFT",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/peft",
        source: "Hugging Face"
    },
    {
        title: "Speech Synthesis, Recognition, and More With SpeechT5",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/speecht5",
        source: "Hugging Face"
    },
    {
        title: "Generating Stories: AI for Game Development #5",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/ml-for-games-5",
        source: "Hugging Face"
    },
    {
        title: "Introducing âš”ï¸ AI vs. AI âš”ï¸ a deep reinforcement learning multi-agents competition system",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/aivsai",
        source: "Hugging Face"
    },
    {
        title: "Accelerating PyTorch Transformers with Intel Sapphire Rapids - part 2",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/intel-sapphire-rapids-inference",
        source: "Hugging Face"
    },
    {
        title: "A Dive into Vision-Language Models",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/vision_language_pretraining",
        source: "Hugging Face"
    },
    {
        title: "The State of Computer Vision at Hugging Face ðŸ¤—",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/cv_state",
        source: "Hugging Face"
    },
    {
        title: "2D Asset Generation: AI for Game Development #4",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/ml-for-games-4",
        source: "Hugging Face"
    },
    {
        title: "Using LoRA for Efficient Stable Diffusion Fine-Tuning",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/lora",
        source: "Hugging Face"
    },
    {
        title: "What Makes a Dialog Agent Useful?",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/dialog-agents",
        source: "Hugging Face"
    },
    {
        title: "Optimum+ONNX Runtime - Easier, Faster training for your Hugging Face models",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/optimum-onnxruntime-training",
        source: "Hugging Face"
    },
    {
        title: "3D Asset Generation: AI for Game Development #3",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/ml-for-games-3",
        source: "Hugging Face"
    },
    {
        title: "Universal Image Segmentation with Mask2Former and OneFormer",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/mask2former",
        source: "Hugging Face"
    },
    {
        title: "Welcome PaddlePaddle to the Hugging Face Hub",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/paddlepaddle",
        source: "Hugging Face"
    },
    {
        title: "Image Similarity with Hugging Face Datasets and Transformers",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/image-similarity",
        source: "Hugging Face"
    },
    {
        title: "AI for Game Development: Creating a Farming Game in 5 Days. Part 2",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/ml-for-games-2",
        source: "Hugging Face"
    },
    {
        title: "Introduction to Graph Machine Learning",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/intro-graphml",
        source: "Hugging Face"
    },
    {
        title: "AI for Game Development: Creating a Farming Game in 5 Days. Part 1",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/ml-for-games-1",
        source: "Hugging Face"
    },
    {
        title: "Accelerating PyTorch Transformers with Intel Sapphire Rapids - part 1",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/intel-sapphire-rapids",
        source: "Hugging Face"
    },
    {
        title: "Zero-shot image segmentation with CLIPSeg",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/clipseg-zero-shot",
        source: "Hugging Face"
    },
    {
        title: "Model Cards",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/model-cards",
        source: "Hugging Face"
    },
    {
        title: "Let's talk about biases in machine learning! Ethics and Society Newsletter #2",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/ethics-soc-2",
        source: "Hugging Face"
    },
    {
        title: "A Complete Guide to Audio Datasets",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/audio-datasets",
        source: "Hugging Face"
    },
    {
        title: "Faster Training and Inference: Habana GaudiÂ®2 vs Nvidia A100 80GB",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/habana-gaudi-2-benchmark",
        source: "Hugging Face"
    },
    {
        title: "Illustrating Reinforcement Learning from Human Feedback (RLHF)",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/rlhf",
        source: "Hugging Face"
    },
    {
        title: "From GPT2 to Stable Diffusion: Hugging Face arrives to the Elixir community",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/elixir-bumblebee",
        source: "Hugging Face"
    },
    {
        title: "Deep Learning with Proteins",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/deep-learning-with-proteins",
        source: "Hugging Face"
    },
    {
        title: "Using Stable Diffusion with Core ML on Apple Silicon",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/diffusers-coreml",
        source: "Hugging Face"
    },
    {
        title: "Probabilistic Time Series Forecasting with ðŸ¤— Transformers",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/time-series-transformers",
        source: "Hugging Face"
    },
    {
        title: "VQ-Diffusion",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/vq-diffusion",
        source: "Hugging Face"
    },
    {
        title: "We are hiring interns!",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/interns-2023",
        source: "Hugging Face"
    },
    {
        title: "Diffusion Models Live Event",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/diffusion-models-event",
        source: "Hugging Face"
    },
    {
        title: "Director of Machine Learning Insights [Part 4]",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/ml-director-insights-4",
        source: "Hugging Face"
    },
    {
        title: "Accelerating Document AI",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/document-ai",
        source: "Hugging Face"
    },
    {
        title: "An overview of inference solutions on Hugging Face",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/inference-update",
        source: "Hugging Face"
    },
    {
        title: "Hugging Face Machine Learning Demos on arXiv",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/arxiv",
        source: "Hugging Face"
    },
    {
        title: "Sentiment Analysis on Encrypted Data with Homomorphic Encryption",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/sentiment-analysis-fhe",
        source: "Hugging Face"
    },
    {
        title: "Generating Human-level Text with Contrastive Search in Transformers ðŸ¤—",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/introducing-csearch",
        source: "Hugging Face"
    },
    {
        title: "Introducing our new pricing",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/pricing-update",
        source: "Hugging Face"
    },
    {
        title: "Training Stable Diffusion with Dreambooth using Diffusers",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/dreambooth",
        source: "Hugging Face"
    },
    {
        title: "Fine-Tune Whisper For Multilingual ASR with ðŸ¤— Transformers",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/fine-tune-whisper",
        source: "Hugging Face"
    },
    {
        title: "Accelerate your models with ðŸ¤— Optimum Intel and OpenVINO",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/openvino",
        source: "Hugging Face"
    },
    {
        title: "Evaluating Language Model Bias with ðŸ¤— Evaluate",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/evaluating-llm-bias",
        source: "Hugging Face"
    },
    {
        title: "From PyTorch DDP to Accelerate to Trainer, mastery of distributed training with ease",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/pytorch-ddp-accelerate-transformers",
        source: "Hugging Face"
    },
    {
        title: "MTEB: Massive Text Embedding Benchmark",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/mteb",
        source: "Hugging Face"
    },
    {
        title: "Getting Started with Hugging Face Inference Endpoints",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/inference-endpoints",
        source: "Hugging Face"
    },
    {
        title: "ðŸ§¨ Stable Diffusion  in JAX / Flax !",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/stable_diffusion_jax",
        source: "Hugging Face"
    },
    {
        title: "Optimization story: Bloom inference",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/bloom-inference-optimization",
        source: "Hugging Face"
    },
    {
        title: "Introducing DOI: the Digital Object Identifier to Datasets and Models",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/introducing-doi",
        source: "Hugging Face"
    },
    {
        title: "Japanese Stable Diffusion",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/japanese-stable-diffusion",
        source: "Hugging Face"
    },
    {
        title: "Very Large Language Models and How to Evaluate Them",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/zero-shot-eval-on-the-hub",
        source: "Hugging Face"
    },
    {
        title: "Image Classification with AutoTrain",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/autotrain-image-classification",
        source: "Hugging Face"
    },
    {
        title: "How ðŸ¤— Accelerate runs very large models thanks to PyTorch",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/accelerate-large-models",
        source: "Hugging Face"
    },
    {
        title: "SetFit: Efficient Few-Shot Learning Without Prompts",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/setfit",
        source: "Hugging Face"
    },
    {
        title: "Ethics and Society Newsletter #1",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/ethics-soc-1",
        source: "Hugging Face"
    },
    {
        title: "Incredibly Fast BLOOM Inference with DeepSpeed and Accelerate",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/bloom-inference-pytorch-scripts",
        source: "Hugging Face"
    },
    {
        title: "What's new in Diffusers? ðŸŽ¨",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/diffusers-2nd-month",
        source: "Hugging Face"
    },
    {
        title: "Train your first Decision Transformer",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/train-decision-transformers",
        source: "Hugging Face"
    },
    {
        title: "How to train a Language Model with Megatron-LM",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/megatron-training",
        source: "Hugging Face"
    },
    {
        title: "OpenRAIL: Towards open and responsible AI licensing frameworks",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/open_rail",
        source: "Hugging Face"
    },
    {
        title: "Visualize proteins on Hugging Face Spaces",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/spaces_3dmoljs",
        source: "Hugging Face"
    },
    {
        title: "Stable Diffusion with ðŸ§¨ Diffusers",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/stable_diffusion",
        source: "Hugging Face"
    },
    {
        title: "Pre-Train BERT with Hugging Face Transformers and Habana Gaudi",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/pretraining-bert",
        source: "Hugging Face"
    },
    {
        title: "Deploying ðŸ¤— ViT on Vertex AI",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/deploy-vertex-ai",
        source: "Hugging Face"
    },
    {
        title: "Deep Dive: Vision Transformers On Hugging Face Optimum Graphcore",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/vision-transformers",
        source: "Hugging Face"
    },
    {
        title: "A Gentle Introduction to 8-bit Matrix Multiplication for transformers at scale using transformers, accelerate and bitsandbytes",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/hf-bitsandbytes-integration",
        source: "Hugging Face"
    },
    {
        title: "Introducing Skops",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/skops",
        source: "Hugging Face"
    },
    {
        title: "Hugging Face's TensorFlow Philosophy",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/tensorflow-philosophy",
        source: "Hugging Face"
    },
    {
        title: "Deploying ðŸ¤— ViT on Kubernetes with TF Serving",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/deploy-tfserving-kubernetes",
        source: "Hugging Face"
    },
    {
        title: "Train and Fine-Tune Sentence Transformers Models",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/how-to-train-sentence-transformers",
        source: "Hugging Face"
    },
    {
        title: "Proximal Policy Optimization (PPO)",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/deep-rl-ppo",
        source: "Hugging Face"
    },
    {
        title: "Introducing the Private Hub: A New Way to Build With Machine Learning",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/introducing-private-hub",
        source: "Hugging Face"
    },
    {
        title: "NystrÃ¶mformer: Approximating self-attention in linear time and memory via the NystrÃ¶m method",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/nystromformer",
        source: "Hugging Face"
    },
    {
        title: "Comments on U.S. National AI Research Resource Interim Report",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/us-national-ai-research-resource",
        source: "Hugging Face"
    },
    {
        title: "Introducing new audio and vision documentation in ðŸ¤— Datasets",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/datasets-docs-update",
        source: "Hugging Face"
    },
    {
        title: "Faster Text Generation with TensorFlow and XLA",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/tf-xla-generate",
        source: "Hugging Face"
    },
    {
        title: "Deploying TensorFlow Vision Models in Hugging Face with TF Serving",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/tf-serving-vision",
        source: "Hugging Face"
    },
    {
        title: "Advantage Actor Critic (A2C)",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/deep-rl-a2c",
        source: "Hugging Face"
    },
    {
        title: "How to train your model dynamically using adversarial data",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/mnist-adversarial",
        source: "Hugging Face"
    },
    {
        title: "The Technology Behind BLOOM Training",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/bloom-megatron-deepspeed",
        source: "Hugging Face"
    },
    {
        title: "Building a Playlist Generator with Sentence Transformers",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/playlist-generator",
        source: "Hugging Face"
    },
    {
        title: "Introducing The World's Largest Open Multilingual Language Model: BLOOM",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/bloom",
        source: "Hugging Face"
    },
    {
        title: "Getting Started with Sentiment Analysis on Twitter",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/sentiment-analysis-twitter",
        source: "Hugging Face"
    },
    {
        title: "Policy Gradient with PyTorch",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/deep-rl-pg",
        source: "Hugging Face"
    },
    {
        title: "Liftoff! How to get started with your first ML project ðŸš€",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/your-first-ml-project",
        source: "Hugging Face"
    },
    {
        title: "Accelerate Large Model Training using DeepSpeed",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/accelerate-deepspeed",
        source: "Hugging Face"
    },
    {
        title: "Announcing Evaluation on the Hub",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/eval-on-the-hub",
        source: "Hugging Face"
    },
    {
        title: "Getting Started With Embeddings",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/getting-started-with-embeddings",
        source: "Hugging Face"
    },
    {
        title: "Convert Transformers to ONNX with Hugging Face Optimum",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/convert-transformers-to-onnx",
        source: "Hugging Face"
    },
    {
        title: "Intel and Hugging Face Partner to Democratize Machine Learning Hardware Acceleration",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/intel",
        source: "Hugging Face"
    },
    {
        title: "Director of Machine Learning Insights [Part 3: Finance Edition]",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/ml-director-insights-3",
        source: "Hugging Face"
    },
    {
        title: "The Annotated Diffusion Model",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/annotated-diffusion",
        source: "Hugging Face"
    },
    {
        title: "Deep Q-Learning with Space Invaders",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/deep-rl-dqn",
        source: "Hugging Face"
    },
    {
        title: "Graphcore and Hugging Face Launch New Lineup of IPU-Ready Transformers",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/graphcore-update",
        source: "Hugging Face"
    },
    {
        title: "Introducing Pull Requests and Discussions ðŸ¥³",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/community-update",
        source: "Hugging Face"
    },
    {
        title: "Efficient Table Pre-training without Real Data: An Introduction to TAPEX",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/tapex",
        source: "Hugging Face"
    },
    {
        title: "An Introduction to Q-Learning Part 2/2",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/deep-rl-q-part2",
        source: "Hugging Face"
    },
    {
        title: "How Sempre Health is leveraging the Expert Acceleration Program to accelerate their ML roadmap",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/sempre-health-eap-case-study",
        source: "Hugging Face"
    },
    {
        title: "Putting ethical principles at the core of the research lifecycle",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/ethical-charter-multimodal",
        source: "Hugging Face"
    },
    {
        title: "An Introduction to Q-Learning Part 1",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/deep-rl-q-part1",
        source: "Hugging Face"
    },
    {
        title: "Machine Learning Experts - Sasha Luccioni",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/sasha-luccioni-interview",
        source: "Hugging Face"
    },
    {
        title: "Announcing the Hugging Face Fellowship Program",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/fellowship",
        source: "Hugging Face"
    },
    {
        title: "Gradio 3.0 is Out!",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/gradio-blocks",
        source: "Hugging Face"
    },
    {
        title: "Director of Machine Learning Insights [Part 2: SaaS Edition]",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/ml-director-insights-2",
        source: "Hugging Face"
    },
    {
        title: "Student Ambassador Programâ€™s call for applications is open!",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/ambassadors",
        source: "Hugging Face"
    },
    {
        title: "Accelerated Inference with Optimum and Transformers Pipelines",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/optimum-inference",
        source: "Hugging Face"
    },
    {
        title: "We Raised $100 Million for Open & Collaborative Machine Learning ðŸš€",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/series-c",
        source: "Hugging Face"
    },
    {
        title: "Welcome fastai to the Hugging Face Hub",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/fastai",
        source: "Hugging Face"
    },
    {
        title: "An Introduction to Deep Reinforcement Learning",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/deep-rl-intro",
        source: "Hugging Face"
    },
    {
        title: "Accelerate Large Model Training using PyTorch Fully Sharded Data Parallel",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/pytorch-fsdp",
        source: "Hugging Face"
    },
    {
        title: "Opinion Classification with Kili and HuggingFace AutoTrain",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/opinion-classification-with-kili",
        source: "Hugging Face"
    },
    {
        title: "Director of Machine Learning Insights",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/ml-director-insights",
        source: "Hugging Face"
    },
    {
        title: "Getting Started with Transformers on Habana Gaudi",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/getting-started-habana",
        source: "Hugging Face"
    },
    {
        title: "Introducing Hugging Face for Education ðŸ¤—",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/education",
        source: "Hugging Face"
    },
    {
        title: "Supercharged Customer Service with Machine Learning",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/supercharge-customer-service-with-machine-learning",
        source: "Hugging Face"
    },
    {
        title: "CO2 Emissions and the ðŸ¤— Hub: Leading the Charge",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/carbon-emissions-on-the-hub",
        source: "Hugging Face"
    },
    {
        title: "Machine Learning Experts - Lewis Tunstall",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/lewis-tunstall-interview",
        source: "Hugging Face"
    },
    {
        title: "Habana Labs and Hugging Face Partner to Accelerate Transformer Model Training",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/habana",
        source: "Hugging Face"
    },
    {
        title: "~Don't~ Repeat Yourself",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/transformers-design-philosophy",
        source: "Hugging Face"
    },
    {
        title: "Introducing Decision Transformers on Hugging Face ðŸ¤—",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/decision-transformers",
        source: "Hugging Face"
    },
    {
        title: "Machine Learning Experts - Margaret Mitchell",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/meg-mitchell-interview",
        source: "Hugging Face"
    },
    {
        title: "Announcing the ðŸ¤— AI Research Residency Program",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/ai-residency",
        source: "Hugging Face"
    },
    {
        title: "Fine-Tune a Semantic Segmentation Model with a Custom Dataset",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/fine-tune-segformer",
        source: "Hugging Face"
    },
    {
        title: "Accelerate BERT inference with Hugging Face Transformers and AWS Inferentia",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/bert-inferentia-sagemaker",
        source: "Hugging Face"
    },
    {
        title: "Image search with ðŸ¤— datasets",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/image-search-datasets",
        source: "Hugging Face"
    },
    {
        title: "Guiding Text Generation with Constrained Beam Search in ðŸ¤— Transformers",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/constrained-beam-search",
        source: "Hugging Face"
    },
    {
        title: "BERT 101 - State Of The Art NLP Model Explained",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/bert-101",
        source: "Hugging Face"
    },
    {
        title: "Fine-Tune ViT for Image Classification with ðŸ¤— Transformers",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/fine-tune-vit",
        source: "Hugging Face"
    },
    {
        title: "Getting Started with Sentiment Analysis using Python",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/sentiment-analysis-python",
        source: "Hugging Face"
    },
    {
        title: "Making automatic speech recognition work on large files with Wav2Vec2 in ðŸ¤— Transformers",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/asr-chunking",
        source: "Hugging Face"
    },
    {
        title: "Supercharged Searching on the ðŸ¤— Hub",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/searching-the-hub",
        source: "Hugging Face"
    },
    {
        title: "Welcome Stable-baselines3 to the Hugging Face Hub ðŸ¤—",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/sb3",
        source: "Hugging Face"
    },
    {
        title: "Case Study: Millisecond Latency using Hugging Face Infinity and modern CPUs",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/infinity-cpu-performance",
        source: "Hugging Face"
    },
    {
        title: "Boosting Wav2Vec2 with n-grams in ðŸ¤— Transformers",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/wav2vec2-with-ngram",
        source: "Hugging Face"
    },
    {
        title: "Deploy GPT-J 6B for inference using  Hugging Face Transformers and Amazon SageMaker",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/gptj-sagemaker",
        source: "Hugging Face"
    },
    {
        title: "Active Learning with AutoNLP and Prodigy",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/autonlp-prodigy",
        source: "Hugging Face"
    },
    {
        title: "Gradio is joining Hugging Face!",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/gradio-joins-hf",
        source: "Hugging Face"
    },
    {
        title: "Perceiver IO: a scalable, fully-attentional model that works on any modality",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/perceiver",
        source: "Hugging Face"
    },
    {
        title: "Training CodeParrot ðŸ¦œ from Scratch",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/codeparrot",
        source: "Hugging Face"
    },
    {
        title: "Introducing Snowball Fight â˜ƒï¸, our first ML-Agents environment",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/snowball-fight",
        source: "Hugging Face"
    },
    {
        title: "Getting Started with Hugging Face Transformers for IPUs with Optimum",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/graphcore-getting-started",
        source: "Hugging Face"
    },
    {
        title: "Introducing the Data Measurements Tool: an Interactive Tool for Looking at Datasets",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/data-measurements-tool",
        source: "Hugging Face"
    },
    {
        title: "Accelerating PyTorch distributed fine-tuning with Intel technologies",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/accelerating-pytorch",
        source: "Hugging Face"
    },
    {
        title: "Fine-Tune XLSR-Wav2Vec2 for low-resource ASR with ðŸ¤— Transformers",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/fine-tune-xlsr-wav2vec2",
        source: "Hugging Face"
    },
    {
        title: "Scaling up BERT-like model Inference on modern CPU  - Part 2",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/bert-cpu-scaling-part-2",
        source: "Hugging Face"
    },
    {
        title: "Course Launch Community Event",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/course-launch-event",
        source: "Hugging Face"
    },
    {
        title: "Large Language Models: A New Moore's Law?",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/large-language-models",
        source: "Hugging Face"
    },
    {
        title: "Train a Sentence Embedding Model with 1B Training Pairs",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/1b-sentence-embeddings",
        source: "Hugging Face"
    },
    {
        title: "The Age of Machine Learning As Code HasÂ Arrived",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/the-age-of-ml-as-code",
        source: "Hugging Face"
    },
    {
        title: "Fine tuning CLIP with Remote Sensing (Satellite) images and captions",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/fine-tune-clip-rsicd",
        source: "Hugging Face"
    },
    {
        title: "Hosting your Models and Datasets on Hugging Face Spaces using Streamlit",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/streamlit-spaces",
        source: "Hugging Face"
    },
    {
        title: "Showcase Your Projects in Spaces using Gradio",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/gradio-spaces",
        source: "Hugging Face"
    },
    {
        title: "Summer at Hugging Face",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/summer-at-huggingface",
        source: "Hugging Face"
    },
    {
        title: "Hugging Face and Graphcore partner for IPU-optimized Transformers",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/graphcore",
        source: "Hugging Face"
    },
    {
        title: "Introducing Optimum: The Optimization Toolkit for Transformers at Scale",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/hardware-partners-program",
        source: "Hugging Face"
    },
    {
        title: "Deep Learning over the Internet: Training Language Models Collaboratively",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/collaborative-training",
        source: "Hugging Face"
    },
    {
        title: "Welcome spaCy to the Hugging Face Hub",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/spacy",
        source: "Hugging Face"
    },
    {
        title: "Deploy Hugging Face models easily with Amazon SageMaker",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/deploy-hugging-face-models-easily-with-amazon-sagemaker",
        source: "Hugging Face"
    },
    {
        title: "Sentence Transformers in the Hugging Face Hub",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/sentence-transformers-in-the-hub",
        source: "Hugging Face"
    },
    {
        title: "Few-shot learning in practice: GPT-Neo and the ðŸ¤— Accelerated Inference API",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/few-shot-learning-gpt-neo-and-inference-api",
        source: "Hugging Face"
    },
    {
        title: "Using & Mixing Hugging Face Models with Gradio 2.0",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/gradio",
        source: "Hugging Face"
    },
    {
        title: "Scaling-up BERT Inference on CPU (Part 1)",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/bert-cpu-scaling-part-1",
        source: "Hugging Face"
    },
    {
        title: "Introducing ðŸ¤— Accelerate",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/accelerate-library",
        source: "Hugging Face"
    },
    {
        title: "Distributed Training: Train BART/T5 for Summarization using ðŸ¤— Transformers and Amazon SageMaker",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/sagemaker-distributed-training-seq2seq",
        source: "Hugging Face"
    },
    {
        title: "Understanding BigBird's Block Sparse Attention",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/big-bird",
        source: "Hugging Face"
    },
    {
        title: "The Partnership: Amazon SageMaker and Hugging Face",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/the-partnership-amazon-sagemaker-and-hugging-face",
        source: "Hugging Face"
    },
    {
        title: "My Journey to a serverless transformers pipeline on Google Cloud",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/how-to-deploy-a-pipeline-to-google-clouds",
        source: "Hugging Face"
    },
    {
        title: "Fine-Tune Wav2Vec2 for English ASR in Hugging Face with ðŸ¤— Transformers",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/fine-tune-wav2vec2-english",
        source: "Hugging Face"
    },
    {
        title: "Hugging Face Reads, Feb. 2021 - Long-range Transformers",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/long-range-transformers",
        source: "Hugging Face"
    },
    {
        title: "Simple considerations for simple people building fancy neural networks",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/simple-considerations",
        source: "Hugging Face"
    },
    {
        title: "Retrieval Augmented Generation with Huggingface Transformers and Ray",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/ray-rag",
        source: "Hugging Face"
    },
    {
        title: "Hugging Face on PyTorch / XLA TPUs",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/pytorch-xla",
        source: "Hugging Face"
    },
    {
        title: "Faster TensorFlow models in Hugging Face Transformers",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/tf-serving",
        source: "Hugging Face"
    },
    {
        title: "Fit More and Train Faster With ZeRO via DeepSpeed and FairScale",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/zero-deepspeed-fairscale",
        source: "Hugging Face"
    },
    {
        title: "How we sped up transformer inference 100x for ðŸ¤— API customers",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/accelerated-inference",
        source: "Hugging Face"
    },
    {
        title: "Leveraging Pre-trained Language Model Checkpoints for Encoder-Decoder Models",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/warm-starting-encoder-decoder",
        source: "Hugging Face"
    },
    {
        title: "Porting fairseq wmt19 translation system to transformers",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/porting-fsmt",
        source: "Hugging Face"
    },
    {
        title: "Hyperparameter Search with Transformers and Ray Tune",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/ray-tune",
        source: "Hugging Face"
    },
    {
        title: "Transformer-based Encoder-Decoder Models",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/encoder-decoder",
        source: "Hugging Face"
    },
    {
        title: "Block Sparse Matrices for Smaller and Faster Language Models",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/pytorch_block_sparse",
        source: "Hugging Face"
    },
    {
        title: "The Reformer - Pushing the limits of language modeling",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/reformer",
        source: "Hugging Face"
    },
    {
        title: "How to generate text: using different decoding methods for language generation with Transformers",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/how-to-generate",
        source: "Hugging Face"
    },
    {
        title: "How to train a new language model from scratch using Transformers and Tokenizers",
        summary: "Sin descripcion disponible",
        link: "https://huggingface.co/blog/how-to-train",
        source: "Hugging Face"
    },
    {
        title: "How AI is turning the Iran conflict into theater",
        summary: "This story originally appeared in The Algorithm, our weekly newsletter on AI. To get stories like this in your inbox first,Â sign up here. â€œAnyone wanna host a get together in SF and pull this up on...",
        link: "https://www.technologyreview.com/2026/03/09/1134063/how-ai-is-turning-the-iran-conflict-into-theater/",
        source: "MIT Tech Review"
    },
    {
        title: "Is the Pentagon allowed to surveil Americans with AI?",
        summary: "The ongoing public feud between the Department of Defense and the AI company Anthropic has raised a deep and still unanswered question: Does the law actually allow the US government to conduct mass su...",
        link: "https://www.technologyreview.com/2026/03/06/1134012/is-the-pentagon-allowed-to-surveil-americans-with-ai/",
        source: "MIT Tech Review"
    },
    {
        title: "Online harassment is entering its AI era",
        summary: "Scott Shambaugh didnâ€™t think twice when he denied an AI agentâ€™s request to contribute to matplotlib, a software library that he helps manage. Like many open-source projects, matplotlib has been ov...",
        link: "https://www.technologyreview.com/2026/03/05/1133962/online-harassment-is-entering-its-ai-era/",
        source: "MIT Tech Review"
    },
    {
        title: "Bridging the operational AI gap",
        summary: "The transformational potential of AI is already well established. Enterprise use cases are building momentum and organizations are transitioning from pilot projects to AI in production. Companies are ...",
        link: "https://www.technologyreview.com/2026/03/04/1133642/bridging-the-operational-ai-gap/",
        source: "MIT Tech Review"
    },
    {
        title: "OpenAIâ€™s “compromise” with the Pentagon is what Anthropic feared",
        summary: "On February 28, OpenAI announced it had reached a deal that will allow the US military to use its technologies in classified settings. CEO Sam Altman said the negotiations, which the company began pur...",
        link: "https://www.technologyreview.com/2026/03/02/1133850/openais-compromise-with-the-pentagon-is-what-anthropic-feared/",
        source: "MIT Tech Review"
    },
    {
        title: "I checked out one of the biggest anti-AI protests yet",
        summary: "Pull the plug! Pull the plug! Stop the slop! Stop the slop! For a few hours this Saturday, February 28, I watched as a couple of hundred anti-AI protesters marched through Londonâ€™s Kingâ€™s Cross te...",
        link: "https://www.technologyreview.com/2026/03/02/1133814/i-checked-out-londons-biggest-ever-anti-ai-protest/",
        source: "MIT Tech Review"
    },
    {
        title: "AI is rewiring how the worldâ€™s best Go players think",
        summary: "Burrowed in the alleys of Hongik-dong, a hushed residential neighborhood in eastern Seoul, is a faded stone-tiled building stamped â€œKorea Baduk Association,â€ the governing body for professional Go...",
        link: "https://www.technologyreview.com/2026/02/27/1133624/ai-is-rewiring-how-the-worlds-best-go-players-think/",
        source: "MIT Tech Review"
    },
    {
        title: "Finding value with AI and Industry 5.0 transformation",
        summary: "For years, Industry 4.0 transformation has centered on the convergence of intelligent technologies like AI, cloud, the internet of things, robotics, and digital twins. Industry 5.0 marks a pivotal shi...",
        link: "https://www.technologyreview.com/2026/02/26/1133707/finding-value-with-ai-and-industry-5-0-transformation/",
        source: "MIT Tech Review"
    },
    {
        title: "The human work behind humanoid robots is being hidden",
        summary: "This story originally appeared in The Algorithm, our weekly newsletter on AI. To get stories like this in your inbox first,Â sign up here. In January, Nvidiaâ€™s Jensen Huang, the head of the worldâ€™...",
        link: "https://www.technologyreview.com/2026/02/23/1133508/the-human-work-behind-humanoid-robots-is-being-hidden/",
        source: "MIT Tech Review"
    },
    {
        title: "Microsoft has a new plan to prove whatâ€™s real and whatâ€™s AI online",
        summary: "AI-enabled deception now permeates our online lives. There are the high-profile cases you may easily spot, like when White House officials recently shared a manipulated image of a protester in Minneso...",
        link: "https://www.technologyreview.com/2026/02/19/1133360/microsoft-has-a-new-plan-to-prove-whats-real-and-whats-ai-online/",
        source: "MIT Tech Review"
    },
    {
        title: "The usability imperative for securing digital asset devices",
        summary: "When Tony Fadell started working on the iPod, usability often trumped security. The result was an iterative process. Every time someone would find a security weakness or a way to hack the device, the ...",
        link: "https://www.technologyreview.com/2026/03/09/1132352/the-usability-imperative-for-securing-digital-asset-devices/",
        source: "MIT Tech"
    },
    {
        title: "The Download: murky AI surveillance laws, and the White House cracks down on defiant labs",
        summary: "This is today&#8217;s edition of The Download, our weekday newsletter that provides a daily dose of what&#8217;s going on in the world of technology. Is the Pentagon allowed to surveil Americans with ...",
        link: "https://www.technologyreview.com/2026/03/09/1134050/the-download-ai-surveillance-laws-white-house-cracks-down-defiant-labs/",
        source: "MIT Tech"
    },
    {
        title: "The Download: 10 things that matter in AI, plus Anthropic’s plan to sue the Pentagon",
        summary: "This is today&#8217;s edition of The Download, our weekday newsletter that provides a daily dose of what&#8217;s going on in the world of technology. Coming soon: our 10 Things That Matter in AI Right...",
        link: "https://www.technologyreview.com/2026/03/06/1133989/the-download-10-things-that-matter-in-ai-anthropics-plan-sue-pentagon/",
        source: "MIT Tech"
    },
    {
        title: "The Download: an AI agent’s hit piece, and preventing lightning",
        summary: "This is today&#8217;s edition of The Download, our weekday newsletter that provides a daily dose of what&#8217;s going on in the world of technology. Online harassment is entering its AI era Scott Sha...",
        link: "https://www.technologyreview.com/2026/03/05/1133968/the-download-ai-agent-hit-piece-preventing-lightning/",
        source: "MIT Tech"
    },
    {
        title: "How much wildfire prevention is too much?",
        summary: "The race to prevent the worst wildfires has been an increasingly high-tech one. Companies are proposing AI fire detection systems and drones that can stamp out early blazes. And now, one Canadian star...",
        link: "https://www.technologyreview.com/2026/03/05/1133960/wildfire-prevention-limits/",
        source: "MIT Tech"
    },
    {
        title: "The Download: Earth’s rumblings, and AI for strikes on Iran",
        summary: "This is today&#8217;s edition of The Download, our weekday newsletter that provides a daily dose of what&#8217;s going on in the world of technology. Listen to Earthâ€™s rumbling, secret soundtrack Th...",
        link: "https://www.technologyreview.com/2026/03/04/1133942/the-download-earths-rumblings-and-ai-for-strikes-on-iran/",
        source: "MIT Tech"
    },
    {
        title: "Your Espresso Machine Doesnâ€™t Have to Be Fancy to Make Good Coffee",
        summary: "A former barista explains why your espresso machine doesn't have to be fancy to make quality coffee.",
        link: "https://www.wired.com/story/casabrews-5700-espresso-machine-java-base/",
        source: "Wired"
    },
    {
        title: "Our Favorite Wireless Headphones Are $60 Off",
        summary: "The Sony WH-1000XM6 get a noticeable markdown for a limited time.",
        link: "https://www.wired.com/story/sony-wh-1000xm6-deal-326/",
        source: "Wired"
    },
    {
        title: "Anthropic Sues Department of Defense Over Supply-Chain-Risk Designation",
        summary: "The Claude chatbot developer says the Trump administration overstepped by escalating a contract dispute into a federal ban on the companyâ€™s technology.",
        link: "https://www.wired.com/story/anthropic-sues-department-of-defense-over-supply-chain-risk-designation/",
        source: "Wired"
    },
    {
        title: "Best Base Layers (2026): Merino Wool, Synthetic, and More",
        summary: "Whether youâ€™re layering up for winter cold or looking for an ultralight summer system, Iâ€™ve tested and found the best base layers for all your outdoor adventures.",
        link: "https://www.wired.com/gallery/best-base-layers/",
        source: "Wired"
    },
    {
        title: "Feeld Was a Dating App for the Freaks. Now Some People Call It â€˜Normie Hellâ€™",
        summary: "The app that catered to unconventional kinks is gaining steam among daters with vanilla preferencesâ€”and some arenâ€™t happy about it.",
        link: "https://www.wired.com/story/feeld-was-a-dating-app-for-the-freaks-now-some-people-call-it-normie-hell/",
        source: "Wired"
    },
    {
        title: "Apple iPhone 17e Review: MagSafe Makes a Difference",
        summary: "A bump in storage and the addition of MagSafe make Appleâ€™s cheapest iPhone a better value proposition than its predecessor.",
        link: "https://www.wired.com/review/apple-iphone-17e/",
        source: "Wired"
    },
    {
        title: "Best Sonos Speakers (2026): Soundbars, Headphones, Dolby Atmos, and More",
        summary: "From smart speakert so soundbars, Sonos makes the best streaming speakers you can buy. These are my personal favorites.",
        link: "https://www.wired.com/gallery/best-sonos-speakers-buying-guide/",
        source: "Wired"
    },
    {
        title: "Hatchâ€™s Sale Has the Restore 3, Rest, and Rest+ All Discounted",
        summary: "Hatchâ€™s sunrise alarm clock is popular for a reason, and itâ€™s on sale this week. An older-model sound machine for babies is on sale too.",
        link: "https://www.wired.com/story/hatch-sleep-week-sale-2026/",
        source: "Wired"
    },
    {
        title: "Donâ€™t Expect Big Surprises in the Governmentâ€™s Alien Files",
        summary: "Donald Trump has ordered the release of files related to aliens, UAP, and UFOs. If previous disclosures are any indication, get ready for a letdown.",
        link: "https://www.wired.com/story/dont-expect-big-surprises-in-the-governments-alien-files/",
        source: "Wired"
    },
    {
        title: "Are Smart Beds Worth It? A Certified Sleep Science Coach Weighs In (2026)",
        summary: "These tech-packed beds can adjust firmness, track your sleep, and regulate temperature automatically. Based on my testing, here's what's worth the investment.",
        link: "https://www.wired.com/gallery/best-smart-beds/",
        source: "Wired"
    },
    {
        title: "Why RFKâ€™s CDC Is Endorsing â€˜Shared Decisionmakingâ€™ for Vaccines",
        summary: "The MAHA movement is recasting the termâ€”developed in the 1980s to help protect patients against paternalistic medicineâ€”in service of its own agenda.",
        link: "https://www.wired.com/story/why-rfks-cdc-is-endorsing-shared-decision-making-for-vaccines/",
        source: "Wired"
    },
    {
        title: "Can AI Kill the Venture Capitalist?",
        summary: "VCs are betting that artificial intelligence will disrupt nearly every industry in the world. Are they prepared for it to disrupt their own?",
        link: "https://www.wired.com/story/ai-kill-venture-capital/",
        source: "Wired"
    },
    {
        title: "H&R Block Coupon: $50 Off Assisted Tax Prep",
        summary: "When you visit your local H&R Block store or get help from a tax pro online, you can save up to $50 when you use one of our (unique) codes.",
        link: "https://www.wired.com/story/hr-block-coupon/",
        source: "Wired"
    },
    {
        title: "How to Run Ethernet Cables to Your Router and Keep Them Tidy",
        summary: "Boosting internet speeds around your home is easy with Ethernet cables, and these tips will help you keep things neat.",
        link: "https://www.wired.com/story/how-to-run-ethernet-cables-around-your-home/",
        source: "Wired"
    },
    {
        title: "Force Your MacBook to Only Charge up to 80 Percent (and Why You Should)",
        summary: "Laptop batteries lag in performance as they age. But you can slow down their deterioration by tweaking your Macâ€™s charging settings.",
        link: "https://www.wired.com/story/only-charge-your-macbook-to-80-percent/",
        source: "Wired"
    },
    {
        title: "Fender Mix Headphones Review: Modular Over-Ears",
        summary: "Say goodbye to disposable headphones with Fenderâ€™s customizable and replaceable parts.",
        link: "https://www.wired.com/review/fender-audio-mix/",
        source: "Wired"
    },
    {
        title: "A Certified Sleep Coach Shares the Sleep Week Deals Sheâ€™s Adding to Cart (2026)",
        summary: "From mattresses to sateen sheets, these exclusive deals on my personal picks can help you upgrade your sleep for less.",
        link: "https://www.wired.com/story/sleep-week-deals-2026/",
        source: "Wired"
    },
    {
        title: "The Moka Pot Is the Best Way to Brew Coffee (2026)",
        summary: "Bialettiâ€™s timeless design doesnâ€™t just look good. It makes an incredible cup thatâ€™s perfect to keep you awake through the time change.",
        link: "https://www.wired.com/story/moka-pot-best-way-to-brew-coffee/",
        source: "Wired"
    },
    {
        title: "Best Sunrise Alarm Clock (2026): Lumie, Hatch, WiiM",
        summary: "Iâ€™ve never been a morning person. This bedside gadget is the only thing thatâ€™s ever changed that.",
        link: "https://www.wired.com/story/should-you-get-a-sunrise-alarm-clock/",
        source: "Wired"
    },
    {
        title: "Left-Handed People Are More Competitive, Says Science",
        summary: "A recent study suggests that left-handed people have an advantage in competitive contexts, while righties tend to cooperate better.",
        link: "https://www.wired.com/story/left-handed-people-are-more-competitive-says-science/",
        source: "Wired"
    },
    {
        title: "Why the Ratio Four Series Two Is What I Use to Test New Coffees",
        summary: "A new generation of home machines has made good old drip coffee a place for connoisseurs. For more than a year, the Four is the source of my morning cup.",
        link: "https://www.wired.com/story/ratio-four-drip-coffee-java-base/",
        source: "Wired"
    },
    {
        title: "The WIRED Guide to Wires: How to Manage the Mess of Cables Around Your Desk",
        summary: "You need to sort out that ratâ€™s nest of cables under your desk. These cable management tips and products can help you do it.",
        link: "https://www.wired.com/story/fix-the-dangling-wires-behind-your-desk/",
        source: "Wired"
    },
    {
        title: "The Best MIDI Controllers for Synths, Guitars, and More (2026)",
        summary: "Want to digitally control your favorite instruments? These tools will help.",
        link: "https://www.wired.com/gallery/best-midi-controllers/",
        source: "Wired"
    },
    {
        title: "Best Mid Layer for Hiking, Backpacking, and Travel (2026)",
        summary: "Should you get a high-tech jacket like a grid fleece, or stick with tried and true merino wool? We found the warmest, lightest mid layers for your next adventure.",
        link: "https://www.wired.com/gallery/best-mid-layers/",
        source: "Wired"
    },
    {
        title: "CBP Used Online Ad Data to Track Phone Locations",
        summary: "Plus: Proton helped the FBI identify a protester, the Leakbase cybercrime forum was busted in an international operation, and more.",
        link: "https://www.wired.com/story/cbp-used-online-ad-data-to-track-phone-locations/",
        source: "Wired"
    },
    {
        title: "How Each Gulf Country Is Intercepting Iranian Missiles and Drones",
        summary: "As missiles and drones cross the regionâ€™s skies, the Gulfâ€™s layered air-defense networksâ€”from THAAD to Patriot batteriesâ€”are being tested in real time.",
        link: "https://www.wired.com/story/how-each-gulf-country-is-intercepting-iranian-missiles-and-drones/",
        source: "Wired"
    },
    {
        title: "How to Avoid Getting Locked Out of Your Google Account",
        summary: "Make a recovery plan now to avoid losing access to your account in the future.",
        link: "https://www.wired.com/story/how-to-avoid-getting-locked-out-of-your-google-account/",
        source: "Wired"
    },
    {
        title: "This Jammer Wants to Block Always-Listening AI Wearables. It Probably Wonâ€™t Work",
        summary: "Deveillanceâ€™s Spectre I, developed by a recent Harvard grad, wants to give people control over the always-on wearables surrounding their lives. The problem? Physics.",
        link: "https://www.wired.com/story/deveillance-spectre-i/",
        source: "Wired"
    },
    {
        title: "Marley Spoon Meal Kit Review 2026: Less Martha, More Moroccan",
        summary: "Marley Spoon has stripped Martha Stewart from its website and seems to be cooking a little differently. Hereâ€™s a review.",
        link: "https://www.wired.com/review/marley-spoon-meal-kit-2026/",
        source: "Wired"
    },
    {
        title: "72 'Buy It for Life' Products: Cast-Iron, Tools, Speakers, Chairs, and More",
        summary: "From cast-iron pans to mechanical watches, weâ€™ve rounded up products that are made to last for decades.",
        link: "https://www.wired.com/story/buy-it-for-life/",
        source: "Wired"
    },
    {
        title: "The Best Google Pixel Phones of 2026, Tested and Reviewed",
        summary: "Hereâ€™s a guide to all the modelsâ€”plus Pixel case recommendations and smart software tricks to try.",
        link: "https://www.wired.com/story/best-google-pixel-phone/",
        source: "Wired"
    },
    {
        title: "The Future of Iranâ€™s Internet Is More Uncertain Than Ever",
        summary: "Iranâ€™s internet shutdown has reduced connectivity by 99 percent, with air strikes likely causing additional outages, and few workarounds remaining.",
        link: "https://www.wired.com/story/the-future-of-irans-internet-is-more-uncertain-than-ever/",
        source: "Wired"
    },
    {
        title: "These Beats Headphones We Like Are $150 Off",
        summary: "Save a chunk of change on the Beats Studio Pro over-ear headphones.",
        link: "https://www.wired.com/story/beats-studio-pro-deal-326/",
        source: "Wired"
    },
    {
        title: "When AI Companies Go to War, Safety Gets Left Behind",
        summary: "We were promised AI regulation and a race to the top. Now, weâ€™re arguing about killer robots.",
        link: "https://www.wired.com/story/when-ai-companies-go-to-war-safety-gets-left-behind/",
        source: "Wired"
    },
    {
        title: "9 Best Android Phones of 2026, Tested and Reviewed",
        summary: "Shopping for a phone can be an ordeal. Thatâ€™s why weâ€™ve tested almost every Android phone, from the smartest to the cheapestâ€”even phones that foldâ€”to find the ones worth your money.",
        link: "https://www.wired.com/gallery/best-android-phones/",
        source: "Wired"
    },
    {
        title: "11 Best USB Flash Drives (2026): Pen Drives, Thumb Drives, Memory Sticks",
        summary: "These WIRED-tested memory sticks are a virtual filing cabinet in your pocket.",
        link: "https://www.wired.com/gallery/best-usb-flash-drives/",
        source: "Wired"
    },
    {
        title: "Corsair Sabre V2 Carbon Fiber and Magnesium Gaming Mice Review",
        summary: "Is it worth using motorsports materials in a gaming mouse? As long as itâ€™s the same price as plastic.",
        link: "https://www.wired.com/review/corsair-sabre-v2-cf-and-mg/",
        source: "Wired"
    },
    {
        title: "Jones Mercury FASE Snowboard Bindings Review: The Best Fast Entry System",
        summary: "In! Out! In! Out! Jonesâ€™ latest fast-entry snowboard bindings mean youâ€™ll never get left behind by a bunch of skiers again.",
        link: "https://www.wired.com/review/jones-mercury-fase-snowboard-bindings/",
        source: "Wired"
    },
    {
        title: "These 2 Apps Help Me Make Sense of My 100K Screenshots",
        summary: "The shameful pile of screenshots on my phone was as useless as it was disorganized. Rodeo and Swipewipe are helping to change that.",
        link: "https://www.wired.com/story/rodeo-swipewipe-declutter-screenshots/",
        source: "Wired"
    },
    {
        title: "7 Laptop Docking Stations to Unlock the Full Desktop Experience (2026)",
        summary: "Laptop docking stations expand what your laptop can do, and Iâ€™ve been testing the best of the best to see which you should buy.",
        link: "https://www.wired.com/gallery/best-laptop-docking-stations/",
        source: "Wired"
    },
    {
        title: "From Ukraine to Iran, Hacking Security Cameras Is Now Part of Warâ€™s â€˜Playbookâ€™",
        summary: "New research shows hundreds of attempts by apparent Iranian state hackers to hijack consumer-grade cameras, timed to missile and drone strikes. Israel, Russia, and Ukraine have also adopted this trick...",
        link: "https://www.wired.com/story/from-ukraine-to-iran-hacking-security-cameras-is-now-part-of-wars-playbook/",
        source: "Wired"
    },
    {
        title: "Why Is Alexa+ So Bad?",
        summary: "I stuck Amazonâ€™s Echo Show 15 and its Alexa+ AI assistant in my kitchen for a month. Things have not gone well.",
        link: "https://www.wired.com/story/why-is-amazon-alexa-plus-so-bad/",
        source: "Wired"
    },
    {
        title: "Posture Correctors That Will Straighten You Out (2026)",
        summary: "Youâ€™re hunched over your desk and phone for hours. I rounded up gadgets, a DIY trick, and even some yoga advice to help you straighten up.",
        link: "https://www.wired.com/gallery/posture-correctors/",
        source: "Wired"
    },
    {
        title: "The Smart Bird Feeders Everyoneâ€™s Talking About (and Actually Buying) (2026)",
        summary: "These bird feeders come with cameras and connected apps to let you see and learn about the birds in your neighborhood.",
        link: "https://www.wired.com/story/best-smart-bird-feeders/",
        source: "Wired"
    },
    {
        title: "Jack Dorsey Is Ready to Explain the Block Layoffs",
        summary: "In an exclusive interview with WIRED, Blockâ€™s cofounder and CEO says he axed 40 percent of his workforce so that he can rebuild the company â€œas an intelligence.â€",
        link: "https://www.wired.com/story/jack-dorsey-explains-block-layoffs/",
        source: "Wired"
    },
    {
        title: "Sleep Apnea Often Goes Undetected in Women. Thatâ€™s Starting to Change",
        summary: "Womenâ€™s sleep apnea symptoms differ from menâ€™s and can often be confused with hormonal shifts. Researchers are working to close the detection gap.",
        link: "https://www.wired.com/story/sleep-apnea-women-detection-treatment/",
        source: "Wired"
    },
    {
        title: "The War on Iran Puts Global Chip Supplies and AI Expansion at Risk",
        summary: "From helium extraction in Qatar to shipping lanes in the Strait of Hormuz, the semiconductor industry depends on fragile links across the Gulf. Escalation could ripple through global chip production.",
        link: "https://www.wired.com/story/the-war-on-iran-puts-global-chip-supply-and-ai-expansion-at-risk/",
        source: "Wired"
    },
    {
        title: "Mattress Firm Coupons and Discounts: Save Up to $600",
        summary: "Use a Mattress Firm promo code to save on top mattresses, score a free adjustable base, and unlock up to $300 in instant credits.",
        link: "https://www.wired.com/story/mattress-firm-coupon/",
        source: "Wired"
    },
    {
        title: "KitchenAid Promo Codes and Discounts: Save Up To 50%",
        summary: "Save on every purchase with top KitchenAid coupons from WIRED, including up to 50% off countertop appliances.",
        link: "https://www.wired.com/story/exclusive-kitchenaid-promo-code/",
        source: "Wired"
    },
    {
        title: "Peacock Promo Codes: 40% Off March 2026",
        summary: "Stream your favorite shows for up to $80 off this month, and save on subscription plans with the latest Peacock TV coupons from WIRED.",
        link: "https://www.wired.com/story/peacock-promo-code/",
        source: "Wired"
    },
    {
        title: "Amazon will give you a $200 gift card when you preorder the Galaxy S26, plus $400 off: Last chance",
        summary: "Preorder the new Samsung Galaxy S26, S26 Plus, or S26 Ultra from Amazon at a discount, and get a free gift card. We break down the details.",
        link: "https://www.zdnet.com/article/samsung-galaxy-s26-amazon-deal/",
        source: "ZDNet"
    },
    {
        title: "How to save money on YouTube TV: Consider these 12 cheaper packages (including live sports)",
        summary: "The streaming service rolls out a dozen cheaper subscription plans - pick the one that fits your viewing habits.",
        link: "https://www.zdnet.com/article/save-money-on-youtube-tv-choose-from-12-cheaper-packages/",
        source: "ZDNet"
    },
    {
        title: "You can still save up to $1,300 on the Samsung Galaxy S26 Ultra at AT&T - here's the details",
        summary: "Samsung's new Galaxy S26 lineup is here, and AT&T wants you to upgrade your phone for 'free.' Here's the catch.",
        link: "https://www.zdnet.com/article/samsung-galaxy-s26-ultra-att-preorder-deal/",
        source: "ZDNet"
    },
    {
        title: "I'm a tech professional, and an AI job scam almost fooled me - here's how I caught on",
        summary: "With a bit of vigilance, I avoided an employment disaster. Here's how you can, too.",
        link: "https://www.zdnet.com/article/ai-job-scams-linkedin/",
        source: "ZDNet"
    },
    {
        title: "Apple might launch a new class of 'Ultra' devices in 2026 - including a foldable iPhone",
        summary: "Perhaps Apple's long-rumored touchscreen MacBook will also be an 'Ultra' device.",
        link: "https://www.zdnet.com/article/apple-ultra-devices-2026-foldable-iphone-touchscreen-macbook/",
        source: "ZDNet"
    },
    {
        title: "I've used Tor browser for years, but now I'm using it on my Android phone - here's why",
        summary: "If you're looking for the safest way to browse on your Android phone, Tor Browser is it.",
        link: "https://www.zdnet.com/article/tor-browser-android/",
        source: "ZDNet"
    },
    {
        title: "Getting your Android phone repaired? Turn on this setting first - and lock down your data",
        summary: "Repair Mode lets technicians fix your Android phone without seeing your personal files or apps. Here's how.",
        link: "https://www.zdnet.com/article/android-repair-mode-protect-data-during-phone-repair/",
        source: "ZDNet"
    },
    {
        title: "Scosche FoundIt review: The first car charger with Apple and Google tracking spoiled me",
        summary: "The Scosche FoundIt 12V charger has dual USB ports and a built-in finder for Apple Find My and Google Find Hub.",
        link: "https://www.zdnet.com/article/scosche-foundit-car-charger-and-finder-tag-review/",
        source: "ZDNet"
    },
    {
        title: "I tested GPT-5.4, and the answers were really good - just not always what I asked",
        summary: "I'm a little concerned about OpenAI's claims that GPT-5.4 Thinking can do professional tasks. Here's why.",
        link: "https://www.zdnet.com/article/gpt-5-4-thinking-tests-review/",
        source: "ZDNet"
    },
    {
        title: "BMX SolidSafe 10K review: This solid-sate battery has so many benefits (and an obvious flaw)",
        summary: "The BMX SolidSafe 10K has many advantages over traditional power banks, but it's held back by some clear issues.",
        link: "https://www.zdnet.com/article/bmx-solidsafe-10k-review/",
        source: "ZDNet"
    },
    {
        title: "Can Meta workers see through your Ray-Ban smart glasses? Here's what security experts say",
        summary: "By now, we know to be wary of someone pointing a phone camera at us. But should you now be wary of people wearing glasses?",
        link: "https://www.zdnet.com/article/meta-ray-ban-smart-glasses-privacy-concerns/",
        source: "ZDNet"
    },
    {
        title: "Samsung Galaxy S24 vs. S26: Should you upgrade to the latest model after two years?",
        summary: "If you have a Samsung Galaxy S24 or are upgrading from an older phone, you may wonder if the latest Galaxy S26 is worth the splurge.",
        link: "https://www.zdnet.com/article/samsung-galaxy-s26-vs-s24/",
        source: "ZDNet"
    },
    {
        title: "Soundcore P31i review: I replaced my AirPods with these $40 earbuds, and didn't regret it",
        summary: "The Anker Soundcore P31i earbuds offer many powerful features at a very affordable price.",
        link: "https://www.zdnet.com/article/anker-soundcore-p31i-review/",
        source: "ZDNet"
    },
    {
        title: "iPad Air (M4, 2026) review: I benchmarked Apple's tablet with the Pro model, and it's very close",
        summary: "The new iPad Air with the M4 chip sits oddly between the base model and the Pro, but it's the perfect fit if you're a certain type of user.",
        link: "https://www.zdnet.com/article/ipad-air-m4-review/",
        source: "ZDNet"
    },
    {
        title: "Roku just made browsing its free live TV channels so much easier - how the 'Search' button works",
        summary: "It's now easier than ever to find something specific on Roku's hundreds of TV channels, thanks to a software tweak.",
        link: "https://www.zdnet.com/article/roku-free-tv-search-button/",
        source: "ZDNet"
    },
    {
        title: "Microsoft's Agent 365 helps you spot risky AI agents before they cause trouble - here's how",
        summary: "Microsoft has a new centralized dashboard that lets IT teams track AI agents' visibility, permissions, and security risks to prevent them from becoming insider threats to corporate systems.",
        link: "https://www.zdnet.com/article/microsoft-introduces-agent-365/",
        source: "ZDNet"
    },
    {
        title: "Cybercriminals are using AI to attack the cloud faster - and third-party software is the weak link",
        summary: "Google's latest threat report warns that third-party tools are now prime targets for attackers - and businesses have only days to secure them.",
        link: "https://www.zdnet.com/article/google-cloud-threat-report-third-party-software-ai-attacks/",
        source: "ZDNet"
    },
    {
        title: "How to check if a text message is spam or legit - and the free Android tool I rely on",
        summary: "Are your chats and DMs flooded with suspicious messages? If you have a Pixel, Galaxy, or even OnePlus phone, there's an easy way to ID the scams.",
        link: "https://www.zdnet.com/article/how-to-easily-check-whether-chats-or-messages-are-scams-on-android/",
        source: "ZDNet"
    },
    {
        title: "How much RAM does your PC actually need in 2026? A Windows and Mac expert weighs in",
        summary: "Considering a PC upgrade, but unsure about how much RAM to buy? Here's how I make that decision in the current climate.",
        link: "https://www.zdnet.com/article/how-much-ram-pc-mac-2026/",
        source: "ZDNet"
    },
    {
        title: "Best VPN services 2026: Expert tested and recommended",
        summary: "Using a VPN is more important than ever to stay secure and preserve your privacy. These are the best VPNs around in 2026.",
        link: "https://www.zdnet.com/article/best-vpn/",
        source: "ZDNet"
    },
    {
        title: "Anthropic sues US government for calling it a risk",
        summary: "The artificial intelligence company has been in a public fight with US government leaders over use of its tools like Claude",
        link: "https://www.bbc.com/news/articles/cq571w5vllxo?at_medium=RSS&at_campaign=rss",
        source: "BBC Tech"
    },
    {
        title: "Mayor Sadiq Khan invites embattled AI firm Anthropic to expand in London",
        summary: "The letter from London's mayor came as the US moved to designate the company a supply chain risk.",
        link: "https://www.bbc.com/news/articles/czx7915nn8qo?at_medium=RSS&at_campaign=rss",
        source: "BBC Tech"
    },
    {
        title: "Can snacks help you sleep?",
        summary: "Chocolates, bars, gummies and drinks promise to help you sleep, but is the science behind them sound?",
        link: "https://www.bbc.com/news/articles/cd6znvjvw3wo?at_medium=RSS&at_campaign=rss",
        source: "BBC Tech"
    },
    {
        title: "TfL hack in 2024 affected around 10 million people, BBC can reveal",
        summary: "TfL insists it has "kept customers informed throughout this incident and will continue to take all necessary action".",
        link: "https://www.bbc.com/news/articles/cz0ggkr2g77o?at_medium=RSS&at_campaign=rss",
        source: "BBC Tech"
    },
    {
        title: "Musk tells jury 'people read too much' into his posts",
        summary: "The billionaire is accused of misleading investors in the run-up to his 2022 Twitter purchase.",
        link: "https://www.bbc.com/news/articles/c7433dz4ykwo?at_medium=RSS&at_campaign=rss",
        source: "BBC Tech"
    },
    {
        title: "We have more privacy controls yet less privacy than ever",
        summary: "Has online privacy become  "a luxury not a right" for us all in 2026?",
        link: "https://www.bbc.com/news/articles/c4gj39zk1k0o?at_medium=RSS&at_campaign=rss",
        source: "BBC Tech"
    },
    {
        title: "Father claims Google's AI product fuelled son's delusional spiral",
        summary: "The case is the first wrongful death case against Google over alleged harms caused by Gemini.",
        link: "https://www.bbc.com/news/articles/czx44p99457o?at_medium=RSS&at_campaign=rss",
        source: "BBC Tech"
    },
    {
        title: "Regulator contacts Meta over workers watching intimate AI glasses videos",
        summary: "Videos, including of glasses-wearers using the toilet or having sex, are sometimes reviewed by a Kenya-based subcontractor.",
        link: "https://www.bbc.com/news/articles/c0q33nvj0qpo?at_medium=RSS&at_campaign=rss",
        source: "BBC Tech"
    },
    {
        title: "Remote work, offices shut: Tech giants scramble to respond as Iran war escalates",
        summary: "The region has been positioning itself as an AI hub, following billions of dollars in investment by tech giants.",
        link: "https://www.bbc.com/news/articles/c99jjr7d40yo?at_medium=RSS&at_campaign=rss",
        source: "BBC Tech"
    },
    {
        title: "TikTok won't protect DMs with controversial privacy tech, saying it would put users at risk",
        summary: "TikTok tells the BBC it won't join rival platforms such as WhatsApp and Messenger in using end-to-end encryption.",
        link: "https://www.bbc.com/news/articles/cly2m5e5ke4o?at_medium=RSS&at_campaign=rss",
        source: "BBC Tech"
    },
    {
        title: "OpenAI changes deal with US military after backlash",
        summary: "Chief Executive Sam Altman said the group would prohibit the use of its systems to spy on Americans.",
        link: "https://www.bbc.com/news/articles/c3rz1nd0egro?at_medium=RSS&at_campaign=rss",
        source: "BBC Tech"
    },
    {
        title: "Know when to fold them: the tech inspired by origami",
        summary: "Origami techniques can add strength to structures without adding bulk.",
        link: "https://www.bbc.com/news/articles/c9v0e4n8kw0o?at_medium=RSS&at_campaign=rss",
        source: "BBC Tech"
    },
    {
        title: "UK launches consultation asking for views on under-16s social media ban",
        summary: "Discussions over what measures to implement to protect children's wellbeing will last for three months.",
        link: "https://www.bbc.com/news/articles/cvg3vjkx9d7o?at_medium=RSS&at_campaign=rss",
        source: "BBC Tech"
    },
    {
        title: "Tech Life",
        summary: "The machines will be much more powerful than the ordinary computers we use today",
        link: "https://www.bbc.co.uk/sounds/play/w3ct6zq6?at_medium=RSS&at_campaign=rss",
        source: "BBC Tech"
    },
    {
        title: "Tech Life",
        summary: "Yvonne Johnson has motor neuron disease. AI is helping to return her lost voice.",
        link: "https://www.bbc.co.uk/sounds/play/w3ct6zq5?at_medium=RSS&at_campaign=rss",
        source: "BBC Tech"
    },
    {
        title: "Tech Life",
        summary: "We chat about a conversational AI that's almost human-like in its speech skills",
        link: "https://www.bbc.co.uk/sounds/play/w3ct6zq4?at_medium=RSS&at_campaign=rss",
        source: "BBC Tech"
    },
    {
        title: "Tech Life",
        summary: "The smart glasses market is growing, with more choice of wearable devices.",
        link: "https://www.bbc.co.uk/sounds/play/w3ct6zq3?at_medium=RSS&at_campaign=rss",
        source: "BBC Tech"
    },
    {
        title: "Tech Now",
        summary: "Alasdair Keane climbs aboard an electric boat in Norway.",
        link: "https://www.bbc.co.uk/iplayer/episode/m002rm37?at_medium=RSS&at_campaign=rss",
        source: "BBC Tech"
    },
    {
        title: "Tech Now",
        summary: "Adrienne Murray visits the Esrange Spaceport in the far north of Sweden.",
        link: "https://www.bbc.co.uk/iplayer/episode/m002r9cj?at_medium=RSS&at_campaign=rss",
        source: "BBC Tech"
    },
    {
        title: "Tech Now",
        summary: "Alasdair Keane visits the Olympic training centre in Oslo.",
        link: "https://www.bbc.co.uk/iplayer/episode/m002qzkc?at_medium=RSS&at_campaign=rss",
        source: "BBC Tech"
    },
    {
        title: "Tech Now",
        summary: "Nick Kwek meets innovators using tech for Australia's agricultural industry.",
        link: "https://www.bbc.co.uk/iplayer/episode/m002qmzj?at_medium=RSS&at_campaign=rss",
        source: "BBC Tech"
    },
    {
        title: "Feds take notice of iOS vulnerabilities exploited under mysterious circumstances",
        summary: "The long, strange trip of a large assembly of advanced iOS exploits.",
        link: "https://arstechnica.com/security/2026/03/cisa-adds-3-ios-flaws-to-its-catalog-of-known-exploited-vulnerabilities/",
        source: "Ars Technica"
    },
    {
        title: "Amazon appears to be down, with over 20,000 reported problems",
        summary: "Problems viewing products and checking out.",
        link: "https://arstechnica.com/gadgets/2026/03/amazon-appears-to-be-down-with-over-20000-reported-problems/",
        source: "Ars Technica"
    },
    {
        title: "Trump gets data center companies to pledge to pay for power generation",
        summary: "With no enforcement and questionable economics, it may not make a difference.",
        link: "https://arstechnica.com/tech-policy/2026/03/leading-ai-datacenter-companies-sign-pledge-to-buy-their-own-power/",
        source: "Ars Technica"
    },
    {
        title: "Downdetector, Speedtest sold to IT service-provider Accenture in $1.2B deal",
        summary: "Accenture plans to buy Ookla, which also includes RootMetrics and Ekahau.",
        link: "https://arstechnica.com/information-technology/2026/03/downdetector-speedtest-sold-to-it-service-provider-accenture-in-1-2b-deal/",
        source: "Ars Technica"
    },
    {
        title: "LLMs can unmask pseudonymous users at scale with surprising accuracy",
        summary: "Pseudonymity has never been perfect for preserving privacy. Soon it may be pointless.",
        link: "https://arstechnica.com/security/2026/03/llms-can-unmask-pseudonymous-users-at-scale-with-surprising-accuracy/",
        source: "Ars Technica"
    },
    {
        title: "Google quantum-proofs HTTPS by squeezing 15kB of data into 700-byte space",
        summary: "Merkle Tree Certificate support is already in Chrome. Soon, it will be everywhere.",
        link: "https://arstechnica.com/security/2026/02/google-is-using-clever-math-to-quantum-proof-https-certificates/",
        source: "Ars Technica"
    },
    {
        title: "New AirSnitch attack bypasses Wi-Fi encryption in homes, offices, and enterprises",
        summary: "That guest network you set up for your neighbors may not be as secure as you think.",
        link: "https://arstechnica.com/security/2026/02/new-airsnitch-attack-breaks-wi-fi-encryption-in-homes-offices-and-enterprises/",
        source: "Ars Technica"
    },
    {
        title: "Password managers' promise that they can't see your vaults isn't always true",
        summary: "Contrary to what password managers say, a server compromise can mean game over.",
        link: "https://arstechnica.com/security/2026/02/password-managers-promise-that-they-cant-see-your-vaults-isnt-always-true/",
        source: "Ars Technica"
    },
    {
        title: "Most VMware users still "actively reducing their VMware footprint," survey finds",
        summary: "Broadcom's "strategy was never to keep every customer," CloudBolt report says.",
        link: "https://arstechnica.com/information-technology/2026/02/most-vmware-users-still-actively-reducing-their-vmware-footprint-survey-finds/",
        source: "Ars Technica"
    },
    {
        title: "Retraction: After a routine code rejection, an AI agent published a hit piece on someone by name",
        summary: "This story has been retracted",
        link: "https://arstechnica.com/ai/2026/02/after-a-routine-code-rejection-an-ai-agent-published-a-hit-piece-on-someone-by-name/",
        source: "Ars Technica"
    },
    {
        title: "OpenAI sidesteps Nvidia with unusually fast coding model on plate-sized chips",
        summary: "OpenAI's new GPTâ€‘5.3â€‘Codexâ€‘Spark is 15 times faster at coding than its predecessor.",
        link: "https://arstechnica.com/ai/2026/02/openai-sidesteps-nvidia-with-unusually-fast-coding-model-on-plate-sized-chips/",
        source: "Ars Technica"
    },
    {
        title: "Attackers prompted Gemini over 100,000 times while trying to clone it, Google says",
        summary: "Distillation technique lets copycats mimic Gemini at a fraction of the development cost.",
        link: "https://arstechnica.com/ai/2026/02/attackers-prompted-gemini-over-100000-times-while-trying-to-clone-it-google-says/",
        source: "Ars Technica"
    },
    {
        title: "Once-hobbled Lumma Stealer is back with lures that are hard to resist",
        summary: "ClickFix bait, combined with advanced Castleloader malware, is installing Lumma "at scale."",
        link: "https://arstechnica.com/security/2026/02/once-hobbled-lumma-stealer-is-back-with-lures-that-are-hard-to-resist/",
        source: "Ars Technica"
    },
    {
        title: "OpenAI researcher quits over ChatGPT ads, warns of "Facebook" path",
        summary: "ZoÃ« Hitzig resigned on the same day OpenAI began testing ads in its chatbot.",
        link: "https://arstechnica.com/information-technology/2026/02/openai-researcher-quits-over-fears-that-chatgpt-ads-could-manipulate-users/",
        source: "Ars Technica"
    },
    {
        title: "Sixteen Claude AI agents working together created a new C compiler",
        summary: "The $20,000 experiment compiled a Linux kernel but needed deep human management.",
        link: "https://arstechnica.com/ai/2026/02/sixteen-claude-ai-agents-working-together-created-a-new-c-compiler/",
        source: "Ars Technica"
    },
    {
        title: "Malicious packages for dYdX cryptocurrency exchange empties user wallets",
        summary: "Incident is at least the third time the exchange has been targeted by thieves.",
        link: "https://arstechnica.com/security/2026/02/malicious-packages-for-dydx-cryptocurrency-exchange-empties-user-wallets/",
        source: "Ars Technica"
    },
    {
        title: "AI companies want you to stop chatting with bots and start managing them",
        summary: "Claude Opus 4.6 and OpenAI Frontier pitch a future of supervising AI agents.",
        link: "https://arstechnica.com/information-technology/2026/02/ai-companies-want-you-to-stop-chatting-with-bots-and-start-managing-them/",
        source: "Ars Technica"
    },
    {
        title: "OpenAI is hoppin' mad about Anthropic's new Super Bowl TV ads",
        summary: "Sam Altman calls AI competitor "dishonest" and "authoritarian" in lengthy post on X.",
        link: "https://arstechnica.com/information-technology/2026/02/openai-is-hoppin-mad-about-anthropics-new-super-bowl-tv-ads/",
        source: "Ars Technica"
    },
    {
        title: "Increase of AI bots on the Internet sparks arms race",
        summary: "Publishers are rolling out more aggressive defenses.",
        link: "https://arstechnica.com/ai/2026/02/increase-of-ai-bots-on-the-internet-sparks-arms-race/",
        source: "Ars Technica"
    },
    {
        title: "Microsoft releases urgent Office patch. Russian-state hackers pounce.",
        summary: "The window to patch vulnerabilities is shrinking rapidly.",
        link: "https://arstechnica.com/security/2026/02/russian-state-hackers-exploit-office-vulnerability-to-infect-computers/",
        source: "Ars Technica"
    },
    {
        title: "RoboLayout: Differentiable 3D Scene Generation for Embodied Agents",
        summary: "arXiv:2603.05522v1 Announce Type: new 
Abstract: Recent advances in vision language models (VLMs) have shown strong potential for spatial reasoning and 3D scene layout generation from open-ended langu...",
        link: "https://arxiv.org/abs/2603.05522",
        source: "ArXiv AI"
    },
    {
        title: "Real-Time AI Service Economy: A Framework for Agentic Computing Across the Continuum",
        summary: "arXiv:2603.05614v1 Announce Type: new 
Abstract: Real-time AI services increasingly operate across the device-edge-cloud continuum, where autonomous AI agents generate latency-sensitive workloads, orc...",
        link: "https://arxiv.org/abs/2603.05614",
        source: "ArXiv AI"
    },
    {
        title: "Reasoning Models Struggle to Control their Chains of Thought",
        summary: "arXiv:2603.05706v1 Announce Type: new 
Abstract: Chain-of-thought (CoT) monitoring is a promising tool for detecting misbehaviors and understanding the motivations of modern reasoning models. However,...",
        link: "https://arxiv.org/abs/2603.05706",
        source: "ArXiv AI"
    },
    {
        title: "Evolving Medical Imaging Agents via Experience-driven Self-skill Discovery",
        summary: "arXiv:2603.05860v1 Announce Type: new 
Abstract: Clinical image interpretation is inherently multi-step and tool-centric: clinicians iteratively combine visual evidence with patient context, quantify ...",
        link: "https://arxiv.org/abs/2603.05860",
        source: "ArXiv AI"
    },
    {
        title: "The World Won't Stay Still: Programmable Evolution for Agent Benchmarks",
        summary: "arXiv:2603.05910v1 Announce Type: new 
Abstract: LLM-powered agents fulfill user requests by interacting with environments, querying data, and invoking tools in a multi-turn process. Yet, most existin...",
        link: "https://arxiv.org/abs/2603.05910",
        source: "ArXiv AI"
    },
    {
        title: "DeepFact: Co-Evolving Benchmarks and Agents for Deep Research Factuality",
        summary: "arXiv:2603.05912v1 Announce Type: new 
Abstract: Search-augmented LLM agents can produce deep research reports (DRRs), but verifying claim-level factuality remains challenging. Existing fact-checkers ...",
        link: "https://arxiv.org/abs/2603.05912",
        source: "ArXiv AI"
    },
    {
        title: "An Interactive Multi-Agent System for Evaluation of New Product Concepts",
        summary: "arXiv:2603.05980v1 Announce Type: new 
Abstract: Product concept evaluation is a critical stage that determines strategic resource allocation and project success in enterprises. However, traditional e...",
        link: "https://arxiv.org/abs/2603.05980",
        source: "ArXiv AI"
    },
    {
        title: "Agentic LLM Planning via Step-Wise PDDL Simulation: An Empirical Characterisation",
        summary: "arXiv:2603.06064v1 Announce Type: new 
Abstract: Task planning, the problem of sequencing actions to reach a goal from an initial state, is a core capability requirement for autonomous robotic systems...",
        link: "https://arxiv.org/abs/2603.06064",
        source: "ArXiv AI"
    },
    {
        title: "Aggregative Semantics for Quantitative Bipolar Argumentation Frameworks",
        summary: "arXiv:2603.06067v1 Announce Type: new 
Abstract: Formal argumentation is being used increasingly in artificial intelligence as an effective and understandable way to model potentially conflicting piec...",
        link: "https://arxiv.org/abs/2603.06067",
        source: "ArXiv AI"
    },
    {
        title: "Offline Materials Optimization with CliqueFlowmer",
        summary: "arXiv:2603.06082v1 Announce Type: new 
Abstract: Recent advances in deep learning inspired neural network-based approaches to computational materials discovery (CMD). A plethora of problems in this fi...",
        link: "https://arxiv.org/abs/2603.06082",
        source: "ArXiv AI"
    },
    {
        title: "Conversational Demand Response: Bidirectional Aggregator-Prosumer Coordination through Agentic AI",
        summary: "arXiv:2603.06217v1 Announce Type: new 
Abstract: Residential demand response depends on sustained prosumer participation, yet existing coordination is either fully automated, or limited to one-way dis...",
        link: "https://arxiv.org/abs/2603.06217",
        source: "ArXiv AI"
    },
    {
        title: "Artificial Intelligence for Climate Adaptation: Reinforcement Learning for Climate Change-Resilient Transport",
        summary: "arXiv:2603.06278v1 Announce Type: new 
Abstract: Climate change is expected to intensify rainfall and, consequently, pluvial flooding, leading to increased disruptions in urban transportation systems ...",
        link: "https://arxiv.org/abs/2603.06278",
        source: "ArXiv AI"
    },
    {
        title: "The EpisTwin: A Knowledge Graph-Grounded Neuro-Symbolic Architecture for Personal AI",
        summary: "arXiv:2603.06290v1 Announce Type: new 
Abstract: Personal Artificial Intelligence is currently hindered by the fragmentation of user data across isolated silos. While Retrieval-Augmented Generation of...",
        link: "https://arxiv.org/abs/2603.06290",
        source: "ArXiv AI"
    },
    {
        title: "SAHOO: Safeguarded Alignment for High-Order Optimization Objectives in Recursive Self-Improvement",
        summary: "arXiv:2603.06333v1 Announce Type: new 
Abstract: Recursive self-improvement is moving from theory to practice: modern systems can critique, revise, and evaluate their own outputs, yet iterative self-m...",
        link: "https://arxiv.org/abs/2603.06333",
        source: "ArXiv AI"
    },
    {
        title: "Talk Freely, Execute Strictly: Schema-Gated Agentic AI for Flexible and Reproducible Scientific Workflows",
        summary: "arXiv:2603.06394v1 Announce Type: new 
Abstract: Large language models (LLMs) can now translate a researcher's plain-language goal into executable computation, yet scientific workflows demand determin...",
        link: "https://arxiv.org/abs/2603.06394",
        source: "ArXiv AI"
    },
    {
        title: "Boosting deep Reinforcement Learning using pretraining with Logical Options",
        summary: "arXiv:2603.06565v1 Announce Type: new 
Abstract: Deep reinforcement learning agents are often misaligned, as they over-exploit early reward signals. Recently, several symbolic approaches have addresse...",
        link: "https://arxiv.org/abs/2603.06565",
        source: "ArXiv AI"
    },
    {
        title: "Can LLM Aid in Solving Constraints with Inductive Definitions?",
        summary: "arXiv:2603.03668v1 Announce Type: cross 
Abstract: Solving constraints involving inductive (aka recursive) definitions is challenging. State-of-the-art SMT/CHC solvers and first-order logic provers pr...",
        link: "https://arxiv.org/abs/2603.03668",
        source: "ArXiv AI"
    },
    {
        title: "Exploring Human-in-the-Loop Themes in AI Application Development: An Empirical Thematic Analysis",
        summary: "arXiv:2603.05510v1 Announce Type: cross 
Abstract: Developing and deploying AI applications in organizations is challenging when human decision authority and oversight are underspecified across the sy...",
        link: "https://arxiv.org/abs/2603.05510",
        source: "ArXiv AI"
    },
    {
        title: "An Embodied Companion for Visual Storytelling",
        summary: "arXiv:2603.05511v1 Announce Type: cross 
Abstract: As artificial intelligence shifts from pure tool for delegation toward agentic collaboration, its use in the arts can shift beyond the exploration of...",
        link: "https://arxiv.org/abs/2603.05511",
        source: "ArXiv AI"
    },
    {
        title: "From Toil to Thought: Designing for Strategic Exploration and Responsible AI in Systematic Literature Reviews",
        summary: "arXiv:2603.05514v1 Announce Type: cross 
Abstract: Systematic Literature Reviews (SLRs) are fundamental to scientific progress, yet the process is hindered by a fragmented tool ecosystem that imposes ...",
        link: "https://arxiv.org/abs/2603.05514",
        source: "ArXiv AI"
    },
    {
        title: "Traversal-as-Policy: Log-Distilled Gated Behavior Trees as Externalized, Verifiable Policies for Safe, Robust, and Efficient Agents",
        summary: "arXiv:2603.05517v1 Announce Type: cross 
Abstract: Autonomous LLM agents fail because long-horizon policy remains implicit in model weights and transcripts, while safety is retrofitted post hoc. We pr...",
        link: "https://arxiv.org/abs/2603.05517",
        source: "ArXiv AI"
    },
    {
        title: "Molecular Representations for AI in Chemistry and Materials Science: An NLP Perspective",
        summary: "arXiv:2603.05525v1 Announce Type: cross 
Abstract: Deep learning, a subfield of machine learning, has gained importance in various application areas in recent years. Its growing popularity has led it ...",
        link: "https://arxiv.org/abs/2603.05525",
        source: "ArXiv AI"
    },
    {
        title: "Omni-C: Compressing Heterogeneous Modalities into a Single Dense Encoder",
        summary: "arXiv:2603.05528v1 Announce Type: cross 
Abstract: Recent multimodal systems often rely on separate expert modality encoders which cause linearly scaling complexity and computational overhead with add...",
        link: "https://arxiv.org/abs/2603.05528",
        source: "ArXiv AI"
    },
    {
        title: "Towards Neural Graph Data Management",
        summary: "arXiv:2603.05529v1 Announce Type: cross 
Abstract: While AI systems have made remarkable progress in processing unstructured text, structured data such as graphs stored in databases, continues to grow...",
        link: "https://arxiv.org/abs/2603.05529",
        source: "ArXiv AI"
    },
    {
        title: "On the Reliability of AI Methods in Drug Discovery: Evaluation of Boltz-2 for Structure and Binding Affinity Prediction",
        summary: "arXiv:2603.05532v1 Announce Type: cross 
Abstract: Despite continuing hype about the role of AI in drug discovery, no "AI-discovered drugs" have so far received regulatory approval. Here we assess one...",
        link: "https://arxiv.org/abs/2603.05532",
        source: "ArXiv AI"
    },
    {
        title: "JAWS: Enhancing Long-term Rollout of Neural Operators via Spatially-Adaptive Jacobian Regularization",
        summary: "arXiv:2603.05538v1 Announce Type: cross 
Abstract: Data-driven surrogate models improve the efficiency of simulating continuous dynamical systems, yet their autoregressive rollouts are often limited b...",
        link: "https://arxiv.org/abs/2603.05538",
        source: "ArXiv AI"
    },
    {
        title: "VDCook:DIY video data cook your MLLMs",
        summary: "arXiv:2603.05539v1 Announce Type: cross 
Abstract: We introduce VDCook: a self-evolving video data operating system, a configurable video data construction platform for researchers and vertical domain...",
        link: "https://arxiv.org/abs/2603.05539",
        source: "ArXiv AI"
    },
    {
        title: "Human-Data Interaction, Exploration, and Visualization in the AI Era: Challenges and Opportunities",
        summary: "arXiv:2603.05542v1 Announce Type: cross 
Abstract: The rapid advancement of AI is transforming human-centered systems, with profound implications for human-AI interaction, human-data interaction, and ...",
        link: "https://arxiv.org/abs/2603.05542",
        source: "ArXiv AI"
    },
    {
        title: "EigenData: A Self-Evolving Multi-Agent Platform for Function-Calling Data Synthesis, Auditing, and Repair",
        summary: "arXiv:2603.05553v1 Announce Type: cross 
Abstract: Function-calling agents -- large language models that invoke tools and APIs -- require high-quality, domain-specific training data spanning executabl...",
        link: "https://arxiv.org/abs/2603.05553",
        source: "ArXiv AI"
    },
    {
        title: "Towards Efficient and Stable Ocean State Forecasting: A Continuous-Time Koopman Approach",
        summary: "arXiv:2603.05560v1 Announce Type: cross 
Abstract: We investigate the Continuous-Time Koopman Autoencoder (CT-KAE) as a lightweight surrogate model for long-horizon ocean state forecasting in a two-la...",
        link: "https://arxiv.org/abs/2603.05560",
        source: "ArXiv AI"
    },
    {
        title: "Model Change for Description Logic Concepts",
        summary: "arXiv:2603.05562v1 Announce Type: cross 
Abstract: We consider the problem of modifying a description logic concept in light of models represented as pointed interpretations. We call this setting mode...",
        link: "https://arxiv.org/abs/2603.05562",
        source: "ArXiv AI"
    },
    {
        title: "When AI Levels the Playing Field: Skill Homogenization, Asset Concentration, and Two Regimes of Inequality",
        summary: "arXiv:2603.05565v1 Announce Type: cross 
Abstract: Generative AI compresses within-task skill differences while shifting economic value toward concentrated complementary assets, creating an apparent p...",
        link: "https://arxiv.org/abs/2603.05565",
        source: "ArXiv AI"
    },
    {
        title: "CBR-to-SQL: Rethinking Retrieval-based Text-to-SQL using Case-based Reasoning in the Healthcare Domain",
        summary: "arXiv:2603.05569v1 Announce Type: cross 
Abstract: Extracting insights from Electronic Health Record (EHR) databases often requires SQL expertise, creating a barrier for healthcare decision-making and...",
        link: "https://arxiv.org/abs/2603.05569",
        source: "ArXiv AI"
    },
    {
        title: "PRISM: Personalized Refinement of Imitation Skills for Manipulation via Human Instructions",
        summary: "arXiv:2603.05574v1 Announce Type: cross 
Abstract: This paper presents PRISM: an instruction-conditioned refinement method for imitation policies in robotic manipulation. This approach bridges Imitati...",
        link: "https://arxiv.org/abs/2603.05574",
        source: "ArXiv AI"
    },
    {
        title: "Tool-Genesis: A Task-Driven Tool Creation Benchmark for Self-Evolving Language Agent",
        summary: "arXiv:2603.05578v1 Announce Type: cross 
Abstract: Research on self-evolving language agents has accelerated, drawing increasing attention to their ability to create, adapt, and maintain tools from ta...",
        link: "https://arxiv.org/abs/2603.05578",
        source: "ArXiv AI"
    },
    {
        title: "Spatiotemporal Heterogeneity of AI-Driven Traffic Flow Patterns and Land Use Interaction: A GeoAI-Based Analysis of Multimodal Urban Mobility",
        summary: "arXiv:2603.05581v1 Announce Type: cross 
Abstract: Urban traffic flow is governed by the complex, nonlinear interaction between land use configuration and spatiotemporally heterogeneous mobility deman...",
        link: "https://arxiv.org/abs/2603.05581",
        source: "ArXiv AI"
    },
    {
        title: "On the Value of Tokeniser Pretraining in Physics Foundation Models",
        summary: "arXiv:2603.05598v1 Announce Type: cross 
Abstract: We investigate the impact of tokeniser pretraining on the accuracy and efficiency of physics emulation. Modern high-resolution simulations produce va...",
        link: "https://arxiv.org/abs/2603.05598",
        source: "ArXiv AI"
    },
    {
        title: "DreamCAD: Scaling Multi-modal CAD Generation using Differentiable Parametric Surfaces",
        summary: "arXiv:2603.05607v1 Announce Type: cross 
Abstract: Computer-Aided Design (CAD) relies on structured and editable geometric representations, yet existing generative methods are constrained by small ann...",
        link: "https://arxiv.org/abs/2603.05607",
        source: "ArXiv AI"
    },
    {
        title: "RACAS: Controlling Diverse Robots With a Single Agentic System",
        summary: "arXiv:2603.05621v1 Announce Type: cross 
Abstract: Many robotic platforms expose an API through which external software can command their actuators and read their sensors. However, transitioning from ...",
        link: "https://arxiv.org/abs/2603.05621",
        source: "ArXiv AI"
    },
    {
        title: "Adversarial Batch Representation Augmentation for Batch Correction in High-Content Cellular Screening",
        summary: "arXiv:2603.05622v1 Announce Type: cross 
Abstract: High-Content Screening routinely generates massive volumes of cell painting images for phenotypic profiling. However, technical variations across exp...",
        link: "https://arxiv.org/abs/2603.05622",
        source: "ArXiv AI"
    },
    {
        title: "Post Fusion Bird's Eye View Feature Stabilization for Robust Multimodal 3D Detection",
        summary: "arXiv:2603.05623v1 Announce Type: cross 
Abstract: Camera-LiDAR fusion is widely used in autonomous driving to enable accurate 3D object detection. However, bird's-eye view (BEV) fusion detectors can ...",
        link: "https://arxiv.org/abs/2603.05623",
        source: "ArXiv AI"
    },
    {
        title: "Relational Semantic Reasoning on 3D Scene Graphs for Open World Interactive Object Search",
        summary: "arXiv:2603.05642v1 Announce Type: cross 
Abstract: Open-world interactive object search in household environments requires understanding semantic relationships between objects and their surrounding co...",
        link: "https://arxiv.org/abs/2603.05642",
        source: "ArXiv AI"
    },
    {
        title: "The Fragility Of Moral Judgment In Large Language Models",
        summary: "arXiv:2603.05651v1 Announce Type: cross 
Abstract: People increasingly use large language models (LLMs) for everyday moral and interpersonal guidance, yet these systems cannot interrogate missing cont...",
        link: "https://arxiv.org/abs/2603.05651",
        source: "ArXiv AI"
    },
    {
        title: "The DSA's Blind Spot: Algorithmic Audit of Advertising and Minor Profiling on TikTok",
        summary: "arXiv:2603.05653v1 Announce Type: cross 
Abstract: Adolescents spend an increasing amount of their time in digital environments where their still-developing cognitive capacities leave them unable to r...",
        link: "https://arxiv.org/abs/2603.05653",
        source: "ArXiv AI"
    },
    {
        title: "When Rubrics Fail: Error Enumeration as Reward in Reference-Free RL Post-Training for Virtual Try-On",
        summary: "arXiv:2603.05659v1 Announce Type: cross 
Abstract: Reinforcement learning with verifiable rewards (RLVR) and Rubrics as Rewards (RaR) have driven strong gains in domains with clear correctness signals...",
        link: "https://arxiv.org/abs/2603.05659",
        source: "ArXiv AI"
    },
    {
        title: "SecureRAG-RTL: A Retrieval-Augmented, Multi-Agent, Zero-Shot LLM-Driven Framework for Hardware Vulnerability Detection",
        summary: "arXiv:2603.05689v1 Announce Type: cross 
Abstract: Large language models (LLMs) have shown remarkable capabilities in natural language processing tasks, yet their application in hardware security veri...",
        link: "https://arxiv.org/abs/2603.05689",
        source: "ArXiv AI"
    },
    {
        title: "Longitudinal Lesion Inpainting in Brain MRI via 3D Region Aware Diffusion",
        summary: "arXiv:2603.05693v1 Announce Type: cross 
Abstract: Accurate longitudinal analysis of brain MRI is often hindered by evolving lesions, which bias automated neuroimaging pipelines. While deep generative...",
        link: "https://arxiv.org/abs/2603.05693",
        source: "ArXiv AI"
    },
    {
        title: "Autonomous Algorithm Discovery for Ptychography via Evolutionary LLM Reasoning",
        summary: "arXiv:2603.05696v1 Announce Type: cross 
Abstract: Ptychography is a computational imaging technique widely used for high-resolution materials characterization, but high-quality reconstructions often ...",
        link: "https://arxiv.org/abs/2603.05696",
        source: "ArXiv AI"
    },
    {
        title: "The Rise of AI in Weather and Climate Information and its Impact on Global Inequality",
        summary: "arXiv:2603.05710v1 Announce Type: cross 
Abstract: The rapid adoption of AI in Earth system science promises unprecedented speed and fidelity in the generation of climate information. However, this te...",
        link: "https://arxiv.org/abs/2603.05710",
        source: "ArXiv AI"
    },
    {
        title: "Cultural Perspectives and Expectations for Generative AI: A Global Survey Approach",
        summary: "arXiv:2603.05723v1 Announce Type: cross 
Abstract: There is a lack of empirical evidence about global attitudes around whether and how GenAI should represent cultures. This paper assesses understandin...",
        link: "https://arxiv.org/abs/2603.05723",
        source: "ArXiv AI"
    },
    {
        title: "LTLGuard: Formalizing LTL Specifications with Compact Language Models and Lightweight Symbolic Reasoning",
        summary: "arXiv:2603.05728v1 Announce Type: cross 
Abstract: Translating informal requirements into formal specifications is challenging due to the ambiguity and variability of natural language (NL). This chall...",
        link: "https://arxiv.org/abs/2603.05728",
        source: "ArXiv AI"
    },
    {
        title: "Revisiting the (Sub)Optimality of Best-of-N for Inference-Time Alignment",
        summary: "arXiv:2603.05739v1 Announce Type: cross 
Abstract: Best-of-N (BoN) sampling is a widely used inference-time alignment method for language models, whereby N candidate responses are sampled from a refer...",
        link: "https://arxiv.org/abs/2603.05739",
        source: "ArXiv AI"
    },
    {
        title: "TML-Bench: Benchmark for Data Science Agents on Tabular ML Tasks",
        summary: "arXiv:2603.05764v1 Announce Type: cross 
Abstract: Autonomous coding agents can produce strong tabular baselines quickly on Kaggle-style tasks. Practical value depends on end-to-end correctness and re...",
        link: "https://arxiv.org/abs/2603.05764",
        source: "ArXiv AI"
    },
    {
        title: "Bridging Domains through Subspace-Aware Model Merging",
        summary: "arXiv:2603.05768v1 Announce Type: cross 
Abstract: Model merging integrates multiple task-specific models into a single consolidated one. Recent research has made progress in improving merging perform...",
        link: "https://arxiv.org/abs/2603.05768",
        source: "ArXiv AI"
    },
    {
        title: "Depth Charge: Jailbreak Large Language Models from Deep Safety Attention Heads",
        summary: "arXiv:2603.05772v1 Announce Type: cross 
Abstract: Currently, open-sourced large language models (OSLLMs) have demonstrated remarkable generative performance. However, as their structure and weights a...",
        link: "https://arxiv.org/abs/2603.05772",
        source: "ArXiv AI"
    },
    {
        title: "Knowing without Acting: The Disentangled Geometry of Safety Mechanisms in Large Language Models",
        summary: "arXiv:2603.05773v1 Announce Type: cross 
Abstract: Safety alignment is often conceptualized as a monolithic process wherein harmfulness detection automatically triggers refusal. However, the persisten...",
        link: "https://arxiv.org/abs/2603.05773",
        source: "ArXiv AI"
    },
    {
        title: "PVminerLLM: Structured Extraction of Patient Voice from Patient-Generated Text using Large Language Models",
        summary: "arXiv:2603.05776v1 Announce Type: cross 
Abstract: Motivation: Patient-generated text contains critical information about patients' lived experiences, social circumstances, and engagement in care, inc...",
        link: "https://arxiv.org/abs/2603.05776",
        source: "ArXiv AI"
    },
    {
        title: "Balancing Domestic and Global Perspectives: Evaluating Dual-Calibration and LLM-Generated Nudges for Diverse News Recommendation",
        summary: "arXiv:2603.05780v1 Announce Type: cross 
Abstract: In this study, we applied the ``personalized diversity nudge framework'' with the goal of expanding user reading coverage in terms of news locality (...",
        link: "https://arxiv.org/abs/2603.05780",
        source: "ArXiv AI"
    },
    {
        title: "Visual Words Meet BM25: Sparse Auto-Encoder Visual Word Scoring for Image Retrieval",
        summary: "arXiv:2603.05781v1 Announce Type: cross 
Abstract: Dense image retrieval is accurate but offers limited interpretability and attribution, and it can be compute-intensive at scale. We present \textbf{B...",
        link: "https://arxiv.org/abs/2603.05781",
        source: "ArXiv AI"
    },
    {
        title: "Proof-of-Guardrail in AI Agents and What (Not) to Trust from It",
        summary: "arXiv:2603.05786v1 Announce Type: cross 
Abstract: As AI agents become widely deployed as online services, users often rely on an agent developer's claim about how safety is enforced, which introduces...",
        link: "https://arxiv.org/abs/2603.05786",
        source: "ArXiv AI"
    },
    {
        title: "StreamWise: Serving Multi-Modal Generation in Real-Time at Scale",
        summary: "arXiv:2603.05800v1 Announce Type: cross 
Abstract: Advances in multi-modal generative models are enabling new applications, from storytelling to automated media synthesis. Most current workloads gener...",
        link: "https://arxiv.org/abs/2603.05800",
        source: "ArXiv AI"
    },
    {
        title: "Ambiguity Collapse by LLMs: A Taxonomy of Epistemic Risks",
        summary: "arXiv:2603.05801v1 Announce Type: cross 
Abstract: Large language models (LLMs) are increasingly used to make sense of ambiguous, open-textured, value-laden terms. Platforms routinely rely on LLMs for...",
        link: "https://arxiv.org/abs/2603.05801",
        source: "ArXiv AI"
    },
    {
        title: "Margin and Consistency Supervision for Calibrated and Robust Vision Models",
        summary: "arXiv:2603.05812v1 Announce Type: cross 
Abstract: Deep vision classifiers often achieve high accuracy while remaining poorly calibrated and fragile under small distribution shifts. We present Margin ...",
        link: "https://arxiv.org/abs/2603.05812",
        source: "ArXiv AI"
    },
    {
        title: "Lexara: A User-Centered Toolkit for Evaluating Large Language Models for Conversational Visual Analytics",
        summary: "arXiv:2603.05832v1 Announce Type: cross 
Abstract: Large Language Models (LLMs) are transforming Conversational Visual Analytics (CVA) by enabling data analysis through natural language. However, eval...",
        link: "https://arxiv.org/abs/2603.05832",
        source: "ArXiv AI"
    },
    {
        title: "Evaluating LLM Alignment With Human Trust Models",
        summary: "arXiv:2603.05839v1 Announce Type: cross 
Abstract: Trust plays a pivotal role in enabling effective cooperation, reducing uncertainty, and guiding decision-making in both human interactions and multi-...",
        link: "https://arxiv.org/abs/2603.05839",
        source: "ArXiv AI"
    },
    {
        title: "Remote Sensing Image Classification Using Deep Ensemble Learning",
        summary: "arXiv:2603.05844v1 Announce Type: cross 
Abstract: Remote sensing imagery plays a crucial role in many applications and requires accurate computerized classification techniques. Reliable classificatio...",
        link: "https://arxiv.org/abs/2603.05844",
        source: "ArXiv AI"
    },
    {
        title: "Computational Pathology in the Era of Emerging Foundation and Agentic AI -- International Expert Perspectives on Clinical Integration and Translational Readiness",
        summary: "arXiv:2603.05884v1 Announce Type: cross 
Abstract: Recent breakthroughs in artificial intelligence through foundation models and agents have accelerated the evolution of computational pathology. Demon...",
        link: "https://arxiv.org/abs/2603.05884",
        source: "ArXiv AI"
    },
    {
        title: "Reconstruct! Don't Encode: Self-Supervised Representation Reconstruction Loss for High-Intelligibility and Low-Latency Streaming Neural Audio Codec",
        summary: "arXiv:2603.05887v1 Announce Type: cross 
Abstract: Neural audio codecs optimized for mel-spectrogram reconstruction often fail to preserve intelligibility. While semantic encoder distillation improves...",
        link: "https://arxiv.org/abs/2603.05887",
        source: "ArXiv AI"
    },
    {
        title: "Lost in Stories: Consistency Bugs in Long Story Generation by LLMs",
        summary: "arXiv:2603.05890v1 Announce Type: cross 
Abstract: What happens when a storyteller forgets its own story? Large Language Models (LLMs) can now generate narratives spanning tens of thousands of words, ...",
        link: "https://arxiv.org/abs/2603.05890",
        source: "ArXiv AI"
    },
    {
        title: "Reference-guided Policy Optimization for Molecular Optimization via LLM Reasoning",
        summary: "arXiv:2603.05900v1 Announce Type: cross 
Abstract: Large language models (LLMs) benefit substantially from supervised fine-tuning (SFT) and reinforcement learning with verifiable rewards (RLVR) in rea...",
        link: "https://arxiv.org/abs/2603.05900",
        source: "ArXiv AI"
    },
    {
        title: "LUMINA: LLM-Guided GPU Architecture Exploration via Bottleneck Analysis",
        summary: "arXiv:2603.05904v1 Announce Type: cross 
Abstract: GPU design space exploration (DSE) for modern AI workloads, such as Large-Language Model (LLM) inference, is challenging because of GPUs' vast, multi...",
        link: "https://arxiv.org/abs/2603.05904",
        source: "ArXiv AI"
    },
    {
        title: "CORE-Seg: Reasoning-Driven Segmentation for Complex Lesions via Reinforcement Learning",
        summary: "arXiv:2603.05911v1 Announce Type: cross 
Abstract: Medical image segmentation is undergoing a paradigm shift from conventional visual pattern matching to cognitive reasoning analysis. Although Multimo...",
        link: "https://arxiv.org/abs/2603.05911",
        source: "ArXiv AI"
    },
    {
        title: "Stock Market Prediction Using Node Transformer Architecture Integrated with BERT Sentiment Analysis",
        summary: "arXiv:2603.05917v1 Announce Type: cross 
Abstract: Stock market prediction presents considerable challenges for investors, financial institutions, and policymakers operating in complex market environm...",
        link: "https://arxiv.org/abs/2603.05917",
        source: "ArXiv AI"
    },
    {
        title: "BlackMirror: Black-Box Backdoor Detection for Text-to-Image Models via Instruction-Response Deviation",
        summary: "arXiv:2603.05921v1 Announce Type: cross 
Abstract: This paper investigates the challenging task of detecting backdoored text-to-image models under black-box settings and introduces a novel detection f...",
        link: "https://arxiv.org/abs/2603.05921",
        source: "ArXiv AI"
    },
    {
        title: "RAC: Rectified Flow Auto Coder",
        summary: "arXiv:2603.05925v1 Announce Type: cross 
Abstract: In this paper, we propose a Rectified Flow Auto Coder (RAC) inspired by Rectified Flow to replace the traditional VAE: 1. It achieves multi-step deco...",
        link: "https://arxiv.org/abs/2603.05925",
        source: "ArXiv AI"
    },
    {
        title: "Addressing the Ecological Fallacy in Larger LMs with Human Context",
        summary: "arXiv:2603.05928v1 Announce Type: cross 
Abstract: Language model training and inference ignore a fundamental linguistic fact -- there is a dependence between multiple sequences of text written by the...",
        link: "https://arxiv.org/abs/2603.05928",
        source: "ArXiv AI"
    },
    {
        title: "Facial Expression Recognition Using Residual Masking Network",
        summary: "arXiv:2603.05937v1 Announce Type: cross 
Abstract: Automatic facial expression recognition (FER) has gained much attention due to its applications in human-computer interaction. Among the approaches t...",
        link: "https://arxiv.org/abs/2603.05937",
        source: "ArXiv AI"
    },
    {
        title: "XAI for Coding Agent Failures: Transforming Raw Execution Traces into Actionable Insights",
        summary: "arXiv:2603.05941v1 Announce Type: cross 
Abstract: Large Language Model (LLM)-based coding agents show promise in automating software development tasks, yet they frequently fail in ways that are diffi...",
        link: "https://arxiv.org/abs/2603.05941",
        source: "ArXiv AI"
    },
    {
        title: "Energy-Driven Adaptive Visual Token Pruning for Efficient Vision-Language Models",
        summary: "arXiv:2603.05950v1 Announce Type: cross 
Abstract: Visual token reduction is critical for accelerating Vision-Language Models (VLMs), yet most existing approaches rely on a fixed budget shared across ...",
        link: "https://arxiv.org/abs/2603.05950",
        source: "ArXiv AI"
    },
    {
        title: "Who We Are, Where We Are: Mental Health at the Intersection of Person, Situation, and Large Language Models",
        summary: "arXiv:2603.05953v1 Announce Type: cross 
Abstract: Mental health is not a fixed trait but a dynamic process shaped by the interplay between individual dispositions and situational contexts. Building o...",
        link: "https://arxiv.org/abs/2603.05953",
        source: "ArXiv AI"
    },
    {
        title: "Domain-Adaptive Model Merging across Disconnected Modes",
        summary: "arXiv:2603.05957v1 Announce Type: cross 
Abstract: Learning across domains is challenging when data cannot be centralized due to privacy or heterogeneity, which limits the ability to train a single co...",
        link: "https://arxiv.org/abs/2603.05957",
        source: "ArXiv AI"
    },
    {
        title: "Skeleton-to-Image Encoding: Enabling Skeleton Representation Learning via Vision-Pretrained Models",
        summary: "arXiv:2603.05963v1 Announce Type: cross 
Abstract: Recent advances in large-scale pretrained vision models have demonstrated impressive capabilities across a wide range of downstream tasks, including ...",
        link: "https://arxiv.org/abs/2603.05963",
        source: "ArXiv AI"
    },
    {
        title: "Imagine How To Change: Explicit Procedure Modeling for Change Captioning",
        summary: "arXiv:2603.05969v1 Announce Type: cross 
Abstract: Change captioning generates descriptions that explicitly describe the differences between two visually similar images. Existing methods operate on st...",
        link: "https://arxiv.org/abs/2603.05969",
        source: "ArXiv AI"
    },
    {
        title: "Technical Report: Automated Optical Inspection of Surgical Instruments",
        summary: "arXiv:2603.05987v1 Announce Type: cross 
Abstract: In the dynamic landscape of modern healthcare, maintaining the highest standards in surgical instruments is critical for clinical success. This repor...",
        link: "https://arxiv.org/abs/2603.05987",
        source: "ArXiv AI"
    },
    {
        title: "TADPO: Reinforcement Learning Goes Off-road",
        summary: "arXiv:2603.05995v1 Announce Type: cross 
Abstract: Off-road autonomous driving poses significant challenges such as navigating unmapped, variable terrain with uncertain and diverse dynamics. Addressin...",
        link: "https://arxiv.org/abs/2603.05995",
        source: "ArXiv AI"
    },
    {
        title: "MM-ISTS: Cooperating Irregularly Sampled Time Series Forecasting with Multimodal Vision-Text LLMs",
        summary: "arXiv:2603.05997v1 Announce Type: cross 
Abstract: Irregularly sampled time series (ISTS) are widespread in real-world scenarios, exhibiting asynchronous observations on uneven time intervals across v...",
        link: "https://arxiv.org/abs/2603.05997",
        source: "ArXiv AI"
    },
    {
        title: "Restoring Linguistic Grounding in VLA Models via Train-Free Attention Recalibration",
        summary: "arXiv:2603.06001v1 Announce Type: cross 
Abstract: Vision-Language-Action (VLA) models enable robots to perform manipulation tasks directly from natural language instructions and are increasingly view...",
        link: "https://arxiv.org/abs/2603.06001",
        source: "ArXiv AI"
    },
    {
        title: "Demystifying KAN for Vision Tasks: The RepKAN Approach",
        summary: "arXiv:2603.06002v1 Announce Type: cross 
Abstract: Remote sensing image classification is essential for Earth observation, yet standard CNNs and Transformers often function as uninterpretable black-bo...",
        link: "https://arxiv.org/abs/2603.06002",
        source: "ArXiv AI"
    },
    {
        title: "MASFactory: A Graph-centric Framework for Orchestrating LLM-Based Multi-Agent Systems with Vibe Graphing",
        summary: "arXiv:2603.06007v1 Announce Type: cross 
Abstract: Large language model-based (LLM-based) multi-agent systems (MAS) are increasingly used to extend agentic problem solving via role specialization and ...",
        link: "https://arxiv.org/abs/2603.06007",
        source: "ArXiv AI"
    },
    {
        title: "Sensitivity-Aware Retrieval-Augmented Intent Clarification",
        summary: "arXiv:2603.06025v1 Announce Type: cross 
Abstract: In conversational search systems, a key component is to determine and clarify the intent behind complex queries. We view intent clarification in ligh...",
        link: "https://arxiv.org/abs/2603.06025",
        source: "ArXiv AI"
    },
    {
        title: "Probing Visual Concepts in Lightweight Vision-Language Models for Automated Driving",
        summary: "arXiv:2603.06054v1 Announce Type: cross 
Abstract: The use of Vision-Language Models (VLMs) in automated driving applications is becoming increasingly common, with the aim of leveraging their reasonin...",
        link: "https://arxiv.org/abs/2603.06054",
        source: "ArXiv AI"
    },
    {
        title: "TempoSyncDiff: Distilled Temporally-Consistent Diffusion for Low-Latency Audio-Driven Talking Head Generation",
        summary: "arXiv:2603.06057v1 Announce Type: cross 
Abstract: Diffusion models have recently advanced photorealistic human synthesis, although practical talking-head generation (THG) remains constrained by high ...",
        link: "https://arxiv.org/abs/2603.06057",
        source: "ArXiv AI"
    },
    {
        title: "Evaluating Austrian A-Level German Essays with Large Language Models for Automated Essay Scoring",
        summary: "arXiv:2603.06066v1 Announce Type: cross 
Abstract: Automated Essay Scoring (AES) has been explored for decades with the goal to support teachers by reducing grading workload and mitigating subjective ...",
        link: "https://arxiv.org/abs/2603.06066",
        source: "ArXiv AI"
    },
    {
        title: "Text-Driven Emotionally Continuous Talking Face Generation",
        summary: "arXiv:2603.06071v1 Announce Type: cross 
Abstract: Talking Face Generation (TFG) strives to create realistic and emotionally expressive digital faces. While previous TFG works have mastered the creati...",
        link: "https://arxiv.org/abs/2603.06071",
        source: "ArXiv AI"
    },
    {
        title: "Lifelong Embodied Navigation Learning",
        summary: "arXiv:2603.06073v1 Announce Type: cross 
Abstract: Embodied navigation agents powered by large language models have shown strong performance on individual tasks but struggle to continually acquire new...",
        link: "https://arxiv.org/abs/2603.06073",
        source: "ArXiv AI"
    },
    {
        title: "StreamVoiceAnon+: Emotion-Preserving Streaming Speaker Anonymization via Frame-Level Acoustic Distillation",
        summary: "arXiv:2603.06079v1 Announce Type: cross 
Abstract: We address the challenge of preserving emotional content in streaming speaker anonymization (SA). Neural audio codec language models trained for audi...",
        link: "https://arxiv.org/abs/2603.06079",
        source: "ArXiv AI"
    },
    {
        title: "Experiences Build Characters: The Linguistic Origins and Functional Impact of LLM Personality",
        summary: "arXiv:2603.06088v1 Announce Type: cross 
Abstract: Human problem-solving is enriched by a diversity of styles and personality traits, yet the development of Large Language Models (LLMs) has largely pr...",
        link: "https://arxiv.org/abs/2603.06088",
        source: "ArXiv AI"
    },
    {
        title: "Making Implicit Premises Explicit in Logical Understanding of Enthymemes",
        summary: "arXiv:2603.06114v1 Announce Type: cross 
Abstract: Real-world arguments in text and dialogues are normally enthymemes (i.e. some of their premises and/or claims are implicit). Natural language process...",
        link: "https://arxiv.org/abs/2603.06114",
        source: "ArXiv AI"
    },
    {
        title: "A Hazard-Informed Data Pipeline for Robotics Physical Safety",
        summary: "arXiv:2603.06130v1 Announce Type: cross 
Abstract: This report presents a structured Robotics Physical Safety Framework based on explicit asset declaration, systematic vulnerability enumeration, and h...",
        link: "https://arxiv.org/abs/2603.06130",
        source: "ArXiv AI"
    },
    {
        title: "A Causal Graph Approach to Oppositional Narrative Analysis",
        summary: "arXiv:2603.06135v1 Announce Type: cross 
Abstract: Current methods for textual analysis rely on data annotated within predefined ontologies, often embedding human bias within black-box models. Despite...",
        link: "https://arxiv.org/abs/2603.06135",
        source: "ArXiv AI"
    },
    {
        title: "Partial Policy Gradients for RL in LLMs",
        summary: "arXiv:2603.06138v1 Announce Type: cross 
Abstract: Reinforcement learning is a framework for learning to act sequentially in an unknown environment. We propose a natural approach for modeling policy s...",
        link: "https://arxiv.org/abs/2603.06138",
        source: "ArXiv AI"
    },
    {
        title: "Place-it-R1: Unlocking Environment-aware Reasoning Potential of MLLM for Video Object Insertion",
        summary: "arXiv:2603.06140v1 Announce Type: cross 
Abstract: Modern video editing techniques have achieved high visual fidelity when inserting video objects. However, they focus on optimizing visual fidelity ra...",
        link: "https://arxiv.org/abs/2603.06140",
        source: "ArXiv AI"
    },
    {
        title: "Predictive Coding Graphs are a Superset of Feedforward Neural Networks",
        summary: "arXiv:2603.06142v1 Announce Type: cross 
Abstract: Predictive coding graphs (PCGs) are a recently introduced generalization to predictive coding networks, a neuroscience-inspired probabilistic latent ...",
        link: "https://arxiv.org/abs/2603.06142",
        source: "ArXiv AI"
    },
    {
        title: "VLM-RobustBench: A Comprehensive Benchmark for Robustness of Vision-Language Models",
        summary: "arXiv:2603.06148v1 Announce Type: cross 
Abstract: Vision-language models (VLMs) achieve strong performance on standard, high-quality datasets, but we still do not fully understand how they perform un...",
        link: "https://arxiv.org/abs/2603.06148",
        source: "ArXiv AI"
    },
    {
        title: "Ensemble Graph Neural Networks for Probabilistic Sea Surface Temperature Forecasting via Input Perturbations",
        summary: "arXiv:2603.06153v1 Announce Type: cross 
Abstract: Accurate regional ocean forecasting requires models that are both computationally efficient and capable of representing predictive uncertainty. This ...",
        link: "https://arxiv.org/abs/2603.06153",
        source: "ArXiv AI"
    },
    {
        title: "Do Compact SSL Backbones Matter for Audio Deepfake Detection? A Controlled Study with RAPTOR",
        summary: "arXiv:2603.06164v1 Announce Type: cross 
Abstract: Self-supervised learning (SSL) underpins modern audio deepfake detection, yet most prior work centers on a single large wav2vec2-XLSR backbone, leavi...",
        link: "https://arxiv.org/abs/2603.06164",
        source: "ArXiv AI"
    },
    {
        title: "Reflective Flow Sampling Enhancement",
        summary: "arXiv:2603.06165v1 Announce Type: cross 
Abstract: The growing demand for text-to-image generation has led to rapid advances in generative modeling. Recently, text-to-image diffusion models trained wi...",
        link: "https://arxiv.org/abs/2603.06165",
        source: "ArXiv AI"
    },
    {
        title: "Contrastive-to-Self-Supervised: A Two-Stage Framework for Script Similarity Learning",
        summary: "arXiv:2603.06180v1 Announce Type: cross 
Abstract: Learning similarity metrics for glyphs and writing systems faces a fundamental challenge: while individual graphemes within invented alphabets can be...",
        link: "https://arxiv.org/abs/2603.06180",
        source: "ArXiv AI"
    },
    {
        title: "CRIMSON: A Clinically-Grounded LLM-Based Metric for Generative Radiology Report Evaluation",
        summary: "arXiv:2603.06183v1 Announce Type: cross 
Abstract: We introduce CRIMSON, a clinically grounded evaluation framework for chest X-ray report generation that assesses reports based on diagnostic correctn...",
        link: "https://arxiv.org/abs/2603.06183",
        source: "ArXiv AI"
    },
    {
        title: "Whisper-CD: Accurate Long-Form Speech Recognition using Multi-Negative Contrastive Decoding",
        summary: "arXiv:2603.06193v1 Announce Type: cross 
Abstract: Long-form speech recognition with large encoder-decoder models such as Whisper often exhibit hallucinations, repetition loops, and content omissions....",
        link: "https://arxiv.org/abs/2603.06193",
        source: "ArXiv AI"
    },
    {
        title: "MAPO: Mixed Advantage Policy Optimization for Long-Horizon Multi-Turn Dialogue",
        summary: "arXiv:2603.06194v1 Announce Type: cross 
Abstract: Subjective multi-turn dialogue tasks, such as emotional support, require conversational policies that adapt to evolving user states and optimize long...",
        link: "https://arxiv.org/abs/2603.06194",
        source: "ArXiv AI"
    },
    {
        title: "FlashPrefill: Instantaneous Pattern Discovery and Thresholding for Ultra-Fast Long-Context Prefilling",
        summary: "arXiv:2603.06199v1 Announce Type: cross 
Abstract: Long-context modeling is a pivotal capability for Large Language Models, yet the quadratic complexity of attention remains a critical bottleneck, par...",
        link: "https://arxiv.org/abs/2603.06199",
        source: "ArXiv AI"
    },
    {
        title: "Cut to the Chase: Training-free Multimodal Summarization via Chain-of-Events",
        summary: "arXiv:2603.06213v1 Announce Type: cross 
Abstract: Multimodal Summarization (MMS) aims to generate concise textual summaries by understanding and integrating information across videos, transcripts, an...",
        link: "https://arxiv.org/abs/2603.06213",
        source: "ArXiv AI"
    },
    {
        title: "TaPD: Temporal-adaptive Progressive Distillation for Observation-Adaptive Trajectory Forecasting in Autonomous Driving",
        summary: "arXiv:2603.06231v1 Announce Type: cross 
Abstract: Trajectory prediction is essential for autonomous driving, enabling vehicles to anticipate the motion of surrounding agents to support safe planning....",
        link: "https://arxiv.org/abs/2603.06231",
        source: "ArXiv AI"
    },
    {
        title: "GazeMoE: Perception of Gaze Target with Mixture-of-Experts",
        summary: "arXiv:2603.06256v1 Announce Type: cross 
Abstract: Estimating human gaze target from visible images is a critical task for robots to understand human attention, yet the development of generalizable ne...",
        link: "https://arxiv.org/abs/2603.06256",
        source: "ArXiv AI"
    },
    {
        title: "Learning to Solve Orienteering Problem with Time Windows and Variable Profits",
        summary: "arXiv:2603.06260v1 Announce Type: cross 
Abstract: The orienteering problem with time windows and variable profits (OPTWVP) is common in many real-world applications and involves continuous time varia...",
        link: "https://arxiv.org/abs/2603.06260",
        source: "ArXiv AI"
    },
    {
        title: "HiPP-Prune: Hierarchical Preference-Conditioned Structured Pruning for Vision-Language Models",
        summary: "arXiv:2603.06270v1 Announce Type: cross 
Abstract: Pruning vision-language models (VLMs) for efficient deployment is challenging because compression can affect not only task utility but also visual gr...",
        link: "https://arxiv.org/abs/2603.06270",
        source: "ArXiv AI"
    },
    {
        title: "Agentic retrieval-augmented reasoning reshapes collective reliability under model variability in radiology question answering",
        summary: "arXiv:2603.06271v1 Announce Type: cross 
Abstract: Agentic retrieval-augmented reasoning pipelines are increasingly used to structure how large language models (LLMs) incorporate external evidence in ...",
        link: "https://arxiv.org/abs/2603.06271",
        source: "ArXiv AI"
    },
    {
        title: "Looking Through Glass Box",
        summary: "arXiv:2603.06272v1 Announce Type: cross 
Abstract: This essay is about a neural implementation of the fuzzy cognitive map, the FHM, and corresponding evaluations. Firstly, a neural net has been design...",
        link: "https://arxiv.org/abs/2603.06272",
        source: "ArXiv AI"
    },
    {
        title: "Stem: Rethinking Causal Information Flow in Sparse Attention",
        summary: "arXiv:2603.06274v1 Announce Type: cross 
Abstract: The quadratic computational complexity of self-attention remains a fundamental bottleneck for scaling Large Language Models (LLMs) to long contexts, ...",
        link: "https://arxiv.org/abs/2603.06274",
        source: "ArXiv AI"
    },
    {
        title: "Learning Where the Physics Is: Probabilistic Adaptive Sampling for Stiff PDEs",
        summary: "arXiv:2603.06287v1 Announce Type: cross 
Abstract: Modeling stiff partial differential equations (PDEs) with sharp gradients remains a significant challenge for scientific machine learning. While Phys...",
        link: "https://arxiv.org/abs/2603.06287",
        source: "ArXiv AI"
    },
    {
        title: "DEX-AR: A Dynamic Explainability Method for Autoregressive Vision-Language Models",
        summary: "arXiv:2603.06302v1 Announce Type: cross 
Abstract: As Vision-Language Models (VLMs) become increasingly sophisticated and widely used, it becomes more and more crucial to understand their decision-mak...",
        link: "https://arxiv.org/abs/2603.06302",
        source: "ArXiv AI"
    },
    {
        title: "From Entropy to Calibrated Uncertainty: Training Language Models to Reason About Uncertainty",
        summary: "arXiv:2603.06317v1 Announce Type: cross 
Abstract: Large Language Models (LLMs) that can express interpretable and calibrated uncertainty are crucial in high-stakes domains. While methods to compute u...",
        link: "https://arxiv.org/abs/2603.06317",
        source: "ArXiv AI"
    },
    {
        title: "Structured Exploration vs. Generative Flexibility: A Field Study Comparing Bandit and LLM Architectures for Personalised Health Behaviour Interventions",
        summary: "arXiv:2603.06330v1 Announce Type: cross 
Abstract: Behaviour Change Techniques (BCTs) are central to digital health interventions, yet selecting and delivering effective techniques remains challenging...",
        link: "https://arxiv.org/abs/2603.06330",
        source: "ArXiv AI"
    },
    {
        title: "AI End-to-End Radiation Treatment Planning Under One Second",
        summary: "arXiv:2603.06338v1 Announce Type: cross 
Abstract: Artificial intelligence-based radiation therapy (RT) planning has the potential to reduce planning time and inter-planner variability, improving effi...",
        link: "https://arxiv.org/abs/2603.06338",
        source: "ArXiv AI"
    },
    {
        title: "K-MaT: Knowledge-Anchored Manifold Transport for Cross-Modal Prompt Learning in Medical Imaging",
        summary: "arXiv:2603.06340v1 Announce Type: cross 
Abstract: Large-scale biomedical vision-language models (VLMs) adapted on high-end imaging (e.g., CT) often fail to transfer to frontline low-end modalities (e...",
        link: "https://arxiv.org/abs/2603.06340",
        source: "ArXiv AI"
    },
    {
        title: "MoEless: Efficient MoE LLM Serving via Serverless Computing",
        summary: "arXiv:2603.06350v1 Announce Type: cross 
Abstract: Large Language Models (LLMs) have become a cornerstone of AI, driving progress across diverse domains such as content creation, search and recommenda...",
        link: "https://arxiv.org/abs/2603.06350",
        source: "ArXiv AI"
    },
    {
        title: "Dynamic Chunking Diffusion Transformer",
        summary: "arXiv:2603.06351v1 Announce Type: cross 
Abstract: Diffusion Transformers process images as fixed-length sequences of tokens produced by a static $\textit{patchify}$ operation. While effective, this d...",
        link: "https://arxiv.org/abs/2603.06351",
        source: "ArXiv AI"
    },
    {
        title: "CLAIRE: Compressed Latent Autoencoder for Industrial Representation and Evaluation -- A Deep Learning Framework for Smart Manufacturing",
        summary: "arXiv:2603.06361v1 Announce Type: cross 
Abstract: Accurate fault detection in high-dimensional industrial environments remains a major challenge due to the inherent complexity, noise, and redundancy ...",
        link: "https://arxiv.org/abs/2603.06361",
        source: "ArXiv AI"
    },
    {
        title: "ESAA-Security: An Event-Sourced, Verifiable Architecture for Agent-Assisted Security Audits of AI-Generated Code",
        summary: "arXiv:2603.06365v1 Announce Type: cross 
Abstract: AI-assisted software generation has increased development speed, but it has also amplified a persistent engineering problem: systems that are functio...",
        link: "https://arxiv.org/abs/2603.06365",
        source: "ArXiv AI"
    },
    {
        title: "Kinetic-based regularization: Learning spatial derivatives and PDE applications",
        summary: "arXiv:2603.06380v1 Announce Type: cross 
Abstract: Accurate estimation of spatial derivatives from discrete and noisy data is central to scientific machine learning and numerical solutions of PDEs. We...",
        link: "https://arxiv.org/abs/2603.06380",
        source: "ArXiv AI"
    },
    {
        title: "Prompt Group-Aware Training for Robust Text-Guided Nuclei Segmentation",
        summary: "arXiv:2603.06384v1 Announce Type: cross 
Abstract: Foundation models such as Segment Anything Model 3 (SAM3) enable flexible text-guided medical image segmentation, yet their predictions remain highly...",
        link: "https://arxiv.org/abs/2603.06384",
        source: "ArXiv AI"
    },
    {
        title: "Physical Simulator In-the-Loop Video Generation",
        summary: "arXiv:2603.06408v1 Announce Type: cross 
Abstract: Recent advances in diffusion-based video generation have achieved remarkable visual realism but still struggle to obey basic physical laws such as gr...",
        link: "https://arxiv.org/abs/2603.06408",
        source: "ArXiv AI"
    },
    {
        title: "A Reference Architecture of Reinforcement Learning Frameworks",
        summary: "arXiv:2603.06413v1 Announce Type: cross 
Abstract: The surge in reinforcement learning (RL) applications gave rise to diverse supporting technology, such as RL frameworks. However, the architectural p...",
        link: "https://arxiv.org/abs/2603.06413",
        source: "ArXiv AI"
    },
    {
        title: "CLoPA: Continual Low Parameter Adaptation of Interactive Segmentation for Medical Image Annotation",
        summary: "arXiv:2603.06426v1 Announce Type: cross 
Abstract: Interactive segmentation enables clinicians to guide annotation, but existing zero-shot models like nnInteractive fail to consistently reach expert-l...",
        link: "https://arxiv.org/abs/2603.06426",
        source: "ArXiv AI"
    },
    {
        title: "Abductive Reasoning with Syllogistic Forms in Large Language Models",
        summary: "arXiv:2603.06428v1 Announce Type: cross 
Abstract: Research in AI using Large-Language Models (LLMs) is rapidly evolving, and the comparison of their performance with human reasoning has become a key ...",
        link: "https://arxiv.org/abs/2603.06428",
        source: "ArXiv AI"
    },
    {
        title: "Prosodic Boundary-Aware Streaming Generation for LLM-Based TTS with Streaming Text Input",
        summary: "arXiv:2603.06444v1 Announce Type: cross 
Abstract: Streaming TTS that receives streaming text is essential for interactive systems, yet this scheme faces two major challenges: unnatural prosody due to...",
        link: "https://arxiv.org/abs/2603.06444",
        source: "ArXiv AI"
    },
    {
        title: "Do Foundation Models Know Geometry? Probing Frozen Features for Continuous Physical Measurement",
        summary: "arXiv:2603.06459v1 Announce Type: cross 
Abstract: Vision-language models encode continuous geometry that their text pathway fails to express: a 6,000-parameter linear probe extracts hand joint angles...",
        link: "https://arxiv.org/abs/2603.06459",
        source: "ArXiv AI"
    },
    {
        title: "PONTE: Personalized Orchestration for Natural Language Trustworthy Explanations",
        summary: "arXiv:2603.06485v1 Announce Type: cross 
Abstract: Explainable Artificial Intelligence (XAI) seeks to enhance the transparency and accountability of machine learning systems, yet most methods follow a...",
        link: "https://arxiv.org/abs/2603.06485",
        source: "ArXiv AI"
    },
    {
        title: "NOBLE: Accelerating Transformers with Nonlinear Low-Rank Branches",
        summary: "arXiv:2603.06492v1 Announce Type: cross 
Abstract: We introduce NOBLE (Nonlinear lOw-rank Branch for Linear Enhancement), an architectural augmentation that adds nonlinear low-rank branches to transfo...",
        link: "https://arxiv.org/abs/2603.06492",
        source: "ArXiv AI"
    },
    {
        title: "COLD-Steer: Steering Large Language Models via In-Context One-step Learning Dynamics",
        summary: "arXiv:2603.06495v1 Announce Type: cross 
Abstract: Activation steering methods enable inference-time control of large language model (LLM) behavior without retraining, but current approaches face a fu...",
        link: "https://arxiv.org/abs/2603.06495",
        source: "ArXiv AI"
    },
    {
        title: "Artificial Intelligence for Detecting Fetal Orofacial Clefts and Advancing Medical Education",
        summary: "arXiv:2603.06522v1 Announce Type: cross 
Abstract: Orofacial clefts are among the most common congenital craniofacial abnormalities, yet accurate prenatal detection remains challenging due to the scar...",
        link: "https://arxiv.org/abs/2603.06522",
        source: "ArXiv AI"
    },
    {
        title: "RAMoEA-QA: Hierarchical Specialization for Robust Respiratory Audio Question Answering",
        summary: "arXiv:2603.06542v1 Announce Type: cross 
Abstract: Conversational generative AI is rapidly entering healthcare, where general-purpose models must integrate heterogeneous patient signals and support di...",
        link: "https://arxiv.org/abs/2603.06542",
        source: "ArXiv AI"
    },
    {
        title: "LiveSense: A Real-Time Wi-Fi Sensing Platform for Range-Doppler on COTS Laptop",
        summary: "arXiv:2603.06545v1 Announce Type: cross 
Abstract: We present LiveSense - a cross-platform that transforms a commercial off-the-shelf (COTS) Wi-Fi Network Interface Card (NIC) on a laptop into a centi...",
        link: "https://arxiv.org/abs/2603.06545",
        source: "ArXiv AI"
    },
    {
        title: "SUREON: A Benchmark and Vision-Language-Model for Surgical Reasoning",
        summary: "arXiv:2603.06570v1 Announce Type: cross 
Abstract: Surgeons don't just see -- they interpret. When an expert observes a surgical scene, they understand not only what instrument is being used, but why ...",
        link: "https://arxiv.org/abs/2603.06570",
        source: "ArXiv AI"
    },
    {
        title: "Fly360: Omnidirectional Obstacle Avoidance within Drone View",
        summary: "arXiv:2603.06573v1 Announce Type: cross 
Abstract: Obstacle avoidance in unmanned aerial vehicles (UAVs), as a fundamental capability, has gained increasing attention with the growing focus on spatial...",
        link: "https://arxiv.org/abs/2603.06573",
        source: "ArXiv AI"
    },
    {
        title: "BEVLM: Distilling Semantic Knowledge from LLMs into Bird's-Eye View Representations",
        summary: "arXiv:2603.06576v1 Announce Type: cross 
Abstract: The integration of Large Language Models (LLMs) into autonomous driving has attracted growing interest for their strong reasoning and semantic unders...",
        link: "https://arxiv.org/abs/2603.06576",
        source: "ArXiv AI"
    },
    {
        title: "Mean-based incomplete pairwise comparisons method with the reference values",
        summary: "arXiv:2207.10783v2 Announce Type: replace 
Abstract: In this article, we propose two quantitative methods for calculating weight vectors for incomplete pairwise comparison matrices using reference val...",
        link: "https://arxiv.org/abs/2207.10783",
        source: "ArXiv AI"
    },
    {
        title: "Transforming Agency. On the mode of existence of Large Language Models",
        summary: "arXiv:2407.10735v3 Announce Type: replace 
Abstract: This paper investigates the ontological characterization of Large Language Models (LLMs) like ChatGPT. Between inflationary and deflationary accoun...",
        link: "https://arxiv.org/abs/2407.10735",
        source: "ArXiv AI"
    },
    {
        title: "Position: Stop Anthropomorphizing Intermediate Tokens as Reasoning/Thinking Traces!",
        summary: "arXiv:2504.09762v3 Announce Type: replace 
Abstract: Intermediate token generation (ITG), where a model produces output before the solution, has become a standard method to improve the performance of ...",
        link: "https://arxiv.org/abs/2504.09762",
        source: "ArXiv AI"
    },
    {
        title: "Mitigating Content Effects on Reasoning in Language Models through Fine-Grained Activation Steering",
        summary: "arXiv:2505.12189v2 Announce Type: replace 
Abstract: Large language models (LLMs) exhibit reasoning biases, often conflating content plausibility with formal logical validity. This can lead to wrong i...",
        link: "https://arxiv.org/abs/2505.12189",
        source: "ArXiv AI"
    },
    {
        title: "VisioMath: Benchmarking Figure-based Mathematical Reasoning in LMMs",
        summary: "arXiv:2506.06727v4 Announce Type: replace 
Abstract: Large Multimodal Models have achieved remarkable progress in integrating vision and language, enabling strong performance across perception, reason...",
        link: "https://arxiv.org/abs/2506.06727",
        source: "ArXiv AI"
    },
    {
        title: "Discerning What Matters: A Multi-Dimensional Assessment of Moral Competence in LLMs",
        summary: "arXiv:2506.13082v4 Announce Type: replace 
Abstract: Moral competence is the ability to act in accordance with moral principles. As large language models (LLMs) are increasingly deployed in situations...",
        link: "https://arxiv.org/abs/2506.13082",
        source: "ArXiv AI"
    },
    {
        title: "ContextBench: Modifying Contexts for Targeted Latent Activation",
        summary: "arXiv:2506.15735v2 Announce Type: replace 
Abstract: Identifying inputs that trigger specific behaviours or latent features in language models could have a wide range of safety use cases. We investiga...",
        link: "https://arxiv.org/abs/2506.15735",
        source: "ArXiv AI"
    },
    {
        title: "Sysformer: Safeguarding Frozen Large Language Models with Adaptive System Prompts",
        summary: "arXiv:2506.15751v2 Announce Type: replace 
Abstract: As large language models (LLMs) are deployed in safety-critical settings, it is essential to ensure that their responses comply with safety standar...",
        link: "https://arxiv.org/abs/2506.15751",
        source: "ArXiv AI"
    },
    {
        title: "A Multi-Agent System Enables Versatile Information Extraction from the Chemical Literature",
        summary: "arXiv:2507.20230v3 Announce Type: replace 
Abstract: To fully expedite AI-powered chemical research, high-quality chemical databases are the foundation. Automatic extraction of chemical information fr...",
        link: "https://arxiv.org/abs/2507.20230",
        source: "ArXiv AI"
    },
    {
        title: "PepEDiff: Zero-Shot Peptide Binder Design via Protein Embedding Diffusion",
        summary: "arXiv:2601.13327v2 Announce Type: replace 
Abstract: We present PepEDiff, a novel peptide binder generator that designs binding sequences given a target receptor protein sequence and its pocket residu...",
        link: "https://arxiv.org/abs/2601.13327",
        source: "ArXiv AI"
    },
    {
        title: "Knowledge Graphs are Implicit Reward Models: Path-Derived Signals Enable Compositional Reasoning",
        summary: "arXiv:2601.15160v3 Announce Type: replace 
Abstract: Large language models have achieved near-expert performance in structured reasoning domains like mathematics and programming, yet their ability to ...",
        link: "https://arxiv.org/abs/2601.15160",
        source: "ArXiv AI"
    },
    {
        title: "Localizing and Correcting Errors for LLM-based Planners",
        summary: "arXiv:2602.00276v2 Announce Type: replace 
Abstract: Large language models (LLMs) have demonstrated strong reasoning capabilities on math and coding, but frequently fail on symbolic classical planning...",
        link: "https://arxiv.org/abs/2602.00276",
        source: "ArXiv AI"
    },
    {
        title: "Uncertainty Quantification in LLM Agents: Foundations, Emerging Challenges, and Opportunities",
        summary: "arXiv:2602.05073v2 Announce Type: replace 
Abstract: Uncertainty quantification (UQ) for large language models (LLMs) is a key building block for safety guardrails of daily LLM applications. Yet, even...",
        link: "https://arxiv.org/abs/2602.05073",
        source: "ArXiv AI"
    },
    {
        title: "From Features to Actions: Explainability in Traditional and Agentic AI Systems",
        summary: "arXiv:2602.06841v3 Announce Type: replace 
Abstract: Over the last decade, explainable AI has primarily focused on interpreting individual model predictions, producing post-hoc explanations that relat...",
        link: "https://arxiv.org/abs/2602.06841",
        source: "ArXiv AI"
    },
    {
        title: "MERIT Feedback Elicits Better Bargaining in LLM Negotiators",
        summary: "arXiv:2602.10467v3 Announce Type: replace 
Abstract: Bargaining is often regarded as a logical arena rather than an art or a matter of intuition, yet Large Language Models (LLMs) still struggle to nav...",
        link: "https://arxiv.org/abs/2602.10467",
        source: "ArXiv AI"
    },
    {
        title: "The Consensus Trap: Dissecting Subjectivity and the "Ground Truth" Illusion in Data Annotation",
        summary: "arXiv:2602.11318v2 Announce Type: replace 
Abstract: In machine learning, "ground truth" refers to the assumed correct labels used to train and evaluate models. However, the foundational "ground truth...",
        link: "https://arxiv.org/abs/2602.11318",
        source: "ArXiv AI"
    },
    {
        title: "How Well Does Agent Development Reflect Real-World Work?",
        summary: "arXiv:2603.01203v2 Announce Type: replace 
Abstract: AI agents are increasingly developed and evaluated on benchmarks relevant to human work, yet it remains unclear how representative these benchmarki...",
        link: "https://arxiv.org/abs/2603.01203",
        source: "ArXiv AI"
    },
    {
        title: "Multimodal Mixture-of-Experts with Retrieval Augmentation for Protein Active Site Identification",
        summary: "arXiv:2603.01511v2 Announce Type: replace 
Abstract: Accurate identification of protein active sites at the residue level is crucial for understanding protein function and advancing drug discovery. Ho...",
        link: "https://arxiv.org/abs/2603.01511",
        source: "ArXiv AI"
    },
    {
        title: "MOOSEnger -- a Domain-Specific AI Agent for the MOOSE Ecosystem",
        summary: "arXiv:2603.04756v2 Announce Type: replace 
Abstract: MOOSEnger is a tool-enabled AI agent tailored to the Multiphysics Object-Oriented Simulation Environment (MOOSE). MOOSE cases are specified in HIT ...",
        link: "https://arxiv.org/abs/2603.04756",
        source: "ArXiv AI"
    },
    {
        title: "SEA-TS: Self-Evolving Agent for Autonomous Code Generation of Time Series Forecasting Algorithms",
        summary: "arXiv:2603.04873v2 Announce Type: replace 
Abstract: Accurate time series forecasting underpins decision-making across domains, yet conventional ML development suffers from data scarcity in new deploy...",
        link: "https://arxiv.org/abs/2603.04873",
        source: "ArXiv AI"
    },
    {
        title: "A Cognitive Explainer for Fetal ultrasound images classifier Based on Medical Concepts",
        summary: "arXiv:2201.07798v4 Announce Type: replace-cross 
Abstract: Fetal standard scan plane detection during 2-D mid-pregnancy examinations is a highly complex task, which requires extensive medical knowledg...",
        link: "https://arxiv.org/abs/2201.07798",
        source: "ArXiv AI"
    },
    {
        title: "RAG-Driver: Generalisable Driving Explanations with Retrieval-Augmented In-Context Learning in Multi-Modal Large Language Model",
        summary: "arXiv:2402.10828v3 Announce Type: replace-cross 
Abstract: We need to trust robots that use often opaque AI methods. They need to explain themselves to us, and we need to trust their explanation. In t...",
        link: "https://arxiv.org/abs/2402.10828",
        source: "ArXiv AI"
    },
    {
        title: "Estimation of Energy-dissipation Lower-bounds for Neuromorphic Learning-in-memory",
        summary: "arXiv:2402.14878v4 Announce Type: replace-cross 
Abstract: Neuromorphic or neurally-inspired optimizers rely on local but parallel parameter updates to solve problems that range from quadratic program...",
        link: "https://arxiv.org/abs/2402.14878",
        source: "ArXiv AI"
    },
    {
        title: "Make VLM Recognize Visual Hallucination on Cartoon Character Image with Pose Information",
        summary: "arXiv:2403.15048v4 Announce Type: replace-cross 
Abstract: Leveraging large-scale Text-to-Image (TTI) models have become a common technique for generating exemplar or training dataset in the fields of...",
        link: "https://arxiv.org/abs/2403.15048",
        source: "ArXiv AI"
    },
    {
        title: "Algorithmic Collusion by Large Language Models",
        summary: "arXiv:2404.00806v5 Announce Type: replace-cross 
Abstract: We conduct experiments with algorithmic pricing agents based on Large Language Models (LLMs). In oligopoly settings, LLM-based pricing agents...",
        link: "https://arxiv.org/abs/2404.00806",
        source: "ArXiv AI"
    },
    {
        title: "Predictive Coding Networks and Inference Learning: Tutorial and Survey",
        summary: "arXiv:2407.04117v3 Announce Type: replace-cross 
Abstract: Recent years have witnessed a growing call for renewed emphasis on neuroscience-inspired approaches in artificial intelligence research, unde...",
        link: "https://arxiv.org/abs/2407.04117",
        source: "ArXiv AI"
    },
    {
        title: "FALCON: Future-Aware Learning with Contextual Object-Centric Pretraining for UAV Action Recognition",
        summary: "arXiv:2409.18300v2 Announce Type: replace-cross 
Abstract: We introduce FALCON, a unified self-supervised video pretraining approach for UAV action recognition from raw RGB aerial footage, requiring n...",
        link: "https://arxiv.org/abs/2409.18300",
        source: "ArXiv AI"
    },
    {
        title: "SpecFuse: Ensembling Large Language Models via Next-Segment Prediction",
        summary: "arXiv:2412.07380v3 Announce Type: replace-cross 
Abstract: Ensembles of generative large language models (LLMs) are a promising way to compensate for individual model limitations, integrating the stre...",
        link: "https://arxiv.org/abs/2412.07380",
        source: "ArXiv AI"
    },
    {
        title: "Transforming Science with Large Language Models: A Survey on AI-assisted Scientific Discovery, Experimentation, Content Generation, and Evaluation",
        summary: "arXiv:2502.05151v3 Announce Type: replace-cross 
Abstract: With the advent of large multimodal language models, science is now at a threshold of an AI-based technological transformation. An emerging e...",
        link: "https://arxiv.org/abs/2502.05151",
        source: "ArXiv AI"
    },
    {
        title: "Conditioning LLMs to Generate Code-Switched Text",
        summary: "arXiv:2502.12924v3 Announce Type: replace-cross 
Abstract: Code-switching (CS) is still a critical challenge in Natural Language Processing (NLP), due to the limited availability of large-scale, diver...",
        link: "https://arxiv.org/abs/2502.12924",
        source: "ArXiv AI"
    },
    {
        title: "Generative Predictive Control: Flow Matching Policies for Dynamic and Difficult-to-Demonstrate Tasks",
        summary: "arXiv:2502.13406v3 Announce Type: replace-cross 
Abstract: Generative control policies have recently unlocked major progress in robotics. These methods produce action sequences via diffusion or flow m...",
        link: "https://arxiv.org/abs/2502.13406",
        source: "ArXiv AI"
    },
    {
        title: "FragFM: Hierarchical Framework for Efficient Molecule Generation via Fragment-Level Discrete Flow Matching",
        summary: "arXiv:2502.15805v4 Announce Type: replace-cross 
Abstract: We introduce FragFM, a novel hierarchical framework via fragment-level discrete flow matching for efficient molecular graph generation. FragF...",
        link: "https://arxiv.org/abs/2502.15805",
        source: "ArXiv AI"
    },
    {
        title: "Aligning Compound AI Systems via System-level DPO",
        summary: "arXiv:2502.17721v4 Announce Type: replace-cross 
Abstract: Compound AI systems, comprising multiple interacting components such as LLMs, foundation models, and external tools, have demonstrated remark...",
        link: "https://arxiv.org/abs/2502.17721",
        source: "ArXiv AI"
    },
    {
        title: "Adversarial Robustness of Partitioned Quantum Classifiers",
        summary: "arXiv:2502.20403v2 Announce Type: replace-cross 
Abstract: Adversarial robustness in quantum classifiers is a critical area of study, providing insights into their performance compared to classical mo...",
        link: "https://arxiv.org/abs/2502.20403",
        source: "ArXiv AI"
    },
    {
        title: "FindAnything: Open-Vocabulary and Object-Centric Mapping for Robot Exploration in Any Environment",
        summary: "arXiv:2504.08603v4 Announce Type: replace-cross 
Abstract: Geometrically accurate and semantically expressive map representations have proven invaluable for robot deployment and task planning in unkno...",
        link: "https://arxiv.org/abs/2504.08603",
        source: "ArXiv AI"
    },
    {
        title: "From Tokenizer Bias to Backbone Capability: A Controlled Study of LLMs for Time Series Forecasting",
        summary: "arXiv:2504.08818v2 Announce Type: replace-cross 
Abstract: Using pre-trained large language models (LLMs) as a backbone for time series prediction has recently attracted growing research interest. Exi...",
        link: "https://arxiv.org/abs/2504.08818",
        source: "ArXiv AI"
    },
    {
        title: "The Malicious Technical Ecosystem: Exposing Limitations in Technical Governance of AI-Generated Non-Consensual Intimate Images of Adults",
        summary: "arXiv:2504.17663v2 Announce Type: replace-cross 
Abstract: In this paper, we adopt a survivor-centered approach to locate and dissect the role of sociotechnical AI governance in preventing AI-Generate...",
        link: "https://arxiv.org/abs/2504.17663",
        source: "ArXiv AI"
    },
    {
        title: "Federated Learning: A Survey on Privacy-Preserving Collaborative Intelligence",
        summary: "arXiv:2504.17703v4 Announce Type: replace-cross 
Abstract: Federated Learning (FL) has emerged as a transformative paradigm in the field of distributed machine learning, enabling multiple clients such...",
        link: "https://arxiv.org/abs/2504.17703",
        source: "ArXiv AI"
    },
    {
        title: "HCT-QA: A Benchmark for Question Answering on Human-Centric Tables",
        summary: "arXiv:2504.20047v3 Announce Type: replace-cross 
Abstract: Tabular data embedded in PDF files, web pages, and other types of documents is prevalent in various domains. These tables, which we call huma...",
        link: "https://arxiv.org/abs/2504.20047",
        source: "ArXiv AI"
    },
    {
        title: "FourierSpecNet: Neural Collision Operator Approximation Inspired by the Fourier Spectral Method for Solving the Boltzmann Equation",
        summary: "arXiv:2504.20408v2 Announce Type: replace-cross 
Abstract: The Boltzmann equation, a fundamental model in kinetic theory, describes the evolution of particle distribution functions through a nonlinear...",
        link: "https://arxiv.org/abs/2504.20408",
        source: "ArXiv AI"
    },
    {
        title: "RM-R1: Reward Modeling as Reasoning",
        summary: "arXiv:2505.02387v4 Announce Type: replace-cross 
Abstract: Reward modeling is essential for aligning large language models with human preferences through reinforcement learning. To provide accurate re...",
        link: "https://arxiv.org/abs/2505.02387",
        source: "ArXiv AI"
    },
    {
        title: "Software Development Life Cycle Perspective: A Survey of Benchmarks for Code Large Language Models and Agents",
        summary: "arXiv:2505.05283v3 Announce Type: replace-cross 
Abstract: Code large language models (CodeLLMs) and agents are increasingly being integrated into complex software engineering tasks spanning the entir...",
        link: "https://arxiv.org/abs/2505.05283",
        source: "ArXiv AI"
    },
    {
        title: "Maximizing Asynchronicity in Event-based Neural Networks",
        summary: "arXiv:2505.11165v2 Announce Type: replace-cross 
Abstract: Event cameras deliver visual data with high temporal resolution, low latency, and minimal redundancy, yet their asynchronous, sparse sequenti...",
        link: "https://arxiv.org/abs/2505.11165",
        source: "ArXiv AI"
    },
    {
        title: "AdAEM: An Adaptively and Automated Extensible Measurement of LLMs' Value Difference",
        summary: "arXiv:2505.13531v2 Announce Type: replace-cross 
Abstract: Assessing Large Language Models'(LLMs) underlying value differences enables comprehensive comparison of their misalignment, cultural adaptabi...",
        link: "https://arxiv.org/abs/2505.13531",
        source: "ArXiv AI"
    },
    {
        title: "KramaBench: A Benchmark for AI Systems on Data-to-Insight Pipelines over Data Lakes",
        summary: "arXiv:2506.06541v3 Announce Type: replace-cross 
Abstract: Discovering insights from a real-world data lake potentially containing unclean, semi-structured, and unstructured data requires a variety of...",
        link: "https://arxiv.org/abs/2506.06541",
        source: "ArXiv AI"
    },
    {
        title: "Iterative Quantum Feature Maps",
        summary: "arXiv:2506.19461v3 Announce Type: replace-cross 
Abstract: Quantum machine learning models that leverage quantum circuits as quantum feature maps (QFMs) are recognized for their enhanced expressive po...",
        link: "https://arxiv.org/abs/2506.19461",
        source: "ArXiv AI"
    },
    {
        title: "SPARC: Concept-Aligned Sparse Autoencoders for Cross-Model and Cross-Modal Interpretability",
        summary: "arXiv:2507.06265v2 Announce Type: replace-cross 
Abstract: Understanding how different AI models encode the same high-level concepts, such as objects or attributes, remains challenging because each mo...",
        link: "https://arxiv.org/abs/2507.06265",
        source: "ArXiv AI"
    },
    {
        title: "Bridging MOOCs, Smart Teaching, and AI: A Decade of Evolution Toward a Unified Pedagogy",
        summary: "arXiv:2507.14266v2 Announce Type: replace-cross 
Abstract: Over the past decade, higher education has undergone successive shifts driven by three major developments: Massive Open Online Courses (MOOCs...",
        link: "https://arxiv.org/abs/2507.14266",
        source: "ArXiv AI"
    },
    {
        title: "ExDD: Explicit Dual Distribution Learning for Surface Defect Detection via Diffusion Synthesis",
        summary: "arXiv:2507.15335v2 Announce Type: replace-cross 
Abstract: Industrial defect detection systems face critical limitations when confined to one-class anomaly detection paradigms, which assume uniform ou...",
        link: "https://arxiv.org/abs/2507.15335",
        source: "ArXiv AI"
    },
    {
        title: "MAP: Mitigating Hallucinations in Large Vision-Language Models with Map-Level Attention Processing",
        summary: "arXiv:2508.01653v2 Announce Type: replace-cross 
Abstract: Large Vision-Language Models (LVLMs) have achieved impressive performance in multimodal tasks, but they still suffer from hallucinations, i.e...",
        link: "https://arxiv.org/abs/2508.01653",
        source: "ArXiv AI"
    },
    {
        title: "VLMQ: Token Saliency-Driven Post-Training Quantization for Vision-language Models",
        summary: "arXiv:2508.03351v2 Announce Type: replace-cross 
Abstract: Post-training quantization (PTQ) has emerged as an effective technique for compressing large models and accelerating inference without retrai...",
        link: "https://arxiv.org/abs/2508.03351",
        source: "ArXiv AI"
    },
    {
        title: "SGDFuse: SAM-Guided Diffusion Model for High-Fidelity Infrared and Visible Image Fusion",
        summary: "arXiv:2508.05264v5 Announce Type: replace-cross 
Abstract: Infrared and visible image fusion (IVIF) aims to combine the thermal radiation information from infrared images with the rich texture details...",
        link: "https://arxiv.org/abs/2508.05264",
        source: "ArXiv AI"
    },
    {
        title: "A Geometric Perspective on the Difficulties of Learning GNN-based SAT Solvers",
        summary: "arXiv:2508.21513v3 Announce Type: replace-cross 
Abstract: Graph Neural Networks (GNNs) have gathered increasing interest as learnable solvers of Boolean Satisfiability Problems (SATs), operating on g...",
        link: "https://arxiv.org/abs/2508.21513",
        source: "ArXiv AI"
    },
    {
        title: "Performance Assessment Strategies for Language Model Applications in Healthcare",
        summary: "arXiv:2509.08087v2 Announce Type: replace-cross 
Abstract: Language models (LMs) represent an emerging paradigm within artificial intelligence, with applications throughout the medical enterprise. A c...",
        link: "https://arxiv.org/abs/2509.08087",
        source: "ArXiv AI"
    },
    {
        title: "Reasoned Safety Alignment: Ensuring Jailbreak Defense via Answer-Then-Check",
        summary: "arXiv:2509.11629v2 Announce Type: replace-cross 
Abstract: As large language models (LLMs) continue to advance in capabilities, ensuring their safety against jailbreak attacks remains a critical chall...",
        link: "https://arxiv.org/abs/2509.11629",
        source: "ArXiv AI"
    },
    {
        title: "Better Late Than Never: Meta-Evaluation of Latency Metrics for Simultaneous Speech-to-Text Translation",
        summary: "arXiv:2509.17349v2 Announce Type: replace-cross 
Abstract: Simultaneous speech-to-text translation systems must balance translation quality with latency. Although quality evaluation is well establishe...",
        link: "https://arxiv.org/abs/2509.17349",
        source: "ArXiv AI"
    },
    {
        title: "LikePhys: Evaluating Intuitive Physics Understanding in Video Diffusion Models via Likelihood Preference",
        summary: "arXiv:2510.11512v3 Announce Type: replace-cross 
Abstract: Intuitive physics understanding in video diffusion models plays an essential role in building general-purpose physically plausible world simu...",
        link: "https://arxiv.org/abs/2510.11512",
        source: "ArXiv AI"
    },
    {
        title: "Phys2Real: Fusing VLM Priors with Interactive Online Adaptation for Uncertainty-Aware Sim-to-Real Manipulation",
        summary: "arXiv:2510.11689v2 Announce Type: replace-cross 
Abstract: Learning robotic manipulation policies directly in the real world can be expensive and time-consuming. While reinforcement learning (RL) poli...",
        link: "https://arxiv.org/abs/2510.11689",
        source: "ArXiv AI"
    },
    {
        title: "CanvasMAR: Improving Masked Autoregressive Video Prediction With Canvas",
        summary: "arXiv:2510.13669v2 Announce Type: replace-cross 
Abstract: Masked autoregressive models (MAR) have emerged as a powerful paradigm for image and video generation, combining the flexibility of masked mo...",
        link: "https://arxiv.org/abs/2510.13669",
        source: "ArXiv AI"
    },
    {
        title: "Just-In-Time Objectives: A General Approach for Specialized AI Interactions",
        summary: "arXiv:2510.14591v2 Announce Type: replace-cross 
Abstract: Large language models promise a broad set of functions, but when not given a specific objective, they default to generic results. We demonstr...",
        link: "https://arxiv.org/abs/2510.14591",
        source: "ArXiv AI"
    },
    {
        title: "Think with 3D: Geometric Imagination Grounded Spatial Reasoning from Limited Views",
        summary: "arXiv:2510.18632v2 Announce Type: replace-cross 
Abstract: Though recent advances in vision-language models (VLMs) have achieved remarkable progress across a wide range of multimodal tasks, understand...",
        link: "https://arxiv.org/abs/2510.18632",
        source: "ArXiv AI"
    },
    {
        title: "Automated Coding of Communication Data Using ChatGPT: Consistency Across Subgroups",
        summary: "arXiv:2510.20584v2 Announce Type: replace-cross 
Abstract: Assessing communication and collaboration at scale depends on a labor intensive task of coding communication data into categories according t...",
        link: "https://arxiv.org/abs/2510.20584",
        source: "ArXiv AI"
    },
    {
        title: "Shoot First, Ask Questions Later? Building Rational Agents that Explore and Act Like People",
        summary: "arXiv:2510.20886v2 Announce Type: replace-cross 
Abstract: Many emerging applications of AI--from scientific discovery to medical diagnosis--require agents to seek information strategically: forming h...",
        link: "https://arxiv.org/abs/2510.20886",
        source: "ArXiv AI"
    },
    {
        title: "LA-MARRVEL: A Knowledge-Grounded, Language-Aware LLM Framework for Clinically Robust Rare Disease Gene Prioritization",
        summary: "arXiv:2511.02263v4 Announce Type: replace-cross 
Abstract: Rare disease diagnosis requires matching variant-bearing genes to complex patient phenotypes across large and heterogeneous evidence sources....",
        link: "https://arxiv.org/abs/2511.02263",
        source: "ArXiv AI"
    },
    {
        title: "The Persistence of Cultural Memory: Investigating Multimodal Iconicity in Diffusion Models",
        summary: "arXiv:2511.11435v2 Announce Type: replace-cross 
Abstract: The ambiguity between generalization and memorization in TTI diffusion models becomes pronounced when prompts invoke culturally shared visual...",
        link: "https://arxiv.org/abs/2511.11435",
        source: "ArXiv AI"
    },
    {
        title: "Diffusion Fine-Tuning via Reparameterized Policy Gradient of the Soft Q-Function",
        summary: "arXiv:2512.04559v3 Announce Type: replace-cross 
Abstract: Diffusion models excel at generating high-likelihood samples but often require alignment with downstream objectives. Existing fine-tuning met...",
        link: "https://arxiv.org/abs/2512.04559",
        source: "ArXiv AI"
    },
    {
        title: "XR-DT: Extended Reality-Enhanced Digital Twin for Safe Motion Planning via Human-Aware Model Predictive Path Integral Control",
        summary: "arXiv:2512.05270v2 Announce Type: replace-cross 
Abstract: As mobile robots increasingly operate alongside humans in shared workspaces, ensuring safe, efficient, and interpretable Human-Robot Interact...",
        link: "https://arxiv.org/abs/2512.05270",
        source: "ArXiv AI"
    },
    {
        title: "Whatever Remains Must Be True: Filtering Drives Reasoning in LLMs, Shaping Diversity",
        summary: "arXiv:2512.05962v2 Announce Type: replace-cross 
Abstract: Reinforcement Learning (RL) has become the de facto standard for tuning LLMs to solve tasks involving reasoning. However, growing evidence sh...",
        link: "https://arxiv.org/abs/2512.05962",
        source: "ArXiv AI"
    },
    {
        title: "Exploiting Spatiotemporal Properties for Efficient Event-Driven Human Pose Estimation",
        summary: "arXiv:2512.06306v2 Announce Type: replace-cross 
Abstract: Human pose estimation focuses on predicting body keypoints to analyze human motion. Currently, most pose estimation tasks rely on conventiona...",
        link: "https://arxiv.org/abs/2512.06306",
        source: "ArXiv AI"
    },
    {
        title: "A-3PO: Accelerating Asynchronous LLM Training with Staleness-aware Proximal Policy Approximation",
        summary: "arXiv:2512.06547v3 Announce Type: replace-cross 
Abstract: Decoupled PPO has been a successful reinforcement learning (RL) algorithm to deal with the high data staleness under the asynchronous RL sett...",
        link: "https://arxiv.org/abs/2512.06547",
        source: "ArXiv AI"
    },
    {
        title: "Data-Driven Global Sensitivity Analysis for Engineering Design Based on Individual Conditional Expectations",
        summary: "arXiv:2512.11946v2 Announce Type: replace-cross 
Abstract: Explainable machine learning techniques have gained increasing attention in engineering applications, especially in aerospace design and anal...",
        link: "https://arxiv.org/abs/2512.11946",
        source: "ArXiv AI"
    },
    {
        title: "Understanding and Improving Hyperbolic Deep Reinforcement Learning",
        summary: "arXiv:2512.14202v2 Announce Type: replace-cross 
Abstract: The exponential volume growth of hyperbolic geometry can embed the hierarchical relationships between states in reinforcement learning (RL) w...",
        link: "https://arxiv.org/abs/2512.14202",
        source: "ArXiv AI"
    },
    {
        title: "Agent Tools Orchestration Leaks More: Dataset, Benchmark, and Mitigation",
        summary: "arXiv:2512.16310v2 Announce Type: replace-cross 
Abstract: Driven by Large Language Models, the single-agent, multi-tool architecture has become a popular paradigm for autonomous agents. However, this...",
        link: "https://arxiv.org/abs/2512.16310",
        source: "ArXiv AI"
    },
    {
        title: "CASA: Cross-Attention over Self-Attention for Efficient Vision-Language Fusion",
        summary: "arXiv:2512.19535v2 Announce Type: replace-cross 
Abstract: Vision-language models (VLMs) are commonly trained by directly inserting image tokens from a pretrained vision encoder into the text stream o...",
        link: "https://arxiv.org/abs/2512.19535",
        source: "ArXiv AI"
    },
    {
        title: "CARE What Fails: Contrastive Anchored-REflection for Verifiable Multimodal",
        summary: "arXiv:2512.19554v3 Announce Type: replace-cross 
Abstract: Group-relative reinforcement learning with verifiable rewards (RLVR) often wastes the most informative data it already has the failures. When...",
        link: "https://arxiv.org/abs/2512.19554",
        source: "ArXiv AI"
    },
    {
        title: "LLMTM: Benchmarking and Optimizing LLMs for Temporal Motif Analysis in Dynamic Graphs",
        summary: "arXiv:2512.22266v2 Announce Type: replace-cross 
Abstract: The widespread application of Large Language Models (LLMs) has motivated a growing interest in their capacity for processing dynamic graphs. ...",
        link: "https://arxiv.org/abs/2512.22266",
        source: "ArXiv AI"
    },
    {
        title: "Window-based Membership Inference Attacks Against Fine-tuned Large Language Models",
        summary: "arXiv:2601.02751v2 Announce Type: replace-cross 
Abstract: Most membership inference attacks (MIAs) against Large Language Models (LLMs) rely on global signals, like average loss, to identify training...",
        link: "https://arxiv.org/abs/2601.02751",
        source: "ArXiv AI"
    },
    {
        title: "Classroom AI: Large Language Models as Grade-Specific Teachers",
        summary: "arXiv:2601.06225v2 Announce Type: replace-cross 
Abstract: Large Language Models (LLMs) offer a promising solution to complement traditional teaching and address global teacher shortages that affect h...",
        link: "https://arxiv.org/abs/2601.06225",
        source: "ArXiv AI"
    },
    {
        title: "Purification Before Fusion: Toward Mask-Free Speech Enhancement for Robust Audio-Visual Speech Recognition",
        summary: "arXiv:2601.12436v2 Announce Type: replace-cross 
Abstract: Audio-visual speech recognition (AVSR) typically improves recognition accuracy in noisy environments by integrating noise-immune visual cues ...",
        link: "https://arxiv.org/abs/2601.12436",
        source: "ArXiv AI"
    },
    {
        title: "SpatialMem: Metric-Aligned Long-Horizon Video Memory for Language Grounding and QA",
        summary: "arXiv:2601.14895v2 Announce Type: replace-cross 
Abstract: We present SpatialMem, a memory-centric system for long-horizon, language-grounded retrieval and QA from egocentric video, where metric 3D se...",
        link: "https://arxiv.org/abs/2601.14895",
        source: "ArXiv AI"
    },
    {
        title: "Neural Signals Generate Clinical Notes in the Wild",
        summary: "arXiv:2601.22197v2 Announce Type: replace-cross 
Abstract: Generating clinical reports that summarize abnormal patterns, diagnostic findings, and clinical interpretations from long-term EEG recordings...",
        link: "https://arxiv.org/abs/2601.22197",
        source: "ArXiv AI"
    },
    {
        title: "Accelerating Scientific Research with Gemini: Case Studies and Common Techniques",
        summary: "arXiv:2602.03837v3 Announce Type: replace-cross 
Abstract: Recent advances in large language models (LLMs) have opened new avenues for accelerating scientific research. While models are increasingly c...",
        link: "https://arxiv.org/abs/2602.03837",
        source: "ArXiv AI"
    },
    {
        title: "Towards Autonomous Mathematics Research",
        summary: "arXiv:2602.10177v3 Announce Type: replace-cross 
Abstract: Recent advances in foundational models have yielded reasoning systems capable of achieving a gold-medal standard at the International Mathema...",
        link: "https://arxiv.org/abs/2602.10177",
        source: "ArXiv AI"
    },
    {
        title: "Why Human Guidance Matters in Collaborative Vibe Coding",
        summary: "arXiv:2602.10473v2 Announce Type: replace-cross 
Abstract: Writing code has been one of the most transformative ways for human societies to translate abstract ideas into tangible technologies. Modern ...",
        link: "https://arxiv.org/abs/2602.10473",
        source: "ArXiv AI"
    },
    {
        title: "DataChef: Cooking Up Optimal Data Recipes for LLM Adaptation via Reinforcement Learning",
        summary: "arXiv:2602.11089v2 Announce Type: replace-cross 
Abstract: In the current landscape of Large Language Models (LLMs), the curation of large-scale, high-quality training data is a primary driver of mode...",
        link: "https://arxiv.org/abs/2602.11089",
        source: "ArXiv AI"
    },
    {
        title: "SWE-MiniSandbox: Container-Free Reinforcement Learning for Building Software Engineering Agents",
        summary: "arXiv:2602.11210v3 Announce Type: replace-cross 
Abstract: Reinforcement learning (RL) has become a key paradigm for training software engineering (SWE) agents, but existing pipelines typically rely o...",
        link: "https://arxiv.org/abs/2602.11210",
        source: "ArXiv AI"
    },
    {
        title: "Peak + Accumulation: A Proxy-Level Scoring Formula for Multi-Turn LLM Attack Detection",
        summary: "arXiv:2602.11247v2 Announce Type: replace-cross 
Abstract: Multi-turn prompt injection attacks distribute malicious intent across multiple conversation turns, exploiting the assumption that each turn ...",
        link: "https://arxiv.org/abs/2602.11247",
        source: "ArXiv AI"
    },
    {
        title: "An Adaptive Model Selection Framework for Demand Forecasting under Horizon-Induced Degradation to Support Business Strategy and Operations",
        summary: "arXiv:2602.13939v2 Announce Type: replace-cross 
Abstract: Business environments characterized by structural demand intermittency, high variability, and multi-step planning horizons require robust and...",
        link: "https://arxiv.org/abs/2602.13939",
        source: "ArXiv AI"
    },
    {
        title: "IntelliAsk: Learning to Ask High-Quality Research Questions via RLVR",
        summary: "arXiv:2602.15849v2 Announce Type: replace-cross 
Abstract: Peer review relies on substantive, evidence-based questions, yet current LLMs generate surface-level queries that perform worse than human re...",
        link: "https://arxiv.org/abs/2602.15849",
        source: "ArXiv AI"
    },
    {
        title: "The Compute ICE-AGE: Invariant Compute Envelope under Addressable Graph Evolution",
        summary: "arXiv:2602.16736v2 Announce Type: replace-cross 
Abstract: This paper presents empirical results from a production-grade C++ implementation of a deterministic semantic state substrate derived from pri...",
        link: "https://arxiv.org/abs/2602.16736",
        source: "ArXiv AI"
    },
    {
        title: "FLoRG: Federated Fine-tuning with Low-rank Gram Matrices and Procrustes Alignment",
        summary: "arXiv:2602.17095v2 Announce Type: replace-cross 
Abstract: Parameter-efficient fine-tuning techniques such as low-rank adaptation (LoRA) enable large language models (LLMs) to adapt to downstream task...",
        link: "https://arxiv.org/abs/2602.17095",
        source: "ArXiv AI"
    },
    {
        title: "The Cascade Equivalence Hypothesis: When Do Speech LLMs Behave Like ASR$\rightarrow$LLM Pipelines?",
        summary: "arXiv:2602.17598v2 Announce Type: replace-cross 
Abstract: Speech LLMs are widely understood to be better than ASR$\rightarrow$LLM cascades since they have access to the audio directly, and not just t...",
        link: "https://arxiv.org/abs/2602.17598",
        source: "ArXiv AI"
    },
    {
        title: "Exploratory Memory-Augmented LLM Agent via Hybrid On- and Off-Policy Optimization",
        summary: "arXiv:2602.23008v2 Announce Type: replace-cross 
Abstract: Exploration remains the key bottleneck for large language model agents trained with reinforcement learning. While prior methods exploit pretr...",
        link: "https://arxiv.org/abs/2602.23008",
        source: "ArXiv AI"
    },
    {
        title: "Modality Collapse as Mismatched Decoding: Information-Theoretic Limits of Multimodal LLMs",
        summary: "arXiv:2602.23136v2 Announce Type: replace-cross 
Abstract: Numerous studies have shown that multimodal LLMs process speech and images well but fail in non-intuitive ways rendering trivial tasks such a...",
        link: "https://arxiv.org/abs/2602.23136",
        source: "ArXiv AI"
    },
    {
        title: "CoME: Empowering Channel-of-Mobile-Experts with Informative Hybrid-Capabilities Reasoning",
        summary: "arXiv:2602.24142v2 Announce Type: replace-cross 
Abstract: Mobile Agents can autonomously execute user instructions, which requires hybrid-capabilities reasoning, including screen summary, subtask pla...",
        link: "https://arxiv.org/abs/2602.24142",
        source: "ArXiv AI"
    },
    {
        title: "Theory of Code Space: Do Code Agents Understand Software Architecture?",
        summary: "arXiv:2603.00601v3 Announce Type: replace-cross 
Abstract: AI code agents excel at isolated tasks yet struggle with multi-file software engineering requiring architectural understanding. We introduce ...",
        link: "https://arxiv.org/abs/2603.00601",
        source: "ArXiv AI"
    },
    {
        title: "Reparameterized Tensor Ring Functional Decomposition for Multi-Dimensional Data Recovery",
        summary: "arXiv:2603.01034v2 Announce Type: replace-cross 
Abstract: Tensor Ring (TR) decomposition is a powerful tool for high-order data modeling, but is inherently restricted to discrete forms defined on fix...",
        link: "https://arxiv.org/abs/2603.01034",
        source: "ArXiv AI"
    },
    {
        title: "MatRIS: Toward Reliable and Efficient Pretrained Machine Learning Interatomic Potentials",
        summary: "arXiv:2603.02002v3 Announce Type: replace-cross 
Abstract: Foundation MLIPs demonstrate broad applicability across diverse material systems and have emerged as a powerful and transformative paradigm i...",
        link: "https://arxiv.org/abs/2603.02002",
        source: "ArXiv AI"
    },
    {
        title: ""When to Hand Off, When to Work Together": Expanding Human-Agent Co-Creative Collaboration through Concurrent Interaction",
        summary: "arXiv:2603.02050v2 Announce Type: replace-cross 
Abstract: Human collaborators coordinate dynamically through process visibility and workspace awareness, yet AI agents typically either provide only fi...",
        link: "https://arxiv.org/abs/2603.02050",
        source: "ArXiv AI"
    },
    {
        title: "Kiwi-Edit: Versatile Video Editing via Instruction and Reference Guidance",
        summary: "arXiv:2603.02175v3 Announce Type: replace-cross 
Abstract: Instruction-based video editing has witnessed rapid progress, yet current methods often struggle with precise visual control, as natural lang...",
        link: "https://arxiv.org/abs/2603.02175",
        source: "ArXiv AI"
    },
    {
        title: "Whisper-RIR-Mega: A Paired Clean-Reverberant Speech Benchmark for ASR Robustness to Room Acoustics",
        summary: "arXiv:2603.02252v2 Announce Type: replace-cross 
Abstract: We introduce Whisper-RIR-Mega, a benchmark dataset of paired clean and reverberant speech for evaluating automatic speech recognition (ASR) r...",
        link: "https://arxiv.org/abs/2603.02252",
        source: "ArXiv AI"
    },
    {
        title: "Rigidity-Aware Geometric Pretraining for Protein Design and Conformational Ensembles",
        summary: "arXiv:2603.02406v2 Announce Type: replace-cross 
Abstract: Generative models have recently advanced $\textit{de novo}$ protein design by learning the statistical regularities of natural structures. Ho...",
        link: "https://arxiv.org/abs/2603.02406",
        source: "ArXiv AI"
    },
    {
        title: "Fine-Tuning and Evaluating Conversational AI for Agricultural Advisory",
        summary: "arXiv:2603.03294v2 Announce Type: replace-cross 
Abstract: Large Language Models show promise for agricultural advisory, yet vanilla models exhibit unsupported recommendations, generic advice lacking ...",
        link: "https://arxiv.org/abs/2603.03294",
        source: "ArXiv AI"
    },
    {
        title: "Fragile Thoughts: How Large Language Models Handle Chain-of-Thought Perturbations",
        summary: "arXiv:2603.03332v2 Announce Type: replace-cross 
Abstract: Chain-of-Thought (CoT) prompting has emerged as a foundational technique for eliciting reasoning from Large Language Models (LLMs), yet the r...",
        link: "https://arxiv.org/abs/2603.03332",
        source: "ArXiv AI"
    },
    {
        title: "Phys4D: Fine-Grained Physics-Consistent 4D Modeling from Video Diffusion",
        summary: "arXiv:2603.03485v2 Announce Type: replace-cross 
Abstract: Recent video diffusion models have achieved impressive capabilities as large-scale generative world models. However, these models often strug...",
        link: "https://arxiv.org/abs/2603.03485",
        source: "ArXiv AI"
    },
    {
        title: "Large-Language-Model-Guided State Estimation for Partially Observable Task and Motion Planning",
        summary: "arXiv:2603.03704v2 Announce Type: replace-cross 
Abstract: Robot planning in partially observable environments, where not all objects are known or visible, is a challenging problem, as it requires rea...",
        link: "https://arxiv.org/abs/2603.03704",
        source: "ArXiv AI"
    },
    {
        title: "Measuring AI R&D Automation",
        summary: "arXiv:2603.03992v3 Announce Type: replace-cross 
Abstract: The automation of AI R&D (AIRDA) could have significant implications, but its extent and ultimate effects remain uncertain. We need empirical...",
        link: "https://arxiv.org/abs/2603.03992",
        source: "ArXiv AI"
    },
    {
        title: "Simulating Meaning, Nevermore! Introducing ICR: A Semiotic-Hermeneutic Metric for Evaluating Meaning in LLM Text Summaries",
        summary: "arXiv:2603.04413v2 Announce Type: replace-cross 
Abstract: Meaning in human language is relational, context dependent, and emergent, arising from dynamic systems of signs rather than fixed word-concep...",
        link: "https://arxiv.org/abs/2603.04413",
        source: "ArXiv AI"
    },
    {
        title: "vLLM Semantic Router: Signal Driven Decision Routing for Mixture-of-Modality Models",
        summary: "arXiv:2603.04444v2 Announce Type: replace-cross 
Abstract: As large language models (LLMs) diversify across modalities, capabilities, and cost profiles, the problem of intelligent request routing -- s...",
        link: "https://arxiv.org/abs/2603.04444",
        source: "ArXiv AI"
    },
    {
        title: "RoboPocket: Improve Robot Policies Instantly with Your Phone",
        summary: "arXiv:2603.05504v2 Announce Type: replace-cross 
Abstract: Scaling imitation learning is fundamentally constrained by the efficiency of data collection. While handheld interfaces have emerged as a sca...",
        link: "https://arxiv.org/abs/2603.05504",
        source: "ArXiv AI"
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
