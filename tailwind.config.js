const withMt = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMt({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "slate-50": "#f8fafc",
        "slate-100": "#f1f5f9",
        "slate-200": "#e2e8f0",
        "slate-300": "#cbd5e1",
        "slate-400": "#94a3b8",
        "slate-500": "#64748b",
        "slate-600": "#475569",
        "slate-700": "#334155",
        "slate-800": "#1e293b",
        "slate-900": "#0f172a",
        "slate-950": "#020617",
        "blue-50": "#eff6ff",
        "blue-100": "#dbeafe",
        "blue-200": "#bfdbfe",
        "blue-300": "#93c5fd",
        "blue-400": "#60a5fa",
        "blue-500": "#3b82f6",
        "blue-600": "#2563eb",
        "blue-700": "#1d4ed8",
        "blue-800": "#1e40af",
        "blue-900": "#1e3a8a",
        "blue-950": "#172554",
        green: "#008000",
        blue: "#0000ff",
        red: "#ff0000",
        purple: "#800080",
        yellow: "#ffff00",
        pink: "#ffc0cb",
        orange: "#ffa500",
        grey: "#808080",
      },
    },
  },
  plugins: [],
});
