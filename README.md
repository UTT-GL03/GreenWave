# GreenWave

Un service pour rendre le streaming musicale écoresponsable.

## Choix du sujet

Notre binôme cumule a lui seul 15 heures d'écoute hebdomadaire. Conscient de l'impact écologique du streaming de manière générale, nous nous sentons concernés et souhaitons réduire cet impact.  
Qui plus est, en 2024 46% des français (31,1 millions, source : [Médiamétrie](https://www.mediametrie.fr/fr/musique-et-medias-un-engouement-tres-fort-du-public-pour-une-offre-multiple)) écoutent de la musique via une plateforme de streaming au cours du mois. Ce qui prouve le fort interêt qu'a la population dans ce service, cette dernière a d'ailleurs fait augmenter cette pratique de 30% au cours des 5 dernières années (source [Médiamétrie](https://www.mediametrie.fr/fr/musique-et-medias-un-engouement-tres-fort-du-public-pour-une-offre-multiple))

## Utilité sociale

La musique est un bien culturel essentiel et son accessibilité élargie constitue un bénéfice considérable. Le streaming permet d’y accéder à moindre coût tout en donnant à chacun la possibilité de découvrir une immense diversité musicale. Au-delà de cet accès, la musique agit directement sur la santé et le bien-être, elle stimule la libération d’endorphines, réduit le stress et l’anxiété, et favorise une sensation générale d’équilibre (source : [CNARCL](https://www.cnracl.retraites.fr/retraite/climats/societe/les-bienfaits-de-la-musique)). Elle a également un rôle éducatif et créatif, puisqu’elle stimule l’imagination. Au niveau territoriale, la dimension de localisation pourrait même permettre de mettre en lumière des artistes proches de l’auditeur, renforçant ainsi le lien avec la scène locale.

Aujourd'hui, le secteur de la musique réalise environ quatre fois plus de chiffre d'affaires avec le streaming qu'avec les CD, vinyles, DVD/Blu-ray et cassettes réunis (source : [Statista](https://fr.statista.com/infographie/31877/evolution-chiffre-musique-enregistree-par-support-physique-streaming/)), qui eux nécessitent plastiques, métaux, emballages et transport. Cette nouvelle pratique peut donc être vu comme une forme de progrès écologique. Cependant, cette utilité sociale est à mettre en balance avec les risques liés à l’effet rebond. L’accès illimité encourage une hausse du temps d’écoute et attire un public plus large que par le passé. Par ailleurs, l’évolution vers une qualité sonore toujours plus élevée, voire vers le visionnage de clips vidéo, augmente l’empreinte carbone de ce service.

## Effets de la numérisation

La numérisation de la musique a profondément transformé les usages. Elle a entraîné une substitution partielle des supports physiques, limitant ainsi les impacts liés à leur production matérielle. Mais elle a également favorisé l’émergence de nouveaux comportements tels que l’écoute continue et les playlists automatisées, qui conduisent à une consommation plus importante qu’à l’époque des CD et vinyles.

Ecologiquement, la comparaison entre les deux modèles reste complexe car elle dépend de facteurs. La production d’un CD émet environ 2,1 kg de CO² (source : [La Felin](https://fede-felin.org/2023/09/19/fiche-pratique-les-bonnes-pratiques-pour-diminuer-limpact-environnemental-de-son-label/?utm_source=chatgpt.com)). Pour le streaming audio c'est plus compliqué car peu de chiffre sont présents, les études estiment l'émission d'une heure de streaming vidéo a 55 g de CO² (Source : [ADEME](https://infos.ademe.fr/magazine-fevrier-2023/faits-et-chiffres/support-physique-vs-numerique-limpact-environnemental-des-services-culturels/?utm_source=chatgpt.com)). Le streaming audio consommerait jusqu'a 20 fois moins donc environ 2,5g de CO² pour une heure d'écoute.
Donc écouté une seule fois, un album en streaming peut donc apparaître comme plus responsable. Cependant, dès lors qu’il est réécouté régulièrement, le streaming dépasse rapidement l’impact de son équivalent physique. L’empreinte vient principalement des centres de données et des réseaux qui assurent la transmission continue des flux. Ce phénomène est d’autant plus marqué lorsque la musique est consommée sous forme de vidéo en ligne, comme sur YouTube, qui représente aujourd’hui la plus grande part de la bande passante musicale.

Des solutions existent pour réduire ces impacts, l’usage du téléchargement et du stockage local par exemple, puisqu’un morceau téléchargé une fois puis réécouté plusieurs fois ne consomme plus de bande passante.

## Scénario d'usage et impacts

Ce service de musique peut être consulté plusieurs fois par jour ou en continu sur certaines périodes par les utilisteurs.
C'est ainsi que nous avons conçus deux scénarios, un où le lecteur sélectionne un album ou une playlist, l'effet est le même, une page contenant plusieurs titres, il lance cette playlist, chargant ainsi un premier titre. Le deuxième scénario consiste a rechercher un titre à l'aide de la barre de recherche, l'objectif et de mesurer l'impact de la recherche dans une base de données.

De plus, dans nos scénario, nous effectuons le geste deux fois en repassant par la page d'accueil pour mesurer l'optimisation de la mise en cache, vérifier que l'on ne re-télécharge pas certaines informations déjà consulté.

## Scénario : "Lance des playlists/musiques depuis l'accueil"

1. L'utilisateur se rend sur la page d'accueil, sélectionne un album à écouter et clique dessus
2. Il lance l'écoute de cet album
3. Il revient sur la page d'accueil et consulte pour trouver un autre album
4. Il clique sur un album et le lance

## Scénario : "Recherche une musique et la lance"

1. L'utilisateur se rend sur la page d'accueil, recherche une musique avec la barre de recherche
2. Il defile le résultat des rechecheres et sélectionne la musique souhaitée et lance la musique
3. Il revient sur la page d'accueil et recherche une autre musique
4. Il lance la musique recherchée

## Impact de l'exécution des scénarios auprès de différents services concurrents

Il existe un moyen d'estimer l'impact numérique d'un site web, cela s'appelle l'ecoIndex, il calcule un score (de A à G source: [EcoIndex](<https://www.ecoindex.fr/resultat/?id=3a4a8633-f3ab-4841-ad50-086c7fd1a255#score-details](https://www.ecoindex.fr/)>).
Ce score est calculé en fonction de plusieurs facteurs comme :

- Le nombre d'appel au serveur (requêtes)
- La quantité d'information téléchargée
- La compléxité et l'optimisation du site

Nous avons réaliser une analyse des plateformes de nos concurents et voici les résultats:

| Service       | Score (sur 100) | Classe |                                                  Détail des mesures |
| :------------ | --------------: | -----: | ------------------------------------------------------------------: |
| Spotify       |              34 |   E 🟧 |      [...](./benchmark/Spotify/ecoindex-environmental-statement.md) |
| Apple Music   |              34 |   E 🟧 |   [...](./benchmark/AppleMusic/ecoindex-environmental-statement.md) |
| Youtube Music |              88 |   A 🟩 | [...](./benchmark/YoutubeMusic/ecoindex-environmental-statement.md) |

Tab.1 : Mesure de l'EcoIndex moyen de services de streaming musicaux.

Le spectre des notes est très varié de A à E, pour les moins bon site : [Spotify](https://open.spotify.com/) & [](https://music.apple.com/fr/new) nous constatons un grand nombre de contenu disponible des la page d'accueil. De plus, la page se charge complètement sans que ce soit nécessaire, l'utilisateur ne la défilant pas entière systématiquement. La résolution des pochettes d'album et de musique peut aussi être de trop grande qualité pour l'usage que nous en avons. Le site affiche aussi constament les playlists enregistrés de l'utilisateur ce qui ajoute autant de requête pour une image que de playlist enregistrée par l'utilisateur.
A côté nous avons [Youtube Music](https://music.youtube.com/) qui s'impose en bon élève avec un bon score, ce résultat peut s'expliquer par un faible chargement de contenu à l'ouverture de la page d'accueil. Contrairement à spotify, YT Music, pour la recherche, envoie une requête après que l'utilisateur ai appuyé sur "entrée" et n'envoie pas une requete à chaque nouvelle lettre entrée.

Ces comparaisons montrent qu'il existe des moyens d'obtenir un streaming quasi instantannée tout en réduisant au maximum les ressources utilisées.

## Modèle économique

Pour compléter notre analyse, il est important de comprendre les modèles économiques de nos concurrents. Certains revenus peuvent provoquer un impact fort sur l'environnement.

| Service       | Compte gratuit                                                                                           | Abonné                                                                                                                                                                                                                     | Revenu                                                                                                                                                                                                                                                  |
| :------------ | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Spotify       | <ul><li>Musique avec publicités (Régie interne)</li></ul>                                                | <ul><li>Musique sans publicités</li><li>Téléchargement pour mode hors connexion</li><li>Choisir l'ordre des titres</li><li>Qualité sonore supérieure</li></ul>                                                             | <ul><li>Revenu publicitaire (12%)</li><li>Revenu abonnement (88%)</li><li>[Source](https://pswd.fr/modele-economique-spotify/)</li></ul>                                                                                                                |
| Apple Music   | <ul><li>Écoute d'extrait (uniquement)</li></ul>                                                          | <ul><li>Musique sans publicités</li><li>Téléchargement pour mode hors connexion</li><li>Choisir l'ordre des titres</li><li>Qualité sonore supérieure</li><li>Apple TV+</li></ul>                                           | <ul><li>Revenu publicitaire (55%)</li><li>Revenu abonnement et autres (45%)</li><li>[Source](https://www.latribune.fr/technos-medias/internet/avec-ses-80-millions-d-abonnes-payants-youtube-veut-conquerir-l-industrie-musicale-940202.html)</li></ul> |
| Youtube Music | <ul><li>Musique avec publicités vidéo/audio (Régie interne)</li><li>Choisir l'ordre des titres</li></ul> | <ul><li>Musique sans publicités</li><li>Téléchargement pour mode hors connexion</li><li>Possibilité de mettre l'application en arrière plan ou éteindre le téléphone</li><li>Youtube "classique" sans publicités</li></ul> | <ul><li>Revenu abonnement et autres (100%)</li><li>[Source](https://pswd.fr/modele-economique-youtube/)</li></ul>                                                                                                                                       |

Tab2. Modèles économiques des leaders du streaming musical

| Source de revenu |                    Montant unitaire | Quantité pour financer un salaire [[1](#note-salaire)] | Quantité pour financer l'infrastructure [[2](#note-infra)] | Spotify | Apple Music | Youtube Music | GreenWave |
| :--------------- | ----------------------------------: | -----------------------------------------------------: | ---------------------------------------------------------: | ------: | ----------: | ------------: | --------: |
| Abonnement       |       11,5€ [[3](#note-abonnement)] |                                                    324 |                                                      2 916 |      ✔️ |          ✔️ |            ✔️ |        ✔️ |
| Publicité        | 0.01€ (en moyenne) [[4](#note-cpm)] |                                                370 300 |                                                  3 500 000 |      ✔️ |          ❌ |            ✔️ |        ✔️ |
| Token            |               5€ [[5](#note-token)] |                                                    746 |                                                      7 000 |      ❌ |          ❌ |            ❌ |        ✔️ |

Tab3. Source de revenu possible du service GreenWave 

#### Notes

- <a name="note-salaire"></a>**1 :** Coût d'un salaire pour l'employeur sur la base d'un salaire médiant 3730€ [Source](https://mon-entreprise.urssaf.fr/simulateurs/salaire-brut-net)
- <a name="note-infra"></a>**2 :** Estimation grossière du coût d'une infrastructure au mois ~35k€ [Source](https://yeeply.com/fr/combien-ca-coute/plateforme-streaming/)
- <a name="note-abonnement"></a>**3 :** Basé sur l'abonnement classique de Spotify (12,14€), Apple Music (10,99€) et YouTube Music (10,99€)
- <a name="note-cpm"></a>**4 :** Revenu moyen pour 1000 vues en moyenne entre 12 et 25€ [Source](https://www.ekole.fr/blog/gagnez-en-notoriete-aupres-des-jeunes-grace-a-la-publicite-sur-spotify)
- <a name="note-token"></a>**5 :** Idée de tokenisation de diffusion et rediffusion de concert live (captation et diffusion payante)

Ici deux types de modèles ressortent, un gratuit et un payant, Apple Music décide de ne pas donner d'accès aux utilisateurs non abonnés rayant ainsi les publicités de ses offres. Cependant Youtube Music et Spotify ont une version gratuite, réduisant drastiquement les fonctionnalités, poussant ainsi l'utilisateur à cotiser pour la version "premium".

Nous avons donc des services similaires qui cherchent à se différencier de part leurs fonctionnalités et leur "package". Par exemple, Apple Music propose Apple TV+ dans son abonnement, ce qui constitue un avantage pour l'utilisateur intéressé par cette offre.
De par leur essence, les sites de streaming musical sont des produits de substitution les uns des autres, la musique reste la même quelque soit le distributeur. Comme dit avant les services doivent trouver des moyens de se différencier que ce soit sur le prix pour devenir avantageux ou sur les fonctionnalités.

L’analyse de l’offre des plateformes de streaming nous a permis d’identifier les principales sources de revenus couramment utilisées (voir Tab. 2). En les confrontant à un bref état de l’art (voir Tab. 3), nous avons pu établir que :

1. Bien que la proportion d'utilisateurs abonnés soit plus faible que celle des non-abonnés, ils représentent une très grande majorité des revenus ;
2. Le revenu des publicités est intéressant car nous parlons de publicité auditive (vendue plus chère que la publicité visuelle statique) ;
3. Ainsi nous pensons que ces deux moyens de revenu nous semblent corrects, n'ayant pas d'impacts environnementaux pour les abonnements et faibles pour les publicités car utilisant la même fonctionnalité que l'objectif principal (streaming audio) ;
4. Nous pouvons imaginer ajouter un revenu, le token, en proposant des contenus bonus et exclusifs comme de la diffusion en direct de concerts ;

Par conséquent, pour limiter notre impact écologique, nous pensons à :

- privilégier un maximum les abonnements car ayant un impact environnemental plus faible de prime abord (en excluant un potentiel effet rebond),
- avoir une régie interne pour compléter les revenus, tout en faisant attention aux publicités diffusées (en accord avec nos valeurs),
- compléter les revenus avec des contenus exclusifs accessibles via un système de token.

## Ressource et maquettage du service

Après avoir analysé les impacts environnementaux et les différents scénarios de notre service, nous sommes en mesure de concevoir des maquettes et un échantillon de données d'exemple.

Les ressources possédants une représentation sur notre service sont de 5 types:

- La page d'accueil qui sera le point de chute de tout visiteur (ayant pour URI `/`)
  
  <img src="./docs/mockup/homepage.png" width="500" alt="Maquette de la page d'accueil" />
  
  **Fig. 1** : Maquette de la page d'accueil
  
- Une recherche de titre ou d'album redirigera vers un URI de type `/search?q=music+title`
  
  <img src="./docs/mockup/searchpage.png" width="500" alt="Maquette de la page des résultats d'une recherche" />
  
  **Fig. 2** : Maquette de la page des résultats d'une recherche
  
- Les albums et playlist sont des regroupement de musiques ils auront pour URI `/album?list={id}` et `/playlist?list={id}`
  
  <img src="./docs/mockup/listpage.png" width="500" alt="Maquette de la page d'une liste de titres" />
  
  **Fig. 3** : Maquette de la page d'une liste de titres
  
- Les musiques seront de type `/track?listen={id}`
  
  <img src="./docs/mockup/trackpage.png" width="500" alt="Maquette de la page d'un titres" />
  
  **Fig. 4** : Maquette de la page d'un titres
  
- Les artistes seront de type `/artist?profil={id}`

Pour avoir un site rapide et compact nous allons limiter le nombre de titre disponible à une vingtaine. Cela permettra de ne pas héberger un trop lourd paquet de données.
De plus, pour ne pas violer les droits d'auteurs des différents label musicaux nous avons créer un échantillon de données à l'aide de dummy.json [générateur](./frontend/sample_data.hbs) => [résultat](./frontend/sample_data.json).

Le modèle de données comprend deux grand type d'item, les `music` et les `list` (album/playlist), ces item possèdent :

- `id`
- `title`
- `artist`
- `picture`
- etc...

## Prototype n°1 : Fonctionnalités pour le scénario prioritaire avec données chargées de manière statique
### Objectif
Cette première version du prototype a pour but de valider le scénario prioritaire :  
> « Lance des playlists/musiques depuis l'accueil »

Les données sont encore chargées de manière statique, et seules les fonctionnalités nécessaires à ce scénario ont été implémentées.

### Page d'acceuil

La page d'acceuil affiche des musiques aléatoires à partir d’un échantillon de données statiques, sous une forme proche de la maquette initiale.

Nous utilisons actuellement un framework CSS minimaliste : [PicoCSS](https://picocss.com/).  
Son empreinte est faible, ce qui en fait un bon candidat pour le prototype.  
Une évaluation ultérieure permettra de déterminer si l’adoption d’un framework plus complet (comme Bootstrap) est acceptable d’un point de vue environnemental.

### Choix de conception
- Choix d'image de basse résolutions pour les pochettes de musiques, bien que les photos sont demandantes en ressources, les pochettes d'album font parties de leur identité
- Tendre vers le minimaliste en affichant le moins de données possible 


### Évaluation de l’impact environnemental du frontend

Même si les données ne sont pas encore chargées dynamiquement, nous avons pu mesurer l’impact du rendu des données statiques et de la pile technique actuelle (React, PicoCSS, DayJS).

Les résultats montrent déjà un impact très faible, notamment grâce à la minification et à la concaténation automatique du code et des feuilles de style en mode pré-production.

| Mode | EcoIndex | Performance | Accessibilité | Bonnes pratiques | Taille du DOM | Requêtes | Taille de la page (ko)
|------|----------|-------------|---------------|------------------|---------------|----------|-----------------------|
| Développement | 79 B 🟠 | 58 | 91 | 96 | 130 | 31 | 3.1
| Pré-production | 91 A 🟢 | 100 | 91 | 96 | 123 | 6 | 0.7

**Tab.4** : Évaluation de l’impact du prototype de la page d’accueil

<img src="./docs/screenshot/Mainpage.png" width="500" alt="Capture d'écran de la page d'acceuil" />

**Fig.5**: Prototype de la page d'une musique.

### Pages d'un titre de musique

Les pages des musiques ont pour HTTP-URI `/{id-music}`.
Nous implémentons maintenant la page des musiques, pour cela nous nous bason le plus fidèlement à notre maquette avec la pochette de la musique avec ses informations disposées succintement.

<img src="./docs/screenshot/Musicpage.png" width="500" alt="Capture d'écran de la page d'une musique" />
**Fig.6**: Prototype de la page d'une musique.

Une fois cette page ajoutée nous pouvons maintenant réaliser le scénario principal et donc mesuer son impact. Pour cela nous effectuons de nouveau le même protocole avec EcoIndex.

|   | EcoIndex| GES (gCO2e) | Taille du DOM | Requêtes | Taille de la page (ko)
|---|--------:|------------:|--------------:|---------:|---------------------:
| 1. Consulter les musique					                          | 91 A🟢 | 1,19 | 112 | 4 | 98
| 2. Choisir une musique et la charger 			                  | 96 A🟢 | 1,07 |  19 | 4 | 1
| 3. Revenir à la page d'acceuil et choisir une autre musique	| 91 A🟢 | 1,18 | 112 | 4 | 1
| 4. Lancer cette musique                                     | 96 A🟢 | 1,07 |  19 | 4 | 1

**Tab.5**: Évaluation de l'impact du scénario "Lance des playlists/musiques depuis l'accueil" dans le prototype n°1.

Ce premier prototype de GreenWave valide avec succès le scénario prioritaire ("lancer des playlists/musiques depuis l’accueil") tout en confirmant la faible empreinte environnementale de la solution.
Grâce à des choix techniques sobres — chargement statique des données, optimisation du code, et usage d’un framework léger (PicoCSS) —, le service atteint des scores EcoIndex entre 91 et 96 (classe A 🟢), indiquant un site très économe en ressources.

Ces résultats démontrent qu’il est possible de proposer une expérience fluide et esthétique tout en limitant drastiquement les émissions de CO₂ et le volume de données transférées.

## Prototype n°2 : Données statiques chargées de manière dynamique

Ce prototype charge maintenant les données de manière dynamiques, c'est à dire qu'elle sont chargées par le frontend par le réseau (accessible par HTTP). Cela ne change donc pas les fontionnalités mais se rapproche d'un mécanisme plus réel.

Quant a l'évolution de l'impact environnemental sur le scénario prioritaire déjà testé (cf Tab.2) aucun changement majeur est à noter. Seul le nombre de requête est augmenté de 2 ou 3 (sur une base de 4).

## Mesures de la consommation énergétique lors du passage à l'échelle

Avec un prototype fonctionnel, nous pouvons simuler un "passage à l'échelle" qui augmente drastiquement.

Nous pouvons imaginer que le nombre de musique et d'artiste stockés dans l'application viendra directement de sa popularité. Si des artistes connus ou en masse viennent sur l'application, les utilisteurs suivront et donc ne prendrons qu'un abonnement pour accéder à toutes leurs musiques préférées. Le reste des artistes devront aussi suivre et migrer vers notre application, faisant ainsi augmenter le nombre de données. C'est un cercle vertueux.

Prenons l'exemple d'un artiste très connu utilisant le service, l'arrivée de 500 artistes est probable, apportant chacun 5 musiques, pour arriver à une base de données de 2 000 musiques.
Nous multiplions donc par 100 la base de données de notre service.

### Évolution de l'EcoIndex lors du passage à l'échelle

Maintenant que nous avons ajouté à l'intégration continue l'analyse de l'impact environnemental de notre scénario principal. Nous pouvons récolter et consulter les mesures nécessaires à la production de l'EcoIndex, [avant](https://github.com/UTT-GL03/GreenWave/actions/runs/19234861546) et [après](https://github.com/UTT-GL03/GreenWave/actions/runs/19236074108).
Le passage à l'échelle montre bien l'augmentation du DOM de la page passant de 121 à 10 021 ainsi que le poid de la page passant de 365 Ko à 1 957 Ko à l'ouverture.

|   | EcoIndex| GES (gCO2e) | Taille du DOM | Requêtes | Taille de la page (ko)
|---|--------:|------------:|--------------:|---------:|---------------------:
| 1. Consulter les musiques			                    | <del>83 A 🟢</del><br/>35 E 🟠 | <del>1,34</del><br/>2,3  | <del>121</del><br/>10 021 | 8                   | <del>365</del><br/>1 957
| 2. Choisir une musique et la charger 	            | <del>91 A 🟢</del><br/>87 A 🟢 | <del>1,18</del><br/>1,26 | 28                        | 2                   | <del>14</del><br/>810
| 3. Revenir à la page et choisir une autre musique	| <del>87 A 🟢</del><br/>41 D 🟡 | <del>1,26</del><br/>2,18 | <del>134</del><br/>10 034 | <del>1</del><br/>26 | <del>5</del><br/>133
| 4. Lancer la musique                             	| <del>90 A 🟢</del><br/>86 A 🟢 | <del>1,2</del><br/>1,28  | 41                        | 2                   | <del>14</del><br/>810

**Tab.6**: Effet du passage à l'échelle sur l'impact du scénario "Lance des musiques depuis l'accueil".


### Mesure de la consommation énergétique liée à la consultation
Nous utilisons l'outil GreenFrame, qui permet de calculer et d'estimer la consommation energétique de notre service sur la base de plusieurs composants comme :
- le CPU (à partir du temps de calcul),
- la mémoire vive (à partir de la taille des données mémorisées),
- le disque (à partir de la taille des données lues et écrites),
- le réseau (à partir de la taille des données reçues et envoyées),
- et pour le navigateur uniquement, de l'écran (à partir du temps d'exécution du scénario).

 (a)                 | cpu (mWh)  | mem (mWh)  | disk (mWh) | network (mWh) | screen (mWh) | total (mWh)   |
| ------------------ | ---------- | ---------- | ---------- | ------------- | ------------ | ------------- | 
| Navigateur         | 110.0      | 0.79       | 0.0        | 7.9           | 280.0        | 400.0         |
| Serveur Web        | 0.017      | 0.054      | 0.0        | 6.5           | 0.0          | 6.6           |

 (b)                 | cpu (mWh)  | mem (mWh)  | disk (mWh) | network (mWh) | screen (mWh) | total (mWh)   |
| ------------------ | ---------- | ---------- | ---------- | ------------- | ------------ | ------------- | 
| Navigateur         | 1.2        | 0.055      | 0.0        | 7.8           | 68.0         | 77.0          |
| Serveur Web        | 0.020      | 0.013      | 0.0        | 6.5           | 0.0          | 6.5           |

**Tab.7**: Présente l’estimation de la consommation énergétique lors de la consultation de la page d’accueil (tableau a) et lors de la consultation d’une musique (tableau b).

Les résultats montrent que la consommation côté serveur web reste très faible par rapport à celle du navigateur. La majeure partie de l’énergie est donc consommée côté client, principalement pour l’affichage et l’interaction avec la page.

Au niveau du navigateur, les postes les plus énergivores sont :
- l’écran, qui reste actif durant toute la consultation ;
- le CPU, sollicité pour le rendu et l’exécution du code ;
- le réseau, utilisé pour le transfert des données entre le client et le serveur.

L’expression des résultats en milliwattheures (mWh) permet de mieux visualiser les ordres de grandeur : la consommation reste faible à l’échelle d’une seule consultation, mais elle est dominée par l’affichage et les échanges réseau.

En comparant la consultation de la page d’accueil et celle d’une musique spécifique, on constate que cette dernière consomme nettement moins d’énergie, notamment au niveau de l’écran et du CPU du navigateur. Cela s’explique par le fait que la page d’accueil affiche l’ensemble des musiques de la base de données et que le scénario de test fait défiler toute la page, ce qui prolonge significativement la durée d’exécution.

### Passage de données statique à une base de données dynamique et effets observés

Dans cette étape du projet, nous avons intégré CouchDB comme nouvelle base de données pour l’application. Après l’avoir découverte via Docker, créée et configurée manuellement, puis automatisée dans docker-compose et dans la chaîne d’intégration continue, nous avons demandé à GreenFrame de mesurer à nouveau l’impact environnemental du scénario principal. 

|                    | cpu (s)                                     | screen (s) | mem (B)                                   | disk (B) | network (B)                               |
| ------------------ | ------------------------------------------- | ---------- | ----------------------------------------- | -------- | ----------------------------------------- |
| Navigateur         | <del>0,0946</del><br/><add>0,195</add>      | 17,5       | <del>1,43e+8</del><br/><add>1,36e+8</add> | 0,00     | <del>1,52e+6</del><br/><add>1,72e+6</add> |
| Serveur Web        | <del>0,00114</del><br/><add>0,000230</add>  | 0,00       | <del>2,35e+7</del><br/><add>5,61e+6</add> | 0,00     | <del>1,27e+6</del><br/><add>3,69e+5</add> |
| Base de données    | <del>0</del><br/><add>0,130</add>           | 0,00       | <del>0</del><br/><add>1,02e+8</add>       | 0,00     | <del>0</del><br/><add>1,35e+6</add>       |

**Tab.8**: Présente l’évolution de l’utilisation des ressources suite à l’introduction de la base de données lors de la consultation d’une musique.

On observe l’apparition d’une consommation propre à la base de données, en particulier :
- du temps CPU,
- de la mémoire,
- et du trafic réseau.

En parallèle, certaines consommations côté serveur web diminuent, car une partie du travail est désormais déléguée à CouchDB. En revanche, la charge côté navigateur évolue peu, avec une légère augmentation du trafic réseau due aux échanges supplémentaires avec la base.

## Impacts énergétique après l'introduction de CouchDB

Nous avons à nouveau utilisé GreenFrame pour estimer la consommation énergétique à partir :
- du CPU,
- de la mémoire vive,
- du disque,
- du réseau,
- et de l’écran (pour le navigateur).

 (a)                 | cpu (mWh)              | mem (mWh)                 | disk (mWh) | network (mWh)          | screen (mWh) | total (mWh)            |
| ------------------ | ---------------------- | ------------------------- | ---------- | ---------------------- | ------------ | ---------------------- | 
| Navigateur         | 110,0                  | <del>0,79</del></br>0,35  | 0,0        | <del>7,9</del></br>17  | 280,0        | 400                    |
| Serveur Web        | 0,017                  | <del>0,054</del></br>0,46 | 0,0        | <del>6,5</del></br>1,9 | 0,0          | <del>6,6</del></br>2,0 |
| Base de données    | <del>0,0</del></br>6,2 | <del>0,0</del></br>0,020  | 0,0        | <del>0,0</del></br>14  | 0,0          | <del>0,0</del></br>20  |

 (b)                 | cpu (mWh)                   | mem (mWh)                  | disk (mWh) | network (mWh)          | screen (mWh) | total (mWh)            |
| ------------------ | --------------------------- | -------------------------- | ---------- | ---------------------- | ------------ | ---------------------- | 
| Navigateur         | <del>1,2</del></br>2,5      | <del>0,055</del></br>0,057 | 0,0        | <del>7,8</del></br>8,8 | 68,0         | <del>77,0</del></br>80 |
| Serveur Web        | <del>0,020</del></br>0,0079 | 0,013                      | 0,0        | <del>6,5</del></br>1,9 | 0,0          | <del>6,5</del></br>1,9 |
| Base de données    | <del>0,0</del></br>2,3      | <del>0,0</del></br>0,053   | 0,0        | <del>0,0</del></br>6,9 | 0,0          | <del>0,0</del></br>9,2 |

**Tab.9**: Présente l’estimation de la consommation énergétique lors de la consultation de la page d’accueil (tableau a) et lors de la consultation d’une musique (tableau b), après l’introduction de la base de données.

Les résultats confirment que la consommation reste majoritairement portée par le navigateur. L’écran demeure la principale source de consommation, suivi du CPU et du réseau.

L’introduction de la base de données ajoute une nouvelle source de consommation, non négligeable, en particulier au niveau du réseau et du CPU côté CouchDB. Malgré cela, l’ordre de grandeur reste dominé par la partie cliente.

Comme précédemment, la consultation d’une seule musique reste beaucoup moins coûteuse que l’affichage de la page listant toutes les musiques, en raison de la quantité d’informations affichées et de la durée du scénario.

## Comparaison avec EcoIndex avant et après CouchDB

Nous pouvons ainsi comparer les mesures obtenues avec EcoIndex [avant](https://github.com/UTT-GL03/GreenWave/actions/runs/19236074108) et [après](https://github.com/UTT-GL03/GreenWave/actions/runs/19541777899) ce changement.

|                                                   | EcoIndex                        | GES (gCO2e)              | Taille du DOM  | Requêtes | Taille de la page (ko)
|---------------------------------------------------|--------------------------------:|-------------------------:|---------------:|---------:|---------------------:
| 1. Consulter les musiques			                    | <del>35 E 🟠</del><br/>33 E 🟠 | <del>2,3</del><br/>2,34  | 10 021         | 8        | <del>1 957</del><br/>2 612
| 2. Choisir une musique et la charger 	            | <del>87 A 🟢</del><br/>85 A 🟢 | <del>1,26</del><br/>1,32 | 28             | 2        | <del>810</del><br/>1 137
| 3. Revenir à la page et choisir une autre musique	| <del>41 D 🟡</del><br/>40 D 🟡 | <del>2,18</del><br/>2,2  | 10 034         | 26       | <del>133</del><br/>137
| 4. Lancer la musique                             	| <del>86 A 🟢</del><br/>84 A 🟢 | <del>1,28</del><br/>1,32 | 41             | 2        | <del>810</del><br/>1 137

**Tab.10**: Effet du passage de la base de données (CouchDB) mesuré avec EcoIndex.

Ce que nous observons, c’est que le passage à CouchDB n’a pas entraîné une amélioration de l’empreinte environnementale, mais plutôt un léger recul pour certaines étapes. Globalement, les notes EcoIndex restent proches, mais les pages deviennent plus lourdes et certaines actions consomment davantage de ressources.

Ce passage à CouchDB était une étape nécessaire pour rendre l’application plus réaliste et mieux structurée. Les résultats montrent cependant qu’il faudra désormais travailler sur l’optimisation : réduire le nombre d’appels inutiles, limiter les volumes de données transmis, et alléger l’interface afin d’améliorer l’EcoIndex global.

## Stratégie de limitation du nombre de musiques affichées
Dans une médiathèque musicale classique (CD, vinyles, playlists physiques…), les nouveautés disponibles sont limitées aux titres récemment ajoutés ou publiés.

Toutefois, cette logique ne peut pas être appliquée directement dans une application numérique, car les musiques y sont souvent rendues accessibles dès qu’elles sont ajoutées dans la base de données, parfois à des rythmes irréguliers.

Dès lors, deux stratégies équivalentes peuvent être envisagées pour afficher sur la page d’accueil une sélection cohérente de titres récents :

- Afficher uniquement les musiques ajoutées aujourd’hui, ainsi que celles déjà préparées pour les ajouts du lendemain.
- Afficher les n dernières musiques ajoutées, où n correspondrait au volume habituel de titres mis en avant (par exemple 20).

Dans les deux cas, ce filtrage nécessite d’indexer ou de stocker les musiques en fonction de leur date et heure d’ajout dans la base.

Nous retiendrons la seconde stratégie, car elle garantit une expérience utilisateur plus homogène : peu importe le moment de la journée où l’utilisateur ouvre l’application, il verra toujours les titres les plus récemment publiés, sans variation de quantité ou de pertinence.
