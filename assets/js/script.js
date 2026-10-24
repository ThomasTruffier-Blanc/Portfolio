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
        server: "assets/img/editorial/photo-1558494949-ef010cbdcc31.jpg",
        switch: "assets/img/editorial/photo-1544197150-b99a580bb7a8.jpg",
        code: "assets/img/editorial/photo-1515879218367-8466d910aaa4.jpg",
        telecom: "assets/img/editorial/photo-1518770660439-4636190af475.jpg",
        nc: "assets/img/editorial/photo-1710881710127-b648ef0b4dc5.jpg",
        cyber: "assets/img/editorial/photo-1550751827-4bd374c3f58b.jpg",
        maths: "assets/img/editorial/photo-1635070041078-e363dbe005cb.jpg",
        hackagou: "assets/img/hackagou-logo.svg",
        ncAerial: "assets/img/editorial/photo-1710881710127-b648ef0b4dc5.jpg",
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
                <img class="panel-image zoomable institution-logo" src="assets/img/iut-clermont-auvergne.png" alt="Logo officiel de l’IUT Clermont Auvergne" loading="lazy">
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
                <p>Mathématiques et Numérique et Sciences de l'Informatique, avec une première approche structurée de l'algorithmique, de Python, des bases de données et du web. Baccalauréat obtenu avec la mention Bien.</p>
                <h3>Apport pour le BUT RT</h3>
                <p>La NSI m'a donné des bases utiles pour comprendre les scripts, les services web et les notions de sécurité applicative abordées ensuite en formation.</p>
            `
        },
        "formation-outremer": {
            title: "Scolarité en Outre-mer",
            meta: "2015 - 2024",
            location: "Nouvelle-Calédonie et Polynésie",
            body: `
                <img class="panel-image zoomable" src="${images.nc}" alt="Paysage côtier en Nouvelle-Calédonie">
                <h3>Parcours</h3>
                <p>J'ai vécu plusieurs années en Nouvelle-Calédonie et en Polynésie avant de revenir en métropole. Ce parcours m'a habitué à changer d'environnement et à m'intégrer dans des contextes différents.</p>
                <h3>Apport personnel</h3>
                <p>Cette expérience me sert aujourd'hui dans le travail en groupe, l'adaptation aux nouvelles méthodes et la communication avec des profils variés.</p>
            `
        },
        "skill-network": {
            title: "Réseaux",
            meta: "TCP/IP, IPv4, Wireshark, Cisco, VLAN",
            body: `
                <img class="panel-image zoomable technical-capture" src="assets/img/sae24/topologie-cisco.png" alt="Topologie Cisco du projet SAE 24" loading="lazy">
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
        "skill-cyber": {
            title: "Cybersécurité",
            meta: "Kali Linux, Nmap, Metasploit, Burp Suite, Hydra, Wireshark",
            body: `
                <p>Cette rubrique rassemble des apprentissages différents : l'observation et la protection des échanges DNS, puis des essais encadrés sur une machine de laboratoire volontairement vulnérable. Les captures ci-dessous sont replacées dans leur contexte et ne représentent pas un même exercice.</p>
                ${accordion("Analyse et observation", `
                    <p>Je développe des bases d'analyse réseau et de sécurité à travers des travaux pratiques encadrés. J'apprends à observer les services exposés, à lire les échanges dans Wireshark et à confronter les résultats aux hypothèses de départ.</p>
                    <ul><li>Découverte et énumération avec Nmap.</li><li>Analyse de trafic et de protocoles avec Wireshark.</li><li>Notions de sécurité des services et des systèmes.</li></ul>
                `)}
                ${accordion("Tests en environnement isolé", `
                    <p>Le TD Kioptrix m'a permis de travailler dans une machine volontairement vulnérable et un cadre de laboratoire. J'y ai étudié le service Samba, testé un scénario avec Metasploit et vérifié les privilèges obtenus, en distinguant les tentatives infructueuses du résultat confirmé.</p>
                    <ul><li>Kali Linux et outils de test en TP.</li><li>Analyse d'un service SMB/Samba ancien.</li><li>Vérification des résultats et rédaction d'un compte rendu.</li></ul>
                `)}
                ${accordion("DNS et protection", `
                    <p>Mes travaux portent aussi sur les échanges DNS, les principes de DNSSEC et les mécanismes d'empoisonnement de cache. Une simulation documentée a produit un fichier PCAP hors ligne : elle n'a pas envoyé de réponses falsifiées au serveur DNS, ce qui m'a appris à vérifier précisément la portée d'un test avant d'en tirer une conclusion.</p>
                    <ul><li>Notions de DNSSEC et validation DNS.</li><li>Étude théorique du cache poisoning.</li><li>Lecture de traces DNS dans Wireshark.</li></ul>
                `)}
                <h3>Captures des travaux pratiques</h3>
                <p>Fais défiler les captures pour distinguer la validation DNSSEC du test Kioptrix en environnement isolé.</p>
                <div class="project-captures">
                    <figure><button class="project-capture-zoom" type="button" aria-label="Agrandir la capture DNSSEC"><img src="assets/img/dns/dnssec-dnsviz.png" alt="DNSViz montrant la chaîne d'authentification DNSSEC sécurisée du domaine .fr" loading="lazy"></button><figcaption><strong>DNSSEC · validation.</strong> DNSViz visualise la chaîne d'authentification sécurisée du domaine .fr.</figcaption></figure>
                    <figure><button class="project-capture-zoom" type="button" aria-label="Agrandir le résultat Kioptrix"><img src="assets/img/kioptrix/kioptrix-10-shell-root-confirmation.png" alt="Vérification des privilèges du shell dans la machine de laboratoire Kioptrix" loading="lazy"></button><figcaption><strong>Kioptrix · laboratoire.</strong> Vérification du résultat dans la machine volontairement vulnérable du TD.</figcaption></figure>
                </div>
            `
        },
        "skill-system": {
            title: "Systèmes",
            meta: "Linux, Windows, VirtualBox",
            body: `
                <img class="panel-image zoomable technical-capture" src="assets/img/sae24/windows-server.png" alt="Rôles Active Directory, DNS et DHCP dans Windows Server" loading="lazy">
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
                <img class="panel-image zoomable technical-capture" src="assets/img/sae24/xivo.png" alt="Tableau de bord XiVO et services de téléphonie IP" loading="lazy">
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
            meta: "Git, Packet Tracer, Metasploit, Burp Suite, Hydra",
            body: `
                <p>J'utilise ces outils dans des contextes différents : Git pour suivre les versions, Packet Tracer pour les topologies et les outils de cybersécurité pour des travaux pratiques encadrés. Chaque capture est accompagnée de ce qu'elle montre réellement.</p>
                ${accordion("Git et GitHub", `
                    <p>Je sais versionner un projet, suivre mes modifications et publier mon travail. GitHub est aussi un support pour présenter mes scripts, projets de formation et exercices techniques.</p>
                `)}
                ${accordion("Packet Tracer", `
                    <p>Packet Tracer me sert à simuler des topologies, vérifier des configurations et mieux comprendre la logique réseau avant de passer sur du matériel réel.</p>
                `)}
                ${accordion("Outils de cybersécurité en TP", `
                    <p>J'ai découvert Metasploit, Burp Suite et Hydra lors de travaux pratiques en environnement de laboratoire. Je les utilise comme outils d'observation et de test encadré, en vérifiant les résultats plutôt qu'en assimilant un lancement d'outil à une réussite.</p>
                `)}
                <h3>Captures des outils</h3>
                <p>Les images défilent dans leur ordre de présentation. Hydra montre le début d'un test sans succès confirmé ; Burp affiche les réponses d'un formulaire local.</p>
                <div class="project-captures">
                    <figure><button class="project-capture-zoom" type="button" aria-label="Agrandir la capture Metasploit"><img src="assets/img/kioptrix/kioptrix-08-payloads-linux.png" alt="Liste des payloads Metasploit disponibles pour le module Samba" loading="lazy"></button><figcaption><strong>Metasploit.</strong> Capture des options proposées dans le TD Kioptrix.</figcaption></figure>
                    <figure><button class="project-capture-zoom" type="button" aria-label="Agrandir la capture Hydra"><img src="assets/img/kioptrix/kioptrix-13-hydra-test-ssh.png" alt="Début d'un test Hydra sur le service SSH du laboratoire" loading="lazy"></button><figcaption><strong>Hydra.</strong> Début du test SSH; aucun succès n'est visible dans cet extrait.</figcaption></figure>
                    <figure><button class="project-capture-zoom" type="button" aria-label="Agrandir la capture Burp Suite"><img src="assets/img/burp/intruder-results.png" alt="Résultats de Burp Suite Intruder sur un formulaire de test local" loading="lazy"></button><figcaption><strong>Burp Suite Intruder.</strong> Les résultats affichés ne confirment pas de connexion.</figcaption></figure>
                </div>
                ${accordion("Méthode", `
                    <p>Je cherche à documenter davantage mes projets : contexte, objectif, étapes, outils utilisés et résultat. C'est ce qui rend un projet étudiant plus lisible pour un recruteur technique.</p>
                `)}
            `
        },
        "skill-qualities": {
            title: "Qualités professionnelles",
            meta: "Méthode, communication, autonomie",
            body: `
                <img class="panel-image zoomable" src="assets/img/editorial/photo-1517245386807-bb43f82c33c4.jpg" alt="Réunion professionnelle">
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
                    <li>Structuration du site en plusieurs pages : accueil, projets, comp&eacute;tences, passions et contact.</li>
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
        "project-sae24": {
            title: "SAE 24 · Projet intégratif",
            meta: "Lex & Partners · BUT Réseaux & Télécommunications",
            body: `
                <h4>Contexte</h4>
                <p>Projet de groupe réalisé dans le cadre de la SAE 24 : concevoir et déployer l'infrastructure informatique de Lex &amp; Partners, un cabinet d'avocats. Le scénario associe les besoins des utilisateurs, l'administration des serveurs et la protection des ressources internes.</p>
                <h4>Objectif</h4>
                <p>Relier les postes, les serveurs et les services dans une architecture cohérente : accès Internet, Wi-Fi, gestion centralisée des comptes, téléphonie IP et supervision. La segmentation du réseau permet de séparer les usages et de contrôler les communications entre les différentes zones.</p>
                <h4>Réalisations du groupe</h4>
                <ul>
                    <li>Réseau Cisco : VLAN, liaisons trunk, routage inter-VLAN, relais DHCP et traduction d'adresses.</li>
                    <li>Services Windows Server : Active Directory, DNS et DHCP ; services Linux et hébergement web.</li>
                    <li>Téléphonie IP avec XiVO, configuration des lignes SIP et intégration des terminaux.</li>
                    <li>Supervision des hôtes avec Zabbix et centralisation des journaux avec Graylog.</li>
                    <li>Application web PHP/MySQL et script Bash de détection des échecs de connexion, avec envoi d'une alerte vers Graylog.</li>
                    <li>Compte rendu technique illustré : configurations, choix d'architecture et vérifications.</li>
                </ul>
                <h4>Captures du projet</h4>
                <div class="project-captures">
                    <figure>
                        <button class="project-capture-zoom" type="button" aria-label="Agrandir la topologie Cisco">
                            <img src="assets/img/sae24/topologie-cisco.png" alt="Schéma Cisco avec quatre VLAN, serveurs Windows et Linux, téléphones IP, point d'accès et liaison Internet" loading="lazy">
                        </button>
                        <figcaption><strong>Architecture réseau.</strong> La topologie relie les zones serveurs, utilisateurs et Wi-Fi aux équipements de routage et de sécurité.</figcaption>
                    </figure>
                    <figure>
                        <button class="project-capture-zoom" type="button" aria-label="Agrandir la capture Zabbix">
                            <img src="assets/img/sae24/supervision-zabbix.png" alt="Interface Zabbix présentant les quinze hôtes configurés et leurs indicateurs de disponibilité" loading="lazy">
                        </button>
                        <figcaption><strong>Supervision Zabbix.</strong> Quinze hôtes sont configurés pour suivre les serveurs, les services et les équipements réseau. La capture distingue les états de disponibilité des agents et de SNMP.</figcaption>
                    </figure>
                    <figure>
                        <button class="project-capture-zoom" type="button" aria-label="Agrandir la capture Graylog">
                            <img src="assets/img/sae24/alerte-graylog.png" alt="Recherche Graylog montrant une alerte après cinq tentatives de connexion échouées" loading="lazy">
                        </button>
                        <figcaption><strong>Alerte de sécurité Graylog.</strong> Un événement confirme la détection de cinq tentatives de connexion échouées sur l'application web.</figcaption>
                    </figure>
                </div>
                <h4>Résultats et acquis</h4>
                <p>Le compte rendu rassemble l'architecture, les configurations et les validations des services. Les captures montrent les hôtes ajoutés à Zabbix et la réception d'une alerte applicative dans Graylog. Ce projet met en relation l'administration réseau, les systèmes, le développement web et l'analyse des événements de sécurité.</p>
            `
        },
        "project-kioptrix": {
            title: "Kioptrix · Audit en laboratoire",
            meta: "Cybersécurité · Kali Linux, Nmap, Metasploit, Hydra, Wireshark",
            body: `
                <h4>Contexte et cadre</h4>
                <p>Travail pratique encadré sur Kioptrix, une machine volontairement vulnérable fournie pour l'apprentissage. Les manipulations sont réalisées dans le laboratoire du TD et ne concernent aucun système tiers.</p>
                <h4>Reconnaissance et analyse</h4>
                <ul>
                    <li>Énumération des services puis identification de SMB/Samba sur le port 139.</li>
                    <li>Relevé de la bannière Samba 2.2.1a et recherche de pistes adaptées avec Metasploit.</li>
                    <li>Observation des échanges TCP/SMB et des tentatives dans Wireshark.</li>
                </ul>
                <h4>Tests et résultats</h4>
                <p>Plusieurs premières tentatives trans2open ont échoué ou n'ont pas fourni de session stable. Une capture ultérieure confirme l'ouverture d'un shell dans le lab et la commande <code>id</code> retourne <code>uid=0(root)</code>. Le compte rendu conserve cette distinction afin de ne pas présenter les essais intermédiaires comme des réussites.</p>
                <h4>Captures du TD Kioptrix</h4>
                <div class="project-captures">
                    <figure><button class="project-capture-zoom" type="button" aria-label="Agrandir la capture du module SMB"><img src="assets/img/kioptrix/kioptrix-01-module-smb-version.svg" alt="Sélection du module Metasploit pour identifier la version SMB" loading="lazy"></button><figcaption><strong>Préparation du scan SMB.</strong> Sélection du module auxiliaire de détection.</figcaption></figure>
                    <figure><button class="project-capture-zoom" type="button" aria-label="Agrandir le résultat du scan SMB"><img src="assets/img/kioptrix/kioptrix-02.svg" alt="Résultat de détection du service Samba sur la machine Kioptrix" loading="lazy"></button><figcaption><strong>Identification du service.</strong> Le résultat du scan révèle la version Samba observée dans le laboratoire.</figcaption></figure>
                    <figure><button class="project-capture-zoom" type="button" aria-label="Agrandir les pistes trans2open"><img src="assets/img/kioptrix/kioptrix-03.svg" alt="Résultats de recherche Metasploit pour trans2open" loading="lazy"></button><figcaption><strong>Recherche de pistes.</strong> Comparaison des modules disponibles avant les essais.</figcaption></figure>
                    <figure><button class="project-capture-zoom" type="button" aria-label="Agrandir la liste des payloads"><img src="assets/img/kioptrix/kioptrix-08-payloads-linux.png" alt="Liste des payloads proposés par Metasploit pour le module Samba" loading="lazy"></button><figcaption><strong>Options disponibles.</strong> La liste aide à comparer les payloads compatibles; elle ne prouve pas leur réussite sur la cible.</figcaption></figure>
                    <figure><button class="project-capture-zoom" type="button" aria-label="Agrandir la sélection du scanner SSH Metasploit"><img src="assets/img/kioptrix/kioptrix-14-metasploit-ssh-login-options.png" alt="Sélection du scanner SSH ssh_login dans Metasploit" loading="lazy"></button><figcaption><strong>Metasploit et SSH.</strong> Sélection du module de vérification SSH dans le cadre du TD.</figcaption></figure>
                    <figure><button class="project-capture-zoom" type="button" aria-label="Agrandir la vérification du shell"><img src="assets/img/kioptrix/kioptrix-10-shell-root-confirmation.png" alt="Vérification des privilèges du shell dans la machine de laboratoire Kioptrix" loading="lazy"></button><figcaption><strong>Résultat confirmé dans le lab.</strong> La sortie de <code>id</code> affiche l'UID root.</figcaption></figure>
                </div>
                <h4>Hydra : test SSH</h4>
                <p>La capture Hydra montre le démarrage d'un test sur le service SSH du laboratoire et quelques essais parmi les 1 021 prévus. Aucun succès n'est visible dans cet extrait : le résultat affiché ne permet donc pas de conclure qu'un accès a été obtenu avec Hydra.</p>
                <div class="project-captures">
                    <figure><button class="project-capture-zoom" type="button" aria-label="Agrandir la capture du test Hydra"><img src="assets/img/kioptrix/kioptrix-13-hydra-test-ssh.png" alt="Début du test Hydra sur le service SSH de la machine Kioptrix en laboratoire" loading="lazy"></button><figcaption><strong>Début des essais.</strong> La capture s'arrête avant tout résultat positif.</figcaption></figure>
                </div>
                <h4>Compétences mobilisées</h4>
                <p>Préparer un environnement isolé, interpréter des résultats d'outils, examiner des paquets, vérifier une hypothèse et documenter clairement les limites d'une expérimentation.</p>
            `
        },
        "project-dns": {
            title: "DNS, DNSSEC et cache DNS",
            meta: "Réseaux · Analyse et sécurité DNS",
            body: `
                <h4>Contexte</h4>
                <p>Travail pratique distinct du TD Kioptrix, consacré au fonctionnement du DNS, à des notions de DNSSEC et à l'étude du cache DNS.</p>
                <h4>Analyse DNS</h4>
                <p>Les commandes <code>dig</code> servent à interroger le résolveur du TP et à examiner les réponses obtenues. Cette observation permet de comparer une réponse valide avec un nom inexistant et de lire les informations affichées par l'outil.</p>
                <h4>DNSSEC et cache poisoning</h4>
                <p>J'ai étudié le rôle de DNSSEC dans l'authentification des données DNS ainsi que le principe du cache poisoning. La capture de simulation présentée ici montre des réponses artificielles enregistrées dans un fichier PCAP local ; elles n'ont pas été envoyées à BIND9. Il s'agit donc d'une simulation et non d'un empoisonnement réussi du cache.</p>
                <h4>Captures du TP DNS</h4>
                <div class="project-captures">
                    <figure><button class="project-capture-zoom" type="button" aria-label="Agrandir la vérification DNS"><img src="assets/img/dns/dns-verification.png" alt="Terminal montrant les vérifications DNS avec dig" loading="lazy"></button><figcaption><strong>Interrogation DNS.</strong> Vérification d'une réponse et d'un nom inexistant avec <code>dig</code>.</figcaption></figure>
                    <figure><button class="project-capture-zoom" type="button" aria-label="Agrandir la simulation du cache DNS"><img src="assets/img/dns/dns-cache-simulation.png" alt="Sortie du TP montrant la génération locale d'un PCAP de simulation DNS" loading="lazy"></button><figcaption><strong>Simulation de cache DNS.</strong> Les réponses de test sont enregistrées dans un PCAP, sans envoi au serveur.</figcaption></figure>
                </div>
                <h4>Acquis</h4>
                <p>Ce TP m'a appris à distinguer l'analyse de réponses DNS, une simulation hors réseau et une attaque réellement exécutée, ainsi qu'à vérifier les conclusions à partir des traces disponibles.</p>
            `
        },
        "project-burp": {
            title: "Burp Suite · Intruder",
            meta: "Cybersécurité · Analyse d'un formulaire de test",
            body: `
                <h4>Contexte</h4>
                <p>Exercice distinct du TD Kioptrix et du TP DNS, consacré à la prise en main de Burp Suite Intruder sur une cible affichée comme locale (<code>localhost:80</code>).</p>
                <h4>Travail réalisé</h4>
                <p>La capture montre les résultats d'une série de requêtes utilisant des valeurs de test pour deux champs. Elle sert à repérer et comparer les réponses du formulaire dans l'interface Burp Suite.</p>
                <h4>Résultat visible</h4>
                <p>Les codes affichés sont à <code>0</code> et aucune réponse HTTP exploitable n'est visible dans le tableau. Cette capture ne démontre donc pas une authentification réussie ni la validation d'identifiants.</p>
                <h4>Capture Burp Suite</h4>
                <p>La capture supplémentaire issue de la fin du compte rendu montre le panneau de configuration d'une liste de test. Le cadrage se limite à ce panneau ; il ne s'agit pas d'un résultat d'authentification.</p>
                <div class="project-captures">
                    <figure><button class="project-capture-zoom" type="button" aria-label="Agrandir les résultats Burp Suite Intruder"><img src="assets/img/burp/intruder-results.png" alt="Tableau des résultats Burp Suite Intruder pour une cible locale" loading="lazy"></button><figcaption><strong>Résultats Intruder.</strong> Les réponses affichées ne confirment aucune connexion réussie.</figcaption></figure>
                    <figure><button class="project-capture-zoom" type="button" aria-label="Agrandir la liste de payloads Burp"><img src="assets/img/burp/burp-payloads-crop.png" alt="Panneau Burp Suite présentant une liste de six payloads de test" loading="lazy"></button><figcaption><strong>Liste de payloads.</strong> Une liste de six valeurs est configurée pour la deuxième position ; cette vue ne prouve pas qu'une requête a abouti.</figcaption></figure>
                </div>
            `
        },
        "project-cvss": {
            title: "Calculateur de criticité CVSS",
            meta: "Cybersécurité · Excel · CVSS 3.0 et 3.1",
            body: `
                <h4>Contexte</h4>
                <p>J'ai conçu un classeur Excel pour structurer l'évaluation de la criticité d'une vulnérabilité à partir des métriques CVSS. L'outil propose les versions 3.0 et 3.1 et rassemble les critères utiles dans une feuille de calcul guidée.</p>
                <h4>Fonctionnement</h4>
                <p>Les listes de choix permettent de renseigner les métriques de base, temporelles, les besoins de sécurité et les métriques environnementales modifiées. Une feuille d'aide rappelle la signification des critères et les coefficients associés. Les formules calculent les scores et leur niveau de criticité au fil des sélections.</p>
                <p>Le classeur affiche séparément le score de base, le score temporel et le score environnemental, avec le détail des étapes intermédiaires. Cela facilite la comparaison d'une évaluation générique avec un contexte d'utilisation particulier.</p>
                <h4>Aperçu du calculateur</h4>
                <div class="project-captures">
                    <figure><button class="project-capture-zoom" type="button" aria-label="Agrandir la capture du calculateur CVSS"><img src="assets/img/cvss/cvss-calculator.png" alt="Feuille Excel du calculateur CVSS montrant les critères, coefficients et scores calculés" loading="lazy"></button><figcaption><strong>Vue de la feuille de calcul.</strong> Les scores affichés correspondent aux valeurs d'exemple présentes dans le classeur, et non à l'analyse d'une vulnérabilité réelle.</figcaption></figure>
                </div>
                <h4>Fichier Excel</h4>
                <p>Le classeur peut être ouvert et adapté pour saisir les métriques d'un cas étudié. Les résultats dépendent des choix renseignés et doivent être interprétés avec le contexte de la vulnérabilité.</p>
                <p><a class="calculator-download" href="assets/files/Calculateur_criticite_CVSS.xlsx" download><span class="calculator-download-icon"><i class="fa-solid fa-file-excel" aria-hidden="true"></i></span><span class="calculator-download-copy"><strong>Télécharger le calculateur</strong><small>Classeur Excel · .xlsx</small></span><i class="fa-solid fa-arrow-down-to-line calculator-download-arrow" aria-hidden="true"></i></a></p>
            `
        },
        "project-sae23": {
            title: "CyberSkills – Audit de sécurité",
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
            title: "MathLab",
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
        initializeCaptureGalleries();

        sidePanel.classList.add("active");
        sidePanel.setAttribute("aria-hidden", "false");
        overlay.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function initializeCaptureGalleries() {
        panelBody.querySelectorAll(".project-captures").forEach((track) => {
            const figures = Array.from(track.querySelectorAll(":scope > figure"));
            if (figures.length < 2) return;

            const gallery = document.createElement("section");
            gallery.className = "capture-gallery";
            gallery.setAttribute("role", "region");
            gallery.setAttribute("aria-label", "Galerie de captures");
            track.parentNode.insertBefore(gallery, track);
            gallery.appendChild(track);
            track.classList.add("capture-track");
            track.setAttribute("tabindex", "0");
            track.setAttribute("aria-label", "Captures défilantes");

            const controls = document.createElement("div");
            controls.className = "capture-gallery-controls";
            const previous = document.createElement("button");
            previous.type = "button";
            previous.className = "capture-gallery-arrow";
            previous.setAttribute("aria-label", "Capture précédente");
            previous.title = "Capture précédente";
            previous.innerHTML = '<i class="fa-solid fa-arrow-left" aria-hidden="true"></i>';
            const status = document.createElement("span");
            status.className = "capture-gallery-status";
            status.setAttribute("aria-live", "polite");
            const next = document.createElement("button");
            next.type = "button";
            next.className = "capture-gallery-arrow";
            next.setAttribute("aria-label", "Capture suivante");
            next.title = "Capture suivante";
            next.innerHTML = '<i class="fa-solid fa-arrow-right" aria-hidden="true"></i>';
            controls.append(previous, status, next);

            const menu = document.createElement("nav");
            menu.className = "capture-gallery-menu";
            menu.setAttribute("aria-label", "Choisir une capture");
            const menuButtons = figures.map((figure, index) => {
                const button = document.createElement("button");
                button.type = "button";
                button.textContent = figure.querySelector("figcaption strong")?.textContent.trim() || `Capture ${index + 1}`;
                button.addEventListener("click", () => showSlide(index));
                menu.appendChild(button);
                return button;
            });

            let activeIndex = 0;
            function showSlide(index) {
                activeIndex = Math.max(0, Math.min(index, figures.length - 1));
                track.scrollTo({ left: activeIndex * track.clientWidth, behavior: "smooth" });
                updateControls();
            }
            function updateControls() {
                status.textContent = `${activeIndex + 1} / ${figures.length}`;
                previous.disabled = activeIndex === 0;
                next.disabled = activeIndex === figures.length - 1;
                menuButtons.forEach((button, index) => {
                    if (index === activeIndex) button.setAttribute("aria-current", "true");
                    else button.removeAttribute("aria-current");
                });
            }
            previous.addEventListener("click", () => showSlide(activeIndex - 1));
            next.addEventListener("click", () => showSlide(activeIndex + 1));
            track.addEventListener("scroll", () => {
                window.requestAnimationFrame(() => {
                    activeIndex = Math.max(0, Math.min(figures.length - 1, Math.round(track.scrollLeft / Math.max(track.clientWidth, 1))));
                    updateControls();
                });
            }, { passive: true });
            gallery.append(controls, menu);
            updateControls();
        });
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
        const captureButton = event.target.closest?.(".project-capture-zoom");
        const target = captureButton ? captureButton.querySelector("img") : event.target;
        if (!(target instanceof HTMLImageElement)) return;
        if (!captureButton && !target.matches("[data-lightbox], .zoomable")) return;

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
