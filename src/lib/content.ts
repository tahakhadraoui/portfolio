export type Locale = "en" | "fr";

export const LOCALES: Locale[] = ["en", "fr"];

export const profile = {
  name: "Taha Khadraoui",
  initials: "TK",
  email: "tahakhadraoui@gmail.com",
  phone: "+216 52 329 930",
  phoneHref: "tel:+21652329930",
  whatsapp: "https://wa.me/21652329930",
  linkedin: "https://www.linkedin.com/in/taha-khadraoui-12419321a",
  github: "https://github.com/tahakhadraoui",
  cv: "/docs/Taha-Khadraoui-CV.pdf",
  calendarNote: "tahakhadraoui@gmail.com",
};

/* ------------------------------------------------------------------ *
 * Projects — every fact below comes from the real codebases
 * ------------------------------------------------------------------ */

export type ProjectVisual = "gallery" | "architecture" | "storefront" | "api";

export type Project = {
  id: string;
  visual: ProjectVisual;
  year: string;
  accent: string;
  stack: string[];
  metrics: { value: string; label: Record<Locale, string> }[];
  images?: string[];
  featured: boolean;
  copy: Record<
    Locale,
    {
      name: string;
      kind: string;
      tagline: string;
      context: string;
      highlights: string[];
    }
  >;
};

export const projects: Project[] = [
  {
    id: "spotfleet",
    visual: "gallery",
    year: "2026",
    accent: "from-sky-400 to-indigo-500",
    featured: true,
    stack: [
      "Flutter",
      "Riverpod",
      "NestJS 11",
      "PostgreSQL 16",
      "TypeORM",
      "Socket.IO",
      "Firebase FCM",
      "Google Maps",
      "Next.js",
      "Docker",
      "AWS EC2",
      "nginx",
      "Codemagic",
    ],
    metrics: [
      { value: "3", label: { en: "user roles in one app", fr: "rôles dans une seule app" } },
      { value: "21", label: { en: "API modules", fr: "modules d'API" } },
      { value: "iOS + Android", label: { en: "shipped builds", fr: "builds livrés" } },
    ],
    images: [
      "/projects/spotfleet/07-mission-carte.png",
      "/projects/spotfleet/06-liste-missions.png",
      "/projects/spotfleet/05-accueil-donneur.png",
      "/projects/spotfleet/09-societe-flotte.png",
      "/projects/spotfleet/10-societe-chauffeurs.png",
      "/projects/spotfleet/01-accueil.png",
    ],
    copy: {
      en: {
        name: "SpotFleet",
        kind: "Transport marketplace · Mobile + Web + Cloud",
        tagline:
          "A freight-matching platform that connects shippers, transport companies and drivers in real time.",
        context: "Client project for a French transport company (Île-de-France).",
        highlights: [
          "One Flutter app serving three completely different experiences — shippers publishing missions, companies managing their fleet, and drivers on the road — with role-based routing and navigation shells.",
          "A geographic matching engine that dispatches each mission to the right drivers based on position, vehicle type and rating, with automatic price escalation when nobody accepts in time.",
          "Live dispatch over Socket.IO plus Firebase push notifications, so a mission created on one device appears instantly on every other.",
          "Compliance built in: companies upload their legal documents, admins validate or reject them, and drivers can be sanctioned or archived.",
          "Automated PDF invoicing that applies the platform commission and VAT, generated server-side and shareable straight from the app.",
          "Google Maps with address autocomplete proxied through the API, and GPS tracking for drivers during an active mission.",
          "Runs on AWS EC2 as a Docker Compose stack behind nginx with HTTPS; iOS releases go out through a Codemagic pipeline to TestFlight.",
        ],
      },
      fr: {
        name: "SpotFleet",
        kind: "Marketplace de transport · Mobile + Web + Cloud",
        tagline:
          "Une plateforme de mise en relation qui connecte donneurs d'ordre, sociétés de transport et chauffeurs en temps réel.",
        context: "Projet client pour une société de transport française (Île-de-France).",
        highlights: [
          "Une seule application Flutter pour trois expériences totalement différentes — donneurs d'ordre qui publient des missions, sociétés qui gèrent leur flotte, et chauffeurs sur le terrain — avec un routage et une navigation par rôle.",
          "Un moteur de matching géographique qui envoie chaque mission aux bons chauffeurs selon la position, le type de véhicule et la note, avec revalorisation automatique du prix si personne n'accepte à temps.",
          "Dispatch en direct via Socket.IO et notifications push Firebase : une mission créée sur un appareil apparaît instantanément sur tous les autres.",
          "La conformité intégrée : les sociétés déposent leurs documents légaux, les administrateurs valident ou refusent, et les chauffeurs peuvent être sanctionnés ou archivés.",
          "Facturation PDF automatisée appliquant la commission de la plateforme et la TVA, générée côté serveur et partageable directement depuis l'app.",
          "Google Maps avec autocomplétion d'adresses passant par l'API, et suivi GPS des chauffeurs pendant une mission active.",
          "Déployé sur AWS EC2 en stack Docker Compose derrière nginx en HTTPS ; les versions iOS partent vers TestFlight via un pipeline Codemagic.",
        ],
      },
    },
  },
  {
    id: "dribbly",
    visual: "gallery",
    year: "2026",
    accent: "from-emerald-400 to-teal-500",
    featured: true,
    stack: [
      "Flutter",
      "Provider",
      "NestJS 11",
      "PostgreSQL 16",
      "TypeORM",
      "Socket.IO",
      "Redis",
      "Firebase FCM",
      "Docker Compose",
      "nginx",
      "Let's Encrypt",
      "AWS EC2",
    ],
    metrics: [
      { value: "74", label: { en: "app screens", fr: "écrans dans l'app" } },
      { value: "3", label: { en: "languages: EN / FR / AR", fr: "langues : EN / FR / AR" } },
      { value: "v1.1.1", label: { en: "live on TestFlight", fr: "en ligne sur TestFlight" } },
    ],
    images: [
      "/projects/dribbly/01_terrains.png",
      "/projects/dribbly/02_iphone_6_5.png",
      "/projects/dribbly/04_creneaux.png",
      "/projects/dribbly/06_iphone_6_5.png",
      "/projects/dribbly/02_detail_mouradd.png",
      "/projects/dribbly/01_iphone_6_5.png",
    ],
    copy: {
      en: {
        name: "DribbLy",
        kind: "Sports marketplace · Mobile + Real-time backend",
        tagline:
          "Book a football pitch, or let the app build your squad for you — a two-sided marketplace for players and field owners.",
        context: "My own product, designed, built and operated end to end.",
        highlights: [
          "A genuine two-sided marketplace: players browse and book pitches by time slot, while owners manage their fields, individual playing surfaces, approvals and recurring weekly subscriptions.",
          "Matchmaking that goes past booking — \"Mix Match\" recruits players one by one until the squad is full and only then reserves the pitch, and Team vs Team pairs whole teams with a captains' chat.",
          "Real-time chat built on Socket.IO with a Redis adapter, so the backend can scale to multiple instances without dropping sockets.",
          "Trilingual from day one — English, French and Arabic — with locale-aware typography, plus guest browsing so new users can explore before signing up.",
          "Machine-learning injury risk scoring folded into each player's health profile, served by a separate Flask microservice.",
          "Weather forecasts per match, team management with invitations, post-match player ratings, and a full notification centre backed by Firebase push.",
          "Operated like a real product: nginx reverse proxy, Let's Encrypt HTTPS, nightly PostgreSQL dumps with 7-day retention, and a Codemagic pipeline pushing to TestFlight.",
        ],
      },
      fr: {
        name: "DribbLy",
        kind: "Marketplace sportive · Mobile + Backend temps réel",
        tagline:
          "Réservez un terrain de foot, ou laissez l'app composer votre équipe — une marketplace à deux faces pour joueurs et propriétaires.",
        context: "Mon propre produit, conçu, développé et exploité de bout en bout.",
        highlights: [
          "Une vraie marketplace à deux faces : les joueurs parcourent et réservent des terrains par créneau, tandis que les propriétaires gèrent leurs complexes, leurs terrains, les validations et les abonnements hebdomadaires.",
          "Un matchmaking qui va plus loin que la réservation — le « Mix Match » recrute les joueurs un par un jusqu'à compléter l'effectif avant de réserver le terrain, et le mode Équipe contre Équipe met en relation deux équipes avec un chat entre capitaines.",
          "Chat en temps réel sur Socket.IO avec adaptateur Redis, pour que le backend puisse passer à plusieurs instances sans perdre les connexions.",
          "Trilingue dès le départ — anglais, français et arabe — avec une typographie adaptée à chaque langue, et une navigation invité pour explorer avant de créer un compte.",
          "Un score de risque de blessure par machine learning intégré au profil santé de chaque joueur, servi par un microservice Flask dédié.",
          "Météo par match, gestion d'équipes avec invitations, notation des joueurs après match, et un centre de notifications complet adossé à Firebase.",
          "Exploité comme un vrai produit : reverse proxy nginx, HTTPS Let's Encrypt, sauvegardes PostgreSQL nocturnes conservées 7 jours, et pipeline Codemagic vers TestFlight.",
        ],
      },
    },
  },
  {
    id: "cloud-platform",
    visual: "architecture",
    year: "2025",
    accent: "from-orange-400 to-rose-500",
    featured: true,
    stack: [
      "Terraform",
      "AWS VPC",
      "Amazon EKS",
      "Amazon RDS",
      "IAM",
      "Kubernetes",
      "Helm",
      "Jenkins",
      "Ansible",
      "Docker Hub",
      "GitOps",
    ],
    metrics: [
      { value: "100%", label: { en: "infrastructure as code", fr: "infrastructure as code" } },
      { value: "3", label: { en: "services on EKS", fr: "services sur EKS" } },
      { value: "2 AZ", label: { en: "highly-available VPC", fr: "VPC haute disponibilité" } },
    ],
    copy: {
      en: {
        name: "Cloud-Native Delivery Platform",
        kind: "DevOps · Infrastructure as Code · CI/CD",
        tagline:
          "The AWS foundation and delivery pipeline behind the apps — reproducible from an empty account with one Terraform apply.",
        context: "Built during my DevOps engineering role, then extended as my reference platform.",
        highlights: [
          "The whole AWS footprint declared in Terraform: a VPC across two availability zones with public and private subnets and a NAT gateway, an EKS 1.28 cluster with a managed node group, RDS PostgreSQL, and scoped IAM roles.",
          "An Ansible playbook that takes a bare Ubuntu EC2 instance and hands back a working Jenkins controller with JDK 17 and Docker installed.",
          "A Jenkins pipeline that builds and pushes three service images to Docker Hub on every commit, then rewrites the image tags in a separate Helm deploy repository — GitOps, so every release is a reviewable commit.",
          "A three-tier workload running on EKS: the Next.js storefront and the NestJS API exposed through load balancers, and the Flask ML service kept internal and reachable only by cluster DNS.",
          "Database credentials and application config handled through Kubernetes secrets and env wiring rather than baked into images.",
          "Because everything is code, the entire environment can be torn down and rebuilt — which is exactly what you want before you trust it with a client's product.",
        ],
      },
      fr: {
        name: "Plateforme de livraison cloud-native",
        kind: "DevOps · Infrastructure as Code · CI/CD",
        tagline:
          "La fondation AWS et le pipeline de livraison derrière les applications — reproductibles depuis un compte vide en un seul terraform apply.",
        context: "Construite pendant mon poste d'ingénieur DevOps, puis étendue comme plateforme de référence.",
        highlights: [
          "L'ensemble de l'empreinte AWS déclarée en Terraform : un VPC sur deux zones de disponibilité avec sous-réseaux publics et privés et une passerelle NAT, un cluster EKS 1.28 avec groupe de nœuds managé, RDS PostgreSQL, et des rôles IAM cadrés.",
          "Un playbook Ansible qui part d'une instance EC2 Ubuntu vierge et rend un contrôleur Jenkins opérationnel avec JDK 17 et Docker installés.",
          "Un pipeline Jenkins qui construit et pousse trois images vers Docker Hub à chaque commit, puis réécrit les tags d'images dans un dépôt Helm séparé — du GitOps, où chaque déploiement est un commit relisible.",
          "Une charge de travail à trois niveaux sur EKS : la boutique Next.js et l'API NestJS exposées via load balancers, et le service ML Flask maintenu interne, joignable uniquement par le DNS du cluster.",
          "Les identifiants de base de données et la configuration applicative gérés par des secrets Kubernetes et des variables d'environnement, plutôt qu'intégrés aux images.",
          "Comme tout est du code, l'environnement complet peut être détruit puis reconstruit — précisément ce qu'on veut vérifier avant de lui confier le produit d'un client.",
        ],
      },
    },
  },
  {
    id: "footup",
    visual: "storefront",
    year: "2025",
    accent: "from-violet-400 to-fuchsia-500",
    featured: false,
    stack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "NestJS",
      "JWT",
      "Docker",
    ],
    metrics: [
      { value: "8", label: { en: "routes", fr: "routes" } },
      { value: "40+", label: { en: "UI components", fr: "composants UI" } },
    ],
    copy: {
      en: {
        name: "FootUp Storefront",
        kind: "E-commerce · Next.js App Router",
        tagline: "A football gear shop with a full admin back office, deployed as a container.",
        context: "The customer-facing tier of the cloud platform above.",
        highlights: [
          "Catalogue with search, category filters, a price range slider and switchable grid or list views.",
          "Cart and checkout supporting card, cash and meet-up payment, wired to the NestJS order API.",
          "Role-aware admin dashboard for products, categories and orders, protected by JWT with refresh tokens.",
          "Built as a standalone Next.js output inside a multi-stage Docker image, ready to drop onto Kubernetes.",
        ],
      },
      fr: {
        name: "Boutique FootUp",
        kind: "E-commerce · Next.js App Router",
        tagline: "Une boutique d'équipement de foot avec back-office complet, déployée en conteneur.",
        context: "La couche visible par le client de la plateforme cloud ci-dessus.",
        highlights: [
          "Catalogue avec recherche, filtres par catégorie, curseur de fourchette de prix et affichage grille ou liste.",
          "Panier et paiement acceptant carte, espèces et remise en main propre, connectés à l'API de commandes NestJS.",
          "Tableau de bord d'administration par rôle pour produits, catégories et commandes, protégé par JWT avec tokens de rafraîchissement.",
          "Construit en sortie Next.js standalone dans une image Docker multi-étapes, prête à poser sur Kubernetes.",
        ],
      },
    },
  },
  {
    id: "injury-ml",
    visual: "api",
    year: "2025",
    accent: "from-cyan-400 to-blue-500",
    featured: false,
    stack: ["Python", "Flask", "scikit-learn", "Random Forest", "joblib", "Docker", "Kubernetes"],
    metrics: [
      { value: "10", label: { en: "input features", fr: "variables d'entrée" } },
      { value: "ClusterIP", label: { en: "internal-only service", fr: "service interne uniquement" } },
    ],
    copy: {
      en: {
        name: "Injury Risk Prediction API",
        kind: "Machine learning microservice",
        tagline: "A Random Forest model that scores an athlete's injury risk and returns advice.",
        context: "Consumed by the DribbLy player-health module.",
        highlights: [
          "A Random Forest classifier scoring injury risk from workload, match intensity, sleep, BMI, stress and injury history.",
          "Exposed as a single POST /predict endpoint returning a probability plus a plain-language recommendation.",
          "Packaged in a slim Python image and deployed to Kubernetes as a ClusterIP service — never exposed to the internet, only callable by the API.",
        ],
      },
      fr: {
        name: "API de prédiction du risque de blessure",
        kind: "Microservice de machine learning",
        tagline: "Un modèle Random Forest qui évalue le risque de blessure d'un athlète et renvoie des conseils.",
        context: "Consommé par le module santé joueur de DribbLy.",
        highlights: [
          "Un classifieur Random Forest qui évalue le risque de blessure à partir de la charge, de l'intensité des matchs, du sommeil, de l'IMC, du stress et des antécédents.",
          "Exposé via un unique endpoint POST /predict renvoyant une probabilité et une recommandation en langage clair.",
          "Empaqueté dans une image Python légère et déployé sur Kubernetes en service ClusterIP — jamais exposé à Internet, appelable uniquement par l'API.",
        ],
      },
    },
  },
];

/* ------------------------------------------------------------------ *
 * Certifications
 * ------------------------------------------------------------------ */

export const certifications = [
  {
    id: "ckad",
    year: "2026",
    issuer: "The Linux Foundation / CNCF",
    file: "/docs/CKAD-Certificate.pdf",
    accent: "from-sky-400 to-blue-600",
    tone: "text-accent-300",
    copy: {
      en: { name: "Certified Kubernetes Application Developer", short: "CKAD" },
      fr: { name: "Certified Kubernetes Application Developer", short: "CKAD" },
    },
  },
  {
    id: "saa",
    year: "2024",
    issuer: "Amazon Web Services",
    file: "/docs/AWS-Solutions-Architect-Associate.pdf",
    accent: "from-orange-400 to-amber-600",
    tone: "text-accent-300",
    copy: {
      en: { name: "AWS Certified Solutions Architect – Associate", short: "AWS SAA" },
      fr: { name: "AWS Certified Solutions Architect – Associate", short: "AWS SAA" },
    },
  },
  {
    id: "ccp",
    year: "2022",
    issuer: "Amazon Web Services",
    file: null,
    accent: "from-violet-400 to-purple-600",
    tone: "text-accent-300",
    copy: {
      en: { name: "AWS Certified Cloud Practitioner", short: "AWS CCP" },
      fr: { name: "AWS Certified Cloud Practitioner", short: "AWS CCP" },
    },
  },
];

/* ------------------------------------------------------------------ *
 * Tech stack
 * ------------------------------------------------------------------ */

export const stackGroups = [
  {
    id: "cloud",
    icon: "cloud",
    items: ["AWS", "EKS", "EC2", "RDS", "S3", "IAM", "VPC", "Terraform"],
    copy: { en: { title: "Cloud & IaC" }, fr: { title: "Cloud & IaC" } },
  },
  {
    id: "devops",
    icon: "container",
    items: ["Kubernetes", "Docker", "Helm", "ArgoCD", "Jenkins", "Ansible", "Linux", "Bash"],
    copy: { en: { title: "DevOps & CI/CD" }, fr: { title: "DevOps & CI/CD" } },
  },
  {
    id: "backend",
    icon: "server",
    items: ["NestJS", "Flask", "Django", "REST APIs", "Prisma", "TypeORM", "Socket.IO", "Redis"],
    copy: { en: { title: "Backend" }, fr: { title: "Backend" } },
  },
  {
    id: "mobile",
    icon: "smartphone",
    items: ["Flutter", "Riverpod", "Provider", "Firebase", "Google Maps", "Codemagic"],
    copy: { en: { title: "Mobile" }, fr: { title: "Mobile" } },
  },
  {
    id: "frontend",
    icon: "layout",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    copy: { en: { title: "Frontend" }, fr: { title: "Frontend" } },
  },
  {
    id: "data",
    icon: "database",
    items: ["PostgreSQL", "MySQL", "Prometheus", "Grafana", "scikit-learn"],
    copy: { en: { title: "Data & Monitoring" }, fr: { title: "Data & Monitoring" } },
  },
];

/* ------------------------------------------------------------------ *
 * Localised UI copy
 * ------------------------------------------------------------------ */

export const dict = {
  en: {
    nav: {
      services: "Services",
      work: "Work",
      stack: "Stack",
      about: "About",
      contact: "Contact",
      cta: "Start a project",
    },
    hero: {
      status: "Available for freelance projects",
      titleA: "I build the app",
      titleB: "and the cloud it runs on.",
      lead:
        "I'm Taha, a DevOps and cloud engineer who also ships full products. Flutter apps in the stores, NestJS APIs behind them, and the AWS infrastructure, Kubernetes clusters and CI/CD pipelines that keep all of it running.",
      ctaPrimary: "Start a project",
      ctaSecondary: "See my work",
      cv: "Download CV",
      scroll: "Scroll",
      stats: [
        { value: "3", label: "Cloud & Kubernetes certifications" },
        { value: "2", label: "Mobile apps shipped to iOS & Android" },
        { value: "100%", label: "Infrastructure managed as code" },
        { value: "2+", label: "Years building in production" },
      ],
    },
    trust: {
      label: "Certified and working with",
    },
    services: {
      eyebrow: "Services",
      title: "What you can hire me for",
      lead:
        "Whether you need someone to take an idea to the App Store or to clean up infrastructure that has outgrown itself, these are the areas where I do my best work.",
      items: [
        {
          icon: "cloud",
          title: "Cloud architecture on AWS",
          body:
            "I design and provision your AWS environment with Terraform: VPC, EKS, RDS and IAM, sized for what you actually need.",
          points: ["Terraform", "VPC & networking", "EKS & RDS", "IAM"],
        },
        {
          icon: "container",
          title: "Kubernetes & containers",
          body:
            "I containerise the application and run it on Kubernetes with Helm, health checks, secrets and resource limits.",
          points: ["Docker", "Helm", "EKS", "Zero-downtime deploys"],
        },
        {
          icon: "gitbranch",
          title: "CI/CD & GitOps",
          body:
            "Pipelines that build, test and deploy on every commit. Each release is a reviewable change you can roll back.",
          points: ["Jenkins", "GitHub Actions", "ArgoCD", "Docker Hub"],
        },
        {
          icon: "server",
          title: "Backend APIs",
          body:
            "REST APIs in NestJS, Flask or Django on PostgreSQL, with JWT auth, roles, rate limiting and documentation.",
          points: ["NestJS & Flask", "PostgreSQL", "JWT", "WebSockets"],
        },
        {
          icon: "smartphone",
          title: "Flutter mobile apps",
          body:
            "iOS and Android from one codebase, including push notifications, maps and TestFlight / Play Store releases.",
          points: ["Flutter", "Push & maps", "i18n", "TestFlight"],
        },
        {
          icon: "activity",
          title: "Monitoring & security",
          body:
            "Prometheus and Grafana, HTTPS, automated database backups, and secrets kept out of your images.",
          points: ["Prometheus", "Grafana", "HTTPS", "Backups"],
        },
      ],
    },
    work: {
      eyebrow: "Work",
      title: "Real products, running in production",
      lead:
        "Not tutorials or clones. Each of these has real users, a real deployment and the operational work that comes with it.",
      more: "Also built",
      viewCase: "Read the details",
      hideCase: "Hide details",
      stackLabel: "Stack",
      privateNote: "Private client work — walkthrough on request.",
      ownNote: "My own product.",
    },
    stack: {
      eyebrow: "Stack",
      title: "Technologies I work with daily",
      lead: "The stack I use on client projects.",
    },
    process: {
      eyebrow: "Process",
      title: "A simple, predictable process",
      lead: "A clear plan, weekly progress, and a proper handover.",
      steps: [
        {
          title: "Discovery call",
          body: "30 minutes, free. You describe the problem. I tell you if I am the right person for it.",
        },
        {
          title: "Scope & quote",
          body: "A written plan: what gets built, on which stack, with a price and a timeline. You approve before we start.",
        },
        {
          title: "Build in short cycles",
          body: "You get something to click every week, plus a short update. Feedback comes in while changes are still cheap.",
        },
        {
          title: "Handover",
          body: "Documentation, infrastructure as code, and a walkthrough so your team can own it. I stay available after.",
        },
      ],
    },
    about: {
      eyebrow: "About",
      title: "DevOps engineer, product builder",
      body: [
        "I am a cloud and DevOps engineer based in Tunisia, working with clients in Europe. I trained as a software engineer at TEK-UP after a networks and systems degree at ISI Mahdia — so infrastructure and application code are the same job for me.",
        "At OMconsulting in France I designed a NestJS, PostgreSQL and Flask architecture, provisioned AWS with Terraform, ran it on EKS with Helm, and set up Jenkins, ArgoCD, Prometheus and Grafana. Before that, a year at Study.tn building NestJS APIs and deploying to AWS.",
        "I also build and operate my own products: a football booking app and a freight-matching platform.",
      ],
      experienceTitle: "Experience",
      educationTitle: "Education",
      languagesTitle: "Languages",
      experience: [
        {
          role: "DevOps & Cloud Engineer",
          org: "OMconsulting — France",
          period: "Apr 2025 – Oct 2025",
          points: [
            "Designed a microservices architecture with NestJS, PostgreSQL and Flask.",
            "Provisioned AWS infrastructure with Terraform: VPC, EKS, RDS, EC2, IAM.",
            "Orchestrated workloads on EKS and deployed them with Helm.",
            "Built CI/CD pipelines with Jenkins and ArgoCD (GitOps).",
            "Set up monitoring with Prometheus and Grafana.",
            "Secured services with HTTPS, cert-manager and IAM policies.",
          ],
        },
        {
          role: "Backend & DevOps Developer",
          org: "Study.tn — Tunisia",
          period: "Feb 2024 – Mar 2025",
          points: [
            "Developed REST APIs with NestJS, JWT authentication and role management.",
            "Designed and managed databases with Prisma and PostgreSQL.",
            "Deployed applications to AWS (EC2, S3) and automated infrastructure with Terraform.",
            "Built CI/CD pipelines with Jenkins; containerised with Docker and orchestrated with Kubernetes.",
          ],
        },
      ],
      education: [
        { degree: "Software Engineering Diploma", org: "TEK-UP University", period: "2022 – 2025" },
        { degree: "Bachelor in Networks & Systems", org: "ISI Mahdia", period: "2019 – 2022" },
      ],
      languages: [
        { name: "Arabic", level: "Native" },
        { name: "French", level: "Fluent" },
        { name: "English", level: "Fluent" },
      ],
    },
    certs: {
      eyebrow: "Certifications",
      title: "Verified, not self-declared",
      lead: "Three cloud and Kubernetes certifications. Certificates open in a new tab.",
      view: "View certificate",
      soon: "Certificate on request",
    },
    testimonial: {
      eyebrow: "Reference",
      quote:
        "Taha contributed to the development and optimisation of our platforms, bringing real added value to our ongoing projects.",
      author: "Mohamed Salim Hadrich",
      role: "Co-founder, Study.tn",
      note: "Translated from the original French attestation.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Tell me what you're building",
      lead:
        "Send me a short description of your project — the problem, roughly when you need it, and any budget range you have in mind. I reply to every serious enquiry within 24 hours.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      whatsappLabel: "WhatsApp",
      linkedinLabel: "LinkedIn",
      formName: "Your name",
      formEmail: "Email address",
      formBudget: "Budget range",
      formBudgetOptions: ["Not sure yet", "Under €2k", "€2k – €5k", "€5k – €15k", "€15k+"],
      formType: "What do you need?",
      formTypeOptions: [
        "Cloud & Terraform",
        "Kubernetes & CI/CD",
        "Backend / API",
        "Mobile app",
        "Full product",
        "Something else",
      ],
      formMessage: "Tell me about the project",
      formMessagePlaceholder:
        "What are you building, what's blocking you, and when do you need it live?",
      formSubmit: "Send message",
      formNote: "This opens your email client with everything pre-filled.",
      availability: "Available for new projects",
      remote: "Remote worldwide · Based in Tunisia · Mobility: Europe",
      response: "Replies within 24 hours",
    },
    footer: {
      tagline: "DevOps & cloud engineer building products end to end.",
      rights: "All rights reserved.",
      built: "Built with Next.js and Tailwind CSS.",
      backToTop: "Back to top",
    },
  },

  fr: {
    nav: {
      services: "Services",
      work: "Projets",
      stack: "Stack",
      about: "À propos",
      contact: "Contact",
      cta: "Démarrer un projet",
    },
    hero: {
      status: "Disponible pour des missions freelance",
      titleA: "Je construis l'application",
      titleB: "et le cloud qui la fait tourner.",
      lead:
        "Je suis Taha, ingénieur DevOps et cloud qui livre aussi des produits complets. Des applications Flutter sur les stores, les API NestJS derrière, et l'infrastructure AWS, les clusters Kubernetes et les pipelines CI/CD qui maintiennent tout cela en vie.",
      ctaPrimary: "Démarrer un projet",
      ctaSecondary: "Voir mes projets",
      cv: "Télécharger le CV",
      scroll: "Défiler",
      stats: [
        { value: "3", label: "Certifications cloud & Kubernetes" },
        { value: "2", label: "Applications mobiles livrées sur iOS & Android" },
        { value: "100%", label: "Infrastructure gérée en code" },
        { value: "2+", label: "Ans d'expérience en production" },
      ],
    },
    trust: {
      label: "Certifié et outillé avec",
    },
    services: {
      eyebrow: "Services",
      title: "Ce pour quoi vous pouvez me solliciter",
      lead:
        "Que vous ayez besoin d'amener une idée jusqu'à l'App Store ou d'assainir une infrastructure devenue trop grande pour elle-même, voici les domaines où je suis le plus utile.",
      items: [
        {
          icon: "cloud",
          title: "Architecture cloud sur AWS",
          body:
            "Je conçois et provisionne votre environnement AWS avec Terraform : VPC, EKS, RDS et IAM, dimensionné pour vos besoins réels.",
          points: ["Terraform", "VPC & réseau", "EKS & RDS", "IAM"],
        },
        {
          icon: "container",
          title: "Kubernetes & conteneurs",
          body:
            "Je conteneurise l'application et la fais tourner sur Kubernetes avec Helm, sondes de santé, secrets et limites de ressources.",
          points: ["Docker", "Helm", "EKS", "Déploiements sans coupure"],
        },
        {
          icon: "gitbranch",
          title: "CI/CD & GitOps",
          body:
            "Des pipelines qui construisent, testent et déploient à chaque commit. Chaque livraison est un changement relisible et réversible.",
          points: ["Jenkins", "GitHub Actions", "ArgoCD", "Docker Hub"],
        },
        {
          icon: "server",
          title: "API backend",
          body:
            "Des API REST en NestJS, Flask ou Django sur PostgreSQL, avec authentification JWT, rôles, limitation de débit et documentation.",
          points: ["NestJS & Flask", "PostgreSQL", "JWT", "WebSockets"],
        },
        {
          icon: "smartphone",
          title: "Applications Flutter",
          body:
            "iOS et Android depuis une seule base de code, avec notifications push, cartes, et livraisons TestFlight / Play Store.",
          points: ["Flutter", "Push & cartes", "i18n", "TestFlight"],
        },
        {
          icon: "activity",
          title: "Monitoring & sécurité",
          body:
            "Prometheus et Grafana, HTTPS, sauvegardes de base de données, et des secrets qui restent hors des images.",
          points: ["Prometheus", "Grafana", "HTTPS", "Sauvegardes"],
        },
      ],
    },
    work: {
      eyebrow: "Projets",
      title: "De vrais produits, en production",
      lead:
        "Pas des tutoriels ni des clones. Chacun a de vrais utilisateurs, un vrai déploiement, et le travail d'exploitation qui va avec.",
      more: "Également réalisé",
      viewCase: "Lire les détails",
      hideCase: "Masquer les détails",
      stackLabel: "Stack",
      privateNote: "Projet client privé — démonstration sur demande.",
      ownNote: "Mon propre produit.",
    },
    stack: {
      eyebrow: "Stack",
      title: "Outils que j'utilise",
      lead: "La stack que j'emploie sur les projets clients.",
    },
    process: {
      eyebrow: "Processus",
      title: "Comment on travaille",
      lead: "Un plan clair, des livraisons chaque semaine, et une passation propre.",
      steps: [
        {
          title: "Appel de cadrage",
          body: "30 minutes, gratuites. Vous décrivez le problème. Je vous dis si je suis la bonne personne.",
        },
        {
          title: "Périmètre & devis",
          body: "Un plan écrit : ce qui sera construit, sur quelle stack, avec un prix et un délai. Vous validez avant de commencer.",
        },
        {
          title: "Cycles courts",
          body: "Chaque semaine, quelque chose de cliquable et un point court. Vos retours arrivent tôt.",
        },
        {
          title: "Transfert",
          body: "Documentation, infrastructure en code, et une passation pour que votre équipe puisse reprendre la main.",
        },
      ],
    },
    about: {
      eyebrow: "À propos",
      title: "Ingénieur DevOps, bâtisseur de produits",
      body: [
        "Je suis ingénieur cloud et DevOps, basé en Tunisie, et je travaille avec des clients en Europe. Diplômé ingénieur à TEK-UP après une licence réseaux et systèmes à l'ISI Mahdia — infrastructure et code applicatif sont un seul métier pour moi.",
        "Chez OMconsulting en France, j'ai conçu une architecture NestJS, PostgreSQL et Flask, provisionné AWS avec Terraform, orchestré sur EKS avec Helm, et mis en place Jenkins, ArgoCD, Prometheus et Grafana. Avant cela, un an chez Study.tn sur des API NestJS et le déploiement AWS.",
        "Je construis et exploite aussi mes propres produits : une application de réservation de terrains et une plateforme de mise en relation transport.",
      ],
      experienceTitle: "Expérience",
      educationTitle: "Formation",
      languagesTitle: "Langues",
      experience: [
        {
          role: "Ingénieur DevOps & Cloud",
          org: "OMconsulting — France",
          period: "Avr. 2025 – Oct. 2025",
          points: [
            "Conception d'une architecture microservices avec NestJS, PostgreSQL et Flask.",
            "Provisionnement de l'infrastructure AWS avec Terraform : VPC, EKS, RDS, EC2, IAM.",
            "Orchestration des applications sur EKS et déploiement via Helm.",
            "Mise en place de pipelines CI/CD avec Jenkins et ArgoCD (GitOps).",
            "Implémentation du monitoring avec Prometheus et Grafana.",
            "Sécurisation des services avec HTTPS, cert-manager et politiques IAM.",
          ],
        },
        {
          role: "Développeur Backend & DevOps",
          org: "Study.tn — Tunisie",
          period: "Févr. 2024 – Mars 2025",
          points: [
            "Développement d'API REST avec NestJS, authentification JWT et gestion des rôles.",
            "Conception et gestion de bases de données avec Prisma et PostgreSQL.",
            "Déploiement d'applications sur AWS (EC2, S3) et automatisation de l'infrastructure avec Terraform.",
            "Mise en place de pipelines CI/CD avec Jenkins ; conteneurisation Docker et orchestration Kubernetes.",
          ],
        },
      ],
      education: [
        { degree: "Diplôme d'ingénieur en informatique", org: "Université TEK-UP", period: "2022 – 2025" },
        { degree: "Licence en réseaux et systèmes", org: "ISI Mahdia", period: "2019 – 2022" },
      ],
      languages: [
        { name: "Arabe", level: "Langue maternelle" },
        { name: "Français", level: "Courant" },
        { name: "Anglais", level: "Courant" },
      ],
    },
    certs: {
      eyebrow: "Certifications",
      title: "Vérifiées, pas auto-déclarées",
      lead: "Trois certifications cloud et Kubernetes. Les certificats s'ouvrent dans un nouvel onglet.",
      view: "Voir le certificat",
      soon: "Certificat sur demande",
    },
    testimonial: {
      eyebrow: "Référence",
      quote:
        "Monsieur Khadraoui a contribué au développement et à l'optimisation de nos plateformes, apportant une réelle valeur ajoutée à nos projets en cours.",
      author: "Mohamed Salim Hadrich",
      role: "Co-fondateur, Study.tn",
      note: "Extrait de l'attestation de stage originale.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Dites-moi ce que vous construisez",
      lead:
        "Envoyez-moi une courte description de votre projet — le problème, l'échéance approximative, et la fourchette de budget que vous avez en tête. Je réponds à toute demande sérieuse sous 24 heures.",
      emailLabel: "E-mail",
      phoneLabel: "Téléphone",
      whatsappLabel: "WhatsApp",
      linkedinLabel: "LinkedIn",
      formName: "Votre nom",
      formEmail: "Adresse e-mail",
      formBudget: "Fourchette de budget",
      formBudgetOptions: ["Pas encore défini", "Moins de 2k€", "2k€ – 5k€", "5k€ – 15k€", "15k€+"],
      formType: "De quoi avez-vous besoin ?",
      formTypeOptions: [
        "Cloud & Terraform",
        "Kubernetes & CI/CD",
        "Backend / API",
        "Application mobile",
        "Produit complet",
        "Autre chose",
      ],
      formMessage: "Parlez-moi du projet",
      formMessagePlaceholder:
        "Que construisez-vous, qu'est-ce qui vous bloque, et pour quand le voulez-vous en ligne ?",
      formSubmit: "Envoyer le message",
      formNote: "Cela ouvre votre client e-mail avec tout le contenu pré-rempli.",
      availability: "Disponible pour de nouveaux projets",
      remote: "Télétravail international · Basé en Tunisie · Mobilité : Europe",
      response: "Réponse sous 24 heures",
    },
    footer: {
      tagline: "Ingénieur DevOps & cloud qui construit des produits de bout en bout.",
      rights: "Tous droits réservés.",
      built: "Réalisé avec Next.js et Tailwind CSS.",
      backToTop: "Haut de page",
    },
  },
} as const;

export type Dict = (typeof dict)["en"];
