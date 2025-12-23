# FitClub

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Built with React](https://img.shields.io/badge/built%20with-React-blue)](#tech-stack)

A single-page React application for planning and tracking workouts. This repository contains only the frontend (no backend, no authentication, no automated tests). Styling is done with SCSS.

> Minimal, component-driven fitness UI — great as a static SPA or for integrating with any backend later.

Table of contents
- [About](#about)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Project structure](#project-structure)
- [Getting started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Run (development)](#run-development)
  - [Build (production)](#build-production)
  - [SCSS workflow](#scss-workflow)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

About
-----
FitClub is a frontend-only React application for creating and following workout routines and logging progress locally (e.g., local state or localStorage). The project intentionally omits backend, authentication, and testing to keep the scope focused on UI and UX.

Features
--------
- React single-page application (SPA)
- Component-based architecture for workouts, routines and logs
- Responsive UI (mobile-first)
- Styling with SCSS (Sass)
- Local-only persistence (localStorage) by default
- Easy to extend: add a backend, auth, or tests later

Tech stack
----------
- React (Create React App, Vite, or similar)
- SCSS (Sass) for styling
- Optional: React Router for navigation, Zustand/Redux for global state

Project structure (suggested)
-----------------------------
Example layout — adapt to your repo:

```
/ (root)
├─ public/                 # static files (favicon, index.html)
├─ src/
│  ├─ assets/              # images, fonts
│  ├─ components/          # reusable components
│  │  ├─ WorkoutCard/
│  │  │  ├─ WorkoutCard.jsx
│  │  │  └─ WorkoutCard.module.scss
│  ├─ pages/               # route-level components
│  ├─ styles/              # global SCSS files (variables, mixins)
│  │  ├─ _variables.scss
│  │  └─ main.scss
│  ├─ App.jsx
│  └─ index.jsx
├─ .gitignore
└─ README.md
```

Getting started
---------------
These instructions assume a frontend-only React project. Replace commands if you use a specific starter (Vite, CRA, Next.js, etc.).

Prerequisites
- Node.js >= 16 and npm (or Yarn)
- Optional: npx (comes with npm) for scaffolding

Install
1. Clone the repository:
   ```bash
   git clone https://github.com/vyshnave1997/Fitclub.git
   cd Fitclub
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

If you don't yet have Sass in your project, install it:
```bash
npm install --save-dev sass
# or
yarn add --dev sass
```

Run (development)
-----------------
Start the app in development mode:
```bash
npm start
# or
yarn start
```
This opens the app at http://localhost:3000 (or the port configured by your toolchain).

Build (production)
------------------
Create a production build:
```bash
npm run build
# or
yarn build
```

SCSS workflow
-------------
You can write SCSS files anywhere under `src/` and import them into your components:
- For Create React App or Vite: import './styles/main.scss' or `import './Component.module.scss'` directly — ensure `sass` is installed.
- Example global entry in `src/index.jsx`:
  ```js
  import './styles/main.scss';
  ```

Optional: Add npm scripts for manual SCSS watch/build (if you prefer compiling outside the bundler):
```json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "scss:watch": "sass --watch src/styles:src/styles",
  "scss:build": "sass src/styles:dist/styles --no-source-map"
}
```
Note: If you rely on your bundler's built-in Sass support (recommended), the `scss:watch` scripts are optional.

Local data & persistence
------------------------
FitClub ships without a backend. Use:
- local component state
- Context / Redux / Zustand for app-wide state
- localStorage or IndexedDB for lightweight persistence

If you later add a backend, swap local persistence for API calls.

Deployment
----------
You can deploy the static build to many hosts:
- GitHub Pages
- Netlify (drag & drop or connect repository)
- Vercel (import project)
- Any static hosting / CDN

Contributing
------------
Contributions are welcome. Suggested workflow:
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add feature"`
4. Push to your branch: `git push origin feature/your-feature`
5. Open a Pull Request

Because the project currently has no CI or tests, please:
- Keep changes focused and small
- Add documentation for any new patterns or scripts
- Use SCSS variables/mixins for consistent styling

Recommended additional files
- CONTRIBUTING.md (contribution guidelines)
- CODE_OF_CONDUCT.md
- .editorconfig and Prettier / ESLint configs

License
-------
This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

Contact
-------
Maintainer: vyshnave1997
- GitHub: https://github.com/vyshnave1997

Acknowledgements
----------------
Thanks to the open source community and libraries that make building UIs fast and enjoyable.

---

If you want, I can:
- Generate a minimal SCSS setup (example variables, mixins, and a main.scss) and add component examples.
- Update README to include exact scripts based on the actual package.json in your repo (I can scan the repo and auto-fill commands). Tell me which option you prefer.
