# Vivid Flow Portfolio

A responsive, animated creative portfolio starter for Harshana Sandaruwan.

## Files
- `index.html` — page structure
- `style.css` — visual design, responsive layouts and animations
- `script.js` — portfolio filters, project details, contact form and interactions
- `config.js` — editable email, WhatsApp and social profile links

## Before publishing
1. Open `config.js`.
2. Replace `your-email@example.com` with your real contact email.
3. Add WhatsApp in international digits-only format, e.g. `94771234567`.
4. Add the full URLs for the social profiles you want to show.
5. Replace demonstration project cards and descriptions in `script.js` with your own projects.
6. Test all contact links and the form.

## Run locally
You can open `index.html` directly in a browser. For more reliable local testing, use VS Code's Live Server extension.

## Host on GitHub Pages
1. Create a GitHub repository, e.g. `vivid-flow-portfolio`.
2. Upload all files in this folder to the repository root.
3. Open **Settings → Pages**.
4. Under Build and deployment, select **Deploy from a branch**.
5. Select `main` and `/ (root)`, then Save.
6. Wait for GitHub Pages to publish and open the URL shown there.

## Important limitations of this static version
- The contact form opens a prefilled email in the visitor's email application; it does not send email itself.
- Portfolio projects are currently demo content stored in `script.js`.
- GitHub Pages is static hosting. This version does not provide secure admin login, cloud file uploads, database-backed folders, or cross-device project management.
- For uploads and folders that persist across devices, connect a backend such as Supabase (authentication + database + storage) and secure its access policies. Do not put secret keys in browser code.
- Do not publish private keys, passwords, or confidential information in `config.js`.

## Replace the visual samples
The portfolio cards use CSS-generated abstract artwork, so they do not depend on fragile external image URLs. When ready, you can extend each project in `script.js` to use a real cover image or video hosted in your own assets or storage service.
