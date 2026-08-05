# Steelheads — Astro site

Sito statico creato con Astro per `steelheads.ch`.

## Avvio locale

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Pubblicazione su GitHub Pages

1. Crea un repository GitHub, per esempio `steelheads-site`.
2. Carica questi file nel repository.
3. Vai su **Settings → Pages**.
4. Come source scegli **GitHub Actions**.
5. Aggiungi il file `.github/workflows/deploy.yml` incluso nel progetto.
6. Dopo il deploy, collega il dominio `steelheads.ch` dalle impostazioni Pages.

## DNS dominio

Per usare `steelheads.ch`, aggiungi questi record DNS dal registrar del dominio:

```text
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
CNAME www   tuo-username.github.io
```

Poi in GitHub Pages inserisci `steelheads.ch` come custom domain.
