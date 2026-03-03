import type { Dictionary } from "./en";

const fr: Dictionary = {
  common: {
    allTools: "Tous les outils",
    copy: "Copier",
    copied: "Copie effectuee !",
    searchTools: "Rechercher un outil...",
    clear: "Effacer",
    paste: "Coller depuis le presse-papiers",
    encode: "Encoder",
    decode: "Decoder",
    generate: "Generer",
    download: "Telecharger",
    input: "Entree",
    output: "Sortie",
    format: "Formater",
    minify: "Minifier",
    adSpace: "Espace publicitaire",
    all: "Tout",
    backToTools: "Tous les outils",
    encodeComponent: "Encoder le composant",
    encodeUri: "Encoder l'URI",
    length: "Longueur",
    uppercase: "Majuscules",
    lowercase: "Minuscules",
    numbers: "Chiffres",
    symbols: "Symboles",
    strength: "Force",
    weak: "Faible",
    fair: "Moyen",
    strong: "Fort",
    veryStrong: "Tres fort",
    generateMultiple: "Generation multiple",
    copyAll: "Tout copier",
    size: "Taille",
    small: "Petit",
    medium: "Moyen",
    large: "Grand",
    errorCorrection: "Correction d'erreurs",
    foregroundColor: "Couleur de premier plan",
    backgroundColor: "Couleur d'arriere-plan",
    downloadPng: "Telecharger en PNG",
    pattern: "Motif",
    flags: "Drapeaux",
    testString: "Chaine de test",
    matches: "correspondances",
    noMatches: "Aucune correspondance",
    match: "Correspondance",
    index: "Index",
    value: "Valeur",
    groups: "Groupes",
    commonPatterns: "Motifs courants",
    email: "E-mail",
    url: "URL",
    phone: "Telephone",
    ipAddress: "Adresse IP",
    currentTimestamp: "Horodatage Unix actuel",
    timestampToDate: "Horodatage vers date",
    dateToTimestamp: "Date vers horodatage",
    useCurrent: "Utiliser l'actuel",
    utc: "UTC",
    localTime: "Heure locale",
    iso8601: "ISO 8601",
    relative: "Relatif",
    header: "En-tete",
    payload: "Payload",
    signature: "Signature",
    expired: "Expire",
    valid: "Valide",
    issued: "Emis le",
    expires: "Expire le",
    subject: "Sujet",
    issuer: "Emetteur",
    audience: "Audience",
    notBefore: "Pas avant",
    jwtId: "ID JWT",
    generated: "genere(s)",
    characters: "Caracteres",
    words: "Mots",
    lines: "Lignes",
    bytes: "Octets",
    withSpaces: "Avec espaces",
    withoutSpaces: "Sans espaces",
    codePoints: "Points de code",
    frequency: "Frequence",
    algorithm: "Algorithme",
    salt: "Sel",
    iterations: "Iterations",
    memoryCost: "Cout memoire",
    outputLength: "Longueur de sortie",
    hashResult: "Resultat du hash",
    generateSalt: "Generer un sel",
    computing: "Calcul en cours...",
    dataType: "Type de donnees",
    quantity: "Quantite",
    randomString: "Chaine aleatoire",
    randomEmail: "E-mail aleatoire",
    randomName: "Nom aleatoire",
    randomDate: "Date aleatoire",
    randomIp: "IP aleatoire",
    randomPhone: "Telephone aleatoire",
    loremIpsum: "Lorem Ipsum",
    randomJson: "JSON aleatoire",
    original: "Original",
    modified: "Modifie",
    additions: "Ajouts",
    deletions: "Suppressions",
    unchanged: "Inchange",
    compare: "Comparer",
  },
  home: {
    title: "Outils gratuits pour developpeurs",
    subtitle:
      "Des outils rapides, prives et executes dans le navigateur. Aucune donnee ne quitte votre appareil.",
  },
  footer: {
    copyright:
      "Tous les outils fonctionnent cote client. Aucune donnee n'est envoyee a un serveur.",
  },
  meta: {
    siteTitle: "DevTools Hub -- Outils en ligne gratuits pour developpeurs",
    siteDescription:
      "Outils en ligne gratuits pour developpeurs : formateur JSON, encodeur Base64, generateur de hash, generateur d'UUID et plus encore. Tous les outils s'executent dans votre navigateur -- rapides, prives, aucune donnee envoyee aux serveurs.",
  },
  privacy: {
    title: "Politique de confidentialite",
    metaDescription: "Politique de confidentialite de DevTools Hub. Decouvrez comment nous traitons vos donnees.",
    lastUpdated: "Derniere mise a jour",
    sections: {
      intro: {
        title: "1. Introduction",
        content: "Cette politique de confidentialite decrit comment DevTools Hub (le \"Service\"), opere par Moonrift Studio (l'\"Operateur\"), traite les informations. Nous nous engageons a proteger votre vie privee.",
      },
      dataCollection: {
        title: "2. Collecte de donnees",
        content: "DevTools Hub ne collecte, ne stocke et ne transmet AUCUNE donnee utilisateur. Tous les outils fonctionnent entierement dans votre navigateur (cote client). Aucun texte, fichier ou donnee saisie n'est jamais envoye a nos serveurs. Nous n'exigeons aucune inscription de compte ni connexion.",
      },
      cookies: {
        title: "3. Cookies",
        content: "DevTools Hub lui-meme n'utilise pas de cookies. Cependant, les services tiers integres au site (tels que Google AdSense) peuvent utiliser des cookies pour diffuser des publicites personnalisees. Vous pouvez gerer les preferences de cookies via les parametres de votre navigateur.",
      },
      thirdParty: {
        title: "4. Services tiers",
        content: "Ce site utilise Google AdSense pour la publicite. Google peut collecter et utiliser des donnees conformement a sa propre politique de confidentialite (https://policies.google.com/privacy). Nous ne partageons aucune donnee utilisateur avec des tiers, car nous n'en collectons aucune.",
      },
      children: {
        title: "5. Confidentialite des enfants",
        content: "Ce Service ne s'adresse pas aux enfants de moins de 13 ans. Nous ne collectons pas sciemment d'informations personnelles aupres d'enfants.",
      },
      changes: {
        title: "6. Modifications de cette politique",
        content: "Nous pouvons mettre a jour cette politique de confidentialite de temps a autre. Tout changement sera publie sur cette page avec une date de revision mise a jour.",
      },
      contact: {
        title: "7. Contact",
        content: "Si vous avez des questions concernant cette politique de confidentialite, veuillez nous contacter via notre depot GitHub : https://github.com/moonrift-studio/devtools-hub",
      },
    },
  },
  tools: {
    jsonFormatter: {
      name: "Formateur JSON",
      title: "Formateur et validateur JSON",
      description: "Formater, valider et minifier des donnees JSON",
      metaTitle:
        "Formateur JSON en ligne -- Formater, embellir et minifier du JSON",
      metaDescription:
        "Formateur, validateur et minifieur JSON gratuit en ligne. Affichez du JSON lisible. S'execute entierement dans votre navigateur.",
      capsule:
        "Collez vos donnees JSON et formatez-les instantanement avec une indentation correcte, validez leur structure ou minifiez-les pour la production. Cet outil s'execute entierement dans votre navigateur — vos donnees ne quittent jamais votre appareil.",
      faq: [
        {
          q: "Qu'est-ce que le formatage JSON ?",
          a: "Le formatage JSON (aussi appele pretty-printing) ajoute des espaces, de l'indentation et des sauts de ligne aux donnees JSON compressees, les rendant lisibles par l'homme. Cet outil utilise par defaut une indentation de 2 espaces.",
        },
        {
          q: "Mes donnees sont-elles en securite avec ce formateur JSON ?",
          a: "Oui. Cet outil traite tout dans votre navigateur en utilisant JavaScript. Aucune donnee n'est envoyee a un serveur. Vous pouvez le verifier en utilisant l'outil hors ligne.",
        },
        {
          q: "Quelle est la difference entre formater et minifier ?",
          a: "Formater ajoute de l'indentation et des sauts de ligne pour la lisibilite. Minifier supprime tous les espaces inutiles pour reduire la taille du fichier, ce qui est utile pour les API en production et les fichiers de configuration.",
        },
      ],
    },
    base64: {
      name: "Encodeur/Decodeur Base64",
      title: "Encodeur/Decodeur Base64",
      description: "Encoder et decoder des chaines Base64",
      metaTitle: "Encodeur/Decodeur Base64 en ligne -- Encoder et decoder du Base64",
      metaDescription:
        "Encodeur et decodeur Base64 gratuit en ligne. Convertissez du texte en Base64 et inversement. Supporte l'UTF-8.",
      capsule:
        "Convertissez du texte en encodage Base64 ou decodez des chaines Base64 en texte brut. Prend en charge l'ensemble des caracteres UTF-8, y compris les emojis et les caracteres CJK. Tout le traitement est effectue cote client.",
      faq: [
        {
          q: "Qu'est-ce que l'encodage Base64 ?",
          a: "Base64 est un schema d'encodage binaire-texte qui represente des donnees binaires en utilisant 64 caracteres ASCII (A-Z, a-z, 0-9, +, /). Il est couramment utilise pour integrer des donnees binaires dans des formats textuels comme JSON, XML, HTML et les e-mails.",
        },
        {
          q: "L'encodage Base64 chiffre-t-il les donnees ?",
          a: "Non. Base64 est un encodage, pas un chiffrement. N'importe qui peut decoder des donnees Base64. Il ne doit jamais etre utilise pour proteger des informations sensibles. Utilisez un chiffrement adapte (comme AES) pour la securite.",
        },
        {
          q: "Pourquoi Base64 augmente-t-il la taille des donnees ?",
          a: "L'encodage Base64 augmente la taille des donnees d'environ 33% car il represente 3 octets de donnees binaires sous forme de 4 caracteres ASCII. Ce compromis permet une transmission sure via des canaux uniquement textuels.",
        },
      ],
    },
    urlEncoder: {
      name: "Encodeur/Decodeur URL",
      title: "Encodeur/Decodeur URL",
      description: "Encoder et decoder des composants d'URL",
      metaTitle: "Encodeur/Decodeur URL en ligne -- Encoder et decoder des URL",
      metaDescription:
        "Encodeur et decodeur d'URL gratuit en ligne. Encodez et decodez des composants d'URI.",
      capsule:
        "Encodez les caracteres speciaux dans les URL en utilisant l'encodage par pourcentage, ou decodez les chaines encodees en texte lisible. Prend en charge les modes encodeURIComponent et encodeURI.",
      faq: [
        {
          q: "Qu'est-ce que l'encodage URL ?",
          a: "L'encodage URL (encodage par pourcentage) remplace les caracteres non surs dans les URL par un % suivi de deux chiffres hexadecimaux. Par exemple, un espace devient %20. Cela garantit que les URL sont valides et peuvent etre transmises correctement.",
        },
        {
          q: "Quelle est la difference entre encodeURI et encodeURIComponent ?",
          a: "encodeURI encode une URI complete mais preserve des caracteres comme :, /, ?, et #. encodeURIComponent encode tout sauf les lettres, chiffres et - _ . ~ ce qui le rend adapte a l'encodage des valeurs de parametres de requete.",
        },
        {
          q: "Quand dois-je utiliser l'encodage URL ?",
          a: "Utilisez l'encodage URL lorsque vous incluez des entrees utilisateur dans des URL, construisez des chaines de requete ou transmettez des caracteres speciaux dans des requetes API. La plupart des langages de programmation disposent de fonctions integrees a cet effet.",
        },
      ],
    },
    hashGenerator: {
      name: "Generateur de hash",
      title: "Generateur de hash",
      description: "Generer des hash SHA-1, SHA-256, SHA-384, SHA-512",
      metaTitle:
        "Generateur de hash en ligne -- Generer des hash SHA-256, SHA-512",
      metaDescription:
        "Generateur de hash gratuit en ligne. Calculez des hash SHA-1, SHA-256, SHA-384, SHA-512 instantanement.",
      capsule:
        "Calculez les valeurs de hachage cryptographique de n'importe quel texte en utilisant les algorithmes SHA-1, SHA-256, SHA-384 et SHA-512. Tous les hash sont generes simultanement via l'API Web Crypto de votre navigateur.",
      faq: [
        {
          q: "Qu'est-ce qu'une fonction de hachage ?",
          a: "Une fonction de hachage cryptographique convertit des donnees d'entree de n'importe quelle taille en une chaine de caracteres de taille fixe. La meme entree produit toujours le meme hash, mais il est pratiquement impossible d'inverser le processus ou de trouver deux entrees avec le meme hash.",
        },
        {
          q: "Quel algorithme de hachage dois-je utiliser ?",
          a: "SHA-256 est le plus largement utilise et recommande pour les usages generaux. SHA-512 offre une securite renforcee pour les applications sensibles. SHA-1 est considere comme faible et doit etre evite pour les cas d'utilisation critiques en matiere de securite.",
        },
        {
          q: "Peut-on inverser un hash pour retrouver le texte original ?",
          a: "Non. Les fonctions de hachage cryptographique sont des fonctions a sens unique concues pour etre informatiquement impossibles a inverser. Cependant, les chaines courantes peuvent etre trouvees via des tables arc-en-ciel, c'est pourquoi le salage est important pour le stockage des mots de passe.",
        },
      ],
    },
    uuidGenerator: {
      name: "Generateur d'UUID",
      title: "Generateur d'UUID",
      description: "Generer des UUID aleatoires (v4)",
      metaTitle: "Generateur d'UUID en ligne -- Generer des UUID aleatoires",
      metaDescription:
        "Generateur d'UUID v4 gratuit en ligne. Generez des identifiants uniques aleatoires instantanement.",
      capsule:
        "Generez des identifiants UUID version 4 cryptographiquement aleatoires. Creez un ou plusieurs UUID instantanement en utilisant la fonction crypto.randomUUID() integree a votre navigateur.",
      faq: [
        {
          q: "Qu'est-ce qu'un UUID ?",
          a: "Un UUID (Universally Unique Identifier) est un identifiant de 128 bits formate sous forme de 32 chiffres hexadecimaux selon le schema 8-4-4-4-12 (ex : 550e8400-e29b-41d4-a716-446655440000). L'UUID v4 utilise des nombres aleatoires, rendant les collisions pratiquement impossibles.",
        },
        {
          q: "Les valeurs UUID v4 sont-elles vraiment uniques ?",
          a: "L'UUID v4 utilise 122 bits aleatoires, offrant environ 5,3 x 10^36 valeurs possibles. La probabilite de generer un doublon est astronomiquement faible — il faudrait generer 1 milliard d'UUID par seconde pendant 85 ans pour avoir 50% de chance d'une collision.",
        },
        {
          q: "Quand utiliser des UUID ?",
          a: "Les UUID sont ideaux pour les cles primaires de base de donnees, les systemes distribues, les identifiants de session et tout scenario ou des identifiants uniques doivent etre generes independamment sans coordination entre les systemes.",
        },
      ],
    },
    timestampConverter: {
      name: "Convertisseur de timestamp Unix",
      title: "Convertisseur de timestamp Unix",
      description: "Convertir entre les timestamps Unix et les dates",
      metaTitle:
        "Convertisseur de timestamp Unix en ligne -- Convertir des timestamps",
      metaDescription:
        "Convertisseur de timestamp Unix gratuit en ligne. Convertissez entre les timestamps et les dates lisibles.",
      capsule:
        "Convertissez des timestamps Unix (temps epoch) en dates lisibles et inversement. Affichez les resultats en UTC, heure locale, ISO 8601 et format relatif. Le timestamp actuel se met a jour en temps reel.",
      faq: [
        {
          q: "Qu'est-ce qu'un timestamp Unix ?",
          a: "Un timestamp Unix (aussi appele temps epoch) est le nombre de secondes ecoulees depuis le 1er janvier 1970 a 00:00:00 UTC. Il est largement utilise en programmation car il represente le temps sous forme d'un seul entier, independant des fuseaux horaires.",
        },
        {
          q: "Quelle est la difference entre les timestamps en secondes et en millisecondes ?",
          a: "Les timestamps Unix en secondes ont 10 chiffres (ex : 1709251200). JavaScript et de nombreuses API utilisent des millisecondes (13 chiffres, ex : 1709251200000). Cet outil detecte automatiquement le format en fonction du nombre de chiffres.",
        },
        {
          q: "Qu'est-ce que le probleme de l'annee 2038 ?",
          a: "Les systemes stockant les timestamps Unix en entiers signes 32 bits subiront un depassement le 19 janvier 2038. Les systemes modernes 64 bits ne sont pas affectes. Cet outil utilise JavaScript qui gere les timestamps bien au-dela de 2038.",
        },
      ],
    },
    passwordGenerator: {
      name: "Generateur de mots de passe",
      title: "Generateur de mots de passe",
      description: "Generer des mots de passe aleatoires et securises",
      metaTitle:
        "Generateur de mots de passe en ligne -- Creer des mots de passe securises",
      metaDescription:
        "Generateur de mots de passe gratuit en ligne. Creez des mots de passe forts et securises aleatoirement.",
      capsule:
        "Creez des mots de passe forts et aleatoires avec une longueur et des jeux de caracteres personnalisables. Utilise le generateur de nombres aleatoires cryptographique (crypto.getRandomValues) de votre navigateur pour une veritable aleatoire.",
      faq: [
        {
          q: "Qu'est-ce qui rend un mot de passe fort ?",
          a: "La force d'un mot de passe depend de sa longueur et de la diversite des caracteres. Un mot de passe de 16 caracteres utilisant majuscules, minuscules, chiffres et symboles possede environ 105 bits d'entropie, le rendant pratiquement impossible a casser par force brute.",
        },
        {
          q: "Ce generateur de mots de passe est-il securise ?",
          a: "Oui. Il utilise crypto.getRandomValues(), un generateur de nombres aleatoires cryptographiquement securise integre a votre navigateur. Aucun mot de passe n'est transmis ou stocke — tout s'execute localement sur votre appareil.",
        },
        {
          q: "Quelle longueur doit avoir mon mot de passe ?",
          a: "Au moins 12 caracteres pour les comptes importants, 16 caracteres ou plus pour les comptes a haute securite. Les mots de passe plus longs sont exponentiellement plus difficiles a casser. Un gestionnaire de mots de passe permet d'utiliser des mots de passe longs et uniques pour chaque compte.",
        },
      ],
    },
    qrCode: {
      name: "Generateur de QR Code",
      title: "Generateur de QR Code",
      description: "Generer des QR codes a partir de texte ou d'URL",
      metaTitle: "Generateur de QR Code en ligne -- Creer des QR codes",
      metaDescription:
        "Generateur de QR code gratuit en ligne. Creez des QR codes a partir de texte ou d'URL avec des couleurs personnalisables.",
      capsule:
        "Creez des QR codes a partir de n'importe quel texte ou URL avec une taille, des couleurs et des niveaux de correction d'erreurs personnalisables. Telechargez votre QR code en image PNG. Genere entierement dans votre navigateur.",
      faq: [
        {
          q: "Qu'est-ce qu'un QR code ?",
          a: "Un QR code (Quick Response) est un code-barres bidimensionnel qui peut stocker du texte, des URL, des coordonnees ou d'autres donnees. Il peut etre scanne par les appareils photo des smartphones et les lecteurs QR dedies pour acceder rapidement aux informations encodees.",
        },
        {
          q: "Quels sont les niveaux de correction d'erreurs des QR codes ?",
          a: "Les QR codes ont quatre niveaux de correction d'erreurs : L (7%), M (15%), Q (25%) et H (30%). Les niveaux plus eleves permettent la lecture du code meme lorsqu'il est partiellement endommage ou masque, mais augmentent la taille et la densite du code.",
        },
        {
          q: "Quelle est la quantite maximale de donnees qu'un QR code peut stocker ?",
          a: "Un QR code peut stocker jusqu'a 7 089 caracteres numeriques, 4 296 caracteres alphanumeriques ou 2 953 octets de donnees binaires. Pour une utilisation pratique, un contenu inferieur a 300 caracteres garantit un scan fiable.",
        },
      ],
    },
    jwtDecoder: {
      name: "Decodeur JWT",
      title: "Decodeur JWT",
      description: "Decoder et inspecter des JSON Web Tokens",
      metaTitle: "Decodeur JWT en ligne -- Decoder des JSON Web Tokens",
      metaDescription:
        "Decodeur JWT gratuit en ligne. Decodez et inspectez les en-tetes et les payloads des JSON Web Tokens.",
      capsule:
        "Decodez les JSON Web Tokens (JWT) pour inspecter leur en-tete, payload et signature. Affichez les claims standards comme l'emetteur, l'expiration et le sujet. Verifiez si les tokens sont expires. Aucune verification n'est effectuee — consultation uniquement.",
      faq: [
        {
          q: "Qu'est-ce qu'un JWT ?",
          a: "Un JSON Web Token (JWT) est un format de jeton compact et URL-safe utilise pour l'authentification et l'echange d'informations. Il se compose de trois parties encodees en Base64 separees par des points : l'en-tete (algorithme), le payload (claims) et la signature.",
        },
        {
          q: "Est-il sur de decoder des JWT dans le navigateur ?",
          a: "Decoder un JWT ne fait que reveler son contenu — cela ne verifie ni ne valide le token. Les payloads JWT ne sont pas chiffres (seulement encodes en Base64), donc toute personne possedant le token peut lire son contenu. Ne mettez jamais de donnees sensibles dans les payloads JWT.",
        },
        {
          q: "Quels sont les claims JWT courants ?",
          a: "Les claims standards incluent : iss (emetteur), sub (sujet), aud (audience), exp (expiration), nbf (pas avant), iat (emis le) et jti (ID JWT). Des claims personnalises peuvent etre ajoutes pour des donnees specifiques a l'application.",
        },
      ],
    },
    regexTester: {
      name: "Testeur de Regex",
      title: "Testeur de Regex",
      description: "Tester des expressions regulieres avec correspondance en direct",
      metaTitle:
        "Testeur de Regex en ligne -- Tester des expressions regulieres",
      metaDescription:
        "Testeur de regex gratuit en ligne. Testez des expressions regulieres avec correspondance et surlignage en temps reel.",
      capsule:
        "Testez et deboguez des expressions regulieres avec correspondance et surlignage en temps reel. Visualisez toutes les correspondances, leurs positions et les groupes captures. Inclut des motifs predefinis pour les cas courants comme la validation d'e-mail, URL et IP.",
      faq: [
        {
          q: "Qu'est-ce qu'une expression reguliere ?",
          a: "Une expression reguliere (regex) est un motif qui decrit un ensemble de chaines de caracteres. Elle est utilisee pour rechercher, faire correspondre et manipuler du texte. Par exemple, \\d+ correspond a un ou plusieurs chiffres, et [a-zA-Z] correspond a n'importe quelle lettre.",
        },
        {
          q: "Que sont les drapeaux regex ?",
          a: "Les drapeaux modifient le comportement du moteur regex. Drapeaux courants : g (global — trouver toutes les correspondances), i (insensible a la casse), m (multiligne — ^ et $ correspondent aux limites de ligne), s (dotAll — . correspond aux sauts de ligne), u (support Unicode).",
        },
        {
          q: "Comment faire correspondre une adresse e-mail avec une regex ?",
          a: "Une regex pratique pour les e-mails est : ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$. Notez que la validation parfaite des e-mails par regex est extremement complexe — en production, combinez une validation regex basique avec une verification reelle de l'e-mail.",
        },
      ],
    },
    textInspector: {
      name: "Inspecteur de texte",
      title: "Inspecteur de texte & compteur",
      description: "Comptage de caracteres, taille en octets, points de code Unicode",
      metaTitle: "Inspecteur de texte — Comptage de caracteres, taille en octets, analyse Unicode en ligne",
      metaDescription: "Inspecteur de texte gratuit en ligne. Comptez les caracteres, mots, lignes et octets. Visualisez les points de code Unicode et l'encodage UTF-8. S'execute dans votre navigateur.",
      capsule: "Analysez le texte en detail : comptez les caracteres, mots, lignes et tailles en octets en encodage UTF-8 et UTF-16. Visualisez les points de code Unicode individuels, detectez les categories de caracteres et inspectez l'encodage de chaque caractere.",
      faq: [
        {
          q: "Quelle est la difference entre le comptage de caracteres et le comptage d'octets ?",
          a: "Un caractere est un symbole unique (comme 'A' ou '漢'), tandis que le nombre d'octets depend de l'encodage. En UTF-8, les caracteres ASCII utilisent 1 octet, les caracteres CJK 3 octets et les emojis 4 octets. UTF-16 utilise 2 a 4 octets par caractere.",
        },
        {
          q: "Qu'est-ce qu'un point de code Unicode ?",
          a: "Un point de code Unicode est un numero unique attribue a chaque caractere dans la norme Unicode, ecrit sous la forme U+XXXX. Par exemple, 'A' est U+0041, '漢' est U+6F22. Unicode prend en charge plus de 149 000 caracteres dans 161 ecritures.",
        },
        {
          q: "Pourquoi la longueur d'une chaine peut-elle differer du nombre de caracteres ?",
          a: "En JavaScript, string.length compte les unites de code UTF-16, pas les caracteres. Les caracteres en dehors du plan multilingue de base (comme les emojis) utilisent deux unites de code (une paire de substitution), donc '😀'.length vaut 2, pas 1.",
        },
      ],
    },
    passwordHasher: {
      name: "Hacheur de mots de passe",
      title: "Hacheur de mots de passe (Argon2id / PBKDF2)",
      description: "Hacher des mots de passe avec Argon2id, PBKDF2 et sel",
      metaTitle: "Hacheur de mots de passe — Hachage Argon2id, PBKDF2 avec sel en ligne",
      metaDescription: "Hacheur de mots de passe gratuit en ligne. Hachez les mots de passe avec Argon2id ou PBKDF2 avec sel, iterations et cout memoire configurables. S'execute entierement dans votre navigateur.",
      capsule: "Hachez les mots de passe en toute securite avec Argon2id (recommande) ou PBKDF2-SHA256 avec sel, iterations, cout memoire et longueur de sortie configurables. Tous les calculs s'executent localement dans votre navigateur via WebAssembly — aucun mot de passe n'est transmis.",
      faq: [
        {
          q: "Qu'est-ce qu'Argon2id ?",
          a: "Argon2id est le gagnant du Password Hashing Competition (2015) et est recommande par l'OWASP pour le stockage des mots de passe. Il combine Argon2i (resistant aux attaques par canal lateral) et Argon2d (resistant aux GPU), offrant une protection robuste contre les attaques par force brute et par canal lateral.",
        },
        {
          q: "Quelle est la difference entre le hachage et le chiffrement ?",
          a: "Le hachage est une fonction a sens unique — le mot de passe original ne peut pas etre retrouve a partir de son hash. Le chiffrement est reversible avec une cle. Pour le stockage des mots de passe, utilisez toujours le hachage (Argon2id, bcrypt) plutot que le chiffrement.",
        },
        {
          q: "Quels sont les parametres Argon2id recommandes ?",
          a: "L'OWASP recommande : cout memoire de 47 104 Ko (46 Mio), iterations de 1, parallelisme de 1 comme premiere configuration. Pour une securite accrue, augmentez la memoire a 19 456 Ko avec 2 iterations. Utilisez toujours un sel aleatoire d'au moins 16 octets.",
        },
      ],
    },
    testDataGenerator: {
      name: "Generateur de donnees de test",
      title: "Generateur de donnees de test",
      description: "Generer des donnees factices pour les tests",
      metaTitle: "Generateur de donnees de test — Donnees factices, chaines aleatoires en ligne",
      metaDescription: "Generateur de donnees de test gratuit en ligne. Creez des chaines aleatoires, e-mails, noms, dates, adresses IP et JSON pour les tests. Aucun serveur requis.",
      capsule: "Generez instantanement des donnees de test aleatoires : chaines, adresses e-mail, noms, dates, adresses IP, numeros de telephone, texte Lorem Ipsum et objets JSON structures. Specifiez la quantite et le format, puis copiez dans le presse-papiers.",
      faq: [
        {
          q: "Pourquoi utiliser des donnees generees plutot que des donnees reelles ?",
          a: "L'utilisation de donnees reelles d'utilisateurs dans les environnements de test viole les reglementations sur la vie privee (RGPD, CCPA) et cree des risques de securite. Les donnees factices generees sont sures, previsibles et peuvent etre personnalisees pour correspondre a vos exigences de schema.",
        },
        {
          q: "Les donnees generees sont-elles vraiment aleatoires ?",
          a: "Cet outil utilise crypto.getRandomValues() pour l'aleatoire cryptographique la ou la securite est importante (comme les mots de passe) et Math.random() pour les donnees de test generales. Les donnees generees suivent des schemas realistes mais sont entierement synthetiques.",
        },
        {
          q: "Quels formats puis-je generer ?",
          a: "Vous pouvez generer : des chaines aleatoires (longueur/jeu de caracteres personnalisable), des adresses e-mail, des prenoms/noms, des dates (dans une plage), des adresses IPv4/IPv6, des numeros de telephone, des paragraphes Lorem Ipsum et des objets JSON avec des types de donnees mixtes.",
        },
      ],
    },
    diffChecker: {
      name: "Comparateur de differences",
      title: "Comparateur de differences",
      description: "Comparer deux textes et mettre en evidence les differences",
      metaTitle: "Comparateur de differences — Comparer du texte et trouver les differences en ligne",
      metaDescription: "Comparateur de differences gratuit en ligne. Comparez deux textes cote a cote et voyez les ajouts, suppressions et modifications mis en evidence. S'execute dans votre navigateur.",
      capsule: "Comparez deux textes et voyez instantanement les differences mises en evidence. Les lignes ajoutees apparaissent en vert, les lignes supprimees en rouge. Utile pour comparer des fichiers de configuration, des reponses API, des versions de code et des resultats de tests.",
      faq: [
        {
          q: "Comment fonctionne l'algorithme de comparaison ?",
          a: "Cet outil utilise un algorithme base sur la plus longue sous-sequence commune (LCS), similaire a la commande Unix diff. Il trouve l'ensemble minimal de modifications necessaires pour transformer un texte en un autre, montrant les ajouts, suppressions et lignes inchangees.",
        },
        {
          q: "Puis-je comparer du code avec cet outil ?",
          a: "Oui. Le comparateur fonctionne avec n'importe quel texte, y compris le code source, les fichiers de configuration, JSON, XML et CSV. Il effectue une comparaison ligne par ligne independante de la syntaxe avec mise en evidence.",
        },
        {
          q: "Quelle est la difference entre le diff unifie et le diff cote a cote ?",
          a: "Le diff cote a cote affiche les deux textes dans des colonnes paralleles avec les modifications mises en evidence. Le diff unifie affiche les modifications dans une seule colonne avec des prefixes + et -. Cet outil utilise la comparaison cote a cote pour plus de clarte visuelle.",
        },
      ],
    },
    halfwidthFullwidth: {
      name: "Convertisseur demi/pleine largeur",
      title: "Convertisseur demi-largeur / pleine largeur",
      description: "Convertir entre les caracteres demi-largeur et pleine largeur",
      metaTitle: "Convertisseur demi/pleine largeur — Convertir Zenkaku Hankaku en ligne",
      metaDescription: "Convertisseur gratuit de caracteres demi-largeur et pleine largeur en ligne. Convertissez entre ASCII et formes pleine largeur, katakana demi-largeur et pleine largeur. S'execute dans votre navigateur.",
      capsule: "Convertissez du texte entre les formes de caracteres demi-largeur (hankaku) et pleine largeur (zenkaku). Prend en charge les caracteres ASCII, les chiffres, les katakana et les symboles speciaux. Tout le traitement s'effectue dans votre navigateur.",
      faq: [
        {
          q: "Que sont les caracteres demi-largeur et pleine largeur ?",
          a: "Les caracteres demi-largeur occupent une colonne dans les polices a espacement fixe (comme l'ASCII standard : ABC, 123). Les caracteres pleine largeur occupent deux colonnes (comme ＡＢＣ, １２３). Cette distinction est courante en typographie est-asiatique ou les caracteres CJK sont naturellement en pleine largeur.",
        },
        {
          q: "Quand faut-il convertir entre demi-largeur et pleine largeur ?",
          a: "Les cas d'utilisation courants incluent : la normalisation de la saisie de donnees pour les textes japonais/chinois/coreens, le formatage de texte pour les affichages a largeur fixe, la preparation de donnees pour les systemes necessitant des largeurs de caracteres specifiques et le nettoyage de textes a largeurs mixtes.",
        },
        {
          q: "Cet outil gere-t-il la conversion des katakana ?",
          a: "Oui. Cet outil convertit entre les katakana demi-largeur (ｶﾀｶﾅ) et pleine largeur (カタカナ), y compris la gestion correcte des signes diacritiques dakuten (゛) et handakuten (゜).",
        },
      ],
    },
    htmlStrip: {
      name: "Suppresseur de balises HTML",
      title: "Suppresseur de balises HTML",
      description: "Supprimer les balises HTML et extraire le texte brut",
      metaTitle: "Suppresseur de balises HTML — Supprimer les balises HTML en ligne",
      metaDescription: "Suppresseur de balises HTML gratuit en ligne. Supprimez les balises HTML du texte, decodez les entites et extrayez le contenu en texte brut. S'execute dans votre navigateur.",
      capsule: "Supprimez toutes les balises HTML du texte et extrayez un contenu propre en texte brut. Options pour preserver les sauts de ligne, extraire les liens et decoder les entites HTML comme &amp; et &lt;. Ideal pour nettoyer le contenu copie depuis le web.",
      faq: [
        {
          q: "Que fait la suppression des balises HTML ?",
          a: "La suppression des balises HTML retire tous les elements de balisage (comme <p>, <div>, <a>) du texte, ne laissant que le contenu lisible. Cela est utile pour extraire du texte de pages web, nettoyer du texte enrichi ou preparer du contenu pour des formats en texte brut.",
        },
        {
          q: "Cet outil decode-t-il les entites HTML ?",
          a: "Oui, lorsque l'option « Decoder les entites HTML » est activee. Les entites courantes comme &amp; (→ &), &lt; (→ <), &gt; (→ >), &nbsp; (→ espace) et les entites numeriques comme &#169; (→ ©) sont toutes converties en leurs caracteres lisibles.",
        },
        {
          q: "Peut-on preserver la structure du document ?",
          a: "Oui. L'option « Preserver les sauts de ligne » convertit les elements de bloc (p, div, h1-h6, li, br) en sauts de ligne, preservant la structure visuelle du document original. L'option « Extraire les liens » preserve les URL des balises d'ancrage.",
        },
      ],
    },
    keywordCounter: {
      name: "Compteur de mots-cles",
      title: "Compteur de mots-cles et analyseur de densite",
      description: "Compter la frequence et la densite des mots-cles",
      metaTitle: "Compteur de mots-cles — Frequence et densite des mots en ligne",
      metaDescription: "Compteur de mots-cles et analyseur de densite gratuit en ligne. Comptez la frequence des mots, analysez la densite des mots-cles et trouvez les expressions courantes. Ideal pour le SEO et la redaction de contenu.",
      capsule: "Analysez la frequence et la densite des mots-cles dans n'importe quel texte. Visualisez les comptages de mots individuels, les expressions a 2 mots (bigrammes) et les expressions a 3 mots (trigrammes). Essentiel pour l'optimisation SEO et l'analyse de contenu.",
      faq: [
        {
          q: "Qu'est-ce que la densite de mots-cles ?",
          a: "La densite de mots-cles est le pourcentage d'apparition d'un mot-cle par rapport au nombre total de mots. Par exemple, si « javascript » apparait 5 fois dans un article de 200 mots, sa densite est de 2,5 %. Les experts SEO recommandent generalement de maintenir la densite entre 1 et 3 %.",
        },
        {
          q: "Que sont les n-grammes (bigrammes et trigrammes) ?",
          a: "Les n-grammes sont des sequences de mots consecutifs. Les bigrammes sont des expressions a 2 mots (comme « apprentissage automatique »), et les trigrammes sont des expressions a 3 mots (comme « traitement du langage naturel »). L'analyse des n-grammes aide a identifier les expressions frequemment repetees dans votre contenu.",
        },
        {
          q: "Comment utiliser l'analyse de mots-cles pour le SEO ?",
          a: "L'analyse de mots-cles permet de s'assurer que vos mots-cles cibles apparaissent avec une frequence appropriee. Verifiez que votre mot-cle principal a une densite de 1 a 3 %, utilisez des mots-cles associes naturellement dans le texte et evitez le bourrage de mots-cles qui peut nuire au classement dans les moteurs de recherche.",
        },
      ],
    },
    pdfLineBreakRemover: {
      name: "Suppresseur de sauts de ligne PDF",
      title: "Suppresseur de sauts de ligne PDF",
      description: "Supprimer les sauts de ligne indesirables du texte copie depuis un PDF",
      metaTitle: "Suppresseur de sauts de ligne PDF — Nettoyer le texte copie depuis un PDF en ligne",
      metaDescription: "Suppresseur de sauts de ligne PDF gratuit en ligne. Supprimez les sauts de ligne indesirables du texte copie depuis des PDF. Preservez les paragraphes, corrigez la cesure. S'execute dans votre navigateur.",
      capsule: "Supprimez les sauts de ligne indesirables du texte copie depuis des documents PDF. Preserve automatiquement les sauts de paragraphe tout en joignant les lignes coupees a cause du formatage PDF. Prend en charge le texte en anglais et en japonais.",
      faq: [
        {
          q: "Pourquoi le texte copie depuis un PDF contient-il des sauts de ligne supplementaires ?",
          a: "Le PDF est un format de mise en page, pas un format texte. Le texte dans les PDF est positionne visuellement, donc lorsque vous copiez du texte, chaque ligne visuelle devient une ligne de texte separee avec des sauts de ligne forces. Cela rend le texte copie difficile a utiliser dans d'autres applications.",
        },
        {
          q: "Comment cet outil detecte-t-il les sauts de paragraphe et les sauts de ligne ?",
          a: "L'outil traite les doubles sauts de ligne (lignes vides) comme des separateurs de paragraphe et les sauts de ligne simples comme du formatage indesirable. Cette heuristique fonctionne bien pour la plupart des documents PDF utilisant un espacement de paragraphe standard.",
        },
        {
          q: "Cet outil prend-il en charge le texte japonais ?",
          a: "Oui. L'outil detecte automatiquement le texte japonais et joint les lignes sans ajouter d'espaces (puisque le japonais n'utilise pas d'espaces entre les mots). Vous pouvez egalement selectionner manuellement la langue pour de meilleurs resultats.",
        },
      ],
    },
    markdownPreview: {
      name: "Apercu Markdown",
      title: "Apercu Markdown et convertisseur",
      description: "Previsualiser et convertir le Markdown en HTML",
      metaTitle: "Apercu Markdown — Convertisseur Markdown vers HTML en direct en ligne",
      metaDescription: "Apercu et convertisseur Markdown gratuit en ligne. Ecrivez du Markdown et visualisez l'apercu HTML en direct. Copiez le HTML genere. S'execute dans votre navigateur.",
      capsule: "Ecrivez ou collez du Markdown et visualisez instantanement le rendu. Basculez entre l'apercu visuel et la sortie HTML brute. Copiez le HTML genere pour l'utiliser dans des blogs, e-mails ou sites web.",
      faq: [
        {
          q: "Qu'est-ce que le Markdown ?",
          a: "Markdown est un langage de balisage leger cree par John Gruber en 2004. Il utilise une syntaxe de formatage textuel simple (comme # pour les titres, * pour le gras, - pour les listes) qui peut etre convertie en HTML. Il est largement utilise pour la documentation, les fichiers README, les blogs et la prise de notes.",
        },
        {
          q: "Quelles fonctionnalites Markdown sont prises en charge ?",
          a: "Cet outil prend en charge les fonctionnalites Markdown standard, notamment : les titres (h1-h6), le gras, l'italique, le texte barre, les liens, les images, les blocs de code avec coloration syntaxique, les tableaux, les citations, les listes ordonnees et non ordonnees, les filets horizontaux et les listes de taches.",
        },
        {
          q: "Puis-je utiliser le HTML genere dans mon site web ?",
          a: "Oui. Passez en vue HTML pour voir et copier le code HTML genere. La sortie est du HTML propre et semantique qui peut etre colle dans n'importe quel site web, article de blog ou e-mail. Le HTML est assaini pour prevenir les attaques XSS.",
        },
      ],
    },
    colorPicker: {
      name: "Selecteur de couleurs",
      title: "Selecteur de couleurs et generateur de palettes",
      description: "Choisir des couleurs et generer des palettes",
      metaTitle: "Selecteur de couleurs — Generateur de palettes, convertisseur HEX RGB HSL en ligne",
      metaDescription: "Selecteur de couleurs et generateur de palettes gratuit en ligne. Convertissez entre HEX, RGB et HSL. Generez des nuances et des harmonies de couleurs. Verifiez les rapports de contraste WCAG.",
      capsule: "Choisissez n'importe quelle couleur et visualisez instantanement ses valeurs HEX, RGB et HSL. Generez des palettes de nuances et des harmonies de couleurs (complementaire, analogue, triadique). Verifiez les rapports de contraste WCAG pour la conformite en accessibilite.",
      faq: [
        {
          q: "Que sont les formats de couleur HEX, RGB et HSL ?",
          a: "HEX utilise la notation hexadecimale (#FF5733). RGB specifie les valeurs de rouge, vert et bleu (rgb(255, 87, 51)). HSL utilise la teinte (0-360°), la saturation (0-100 %) et la luminosite (0-100 %). HSL est souvent plus intuitif pour creer des variations de couleurs.",
        },
        {
          q: "Qu'est-ce que le rapport de contraste WCAG ?",
          a: "Le WCAG (Web Content Accessibility Guidelines) definit des rapports de contraste minimaux pour la lisibilite du texte. Le niveau AA exige 4,5:1 pour le texte normal et 3:1 pour le texte de grande taille. Le niveau AAA exige 7:1 pour le texte normal. Cela garantit que le contenu est lisible par les personnes ayant des deficiences visuelles.",
        },
        {
          q: "Que sont les harmonies de couleurs ?",
          a: "Les harmonies de couleurs sont des combinaisons de couleurs basees sur leurs positions sur le cercle chromatique. Les couleurs complementaires sont opposees (contraste eleve). Les couleurs analogues sont adjacentes (harmonieuses). Les couleurs triadiques sont equidistantes (vibrantes). Les couleurs complementaires scindees offrent du contraste avec moins de tension.",
        },
      ],
    },
  },
};

export default fr;
