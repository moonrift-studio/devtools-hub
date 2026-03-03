import type { Locale } from "./config";

type WarnableToolKey =
  | "jsonFormatter"
  | "regexTester"
  | "textInspector"
  | "diffChecker"
  | "pdfLineBreakRemover";

const warnings: Record<WarnableToolKey, Record<Locale, string[]>> = {
  jsonFormatter: {
    en: [
      "Numbers larger than 2\u2075\u00B3 (9007199254740992) may lose precision due to JavaScript's floating-point limitation.",
      "Only strict JSON syntax is supported. Trailing commas, comments, and single quotes will cause parse errors.",
    ],
    ja: [
      "2\u2075\u00B3\uFF089007199254740992\uFF09\u3092\u8D85\u3048\u308B\u6570\u5024\u306F\u3001JavaScript\u306E\u6D6E\u52D5\u5C0F\u6570\u70B9\u306E\u5236\u9650\u306B\u3088\u308A\u7CBE\u5EA6\u304C\u5931\u308F\u308C\u308B\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002",
      "\u53B3\u5BC6\u306AJSON\u69CB\u6587\u306E\u307F\u5BFE\u5FDC\u3057\u3066\u3044\u307E\u3059\u3002\u672B\u5C3E\u30AB\u30F3\u30DE\u3001\u30B3\u30E1\u30F3\u30C8\u3001\u30B7\u30F3\u30B0\u30EB\u30AF\u30A9\u30FC\u30C8\u306F\u30D1\u30FC\u30B9\u30A8\u30E9\u30FC\u306B\u306A\u308A\u307E\u3059\u3002",
    ],
    ko: [
      "2\u2075\u00B3(9007199254740992)\uBCF4\uB2E4 \uD070 \uC22B\uC790\uB294 JavaScript \uBD80\uB3D9\uC18C\uC218\uC810 \uC81C\uD55C\uC73C\uB85C \uC778\uD574 \uC815\uBC00\uB3C4\uAC00 \uC190\uC2E4\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
      "\uC5C4\uACA9\uD55C JSON \uAD6C\uBB38\uB9CC \uC9C0\uC6D0\uB429\uB2C8\uB2E4. \uD6C4\uD589 \uC27C\uD45C, \uC8FC\uC11D, \uC791\uC740\uB530\uC634\uD45C\uB294 \uD30C\uC2F1 \uC624\uB958\uB97C \uBC1C\uC0DD\uC2DC\uD0B5\uB2C8\uB2E4.",
    ],
    de: [
      "Zahlen gr\u00F6\u00DFer als 2\u2075\u00B3 (9007199254740992) k\u00F6nnen aufgrund der JavaScript-Gleitkomma-Beschr\u00E4nkung an Pr\u00E4zision verlieren.",
      "Nur strikte JSON-Syntax wird unterst\u00FCtzt. Nachgestellte Kommas, Kommentare und einfache Anf\u00FChrungszeichen f\u00FChren zu Parsing-Fehlern.",
    ],
    fr: [
      "Les nombres sup\u00E9rieurs \u00E0 2\u2075\u00B3 (9007199254740992) peuvent perdre en pr\u00E9cision en raison des limites de virgule flottante de JavaScript.",
      "Seule la syntaxe JSON stricte est prise en charge. Les virgules finales, les commentaires et les guillemets simples provoquent des erreurs d'analyse.",
    ],
    es: [
      "Los n\u00FAmeros mayores que 2\u2075\u00B3 (9007199254740992) pueden perder precisi\u00F3n debido a la limitaci\u00F3n de punto flotante de JavaScript.",
      "Solo se admite la sintaxis JSON estricta. Las comas finales, comentarios y comillas simples provocan errores de an\u00E1lisis.",
    ],
    pt: [
      "N\u00FAmeros maiores que 2\u2075\u00B3 (9007199254740992) podem perder precis\u00E3o devido \u00E0 limita\u00E7\u00E3o de ponto flutuante do JavaScript.",
      "Apenas sintaxe JSON estrita \u00E9 suportada. V\u00EDrgulas finais, coment\u00E1rios e aspas simples causam erros de an\u00E1lise.",
    ],
  },
  regexTester: {
    en: [
      "Complex patterns with excessive backtracking (e.g., nested quantifiers like (a+)+) may cause the browser to freeze.",
    ],
    ja: [
      "\u904E\u5EA6\u306A\u30D0\u30C3\u30AF\u30C8\u30E9\u30C3\u30AD\u30F3\u30B0\u3092\u4F34\u3046\u8907\u96D1\u306A\u30D1\u30BF\u30FC\u30F3\uFF08\u4F8B\uFF1A(a+)+ \u306E\u3088\u3046\u306A\u30CD\u30B9\u30C8\u3055\u308C\u305F\u91CF\u6307\u5B9A\u5B50\uFF09\u306F\u30D6\u30E9\u30A6\u30B6\u304C\u30D5\u30EA\u30FC\u30BA\u3059\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002",
    ],
    ko: [
      "\uACFC\uB3C4\uD55C \uBC31\uD2B8\uB798\uD0B9\uC774 \uBC1C\uC0DD\uD558\uB294 \uBCF5\uC7A1\uD55C \uD328\uD134(\uC608: (a+)+ \uAC19\uC740 \uC911\uCCA9 \uC218\uB7C9\uC790)\uC740 \uBE0C\uB77C\uC6B0\uC800\uAC00 \uBA48\uCD9C \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
    ],
    de: [
      "Komplexe Muster mit \u00FCberm\u00E4\u00DFigem Backtracking (z.B. verschachtelte Quantifizierer wie (a+)+) k\u00F6nnen den Browser einfrieren.",
    ],
    fr: [
      "Les motifs complexes avec un backtracking excessif (par ex. des quantificateurs imbriqu\u00E9s comme (a+)+) peuvent bloquer le navigateur.",
    ],
    es: [
      "Los patrones complejos con retroceso excesivo (por ejemplo, cuantificadores anidados como (a+)+) pueden bloquear el navegador.",
    ],
    pt: [
      "Padr\u00F5es complexos com retrocesso excessivo (por exemplo, quantificadores aninhados como (a+)+) podem travar o navegador.",
    ],
  },
  textInspector: {
    en: [
      "Composite emoji (such as family emoji or flags) may be counted as multiple characters.",
    ],
    ja: [
      "\u5408\u6210\u7D75\u6587\u5B57\uFF08\u5BB6\u65CF\u7D75\u6587\u5B57\u3084\u56FD\u65D7\u306A\u3069\uFF09\u306F\u8907\u6570\u6587\u5B57\u3068\u3057\u3066\u30AB\u30A6\u30F3\u30C8\u3055\u308C\u308B\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002",
    ],
    ko: [
      "\uD569\uC131 \uC774\uBAA8\uC9C0(\uAC00\uC871 \uC774\uBAA8\uC9C0, \uAD6D\uAE30 \uB4F1)\uB294 \uC5EC\uB7EC \uBB38\uC790\uB85C \uCE74\uC6B4\uD2B8\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
    ],
    de: [
      "Zusammengesetzte Emoji (z.B. Familien-Emoji oder Flaggen) k\u00F6nnen als mehrere Zeichen gez\u00E4hlt werden.",
    ],
    fr: [
      "Les \u00E9mojis composites (comme les \u00E9mojis de famille ou les drapeaux) peuvent \u00EAtre compt\u00E9s comme plusieurs caract\u00E8res.",
    ],
    es: [
      "Los emojis compuestos (como emojis de familia o banderas) pueden contarse como m\u00FAltiples caracteres.",
    ],
    pt: [
      "Emojis compostos (como emojis de fam\u00EDlia ou bandeiras) podem ser contados como m\u00FAltiplos caracteres.",
    ],
  },
  diffChecker: {
    en: [
      "Comparing very large texts (over 10,000 lines) may cause high memory usage or browser slowdown.",
    ],
    ja: [
      "\u975E\u5E38\u306B\u5927\u304D\u306A\u30C6\u30AD\u30B9\u30C8\uFF0810,000\u884C\u4EE5\u4E0A\uFF09\u306E\u6BD4\u8F03\u306F\u3001\u30E1\u30E2\u30EA\u4F7F\u7528\u91CF\u304C\u9AD8\u304F\u306A\u308A\u30D6\u30E9\u30A6\u30B6\u304C\u9045\u304F\u306A\u308B\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002",
    ],
    ko: [
      "\uB9E4\uC6B0 \uD070 \uD14D\uC2A4\uD2B8(10,000\uC904 \uC774\uC0C1) \uBE44\uAD50 \uC2DC \uB192\uC740 \uBA54\uBAA8\uB9AC \uC0AC\uC6A9\uB7C9\uC774\uB098 \uBE0C\uB77C\uC6B0\uC800 \uC18D\uB3C4 \uC800\uD558\uAC00 \uBC1C\uC0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
    ],
    de: [
      "Der Vergleich sehr gro\u00DFer Texte (\u00FCber 10.000 Zeilen) kann zu hohem Speicherverbrauch oder Browser-Verlangsamung f\u00FChren.",
    ],
    fr: [
      "La comparaison de textes tr\u00E8s volumineux (plus de 10 000 lignes) peut entra\u00EEner une utilisation \u00E9lev\u00E9e de la m\u00E9moire ou un ralentissement du navigateur.",
    ],
    es: [
      "Comparar textos muy grandes (m\u00E1s de 10.000 l\u00EDneas) puede causar un alto uso de memoria o ralentizaci\u00F3n del navegador.",
    ],
    pt: [
      "Comparar textos muito grandes (mais de 10.000 linhas) pode causar alto uso de mem\u00F3ria ou lentid\u00E3o no navegador.",
    ],
  },
  pdfLineBreakRemover: {
    en: [
      "Multi-column PDF layouts may produce garbled output.",
      "Bullet points and numbered list formatting may be lost.",
    ],
    ja: [
      "\u6BB5\u7D44\u307F\uFF08\u30DE\u30EB\u30C1\u30AB\u30E9\u30E0\uFF09\u30EC\u30A4\u30A2\u30A6\u30C8\u306EPDF\u306F\u6B63\u3057\u304F\u51E6\u7406\u3067\u304D\u306A\u3044\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002",
      "\u7B87\u6761\u66F8\u304D\u3084\u756A\u53F7\u4ED8\u304D\u30EA\u30B9\u30C8\u306E\u66F8\u5F0F\u304C\u5931\u308F\u308C\u308B\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u3002",
    ],
    ko: [
      "\uB2E4\uB2E8 \uB808\uC774\uC544\uC6C3 PDF\uB294 \uC62C\uBC14\uB974\uAC8C \uCC98\uB9AC\uB418\uC9C0 \uC54A\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
      "\uAE00\uBA38\uB9AC \uAE30\uD638 \uBC0F \uBC88\uD638 \uBAA9\uB85D \uC11C\uC2DD\uC774 \uC190\uC2E4\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",
    ],
    de: [
      "Mehrspaltige PDF-Layouts werden m\u00F6glicherweise nicht korrekt verarbeitet.",
      "Aufz\u00E4hlungszeichen und nummerierte Listen k\u00F6nnen verloren gehen.",
    ],
    fr: [
      "Les PDF avec mise en page multi-colonnes peuvent ne pas \u00EAtre trait\u00E9s correctement.",
      "La mise en forme des puces et des listes num\u00E9rot\u00E9es peut \u00EAtre perdue.",
    ],
    es: [
      "Los PDF con dise\u00F1o de m\u00FAltiples columnas pueden no procesarse correctamente.",
      "El formato de vi\u00F1etas y listas numeradas puede perderse.",
    ],
    pt: [
      "PDFs com layout de m\u00FAltiplas colunas podem n\u00E3o ser processados corretamente.",
      "A formata\u00E7\u00E3o de marcadores e listas numeradas pode ser perdida.",
    ],
  },
};

export function getToolWarnings(toolKey: string, locale: string): string[] {
  if (toolKey in warnings) {
    const localeWarnings = warnings[toolKey as WarnableToolKey];
    return localeWarnings[locale as Locale] || localeWarnings.en;
  }
  return [];
}
