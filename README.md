# CDTA — Site vitrine & catalogue

Site vitrine bilingue (FR/AR) pour la présentation et la vente de produits et services de transformation digitale en Algérie. Construit avec Next.js (App Router), TypeScript et Tailwind CSS.

## Démarrage

```bash
npm install
npm run dev
```

Le site est disponible sur [http://localhost:3000](http://localhost:3000) (redirection automatique vers `/fr`).

## Structure

- `src/app/[lang]/...` — pages du site, déclinées en `fr` et `ar` (RTL automatique).
- `src/i18n/dictionaries/{fr,ar}.ts` — tout le contenu texte du site, par langue.
- `src/data/products-meta.ts` — liste des produits du catalogue (slug + icône).
- `src/data/contact-info.ts` — coordonnées affichées sur le site (**à personnaliser**, voir ci-dessous).
- `src/app/api/contact/route.ts` — traitement du formulaire de contact.

## À personnaliser avant mise en ligne

1. **Coordonnées** — remplacer les valeurs de démonstration dans `src/data/contact-info.ts` (email, téléphone, WhatsApp) par les vraies coordonnées.
2. **Tarifs** — les prix indicatifs dans `src/i18n/dictionaries/fr.ts` et `ar.ts` (champs `priceLabel` / `priceNote` de chaque produit) sont à ajuster.
3. **Nom de domaine / déploiement** — voir la section suivante.

## SEO et réseaux sociaux

- Balises `title`/`description`, `canonical` et `hreflang` (fr / ar) sur chaque page ; Open Graph et Twitter Card complets.
- Image de partage (1200×630) générée automatiquement pour l'accueil et chaque produit (`opengraph-image.tsx`, police Cairo dans `assets/fonts`).
- Données structurées JSON-LD : `Organization`, `SoftwareApplication`, `BreadcrumbList` et `FAQPage` sur les landing pages produit.
- `sitemap.xml` et `robots.txt` générés (`src/app/sitemap.ts`, `src/app/robots.ts`).

Définissez l'URL publique du site **au moment du build** pour que les liens canoniques, le sitemap et les images de partage pointent vers le bon domaine :

```bash
NEXT_PUBLIC_SITE_URL=https://www.votre-domaine.dz
```

Sur Vercel, l'URL de production est détectée automatiquement si cette variable n'est pas définie.

## Landing pages produit

Chaque produit peut avoir une landing page dédiée (`/fr/produits/<slug>`) :
- contenu par langue dans `src/i18n/landings/<slug>/{fr,ar}.ts` (type `LandingContent`) ;
- couleurs, logo et visuel déclarés dans `src/i18n/landings/index.ts` ;
- images dans `public/images/landing/<slug>/`.

Un produit sans landing page garde la fiche produit générique.

## Formulaire de contact

Chaque soumission est :
- toujours enregistrée dans `data/contact-submissions.jsonl` à la racine du projet (utile en auto-hébergement / VPS — ce fichier n'est pas versionné) ;
- envoyée par email si la variable d'environnement `RESEND_API_KEY` est configurée (via [Resend](https://resend.com), aucune librairie supplémentaire requise).

Variables d'environnement optionnelles (fichier `.env.local`) :

```bash
RESEND_API_KEY=        # clé API Resend pour recevoir les demandes par email
CONTACT_TO_EMAIL=       # email de destination (par défaut : celui de contact-info.ts)
CONTACT_FROM_EMAIL=     # adresse d'expédition affichée (doit être vérifiée sur Resend)
```

Sans `RESEND_API_KEY`, le site reste pleinement fonctionnel : les demandes sont simplement enregistrées sur disque et visibles dans les logs du serveur.

⚠️ Sur un hébergement serverless (Vercel, etc.), l'écriture sur disque n'est pas persistante : configurez `RESEND_API_KEY` (ou toute autre intégration email) pour ne manquer aucune demande.

## Scripts

```bash
npm run dev      # serveur de développement
npm run build    # build de production
npm run start    # démarre le build de production
npm run lint     # vérifie le code (ESLint)
```
