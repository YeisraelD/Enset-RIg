# Enset Scraping & Fermentation Rig — Group 67 Website

**Course:** IETP4115 — Integrated Engineering Team Project (AASTU)  
**Project Title:** Design of a Motorized Slider-Crank Enset Scraping Machine with Controlled Fermentation  
**Advisor:** Ins. Getnet Girma (Department of Software Engineering)

---

## Project Structure

```text
enset-rig/
├── index.html          # Main entry point (Home, Project, Team, Progress, Gallery, Contact)
├── .nojekyll           # Tells GitHub Pages to serve static assets directly
├── css/
│   └── styles.css      # Visual identity, Enset palette, responsive & iframe styling
├── js/
│   ├── data.js         # Editable site content (progress logs, team links, gallery)
│   └── app.js          # Page switching, interactive widgets, lightbox & deep-linking
├── assets/
│   ├── images/         # Site photography, hero banners, logo
│   │   └── team/       # Portraits for all 10 Group 67 members
│   └── icons/          # UN SDG vector icons (SDG 2, 5, 9, 12)
└── README.md
```

---

## How to Update Content

Open `js/data.js` and edit the `SITE` object:
1. **Weekly Progress:** Update `progress` (`status`: `"done"`, `"current"`, or `"upcoming"`) and add task items to `tasks`.
2. **Individual Logs:** Add or update entries under `individualLogs` using the member's exact name.
3. **Team Portfolio Links:** Paste each member's portfolio URL into `link: ""` inside `team`.
4. **Gallery Photos:** Add new images to `assets/images/` and reference them as `"assets/images/your-photo.jpg"` inside `gallery`.

---

## Embedding into Google Sites

1. Open your Google Site in the editor.
2. Go to **Pages → `+` → New full page embed** (recommended for full-width layout) **or** insert an **Embed** block on a page.
3. Choose **By URL** (not *Embed code*) and paste your deployed GitHub Pages URL:
   ```text
   https://yeisraeld.github.io/Enset-RIg/
   ```
4. Select **Whole page** and click **Insert**, then **Publish**.
