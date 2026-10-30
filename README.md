# Neil Palissery — Developer Portfolio

A responsive single-page portfolio built with React 19, Vite 6, Tailwind CSS 4, Framer Motion, and Lucide React.

## Requirements
- Node.js 20.19+ or 22.12+ recommended for current Vite tooling (check your installed Vite version's Node requirements).
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL shown in the terminal (usually http://localhost:5173).

## Build for production
```bash
npm run build
npm run preview
```

## Personalize
1. Open `src/data/portfolio.js` and update your name, about text, skills, projects, statuses, experience, and achievements.
2. Add your public `github`, `linkedin`, and `email` in `profile`.
3. Add each project's `github` and `demo` links. Empty URLs are automatically hidden.
4. Put your actual resume at `public/resume.pdf` and set `resumeAvailable: true` to show the download button. Do not enable before adding the file.
5. Replace emoji project artwork with screenshots if desired. Add image paths to project objects and render an `<img>` in the `project-art` container.
6. Review all claims and statuses before publishing, especially ongoing projects and internship dates.

## Deploy on Vercel
1. Push the project to a new GitHub repository.
2. Log in to Vercel, select **Add New > Project**, and import the repository.
3. Framework: Vite. Build command: `npm run build`. Output directory: `dist`.
4. Click **Deploy**. Each push to the connected production branch will redeploy.
5. Optionally attach a custom domain in Vercel project settings.

## Notes
- Contact links are deliberately blank until you provide them.
- The resume button is hidden until a real resume PDF is added.
- Project statuses and experience details are editable content, not automatically verified.
- No backend or API keys required.
