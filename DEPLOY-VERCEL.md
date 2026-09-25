# Cartify — Vercel Deployment

1. Extract the ZIP.
2. Open the folder in VS Code.
3. Run:
   ```bash
   npm install
   npm run dev
   ```
4. Test the main pages locally: Home, Shop, every category, product details, Wishlist, Cart, Login and About.
5. Create a GitHub repository and push this folder (do not upload `node_modules`).
6. In Vercel, choose **New Project → Import Git Repository**.
7. Keep the detected Vite settings. Build command: `npm run build`.
8. Deploy.

`vercel.json` already contains the SPA rewrite needed for React Router routes on refresh.
