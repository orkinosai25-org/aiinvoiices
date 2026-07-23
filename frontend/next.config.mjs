import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // The original Vite app renders entirely on the client. We keep StrictMode
  // off so the in-memory navigation-state store (used to mirror react-router's
  // location.state) is not double-consumed during development double-renders.
  reactStrictMode: false,
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
