module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  rules: {
    // We use TypeScript so this is unnecessary.
    "react/require-default-props": 0,
    // Overly pedantic.
    "react/destructuring-assignment": 0,
    // Very internal decisions by airbnb that are not suitable for us.
    "no-restricted-syntax": 1,
    // No, this is just ridiculous.
    "lines-between-class-members": "off",
    "@typescript-eslint/lines-between-class-members": 0,
    // Preferring long lines over readable closures is a bad idea.
    "arrow-body-style": 0,
    "@typescript-eslint/no-unused-vars": 1,
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "airbnb-typescript",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint",
  ],
  ignorePatterns: ["*.config.js", "./src/generated/*"],
}
