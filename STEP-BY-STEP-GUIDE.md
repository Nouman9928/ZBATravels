# Zarrar Bin Adnan Travel and Tours Ltd. — Website: Step-by-Step

Built by Muse as your website builder, using the competitor analysis of
Chattha Group, Harmain Travels, Meezab Group, Perfect Umrah and Safr-E-Ibadat (2026-10-22).

## What we took from each competitor (and what we fixed)
- **Harmain (best engineering):** clean modern design, LocalBusiness + FAQ schema for Google/AI search, FAQ section, trust numbers. → We copied all of this.
- **Chattha (premium trust):** service grid (visa, ticketing, hotels, transport, attractions, insurance), testimonials-style trust, "since / partner" tone. → Services grid + premium green/gold design in your logo colours.
- **Meezab (system):** package inventory logic + journey funnel (Inquiry → Package → Booking → Travel). → Packages are data-driven (one list in packages.html), journey steps on homepage, filters by tier.
- **Perfect Umrah (SEO volume):** package matrix (days × star tier), city landing pages, per-package pre-filled WhatsApp links. → Matrix + Warburton & Nankana Sahib city pages ready; more cities can be generated the same way. Per-package WhatsApp messages built in.
- **Safr-E-Ibadat (highest CTR content):** price-first headline, Roman Urdu line, limited seats, ONE number everywhere. → Hero is price-first ("Get Today's Price"), Roman Urdu/Urdu line, limited-seats top bar, every button goes to the same WhatsApp number.
- **What none of them do well (our edge):** fast lightweight pages (no heavy WordPress), sticky mobile WhatsApp bar, a 20-second quote form that opens WhatsApp pre-filled, and local SEO for Warburton/Nankana Sahib where no competitor is focused.

## The steps — done and remaining

### ✅ Step 1 — Strategy & design (DONE)
Brand: emerald green + gold (from your logo), premium Islamic look, mobile-first (your Facebook audience is on phones).

### ✅ Step 2 — Website built, v1 (DONE)
Pages: Home, Umrah Packages (with tier filter), About, Contact, Umrah in Warburton, Umrah in Nankana Sahib.
Plus: sitemap.xml, robots.txt, SEO meta + schema on every key page, floating WhatsApp button, sticky mobile bar, quote form → WhatsApp.

### ⏳ Step 3 — YOUR 4 details (needed from you — this is the only blocker)
Edit ONE file only: `assets/config.js`
1. **WhatsApp number** (currently placeholder 92XXXXXXXXXX) — every button on the site uses it automatically.
2. **Office address** — exact shop/office address for Google trust.
3. **Office hours** — currently Mon–Sat 9–7 (assumed, confirm).
4. **Public prices — yes or no?** If yes, give starting prices per package and they appear on cards (Safr-E-Ibadat style, highest CTR). If no, site stays "Get Today's Price on WhatsApp" (Chattha/Harmain style).
Also useful: Facebook Page link, any DTS/license number, real pilgrim reviews/photos for the testimonial section.

### Step 4 — Domain & hosting (when you approve v1)
- Buy domain: zarrarbinadnan.com (or .pk) — approx. PKR 3,000–6,000/year.
- Hosting options: (a) Hostinger shared — what Chattha/Meezab use, ~PKR 1,500–2,500/month, easy; (b) Netlify/Vercel free tier — this site is static, it can run free and fast like Harmain.
- I will upload the files, connect the domain, add SSL (https lock).

### Step 5 — Google setup (same week as launch)
Google Business Profile (free, critical for "Umrah Warburton / Nankana Sahib" searches), Google Analytics, Search Console + submit sitemap, Facebook Page → website link, website link in all Facebook/TikTok posts.

### Step 6 — Growth (after launch)
- More city pages (Shahkot, Sangla Hill, Sheikhupura, Lahore, Faisalabad) — 1 template, like Perfect Umrah's system but with real local content.
- Blog: "Umrah visa requirements 2026", "Umrah from Lahore airport — complete guide", "Economy vs 5 Star Umrah" (Harmain/Meezab playbook).
- Every Facebook video post → link to the matching package page (turns your daily posts into website traffic).
- Add real reviews + group departure dates with seats-left badges (Meezab/Safr pattern).

## Files
- index.html / packages.html / about.html / contact.html / umrah-packages-*.html
- assets/styles.css (design), assets/config.js (your details — edit only this), assets/logo.jpg
- sitemap.xml, robots.txt
