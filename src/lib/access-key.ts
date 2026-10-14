/** Classroom keys. Shape: EEE-XXXX-XXXX-XXXX. The last four marks are a check. */
const ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
const storageKey = "eee-access-key";

export function compactAccessKey(input: string): string {
  const cleaned = input.toUpperCase().replace(/[^A-Z0-9]/g, "");
  if (cleaned.startsWith("EEE") && cleaned.length === 15) return cleaned.slice(3);
  return cleaned;
}

function checksum(body: string): string {
  let n = 0x811c9dc5;
  for (let i = 0; i < body.length; i++) {
    n ^= ALPHABET.indexOf(body[i] ?? "") + 1;
    n = Math.imul(n, 0x01000193);
  }
  let x = n >>> 0;
  let out = "";
  for (let i = 0; i < 4; i++) {
    out += ALPHABET[x % ALPHABET.length] ?? "";
    x = Math.floor(x / ALPHABET.length);
  }
  return out;
}

export function isAccessKey(input: string): boolean {
  const compact = compactAccessKey(input);
  if (compact.length !== 12) return false;
  if ([...compact].some((char) => !ALPHABET.includes(char))) return false;
  return compact.slice(8) === checksum(compact.slice(0, 8));
}

export function formatAccessKey(compact: string): string {
  return `EEE-${compact.slice(0, 4)}-${compact.slice(4, 8)}-${compact.slice(8, 12)}`;
}

export function makeAccessKey(random: () => number = Math.random): string {
  let body = "";
  for (let i = 0; i < 8; i++) body += ALPHABET[Math.floor(random() * ALPHABET.length)] ?? "";
  return formatAccessKey(body + checksum(body));
}

export function readStoredAccessKey(): string {
  if (typeof window === "undefined") return "";
  try {
    return window.localStorage.getItem(storageKey) ?? "";
  } catch {
    return "";
  }
}

export function storeAccessKey(key: string) {
  window.localStorage.setItem(storageKey, formatAccessKey(compactAccessKey(key)));
}

export function clearAccessKey() {
  window.localStorage.removeItem(storageKey);
}
