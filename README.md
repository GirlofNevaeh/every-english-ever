# Every English Person Ever

A children's history of England, built with TanStack Start. The production build uses Nitro's Vercel preset and writes the [Build Output API](https://vercel.com/docs/build-output-api) to `.vercel/output`.

## Deploy on Vercel

Import this repository. No database and no environment variables are required.

| Setting | Value |
| --- | --- |
| Framework Preset | Other |
| Node.js | 22.x |
| Install Command | `npm install --omit=dev --no-audit --no-fund` |
| Build Command | `npm run build` |
| Output Directory | leave empty |

`framework` is unset on purpose. Do not switch the preset to Vite or set a static output folder such as `dist`. Nitro already emits the server and static files Vercel should publish.

Sign-in stays off unless you set `VITE_AUTH_ENABLED=true`. This site does not use accounts.

## Access keys

The home page is open. Every other page stays closed until a key is entered on that device. Buyers are sent to [everyschoolever.com](https://everyschoolever.com). A key looks like `EEE-XXXX-XXXX-XXXX`. The check lives in the browser. It is not a server receipt from the shop.

```bash
node --experimental-strip-types scripts/make-access-key.mjs 5
```

