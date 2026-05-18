document.addEventListener("DOMContentLoaded", () => {
    const page = document.body.dataset.page;
    const menuToggle = document.querySelector(".menu-toggle");
    const overlay = document.getElementById("overlay");
    const sidePanel = document.getElementById("side-panel");
    const closeBtn = document.getElementById("close-btn");
    const panelTitle = document.getElementById("panel-title");
    const panelMeta = document.getElementById("panel-meta");
    const panelLocation = document.getElementById("panel-location");
    const panelBody = document.getElementById("panel-body");
    const header = document.querySelector(".site-header");

    const progress = document.createElement("div");
    progress.className = "scroll-progress";
    document.body.prepend(progress);

    const images = {
        server: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=70&w=1400",
        switch: "https://images.unsplash.com/photo-1600267165477-6d4cc741b379?auto=format&fit=crop&q=70&w=1400",
        code: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=70&w=1400",
        telecom: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=70&w=1400",
        nc: "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?auto=format&fit=crop&q=70&w=1400",
        cyber: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=70&w=1400",
        maths: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=70&w=1400",
        hackagou: "assets/img/hackagou-logo.svg",
        ncAerial: "https://images.unsplash.com/photo-1710881710127-b648ef0b4dc5?auto=format&fit=crop&q=70&w=1400",
        nettoolbox: "assets/img/nettoolbox-preview.png"
    };

    function accordion(title, content) {
        return `
            <div class="accordion-item">
                <button class="accordion-header" type="button">
                    <span>${title}</span>
                    <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>
                </button>
                <div class="accordion-content">${content}</div>
            </div>
        `;
    }

    const detailData = {
        "formation-iut": {
            title: "BUT Réseaux & Télécommunications",
            meta: "Septembre 2025 - présent",
            location: "IUT Clermont Auvergne - Site d'Aubière",
            body: `
                <img class="panel-image zoomable" src="${images.server}" alt="Baies de serveurs et câblage réseau">
                <h3>Orientation</h3>
                <p>Cette formation me permet de construire un profil technique centré sur les réseaux, les systèmes, les télécommunications et la cybersécurité. Les travaux pratiques m'aident à relier la théorie à des configurations concrètes.</p>
                <h3>Compétences travaillées</h3>
                <p>J'avance sur l'adressage IPv4, les bases Cisco, les VLAN, l'environnement Linux, l'analyse réseau et les services essentiels d'une infrastructure.</p>
                <h3>Objectif</h3>
                <p>Je prépare un stage de BUT2 à partir d'avril 2027, puis une alternance en BUT3 dans un environnement systèmes, réseaux, cyber ou télécommunications.</p>
            `
        },
        "formation-bac": {
            title: "Baccalauréat Général",
            meta: "2024 - 2025",
            location: "Lycée François Mauriac",
            body: `
                <img class="panel-image zoomable" src="${images.code}" alt="Poste de travail avec code">
                <h3>Spécialités</h3>
                <p>Mathématiques et Numérique et Sciences de l'Informatique, avec une première approche structurée de l'algorithmique, de Python, des bases de données et du web.</p>
                <h3>Apport pour le BUT RT</h3>
                <p>La NSI m'a donné des bases utiles pour comprendre les scripts, les services web et les notions de sécurité applicative abordées ensuite en formation.</p>
            `
        },
        "formation-outremer": {
            title: "Scolarité en Outre-mer",
            meta: "2015 - 2024",
            location: "Nouvelle-Calédonie et Tahiti",
            body: `
                <img class="panel-image zoomable" src="${images.nc}" alt="Paysage côtier en Nouvelle-Calédonie">
                <h3>Parcours</h3>
                <p>J'ai vécu plusieurs années en Nouvelle-Calédonie et à Tahiti avant de revenir en métropole. Ce parcours m'a habitué à changer d'environnement et à m'intégrer dans des contextes différents.</p>
                <h3>Apport personnel</h3>
                <p>Cette expérience me sert aujourd'hui dans le travail en groupe, l'adaptation aux nouvelles méthodes et la communication avec des profils variés.</p>
            `
        },
        "skill-network": {
            title: "Réseaux",
            meta: "TCP/IP, IPv4, Wireshark, Cisco, VLAN",
            body: `
                <img class="panel-image zoomable" src="${images.switch}" alt="Switch réseau et câbles Ethernet">
                ${accordion("Adressage et architecture", `
                    <p>Je travaille les fondamentaux TCP/IP, le plan d'adressage IPv4, les masques, les sous-réseaux et la logique de segmentation. L'objectif est de savoir lire une architecture simple, repérer les réseaux concernés et expliquer les choix d'adressage.</p>
                    <ul><li>Calcul de sous-réseaux et passerelles.</li><li>Compréhension des flux entre équipements.</li><li>Premières notions de routage et de services réseau.</li></ul>
                `)}
                ${accordion("Configuration réseau", `
                    <p>J'ai commencé à manipuler des équipements et simulateurs pour configurer des accès réseau, des points d'accès Wi-Fi et des bases Cisco. Je progresse avec une méthode claire : préparer, appliquer, tester, documenter.</p>
                    <ul><li>VLAN et ports access/trunk.</li><li>Configuration de points d'accès Wi-Fi.</li><li>Vérification de connectivité et diagnostic simple.</li></ul>
                `)}
                ${accordion("Analyse réseau", `
                    <p>Wireshark me permet d'observer les paquets, de comprendre le comportement d'un protocole et d'identifier des erreurs de configuration ou de communication. C'est un axe important pour relier réseau et cybersécurité.</p>
                `)}
            `
        },
        "skill-system": {
            title: "Systèmes",
            meta: "Linux, Windows, VirtualBox",
            body: `
                <img class="panel-image zoomable" src="${images.server}" alt="Infrastructure serveur">
                ${accordion("Linux", `
                    <p>J'utilise Linux pour comprendre l'administration système, la ligne de commande, les permissions, les services et les scripts Bash. Je cherche à développer une méthode propre pour installer, tester et dépanner.</p>
                    <ul><li>Navigation terminal, droits et processus.</li><li>Scripts Bash simples pour automatiser des tâches.</li><li>Lecture de fichiers de configuration et diagnostic.</li></ul>
                `)}
                ${accordion("Windows", `
                    <p>Je garde aussi une base Windows pour les postes clients, les environnements utilisateurs et les usages professionnels courants. L'objectif est de savoir évoluer dans un parc mixte.</p>
                `)}
                ${accordion("Virtualisation", `
                    <p>VirtualBox me sert à créer des environnements de test isolés, installer des machines Linux ou Windows et simuler des scénarios sans risque pour un poste réel.</p>
                `)}
            `
        },
        "skill-telecom": {
            title: "Télécommunications",
            meta: "Signaux, mesures, VoIP/SIP",
            body: `
                <img class="panel-image zoomable" src="${images.telecom}" alt="Composants électroniques et mesures">
                ${accordion("Mesures de signaux", `
                    <p>J'apprends à utiliser l'oscilloscope et le générateur basse fréquence pour observer des signaux, mesurer amplitude, période et fréquence, puis interpréter les résultats.</p>
                `)}
                ${accordion("VoIP et SIP", `
                    <p>Je découvre les bases de la voix sur IP, le rôle de SIP, la logique des terminaux et la place de la téléphonie dans une infrastructure réseau.</p>
                `)}
                ${accordion("Approche technique", `
                    <p>Cette partie me permet de relier les couches physiques, les transmissions et les services réseau, ce qui donne une vision plus complète du domaine R&T.</p>
                `)}
            `
        },

        "skill-telephony": {
            title: "Téléphonie IP",
            meta: "VoIP & Communications",
            body: `
                <img class="panel-image zoomable" src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=70&w=1400" alt="Poste de travail avec outils de communication">
                ${accordion("Infrastructure VoIP", `
                    <p>Mise en place d'une infrastructure de téléphonie IP basée sur Xivo et Asterisk, avec une logique proche d'un système d'entreprise : serveur d'appel, terminaux et services associés.</p>
                `)}
                ${accordion("Configuration des terminaux", `
                    <p>Configuration de téléphones SIP, softphones, postes DECT via borne et téléphone analogique via adaptateur ATA. L'objectif est de comprendre comment chaque terminal s'intègre au serveur d'appel.</p>
                `)}
                ${accordion("Trunk SIP et appels", `
                    <p>Mise en place d'un trunk SIP pour gérer les appels entrants et sortants, avec simulation d'un opérateur téléphonique et vérification des flux d'appel.</p>
                `)}
                ${accordion("Services avancés", `
                    <p>Configuration de groupes d'appel, renvoi d'appel, messagerie vocale, conférence et assistant Xivo. Cette partie relie la téléphonie aux besoins concrets d'une organisation.</p>
                `)}
            `
        },
        "skill-code": {
            title: "Programmation",
            meta: "Python, Bash, HTML/CSS",
            body: `
                <img class="panel-image zoomable" src="${images.code}" alt="Code sur ordinateur">
                ${accordion("Python", `
                    <p>Je l'utilise pour des petits programmes, du traitement simple et de l'automatisation. L'objectif n'est pas de me présenter comme développeur logiciel, mais de montrer que je peux créer des outils utiles à un contexte technique.</p>
                `)}
                ${accordion("Bash", `
                    <p>Je fais des scripts de menus, calculatrices, automatisations simples et commandes Linux. C'est une compétence directement utile en administration système.</p>
                `)}
                ${accordion("HTML/CSS", `
                    <p>Ces bases me permettent de produire une documentation ou une interface web claire, comme ce portfolio, tout en gardant l'accent sur mon orientation réseaux et systèmes.</p>
                `)}
            `
        },
        "skill-tools": {
            title: "Outils",
            meta: "Git, GitHub, Packet Tracer",
            body: `
                <img class="panel-image zoomable" src="${images.server}" alt="Poste technique et infrastructure réseau">
                ${accordion("Git et GitHub", `
                    <p>Je sais versionner un projet, suivre mes modifications et publier mon travail. GitHub est aussi un support pour présenter mes scripts, projets de formation et exercices techniques.</p>
                `)}
                ${accordion("Packet Tracer", `
                    <p>Packet Tracer me sert à simuler des topologies, vérifier des configurations et mieux comprendre la logique réseau avant de passer sur du matériel réel.</p>
                `)}
                ${accordion("Méthode", `
                    <p>Je cherche à documenter davantage mes projets : contexte, objectif, étapes, outils utilisés et résultat. C'est ce qui rend un projet étudiant plus lisible pour un recruteur technique.</p>
                `)}
            `
        },
        "skill-qualities": {
            title: "Qualités professionnelles",
            meta: "Méthode, communication, autonomie",
            body: `
                <img class="panel-image zoomable" src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=70&w=1400" alt="Réunion professionnelle">
                <h3>Méthode</h3><p>Je travaille par étapes vérifiables : comprendre le problème, tester une hypothèse, documenter le résultat et corriger si nécessaire.</p>
                <h3>Autonomie encadrée</h3><p>Je sais chercher, expérimenter et avancer seul sur des tâches adaptées à mon niveau, tout en demandant validation lorsque le sujet touche une configuration sensible.</p>
                <h3>Communication</h3><p>Je fais attention à expliquer ce que j'ai fait avec des mots simples, notamment dans les projets de groupe et les comptes rendus techniques.</p>
            `
        },
        "project-hackagou": {
            title: "HacKagou.NC",
            meta: "Cybersécurité & Système",
            body: `
                <h4>Contexte</h4>
                <p>En 2023, lorsque j'&eacute;tais scolaris&eacute; en seconde &agrave; Noum&eacute;a, le lyc&eacute;e nous a fait part de l'existence de ce concours et j'ai donc d&eacute;cid&eacute; de m'y inscrire avec deux autres amis.</p>
                <h4>Objectif</h4>
                <p>Terminer des d&eacute;fis en retrouvant une cha&icirc;ne de caract&egrave;res dans diff&eacute;rents challenges de cybers&eacute;curit&eacute;.</p>
                <h4>Travail r&eacute;alis&eacute;</h4>
                <ul>
                    <li>Cr&eacute;ation de scripts en Bash pour automatiser des processus.</li>
                    <li>Utilisation de logiciels de scan d'appareils pour identifier d'&eacute;ventuelles failles.</li>
                </ul>
                <h4>R&eacute;sultat</h4>
                <p>&Eacute;dition 2025 : 32<sup>e</sup> sur 82 &eacute;quipes.</p>
                <p>&Eacute;dition 2024 : 54<sup>e</sup> sur 88 &eacute;quipes.</p>
                <p>&Eacute;dition 2023 : 67<sup>e</sup> sur 96 &eacute;quipes.</p>
            `
        },
        "project-mapnc": {
            title: "Map.NC",
            meta: "Web & Database",
            body: `
                <h4>Contexte</h4>
                <p>En 2024, suite aux &eacute;meutes en Nouvelle-Cal&eacute;donie, nous avons cr&eacute;&eacute; avec ma classe un site web pour partager des informations rapides.</p>
                <img class="panel-image zoomable" src="${images.ncAerial}" alt="Vue a&eacute;rienne de la Nouvelle-Cal&eacute;donie">
                <h4>Objectif</h4>
                <p>Carte interactive pour localiser zones sinistr&eacute;es, barrages ou points de ravitaillement.</p>
                <h4>Travail r&eacute;alis&eacute;</h4>
                <ul>
                    <li>D&eacute;veloppement Front-End HTML/CSS/JS.</li>
                    <li>Base de donn&eacute;es MySQL.</li>
                    <li>Backend PHP.</li>
                </ul>
                <h4>R&eacute;sultat</h4>
                <p>Le projet a permis d'obtenir une premi&egrave;re interface web capable de centraliser et d'afficher des informations locales. Il m'a surtout permis de relier une interface, une base de donn&eacute;es et un traitement c&ocirc;t&eacute; serveur dans un cas concret.</p>
            `
        },
        "project-portfolio": {
            title: "Portfolio",
            meta: "HTML/CSS/JS & GitHub Pages",
            body: `
                <h4>Contexte</h4>
                <p>Projet personnel cr&eacute;&eacute; pour pr&eacute;senter mon parcours, mes comp&eacute;tences, mes projets et mon objectif de recherche de stage en BUT R&eacute;seaux & T&eacute;l&eacute;communications.</p>
                <img class="panel-image zoomable" src="${images.code}" alt="Interface de code pour le portfolio">
                <h4>Objectif</h4>
                <p>Construire un site clair, responsive et professionnel, capable de donner rapidement une image s&eacute;rieuse de mon profil &agrave; un recruteur ou &agrave; une entreprise technique.</p>
                <h4>Travail r&eacute;alis&eacute;</h4>
                <ul>
                    <li>Structuration du site en plusieurs pages : accueil, projets, comp&eacute;tences, passion et contact.</li>
                    <li>Mise en place d'une identit&eacute; visuelle sobre orient&eacute;e syst&egrave;mes, r&eacute;seaux et cybers&eacute;curit&eacute;.</li>
                    <li>Ajout de panneaux de d&eacute;tail, animations l&eacute;g&egrave;res, navigation responsive et images adapt&eacute;es.</li>
                    <li>H&eacute;bergement pr&eacute;vu avec GitHub Pages.</li>
                </ul>
                <h4>R&eacute;sultat</h4>
                <p>Le portfolio sert de support de candidature &eacute;volutif. Il me permet de documenter progressivement mes projets et de montrer mon orientation vers les infrastructures, les r&eacute;seaux et la cybers&eacute;curit&eacute;.</p>
            `
        },
        "project-nettoolbox": {
            title: "Net ToolBox",
            meta: "Réseaux - Routing & Switching",
            body: `
                <h4>Contexte</h4>
                <p>Projet d'apprentissage personnel sur le d&eacute;veloppement mobile et l'administration r&eacute;seau.</p>
                <img class="panel-image zoomable" src="${images.nettoolbox}" alt="Interface Net ToolBox">
                <h4>Objectif</h4>
                <p>Application centralisant des outils pour le diagnostic r&eacute;seau sur smartphone.</p>
                <h4>Travail r&eacute;alis&eacute;</h4>
                <ul>
                    <li>Interface XML Android Studio.</li>
                    <li>Calculateur sous-r&eacute;seaux (IP Calc).</li>
                    <li>Moniteur Wi-Fi temps r&eacute;el.</li>
                    <li>Client TCP.</li>
                </ul>
                <h4>R&eacute;sultat</h4>
                <p>Le projet a abouti &agrave; une maquette fonctionnelle d'application regroupant plusieurs outils r&eacute;seau. Il m'a permis de mieux comprendre le lien entre d&eacute;veloppement mobile et besoins pratiques d'administration r&eacute;seau.</p>
            `
        },
        "project-sae23": {
            title: "SAE23 – Audit de sécurité",
            meta: "Cybersécurité & Web",
            body: `
                <h4>Contexte</h4>
                <p>Projet r&eacute;alis&eacute; dans le cadre de ma formation au cours du deuxi&egrave;me semestre, dans une mati&egrave;re d&eacute;di&eacute;e aux projets. Celui-ci portait sur l'analyse de vuln&eacute;rabilit&eacute;s au sein d'une application web, avec une approche orient&eacute;e cybers&eacute;curit&eacute;.</p>
                <h4>Objectif</h4>
                <p>L'objectif &eacute;tait de comprendre le fonctionnement des failles de s&eacute;curit&eacute; web et de savoir les exploiter, notamment les injections SQL, afin d'identifier les risques associ&eacute;s et d'appliquer les bonnes pratiques de s&eacute;curisation.</p>
                <h4>Travail r&eacute;alis&eacute;</h4>
                <p>Ce projet a &eacute;t&eacute; r&eacute;alis&eacute; <strong>individuellement</strong>. J'ai d&eacute;velopp&eacute; une application web en PHP/MySQL servant de support &agrave; l'analyse des vuln&eacute;rabilit&eacute;s. Un syst&egrave;me de connexion volontairement vuln&eacute;rable a d'abord &eacute;t&eacute; mis en place, puis s&eacute;curis&eacute; afin d'illustrer les bonnes pratiques. J'ai &eacute;galement exploit&eacute; une injection SQL pour d&eacute;montrer concr&egrave;tement la faille. Enfin, j'ai r&eacute;dig&eacute; un rapport d'audit structur&eacute; pr&eacute;sentant les vuln&eacute;rabilit&eacute;s identifi&eacute;es sous forme de tableau.</p>
                <p>Le travail a &eacute;t&eacute; r&eacute;alis&eacute; progressivement, en suivant les diff&eacute;rents volets propos&eacute;s par l'enseignant, ce qui m'a permis d'aborder chaque aspect du projet de mani&egrave;re approfondie et structur&eacute;e.</p>
                <h4>R&eacute;sultat</h4>
                <p>Le projet a abouti &agrave; une application fonctionnelle int&eacute;grant &agrave; la fois des vuln&eacute;rabilit&eacute;s et leurs corrections. Il m'a permis de d&eacute;velopper une compr&eacute;hension concr&egrave;te des failles web ainsi que des bonnes pratiques essentielles en mati&egrave;re de s&eacute;curit&eacute; des applications.</p>
            `
        },
        "project-sae22": {
            title: "SAE22",
            meta: "Projet de formation - en cours",
            body: `
                <h4>Contexte</h4>
                <p>Projet de formation encore en cours. Le contenu d&eacute;taill&eacute; sera compl&eacute;t&eacute; lorsque la SAE sera finalis&eacute;e.</p>
                <img class="panel-image zoomable" src="${images.maths}" alt="Travail math&eacute;matique et calculs">
                <h4>Objectif</h4>
                <p>Approfondir des notions techniques et math&eacute;matiques dans le cadre de la formation.</p>
                <h4>Travail r&eacute;alis&eacute;</h4>
                <p>Le travail est encore en cours. Les diff&eacute;rentes &eacute;tapes, les outils utilis&eacute;s et les productions seront ajout&eacute;s lorsque la SAE sera suffisamment avanc&eacute;e.</p>
                <h4>R&eacute;sultat</h4>
                <p>La SAE n'&eacute;tant pas termin&eacute;e, il n'y a pas encore de r&eacute;sultat final &agrave; pr&eacute;senter. Cette partie sera compl&eacute;t&eacute;e apr&egrave;s finalisation du projet.</p>
            `
        }
    };

    document.querySelectorAll(`[data-nav="${page}"]`).forEach((link) => {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
    });

    function updateScroll() {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const ratio = max > 0 ? (window.scrollY / max) * 100 : 0;
        progress.style.width = `${ratio}%`;
        if (header) header.classList.toggle("is-scrolled", window.scrollY > 12);
    }

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });

    if (menuToggle) {
        menuToggle.addEventListener("click", () => {
            const isOpen = document.body.classList.toggle("nav-open");
            menuToggle.setAttribute("aria-expanded", String(isOpen));
            menuToggle.innerHTML = isOpen ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
        });
    }

    document.querySelectorAll(".mobile-nav a").forEach((link) => {
        link.addEventListener("click", () => {
            document.body.classList.remove("nav-open");
            if (menuToggle) {
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
            }
        });
    });

    const revealItems = document.querySelectorAll(".reveal");
    revealItems.forEach((item, index) => item.style.setProperty("--delay", `${Math.min(index * 35, 220)}ms`));

    if ("IntersectionObserver" in window) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.13, rootMargin: "0px 0px -40px" });

        revealItems.forEach((item) => revealObserver.observe(item));
    } else {
        revealItems.forEach((item) => item.classList.add("in-view"));
    }

    const filterBtns = document.querySelectorAll(".btn-filter");
    const techSkills = document.getElementById("tech-skills");
    const humanSkills = document.getElementById("human-skills");

    filterBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            filterBtns.forEach((item) => item.classList.remove("active"));
            btn.classList.add("active");

            if (!techSkills || !humanSkills) return;
            const showTech = btn.dataset.filter === "tech";
            techSkills.classList.toggle("hidden", !showTech);
            humanSkills.classList.toggle("hidden", showTech);
            (showTech ? techSkills : humanSkills).querySelectorAll(".reveal").forEach((item) => item.classList.add("in-view"));
        });
    });

    function openPanel(id) {
        if (!sidePanel || !overlay || !panelTitle || !panelMeta || !panelLocation || !panelBody) return;
        const data = detailData[id];
        if (!data) return;

        panelTitle.textContent = data.title;
        panelMeta.textContent = data.meta || "";
        panelLocation.textContent = data.location || "";
        panelLocation.style.display = data.location ? "block" : "none";
        panelBody.innerHTML = data.body || "";

        sidePanel.classList.add("active");
        sidePanel.setAttribute("aria-hidden", "false");
        overlay.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function closePanel() {
        if (!sidePanel || !overlay) return;
        sidePanel.classList.remove("active");
        sidePanel.setAttribute("aria-hidden", "true");
        overlay.classList.remove("active");
        document.body.style.overflow = "";
    }

    document.querySelectorAll(".detail-trigger").forEach((trigger) => {
        trigger.addEventListener("click", () => openPanel(trigger.dataset.detail));
        trigger.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openPanel(trigger.dataset.detail);
            }
        });
    });

    if (closeBtn) closeBtn.addEventListener("click", closePanel);
    if (overlay) overlay.addEventListener("click", closePanel);

    if (panelBody) {
        panelBody.addEventListener("click", (event) => {
            const header = event.target.closest(".accordion-header");
            if (!header) return;

            const content = header.nextElementSibling;
            const isActive = header.classList.toggle("active");
            if (content) content.classList.toggle("active", isActive);
        });
    }

    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.setAttribute("role", "dialog");
    lightbox.setAttribute("aria-label", "Image agrandie");
    lightbox.innerHTML = '<img alt="">';
    document.body.appendChild(lightbox);
    const lightboxImg = lightbox.querySelector("img");

    function closeLightbox() {
        lightbox.classList.remove("active");
        if (lightboxImg) {
            lightboxImg.removeAttribute("src");
            lightboxImg.alt = "";
        }
    }

    document.addEventListener("click", (event) => {
        const target = event.target;
        if (!(target instanceof HTMLImageElement)) return;
        if (!target.matches("[data-lightbox], .zoomable")) return;

        if (lightboxImg) {
            lightboxImg.src = target.src;
            lightboxImg.alt = target.alt || "Image agrandie";
        }
        lightbox.classList.add("active");
    });

    lightbox.addEventListener("click", closeLightbox);
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeLightbox();
            closePanel();
        }
    });
});
