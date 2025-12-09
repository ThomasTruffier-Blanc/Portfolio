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
    // 3. GESTION DU PANNEAU LATÉRAL (Formations & Projets)
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
            title: "WhiteSentinel",
            subtitle: "Cybersécurité & Système",
            description: `
                <h4>Description</h4>
                <p>Station blanche de sécurité (kiosque de décontamination) pour analyser les périphériques USB.</p>
                <h4>Technologies</h4>
                <ul><li>Python</li><li>Bash / Linux</li><li>ClamAV</li></ul>
            `
        },
        "autotech": {
            title: "Map.NC",
            subtitle: "Web & Database",
            description: `
                <h4>Description</h4>
                <p>Site web sous forme de carte pour localisé des zones sinistrés pendant les émeutes en Nouvelle-Calédonie.</p>
                <h4>Technologies</h4>
                <ul><li>HTML / CSS / JS</li><li>PHP & MySQL</li></ul>
            `
        },
        "portfolio": {
            title: "Portfolio V1",
            subtitle: "Développement Front-End",
            description: `
                <h4>Description</h4>
                <p>Création de ce site personnel pour présenter mon parcours.</p>
                <h4>Technologies</h4>
                <ul><li>HTML5 / CSS3</li><li>JavaScript (Vanilla)</li></ul>
            `
        },
        "config_cisco": {
            title: "Projet Intégratif",
            subtitle: "Réseaux - Routing & Switching",
            description: `
                <h4>Objectif</h4>
                <p>Mise en place d'une architecture réseau d'entreprise complète dans le cadre d'un projet de fin d'année</p>
                <h4>Configuration</h4>
                <ul><li>Mise en place de réseaux</li><li>Routage Inter-VLAN</li><li>Sécurité</li></ul>
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
    
    // Pied de page (contenant le bouton)
    const pFooter = document.querySelector('.panel-footer');

    // Fonction unifiée
    function openPanel(type, id) {
        let data;

        // --- MASQUER LE BOUTON PARTOUT (Formations ET Projets) ---
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

    // Clic Timeline
    document.querySelectorAll('.timeline-item .clickable').forEach(item => {
        item.addEventListener('click', function() {
            const parent = this.closest('.timeline-item');
            const id = parent.getAttribute('data-id');
            openPanel('formation', id);
        });
    });

    // Clic Projets (Délégué pour gérer le carrousel qui bouge le DOM)
    document.querySelector('.carousel-track').addEventListener('click', function(e) {
        // On cherche la carte la plus proche de l'élément cliqué
        const card = e.target.closest('.project-card');
        if (card) {
            const id = card.getAttribute('data-id');
            openPanel('project', id);
        }
    });

    closeBtn.addEventListener('click', closePanel);
    overlay.addEventListener('click', closePanel);

    // ==========================================
    // 4. LOGIQUE CARROUSEL INFINI (NOUVEAU)
    // ==========================================
    const track = document.querySelector('.carousel-track');
    const prevButton = document.querySelector('.prev-btn');
    const nextButton = document.querySelector('.next-btn');

    if (track && track.children.length > 0) {
        let isTransitioning = false;

        // Fonction pour calculer la largeur dynamique (carte + gap)
        const getCardWidth = () => {
            const card = track.querySelector('.project-card');
            // On récupère le gap du CSS (calculé)
            const style = window.getComputedStyle(track);
            const gap = parseFloat(style.gap) || 30; // 30 par défaut si non trouvé
            return card.offsetWidth + gap;
        };

        // --- BOUTON SUIVANT (DÉFILEMENT INFINI) ---
        nextButton.addEventListener('click', () => {
            if (isTransitioning) return; // Empêche le spam clic
            isTransitioning = true;

            const cardWidth = getCardWidth();

            // 1. On applique l'animation vers la gauche
            track.style.transition = 'transform 0.5s ease-in-out';
            track.style.transform = `translateX(-${cardWidth}px)`;

            // 2. Une fois l'animation finie (500ms)
            setTimeout(() => {
                // On prend le premier élément et on le met à la fin (DOM Manipulation)
                track.appendChild(track.firstElementChild);
                
                // On coupe l'animation pour remettre le track à 0 instantanément
                track.style.transition = 'none';
                track.style.transform = 'translateX(0)';
                
                isTransitioning = false;
            }, 500); 
        });

        // --- BOUTON PRÉCÉDENT (DÉFILEMENT INFINI) ---
        prevButton.addEventListener('click', () => {
            if (isTransitioning) return;
            isTransitioning = true;

            const cardWidth = getCardWidth();

            // 1. On coupe l'animation pour préparer le mouvement
            track.style.transition = 'none';
            
            // 2. On prend le DERNIER élément et on le met au DÉBUT
            track.insertBefore(track.lastElementChild, track.firstElementChild);
            
            // 3. On décale le track instantanément vers la gauche pour cacher le changement
            track.style.transform = `translateX(-${cardWidth}px)`;

            // 4. Petite pause pour que le navigateur applique le changement précédent
            setTimeout(() => {
                // 5. On réactive l'animation et on glisse vers 0 (vers la droite)
                track.style.transition = 'transform 0.5s ease-in-out';
                track.style.transform = 'translateX(0)';
            }, 20);

            setTimeout(() => {
                isTransitioning = false;
            }, 520);
        });
    }
});