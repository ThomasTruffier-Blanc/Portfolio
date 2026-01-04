document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. GESTION DES ONGLETS COMPÉTENCES
    // ==========================================
    const filterBtns = document.querySelectorAll('.btn-filter');
    const techSkills = document.getElementById('tech-skills');
    const humanSkills = document.getElementById('human-skills');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filterValue = btn.getAttribute('data-filter');
            if (filterValue === 'tech') {
                techSkills.classList.remove('hidden');
                humanSkills.classList.add('hidden');
            } else {
                techSkills.classList.add('hidden');
                humanSkills.classList.remove('hidden');
            }
        });
    });

    // ==========================================
    // 2. ANIMATION AU SCROLL
    // ==========================================
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const glassElements = document.querySelectorAll('.glass');
    glassElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // ==========================================
    // 3. GESTION DU PANNEAU LATÉRAL
    // ==========================================
    
    // --- DONNÉES FORMATIONS ---
    const formationsData = {
        "iut": {
            title: "BUT Réseaux & Télécoms",
            date: "Septembre 2025 - Présent",
            location: "IUT Clermont Auvergne - Site d'Aubière",
            content: `
                <h4>Objectif de la Formation</h4>
                <p>Le BUT Réseaux et Télécommunications est une formation en 3 ans, accessible après le baccalauréat. Cette formation vise à former des techniciens supérieurs compétents dans les domaines des réseaux informatiques, des télécommunications et de la cybersécurité.</p>
                <h4>Pourquoi l'IUT d'Aubière ?</h4>
                <p>J'ai choisi cette formation pour apprendre les concepts fondamentaux des réseaux, de la sécurité et des télécommunications à travers des cours, des travaux dirigés (TD) et des TP.</p>
                <h4>Et maintenant ?</h4>
                <p>Je suis actuellement en première année.</p>
            `
        },
        "bac": {
            title: "Baccalauréat Général",
            date: "2024 - 2025",
            location: "Lycée François Mauriac",
            content: `
                <h4>Spécialités</h4>
                <p>Mathématiques et Numérique et Sciences de l'Informatique (NSI).<br>Mention Assez Bien.</p>
                <h4>Compétences acquises</h4>
                <p>Bases solides en Python, compréhension du web (HTML/CSS), algorithmique avancée et gestion de bases de données.</p>
            `
        },
        "om": {
            title: "Scolarité en Outre-mer",
            date: "2015 - 2024",
            location: "Tahiti - Nouvelle-Calédonie",
            content: `
                <h4>Contexte</h4>
                <p>J'ai vécu et étudié pendant près de 10 ans en Nouvelle-Calédonie et Tahiti, où j'ai effectué l'intégralité de mon collège et la majorité de mon lycée et de mon école primaire.</p>
                <h4>Apports personnels</h4>
                <p>Cette expérience m'a apporté une grande ouverture d'esprit et une capacité d'adaptation importante.</p>
            `
        }
    };

    // --- DONNÉES PROJETS ---
    const projectsData = {
        "whitesentinel": {
            title: "HackAgou.NC",
            subtitle: "Cybersécurité & Système",
            description: `
                <h4>Contexte</h4>
                <p>En 2023, lorsque j’étais scolarisé en seconde à Nouméa, le lycée nous a fait part de l’existence de ce concours et j’ai donc décidé de m’y inscrire avec deux autres amis.</p>
                <h4>Objectif</h4>
                <p>Terminer des défis en retrouvant une chaîne de caractères dans différents challenges de cybersécurité.</p>
                <h4>Travail réalisé</h4>
                <ul>
                    <li>Création de scripts en Bash (langage notamment utilisé sur le système d’exploitation Linux) pour automatiser des processus</li>
                    <li>Utilisation de logiciels de scan d’appareils pour identifier d’éventuelles failles</li>
                </ul>
                <h4>Résultat</h4>
                <p>Lors de l’édition 2025, mon équipe a terminé 32<sup>e</sup> sur 82 équipes.</p>
                <p>Lors de l’édition 2024, mon équipe a terminé 54<sup>e</sup> sur 88 équipes.</p>
                <p>Lors de l’édition 2023, mon équipe a terminé 67<sup>e</sup> sur 96 équipes.</p>
            `
        },
        "autotech": {
            title: "Map.NC",
            subtitle: "Web & Database",
            description: `
                <h4>Contexte</h4>
                <p>En 2024 lors de mon année de première, des problèmes politiques ont éclaté en Nouvelle-Calédonie ce qui a entraîné de grave émeutes, avec ma classe de NSI, nous avons décidés de créer un site web pour un partage d'informations rapide et visuel pour la population.</p>
                <div style="margin: 20px 0; text-align: center;">
                    <img src="image/map.png" class="zoomable" alt="Interface Map.NC" style="width: 100%; border-radius: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.3); cursor: zoom-in;">
                    <p style="font-size: 0.8rem; color: #94a3b8; margin-top: 5px;">(Cliquez pour agrandir)</p>
                </div>
                <h4>Objectif</h4>
                <p>Créer une carte interactive communautaire permettant de localiser en temps réel les zones sinistrées, les barrages ou les points de ravitaillement.</p>
                <h4>Travail réalisé</h4>
                <ul>
                    <li>Développement Front-End en HTML/CSS/JS pour l'interface carte.</li>
                    <li>Mise en place d'une base de données MySQL pour stocker les points.</li>
                    <li>Création d'un Backend PHP pour la gestion des signalements.</li>
                </ul>
                <h4>Résultat</h4>
                <p>Plateforme web opérationnelle facilitant la circulation de l'information critique en période de crise.</p>
            `
        },
        "portfolio": {
            title: "Portfolio V1",
            subtitle: "Développement Front-End",
            description: `
                <h4>Contexte</h4>
                <p>Projet personnel réalisé dans le cadre de ma recherche d'alternance et pour consolider mes compétences en développement web.</p>
                <h4>Objectif</h4>
                <p>Concevoir une vitrine numérique moderne, interactive et responsive présentant mon parcours, mes compétences et mes réalisations.</p>
                <h4>Travail réalisé</h4>
                <ul>
                    <li>Design UI moderne (Glassmorphism, Dark Mode).</li>
                    <li>Développement JavaScript pur (Vanilla) pour les interactions (Carrousel, Panels).</li>
                    <li>Optimisation responsive pour mobile et desktop.</li>
                </ul>
                <h4>Résultat</h4>
                <p>Site web complet, hébergé et fonctionnel, servant de support principal pour mes candidatures professionnelles.</p>
            `
        },
        "config_cisco": {
            title: "Net ToolBox",
            subtitle: "Réseaux - Routing & Switching",
            description: `
                <h4>Contexte</h4>
                <p>Projet réalisé dans le cadre d'un apprentissage personnel sur le développement mobile et l'administration réseau. En 2024 suite au évenement de Nouvelle-Calédonie, les cours ont été interrompus momentanément, ce qui a motivé la création de cette application.</p>
                <div style="margin: 20px 0; text-align: center;">
                    <img src="image/app.png" class="zoomable" alt="Interface Net ToolBox" style="width: 100%; border-radius: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.3); cursor: zoom-in;">
                    <p style="font-size: 0.8rem; color: #94a3b8; margin-top: 5px;">(Cliquez pour agrandir)</p>
                </div>
                <h4>Objectif</h4>
                <p>Développer une application centralisant plusieurs outils techniques pour faciliter le diagnostic réseau sur le terrain via un smartphone.</p>
                <h4>Travail réalisé</h4>
                <ul>
                    <li>Conception de l'interface XML sous Android Studio.</li>
                    <li>Développement d'un calculateur de sous-réseaux (IP Calc).</li>
                    <li>Création d'un moniteur de signal Wi-Fi en temps réel.</li>
                    <li>Implémentation d'un client TCP pour le contrôle à distance.</li>
                </ul>
                <h4>Résultat</h4>
                <p>Application fonctionnelle permettant des tests réseaux rapides. Compétences acquises en Java, cycle de vie Android et gestion des Sockets TCP.</p>
            `
        }
    };

    // --- DONNÉES COMPÉTENCES (QUALITÉS + TECHNIQUES AVEC ACCORDÉON) ---
    // Style inline pour l'accordéon afin d'éviter de toucher au CSS
    const accordionStyleHeader = "background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; cursor: pointer; margin-bottom: 10px; display: flex; justify-content: space-between; align-items: center; border: 1px solid rgba(255,255,255,0.1); font-weight: 600; transition: background 0.3s;";
    const accordionStyleContent = "padding: 15px; background: rgba(0,0,0,0.2); border-radius: 0 0 8px 8px; margin-top: -12px; margin-bottom: 15px; display: none; border-left: 2px solid #38bdf8;";

    const skillsData = {
        // 1. Qualités Humaines
        "qualities": {
            title: "Qualités Humaines",
            description: `
                <h4>Description</h4>
                <ul>
                    <li>
                        <strong>Adaptabilité :</strong> 
                        <br>J'ai vécu en Nouvelle-Calédonie, à Tahiti et désormais en France métropolitaine. À chaque déménagement, j'ai dû reconstruire mon cercle social et m'intégrer à de nouveaux systèmes scolaires. Cette expérience me permet aujourd'hui de m'intégrer très rapidement au sein d'une nouvelle équipe de travail.
                    </li>
                    <br>
                    <li>
                        <strong>Organisation :</strong> 
                        <br>Pour réussir des projets comme "Map.NC" en parallèle de mes cours, j'ai du apprendre à découper chaque projet en petites tâches réalisables avec des échéances précises, ce qui me permet de ne jamais être dépassé par la charge de travail.
                    </li>
                    <br>
                    <li>
                        <strong>Patience :</strong> 
                        <br>Lors du développement de l'application "Net ToolBox", j'ai rencontré des bugs de communication complexes. Plutôt que d'abandonner, j'ai passé plusieurs heures à tester chaque ligne de code méthodiquement jusqu'à isoler et résoudre le problème.
                    </li>
                </ul>
            `
        },
        
        // 2. Compétences Techniques (AVEC ACCORDÉON)
        "network": {
            title: "Réseaux Informatiques",
            subtitle: "Architecture & Administration",
            description: `
                <div class="accordion-item">
                    <div class="accordion-header" style="${accordionStyleHeader}">
                        Installation d’équipements réseaux <span style="font-size: 0.8rem;">▼</span>
                    </div>
                    <div class="accordion-content" style="${accordionStyleContent}">
                        <p>Au cours de ma formation, notamment lors des travaux dirigés, des travaux pratiques et des projets (SAE), j’ai eu l’occasion de manipuler divers équipements réseaux de marques différentes : principalement du matériel Cisco (switchs et routeurs) ainsi que des points d’accès D-LINK.</p>
                        <p>Dans le cadre de mon alternance, j’ai pu approfondir mes compétences en travaillant avec du matériel Aruba, notamment pour les switchs et les points d’accès Wi-Fi.</p>
                        <p><strong>Les principales notions abordées sont :</strong></p>
                        <ul style="padding-left: 20px;">
                            <li><strong>Switchs (Cisco) :</strong> Configuration en mode CLI, sécurisation des équipements, configuration des ports (adressage), mise en place de VLAN (trunk, access), supervision via interface graphique.</li>
                            <li><strong>Routeurs (Cisco) :</strong> Configuration en mode CLI, sécurisation, mise en œuvre de protocoles de routage (RIP, OSPF).</li>
                            <li><strong>Points d’accès Wi-Fi (D-LINK) :</strong> Mise en place de portails captifs, supervision via interface graphique.</li>
                        </ul>
                    </div>
                </div>

                <div class="accordion-item">
                    <div class="accordion-header" style="${accordionStyleHeader}">
                        Service Réseau <span style="font-size: 0.8rem;">▼</span>
                    </div>
                    <div class="accordion-content" style="${accordionStyleContent}">
                        <p>J’ai appris à configurer le matériel dans différents types de réseaux pour assurer la connectivité et l'accès aux services :</p>
                        <ul style="padding-left: 20px;">
                            <li><strong>Traduction d'adresses :</strong> NAT (Network Address Translation), PAT (Port Address Translation), DNAT.</li>
                            <li><strong>Services IP :</strong> Configuration de serveurs DHCP et DNS.</li>
                        </ul>
                    </div>
                </div>


                <div class="accordion-item">
                    <div class="accordion-header" style="${accordionStyleHeader}">
                        Virtualisation <span style="font-size: 0.8rem;">▼</span>
                    </div>
                    <div class="accordion-content" style="${accordionStyleContent}">
                        <p>Mise en place et gestion de machines virtuelles pour simuler des environnements de production :</p>
                        <ul style="padding-left: 20px;">
                            <li>Utilisation d'hyperviseurs (VMware, VirtualBox).</li>
                            <li>Déploiement de serveurs Linux (Debian) et Windows Server.</li>
                        </ul>
                    </div>
                </div>
            `
        },
        "telecom": {
            title: "Télécommunications",
            subtitle: "Signaux & Transmission",
            description: `
                <div class="accordion-item">
                    <div class="accordion-header" style="${accordionStyleHeader}">
                        Oscilloscope <span style="font-size: 0.8rem;">▼</span>
                    </div>
                    <div class="accordion-content" style="${accordionStyleContent}">
                        <p>Utilisation avancée pour visualiser et analyser les signaux électriques :</p>
                        <ul style="padding-left: 20px;">
                            <li>Mesure de l'amplitude, de la période et de la fréquence.</li>
                            <li>Analyse temporelle des signaux de transmission pour vérifier leur intégrité.</li>
                        </ul>
                    </div>
                </div>

                <div class="accordion-item">
                    <div class="accordion-header" style="${accordionStyleHeader}">
                        GBF (Générateur Basse Fréquence) <span style="font-size: 0.8rem;">▼</span>
                    </div>
                    <div class="accordion-content" style="${accordionStyleContent}">
                        <p>Génération de signaux pour tester les chaînes de transmission :</p>
                        <ul style="padding-left: 20px;">
                            <li>Configuration de signaux (Sinusoïdal, Carré, Triangle).</li>
                            <li>Réglage précis de la fréquence et de la tension (Vpp).</li>
                        </ul>
                    </div>
                </div>
            `
        },
        "code": {
            title: "Programmation",
            subtitle: "Dév & Scripting",
            description: `
                <div class="accordion-item">
                    <div class="accordion-header" style="${accordionStyleHeader}">
                        Web <span style="font-size: 0.8rem;">▼</span>
                    </div>
                    <div class="accordion-content" style="${accordionStyleContent}">
                        <p>Développement d'interfaces et de sites dynamiques :</p>
                        <ul style="padding-left: 20px;">
                            <li><strong>HTML5 / CSS3 :</strong> Structure et design responsive (ex: ce portfolio).</li>
                            <li><strong>JavaScript :</strong> Interactivité client et manipulation du DOM.</li>
                        </ul>
                    </div>
                </div>

                <div class="accordion-item">
                    <div class="accordion-header" style="${accordionStyleHeader}">
                        Bash <span style="font-size: 0.8rem;">▼</span>
                    </div>
                    <div class="accordion-content" style="${accordionStyleContent}">
                        <p>Administration système Linux et automatisation :</p>
                        <ul style="padding-left: 20px;">
                            <li>Utilisation de la ligne de commande pour la gestion de fichiers et droits.</li>
                            <li>Écriture de scripts pour automatiser des tâches récurrentes (sauvegardes, logs).</li>
                        </ul>
                    </div>
                </div>

                <div class="accordion-item">
                    <div class="accordion-header" style="${accordionStyleHeader}">
                        Python <span style="font-size: 0.8rem;">▼</span>
                    </div>
                    <div class="accordion-content" style="${accordionStyleContent}">
                        <p>Développement d'algorithmes et scripts réseaux :</p>
                        <ul style="padding-left: 20px;">
                            <li>Traitement de données et algorithmique.</li>
                            <li>Automatisation de configurations réseaux.</li>
                        </ul>
                    </div>
                </div>
            `
        }
    };

    // --- DONNÉES LOISIRS (INTÉRÊTS) ---
    const interestsData = {
        "sport": {
            title: "Sport",
            subtitle: "Engagement & Discipline",
            description: `
                <h4>Judo (7 ans)</h4>
                <p>Cette pratique de longue durée m'a inculqué le respect des règles, la rigueur et la persévérance. Ceinture verte obtenue.</p>
                <h4>Squash (4 ans)</h4>
                <p>Un sport intense qui demande une grande réactivité, une stratégie rapide et une excellente condition physique.</p>
            `
        },
        "diving": {
            title: "Activités Nautiques",
            subtitle: "Rigueur & Sang-froid",
            description: `
                <h4>Plongée en Bouteille</h4>
                <p>Durant mes années en outre-mers j'ai pratiqué la plongée en club notament pour Tahiti à <strong>Eleuthera</strong>. J'ai ensuite continué cette activité en Nouvelle-Calédonie de façon occasionnelle. C'est une activité qui exige un grand calme, une gestion stricte des protocoles de sécurité et une confiance totale en son binôme. Elle m'a appris à gérer mon stress dans un environnement hostile pour l'homme.</p>
            `
        },
        "music": {
            title: "Musique & Jeux",
            subtitle: "Créativité & Stratégie",
            description: `
                <h4>Guitare</h4>
                <p>Pratique instrumentale qui développe ma créativité et ma capacité de concentration sur le long terme.</p>
                <h4>Jeux Vidéo</h4>
                <p>Communication et stratégie d'équipe.</p>
            `
        },
        "travel": {
            title: "Voyages",
            subtitle: "Ouverture Culturelle",
            description: `
                <h4>Océanie</h4>
                <p>Ayant vécu 10 ans en Océanie (Nouvelle-Calédonie, Tahiti), j'ai développé une grande curiosité pour les cultures locales.</p>
                <h4>États-Unis</h4>
                <p>J'ai eu la chance de visiter de nombreux états américains, ce qui a renforcé mon niveau d'anglais et mon autonomie en milieu étranger.</p>
            `
        }
    };

    // --- LOGIQUE D'OUVERTURE DU PANNEAU ---
    const sidePanel = document.getElementById('side-panel');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('close-btn');
    
    const pTitle = document.getElementById('panel-title');
    const pDate = document.getElementById('panel-date');
    const pLocation = document.getElementById('panel-location');
    const pFooter = document.querySelector('.panel-footer');

    // Fonction unifiée
    function openPanel(type, id) {
        let data;

        // --- MASQUER LE BOUTON PARTOUT ---
        if(pFooter) pFooter.style.display = 'none'; 

        if (type === 'formation') data = formationsData[id];
        else if (type === 'project') data = projectsData[id];
        else if (type === 'skill') data = skillsData[id];
        else if (type === 'interest') data = interestsData[id];

        if(!data) return;

        pTitle.textContent = data.title;
        
        // Gestion sous-titre
        if (data.date) {
            pDate.textContent = data.date;
            pDate.style.display = 'inline-block';
        } else if (data.subtitle) {
            pDate.textContent = data.subtitle;
            pDate.style.display = 'inline-block';
        } else {
            pDate.style.display = 'none';
        }

        // Gestion Lieu
        if (data.location) {
            pLocation.style.display = 'block';
            pLocation.textContent = data.location;
        } else {
            pLocation.style.display = 'none';
        }

        pBody.innerHTML = data.content || data.description;

        sidePanel.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closePanel() {
        sidePanel.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    // LISTENER 1 : Clic Timeline
    document.querySelectorAll('.timeline-item .clickable').forEach(item => {
        item.addEventListener('click', function() {
            const id = this.getAttribute('data-id') || this.closest('.timeline-item').getAttribute('data-id');
            openPanel('formation', id);
        });
    });

    // LISTENER 2 : Clic Projets
    document.querySelector('.carousel-track').addEventListener('click', function(e) {
        const card = e.target.closest('.project-card');
        if (card) {
            const id = card.getAttribute('data-id');
            openPanel('project', id);
        }
    });

    // LISTENER 3 : Compétences (Qualités ET Techniques)
    document.querySelectorAll('.skill-card.clickable').forEach(card => {
        card.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            openPanel('skill', id);
        });
    });

    // LISTENER 4 : Loisirs (NOUVEAU)
    document.querySelectorAll('.interest-item.clickable').forEach(item => {
        item.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            openPanel('interest', id);
        });
    });

    closeBtn.addEventListener('click', closePanel);
    overlay.addEventListener('click', closePanel);

    // ==========================================
    // 4. LOGIQUE CARROUSEL INFINI
    // ==========================================
    const track = document.querySelector('.carousel-track');
    const prevButton = document.querySelector('.prev-btn');
    const nextButton = document.querySelector('.next-btn');

    if (track && track.children.length > 0) {
        let isTransitioning = false;

        const getCardWidth = () => {
            const card = track.querySelector('.project-card');
            const style = window.getComputedStyle(track);
            const gap = parseFloat(style.gap) || 30;
            return card.offsetWidth + gap;
        };

        nextButton.addEventListener('click', () => {
            if (isTransitioning) return;
            isTransitioning = true;
            const cardWidth = getCardWidth();
            track.style.transition = 'transform 0.5s ease-in-out';
            track.style.transform = `translateX(-${cardWidth}px)`;

            setTimeout(() => {
                track.appendChild(track.firstElementChild);
                track.style.transition = 'none';
                track.style.transform = 'translateX(0)';
                isTransitioning = false;
            }, 500); 
        });

        prevButton.addEventListener('click', () => {
            if (isTransitioning) return;
            isTransitioning = true;
            const cardWidth = getCardWidth();
            track.style.transition = 'none';
            track.insertBefore(track.lastElementChild, track.firstElementChild);
            track.style.transform = `translateX(-${cardWidth}px)`;

            setTimeout(() => {
                track.style.transition = 'transform 0.5s ease-in-out';
                track.style.transform = 'translateX(0)';
            }, 20);

            setTimeout(() => {
                isTransitioning = false;
            }, 520);
        });
    }

    // ==========================================
    // 5. LOGIQUE LIGHTBOX
    // ==========================================
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0,0,0,0.9); display: none;
        align-items: center; justify-content: center; z-index: 3000;
        cursor: zoom-out; opacity: 0; transition: opacity 0.3s;
    `;
    const lightboxImg = document.createElement('img');
    lightboxImg.style.cssText = 'max-width: 90%; max-height: 90%; border-radius: 8px; box-shadow: 0 0 30px rgba(0,0,0,0.8);';
    lightbox.appendChild(lightboxImg);
    document.body.appendChild(lightbox);

    lightbox.addEventListener('click', () => {
        lightbox.style.opacity = '0';
        setTimeout(() => {
            lightbox.style.display = 'none';
        }, 300);
    });

    const pBody = document.getElementById('panel-body');
    
    // ÉCOUTEUR PRINCIPAL DU PANEL (Gère Lightbox + Accordéon)
    pBody.addEventListener('click', (e) => {
        
        // 1. GESTION LIGHTBOX (Zoom image)
        if (e.target.tagName === 'IMG' && e.target.classList.contains('zoomable')) {
            e.stopPropagation(); 
            lightboxImg.src = e.target.src;
            lightbox.style.display = 'flex';
            setTimeout(() => {
                lightbox.style.opacity = '1';
            }, 10);
        }

        // 2. GESTION ACCORDÉON (Nouveau code ajouté ici)
        // Vérifie si on clique sur un header ou un élément à l'intérieur du header
        if (e.target.classList.contains('accordion-header') || e.target.closest('.accordion-header')) {
            const header = e.target.classList.contains('accordion-header') ? e.target : e.target.closest('.accordion-header');
            const content = header.nextElementSibling;
            
            // On bascule l'affichage
            if (content.style.display === 'block') {
                content.style.display = 'none';
                header.style.background = 'rgba(255,255,255,0.05)'; // Retour couleur normale
            } else {
                content.style.display = 'block';
                header.style.background = 'rgba(56, 189, 248, 0.2)'; // Highlight couleur active
            }
        }
    });

});
