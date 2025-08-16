/** @type {import("prettier").Config} */
const config = {
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  printWidth: 100,
  arrowParens: "always",
  bracketSpacing: true,
  endOfLine: "lf",
  plugins: [],
  // Tailwind CSS plugin settings
  tailwindConfig: "./tailwind.config.ts",
  tailwindAttributes: ["className", "tw"],
  tailwindFunctions: ["clsx", "cn", "twMerge"],
};

export default config;
