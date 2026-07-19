// Ambient declarations so TypeScript accepts side-effect imports of
// stylesheets, e.g. `import "./globals.css"` in app/layout.tsx.
// Without this, TS reports 2882: "Cannot find module or type
// declarations for side-effect import of './globals.css'."
declare module "*.css";
declare module "*.scss";
