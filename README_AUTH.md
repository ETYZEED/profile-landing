Setup Google OAuth for Etyzeen Landing (NextAuth)

1) Create OAuth credentials in Google Cloud Console:
   - Go to https://console.cloud.google.com/apis/credentials
   - Create OAuth 2.0 Client ID -> Web application
   - Authorized redirect URI: http://localhost:3001/api/auth/callback/google
   - Note Client ID and Client Secret

2) Copy `.env.local.example` to `.env.local` and fill values:
   NEXTAUTH_URL=http://localhost:3001
   NEXTAUTH_SECRET=long-random-string
   GOOGLE_CLIENT_ID=...
   GOOGLE_CLIENT_SECRET=...

3) Restart dev server: `npm run dev` (server must be at the same NEXTAUTH_URL)

4) On the landing page, click "Masuk" and choose Google. NextAuth will handle the OAuth flow.

Notes:
 - For production, set NEXTAUTH_URL to your public domain and ensure HTTPS.
 - Use a secure NEXTAUTH_SECRET in production.
 - You can customize sign-in page or callbacks in `pages/api/auth/[...nextauth].js`.
