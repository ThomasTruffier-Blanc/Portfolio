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
    // 3. GESTION DU PANNEAU LATÉRAL (Formations & Projets & Compétences)
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
                <p>J'ai choisi cette formation pour apprendre les concepts fondamentaux des réseaux, de la sécurité et des télécommunications à travers des cours, des travaux dirigés (TD) et des projets tutorés.</p>
                <h4>Et maintenant ?</h4>
                <p>Je suis actuellement en première année, avec un rythme d'un mois en entreprise et un mois en formation à l'ITSRA.</p>
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
                <p>Développé en réponse aux événements récents en Nouvelle-Calédonie, nécessitant un partage d'informations rapide et visuel pour la population.</p>

                <div style="margin: 20px 0; text-align: center;">
                    <img src="image/map.png" class="zoomable" alt="Interface Map.NC" 
                         style="width: 100%; border-radius: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.3); cursor: zoom-in;">
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
                <p>Plateforme web opérationnelle facilitant la circulation de l'information critique durant la période de crise qui a touché la Nouvelle-Calédonie.</p>
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
                <p>Projet réalisé dans le cadre d'un apprentissage personnel sur le développement mobile et l'administration réseau.</p>

                <div style="margin: 20px 0; text-align: center;">
                    <img src="image/App.png" class="zoomable" alt="Interface Net ToolBox" 
                         style="width: 100%; border-radius: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.3); cursor: zoom-in;">
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
                <p>Application fonctionnelle permettant des tests réseaux rapides. Compétences acquises en Java, et possibilité par exemple d'allumer mon PC à distance.</p>
            `
        }
    };

    // --- MISE À JOUR : DONNÉES COMPÉTENCES (QUALITÉS - STAGE & EXEMPLES) ---
    const skillsData = {
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
        }
    };

    // --- LOGIQUE D'OUVERTURE DU PANNEAU ---
    const sidePanel = document.getElementById('side-panel');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('close-btn');
    
    const pTitle = document.getElementById('panel-title');
    const pDate = document.getElementById('panel-date');
    const pLocation = document.getElementById('panel-location');
    const pBody = document.getElementById('panel-body');
    const pFooter = document.querySelector('.panel-footer');

    // Fonction unifiée
    function openPanel(type, id) {
        let data;

        // --- MASQUER LE BOUTON PARTOUT ---
        if(pFooter) pFooter.style.display = 'none'; 

        if (type === 'formation') {
            data = formationsData[id];
            
            if(!data) return;
            pTitle.textContent = data.title;
            pDate.textContent = data.date;
            pLocation.style.display = 'block';
            pLocation.textContent = data.location;
            pBody.innerHTML = data.content;

        } else if (type === 'project') {
            data = projectsData[id];
            
            if(!data) return;
            pTitle.textContent = data.title;
            pDate.textContent = data.subtitle;
            pLocation.style.display = 'none';
            pBody.innerHTML = data.description;

        } else if (type === 'skill') { 
            data = skillsData[id];

            if(!data) return;
            pTitle.textContent = data.title;
            pDate.textContent = data.subtitle;
            pLocation.style.display = 'none';
            pBody.innerHTML = data.description;
        }

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
            const parent = this.closest('.timeline-item');
            const id = parent.getAttribute('data-id');
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

    // LISTENER 3 : Compétences (Qualités uniquement)
    const qualityCard = document.querySelector('.skill-card[data-id="qualities"]');
    if (qualityCard) {
        qualityCard.addEventListener('click', function() {
            openPanel('skill', 'qualities');
        });
    }

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

    // Activation au clic sur une image .zoomable
    pBody.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG' && e.target.classList.contains('zoomable')) {
            e.stopPropagation(); 
            lightboxImg.src = e.target.src;
            lightbox.style.display = 'flex';
            setTimeout(() => {
                lightbox.style.opacity = '1';
            }, 10);
        }
    });

});
