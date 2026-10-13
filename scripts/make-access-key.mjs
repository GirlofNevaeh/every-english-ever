import { isAccessKey, makeAccessKey } from "../src/lib/access-key.ts";

const count = Number(process.argv[2] ?? 1);
for (let i = 0; i < count; i++) {
  const key = makeAccessKey();
  if (!isAccessKey(key)) {
    console.error("Made a key that does not pass the check.");
    process.exit(1);
  }
  console.log(key);
}
