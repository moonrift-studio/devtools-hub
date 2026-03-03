"use client";

import { useState, useCallback } from "react";
import CopyButton from "@/components/CopyButton";
import { useDictionary } from "@/i18n/DictionaryProvider";

// --- Constants ---

const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SYMBOLS = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`";
const HEX = "0123456789abcdef";

const FIRST_NAMES = [
  "James", "Mary", "Robert", "Patricia", "John", "Jennifer", "Michael", "Linda",
  "David", "Elizabeth", "William", "Barbara", "Richard", "Susan", "Joseph", "Jessica",
  "Thomas", "Sarah", "Charles", "Karen", "Christopher", "Lisa", "Daniel", "Nancy",
  "Matthew", "Betty", "Anthony", "Margaret", "Mark", "Sandra", "Donald", "Ashley",
  "Steven", "Kimberly", "Paul", "Emily", "Andrew", "Donna", "Joshua", "Michelle",
  "Kenneth", "Carol", "Kevin", "Amanda", "Brian", "Dorothy", "George", "Melissa",
  "Timothy", "Deborah", "Ronald", "Stephanie", "Edward", "Rebecca", "Jason", "Sharon",
];

const LAST_NAMES = [
  "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis",
  "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson",
  "Thomas", "Taylor", "Moore", "Jackson", "Martin", "Lee", "Perez", "Thompson",
  "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson", "Walker",
  "Young", "Allen", "King", "Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores",
  "Green", "Adams", "Nelson", "Baker", "Hall", "Rivera", "Campbell", "Mitchell",
  "Carter", "Roberts", "Gomez", "Phillips", "Evans", "Turner", "Diaz", "Parker",
];

const EMAIL_DOMAINS = [
  "gmail.com", "yahoo.com", "outlook.com", "example.com", "test.org",
  "mail.com", "protonmail.com", "hotmail.com", "company.io", "dev.net",
];

const LOREM_WORDS = [
  "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit",
  "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore",
  "magna", "aliqua", "enim", "ad", "minim", "veniam", "quis", "nostrud",
  "exercitation", "ullamco", "laboris", "nisi", "aliquip", "ex", "ea", "commodo",
  "consequat", "duis", "aute", "irure", "in", "reprehenderit", "voluptate",
  "velit", "esse", "cillum", "fugiat", "nulla", "pariatur", "excepteur", "sint",
  "occaecat", "cupidatat", "non", "proident", "sunt", "culpa", "qui", "officia",
  "deserunt", "mollit", "anim", "id", "est", "laborum", "ac", "ante", "bibendum",
  "cras", "congue", "eget", "faucibus", "felis", "fermentum", "hendrerit",
  "justo", "lacus", "lectus", "leo", "ligula", "lobortis", "luctus", "maecenas",
  "massa", "mattis", "mauris", "metus", "morbi", "nam", "nec", "neque", "nibh",
  "nunc", "odio", "orci", "pellentesque", "pharetra", "placerat", "porta",
  "posuere", "potenti", "praesent", "pretium", "primis", "pulvinar", "purus",
  "quam", "quisque", "rhoncus", "risus", "rutrum", "sagittis", "sapien",
  "scelerisque", "semper", "sollicitudin", "suscipit", "tellus", "tincidunt",
  "tortor", "tristique", "turpis", "urna", "varius", "vel", "vestibulum",
  "vitae", "vivamus", "viverra", "volutpat", "vulputate",
];

const JSON_KEY_WORDS = [
  "id", "name", "email", "age", "status", "type", "value", "label",
  "title", "description", "count", "price", "active", "enabled", "code",
  "key", "data", "result", "message", "score",
];

// --- Data types ---

type DataType =
  | "randomString"
  | "randomEmail"
  | "randomName"
  | "randomDate"
  | "randomIp"
  | "randomPhone"
  | "loremIpsum"
  | "randomJson";

type NameFormat = "first" | "last" | "full";
type IpVersion = "ipv4" | "ipv6";
type LoremUnit = "words" | "sentences" | "paragraphs";
type JsonValueType = "string" | "number" | "boolean" | "null";

// --- Helpers ---

function secureRandom(max: number): number {
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);
  return array[0] % max;
}

function randomInt(min: number, max: number): number {
  return min + secureRandom(max - min + 1);
}

function pickRandom<T>(arr: T[]): T {
  return arr[secureRandom(arr.length)];
}

function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = secureRandom(i + 1);
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// --- Generators ---

function generateRandomString(
  length: number,
  useUppercase: boolean,
  useLowercase: boolean,
  useNumbers: boolean,
  useSymbols: boolean
): string {
  let charset = "";
  if (useUppercase) charset += UPPERCASE;
  if (useLowercase) charset += LOWERCASE;
  if (useNumbers) charset += NUMBERS;
  if (useSymbols) charset += SYMBOLS;
  if (charset.length === 0) charset = LOWERCASE + NUMBERS;

  const chars: string[] = [];
  for (let i = 0; i < length; i++) {
    chars.push(charset[secureRandom(charset.length)]);
  }
  return chars.join("");
}

function generateRandomEmail(fixedDomain: string): string {
  const username = generateRandomString(randomInt(5, 12), false, true, true, false);
  const domain = fixedDomain || pickRandom(EMAIL_DOMAINS);
  return `${username}@${domain}`;
}

function generateRandomName(format: NameFormat): string {
  const first = pickRandom(FIRST_NAMES);
  const last = pickRandom(LAST_NAMES);
  if (format === "first") return first;
  if (format === "last") return last;
  return `${first} ${last}`;
}

function generateRandomDate(from: string, to: string): string {
  const start = from ? new Date(from).getTime() : new Date("2000-01-01").getTime();
  const end = to ? new Date(to).getTime() : Date.now();
  const validStart = isNaN(start) ? new Date("2000-01-01").getTime() : start;
  const validEnd = isNaN(end) ? Date.now() : end;
  const timestamp = validStart + secureRandom(Math.max(1, validEnd - validStart));
  return new Date(timestamp).toISOString().split("T")[0];
}

function generateIPv4(): string {
  return `${randomInt(1, 255)}.${randomInt(0, 255)}.${randomInt(0, 255)}.${randomInt(0, 255)}`;
}

function generateIPv6(): string {
  const groups: string[] = [];
  for (let i = 0; i < 8; i++) {
    let group = "";
    for (let j = 0; j < 4; j++) {
      group += HEX[secureRandom(16)];
    }
    groups.push(group);
  }
  return groups.join(":");
}

function generateRandomIp(version: IpVersion): string {
  return version === "ipv4" ? generateIPv4() : generateIPv6();
}

function generateRandomPhone(): string {
  const area = randomInt(200, 999);
  const prefix = randomInt(200, 999);
  const line = randomInt(1000, 9999);
  return `+1-${area}-${prefix}-${line}`;
}

function generateLoremIpsum(count: number, unit: LoremUnit): string {
  if (unit === "words") {
    const words = shuffleArray(LOREM_WORDS).slice(0, Math.min(count, LOREM_WORDS.length));
    while (words.length < count) {
      words.push(pickRandom(LOREM_WORDS));
    }
    return words.join(" ");
  }

  if (unit === "sentences") {
    const sentences: string[] = [];
    for (let i = 0; i < count; i++) {
      const wordCount = randomInt(6, 15);
      const words = Array.from({ length: wordCount }, () => pickRandom(LOREM_WORDS));
      words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
      sentences.push(words.join(" ") + ".");
    }
    return sentences.join(" ");
  }

  // paragraphs
  const paragraphs: string[] = [];
  for (let i = 0; i < count; i++) {
    const sentenceCount = randomInt(3, 7);
    const sentences: string[] = [];
    for (let j = 0; j < sentenceCount; j++) {
      const wordCount = randomInt(6, 15);
      const words = Array.from({ length: wordCount }, () => pickRandom(LOREM_WORDS));
      words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
      sentences.push(words.join(" ") + ".");
    }
    paragraphs.push(sentences.join(" "));
  }
  return paragraphs.join("\n\n");
}

function generateRandomJsonValue(type: JsonValueType): unknown {
  switch (type) {
    case "string":
      return generateRandomString(randomInt(4, 12), false, true, false, false);
    case "number":
      return randomInt(0, 10000);
    case "boolean":
      return secureRandom(2) === 0;
    case "null":
      return null;
  }
}

function generateRandomJson(keyCount: number, valueTypes: JsonValueType[]): string {
  const types = valueTypes.length > 0 ? valueTypes : ["string" as JsonValueType];
  const keys = shuffleArray(JSON_KEY_WORDS).slice(0, Math.min(keyCount, JSON_KEY_WORDS.length));
  while (keys.length < keyCount) {
    keys.push(`field_${keys.length + 1}`);
  }
  const obj: Record<string, unknown> = {};
  for (const key of keys) {
    const type = pickRandom(types);
    obj[key] = generateRandomJsonValue(type);
  }
  return JSON.stringify(obj, null, 2);
}

// --- Component ---

const DATA_TYPES: DataType[] = [
  "randomString",
  "randomEmail",
  "randomName",
  "randomDate",
  "randomIp",
  "randomPhone",
  "loremIpsum",
  "randomJson",
];

export default function TestDataGeneratorClient() {
  const dict = useDictionary();

  // Common state
  const [dataType, setDataType] = useState<DataType>("randomString");
  const [quantity, setQuantity] = useState(10);
  const [output, setOutput] = useState("");

  // Random String options
  const [strLength, setStrLength] = useState(16);
  const [strUppercase, setStrUppercase] = useState(true);
  const [strLowercase, setStrLowercase] = useState(true);
  const [strNumbers, setStrNumbers] = useState(true);
  const [strSymbols, setStrSymbols] = useState(false);

  // Random Email options
  const [emailDomainMode, setEmailDomainMode] = useState<"random" | "fixed">("random");
  const [emailFixedDomain, setEmailFixedDomain] = useState("example.com");

  // Random Name options
  const [nameFormat, setNameFormat] = useState<NameFormat>("full");

  // Random Date options
  const [dateFrom, setDateFrom] = useState("2000-01-01");
  const [dateTo, setDateTo] = useState(new Date().toISOString().split("T")[0]);

  // Random IP options
  const [ipVersion, setIpVersion] = useState<IpVersion>("ipv4");

  // Lorem Ipsum options
  const [loremUnit, setLoremUnit] = useState<LoremUnit>("sentences");

  // Random JSON options
  const [jsonKeyCount, setJsonKeyCount] = useState(5);
  const [jsonValueTypes, setJsonValueTypes] = useState<JsonValueType[]>(["string", "number", "boolean"]);

  const dataTypeLabels: Record<DataType, string> = {
    randomString: dict.common.randomString,
    randomEmail: dict.common.randomEmail,
    randomName: dict.common.randomName,
    randomDate: dict.common.randomDate,
    randomIp: dict.common.randomIp,
    randomPhone: dict.common.randomPhone,
    loremIpsum: dict.common.loremIpsum,
    randomJson: dict.common.randomJson,
  };

  const toggleJsonValueType = (type: JsonValueType) => {
    setJsonValueTypes((prev) => {
      if (prev.includes(type)) {
        if (prev.length === 1) return prev; // keep at least one
        return prev.filter((t) => t !== type);
      }
      return [...prev, type];
    });
  };

  const handleGenerate = useCallback(() => {
    const clampedQuantity = Math.max(1, Math.min(100, quantity));
    const results: string[] = [];

    for (let i = 0; i < clampedQuantity; i++) {
      switch (dataType) {
        case "randomString":
          results.push(generateRandomString(strLength, strUppercase, strLowercase, strNumbers, strSymbols));
          break;
        case "randomEmail":
          results.push(generateRandomEmail(emailDomainMode === "fixed" ? emailFixedDomain : ""));
          break;
        case "randomName":
          results.push(generateRandomName(nameFormat));
          break;
        case "randomDate":
          results.push(generateRandomDate(dateFrom, dateTo));
          break;
        case "randomIp":
          results.push(generateRandomIp(ipVersion));
          break;
        case "randomPhone":
          results.push(generateRandomPhone());
          break;
        case "loremIpsum":
          results.push(generateLoremIpsum(clampedQuantity, loremUnit));
          setOutput(results[0]);
          return;
        case "randomJson":
          results.push(generateRandomJson(jsonKeyCount, jsonValueTypes));
          break;
      }
    }

    setOutput(results.join("\n"));
  }, [
    dataType, quantity, strLength, strUppercase, strLowercase, strNumbers, strSymbols,
    emailDomainMode, emailFixedDomain, nameFormat, dateFrom, dateTo,
    ipVersion, loremUnit, jsonKeyCount, jsonValueTypes,
  ]);

  return (
    <div className="space-y-6">
      {/* Data Type Selector */}
      <div>
        <label className="text-sm font-medium block mb-3">{dict.common.dataType}</label>
        <div className="flex flex-wrap gap-2">
          {DATA_TYPES.map((type) => (
            <button
              key={type}
              onClick={() => { setDataType(type); setOutput(""); }}
              className={`px-3 py-1.5 text-sm rounded-md transition-colors cursor-pointer font-medium ${
                dataType === type
                  ? "bg-primary text-white"
                  : "bg-input-bg border border-input-border text-foreground hover:border-primary"
              }`}
            >
              {dataTypeLabels[type]}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity Input (hidden for Lorem Ipsum) */}
      {dataType !== "loremIpsum" && (
        <div>
          <label htmlFor="quantity" className="text-sm font-medium block mb-2">
            {dict.common.quantity}
          </label>
          <input
            id="quantity"
            type="number"
            min={1}
            max={100}
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, Math.min(100, Number(e.target.value) || 1)))}
            className="w-28 font-mono text-sm"
          />
        </div>
      )}

      {/* Options per Data Type */}
      <div className="p-4 bg-input-bg rounded-lg border border-input-border space-y-4">
        {/* Random String Options */}
        {dataType === "randomString" && (
          <>
            <div>
              <label htmlFor="str-length" className="text-sm font-medium block mb-2">
                {dict.common.length}
              </label>
              <input
                id="str-length"
                type="number"
                min={1}
                max={256}
                value={strLength}
                onChange={(e) => setStrLength(Math.max(1, Math.min(256, Number(e.target.value) || 1)))}
                className="w-28 font-mono text-sm"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <label className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-card transition-colors">
                <input
                  type="checkbox"
                  checked={strUppercase}
                  onChange={(e) => setStrUppercase(e.target.checked)}
                  className="w-4 h-4 rounded accent-primary cursor-pointer"
                />
                <span className="text-sm">{dict.common.uppercase} (A-Z)</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-card transition-colors">
                <input
                  type="checkbox"
                  checked={strLowercase}
                  onChange={(e) => setStrLowercase(e.target.checked)}
                  className="w-4 h-4 rounded accent-primary cursor-pointer"
                />
                <span className="text-sm">{dict.common.lowercase} (a-z)</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-card transition-colors">
                <input
                  type="checkbox"
                  checked={strNumbers}
                  onChange={(e) => setStrNumbers(e.target.checked)}
                  className="w-4 h-4 rounded accent-primary cursor-pointer"
                />
                <span className="text-sm">{dict.common.numbers} (0-9)</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-card transition-colors">
                <input
                  type="checkbox"
                  checked={strSymbols}
                  onChange={(e) => setStrSymbols(e.target.checked)}
                  className="w-4 h-4 rounded accent-primary cursor-pointer"
                />
                <span className="text-sm">{dict.common.symbols} (!@#$%...)</span>
              </label>
            </div>
          </>
        )}

        {/* Random Email Options */}
        {dataType === "randomEmail" && (
          <div className="space-y-3">
            <label className="text-sm font-medium block">Domain</label>
            <div className="flex gap-3">
              <label className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-card transition-colors">
                <input
                  type="radio"
                  name="email-domain"
                  checked={emailDomainMode === "random"}
                  onChange={() => setEmailDomainMode("random")}
                  className="w-4 h-4 accent-primary cursor-pointer"
                />
                <span className="text-sm">Random</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-card transition-colors">
                <input
                  type="radio"
                  name="email-domain"
                  checked={emailDomainMode === "fixed"}
                  onChange={() => setEmailDomainMode("fixed")}
                  className="w-4 h-4 accent-primary cursor-pointer"
                />
                <span className="text-sm">Fixed</span>
              </label>
            </div>
            {emailDomainMode === "fixed" && (
              <input
                type="text"
                value={emailFixedDomain}
                onChange={(e) => setEmailFixedDomain(e.target.value)}
                placeholder="example.com"
                className="w-60 font-mono text-sm"
              />
            )}
          </div>
        )}

        {/* Random Name Options */}
        {dataType === "randomName" && (
          <div className="space-y-3">
            <label className="text-sm font-medium block">{dict.common.format}</label>
            <div className="flex gap-3">
              {(["full", "first", "last"] as NameFormat[]).map((fmt) => (
                <label
                  key={fmt}
                  className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-card transition-colors"
                >
                  <input
                    type="radio"
                    name="name-format"
                    checked={nameFormat === fmt}
                    onChange={() => setNameFormat(fmt)}
                    className="w-4 h-4 accent-primary cursor-pointer"
                  />
                  <span className="text-sm capitalize">
                    {fmt === "full" ? "Full Name" : fmt === "first" ? "First Name" : "Last Name"}
                  </span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Random Date Options */}
        {dataType === "randomDate" && (
          <div className="flex flex-wrap gap-4">
            <div>
              <label htmlFor="date-from" className="text-sm font-medium block mb-2">From</label>
              <input
                id="date-from"
                type="date"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
                className="w-44 font-mono text-sm"
              />
            </div>
            <div>
              <label htmlFor="date-to" className="text-sm font-medium block mb-2">To</label>
              <input
                id="date-to"
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                className="w-44 font-mono text-sm"
              />
            </div>
          </div>
        )}

        {/* Random IP Options */}
        {dataType === "randomIp" && (
          <div className="space-y-3">
            <label className="text-sm font-medium block">Version</label>
            <div className="flex gap-3">
              <label className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-card transition-colors">
                <input
                  type="radio"
                  name="ip-version"
                  checked={ipVersion === "ipv4"}
                  onChange={() => setIpVersion("ipv4")}
                  className="w-4 h-4 accent-primary cursor-pointer"
                />
                <span className="text-sm">IPv4</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-card transition-colors">
                <input
                  type="radio"
                  name="ip-version"
                  checked={ipVersion === "ipv6"}
                  onChange={() => setIpVersion("ipv6")}
                  className="w-4 h-4 accent-primary cursor-pointer"
                />
                <span className="text-sm">IPv6</span>
              </label>
            </div>
          </div>
        )}

        {/* Random Phone — no additional options */}
        {dataType === "randomPhone" && (
          <p className="text-sm text-muted">
            Format: +1-XXX-XXX-XXXX
          </p>
        )}

        {/* Lorem Ipsum Options */}
        {dataType === "loremIpsum" && (
          <div className="space-y-3">
            <div>
              <label htmlFor="lorem-count" className="text-sm font-medium block mb-2">
                {dict.common.quantity}
              </label>
              <input
                id="lorem-count"
                type="number"
                min={1}
                max={100}
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, Math.min(100, Number(e.target.value) || 1)))}
                className="w-28 font-mono text-sm"
              />
            </div>
            <div>
              <label className="text-sm font-medium block mb-2">Unit</label>
              <div className="flex gap-3">
                {(["words", "sentences", "paragraphs"] as LoremUnit[]).map((unit) => (
                  <label
                    key={unit}
                    className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-card transition-colors"
                  >
                    <input
                      type="radio"
                      name="lorem-unit"
                      checked={loremUnit === unit}
                      onChange={() => setLoremUnit(unit)}
                      className="w-4 h-4 accent-primary cursor-pointer"
                    />
                    <span className="text-sm capitalize">{unit}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Random JSON Options */}
        {dataType === "randomJson" && (
          <div className="space-y-4">
            <div>
              <label htmlFor="json-keys" className="text-sm font-medium block mb-2">
                Number of Keys
              </label>
              <input
                id="json-keys"
                type="number"
                min={1}
                max={20}
                value={jsonKeyCount}
                onChange={(e) => setJsonKeyCount(Math.max(1, Math.min(20, Number(e.target.value) || 1)))}
                className="w-28 font-mono text-sm"
              />
            </div>
            <div>
              <label className="text-sm font-medium block mb-2">Value Types</label>
              <div className="grid grid-cols-2 gap-3">
                {(["string", "number", "boolean", "null"] as JsonValueType[]).map((type) => (
                  <label
                    key={type}
                    className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-card transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={jsonValueTypes.includes(type)}
                      onChange={() => toggleJsonValueType(type)}
                      className="w-4 h-4 rounded accent-primary cursor-pointer"
                    />
                    <span className="text-sm capitalize">{type}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Generate Button */}
      <div className="flex flex-wrap gap-3">
        <button
          onClick={handleGenerate}
          className="px-6 py-2.5 rounded-md bg-primary text-white hover:bg-primary-hover transition-colors cursor-pointer font-medium"
        >
          {dict.common.generate}
        </button>
      </div>

      {/* Output */}
      {output && (
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium">{dict.common.output}</label>
            <CopyButton text={output} />
          </div>
          <textarea
            readOnly
            value={output}
            rows={Math.min(20, output.split("\n").length + 1)}
            className="w-full font-mono text-sm"
          />
        </div>
      )}
    </div>
  );
}
