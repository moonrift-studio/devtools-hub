import type { Dictionary } from "./en";

const pt: Dictionary = {
  common: {
    allTools: "Todas as Ferramentas",
    copy: "Copiar",
    copied: "Copiado!",
    searchTools: "Buscar ferramentas...",
    clear: "Limpar",
    paste: "Colar da área de transferência",
    encode: "Codificar",
    decode: "Decodificar",
    generate: "Gerar",
    download: "Baixar",
    input: "Entrada",
    output: "Saída",
    format: "Formatar",
    minify: "Minificar",
    adSpace: "Espaço Publicitário",
    all: "Todos",
    backToTools: "Todas as Ferramentas",
    encodeComponent: "Codificar Componente",
    encodeUri: "Codificar URI",
    length: "Comprimento",
    uppercase: "Maiúsculas",
    lowercase: "Minúsculas",
    numbers: "Números",
    symbols: "Símbolos",
    strength: "Força",
    weak: "Fraca",
    fair: "Razoável",
    strong: "Forte",
    veryStrong: "Muito Forte",
    generateMultiple: "Gerar Vários",
    copyAll: "Copiar Todos",
    size: "Tamanho",
    small: "Pequeno",
    medium: "Médio",
    large: "Grande",
    errorCorrection: "Correção de Erros",
    foregroundColor: "Cor do Primeiro Plano",
    backgroundColor: "Cor de Fundo",
    downloadPng: "Baixar como PNG",
    pattern: "Padrão",
    flags: "Flags",
    testString: "Texto de Teste",
    matches: "correspondências",
    noMatches: "Sem correspondências",
    match: "Correspondência",
    index: "Índice",
    value: "Valor",
    groups: "Grupos",
    commonPatterns: "Padrões Comuns",
    email: "E-mail",
    url: "URL",
    phone: "Telefone",
    ipAddress: "Endereço IP",
    currentTimestamp: "Timestamp Unix Atual",
    timestampToDate: "Timestamp para Data",
    dateToTimestamp: "Data para Timestamp",
    useCurrent: "Usar Atual",
    utc: "UTC",
    localTime: "Hora Local",
    iso8601: "ISO 8601",
    relative: "Relativo",
    header: "Cabeçalho",
    payload: "Payload",
    signature: "Assinatura",
    expired: "Expirado",
    valid: "Válido",
    issued: "Emitido Em",
    expires: "Expira Em",
    subject: "Assunto",
    issuer: "Emissor",
    audience: "Audiência",
    notBefore: "Não Antes De",
    jwtId: "ID do JWT",
    generated: "gerados",
    characters: "Caracteres",
    words: "Palavras",
    lines: "Linhas",
    bytes: "Bytes",
    withSpaces: "Com espacos",
    withoutSpaces: "Sem espacos",
    codePoints: "Pontos de codigo",
    frequency: "Frequencia",
    algorithm: "Algoritmo",
    salt: "Salt",
    iterations: "Iteracoes",
    memoryCost: "Custo de memoria",
    outputLength: "Comprimento da saida",
    hashResult: "Resultado do hash",
    generateSalt: "Gerar salt",
    computing: "Calculando...",
    dataType: "Tipo de dado",
    quantity: "Quantidade",
    randomString: "String aleatoria",
    randomEmail: "E-mail aleatorio",
    randomName: "Nome aleatorio",
    randomDate: "Data aleatoria",
    randomIp: "IP aleatorio",
    randomPhone: "Telefone aleatorio",
    loremIpsum: "Lorem Ipsum",
    randomJson: "JSON aleatorio",
    original: "Original",
    modified: "Modificado",
    additions: "Adicoes",
    deletions: "Remocoes",
    unchanged: "Inalterado",
    compare: "Comparar",
  },
  home: {
    title: "Ferramentas Online Gratuitas para Desenvolvedores",
    subtitle:
      "Ferramentas rápidas, privadas e executadas no navegador. Nenhum dado sai do seu dispositivo.",
  },
  footer: {
    copyright:
      "Todas as ferramentas são executadas no lado do cliente. Nenhum dado é enviado a qualquer servidor.",
  },
  meta: {
    siteTitle: "DevTools Hub — Ferramentas Online Gratuitas para Desenvolvedores",
    siteDescription:
      "Ferramentas online gratuitas para desenvolvedores: formatador JSON, codificador Base64, gerador de hash, gerador de UUID e mais. Todas as ferramentas rodam no seu navegador — rápidas, privadas, sem envio de dados a servidores.",
  },
  privacy: {
    title: "Politica de Privacidade",
    metaDescription: "Politica de Privacidade do DevTools Hub. Saiba como tratamos seus dados.",
    lastUpdated: "Ultima atualizacao",
    sections: {
      intro: {
        title: "1. Introducao",
        content: "Esta Politica de Privacidade descreve como o DevTools Hub (o \"Servico\"), operado pela Moonrift Studio (o \"Operador\"), trata as informacoes. Estamos comprometidos em proteger sua privacidade.",
      },
      dataCollection: {
        title: "2. Coleta de dados",
        content: "O DevTools Hub NAO coleta, armazena ou transmite nenhum dado de usuario. Todas as ferramentas rodam inteiramente no seu navegador (lado do cliente). Nenhum texto, arquivo ou dado de entrada e enviado aos nossos servidores. Nao exigimos registro de conta ou login.",
      },
      cookies: {
        title: "3. Cookies",
        content: "O DevTools Hub em si nao utiliza cookies. No entanto, servicos de terceiros incorporados ao site (como o Google AdSense) podem usar cookies para exibir anuncios personalizados. Voce pode gerenciar as preferencias de cookies atraves das configuracoes do seu navegador.",
      },
      thirdParty: {
        title: "4. Servicos de terceiros",
        content: "Este site utiliza o Google AdSense para publicidade. O Google pode coletar e usar dados de acordo com sua propria politica de privacidade (https://policies.google.com/privacy). Nao compartilhamos nenhum dado de usuario com terceiros, pois nao coletamos nenhum.",
      },
      children: {
        title: "5. Privacidade das criancas",
        content: "Este Servico nao e direcionado a criancas menores de 13 anos. Nao coletamos intencionalmente informacoes pessoais de criancas.",
      },
      changes: {
        title: "6. Alteracoes nesta politica",
        content: "Podemos atualizar esta Politica de Privacidade periodicamente. Quaisquer alteracoes serao publicadas nesta pagina com uma data de revisao atualizada.",
      },
      contact: {
        title: "7. Contato",
        content: "Se voce tiver alguma duvida sobre esta Politica de Privacidade, entre em contato conosco atraves do nosso repositorio no GitHub: https://github.com/moonrift-studio/devtools-hub",
      },
    },
  },
  tools: {
    jsonFormatter: {
      name: "Formatador JSON",
      title: "Formatador e Validador JSON",
      description: "Formate, valide e minifique dados JSON",
      metaTitle:
        "Formatador e Validador JSON — Formatar, Embelezar e Minificar JSON Online",
      metaDescription:
        "Formatador, validador e minificador JSON online e gratuito. Exiba JSON de forma legível. Roda inteiramente no seu navegador.",
      capsule:
        "Cole seus dados JSON e formate-os instantaneamente com a indentacao adequada, valide sua estrutura ou minifique-os para producao. Esta ferramenta roda inteiramente no seu navegador — seus dados nunca saem do seu dispositivo.",
      faq: [
        {
          q: "O que e formatacao JSON?",
          a: "A formatacao JSON (tambem chamada de pretty-printing) adiciona espacos, indentacao e quebras de linha a dados JSON comprimidos, tornando-os legiveis para humanos. Esta ferramenta usa indentacao de 2 espacos por padrao.",
        },
        {
          q: "Meus dados estao seguros ao usar este formatador JSON?",
          a: "Sim. Esta ferramenta processa tudo no seu navegador usando JavaScript. Nenhum dado e enviado a qualquer servidor. Voce pode verificar isso usando a ferramenta offline.",
        },
        {
          q: "Qual e a diferenca entre formatar e minificar?",
          a: "Formatar adiciona indentacao e quebras de linha para legibilidade. Minificar remove todos os espacos desnecessarios para reduzir o tamanho do arquivo, o que e util para APIs em producao e arquivos de configuracao.",
        },
      ],
    },
    base64: {
      name: "Codificador/Decodificador Base64",
      title: "Codificador/Decodificador Base64",
      description: "Codifique e decodifique strings em Base64",
      metaTitle:
        "Codificador/Decodificador Base64 — Codificar e Decodificar Base64 Online",
      metaDescription:
        "Codificador e decodificador Base64 online e gratuito. Converta texto para Base64 e vice-versa. Suporte a UTF-8.",
      capsule:
        "Converta texto para codificacao Base64 ou decodifique strings Base64 de volta para texto simples. Suporta caracteres UTF-8 completos, incluindo emojis e caracteres CJK. Todo o processamento acontece no lado do cliente.",
      faq: [
        {
          q: "O que e codificacao Base64?",
          a: "Base64 e um esquema de codificacao binario-para-texto que representa dados binarios usando 64 caracteres ASCII (A-Z, a-z, 0-9, +, /). E comumente usado para incorporar dados binarios em formatos baseados em texto como JSON, XML, HTML e e-mail.",
        },
        {
          q: "A codificacao Base64 criptografa os dados?",
          a: "Nao. Base64 e uma codificacao, nao criptografia. Qualquer pessoa pode decodificar dados Base64. Nunca deve ser usado para proteger informacoes sensiveis. Use criptografia adequada (como AES) para seguranca.",
        },
        {
          q: "Por que o Base64 aumenta o tamanho dos dados?",
          a: "A codificacao Base64 aumenta o tamanho dos dados em aproximadamente 33% porque representa 3 bytes de dados binarios como 4 caracteres ASCII. Essa compensacao permite a transmissao segura atraves de canais exclusivamente de texto.",
        },
      ],
    },
    urlEncoder: {
      name: "Codificador/Decodificador de URL",
      title: "Codificador/Decodificador de URL",
      description: "Codifique e decodifique componentes de URL",
      metaTitle:
        "Codificador/Decodificador de URL — Codificar e Decodificar URLs Online",
      metaDescription:
        "Codificador e decodificador de URL online e gratuito. Codifique e decodifique componentes de URI.",
      capsule:
        "Codifique caracteres especiais em URLs usando codificacao percentual, ou decodifique strings codificadas de volta para texto legivel. Suporta os modos encodeURIComponent e encodeURI.",
      faq: [
        {
          q: "O que e codificacao de URL?",
          a: "A codificacao de URL (codificacao percentual) substitui caracteres inseguros em URLs por um % seguido de dois digitos hexadecimais. Por exemplo, um espaco se torna %20. Isso garante que as URLs sejam validas e possam ser transmitidas corretamente.",
        },
        {
          q: "Qual a diferenca entre encodeURI e encodeURIComponent?",
          a: "encodeURI codifica uma URI completa mas preserva caracteres como :, /, ?, e #. encodeURIComponent codifica tudo exceto letras, digitos e - _ . ~ tornando-o adequado para codificar valores de parametros de consulta.",
        },
        {
          q: "Quando devo usar codificacao de URL?",
          a: "Use codificacao de URL ao incluir entrada do usuario em URLs, construir strings de consulta ou passar caracteres especiais em requisicoes de API. A maioria das linguagens de programacao possui funcoes integradas para esse proposito.",
        },
      ],
    },
    hashGenerator: {
      name: "Gerador de Hash",
      title: "Gerador de Hash",
      description: "Gere hashes SHA-1, SHA-256, SHA-384, SHA-512",
      metaTitle:
        "Gerador de Hash — Gerar Hashes SHA-256, SHA-512 Online",
      metaDescription:
        "Gerador de hash online e gratuito. Calcule hashes SHA-1, SHA-256, SHA-384, SHA-512 instantaneamente.",
      capsule:
        "Calcule valores de hash criptograficos para qualquer texto usando os algoritmos SHA-1, SHA-256, SHA-384 e SHA-512. Todos os hashes sao gerados simultaneamente usando a API Web Crypto do seu navegador.",
      faq: [
        {
          q: "O que e uma funcao hash?",
          a: "Uma funcao hash criptografica converte dados de entrada de qualquer tamanho em uma string de caracteres de tamanho fixo. A mesma entrada sempre produz o mesmo hash, mas e praticamente impossivel reverter o processo ou encontrar duas entradas com o mesmo hash.",
        },
        {
          q: "Qual algoritmo de hash devo usar?",
          a: "SHA-256 e o mais amplamente usado e recomendado para propositos gerais. SHA-512 oferece seguranca mais forte para aplicacoes sensiveis. SHA-1 e considerado fraco e deve ser evitado para casos de uso criticos em seguranca.",
        },
        {
          q: "E possivel reverter valores hash para encontrar o texto original?",
          a: "Nao. Funcoes hash criptograficas sao funcoes unidirecionais projetadas para serem computacionalmente inviaveis de reverter. Porem, strings comuns podem ser encontradas via tabelas arco-iris, por isso o salting e importante para armazenamento de senhas.",
        },
      ],
    },
    uuidGenerator: {
      name: "Gerador de UUID",
      title: "Gerador de UUID",
      description: "Gere UUIDs aleatórios (v4)",
      metaTitle: "Gerador de UUID — Gerar UUIDs Aleatórios Online",
      metaDescription:
        "Gerador de UUID v4 online e gratuito. Gere identificadores únicos aleatórios instantaneamente.",
      capsule:
        "Gere identificadores UUID versao 4 criptograficamente aleatorios. Crie UUIDs individuais ou em lote instantaneamente usando a funcao crypto.randomUUID() integrada ao seu navegador.",
      faq: [
        {
          q: "O que e um UUID?",
          a: "Um UUID (Universally Unique Identifier) e um identificador de 128 bits formatado como 32 digitos hexadecimais no padrao 8-4-4-4-12 (ex: 550e8400-e29b-41d4-a716-446655440000). UUID v4 usa numeros aleatorios, tornando colisoes praticamente impossiveis.",
        },
        {
          q: "Os valores UUID v4 sao realmente unicos?",
          a: "UUID v4 usa 122 bits aleatorios, dando aproximadamente 5,3 x 10^36 valores possiveis. A probabilidade de gerar um duplicado e astronomicamente pequena — seria necessario gerar 1 bilhao de UUIDs por segundo durante 85 anos para ter 50% de chance de uma colisao.",
        },
        {
          q: "Quando devo usar UUIDs?",
          a: "UUIDs sao ideais para chaves primarias de bancos de dados, sistemas distribuidos, identificadores de sessao e qualquer cenario onde identificadores unicos precisam ser gerados independentemente sem coordenacao entre sistemas.",
        },
      ],
    },
    timestampConverter: {
      name: "Conversor de Timestamp Unix",
      title: "Conversor de Timestamp Unix",
      description: "Converta entre timestamps Unix e datas",
      metaTitle:
        "Conversor de Timestamp Unix — Converter Timestamps Online",
      metaDescription:
        "Conversor de timestamp Unix online e gratuito. Converta entre timestamps e datas legíveis.",
      capsule:
        "Converta timestamps Unix (tempo epoch) para datas legiveis e vice-versa. Visualize os resultados em UTC, hora local, ISO 8601 e formato relativo. O timestamp atual e atualizado em tempo real.",
      faq: [
        {
          q: "O que e um timestamp Unix?",
          a: "Um timestamp Unix (tambem chamado de tempo epoch) e o numero de segundos decorridos desde 1 de janeiro de 1970, 00:00:00 UTC. E amplamente usado em programacao porque representa o tempo como um unico inteiro, independente de fusos horarios.",
        },
        {
          q: "Qual a diferenca entre timestamps em segundos e milissegundos?",
          a: "Timestamps Unix em segundos tem 10 digitos (ex: 1709251200). JavaScript e muitas APIs usam milissegundos (13 digitos, ex: 1709251200000). Esta ferramenta detecta automaticamente o formato com base no numero de digitos.",
        },
        {
          q: "O que e o problema do ano 2038?",
          a: "Sistemas que armazenam timestamps Unix como inteiros com sinal de 32 bits terao um estouro em 19 de janeiro de 2038. Sistemas modernos de 64 bits nao sao afetados. Esta ferramenta usa JavaScript que lida com timestamps muito alem de 2038.",
        },
      ],
    },
    passwordGenerator: {
      name: "Gerador de Senhas",
      title: "Gerador de Senhas",
      description: "Gere senhas aleatórias e seguras",
      metaTitle: "Gerador de Senhas — Gerar Senhas Seguras Online",
      metaDescription:
        "Gerador de senhas online e gratuito. Crie senhas fortes e seguras aleatoriamente.",
      capsule:
        "Crie senhas fortes e aleatorias com comprimento e conjuntos de caracteres personalizaveis. Usa o gerador de numeros aleatorios criptograficos (crypto.getRandomValues) do seu navegador para aleatoriedade verdadeira.",
      faq: [
        {
          q: "O que torna uma senha forte?",
          a: "A forca da senha depende do comprimento e da diversidade de caracteres. Uma senha de 16 caracteres usando maiusculas, minusculas, numeros e simbolos tem aproximadamente 105 bits de entropia, tornando-a praticamente impossivel de quebrar por forca bruta.",
        },
        {
          q: "Este gerador de senhas e seguro?",
          a: "Sim. Ele usa crypto.getRandomValues(), um gerador de numeros aleatorios criptograficamente seguro integrado ao seu navegador. Nenhuma senha e transmitida ou armazenada — tudo roda localmente no seu dispositivo.",
        },
        {
          q: "Qual deve ser o comprimento da minha senha?",
          a: "No minimo 12 caracteres para contas importantes, 16 ou mais caracteres para contas de alta seguranca. Senhas mais longas sao exponencialmente mais dificeis de quebrar. Usar um gerenciador de senhas permite utilizar senhas longas e unicas para cada conta.",
        },
      ],
    },
    qrCode: {
      name: "Gerador de QR Code",
      title: "Gerador de QR Code",
      description: "Gere QR Codes a partir de texto ou URLs",
      metaTitle: "Gerador de QR Code — Criar QR Codes Online",
      metaDescription:
        "Gerador de QR Code online e gratuito. Crie QR Codes a partir de texto ou URLs com cores personalizáveis.",
      capsule:
        "Crie QR Codes a partir de qualquer texto ou URL com tamanho, cores e niveis de correcao de erros personalizaveis. Baixe seu QR Code como imagem PNG. Gerado inteiramente no seu navegador.",
      faq: [
        {
          q: "O que e um QR Code?",
          a: "Um QR Code (Quick Response) e um codigo de barras bidimensional que pode armazenar texto, URLs, informacoes de contato ou outros dados. Pode ser escaneado por cameras de smartphones e leitores QR dedicados para acessar rapidamente as informacoes codificadas.",
        },
        {
          q: "O que sao niveis de correcao de erros de QR Code?",
          a: "QR Codes possuem quatro niveis de correcao de erros: L (7%), M (15%), Q (25%) e H (30%). Niveis mais altos permitem a leitura do codigo mesmo quando parcialmente danificado ou obstruido, mas aumentam o tamanho e a densidade do codigo.",
        },
        {
          q: "Qual e a quantidade maxima de dados que um QR Code pode armazenar?",
          a: "Um QR Code pode armazenar ate 7.089 caracteres numericos, 4.296 caracteres alfanumericos ou 2.953 bytes de dados binarios. Para uso pratico, manter o conteudo abaixo de 300 caracteres garante um escaneamento confiavel.",
        },
      ],
    },
    jwtDecoder: {
      name: "Decodificador JWT",
      title: "Decodificador JWT",
      description: "Decodifique e inspecione JSON Web Tokens",
      metaTitle: "Decodificador JWT — Decodificar JSON Web Tokens Online",
      metaDescription:
        "Decodificador JWT online e gratuito. Decodifique e inspecione cabeçalhos e payloads de JSON Web Tokens.",
      capsule:
        "Decodifique JSON Web Tokens (JWT) para inspecionar seu cabecalho, payload e assinatura. Visualize claims padroes como emissor, expiracao e assunto. Verifique se os tokens estao expirados. Nenhuma verificacao e realizada — apenas consulta.",
      faq: [
        {
          q: "O que e um JWT?",
          a: "Um JSON Web Token (JWT) e um formato de token compacto e seguro para URL, usado para autenticacao e troca de informacoes. Consiste em tres partes codificadas em Base64 separadas por pontos: cabecalho (algoritmo), payload (claims) e assinatura.",
        },
        {
          q: "E seguro decodificar JWTs no navegador?",
          a: "Decodificar um JWT apenas revela seu conteudo — nao verifica nem valida o token. Payloads JWT nao sao criptografados (apenas codificados em Base64), entao qualquer pessoa com o token pode ler seu conteudo. Nunca coloque dados sensiveis em payloads JWT.",
        },
        {
          q: "Quais sao os claims JWT comuns?",
          a: "Claims padroes incluem: iss (emissor), sub (assunto), aud (audiencia), exp (expiracao), nbf (nao antes de), iat (emitido em) e jti (ID do JWT). Claims personalizados podem ser adicionados para dados especificos da aplicacao.",
        },
      ],
    },
    regexTester: {
      name: "Testador de Regex",
      title: "Testador de Regex",
      description: "Teste expressões regulares com correspondência em tempo real",
      metaTitle:
        "Testador de Regex — Testar Expressões Regulares Online",
      metaDescription:
        "Testador de regex online e gratuito. Teste expressões regulares com correspondência e destaque em tempo real.",
      capsule:
        "Teste e depure expressoes regulares com correspondencia e destaque em tempo real. Visualize todas as correspondencias, suas posicoes e grupos capturados. Inclui padroes predefinidos para casos comuns como validacao de e-mail, URL e IP.",
      faq: [
        {
          q: "O que e uma expressao regular?",
          a: "Uma expressao regular (regex) e um padrao que descreve um conjunto de strings. E usada para pesquisar, corresponder e manipular texto. Por exemplo, \\d+ corresponde a um ou mais digitos, e [a-zA-Z] corresponde a qualquer letra.",
        },
        {
          q: "O que sao flags de regex?",
          a: "Flags modificam como o motor de regex processa os padroes. Flags comuns: g (global — encontrar todas as correspondencias), i (insensivel a maiusculas), m (multilinha — ^ e $ correspondem a limites de linha), s (dotAll — . corresponde a quebras de linha), u (suporte Unicode).",
        },
        {
          q: "Como posso corresponder um endereco de e-mail com regex?",
          a: "Uma regex pratica para e-mail e: ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$. Note que validar e-mails perfeitamente com regex e extremamente complexo — para producao, combine validacao basica de regex com verificacao real do e-mail.",
        },
      ],
    },
    textInspector: {
      name: "Inspetor de Texto",
      title: "Inspetor de Texto & Contador",
      description: "Contagem de caracteres, tamanho em bytes, pontos de codigo Unicode",
      metaTitle: "Inspetor de Texto — Contagem de Caracteres, Tamanho em Bytes, Analise Unicode Online",
      metaDescription: "Inspetor de texto online e gratuito. Conte caracteres, palavras, linhas e bytes. Visualize pontos de codigo Unicode e codificacao UTF-8. Roda no seu navegador.",
      capsule: "Analise texto em detalhes: conte caracteres, palavras, linhas e tamanhos em bytes em codificacoes UTF-8 e UTF-16. Visualize pontos de codigo Unicode individuais, detecte categorias de caracteres e inspecione a codificacao de cada caractere.",
      faq: [
        {
          q: "Como a contagem de caracteres difere da contagem de bytes?",
          a: "Um caractere e um simbolo unico (como 'A' ou '漢'), enquanto a contagem de bytes depende da codificacao. Em UTF-8, caracteres ASCII usam 1 byte, caracteres CJK usam 3 bytes e emojis usam 4 bytes. UTF-16 usa 2-4 bytes por caractere.",
        },
        {
          q: "O que e um ponto de codigo Unicode?",
          a: "Um ponto de codigo Unicode e um numero unico atribuido a cada caractere no padrao Unicode, escrito como U+XXXX. Por exemplo, 'A' e U+0041, '漢' e U+6F22. Unicode suporta mais de 149.000 caracteres em 161 sistemas de escrita.",
        },
        {
          q: "Por que o comprimento de uma string pode diferir da contagem de caracteres?",
          a: "Em JavaScript, string.length conta unidades de codigo UTF-16, nao caracteres. Caracteres fora do Plano Multilingue Basico (como emojis) usam duas unidades de codigo (um par substituto), entao '😀'.length e 2, nao 1.",
        },
      ],
    },
    passwordHasher: {
      name: "Hasher de Senhas",
      title: "Hasher de Senhas (Argon2id / PBKDF2)",
      description: "Hash de senhas com Argon2id, PBKDF2 e salt",
      metaTitle: "Hasher de Senhas — Hash Argon2id, PBKDF2 com Salt Online",
      metaDescription: "Hasher de senhas online e gratuito. Faca hash de senhas usando Argon2id ou PBKDF2 com salt, iteracoes e custo de memoria configuraveis. Roda inteiramente no seu navegador.",
      capsule: "Faca hash de senhas com seguranca usando Argon2id (recomendado) ou PBKDF2-SHA256 com salt, iteracoes, custo de memoria e comprimento de saida configuraveis. Todos os calculos rodam localmente no seu navegador via WebAssembly — nenhuma senha e transmitida.",
      faq: [
        {
          q: "O que e Argon2id?",
          a: "Argon2id e o vencedor do Password Hashing Competition (2015) e e recomendado pelo OWASP para armazenamento de senhas. Combina Argon2i (resistente a ataques de canal lateral) e Argon2d (resistente a GPU), oferecendo protecao robusta contra ataques de forca bruta e de canal lateral.",
        },
        {
          q: "Qual e a diferenca entre hashing e criptografia?",
          a: "Hashing e uma funcao unidirecional — voce nao pode recuperar a senha original a partir do hash. Criptografia e reversivel com uma chave. Para armazenamento de senhas, sempre use hashing (Argon2id, bcrypt) em vez de criptografia.",
        },
        {
          q: "Quais sao os parametros Argon2id recomendados?",
          a: "O OWASP recomenda: custo de memoria de 47.104 KB (46 MiB), iteracoes de 1, paralelismo de 1 como primeira configuracao. Para maior seguranca, aumente a memoria para 19.456 KB com 2 iteracoes. Sempre use um salt aleatorio de pelo menos 16 bytes.",
        },
      ],
    },
    testDataGenerator: {
      name: "Gerador de Dados de Teste",
      title: "Gerador de Dados de Teste",
      description: "Gere dados ficticios para testes",
      metaTitle: "Gerador de Dados de Teste — Dados Ficticios, Strings Aleatorias Online",
      metaDescription: "Gerador de dados de teste online e gratuito. Crie strings aleatorias, e-mails, nomes, datas, enderecos IP e JSON para testes. Sem servidor necessario.",
      capsule: "Gere dados de teste aleatorios instantaneamente: strings, enderecos de e-mail, nomes, datas, enderecos IP, numeros de telefone, texto Lorem Ipsum e objetos JSON estruturados. Especifique a quantidade e formato, depois copie para a area de transferencia.",
      faq: [
        {
          q: "Por que usar dados gerados em vez de dados reais para testes?",
          a: "Usar dados reais de usuarios em ambientes de teste viola regulamentacoes de privacidade (LGPD, GDPR) e cria riscos de seguranca. Dados ficticios gerados sao seguros, previsiveis e podem ser personalizados para atender aos requisitos do seu esquema.",
        },
        {
          q: "Os dados gerados sao realmente aleatorios?",
          a: "Esta ferramenta usa crypto.getRandomValues() para aleatoriedade criptografica onde a seguranca importa (como senhas) e Math.random() para dados de teste gerais. Os dados gerados seguem padroes realistas mas sao inteiramente sinteticos.",
        },
        {
          q: "Quais formatos posso gerar?",
          a: "Voce pode gerar: strings aleatorias (comprimento/conjunto de caracteres personalizavel), enderecos de e-mail, nomes, datas (dentro de um intervalo), enderecos IPv4/IPv6, numeros de telefone, paragrafos Lorem Ipsum e objetos JSON com tipos de dados mistos.",
        },
      ],
    },
    diffChecker: {
      name: "Comparador de Diferencas",
      title: "Comparador de Diferencas",
      description: "Compare dois textos e destaque as diferencas",
      metaTitle: "Comparador de Diferencas — Comparar Texto e Encontrar Diferencas Online",
      metaDescription: "Comparador de diferencas online e gratuito. Compare dois textos lado a lado e veja adicoes, remocoes e alteracoes destacadas. Roda no seu navegador.",
      capsule: "Compare dois textos e veja as diferencas destacadas instantaneamente. Linhas adicionadas aparecem em verde, linhas removidas em vermelho. Util para comparar arquivos de configuracao, respostas de API, versoes de codigo e resultados de testes.",
      faq: [
        {
          q: "Como funciona o algoritmo de diferencas?",
          a: "Esta ferramenta usa um algoritmo baseado na maior subsequencia comum (LCS), similar ao comando diff do Unix. Encontra o conjunto minimo de alteracoes necessarias para transformar um texto em outro, mostrando adicoes, remocoes e linhas inalteradas.",
        },
        {
          q: "Posso comparar codigo com esta ferramenta?",
          a: "Sim. O comparador funciona com qualquer texto, incluindo codigo-fonte, arquivos de configuracao, JSON, XML e CSV. Realiza comparacao linha por linha independente de sintaxe com destaque.",
        },
        {
          q: "Qual e a diferenca entre diff unificado e diff lado a lado?",
          a: "O diff lado a lado mostra ambos os textos em colunas paralelas com alteracoes destacadas. O diff unificado mostra alteracoes em uma unica coluna com prefixos + e -. Esta ferramenta usa a comparacao lado a lado para maior clareza visual.",
        },
      ],
    },
    halfwidthFullwidth: {
      name: "Meia largura ↔ Largura total",
      title: "Conversor Meia Largura / Largura Total",
      description: "Converta entre caracteres de meia largura e largura total",
      metaTitle: "Conversor Meia/Largura Total — Converter Zenkaku Hankaku Online",
      metaDescription: "Conversor de caracteres meia largura e largura total online e gratuito. Converta entre ASCII e formas de largura total, katakana de meia e largura total. Roda no seu navegador.",
      capsule: "Converta texto entre caracteres de meia largura (hankaku) e largura total (zenkaku). Suporta caracteres ASCII, numeros, katakana e simbolos especiais. Todo o processamento acontece no seu navegador.",
      faq: [
        {
          q: "O que sao caracteres de meia largura e largura total?",
          a: "Caracteres de meia largura ocupam uma coluna de largura em fontes monoesapacadas (como ASCII padrao: ABC, 123). Caracteres de largura total ocupam duas colunas (como ＡＢＣ, １２３). Essa distincao e comum na tipografia do Leste Asiatico, onde os caracteres CJK sao naturalmente de largura total.",
        },
        {
          q: "Quando devo converter entre meia largura e largura total?",
          a: "Casos de uso comuns incluem: normalizar a entrada de dados para textos em japones/chines/coreano, formatar texto para exibicoes de largura fixa, preparar dados para sistemas que exigem larguras de caracteres especificas e limpar texto de larguras mistas em documentos.",
        },
        {
          q: "Esta ferramenta lida com a conversao de katakana?",
          a: "Sim. Esta ferramenta converte entre katakana de meia largura (ｶﾀｶﾅ) e katakana de largura total (カタカナ), incluindo o tratamento adequado de marcas de combinacao dakuten (゛) e handakuten (゜).",
        },
      ],
    },
    htmlStrip: {
      name: "Removedor de Tags HTML",
      title: "Removedor de Tags HTML",
      description: "Remova tags HTML e extraia texto simples",
      metaTitle: "Removedor de Tags HTML — Remover Tags HTML Online",
      metaDescription: "Removedor de tags HTML online e gratuito. Remova tags HTML do texto, decodifique entidades e extraia conteudo em texto simples. Roda no seu navegador.",
      capsule: "Remova todas as tags HTML do texto e extraia conteudo limpo em texto simples. Opcoes para preservar quebras de linha, extrair links e decodificar entidades HTML como &amp; e &lt;. Ideal para limpar conteudo copiado da web.",
      faq: [
        {
          q: "O que faz a remocao de tags HTML?",
          a: "A remocao de tags HTML elimina todos os elementos de marcacao (como <p>, <div>, <a>) do texto, deixando apenas o conteudo legivel. Isso e util para extrair texto de paginas web, limpar texto rico ou preparar conteudo para formatos de texto simples.",
        },
        {
          q: "Esta ferramenta decodifica entidades HTML?",
          a: "Sim, quando a opcao 'Decodificar entidades HTML' esta ativada. Entidades comuns como &amp; (→ &), &lt; (→ <), &gt; (→ >), &nbsp; (→ espaco) e entidades numericas como &#169; (→ ©) sao todas convertidas para seus caracteres legiveis.",
        },
        {
          q: "Posso preservar a estrutura do documento?",
          a: "Sim. A opcao 'Preservar quebras de linha' converte elementos de nivel de bloco (p, div, h1-h6, li, br) em quebras de linha, mantendo a estrutura visual do documento original. A opcao 'Extrair links' preserva URLs de tags de ancora.",
        },
      ],
    },
    keywordCounter: {
      name: "Contador de Palavras-chave",
      title: "Contador de Palavras-chave e Analisador de Densidade",
      description: "Conte a frequencia e densidade de palavras-chave",
      metaTitle: "Contador de Palavras-chave — Analise de Frequencia e Densidade de Palavras Online",
      metaDescription: "Contador de palavras-chave e analisador de densidade online e gratuito. Conte a frequencia de palavras, analise a densidade de palavras-chave e encontre frases comuns. Ideal para SEO e redacao de conteudo.",
      capsule: "Analise a frequencia e densidade de palavras-chave em qualquer texto. Visualize contagens de palavras unicas, frases de 2 palavras (bigramas) e frases de 3 palavras (trigramas). Essencial para otimizacao de SEO e analise de conteudo.",
      faq: [
        {
          q: "O que e densidade de palavras-chave?",
          a: "Densidade de palavras-chave e a porcentagem de vezes que uma palavra-chave aparece em relacao ao total de palavras. Por exemplo, se 'javascript' aparece 5 vezes em um artigo de 200 palavras, sua densidade e 2,5%. Especialistas em SEO geralmente recomendam manter a densidade entre 1-3%.",
        },
        {
          q: "O que sao n-gramas (bigramas e trigramas)?",
          a: "N-gramas sao sequencias de palavras consecutivas. Bigramas sao frases de 2 palavras (como 'aprendizado de maquina'), e trigramas sao frases de 3 palavras (como 'processamento de linguagem natural'). Analisar n-gramas ajuda a identificar frases repetidas com frequencia no seu conteudo.",
        },
        {
          q: "Como posso usar a analise de palavras-chave para SEO?",
          a: "A analise de palavras-chave ajuda a garantir que suas palavras-chave alvo aparecam com frequencia adequada. Verifique se sua palavra-chave principal tem densidade de 1-3%, use palavras-chave relacionadas naturalmente ao longo do texto e evite o excesso de palavras-chave que pode prejudicar o ranking de busca.",
        },
      ],
    },
    pdfLineBreakRemover: {
      name: "Removedor de Quebras de Linha PDF",
      title: "Removedor de Quebras de Linha PDF",
      description: "Remova quebras de linha indesejadas de texto copiado de PDFs",
      metaTitle: "Removedor de Quebras de Linha PDF — Limpar Texto Copiado de PDF Online",
      metaDescription: "Removedor de quebras de linha de PDF online e gratuito. Remova quebras de linha indesejadas de texto copiado de PDFs. Preserve paragrafos, corrija hifenizacao. Roda no seu navegador.",
      capsule: "Remova quebras de linha indesejadas de texto copiado de documentos PDF. Preserva automaticamente quebras de paragrafo enquanto une linhas que foram quebradas devido a formatacao do PDF. Suporta textos em ingles e japones.",
      faq: [
        {
          q: "Por que o texto copiado de PDFs tem quebras de linha extras?",
          a: "PDF e um formato de layout de pagina, nao um formato de texto. O texto em PDFs e posicionado visualmente, entao quando voce copia o texto, cada linha visual se torna uma linha de texto separada com quebras de linha fixas. Isso torna o texto copiado dificil de usar em outros aplicativos.",
        },
        {
          q: "Como esta ferramenta detecta quebras de paragrafo versus quebras de linha?",
          a: "A ferramenta trata quebras de linha duplas (linhas vazias) como separadores de paragrafo e quebras de linha simples como formatacao indesejada. Essa heuristica funciona bem para a maioria dos documentos PDF que usam espacamento padrao entre paragrafos.",
        },
        {
          q: "Esta ferramenta suporta texto em japones?",
          a: "Sim. A ferramenta detecta automaticamente texto em japones e une linhas sem adicionar espacos (ja que o japones nao usa espacos entre palavras). Voce tambem pode selecionar manualmente o idioma para melhores resultados.",
        },
      ],
    },
    markdownPreview: {
      name: "Visualizador de Markdown",
      title: "Visualizador e Conversor de Markdown",
      description: "Visualize e converta Markdown para HTML",
      metaTitle: "Visualizador de Markdown — Conversor ao Vivo de Markdown para HTML Online",
      metaDescription: "Visualizador e conversor de Markdown online e gratuito. Escreva Markdown e veja a visualizacao HTML ao vivo. Copie o HTML gerado. Roda no seu navegador.",
      capsule: "Escreva ou cole Markdown e veja instantaneamente a visualizacao renderizada. Alterne entre visualizacao visual e saida HTML bruta. Copie o HTML gerado para uso em blogs, e-mails ou sites.",
      faq: [
        {
          q: "O que e Markdown?",
          a: "Markdown e uma linguagem de marcacao leve criada por John Gruber em 2004. Usa sintaxe de formatacao de texto simples (como # para titulos, * para negrito, - para listas) que pode ser convertida para HTML. E amplamente usado para documentacao, arquivos README, blogs e anotacoes.",
        },
        {
          q: "Quais recursos do Markdown sao suportados?",
          a: "Esta ferramenta suporta recursos padrao do Markdown, incluindo: titulos (h1-h6), negrito, italico, tachado, links, imagens, blocos de codigo com destaque de sintaxe, tabelas, citacoes, listas ordenadas e nao ordenadas, linhas horizontais e listas de tarefas.",
        },
        {
          q: "Posso usar o HTML gerado no meu site?",
          a: "Sim. Alterne para a visualizacao HTML para ver e copiar o codigo HTML gerado. A saida e HTML limpo e semantico que pode ser colado em qualquer site, postagem de blog ou e-mail. O HTML e sanitizado para prevenir ataques XSS.",
        },
      ],
    },
    colorPicker: {
      name: "Seletor de Cores",
      title: "Seletor de Cores e Gerador de Paletas",
      description: "Selecione cores e gere paletas",
      metaTitle: "Seletor de Cores — Gerador de Paletas, Conversor HEX RGB HSL Online",
      metaDescription: "Seletor de cores e gerador de paletas online e gratuito. Converta entre HEX, RGB e HSL. Gere tons e harmonias de cores. Verifique taxas de contraste WCAG.",
      capsule: "Selecione qualquer cor e veja instantaneamente seus valores HEX, RGB e HSL. Gere paletas de tons e harmonias de cores (complementar, analoga, triadica). Verifique taxas de contraste WCAG para conformidade de acessibilidade.",
      faq: [
        {
          q: "O que sao os formatos de cores HEX, RGB e HSL?",
          a: "HEX usa notacao hexadecimal (#FF5733). RGB especifica valores de vermelho, verde e azul (rgb(255, 87, 51)). HSL usa matiz (0-360°), saturacao (0-100%) e luminosidade (0-100%). HSL e frequentemente mais intuitivo para criar variacoes de cores.",
        },
        {
          q: "O que e a taxa de contraste WCAG?",
          a: "WCAG (Diretrizes de Acessibilidade para Conteudo Web) define taxas minimas de contraste para legibilidade do texto. O nivel AA exige 4,5:1 para texto normal e 3:1 para texto grande. O nivel AAA exige 7:1 para texto normal. Isso garante que o conteudo seja legivel por pessoas com deficiencias visuais.",
        },
        {
          q: "O que sao harmonias de cores?",
          a: "Harmonias de cores sao combinacoes de cores baseadas em suas posicoes no circulo cromatico. Cores complementares sao opostas (alto contraste). Cores analogas sao adjacentes (harmoniosas). Cores triadicas sao igualmente espacadas (vibrantes). Complementar dividida oferece contraste com menos tensao.",
        },
      ],
    },
  },
};

export default pt;
