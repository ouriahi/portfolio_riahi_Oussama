// Tout le contenu du site est ici : modifie ce fichier, le reste suit.

export const profile = {
  name: "Oussama Riahi",
  title: "Ingénieur systèmes embarqués",
  intro:
    "Je conçois des logiciels C/C++ pour Linux embarqué. Plus de 4 ans dans l'équipement automobile, puis un Master en systèmes embarqués à l'Université Clermont Auvergne.",
  location: "Clermont-Ferrand, France",
  email: "riahi_oussema@outlook.fr",
  linkedin: "https://www.linkedin.com/in/oussama-riahi/",
  github: "https://github.com/ouriahi", // à remplacer
};

export const pinsLeft = ["C / C++", "Linux embarqué", "Yocto / Buildroot", "CMake"];
export const pinsRight = ["CAN", "I2C", "UART", "VHDL"];

export const projects = [
  {
    title: "Application C++/Qt sur Raspberry Pi",
    context: "Stage M1, OPTO France",
    desc: "Application C++ sous Linux embarqué avec CMake et cross-compilation. Dialogue bas niveau avec des contrôleurs matériels temps réel via RS-232.",
    tags: ["C++", "Qt", "CMake", "RS-232", "Raspberry Pi"],
    link: null, // ex. "https://github.com/TON-PSEUDO/mon-projet"
  },
  {
    title: "Accélération matérielle et traitement du signal sur FPGA",
    context: "Projet de Master",
    desc: "Architectures numériques en VHDL pour le filtrage et le traitement du signal. Flot de conception complet pour des données parallèles à haute vitesse.",
    tags: ["VHDL", "DSP", "FPGA"],
    link: null,
  },
  {
    title: "Vision par ordinateur et Edge AI",
    context: "Projet de Master",
    desc: "Algorithmes de traitement d'images et optimisation de modèles pour réduire la latence. Déploiement temps réel sur du matériel contraint.",
    tags: ["Edge AI", "Vision", "Python", "C++"],
    link: null,
  },
  {
    title: "Acquisition de capteurs bas niveau",
    context: "Projet de Master et personnel",
    desc: "Code C/C++ embarqué pour acquérir et prétraiter des données capteurs, validé sur cible sous Linux avant les algorithmes de décision.",
    tags: ["C/C++", "Capteurs", "Linux"],
    link: null,
  },
];

export const experience = [
  {
    period: "03/2026 à 09/2026",
    role: "Ingénieur recherche IA et Edge Computing (stage M2)",
    org: "Institut Pascal (UCA), Clermont-Ferrand",
    points: [
      "Architectures logicielles distribuées en Python et C/C++ sous contraintes matérielles.",
      "Évaluation des performances système et implémentation d'algorithmes robustes.",
    ],
  },
  {
    period: "04/2025 à 08/2025",
    role: "Développeur logiciel embarqué C++/Qt (stage M1)",
    org: "OPTO France, Montélimar",
    points: [
      "Application C++ sous Linux embarqué (Raspberry Pi), CMake et cross-compilation.",
      "Interfaçage de contrôleurs matériels temps réel via RS-232.",
    ],
  },
  {
    period: "01/2023 à 08/2023",
    role: "Responsable maintenance, secteur automobile",
    org: "Marquardt, Tunis",
    points: [
      "Encadrement d'équipe et pilotage d'équipements industriels critiques.",
      "Validation de performances, tests matériels et débogage bas niveau sur de nouveaux moyens de production.",
    ],
  },
  {
    period: "02/2019 à 11/2022",
    role: "Chef d'équipe technique, secteur automobile",
    org: "Amphenol, Tunis",
    points: [
      "Validation matérielle et logicielle, dépannage d'équipements sur lignes à forts volumes.",
      "Documentation technique pour la traçabilité et le support aux opérateurs.",
    ],
  },
];

export const skills = [
  { group: "Développement", items: ["C", "C++", "Linux embarqué", "Temps réel", "Multithreading", "Python"] },
  { group: "Build et tests", items: ["CMake", "Yocto / Buildroot", "Git", "Cross-compilation", "GoogleTest"] },
  { group: "Méthodes", items: ["Agile / Scrum", "CI/CD", "Architecture logicielle", "Documentation"] },
  { group: "Matériel", items: ["Bus CAN", "I2C", "UART", "Débogage sur carte", "Microcontrôleurs"] },
];

export const publication = {
  title: "NeuPIS : Neural Partitioned Interactive Splitting for Collaborative Distributed Learning",
  year: "2026",
  venue: "Archive ouverte HAL (hal-05648786)",
  link: "https://hal.science/hal-05648786",
};

export const education = {
  title: "Master Systèmes embarqués (traitement du signal, des images et du son)",
  org: "Université Clermont Auvergne, 2024 à 2026",
  note: "Mention Bien, 2e sur 9 étudiants.",
  certs: ["ISTQB niveau Fondation (2023)", "Scrum Fundamentals Certified (2023)"],
};
