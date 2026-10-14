import { isAccessKey, makeAccessKey } from "../src/lib/access-key.ts";

const count = Number(process.argv[2] ?? 3);
for (let i = 0; i < count; i += 1) {
  const key = makeAccessKey();
  if (!isAccessKey(key)) throw new Error(`Made a key that does not check: ${key}`);
  console.log(key);
}
