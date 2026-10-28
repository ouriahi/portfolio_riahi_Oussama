export const content = {
  fr: {
    nav: {
      about: "À propos",
      projects: "Projets",
      demo: "Démo Sobel",
      github: "Code",
      experience: "Expérience",
      skills: "Compétences",
      articles: "Articles",
      contact: "Contact",
    },
    hero: {
      seeProjects: "Voir mes projets",
      downloadCv: "Télécharger mon CV (PDF)",
      writeMe: "M'écrire",
    },
    sections: {
      about: "À propos",
      projects: "Projets & Architectures",
      demo: "Démo Interactive",
      github: "Code Public (GitHub)",
      experience: "Expérience",
      skills: "Compétences",
      certs: "Certifications",
      languages: "Langues",
      formation: "Formation",
      publication: "Publication",
      articles: "Articles Techniques",
      testimonials: "Recommandations",
      contact: "Contact",
    },
    ui: {
      projectDetails: "Résumé rapide",
      caseStudyBtn: "Étude de cas complète",
      readArticleBtn: "Lire l'article",
      closeModal: "Fermer",
      goalLabel: "Objectif",
      doneLabel: "Réalisations",
      resultsLabel: "Résultats",
      readHal: "Lire l'article sur HAL",
      driverLicense: "Permis B",
      caseProblem: "1. Contexte & Problématique",
      caseArch: "2. Architecture & Choix Techniques",
      caseChallenges: "3. Défis Rencontrés & Résolution",
      caseResults: "4. Résultats & Validation",
      demoTitle: "Simulateur d'Autofocus Industriel par Filtre de Sobel",
      demoDesc: "Lors de mon stage chez OPTO France, j'ai implémenté un algorithme d'autofocus temps réel basé sur l'opérateur de Sobel. Plus l'image est nette, plus les gradients de contours sont élevés. Testez l'algorithme ci-dessous en faisant varier le flou optique simulé ou en chargeant votre propre image :",
      demoBlurLabel: "Défocalisation simulée (flou optique) :",
      demoScoreLabel: "Indice de netteté (énergie de Sobel) :",
      demoStatusSharp: "FOCUS OPTIMAL ATTEINT",
      demoStatusBlur: "RECHERCHE DE FOCUS (DÉFOCALISÉ)",
      demoUpload: "Tester avec une image",
      demoReset: "Mire industrielle par défaut",
      demoOriginal: "Flux Caméra Simulé",
      demoSobel: "Sortie Filtre de Sobel (Gradients)",
    },
    profile: {
      name: "Oussama Riahi",
      title: "Ingénieur Systèmes Embarqués & Edge AI",
      intro:
        "Je développe en C/C++ pour Linux embarqué, de l'interfaçage matériel (RS-232, CAN, I2C) à la vision industrielle et à l'IA sur cible contrainte. Avant mon Master, plus de 4 ans en production automobile m'ont appris à diagnostiquer, documenter et livrer sous forte contrainte.",
      location: "Clermont-Ferrand, France",
      availability: "Disponible immédiatement",
      email: "riahi_oussema@outlook.fr",
      linkedin: "https://www.linkedin.com/in/oussama-riahi/",
      github: "https://github.com/ouriahi",
      cvUrl: "/data/cvOussamaRiahi-2.pdf",
      photo: "/images/photo-oussama.jpg", // Optionnel : affiche un avatar pro si absent
    },
    about: {
      headline: "De la ligne de production automobile à l'architecture de systèmes embarqués",
      paragraphs: [
        "Mon parcours n'est pas linéaire, et c'est ma plus grande force sur un banc d'intégration. J'ai commencé sur le terrain, dans l'industrie électronique et automobile (Amphenol, Marquardt), où j'ai dirigé des équipes techniques et maintenu des équipements critiques à forts volumes pendant plus de 4 ans.",
        "Sur une ligne de production, un bug matériel ou logiciel coûte immédiatement des milliers d'euros par heure d'arrêt. C'est là que j'ai forgé ma méthode : isoler les pannes à la racine (oscilloscope, trames séries, logs noyau), documenter rigoureusement et concevoir des systèmes robustes.",
        "En 2023, j'ai repris mes études en France à l'Université Clermont Auvergne (1er de promotion en Licence, 2e en Master Systèmes Embarqués). Aujourd'hui, je combine cette pragmatique industrielle avec une maîtrise académique et R&D pointue en C/C++ moderne, Linux embarqué, FPGA et Edge AI."
      ],
      highlights: [
        { value: "4+ ans", label: "Expérience industrielle terrain" },
        { value: "Top 2", label: "Classement Master & Major Licence" },
        { value: "1", label: "Publication scientifique (HAL)" },
      ]
    },
    pinsLeft: ["C / C++", "Linux embarqué", "Yocto / Buildroot", "CMake"],
    pinsRight: ["CAN", "I2C", "UART", "VHDL"],
    projects: [
      {
        id: "opto-microscope",
        title: "Pilotage d'un microscope industriel sur Raspberry Pi",
        context: "Stage M1, OPTO France (vision industrielle), équipe de 12 ingénieurs",
        summary: "Un serveur logiciel embarqué C++/Qt qui pilote un microscope motorisé et transmet le flux vidéo par un seul câble Gigabit Ethernet.",
        metrics: [
          "1 seul câble RJ45 (GigE Vision + contrôle)",
          "Autofocus Sobel temps réel (< 40 ms/frame)",
          "Auto-détection RS-232 au boot (< 1.5 s)",
        ],
        diagramType: "microscope",
        image: null, // ex: "/images/opto-qt.png"
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
        link: null,
        caseStudy: {
          problem: "Les microscopes industriels nécessitaient jusqu'alors plusieurs câbles (USB/série pour la motorisation XYZ, alimentation et contrôle LED séparés, câble caméra) reliés à un PC hôte lourd. L'objectif était d'embarquer toute l'intelligence sur un Raspberry Pi intégré au microscope pour exposer l'ensemble (flux vidéo + actuateurs) comme une caméra standard GigE Vision via un unique câble RJ45.",
          architecture: "Architecture modulaire en C++17/Qt sous Linux embarqué, compilée en croisé via CMake. Un thread dédié gère le serveur GenICam/GigE Vision (exposition des registres XML virtuels pour les moteurs et LEDs), tandis qu'un gestionnaire de périphériques asynchrone interroge et pilote les contrôleurs matériels en RS-232.",
          challenges: "1) L'ordre d'attribution des ports `/dev/ttyUSB*` sous Linux n'étant pas déterministe au démarrage, j'ai développé une machine à états de handshake automatique identifiant chaque contrôleur par sa signature firmware. 2) Pour l'autofocus, il fallait synchroniser le calcul du gradient de Sobel sur les frames avec les pas moteurs Z sans bloquer le flux réseau GigE.",
          results: "Réduction du câblage externe à un seul câble Gigabit Ethernet. Interopérabilité validée à 100 % avec les logiciels standards du marché (Pleora eBUS Player, National Instruments NI MAX et Vision Builder). Prototype validé par la direction pour la nouvelle gamme."
        }
      },
      {
        id: "neupis-distributed-ai",
        title: "NeuPIS : apprentissage distribué collaboratif sur Edge",
        context: "Stage M2, Institut Pascal (UCA), équipe de 10 chercheurs",
        summary: "Une architecture d'IA distribuée par découpage neuronal interactif qui réduit drastiquement les échanges réseau et la charge de calcul sur les nœuds embarqués.",
        metrics: [
          "Réduction significative du volume réseau vs FedAvg",
          "Empreinte mémoire allégée sur nœuds Edge",
          "Article publié sur HAL (hal-05648786)",
        ],
        diagramType: "neupis",
        image: null,
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
        caseStudy: {
          problem: "L'apprentissage fédéré classique (FedAvg) impose aux équipements embarqués (Edge) d'entraîner un modèle complet localement et de transmettre périodiquement l'intégralité des poids sur le réseau, saturant la bande passante et la RAM des cibles contraintes.",
          architecture: "Conception de NeuPIS (Neural Partitioned Interactive Splitting) : le réseau de neurones est partitionné dynamiquement entre les nœuds clients et les nœuds coordinateurs. Seules les activations intermédiaires compressées et les gradients nécessaires transitent.",
          challenges: "Équilibrer le point de découpe (split layer) entre le coût de calcul local (CPU/GPU embarqué) et le coût de transmission réseau tout en garantissant la convergence mathématique face à des données non-IID (hétérogènes).",
          results: "Validation expérimentale complète démontrant une baisse majeure de la charge mémoire sur les nœuds locaux et une convergence préservée. Travaux formalisés et publiés dans l'archive ouverte HAL (hal-05648786)."
        }
      },
      {
        id: "fpga-dsp",
        title: "Accélération matérielle et traitement du signal sur FPGA",
        context: "Projet de Master",
        summary: "Architectures numériques pipelinées en VHDL pour le filtrage numérique et le traitement du signal à haute fréquence.",
        metrics: [
          "Pipeline synchrone 1 échantillon / cycle",
          "Fréquence max > 100 MHz (Synthèse RTL)",
          "Latence déterministe garantie au cycle près",
        ],
        diagramType: "fpga",
        image: null,
        done: [
          "Conception d'architectures numériques complexes en VHDL pour le DSP et le filtrage.",
          "Flot de conception complet (RTL, bancs de test, chronogrammes ModelSim, synthèse Vivado/Quartus) pour des données parallèles à haute vitesse.",
        ],
        stack: ["VHDL", "Xilinx Vivado", "Intel Quartus", "ModelSim", "DSP"],
        link: null,
        caseStudy: {
          problem: "Le traitement logiciel sur microprocesseur généraliste montre ses limites dès lors qu'il faut filtrer des flux de données capteurs à très haute fréquence avec une gigue (jitter) nulle.",
          architecture: "Implémentation matérielle en VHDL d'une chaîne de filtrage numérique (FIR / Sobel matériel) utilisant l'arithmétique en virgule fixe (Fixed-Point) et des registres à décalage pipelinés.",
          challenges: "Prévenir les dépassements de capacité (overflow) lors des accumulations MAC (Multiply-Accumulate) et respecter les contraintes de timing (Setup/Hold) lors du placement-routage sur FPGA.",
          results: "Validation complète par simulation comportementale et post-synthèse sous ModelSim. Architecture prête pour l'intégration en IP matérielle SoC."
        }
      },
      {
        id: "edge-cv",
        title: "Vision par ordinateur et Edge AI temps réel (PaperPiano & Gestes)",
        context: "Projets de Master (Raspberry Pi 4 & 5 / NVIDIA Jetson)",
        summary: "Interfaces temps réel par vision par ordinateur et modèles TFLite/PyTorch optimisés pour tourner sans latence perceptible sur cibles ARM.",
        metrics: [
          "Inférence temps réel ~30 FPS sur Raspberry Pi 5",
          "Quantification INT8 / FP16 pour réduction mémoire",
          "Latence bout-en-bout < 35 ms",
        ],
        diagramType: null,
        image: null,
        done: [
          "Développement de PaperPiano sur Raspberry Pi 5 (OpenCV, MediaPipe) : détection des mains et déclenchement audio temps réel.",
          "Système d'assistance gestuelle par IA (TensorFlow Lite) sur Raspberry Pi 4 pour musiciens malvoyants.",
          "Optimisation de modèles et pipeline multithreadé (capture caméra découplée de l'inférence).",
        ],
        stack: ["OpenCV", "Python", "C++", "TensorFlow Lite", "MediaPipe", "Raspberry Pi 5", "NVIDIA Jetson"],
        link: null,
      },
      {
        id: "low-level-sensors",
        title: "Acquisition de capteurs bas niveau & Commande CNC",
        context: "Projet de Master et réalisations personnelles",
        summary: "Développement C/C++ bas niveau pour l'acquisition de capteurs (I2C, UART) sous Linux et conception d'une machine CNC 3 axes.",
        metrics: [
          "Drivers I2C / UART en C/C++ sous Linux",
          "Conception complète CNC 3 axes (Fusion 360 + GRBL)",
        ],
        diagramType: null,
        image: null,
        done: [
          "Acquisition directe de données capteurs, filtrage de bruit et validation sur cible Linux embarqué.",
          "Modélisation 3D (Fusion 360), câblage électronique de puissance et intégration firmware temps réel pour une CNC 3 axes.",
        ],
        stack: ["C/C++", "Linux", "I2C", "UART", "Microcontrôleurs", "Arduino / STM32"],
        link: null,
      },
    ],
    githubRepos: [
      {
        name: "modern-cpp-rs232-driver",
        desc: "Module générique C++17 de communication série RS-232/UART sous Linux (termios) avec auto-détection matériel, gestion de timeouts et tests unitaires.",
        tags: ["C++17", "Linux", "POSIX Termios", "CMake"],
        url: "https://github.com/ouriahi",
      },
      {
        name: "sobel-autofocus-gtest",
        desc: "Implémentation C++ de l'opérateur de Sobel pour le calcul de netteté d'image (autofocus industriel), validée par une suite de tests GoogleTest.",
        tags: ["C++", "OpenCV", "GoogleTest", "CMake"],
        url: "https://github.com/ouriahi",
      },
      {
        name: "rpi-qt-cmake-toolchain",
        desc: "Modèle de projet et fichier Toolchain CMake pour cross-compiler proprement une application C++/Qt depuis Ubuntu vers Raspberry Pi (ARM64).",
        tags: ["CMake", "Qt", "Cross-Compilation", "Raspberry Pi"],
        url: "https://github.com/ouriahi",
      },
      {
        name: "neupis-distributed-learning",
        desc: "Code source et scripts d'expérimentation associés à la publication scientifique NeuPIS (apprentissage distribué collaboratif).",
        tags: ["Python", "PyTorch", "Edge AI", "HAL-05648786"],
        url: "https://hal.science/hal-05648786v1",
      },
    ],
    experience: [
      {
        period: "03/2026 à 09/2026",
        role: "Ingénieur recherche IA et Edge Computing (stage M2)",
        org: "Institut Pascal (UMR 6602 / UCA), Clermont-Ferrand",
        meta: "Recherche en IA distribuée, équipe de 10 chercheurs",
        kpi: "1er auteur de l'article NeuPIS publié sur HAL",
        points: [
          "Conception d'architectures logicielles distribuées en Python et C/C++ sous contraintes matérielles et réseau.",
          "Développement de l'architecture NeuPIS (partitionnement neuronal interactif) et publication scientifique.",
        ],
      },
      {
        period: "04/2025 à 08/2025",
        role: "Développeur logiciel embarqué C++/Qt (stage M1)",
        org: "OPTO France, Montélimar",
        meta: "Vision industrielle, équipe de 12 ingénieurs",
        kpi: "Prototype 100 % validé sur eBUS Player & NI MAX",
        points: [
          "Serveur embarqué GigE Vision / GenICam pour un microscope industriel sur cible Raspberry Pi.",
          "Pilotage bas niveau RS-232 des moteurs XYZ et de l'éclairage LED, autofocus temps réel par filtre de Sobel.",
        ],
      },
      {
        period: "01/2023 à 08/2023",
        role: "Responsable maintenance, secteur automobile",
        org: "Marquardt, Tunis",
        meta: "Management d'une équipe de 4 techniciens",
        kpi: "Hausse de la disponibilité des lignes et réduction du MTTR",
        points: [
          "Pilotage de la maintenance préventive et curative, suivi rigoureux des KPI de disponibilité machine (TRS/OEE).",
          "Chantiers d'amélioration continue (Kaizen) pour éliminer les pannes récurrentes sur lignes automatisées.",
          "Démarrage et validation de nouveaux équipements : tests matériels, débogage bas niveau sur carte.",
        ],
      },
      {
        period: "02/2019 à 11/2022",
        role: "Chef d'équipe technique, secteur automobile",
        org: "Amphenol (site Lectric), El Fahs, Tunisie",
        meta: "Production à forts volumes, équipe technique de 6 personnes",
        kpi: "Déploiement de systèmes de contrôle qualité par vision",
        points: [
          "Validation, installation et débogage d'équipements industriels et bancs de contrôle directement sur les lignes.",
          "Diagnostic rapide des pannes électromécaniques et logicielles pour minimiser les temps d'arrêt.",
          "Rédaction de la documentation technique pour la traçabilité et la formation des opérateurs.",
        ],
      },
    ],
    skills: [
      { group: "Développement bas niveau", items: ["C", "C++ (14/17)", "Linux embarqué", "Temps réel", "Multithreading", "Qt", "Python"] },
      { group: "Build et intégration", items: ["CMake", "Cross-compilation", "Yocto / Buildroot", "Git / GitLab CI", "Docker", "CI/CD"] },
      { group: "Tests et qualité", items: ["GoogleTest", "Débogage sur carte", "Analyse de performances", "Tests de robustesse", "ISTQB Fondation"] },
      { group: "Matériel et protocoles", items: ["CAN", "LIN", "SPI", "I2C", "UART / RS-232", "GigE Vision", "GenICam", "Raspberry Pi 4/5", "STM32", "ESP32", "NVIDIA Jetson"] },
      { group: "FPGA et signal", items: ["VHDL", "SystemC", "Xilinx Vivado", "Intel Quartus", "ModelSim", "SoC", "RISC-V", "Matlab / Simulink"] },
      { group: "Vision et IA embarquée", items: ["OpenCV", "PyTorch", "TensorFlow Lite", "CUDA", "IA fédérée & distribuée"] },
      { group: "Méthodes & Industrie", items: ["Agile / Scrum (certifié)", "Encadrement d'équipe (4 à 6 tech.)", "Amélioration continue", "Documentation technique"] },
    ],
    publication: {
      title: "NeuPIS : Neural Partitioned Interactive Splitting for Collaborative Distributed Learning",
      year: "2026",
      venue: "Archive ouverte HAL (hal-05648786) — Institut Pascal (UMR 6602)",
      link: "https://hal.science/hal-05648786v1",
    },
    articles: [
      {
        id: "cross-compile-qt-rpi",
        date: "Guide Technique · CMake & Linux Embarqué",
        title: "Cross-compiler une application C++/Qt pour Raspberry Pi avec CMake sans douleur",
        summary: "Comment structurer un fichier Toolchain CMake et synchroniser le sysroot d'un Raspberry Pi pour compiler en quelques secondes depuis un poste Linux Ubuntu.",
        readTime: "4 min de lecture",
        body: [
          "Compiler directement une application C++/Qt lourde sur un Raspberry Pi peut prendre de longues minutes et user prématurément la carte SD. En environnement industriel (comme lors de mon stage chez OPTO France), la cross-compilation depuis une station de travail Linux x86_64 vers la cible ARM est indispensable.",
          "La première étape consiste à constituer un 'sysroot' propre : on monte ou on synchronise via rsync les répertoires `/lib`, `/usr/include` et `/usr/lib` du Raspberry Pi vers le PC hôte, puis on corrige les liens symboliques relatifs avec un script `sysroot-relativelinks.py`.",
          "Ensuite, on isole toute la configuration matérielle dans un fichier `toolchain-rpi.cmake` (définition de `CMAKE_SYSTEM_NAME Linux`, `CMAKE_SYSTEM_PROCESSOR aarch64`, `CMAKE_SYSROOT` et des compilateurs `aarch64-linux-gnu-g++`). Ainsi, le fichier `CMakeLists.txt` principal reste 100 % agnostique de la cible : on peut compiler et exécuter les tests unitaires GoogleTest sur le PC en natif, puis générer le binaire ARM en une seule commande."
        ]
      },
      {
        id: "sobel-autofocus-embedded",
        date: "Vision Industrielle · Algorithme & C++",
        title: "Implémenter un autofocus passif temps réel par filtre de Sobel en C++",
        summary: "Pourquoi l'opérateur de gradient de Sobel est idéal pour mesurer la netteté optique d'un microscope industriel et comment l'optimiser sur CPU ARM.",
        readTime: "3 min de lecture",
        body: [
          "En microscopie industrielle, un système d'autofocus passif ne dispose pas de télémètre laser : il doit déduire la mise au point uniquement à partir du flux vidéo de la caméra GigE Vision.",
          "Principe physique : une image défocalisée agit comme un filtre passe-bas qui étale les transitions lumineuses. À l'inverse, lorsque l'objectif atteint le plan focal exact, les micro-structures de la pièce présentent des transitions franches (hautes fréquences spatiales).",
          "En appliquant les noyaux de convolution 3x3 de Sobel (horizontal Gx et vertical Gy) sur une région d'intérêt (ROI) au centre du capteur, on calcule l'énergie moyenne du gradient : S = Moyenne(Gx² + Gy²). Couplé à un algorithme de recherche de pic (Hill-Climbing) qui pilote l'axe motorisé Z en RS-232, ce score permet de verrouiller la netteté maximale en quelques dizaines de millisecondes."
        ]
      }
    ],
    testimonials: [
      {
        quote: "Projet de serveur embarqué GigE Vision mené avec une grande autonomie : du dialogue matériel bas niveau RS-232 jusqu'à la validation complète du prototype devant la direction.",
        author: "Retours d'évaluation Stage M1 — OPTO France",
        role: "Équipe R&D Vision Industrielle, Montélimar",
      },
      {
        quote: "Travaux de recherche rigoureux sur l'apprentissage distribué sous contraintes matérielles, ayant abouti à la conception de l'architecture NeuPIS et à une publication scientifique sur HAL.",
        author: "Travaux de recherche Stage M2 — Institut Pascal (UCA)",
        role: "Axe ISPR / Systèmes Embarqués & IA, Clermont-Ferrand",
      }
    ],
    education: [
      { year: "2024 à 2026", title: "Master Systèmes embarqués (traitement du signal, des images et du son)", org: "Université Clermont Auvergne", note: "Mention Bien, 2e sur 9. Électronique numérique, FPGA, Linux et C/C++." },
      { year: "2023 à 2024", title: "Licence Sciences pour l'ingénieur, parcours EEA", org: "Université Clermont Auvergne", note: "Mention Bien, Major / 2e sur 53." },
      { year: "2020 à 2023", title: "Licence en Génie électrique", org: "ISET de Rades, Tunisie", note: "Mention Très Bien, Major de promotion (1er sur 40)." },
      { year: "2016 à 2018", title: "BTS Automatisme et informatique industrielle", org: "Centre sectoriel de formation en électronique, Tunisie", note: "Mention Très Bien." },
    ],
    certs: ["ISTQB niveau Fondation (08/2023)", "Scrum Fundamentals Certified (02/2023)"],
    languages: "Arabe (langue maternelle), français (courant), anglais (B2, professionnel).",
  },

  en: {
    nav: {
      about: "About",
      projects: "Projects",
      demo: "Sobel Demo",
      github: "Code",
      experience: "Experience",
      skills: "Skills",
      articles: "Articles",
      contact: "Contact",
    },
    hero: {
      seeProjects: "View my projects",
      downloadCv: "Download CV (PDF)",
      writeMe: "Contact me",
    },
    sections: {
      about: "About Me",
      projects: "Projects & Architectures",
      demo: "Interactive Demo",
      github: "Public Code (GitHub)",
      experience: "Experience",
      skills: "Skills",
      certs: "Certifications",
      languages: "Languages",
      formation: "Education",
      publication: "Publication",
      articles: "Technical Articles",
      testimonials: "Endorsements",
      contact: "Contact",
    },
    ui: {
      projectDetails: "Quick summary",
      caseStudyBtn: "Full Case Study",
      readArticleBtn: "Read article",
      closeModal: "Close",
      goalLabel: "Objective",
      doneLabel: "Achievements",
      resultsLabel: "Results",
      readHal: "Read paper on HAL",
      driverLicense: "Driver's license (Permis B)",
      caseProblem: "1. Context & Problem Statement",
      caseArch: "2. Architecture & Technical Choices",
      caseChallenges: "3. Key Challenges & Solutions",
      caseResults: "4. Results & Validation",
      demoTitle: "Industrial Autofocus Simulator via Sobel Filter",
      demoDesc: "During my internship at OPTO France, I implemented a real-time autofocus algorithm based on the Sobel operator. The sharper the image, the stronger the edge gradients. Test the algorithm below by adjusting the simulated optical defocus or uploading your own image:",
      demoBlurLabel: "Simulated optical defocus (blur):",
      demoScoreLabel: "Sharpness Score (Sobel Energy):",
      demoStatusSharp: "OPTIMAL FOCUS LOCKED",
      demoStatusBlur: "SEARCHING FOCUS (DEFOCUSED)",
      demoUpload: "Test with your image",
      demoReset: "Default industrial target",
      demoOriginal: "Simulated Camera Feed",
      demoSobel: "Sobel Filter Output (Gradients)",
    },
    profile: {
      name: "Oussama Riahi",
      title: "Embedded Systems & Edge AI Engineer",
      intro:
        "I develop in C/C++ for embedded Linux, from hardware interfacing (RS-232, CAN, I2C) to industrial vision and AI on constrained targets. Before my Master's degree, over 4 years in automotive manufacturing taught me how to diagnose, document, and deliver under tight constraints.",
      location: "Clermont-Ferrand, France",
      availability: "Available immediately",
      email: "riahi_oussema@outlook.fr",
      linkedin: "https://www.linkedin.com/in/oussama-riahi/",
      github: "https://github.com/ouriahi",
      cvUrl: "/data/cvOussamaRiahi-2.pdf",
      photo: "/images/photo-oussama.jpg",
    },
    about: {
      headline: "From high-volume automotive production lines to embedded systems architecture",
      paragraphs: [
        "My career path combines hands-on industrial pragmatism with advanced academic research. I started in the field in the automotive electronics industry (Amphenol, Marquardt), leading technical teams and maintaining high-volume production equipment for over 4 years.",
        "On a manufacturing line, a hardware or software failure immediately costs thousands of euros per hour of downtime. That environment shaped my engineering mindset: root-cause hardware/software debugging, clear documentation, and rock-solid reliability.",
        "In 2023, I resumed my academic studies in France at Université Clermont Auvergne (graduating top of my Bachelor's class and 2nd in my Embedded Systems Master's). Today, I bridge low-level C/C++ embedded development, Linux, FPGA, and distributed Edge AI."
      ],
      highlights: [
        { value: "4+ yrs", label: "Hands-on industrial experience" },
        { value: "Top 2", label: "Master's rank & B.Sc. Valedictorian" },
        { value: "1", label: "Published research paper (HAL)" },
      ]
    },
    pinsLeft: ["C / C++", "Embedded Linux", "Yocto / Buildroot", "CMake"],
    pinsRight: ["CAN", "I2C", "UART", "VHDL"],
    projects: [
      {
        id: "opto-microscope",
        title: "Industrial Microscope Control on Raspberry Pi",
        context: "M1 Internship, OPTO France (industrial vision), team of 12 engineers",
        summary: "An embedded C++/Qt software server controlling a motorized microscope and streaming video over a single Gigabit Ethernet cable.",
        metrics: [
          "1 single RJ45 cable (GigE Vision + control)",
          "Real-time Sobel autofocus (< 40 ms/frame)",
          "Auto RS-232 hardware detection (< 1.5 s)",
        ],
        diagramType: "microscope",
        image: null,
        goal: "Integrate a complete embedded system into an industrial microscope to centralize control and video streaming, compliant with GigE Vision and GenICam standards.",
        done: [
          "C++/Qt application with CMake cross-compiled for a Raspberry Pi target.",
          "Low-level RS-232 communication with two controllers: XYZ motorization and LED lighting.",
          "Automatic controller detection at system boot.",
          "Real-time hardware/software autofocus based on a Sobel filter.",
          "Scrum methodology with 3-week sprints.",
        ],
        results: [
          "Functional prototype delivered and presented to management.",
          "Real-time video streaming and control validated using industry tools (eBUS Player, NI MAX, Vision Builder).",
          "Centralized motor and LED control within a single software interface.",
        ],
        stack: ["C++", "Qt", "CMake", "Embedded Linux", "Raspberry Pi", "GigE Vision", "GenICam", "RS-232", "Sobel Filter", "GoogleTest"],
        link: null,
        caseStudy: {
          problem: "Industrial microscopes previously required multiple cables (USB/serial for XYZ stages, separate LED controller, camera cable) connected to an external PC. The goal was to embed all intelligence onto a Raspberry Pi inside the microscope, exposing both video streaming and hardware actuators as a unified GigE Vision device over a single RJ45 cable.",
          architecture: "Modular C++17/Qt architecture running on Embedded Linux, cross-compiled via CMake. A dedicated server exposes GenICam virtual registers mapped to asynchronous RS-232 serial drivers controlling XYZ stepper motors and LED lighting.",
          challenges: "1) Since Linux `/dev/ttyUSB*` enumeration order is non-deterministic at boot, I built an automated handshake state machine querying firmware signatures to bind each controller reliably. 2) Synchronizing real-time Sobel gradient evaluation with Z-axis stepper movements without dropping GigE Vision frames.",
          results: "External wiring reduced to a single Gigabit Ethernet cable. 100% interoperability validated with industry-standard clients (Pleora eBUS Player, NI MAX, Vision Builder). Prototype approved by executive management."
        }
      },
      {
        id: "neupis-distributed-ai",
        title: "NeuPIS: Collaborative Distributed Learning on Edge",
        context: "M2 Internship, Institut Pascal (UCA), team of 10 researchers",
        summary: "A distributed AI architecture using interactive neural splitting to drastically reduce network traffic and compute load on edge nodes.",
        metrics: [
          "Significant network overhead reduction vs FedAvg",
          "Reduced RAM footprint on constrained Edge nodes",
          "Peer-reviewed paper on HAL (hal-05648786)",
        ],
        diagramType: "neupis",
        image: null,
        goal: "Overcome AI data centralization bottlenecks by designing efficient decentralized architectures that optimize network communications and resource usage across nodes.",
        done: [
          "Research, design, and development of federated and distributed AI architectures.",
          "Bottleneck resolution: network payload, latency, data privacy, edge compute load.",
          "Implementation of distribution algorithms and comprehensive performance evaluation.",
        ],
        results: [
          "NeuPIS (Neural Partitioned Interactive Splitting) architecture designed, implemented, and validated.",
          "Scientific paper published on HAL.",
        ],
        stack: ["Python", "PyTorch", "C/C++", "Federated Learning", "Distributed Systems", "Performance Analysis"],
        link: "https://hal.science/hal-05648786v1",
        linkLabel: "Read paper on HAL",
        caseStudy: {
          problem: "Standard Federated Learning (FedAvg) requires edge devices to train full neural networks locally and transmit complete model weights over the network, causing memory overflows and bandwidth bottlenecks on embedded targets.",
          architecture: "Designed NeuPIS (Neural Partitioned Interactive Splitting): neural networks are dynamically partitioned across client edge nodes and coordinator nodes, exchanging compact intermediate activations and gradients.",
          challenges: "Balancing the split point between local embedded compute capacity and network latency while maintaining convergence on heterogeneous (non-IID) datasets.",
          results: "Demonstrated substantial memory and bandwidth savings on local nodes while preserving accuracy. Published on the HAL open archive (hal-05648786)."
        }
      },
      {
        id: "fpga-dsp",
        title: "Hardware Acceleration and Signal Processing on FPGA",
        context: "Master's Project",
        summary: "Pipelined VHDL digital architectures for high-speed filtering and digital signal processing (DSP).",
        metrics: [
          "Synchronous pipeline: 1 sample / clock cycle",
          "Max frequency > 100 MHz (RTL Synthesis)",
          "Cycle-accurate deterministic latency",
        ],
        diagramType: "fpga",
        image: null,
        done: [
          "Design of complex digital VHDL architectures for DSP and filtering.",
          "End-to-end design flow (RTL, testbenches, ModelSim timing waveforms, Vivado/Quartus synthesis) for high-speed parallel data.",
        ],
        stack: ["VHDL", "Xilinx Vivado", "Intel Quartus", "ModelSim", "DSP"],
        link: null,
        caseStudy: {
          problem: "General-purpose CPUs struggle to guarantee zero-jitter, high-throughput signal filtering when processing high-frequency sensor streams.",
          architecture: "Hardware VHDL implementation of a pipelined digital filtering chain using fixed-point arithmetic and shift registers.",
          challenges: "Preventing arithmetic overflow in Multiply-Accumulate (MAC) stages while meeting strict setup/hold timing constraints during FPGA place-and-route.",
          results: "Verified via behavioral and post-synthesis timing simulations in ModelSim, achieving 1 sample per clock cycle throughput."
        }
      },
      {
        id: "edge-cv",
        title: "Real-Time Computer Vision and Edge AI (PaperPiano & Gestures)",
        context: "Master's Projects (Raspberry Pi 4 & 5 / NVIDIA Jetson)",
        summary: "Real-time computer vision interfaces and quantized TFLite/PyTorch models optimized for low-latency execution on ARM targets.",
        metrics: [
          "Real-time inference ~30 FPS on Raspberry Pi 5",
          "INT8 / FP16 quantization for memory efficiency",
          "End-to-end latency < 35 ms",
        ],
        diagramType: null,
        image: null,
        done: [
          "Developed PaperPiano on Raspberry Pi 5 (OpenCV, MediaPipe) for real-time hand tracking and low-latency audio synthesis.",
          "AI-assisted gesture recognition system (TensorFlow Lite) on Raspberry Pi 4 for visually impaired musicians.",
          "Multithreaded camera capture and inference pipeline optimization.",
        ],
        stack: ["OpenCV", "Python", "C++", "TensorFlow Lite", "MediaPipe", "Raspberry Pi 5", "NVIDIA Jetson"],
        link: null,
      },
      {
        id: "low-level-sensors",
        title: "Low-Level Sensor Acquisition & 3-Axis CNC Controller",
        context: "Master's and Personal Engineering Projects",
        summary: "Embedded C/C++ software for Linux sensor acquisition (I2C, UART) and full design of a 3-axis CNC machine.",
        metrics: [
          "Linux C/C++ I2C & UART drivers",
          "Full 3-axis CNC build (Fusion 360 + GRBL)",
        ],
        diagramType: null,
        image: null,
        done: [
          "Direct sensor data acquisition, noise filtering, and functional validation on Linux targets.",
          "3D CAD modeling (Fusion 360), power electronics wiring, and real-time stepper control for a 3-axis CNC.",
        ],
        stack: ["C/C++", "Linux", "I2C", "UART", "Microcontrollers", "Arduino / STM32"],
        link: null,
      },
    ],
    githubRepos: [
      {
        name: "modern-cpp-rs232-driver",
        desc: "Generic C++17 RS-232/UART serial communication module for Linux (POSIX termios) featuring hardware auto-discovery, timeouts, and unit tests.",
        tags: ["C++17", "Linux", "POSIX Termios", "CMake"],
        url: "https://github.com/ouriahi",
      },
      {
        name: "sobel-autofocus-gtest",
        desc: "C++ implementation of the Sobel operator for industrial autofocus sharpness scoring, validated with GoogleTest unit tests.",
        tags: ["C++", "OpenCV", "GoogleTest", "CMake"],
        url: "https://github.com/ouriahi",
      },
      {
        name: "rpi-qt-cmake-toolchain",
        desc: "Clean CMake Toolchain template and sysroot sync scripts to cross-compile C++/Qt applications from Ubuntu to Raspberry Pi (ARM64).",
        tags: ["CMake", "Qt", "Cross-Compilation", "Raspberry Pi"],
        url: "https://github.com/ouriahi",
      },
      {
        name: "neupis-distributed-learning",
        desc: "Experiments and architecture implementation accompanying the NeuPIS research paper on collaborative distributed learning.",
        tags: ["Python", "PyTorch", "Edge AI", "HAL-05648786"],
        url: "https://hal.science/hal-05648786v1",
      },
    ],
    experience: [
      {
        period: "03/2026 to 09/2026",
        role: "AI & Edge Computing Research Engineer Intern (M2)",
        org: "Institut Pascal (UMR 6602 / UCA), Clermont-Ferrand, France",
        meta: "AI Research, team of 10 researchers",
        kpi: "First author of the NeuPIS paper published on HAL",
        points: [
          "Distributed software architectures in Python and C/C++ under hardware and network constraints.",
          "Design of the NeuPIS architecture and publication of a peer-reviewed scientific paper.",
        ],
      },
      {
        period: "04/2025 to 08/2025",
        role: "Embedded Software Engineer Intern C++/Qt (M1)",
        org: "OPTO France, Montélimar, France",
        meta: "Industrial Vision, team of 12 engineers",
        kpi: "Prototype 100% validated on eBUS Player & NI MAX",
        points: [
          "GigE Vision / GenICam embedded server for an industrial microscope on Raspberry Pi.",
          "RS-232 serial control for XYZ motors and lighting, real-time Sobel autofocus.",
        ],
      },
      {
        period: "01/2023 to 08/2023",
        role: "Maintenance Manager, Automotive Sector",
        org: "Marquardt, Tunis, Tunisia",
        meta: "Managed a team of 4 maintenance technicians",
        kpi: "Increased line availability and reduced MTTR",
        points: [
          "Preventive and corrective maintenance oversight, tracking line availability KPIs (OEE).",
          "Continuous improvement initiatives to eliminate recurring machinery breakdowns.",
          "New equipment commissioning: hardware testing and low-level board debugging.",
        ],
      },
      {
        period: "02/2019 to 11/2022",
        role: "Technical Shift Leader, Automotive Sector",
        org: "Amphenol (Lectric plant), El Fahs, Tunisia",
        meta: "High-volume manufacturing, technical team of 6 staff",
        kpi: "Deployed computer vision quality control systems",
        points: [
          "Validation, installation, and debugging of industrial equipment directly on production lines.",
          "Rapid fault diagnosis to minimize production downtime.",
          "Technical documentation for quality traceability and operator training.",
        ],
      },
    ],
    skills: [
      { group: "Low-Level Development", items: ["C", "C++ (14/17)", "Embedded Linux", "Real-Time Systems", "Multithreading", "Qt", "Python"] },
      { group: "Build & Integration", items: ["CMake", "Cross-Compilation", "Yocto / Buildroot", "Git / GitLab CI", "Docker", "CI/CD"] },
      { group: "Testing & Quality", items: ["GoogleTest", "On-board Debugging", "Performance Analysis", "Robustness Testing", "ISTQB Foundation"] },
      { group: "Hardware & Protocols", items: ["CAN", "LIN", "SPI", "I2C", "UART / RS-232", "GigE Vision", "GenICam", "Raspberry Pi 4/5", "STM32", "ESP32", "NVIDIA Jetson"] },
      { group: "FPGA & Signal Processing", items: ["VHDL", "SystemC", "Xilinx Vivado", "Intel Quartus", "ModelSim", "SoC", "RISC-V", "Matlab / Simulink"] },
      { group: "Vision & Edge AI", items: ["OpenCV", "PyTorch", "TensorFlow Lite", "CUDA", "Federated & Distributed AI"] },
      { group: "Methodologies", items: ["Agile / Scrum (certified)", "Team Leadership (4-6 techs)", "Continuous Improvement", "Technical Documentation"] },
    ],
    publication: {
      title: "NeuPIS: Neural Partitioned Interactive Splitting for Collaborative Distributed Learning",
      year: "2026",
      venue: "HAL Open Archive (hal-05648786) — Institut Pascal (UMR 6602)",
      link: "https://hal.science/hal-05648786v1",
    },
    articles: [
      {
        id: "cross-compile-qt-rpi",
        date: "Technical Guide · CMake & Embedded Linux",
        title: "Cross-Compiling a C++/Qt Application for Raspberry Pi with CMake",
        summary: "How to structure a clean CMake Toolchain file and synchronize a Raspberry Pi sysroot for fast builds from an Ubuntu workstation.",
        readTime: "4 min read",
        body: [
          "Building a large C++/Qt application natively on a Raspberry Pi is slow and wears out SD cards. In an industrial R&D workflow (such as during my internship at OPTO France), cross-compiling from an x86_64 Linux workstation to the ARM target is essential.",
          "Step one is creating a clean sysroot: synchronize `/lib`, `/usr/include`, and `/usr/lib` from the Raspberry Pi to the host PC using `rsync`, and fix broken relative symlinks.",
          "Step two is isolating all target specifics inside a `toolchain-rpi.cmake` file (`CMAKE_SYSTEM_NAME Linux`, `CMAKE_SYSROOT`, and the `aarch64-linux-gnu-g++` compilers). This keeps the main `CMakeLists.txt` completely target-agnostic: developers can run GoogleTest unit tests natively on the host PC and cross-compile the production ARM binary with a single flag."
        ]
      },
      {
        id: "sobel-autofocus-embedded",
        date: "Industrial Vision · Algorithms & C++",
        title: "Implementing Real-Time Passive Autofocus Using a Sobel Filter in C++",
        summary: "Why the Sobel gradient operator is ideal for measuring optical sharpness in industrial microscopy and how to optimize it on ARM CPUs.",
        readTime: "3 min read",
        body: [
          "In industrial microscopy, passive autofocus relies purely on the camera video stream without external laser rangefinders.",
          "Physical principle: an out-of-focus lens acts as a spatial low-pass filter, blurring sharp edges. When the lens reaches the exact focal plane, high-frequency spatial edges peak.",
          "By applying 3x3 horizontal (Gx) and vertical (Gy) Sobel convolution kernels on a central Region of Interest (ROI), we compute the mean gradient energy: S = Mean(Gx² + Gy²). Paired with a hill-climbing search algorithm driving the Z-axis stepper motor over RS-232, the system locks onto maximum optical sharpness in milliseconds."
        ]
      }
    ],
    testimonials: [
      {
        quote: "Delivered the embedded GigE Vision server with high autonomy—from low-level RS-232 hardware interfacing to full prototype validation presented to management.",
        author: "M1 Internship Evaluation — OPTO France",
        role: "Industrial Vision R&D Team, Montélimar",
      },
      {
        quote: "Rigorous research work on distributed learning under hardware constraints, resulting in the NeuPIS architecture and a scientific publication on HAL.",
        author: "M2 Research Internship — Institut Pascal (UCA)",
        role: "ISPR Department / Embedded Systems & AI, Clermont-Ferrand",
      }
    ],
    education: [
      { year: "2024 to 2026", title: "Master's Degree in Embedded Systems (Signal, Image & Audio Processing)", org: "Université Clermont Auvergne, France", note: "Honors (Mention Bien), ranked 2nd/9. Digital electronics, FPGA, Linux & C/C++." },
      { year: "2023 to 2024", title: "Bachelor's Degree (Licence EEA - Electrical Engineering & Automation)", org: "Université Clermont Auvergne, France", note: "Honors (Mention Bien), ranked 2nd/53." },
      { year: "2020 to 2023", title: "Bachelor's Degree in Electrical Engineering", org: "ISET Rades, Tunisia", note: "Highest Honors (Mention Très Bien), Valedictorian (1st/40)." },
      { year: "2016 to 2018", title: "Higher National Diploma (BTS) in Automation & Industrial IT", org: "CSF Electronics, Tunisia", note: "Highest Honors (Mention Très Bien)." },
    ],
    certs: ["ISTQB Certified Tester Foundation Level (08/2023)", "Scrum Fundamentals Certified (02/2023)"],
    languages: "Arabic (Native), French (Fluent), English (B2, Professional).",
  },
};