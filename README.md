## Name

UserAdminPanel

## Description

This repository contains the source code for a Fully Responsive Admin Panel that implements basic CRUD functionality and data visualization. The panel is built with modern web technologies to provide a seamless and user-friendly experience. It is designed to help manage and visualize data in an intuitive and efficient way.

## Installation

Runtime environment: Node.js. It is recommended to install the latest version of Node.js, at least v20.
Package Manager: pnpm. It is recommended to use the latest version of pnpm, at least 9.
This project is build using TypeScript.
This project is build with React.

To start the development server (to start the project) run:
pnpm run dev

To bundle project for production run:
pnpm run build

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```

## Using Themed provided colors and fonts

To provide our UI Kit theme during development we need to provide a ThemeProvider with the prop as a theme somewhere in the root. (Do not forget to provide import for the theme and ThemeProvider).

```js
import { ThemeProvider, Typography } from "@mui/material";
import { theme } from "./helpers/theme/theme";
<ThemeProvider theme={theme}>
  <Typography variant="h1" color="primary">
    Hello
  </Typography>
  <Router />
</ThemeProvider>;
```

## Used data

Dummy json was used for query. For more information: https://dummyjson.com/docs

## Authentication

To authenticate into the app, we can use any username and password provided by: https://dummyjson.com/users

## Live web site

For demo purposes https://render.com/ was used.

Live site link: https://user-admin-panel.onrender.com/
