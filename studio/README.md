# SyntecHire Studio

The editing screen for the marketing team (Sanity Studio). The website lives one folder up; this folder is a separate small app that is deployed to Sanity's free hosting, not to Vercel.

## One-time setup (a developer, about 20 minutes)

1. Create a free account at https://www.sanity.io and a project (dataset `production`). Copy the **project id**.
2. In this folder: `copy .env.example .env`, paste the project id into `SANITY_STUDIO_PROJECT_ID`, then `npm install`.
3. `npx sanity login`, then `npm run deploy`. The Studio is published at `https://syntechire.sanity.studio`.
4. The website already knows the project id, so no Vercel settings are needed. Published changes reach the site within about a minute on their own.
5. Optional, for instant updates: set `SANITY_REVALIDATE_SECRET` in Vercel and add a Sanity webhook (API → Webhooks) to `https://www.syntechire.com/api/revalidate?secret=<secret>`, POST, on Create, Update and Delete.
6. Invite the marketing team: Manage → Members → Invite. Give them the **Editor** role (the Administrator role also manages billing and members).

## What the marketing team can do

| Menu item | Use it to |
|---|---|
| Blog posts / Articles | Write and publish posts. The contents list, reading time and sitemap entry are automatic. |
| E-books | Upload a PDF and cover details. The download stays behind the lead form. |
| Landing pages | Build a new page at any address from ready-made sections, aimed at one keyword. |
| Edit existing pages | Change the heading, intro, FAQs or search title of a page that already exists, or add sections to it. Enter its address, e.g. `/hire/react-js-developers/`. |
| Redirects | Send an old address to a new one after changing a slug. |

Every document has a **Search & keywords** panel with a focus keyword and a live checklist.

After clicking **Publish** the website updates within about a minute.

## Notes

- Posts that still live as files in the website repo keep working. A CMS post with the same slug replaces the file one, so a file post can be moved to the CMS by creating it there and then deleting the file.
- If the CMS is unreachable, the website serves the file content, so a CMS outage cannot take the site down.
- Draft posts are not visible on the site until published.
