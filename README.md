# Jenna Gozali – Portfolio

My personal portfolio: Business Analyst, Product and Project case studies. Built with Next.js and deployed on Vercel.

## What's where

| What you want to change | Where it lives |
| --- | --- |
| All text: projects, experience, certificates | `lib/data.js` |
| Which projects are in the Top 3 | `featured: 1`, `featured: 2`, `featured: 3` in `lib/data.js` |
| Home page layout (hero, about, contact) | `app/page.js` |
| Case study page layout | `app/work/[slug]/page.js` |
| Colours, fonts, spacing | top of `app/globals.css` |
| Images | `public/images/` |
| PDFs, including my CV | `public/docs/` |

### Updating the CV
Replace `public/docs/Jenna_Gozali_Resume_2026.pdf` with the new file, keeping the same name.
If the name changes, update `cv:` at the top of `lib/data.js`. All the Download CV buttons use that one path.

### Changing the Top 3
In `lib/data.js`, move the `featured: 1/2/3` line from one project to another.
Every project without `featured` shows under "Other projects" automatically.

## Run it on your computer (optional)

1. Install Node.js 20 or newer from https://nodejs.org
2. In this folder, run:
   ```
   npm install
   npm run dev
   ```
3. Open http://localhost:3000

## Deploy

Every push to the `main` branch on GitHub redeploys the site on Vercel automatically.
