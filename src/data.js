export const resumeHref = "/Niviya_V_U_Resume.pdf";

export const navPages = [
  { to: "/", label: "home" },
  { to: "/about", label: "about" },
  { to: "/work", label: "work" },
  { to: "/projects", label: "projects" },
  { to: "/contact", label: "contact" },
];

export const socialLinks = [
  { label: "GitHub", url: "https://github.com/niviya-v-u" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/niviya-vu-256479259" },
  { label: "Email", url: "mailto:niviya464@gmail.com" },
];

export const heroStats = [
  { value: "2", label: "production internships" },
  { value: "4", label: "AI-integrated builds" },
  { value: "2022-2026", label: "Shiv Nadar University" },
];

export const signalCards = [
  {
    eyebrow: "CURRENT SIGNAL",
    title: "Shipping product-facing frontend at Poshmark.",
    copy: "I work inside a distributed team, on live UI, with real constraints and real users at scale.",
  },
  {
    eyebrow: "BUILD STYLE",
    title: "Systems first. Product close.",
    copy: "I like software that can explain itself: clear tradeoffs, clean interfaces, and enough ambition to be worth the complexity.",
  },
  {
    eyebrow: "EDGE OF INTEREST",
    title: "AI where it actually meets use.",
    copy: "RAG, computer vision, NLP, and practical web stacks. Not for novelty. For better outcomes.",
  },
];

export const quickFacts = [
  { value: "Chennai", label: "Base station" },
  { value: "Python · JS · Vue · React", label: "Core stack" },
  { value: "AI + Full Stack", label: "Preferred terrain" },
  { value: "Learning in public", label: "Operating mode" },
];

export const principleCards = [
  {
    title: "Build for contact with reality.",
    text: "The thing has to survive users, ambiguity, changing requirements, and the occasional bad assumption. That is the point.",
  },
  {
    title: "Use AI with discipline.",
    text: "I care less about novelty demos and more about where models, retrieval, and interfaces create something dependable.",
  },
  {
    title: "Keep the front end intentional.",
    text: "I want the interface to feel designed, not merely assembled. Typography, motion, and structure should do real work.",
  },
];

export const offscreenNotes = [
  {
    label: "Outside code",
    value: "I design, travel, and study how places and systems behave when no one is pitching them.",
  },
  {
    label: "What keeps me curious",
    value: "New interaction patterns, model behavior, distributed products, and the mechanics of software that scales cleanly.",
  },
  {
    label: "Personal line",
    value: "Fail boldly. Ship often. Update your priors.",
  },
];

export const workItems = [
  {
    title: "Poshmark",
    role: "Software Development Intern",
    period: "Current",
    stack: ["Vue.js", "Vuex", "Distributed Team"],
    summary:
      "Shipped frontend changes to production as part of Poshmark's full platform redesign. Built and maintained UI components in Vue.js and Vuex across a 10-member distributed team.",
    detail:
      "This is live product work, not a sandbox. I learned to operate inside shared systems, align with design intent, and ship changes that matter immediately.",
    badge: "CURRENT",
  },
  {
    title: "TECCO",
    role: "Full Stack Development Internship",
    period: "Summer 2025",
    stack: ["React", "Node.js", "MySQL", "JWT"],
    summary:
      "Built a complete e-commerce platform from scratch, solo. Owned product catalog, cart, order management, auth, schema design, and admin RBAC.",
    detail:
      "The useful part was not just writing features. It was owning the seams between features, data, permissions, and admin workflows end to end.",
  },
  {
    title: "Shiv Nadar University, Chennai",
    role: "B.Tech Computer Science & Engineering (IoT)",
    period: "2022-2026",
    stack: ["AI Systems", "Embedded Systems", "Software"],
    summary:
      "Final-year student building AI systems and software while studying the intersection of embedded systems and modern product engineering.",
    detail:
      "University gave me the lab. Projects and internships gave me the feedback loop that made the work sharper.",
  },
];

export const workingStyle = [
  {
    title: "Distributed by default",
    text: "I’m comfortable shipping in shared repos, aligning with teams, and working without needing constant synchronous hand-holding.",
  },
  {
    title: "Comfortable across layers",
    text: "I move between UI, APIs, data flow, auth, and AI integration without treating any one layer as someone else’s problem.",
  },
  {
    title: "Bias toward shipping",
    text: "Ideas get interesting when they hit production constraints. I like getting them there.",
  },
];

export const certifications = [
  { title: "Privacy & Security in Online Social Media", issuer: "NPTEL" },
  { title: "Affective Computing", issuer: "NPTEL" },
  { title: "User-Centric Computing for HCI", issuer: "NPTEL" },
];

export const projects = [
  {
    name: "AI-Assisted Skin Lesion Diagnosis",
    category: "AI · HEALTHCARE",
    url: "https://github.com/niviya-v-u/AI-Assisted-Skin-Lesion-Diagnosis-Clinical-Case-Retrieval-System",
    oneLine: "Skin lesion classification with clinical case retrieval.",
    description:
      "Flask + TensorFlow system that classifies lesion images as cancerous or benign. Includes similar-case retrieval, PDF report generation, and federated learning ideas for privacy-aware edge and cloud deployment.",
    stack: ["Python", "Flask", "TensorFlow", "Federated Learning", "PDF Gen"],
    challenge: "How do you make prediction output more useful than a raw label in a sensitive healthcare context?",
    decision: "I paired classification with similar-case retrieval and document generation so the system could support interpretation, not just output a verdict.",
    outcome: "A fuller diagnostic workflow concept, with privacy-aware thinking built into the architecture.",
  },
  {
    name: "Automotive AI Assistant (Ford)",
    category: "AI · RAG · PRODUCT",
    url: "https://github.com/niviya-v-u/Automotive-AI-Assistant-for-Ford-Vehicle",
    oneLine: "Vehicle-safe RAG assistant for in-car support.",
    description:
      "Built with FastAPI, FAISS vector search, and a local SmolLM2 model. Added hallucination prevention for safety-critical vehicle data, voice recognition, semantic search, and Dockerized deployment.",
    stack: ["FastAPI", "FAISS", "RAG", "SmolLM2", "Docker", "Voice"],
    challenge: "LLM interfaces get risky fast when the domain is safety-critical and the user expects decisive answers.",
    decision: "I grounded responses with retrieval, added guardrails against unsupported answers, and treated trust as a product feature.",
    outcome: "A more believable AI assistant concept for vehicles, shaped around reliability instead of hype.",
  },
  {
    name: "Smart Resume Analyzer",
    category: "FULL STACK · NLP",
    url: "https://github.com/niviya-v-u/Smart-Resume-Analyzer",
    oneLine: "Structured candidate insights from unstructured PDFs.",
    description:
      "Full-stack resume analysis platform using React, Node.js, and MySQL. Parses PDFs with Apache Tika, applies NLP with spaCy, and generates skill and course recommendations from extracted candidate data.",
    stack: ["React", "Node.js", "MySQL", "spaCy", "Apache Tika", "NLP"],
    challenge: "Resumes are messy, inconsistent documents, but hiring workflows want structured signals.",
    decision: "I built a pipeline that combines parsing, extraction, NLP, and recommendation instead of stopping at text ingestion.",
    outcome: "An end-to-end product flow that turns unstructured input into something actionable.",
  },
  {
    name: "Emotion Detection (DeepFace)",
    category: "AI · COMPUTER VISION",
    url: "https://github.com/niviya-v-u",
    oneLine: "Real-time emotion detection from live webcam input.",
    description:
      "Uses Python, OpenCV, and DeepFace to detect seven emotions in real time. Implements Haar Cascade classification with Eigenface-based PCA and AdaBoost feature selection across 7,000+ features, reaching 85% accuracy.",
    stack: ["Python", "OpenCV", "DeepFace", "PCA", "AdaBoost"],
    challenge: "Real-time CV work quickly turns into a tradeoff between responsiveness, complexity, and explainability.",
    decision: "I focused on a practical detection pipeline and made the model mechanics part of the project, not an invisible black box.",
    outcome: "A computer vision system with measurable accuracy and a tighter understanding of the underlying approach.",
  },
];

export const featuredProjects = projects.slice(0, 3);

export const skillRows = [
  {
    label: "languages",
    items: [
      { name: "python", project: "AI-Assisted Skin Lesion Diagnosis" },
      { name: "javascript", project: "Smart Resume Analyzer" },
      { name: "c", project: "University systems work" },
      { name: "html", project: "TECCO e-commerce platform" },
      { name: "css", project: "Poshmark redesign work" },
    ],
  },
  {
    label: "frontend",
    items: [
      { name: "react.js", project: "Smart Resume Analyzer" },
      { name: "vue.js", project: "Poshmark redesign work" },
      { name: "vuex", project: "Poshmark redesign work" },
    ],
  },
  {
    label: "backend",
    items: [
      { name: "node.js", project: "Smart Resume Analyzer" },
      { name: "fastapi", project: "Automotive AI Assistant" },
      { name: "rest apis", project: "TECCO e-commerce platform" },
      { name: "jwt auth", project: "TECCO e-commerce platform" },
    ],
  },
  {
    label: "ai & nlp",
    items: [
      { name: "spacy", project: "Smart Resume Analyzer" },
      { name: "nltk", project: "Resume parsing experiments" },
      { name: "deepface", project: "Emotion Detection" },
      { name: "rag", project: "Automotive AI Assistant" },
      { name: "faiss", project: "Automotive AI Assistant" },
      { name: "llm integration", project: "Automotive AI Assistant" },
    ],
  },
  {
    label: "databases",
    items: [
      { name: "mysql", project: "Smart Resume Analyzer" },
      { name: "mongodb", project: "Prototype work" },
    ],
  },
  {
    label: "tools & devops",
    items: [
      { name: "docker", project: "Automotive AI Assistant" },
      { name: "gcp", project: "Cloud deployment experiments" },
      { name: "git", project: "All shipped work" },
      { name: "github", project: "Portfolio repositories" },
      { name: "bitbucket", project: "Poshmark workflows" },
      { name: "postman", project: "API testing across projects" },
      { name: "agile", project: "Distributed product teams" },
    ],
  },
];

export const availabilityCards = [
  { label: "Looking for", value: "Full-stack + AI-integrated product roles" },
  { label: "Best contact path", value: "Email or LinkedIn" },
  { label: "Preferred build zone", value: "Interfaces, APIs, and model-backed workflows" },
];
