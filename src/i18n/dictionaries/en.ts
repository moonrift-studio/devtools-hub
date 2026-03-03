const en = {
  common: {
    allTools: "All Tools",
    copy: "Copy",
    copied: "Copied!",
    searchTools: "Search tools...",
    clear: "Clear",
    paste: "Paste from clipboard",
    encode: "Encode",
    decode: "Decode",
    generate: "Generate",
    download: "Download",
    input: "Input",
    output: "Output",
    format: "Format",
    minify: "Minify",
    adSpace: "Ad Space",
    all: "All",
    backToTools: "All Tools",
    encodeComponent: "Encode Component",
    encodeUri: "Encode URI",
    length: "Length",
    uppercase: "Uppercase",
    lowercase: "Lowercase",
    numbers: "Numbers",
    symbols: "Symbols",
    strength: "Strength",
    weak: "Weak",
    fair: "Fair",
    strong: "Strong",
    veryStrong: "Very Strong",
    generateMultiple: "Generate Multiple",
    copyAll: "Copy All",
    size: "Size",
    small: "Small",
    medium: "Medium",
    large: "Large",
    errorCorrection: "Error Correction",
    foregroundColor: "Foreground Color",
    backgroundColor: "Background Color",
    downloadPng: "Download as PNG",
    pattern: "Pattern",
    flags: "Flags",
    testString: "Test String",
    matches: "matches",
    noMatches: "No matches",
    match: "Match",
    index: "Index",
    value: "Value",
    groups: "Groups",
    commonPatterns: "Common Patterns",
    email: "Email",
    url: "URL",
    phone: "Phone",
    ipAddress: "IP Address",
    currentTimestamp: "Current Unix Timestamp",
    timestampToDate: "Timestamp to Date",
    dateToTimestamp: "Date to Timestamp",
    useCurrent: "Use Current",
    utc: "UTC",
    localTime: "Local Time",
    iso8601: "ISO 8601",
    relative: "Relative",
    header: "Header",
    payload: "Payload",
    signature: "Signature",
    expired: "Expired",
    valid: "Valid",
    issued: "Issued At",
    expires: "Expires",
    subject: "Subject",
    issuer: "Issuer",
    audience: "Audience",
    notBefore: "Not Before",
    jwtId: "JWT ID",
    generated: "generated",
    characters: "Characters",
    words: "Words",
    lines: "Lines",
    bytes: "Bytes",
    withSpaces: "With spaces",
    withoutSpaces: "Without spaces",
    codePoints: "Code Points",
    frequency: "Frequency",
    algorithm: "Algorithm",
    salt: "Salt",
    iterations: "Iterations",
    memoryCost: "Memory Cost",
    outputLength: "Output Length",
    hashResult: "Hash Result",
    generateSalt: "Generate Salt",
    computing: "Computing...",
    dataType: "Data Type",
    quantity: "Quantity",
    randomString: "Random String",
    randomEmail: "Random Email",
    randomName: "Random Name",
    randomDate: "Random Date",
    randomIp: "Random IP",
    randomPhone: "Random Phone",
    loremIpsum: "Lorem Ipsum",
    randomJson: "Random JSON",
    original: "Original",
    modified: "Modified",
    additions: "Additions",
    deletions: "Deletions",
    unchanged: "Unchanged",
    compare: "Compare",
  },
  home: {
    title: "Free Online Developer Tools",
    subtitle: "Fast, private, browser-based tools. No data leaves your device.",
  },
  footer: {
    copyright: "All tools run client-side. No data is sent to any server.",
  },
  meta: {
    siteTitle: "DevTools Hub — Free Online Developer Tools",
    siteDescription:
      "Free online developer tools: JSON formatter, Base64 encoder, hash generator, UUID generator, and more. All tools run in your browser — fast, private, no data sent to servers.",
  },
  privacy: {
    title: "Privacy Policy",
    metaDescription: "Privacy Policy for DevTools Hub. Learn how we handle your data.",
    lastUpdated: "Last Updated",
    sections: {
      intro: {
        title: "1. Introduction",
        content: "This Privacy Policy describes how DevTools Hub (the \"Service\"), operated by Moonrift Studio (the \"Operator\"), handles information. We are committed to protecting your privacy.",
      },
      dataCollection: {
        title: "2. Data Collection",
        content: "DevTools Hub does NOT collect, store, or transmit any user data. All tools run entirely in your browser (client-side). No text, files, or input data is ever sent to our servers. We do not require account registration or login.",
      },
      cookies: {
        title: "3. Cookies",
        content: "DevTools Hub itself does not use cookies. However, third-party services embedded in the site (such as Google AdSense) may use cookies to serve personalized ads. You can manage cookie preferences through your browser settings.",
      },
      thirdParty: {
        title: "4. Third-Party Services",
        content: "This site uses Google AdSense for advertising. Google may collect and use data according to its own privacy policy (https://policies.google.com/privacy). We do not share any user data with third parties, as we do not collect any.",
      },
      children: {
        title: "5. Children's Privacy",
        content: "This Service is not directed at children under the age of 13. We do not knowingly collect personal information from children.",
      },
      changes: {
        title: "6. Changes to This Policy",
        content: "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.",
      },
      contact: {
        title: "7. Contact",
        content: "If you have any questions about this Privacy Policy, please contact us through our GitHub repository: https://github.com/moonrift-studio/devtools-hub",
      },
    },
  },
  tools: {
    jsonFormatter: {
      name: "JSON Formatter",
      title: "JSON Formatter & Validator",
      description: "Format, validate, and minify JSON data",
      metaTitle: "JSON Formatter & Validator — Format, Beautify, Minify JSON Online",
      metaDescription:
        "Free online JSON formatter, validator, and minifier. Pretty print JSON data. Runs entirely in your browser.",
      capsule:
        "Paste your JSON data and instantly format it with proper indentation, validate its structure, or minify it for production use. This tool runs entirely in your browser — your data never leaves your device.",
      faq: [
        {
          q: "What is JSON formatting?",
          a: "JSON formatting (also called pretty-printing) adds whitespace, indentation, and line breaks to compressed JSON data, making it human-readable. This tool uses 2-space indentation by default.",
        },
        {
          q: "Is my data safe when using this JSON formatter?",
          a: "Yes. This tool processes everything in your browser using JavaScript. No data is sent to any server. You can verify this by using the tool while offline.",
        },
        {
          q: "What is the difference between format and minify?",
          a: "Format adds indentation and line breaks for readability. Minify removes all unnecessary whitespace to reduce file size, which is useful for production APIs and configuration files.",
        },
      ],
    },
    base64: {
      name: "Base64 Encoder/Decoder",
      title: "Base64 Encoder/Decoder",
      description: "Encode and decode Base64 strings",
      metaTitle: "Base64 Encoder/Decoder — Encode & Decode Base64 Online",
      metaDescription:
        "Free online Base64 encoder and decoder. Convert text to Base64 and back. Supports UTF-8.",
      capsule:
        "Convert text to Base64 encoding or decode Base64 strings back to plain text. Supports full UTF-8 characters including emoji and CJK characters. All processing happens client-side.",
      faq: [
        {
          q: "What is Base64 encoding?",
          a: "Base64 is a binary-to-text encoding scheme that represents binary data using 64 ASCII characters (A-Z, a-z, 0-9, +, /). It is commonly used to embed binary data in text-based formats like JSON, XML, HTML, and email.",
        },
        {
          q: "Does Base64 encoding encrypt data?",
          a: "No. Base64 is an encoding, not encryption. Anyone can decode Base64 data. It should never be used to protect sensitive information. Use proper encryption (like AES) for security.",
        },
        {
          q: "Why does Base64 increase the size of data?",
          a: "Base64 encoding increases data size by approximately 33% because it represents 3 bytes of binary data as 4 ASCII characters. This trade-off enables safe transmission through text-only channels.",
        },
      ],
    },
    urlEncoder: {
      name: "URL Encoder/Decoder",
      title: "URL Encoder/Decoder",
      description: "Encode and decode URL components",
      metaTitle: "URL Encoder/Decoder — Encode & Decode URLs Online",
      metaDescription:
        "Free online URL encoder and decoder. Encode and decode URI components.",
      capsule:
        "Encode special characters in URLs using percent-encoding, or decode percent-encoded strings back to readable text. Supports both encodeURIComponent and encodeURI modes.",
      faq: [
        {
          q: "What is URL encoding?",
          a: "URL encoding (percent-encoding) replaces unsafe characters in URLs with a % followed by two hexadecimal digits. For example, a space becomes %20. This ensures URLs are valid and can be transmitted correctly.",
        },
        {
          q: "What is the difference between encodeURI and encodeURIComponent?",
          a: "encodeURI encodes a full URI but preserves characters like :, /, ?, and #. encodeURIComponent encodes everything except letters, digits, and - _ . ~ making it suitable for encoding query parameter values.",
        },
        {
          q: "When should I use URL encoding?",
          a: "Use URL encoding when including user input in URLs, building query strings, or passing special characters in API requests. Most programming languages have built-in functions for this purpose.",
        },
      ],
    },
    hashGenerator: {
      name: "Hash Generator",
      title: "Hash Generator",
      description: "Generate SHA-1, SHA-256, SHA-384, SHA-512 hashes",
      metaTitle: "Hash Generator — Generate SHA-256, SHA-512 Hashes Online",
      metaDescription:
        "Free online hash generator. Compute SHA-1, SHA-256, SHA-384, SHA-512 hashes instantly.",
      capsule:
        "Compute cryptographic hash values for any text using SHA-1, SHA-256, SHA-384, and SHA-512 algorithms. All hashes are generated simultaneously using the Web Crypto API in your browser.",
      faq: [
        {
          q: "What is a hash function?",
          a: "A cryptographic hash function converts input data of any size into a fixed-size string of characters. The same input always produces the same hash, but it is practically impossible to reverse the process or find two inputs with the same hash.",
        },
        {
          q: "Which hash algorithm should I use?",
          a: "SHA-256 is the most widely used and recommended for general purposes. SHA-512 provides stronger security for sensitive applications. SHA-1 is considered weak and should be avoided for security-critical use cases.",
        },
        {
          q: "Can hash values be reversed to find the original text?",
          a: "No. Cryptographic hash functions are one-way functions designed to be computationally infeasible to reverse. However, common strings can be found via rainbow tables, which is why salting is important for password storage.",
        },
      ],
    },
    uuidGenerator: {
      name: "UUID Generator",
      title: "UUID Generator",
      description: "Generate random UUIDs (v4)",
      metaTitle: "UUID Generator — Generate Random UUIDs Online",
      metaDescription:
        "Free online UUID v4 generator. Generate random unique identifiers instantly.",
      capsule:
        "Generate cryptographically random UUID version 4 identifiers. Create single or bulk UUIDs instantly using your browser's built-in crypto.randomUUID() function.",
      faq: [
        {
          q: "What is a UUID?",
          a: "A UUID (Universally Unique Identifier) is a 128-bit identifier formatted as 32 hexadecimal digits in the pattern 8-4-4-4-12 (e.g., 550e8400-e29b-41d4-a716-446655440000). UUID v4 uses random numbers, making collisions practically impossible.",
        },
        {
          q: "Are UUID v4 values truly unique?",
          a: "UUID v4 uses 122 random bits, giving approximately 5.3 x 10^36 possible values. The probability of generating a duplicate is astronomically small — you would need to generate 1 billion UUIDs per second for 85 years to have a 50% chance of one collision.",
        },
        {
          q: "When should I use UUIDs?",
          a: "UUIDs are ideal for database primary keys, distributed systems, session identifiers, and any scenario where unique identifiers must be generated independently without coordination between systems.",
        },
      ],
    },
    timestampConverter: {
      name: "Unix Timestamp Converter",
      title: "Unix Timestamp Converter",
      description: "Convert between Unix timestamps and dates",
      metaTitle: "Unix Timestamp Converter — Convert Timestamps Online",
      metaDescription:
        "Free online Unix timestamp converter. Convert between timestamps and human-readable dates.",
      capsule:
        "Convert Unix timestamps (epoch time) to human-readable dates and vice versa. View results in UTC, local time, ISO 8601, and relative formats. The current timestamp updates in real time.",
      faq: [
        {
          q: "What is a Unix timestamp?",
          a: "A Unix timestamp (also called epoch time) is the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC. It is widely used in programming because it represents time as a single integer, independent of time zones.",
        },
        {
          q: "What is the difference between seconds and milliseconds timestamps?",
          a: "Unix timestamps in seconds are 10 digits long (e.g., 1709251200). JavaScript and many APIs use milliseconds (13 digits, e.g., 1709251200000). This tool auto-detects the format based on the number of digits.",
        },
        {
          q: "What is the Year 2038 problem?",
          a: "Systems storing Unix timestamps as 32-bit signed integers will overflow on January 19, 2038. Modern 64-bit systems are not affected. This tool uses JavaScript which handles timestamps well beyond 2038.",
        },
      ],
    },
    passwordGenerator: {
      name: "Password Generator",
      title: "Password Generator",
      description: "Generate secure random passwords",
      metaTitle: "Password Generator — Generate Secure Passwords Online",
      metaDescription:
        "Free online password generator. Create strong, secure random passwords.",
      capsule:
        "Create strong, random passwords with customizable length and character sets. Uses your browser's cryptographic random number generator (crypto.getRandomValues) for true randomness.",
      faq: [
        {
          q: "What makes a password strong?",
          a: "Password strength depends on length and character diversity. A 16-character password using uppercase, lowercase, numbers, and symbols has approximately 105 bits of entropy, making it practically uncrackable by brute force.",
        },
        {
          q: "Is this password generator secure?",
          a: "Yes. It uses crypto.getRandomValues(), a cryptographically secure random number generator built into your browser. No passwords are transmitted or stored — everything runs locally on your device.",
        },
        {
          q: "How long should my password be?",
          a: "At least 12 characters for important accounts, 16+ characters for high-security accounts. Longer passwords are exponentially harder to crack. Using a password manager allows you to use long, unique passwords for every account.",
        },
      ],
    },
    qrCode: {
      name: "QR Code Generator",
      title: "QR Code Generator",
      description: "Generate QR codes from text or URLs",
      metaTitle: "QR Code Generator — Create QR Codes Online",
      metaDescription:
        "Free online QR code generator. Create QR codes from text or URLs with customizable colors.",
      capsule:
        "Create QR codes from any text or URL with customizable size, colors, and error correction levels. Download your QR code as a PNG image. Generated entirely in your browser.",
      faq: [
        {
          q: "What is a QR code?",
          a: "A QR (Quick Response) code is a two-dimensional barcode that can store text, URLs, contact information, or other data. It can be scanned by smartphone cameras and dedicated QR readers to quickly access the encoded information.",
        },
        {
          q: "What are QR code error correction levels?",
          a: "QR codes have four error correction levels: L (7%), M (15%), Q (25%), and H (30%). Higher levels allow the code to be read even when partially damaged or obscured, but increase the code's size and density.",
        },
        {
          q: "What is the maximum data a QR code can store?",
          a: "A QR code can store up to 7,089 numeric characters, 4,296 alphanumeric characters, or 2,953 bytes of binary data. For practical use, keeping content under 300 characters ensures reliable scanning.",
        },
      ],
    },
    jwtDecoder: {
      name: "JWT Decoder",
      title: "JWT Decoder",
      description: "Decode and inspect JSON Web Tokens",
      metaTitle: "JWT Decoder — Decode JSON Web Tokens Online",
      metaDescription:
        "Free online JWT decoder. Decode and inspect JSON Web Token headers and payloads.",
      capsule:
        "Decode JSON Web Tokens (JWT) to inspect their header, payload, and signature. View standard claims like issuer, expiration, and subject. Check if tokens are expired. No verification is performed — this is for inspection only.",
      faq: [
        {
          q: "What is a JWT?",
          a: "A JSON Web Token (JWT) is a compact, URL-safe token format used for authentication and information exchange. It consists of three Base64-encoded parts separated by dots: header (algorithm), payload (claims), and signature.",
        },
        {
          q: "Is it safe to decode JWTs in the browser?",
          a: "Decoding a JWT only reveals its contents — it does not verify or validate the token. JWT payloads are not encrypted (only Base64-encoded), so anyone with the token can read its contents. Never put sensitive data in JWT payloads.",
        },
        {
          q: "What are common JWT claims?",
          a: "Standard claims include: iss (issuer), sub (subject), aud (audience), exp (expiration time), nbf (not before), iat (issued at), and jti (JWT ID). Custom claims can be added for application-specific data.",
        },
      ],
    },
    regexTester: {
      name: "Regex Tester",
      title: "Regex Tester",
      description: "Test regular expressions with live matching",
      metaTitle: "Regex Tester — Test Regular Expressions Online",
      metaDescription:
        "Free online regex tester. Test regular expressions with live matching and highlighting.",
      capsule:
        "Test and debug regular expressions with real-time matching and highlighting. See all matches, their positions, and captured groups. Includes preset patterns for common use cases like email, URL, and IP validation.",
      faq: [
        {
          q: "What is a regular expression?",
          a: "A regular expression (regex) is a pattern that describes a set of strings. It is used for searching, matching, and manipulating text. For example, \\d+ matches one or more digits, and [a-zA-Z] matches any letter.",
        },
        {
          q: "What are regex flags?",
          a: "Flags modify how the regex engine processes patterns. Common flags: g (global — find all matches), i (case-insensitive), m (multiline — ^ and $ match line boundaries), s (dotAll — . matches newlines), u (Unicode support).",
        },
        {
          q: "How do I match an email address with regex?",
          a: "A practical email regex is: ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$. Note that perfectly validating emails with regex is extremely complex — for production use, combine basic regex validation with actual email verification.",
        },
      ],
    },
    textInspector: {
      name: "Text Inspector",
      title: "Text Inspector & Counter",
      description: "Character count, byte size, Unicode code points",
      metaTitle:
        "Text Inspector — Character Count, Byte Size, Unicode Analysis Online",
      metaDescription:
        "Free online text inspector. Count characters, words, lines, and bytes. View Unicode code points and UTF-8 encoding. Runs in your browser.",
      capsule:
        "Analyze text in detail: count characters, words, lines, and byte sizes in UTF-8 and UTF-16 encodings. View individual Unicode code points, detect character categories, and inspect the encoding of each character.",
      faq: [
        {
          q: "How does character counting differ from byte counting?",
          a: "A character is a single symbol (like 'A' or '\u6F22'), while byte count depends on encoding. In UTF-8, ASCII characters use 1 byte, but CJK characters use 3 bytes and emoji use 4 bytes. UTF-16 uses 2-4 bytes per character.",
        },
        {
          q: "What is a Unicode code point?",
          a: "A Unicode code point is a unique number assigned to each character in the Unicode standard, written as U+XXXX. For example, 'A' is U+0041, '\u6F22' is U+6F22. Unicode supports over 149,000 characters across 161 scripts.",
        },
        {
          q: "Why might string length differ from character count?",
          a: "In JavaScript, string.length counts UTF-16 code units, not characters. Characters outside the Basic Multilingual Plane (like emoji) use two code units (a surrogate pair), so '\uD83D\uDE00'.length is 2, not 1.",
        },
      ],
    },
    passwordHasher: {
      name: "Password Hasher",
      title: "Password Hasher (Argon2id / PBKDF2)",
      description: "Hash passwords with Argon2id, PBKDF2, and salt",
      metaTitle:
        "Password Hasher — Argon2id, PBKDF2 Hash with Salt Online",
      metaDescription:
        "Free online password hasher. Hash passwords using Argon2id or PBKDF2 with configurable salt, iterations, and memory cost. Runs entirely in your browser.",
      capsule:
        "Hash passwords securely using Argon2id (recommended) or PBKDF2-SHA256 with configurable salt, iterations, memory cost, and output length. All computation runs locally in your browser via WebAssembly \u2014 no passwords are transmitted.",
      faq: [
        {
          q: "What is Argon2id?",
          a: "Argon2id is the winner of the Password Hashing Competition (2015) and is recommended by OWASP for password storage. It combines Argon2i (side-channel resistant) and Argon2d (GPU-resistant), providing strong protection against both brute-force and side-channel attacks.",
        },
        {
          q: "What is the difference between hashing and encryption?",
          a: "Hashing is a one-way function \u2014 you cannot recover the original password from its hash. Encryption is reversible with a key. For password storage, always use hashing (Argon2id, bcrypt) rather than encryption.",
        },
        {
          q: "What are recommended Argon2id parameters?",
          a: "OWASP recommends: memory cost of 47,104 KB (46 MiB), iterations of 1, parallelism of 1 as a first-choice configuration. For higher security, increase memory to 19,456 KB with 2 iterations. Always use a random salt of at least 16 bytes.",
        },
      ],
    },
    testDataGenerator: {
      name: "Test Data Generator",
      title: "Test Data Generator",
      description: "Generate dummy data for testing",
      metaTitle:
        "Test Data Generator — Generate Dummy Data, Random Strings Online",
      metaDescription:
        "Free online test data generator. Create random strings, emails, names, dates, IP addresses, and JSON for testing. No server required.",
      capsule:
        "Generate random test data instantly: strings, email addresses, names, dates, IP addresses, phone numbers, Lorem Ipsum text, and structured JSON objects. Specify quantity and format, then copy to clipboard.",
      faq: [
        {
          q: "Why use generated test data instead of real data?",
          a: "Using real user data in testing environments violates privacy regulations (GDPR, CCPA) and creates security risks. Generated dummy data is safe, predictable, and can be customized to match your schema requirements.",
        },
        {
          q: "Is the generated data truly random?",
          a: "This tool uses crypto.getRandomValues() for cryptographic randomness where security matters (like passwords) and Math.random() for general test data. The generated data follows realistic patterns but is entirely synthetic.",
        },
        {
          q: "What formats can I generate?",
          a: "You can generate: random strings (custom length/charset), email addresses, first/last names, dates (within a range), IPv4/IPv6 addresses, phone numbers, Lorem Ipsum paragraphs, and JSON objects with mixed data types.",
        },
      ],
    },
    diffChecker: {
      name: "Diff Checker",
      title: "Diff Checker",
      description: "Compare two texts and highlight differences",
      metaTitle:
        "Diff Checker — Compare Text and Find Differences Online",
      metaDescription:
        "Free online diff checker. Compare two texts side by side and see highlighted additions, deletions, and changes. Runs in your browser.",
      capsule:
        "Compare two pieces of text and instantly see the differences highlighted. Added lines appear in green, removed lines in red. Useful for comparing configuration files, API responses, code versions, and test results.",
      faq: [
        {
          q: "How does the diff algorithm work?",
          a: "This tool uses a longest common subsequence (LCS) based algorithm similar to the Unix diff command. It finds the minimal set of changes needed to transform one text into another, showing additions, deletions, and unchanged lines.",
        },
        {
          q: "Can I compare code with this tool?",
          a: "Yes. The diff checker works with any text, including source code, configuration files, JSON, XML, and CSV. It performs line-by-line comparison with syntax-agnostic highlighting.",
        },
        {
          q: "What is the difference between unified and side-by-side diff?",
          a: "Side-by-side diff shows both texts in parallel columns with changes highlighted. Unified diff shows changes in a single column with + and - prefixes. This tool uses side-by-side comparison for visual clarity.",
        },
      ],
    },
    halfwidthFullwidth: {
      name: "Halfwidth ↔ Fullwidth",
      title: "Halfwidth / Fullwidth Converter",
      description: "Convert between halfwidth and fullwidth characters",
      metaTitle: "Halfwidth Fullwidth Converter — Convert Zenkaku Hankaku Online",
      metaDescription: "Free online halfwidth and fullwidth character converter. Convert between ASCII and fullwidth forms, halfwidth and fullwidth katakana. Runs in your browser.",
      capsule: "Convert text between halfwidth (hankaku) and fullwidth (zenkaku) character forms. Supports ASCII characters, numbers, katakana, and special symbols. All processing happens in your browser.",
      faq: [
        {
          q: "What are halfwidth and fullwidth characters?",
          a: "Halfwidth characters occupy one column width in monospace fonts (like standard ASCII: ABC, 123). Fullwidth characters occupy two column widths (like ＡＢＣ, １２３). This distinction is common in East Asian typography where CJK characters are naturally fullwidth.",
        },
        {
          q: "When should I convert between halfwidth and fullwidth?",
          a: "Common use cases include: normalizing data entry for Japanese/Chinese/Korean text, formatting text for fixed-width displays, preparing data for systems that require specific character widths, and cleaning up mixed-width text in documents.",
        },
        {
          q: "Does this tool handle katakana conversion?",
          a: "Yes. This tool converts between halfwidth katakana (ｶﾀｶﾅ) and fullwidth katakana (カタカナ), including proper handling of dakuten (゛) and handakuten (゜) combining marks.",
        },
      ],
    },
    htmlStrip: {
      name: "HTML Tag Stripper",
      title: "HTML Tag Stripper",
      description: "Remove HTML tags and extract plain text",
      metaTitle: "HTML Tag Stripper — Remove HTML Tags Online",
      metaDescription: "Free online HTML tag remover. Strip HTML tags from text, decode entities, and extract plain text content. Runs in your browser.",
      capsule: "Remove all HTML tags from text and extract clean, plain text content. Options to preserve line breaks, extract links, and decode HTML entities like &amp; and &lt;. Ideal for cleaning up copied web content.",
      faq: [
        {
          q: "What does stripping HTML tags do?",
          a: "Stripping HTML tags removes all markup elements (like <p>, <div>, <a>) from text, leaving only the readable content. This is useful for extracting text from web pages, cleaning up rich text, or preparing content for plain text formats.",
        },
        {
          q: "Will this tool decode HTML entities?",
          a: "Yes, when the 'Decode HTML entities' option is enabled. Common entities like &amp; (→ &), &lt; (→ <), &gt; (→ >), &nbsp; (→ space), and numeric entities like &#169; (→ ©) are all converted to their readable characters.",
        },
        {
          q: "Can I preserve the document structure?",
          a: "Yes. The 'Preserve line breaks' option converts block-level elements (p, div, h1-h6, li, br) into line breaks, maintaining the visual structure of the original document. The 'Extract links' option preserves URLs from anchor tags.",
        },
      ],
    },
    keywordCounter: {
      name: "Keyword Counter",
      title: "Keyword Counter & Density Analyzer",
      description: "Count keyword frequency and density",
      metaTitle: "Keyword Counter — Word Frequency & Density Analysis Online",
      metaDescription: "Free online keyword counter and density analyzer. Count word frequency, analyze keyword density, and find common phrases. Ideal for SEO and content writing.",
      capsule: "Analyze keyword frequency and density in any text. View single word counts, 2-word phrases (bigrams), and 3-word phrases (trigrams). Essential for SEO optimization and content analysis.",
      faq: [
        {
          q: "What is keyword density?",
          a: "Keyword density is the percentage of times a keyword appears relative to the total word count. For example, if 'javascript' appears 5 times in a 200-word article, its density is 2.5%. SEO experts generally recommend keeping keyword density between 1-3%.",
        },
        {
          q: "What are n-grams (bigrams and trigrams)?",
          a: "N-grams are sequences of consecutive words. Bigrams are 2-word phrases (like 'machine learning'), and trigrams are 3-word phrases (like 'natural language processing'). Analyzing n-grams helps identify commonly repeated phrases in your content.",
        },
        {
          q: "How can I use keyword analysis for SEO?",
          a: "Keyword analysis helps ensure your target keywords appear with appropriate frequency. Check that your primary keyword has 1-3% density, use related keywords naturally throughout the text, and avoid keyword stuffing which can harm search rankings.",
        },
      ],
    },
    pdfLineBreakRemover: {
      name: "PDF Line Break Remover",
      title: "PDF Line Break Remover",
      description: "Remove unwanted line breaks from PDF-copied text",
      metaTitle: "PDF Line Break Remover — Clean PDF Copied Text Online",
      metaDescription: "Free online PDF line break remover. Remove unwanted line breaks from text copied from PDFs. Preserve paragraphs, fix hyphenation. Runs in your browser.",
      capsule: "Remove unwanted line breaks from text copied from PDF documents. Automatically preserves paragraph breaks while joining lines that were broken due to PDF formatting. Supports both English and Japanese text.",
      faq: [
        {
          q: "Why does text copied from PDFs have extra line breaks?",
          a: "PDF is a page layout format, not a text format. Text in PDFs is positioned visually, so when you copy text, each visual line becomes a separate text line with hard line breaks. This makes the copied text difficult to use in other applications.",
        },
        {
          q: "How does this tool detect paragraph breaks vs line breaks?",
          a: "The tool treats double line breaks (empty lines) as paragraph separators and single line breaks as unwanted formatting. This heuristic works well for most PDF documents that use standard paragraph spacing.",
        },
        {
          q: "Does this tool support Japanese text?",
          a: "Yes. The tool auto-detects Japanese text and joins lines without adding spaces (since Japanese doesn't use spaces between words). You can also manually select the language for better results.",
        },
      ],
    },
    markdownPreview: {
      name: "Markdown Preview",
      title: "Markdown Preview & Converter",
      description: "Preview and convert Markdown to HTML",
      metaTitle: "Markdown Preview — Live Markdown to HTML Converter Online",
      metaDescription: "Free online Markdown preview and converter. Write Markdown and see live HTML preview. Copy generated HTML. Runs in your browser.",
      capsule: "Write or paste Markdown and instantly see the rendered preview. Switch between visual preview and raw HTML output. Copy the generated HTML for use in blogs, emails, or websites.",
      faq: [
        {
          q: "What is Markdown?",
          a: "Markdown is a lightweight markup language created by John Gruber in 2004. It uses simple text formatting syntax (like # for headings, * for bold, - for lists) that can be converted to HTML. It is widely used for documentation, README files, blogs, and note-taking.",
        },
        {
          q: "What Markdown features are supported?",
          a: "This tool supports standard Markdown features including: headings (h1-h6), bold, italic, strikethrough, links, images, code blocks with syntax highlighting, tables, blockquotes, ordered and unordered lists, horizontal rules, and task lists.",
        },
        {
          q: "Can I use the generated HTML in my website?",
          a: "Yes. Switch to the HTML view to see and copy the generated HTML code. The output is clean, semantic HTML that can be pasted into any website, blog post, or email. The HTML is sanitized to prevent XSS attacks.",
        },
      ],
    },
    colorPicker: {
      name: "Color Picker",
      title: "Color Picker & Palette Generator",
      description: "Pick colors and generate palettes",
      metaTitle: "Color Picker — Color Palette Generator, HEX RGB HSL Converter Online",
      metaDescription: "Free online color picker and palette generator. Convert between HEX, RGB, and HSL. Generate color shades and harmonies. Check WCAG contrast ratios.",
      capsule: "Pick any color and instantly see its HEX, RGB, and HSL values. Generate shade palettes and color harmonies (complementary, analogous, triadic). Check WCAG contrast ratios for accessibility compliance.",
      faq: [
        {
          q: "What are HEX, RGB, and HSL color formats?",
          a: "HEX uses hexadecimal notation (#FF5733). RGB specifies red, green, and blue values (rgb(255, 87, 51)). HSL uses hue (0-360°), saturation (0-100%), and lightness (0-100%). HSL is often more intuitive for creating color variations.",
        },
        {
          q: "What is WCAG contrast ratio?",
          a: "WCAG (Web Content Accessibility Guidelines) defines minimum contrast ratios for text readability. Level AA requires 4.5:1 for normal text and 3:1 for large text. Level AAA requires 7:1 for normal text. This ensures content is readable by people with visual impairments.",
        },
        {
          q: "What are color harmonies?",
          a: "Color harmonies are color combinations based on their positions on the color wheel. Complementary colors are opposite (high contrast). Analogous colors are adjacent (harmonious). Triadic colors are evenly spaced (vibrant). Split complementary offers contrast with less tension.",
        },
      ],
    },
  },
};

export type Dictionary = typeof en;
export default en;
