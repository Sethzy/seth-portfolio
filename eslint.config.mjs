import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
  {
    ignores: [
      ".next/**",
      ".agents/**",
      ".claude/**",
      ".cursor/**",
      ".gemini/**",
      ".kiro/**",
      ".opencode/**",
      "node_modules/**",
      "next-env.d.ts",
      "**/*.test.mjs"
    ]
  },
  ...nextCoreWebVitals,
  ...nextTypescript
];

export default eslintConfig;
