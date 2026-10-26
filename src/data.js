
export const profile = {
  name: "Oussama Riahi",
  title: "Ingénieur Systèmes Embarqués",
  intro:
    "Je développe en C/C++ pour Linux embarqué, de l'interfaçage matériel (RS-232, CAN, I2C) à la vision et à l'IA sur cible contrainte. Avant mon Master, plus de 4 ans en production automobile m'ont appris à diagnostiquer, documenter et livrer sous contrainte.",
  location: "Clermont-Ferrand, France",
  availability: "Disponible immédiatement",
  email: "riahi_oussema@outlook.fr",
  linkedin: "https://www.linkedin.com/in/oussama-riahi/",
  github: "https://github.com/ouriahi", // à remplacer
};

export const pinsLeft = ["C / C++", "Linux embarqué", "Yocto / Buildroot", "CMake"];
export const pinsRight = ["CAN", "I2C", "UART", "VHDL"];

export const projects = [
  {
    title: "Pilotage d'un microscope industriel sur Raspberry Pi",
    context: "Stage M1, OPTO France (vision industrielle), équipe de 12 ingénieurs",
    summary: "Un serveur logiciel embarqué qui pilote le microscope et transmet la vidéo par un seul câble Gigabit Ethernet.",
    goal: "Intégrer un système embarqué complet dans un microscope industriel pour centraliser pilotage et transmission vidéo, avec un serveur conforme aux standards GigE Vision et GenICam.",
    done: [
      "Application C++/Qt avec CMake et cross-compilation pour une cible Raspberry Pi.",
      "Dialogue bas niveau en RS-232 avec deux contrôleurs : motorisation des axes XYZ et éclairage LED.",
      "Détection automatique des contrôleurs au démarrage du système.",
      "Autofocus matériel/logiciel en temps réel basé sur un filtre de Sobel.",
      "Travail en Scrum, sprints de 3 semaines.",
    ],
    results: [
      "Prototype fonctionnel livré et présenté à la direction.",
      "Vidéo et contrôle temps réel validés avec les outils de l'industrie (eBUS Player, NI MAX, Vision Builder).",
      "Pilotage des moteurs et des LED centralisé dans une seule interface logicielle.",
    ],
    stack: ["C++", "Qt", "CMake", "Linux embarqué", "Raspberry Pi", "GigE Vision", "GenICam", "RS-232", "Filtre de Sobel", "GoogleTest"],
    link: null, // ex. "https://github.com/TON-PSEUDO/mon-projet"
  },
  {
    title: "NeuPIS : apprentissage distribué collaboratif",
    context: "Stage M2, Institut Pascal (UCA), équipe de 10 chercheurs",
    summary: "Une architecture d'IA distribuée qui réduit les échanges réseau et la charge de calcul sur les nœuds locaux.",
    goal: "Lever les verrous de la centralisation des données en IA : concevoir des architectures décentralisées performantes qui optimisent la communication réseau et l'usage des ressources entre les nœuds.",
    done: [
      "Recherche, conception et développement d'architectures d'IA fédérée et distribuée.",
      "Résolution de goulots d'étranglement : réseau, latence, sécurité des données, calcul sur les nœuds locaux.",
      "Implémentation des algorithmes de distribution et évaluation approfondie des performances.",
    ],
    results: [
      "Architecture NeuPIS (Neural Partitioned Interactive Splitting) conçue, implémentée et validée.",
      "Article scientifique publié sur HAL.",
    ],
    stack: ["Python", "PyTorch", "C/C++", "IA fédérée", "Systèmes distribués", "Analyse de performances"],
    link: "https://hal.science/hal-05648786v1",
    linkLabel: "Lire l'article sur HAL",
  },
  {
    title: "Accélération matérielle et traitement du signal sur FPGA",
    context: "Projet de Master",
    summary: "Architectures numériques en VHDL pour le filtrage et le traitement du signal.",
    done: [
      "Conception d'architectures numériques complexes en VHDL pour le DSP et le filtrage.",
      "Flot de conception complet pour des données parallèles à haute vitesse.",
    ],
    stack: ["VHDL", "Xilinx Vivado", "Intel Quartus", "ModelSim", "DSP"],
    link: null,
  },
  {
    title: "Vision par ordinateur et Edge AI",
    context: "Projet de Master",
    summary: "Traitement d'images et modèles optimisés pour tourner en temps réel sur du matériel contraint.",
    done: [
      "Algorithmes de traitement d'images.",
      "Optimisation de modèles pour minimiser la latence.",
      "Déploiement temps réel sur des architectures matérielles contraintes.",
    ],
    stack: ["OpenCV", "PyTorch", "TensorFlow", "CUDA", "NVIDIA Jetson"],
    link: null,
  },
  {
    title: "Acquisition de capteurs bas niveau",
    context: "Projet de Master et personnel",
    summary: "Code C/C++ embarqué pour acquérir et prétraiter des données capteurs.",
    done: [
      "Acquisition directe de données capteurs et prétraitement.",
      "Validation fonctionnelle sur cible sous Linux, avant les algorithmes de décision.",
    ],
    stack: ["C/C++", "Linux", "I2C", "UART", "Microcontrôleurs"],
    link: null,
  },
];

export const experience = [
  {
    period: "03/2026 à 09/2026",
    role: "Ingénieur recherche IA et Edge Computing (stage M2)",
    org: "Institut Pascal (UCA), Clermont-Ferrand",
    meta: "Recherche en IA, équipe de 10 chercheurs",
    points: [
      "Architectures logicielles distribuées en Python et C/C++ sous contraintes matérielles.",
      "Conception de l'architecture NeuPIS et publication d'un article scientifique.",
    ],
  },
  {
    period: "04/2025 à 08/2025",
    role: "Développeur logiciel embarqué C++/Qt (stage M1)",
    org: "OPTO France, Montélimar",
    meta: "Vision industrielle, équipe de 12 ingénieurs",
    points: [
      "Serveur embarqué GigE Vision / GenICam pour un microscope industriel, sur Raspberry Pi.",
      "Pilotage RS-232 des moteurs et de l'éclairage, autofocus temps réel.",
    ],
  },
  {
    period: "01/2023 à 08/2023",
    role: "Responsable maintenance, secteur automobile",
    org: "Marquardt, Tunis",
    meta: "Équipe de 4 techniciens",
    points: [
      "Pilotage de la maintenance préventive et curative, suivi des KPI de disponibilité des lignes.",
      "Chantiers d'amélioration continue pour réduire les pannes récurrentes.",
      "Démarrage et validation de nouveaux équipements : tests matériels, débogage bas niveau sur carte.",
    ],
  },
  {
    period: "02/2019 à 11/2022",
    role: "Chef d'équipe technique, secteur automobile",
    org: "Amphenol (site Lectric), El Fahs, Tunisie",
    meta: "Production à forts volumes, équipe technique de 6 personnes",
    points: [
      "Validation, installation et débogage d'équipements industriels directement sur les lignes.",
      "Diagnostic rapide des pannes pour réduire les temps d'arrêt.",
      "Documentation technique pour la traçabilité et le support aux opérateurs.",
    ],
  },
];

export const skills = [
  { group: "Développement bas niveau", items: ["C", "C++", "Linux embarqué", "Temps réel", "Multithreading", "Qt", "Python"] },
  { group: "Build et intégration", items: ["CMake", "Cross-compilation", "Yocto / Buildroot (notions)", "Git", "Docker", "CI/CD"] },
  { group: "Tests et qualité", items: ["GoogleTest", "Débogage sur carte", "Analyse de performances", "Tests de robustesse", "ISTQB Fondation"] },
  { group: "Matériel et protocoles", items: ["CAN", "I2C", "UART", "RS-232", "GigE Vision", "GenICam", "Raspberry Pi", "STM32", "ESP32", "Arduino", "NVIDIA Jetson"] },
  { group: "FPGA et signal (Master)", items: ["VHDL", "Xilinx Vivado", "Intel Quartus", "ModelSim", "SoC", "RISC-V", "Matlab", "Simulink", "LabView"] },
  { group: "Vision et IA embarquée (Master, stage M2)", items: ["OpenCV", "PyTorch", "TensorFlow", "CUDA", "IA fédérée"] },
  { group: "Méthodes", items: ["Agile / Scrum (certifié)", "Encadrement d'équipe", "Amélioration continue", "Documentation technique"] },
];

export const publication = {
  title: "NeuPIS : Neural Partitioned Interactive Splitting for Collaborative Distributed Learning",
  year: "2026",
  venue: "Archive ouverte HAL (hal-05648786)",
  link: "https://hal.science/hal-05648786v1",
};

export const education = [
  { year: "2024 à 2026", title: "Master Systèmes embarqués (traitement du signal, des images et du son)", org: "Université Clermont Auvergne", note: "Mention Bien, 2e sur 9. Électronique numérique, FPGA, Linux et C/C++." },
  { year: "2023 à 2024", title: "Licence Sciences pour l'ingénieur, parcours EEA", org: "Université Clermont Auvergne", note: "Mention Bien, 2e sur 53." },
  { year: "2020 à 2023", title: "Licence en Génie électrique", org: "ISET de Rades, Tunisie", note: "Mention Très Bien, 1er sur 40." },
  { year: "2016 à 2018", title: "BTS Automatisme et informatique industrielle", org: "Centre sectoriel de formation en électronique, Tunisie", note: "Mention Très Bien." },
];

export const certs = ["ISTQB niveau Fondation (08/2023)", "Scrum Fundamentals Certified (02/2023)"];

export const languages = "Arabe (langue maternelle), français (courant), anglais (B2, professionnel).";
