Profile landing repo for Etyzeen ERP — static site ready for GitHub Pages.

How to publish:
1. Create a new GitHub repository named `profile-landing`.
2. In this folder run:
   git init
   git add .
   git commit -m "Initial profile-landing"
   git remote add origin <your-new-repo-URL>
   git push -u origin main
3. In GitHub, enable Pages source: Branch `main` (root) or use gh-pages branch if you prefer.

Optional: use the provided GitHub Actions workflow to publish automatically to `gh-pages` on push to `main`.
