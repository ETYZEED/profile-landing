Etyzeen ERP — Profile Landing (Next.js)

This directory is a standalone Next.js app that serves as a public profile/landing for the Etyzeen ERP product. It contains mock API routes for `POST /api/trial` and `POST /api/contact` so you can test flows locally.

Quick start (Windows PowerShell):

```powershell
cd profile-landing-next
npm install
npm run dev
```

App runs on http://localhost:3001 by default (configured in package.json dev script).

Integration notes:
- Replace mock API handlers (`pages/api/*.js`) with real implementations that persist to DB or integrate with your backend.
- Update links `/login` and `/purchase` to point to production app or implement SSO.
- Consider converting to an Optimizely/Next.js site with SSR and analytics when moving to production.


---
Additional publishing notes:
- Use the provided workflow or peaceiris action depending on preference.
- After push enable Pages or check Actions logs.
