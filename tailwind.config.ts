import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        PabloGreenDark: "#00635d",
        PabloGreenLight: "#06d6a0",
        PabloCeladon : "#B9FBC0",
        PabloBlueDark: "#090c9b",
        PabloBlueLight: "#4895ef",
        PabloBlueSkyPastel: "#00f2f2",
        PabloLavendarLight: "#BBBDF6",
        PabloLavendarBlush: "#ffeaee",
        PabloPurple: "#9b5de5",
        PabloMauve : "#CFBAF0",
        PabloRose: "#F40076",
        PabloPink: "#D72483",
        PabloRedLight: "#ff0a54",
        PabloPinkMid: "#D72782",
        PabloPinkBlueLight: "#d372e8",
        LamaPurple: "#CFCEFF",
        LamaYellow: "#FAE27C",
        LamaPurpleLight: "#F1F0FF",
        LamaYellowLight: "#FEFCE8",
        LamaSkyLight: "#EDF9FD",
        LamaSky: "#C3EBFA",
        PersianRose: "#FE1AA3",
        RisdBlue: "#3D50FD",
      }
    },
  },
  plugins: [],
};
export default config;
