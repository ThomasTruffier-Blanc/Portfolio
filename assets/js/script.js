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
        hackagou: "assets/img/hackagou-logo.svg"
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
            meta: "CTF cybersécurité - Nouvelle-Calédonie",
            body: `
                <img class="panel-image logo" src="${images.hackagou}" alt="Logo HacKagou">
                <h3>Contexte</h3><p>HacKagou est un événement CTF en Nouvelle-Calédonie. Cette participation a été mon premier contact concret avec des challenges de cybersécurité en équipe.</p>
                <h3>Travail réalisé</h3><ul><li>Recherche d'indices et de flags dans différents environnements.</li><li>Utilisation de scripts Bash pour automatiser des étapes simples.</li><li>Découverte d'une logique de diagnostic, d'observation et de méthode.</li></ul>
                <h3>Ce que le projet montre</h3><p>Au-delà du classement, ce projet montre mon intérêt pour la cybersécurité appliquée et ma capacité à apprendre en situation de challenge.</p>
            `
        },
        "project-mapnc": {
            title: "Map.NC",
            meta: "Web, données et information locale",
            body: `
                <img class="panel-image zoomable" src="${images.nc}" alt="Nouvelle-Calédonie et littoral">
                <h3>Contexte</h3><p>Projet web réalisé en NSI pour faciliter le partage d'informations locales pendant une période de crise en Nouvelle-Calédonie.</p>
                <h3>Travail réalisé</h3><ul><li>Interface HTML/CSS/JavaScript.</li><li>Stockage de points avec MySQL.</li><li>Première logique backend en PHP.</li></ul>
                <h3>Lecture professionnelle</h3><p>Le projet est simple, mais il met en avant une logique utile : organiser des données, les rendre lisibles et penser un usage concret.</p>
            `
        },
        "project-portfolio": {
            title: "Portfolio",
            meta: "GitHub Pages, HTML/CSS/JS",
            body: `
                <img class="panel-image zoomable" src="${images.code}" alt="Développement web sur ordinateur">
                <h3>Objectif</h3><p>Créer un support clair pour présenter mon parcours, mes compétences et mes projets dans une recherche de stage puis d'alternance.</p>
                <h3>Travail réalisé</h3><ul><li>Structure responsive en HTML/CSS/JavaScript.</li><li>Publication sur GitHub Pages.</li><li>Refonte visuelle vers une identité plus infrastructure et réseaux.</li></ul>
            `
        },
        "project-nettoolbox": {
            title: "Net ToolBox",
            meta: "Outils réseau et diagnostic",
            body: `
                <img class="panel-image zoomable" src="${images.switch}" alt="Équipement réseau">
                <h3>Objectif</h3><p>Regrouper des outils utiles au diagnostic réseau dans une application simple : calcul de sous-réseaux, suivi Wi-Fi et tests de communication.</p>
                <h3>Intérêt technique</h3><p>Ce projet relie programmation et réseau : il transforme des notions théoriques en outils utilisables pour vérifier une configuration.</p>
            `
        },
        "project-sae23": {
            title: "SAE23 - Audit de sécurité",
            meta: "Web, SQL, vulnérabilités",
            body: `
                <img class="panel-image zoomable" src="${images.cyber}" alt="Cybersécurité et circuit numérique">
                <h3>Objectif</h3><p>Comprendre une vulnérabilité web, l'exploiter dans un cadre pédagogique, puis expliquer la correction et les bonnes pratiques.</p>
                <h3>Résultat</h3><p>Une application PHP/MySQL volontairement vulnérable, une démonstration d'injection SQL et un rapport d'audit structuré.</p>
            `
        },
        "project-sae22": {
            title: "SAE22 - Math Lab",
            meta: "Projet de formation",
            body: `
                <img class="panel-image zoomable" src="${images.maths}" alt="Formules mathématiques et calcul">
                <h3>Contexte</h3><p>Projet en cours autour de notions mathématiques appliquées à un contexte technique.</p>
                <h3>Présentation</h3><p>La page sera enrichie avec les objectifs précis, les outils utilisés et les résultats dès que le projet sera plus avancé.</p>
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
