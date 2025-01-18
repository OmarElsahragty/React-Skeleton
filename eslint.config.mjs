import babelParser from "@babel/eslint-parser";
import js from "@eslint/js";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import eslintCommentsPlugin from "eslint-plugin-eslint-comments";
import importPlugin from "eslint-plugin-import";
import jsdocPlugin from "eslint-plugin-jsdoc";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import perfectionistPlugin from "eslint-plugin-perfectionist";
import prettierPlugin from "eslint-plugin-prettier";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import reactRecommended from "eslint-plugin-react/configs/recommended.js";
import regexpPlugin from "eslint-plugin-regexp";
import unicornPlugin from "eslint-plugin-unicorn";

export default [
  // Base ESLint recommended configuration
  js.configs.recommended,

  // React recommended configuration
  reactRecommended,

  // Add files patterns here to ignore them from linting
  {
    ignores: ["node_modules/*", "build/*", "eslint.config.mjs"],
  },

  // JSX Accessibility plugin configuration
  {
    plugins: {
      "jsx-a11y": jsxA11yPlugin,
    },
    rules: {
      "jsx-a11y/alt-text": "error",
      "jsx-a11y/anchor-is-valid": "error",
      "jsx-a11y/aria-props": "error",
      "jsx-a11y/aria-proptypes": "error",
      "jsx-a11y/aria-role": "error",
      "jsx-a11y/aria-unsupported-elements": "error",
      "jsx-a11y/heading-has-content": "error",
      "jsx-a11y/no-autofocus": "error",
      "jsx-a11y/no-distracting-elements": "error",
      "jsx-a11y/no-interactive-element-to-noninteractive-role": "error",
      "jsx-a11y/no-noninteractive-element-interactions": "error",
      "jsx-a11y/no-noninteractive-element-to-interactive-role": "error",
      "jsx-a11y/no-noninteractive-tabindex": "error",
      "jsx-a11y/no-static-element-interactions": "error",
      "jsx-a11y/role-has-required-aria-props": "error",
      "jsx-a11y/role-supports-aria-props": "error",
      "jsx-a11y/tabindex-no-positive": "error",
    },
  },

  // Prettier integration
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto", // Allow any line endings (LF or CRLF)
        },
      ],
    },
  },

  // React Hooks configuration
  {
    plugins: {
      "react-hooks": reactHooksPlugin,
    },
    rules: {
      "react-hooks/exhaustive-deps": "warn", // Warn about missing dependencies in useEffect/useCallback
      "react-hooks/rules-of-hooks": "error", // Enforce rules of hooks
    },
  },

  // Import plugin configuration
  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      "import/default": "error", // Ensure default imports correspond to default exports
      "import/extensions": [
        "error",
        "ignorePackages", // Ignore missing extensions for packages
        {
          js: "never", // Allow .js files without extensions
          jsx: "never", // Allow .jsx files without extensions
          ts: "never", // Allow .ts files without extensions
          tsx: "never", // Allow .tsx files without extensions
        },
      ],
      "import/named": "error", // Ensure named imports correspond to named exports
      "import/no-duplicates": "error", // Disallow duplicate imports
      "import/no-named-as-default": "error", // Disallow using a named export as the default export
      "import/no-named-as-default-member": "off", // Disable this rule (conflicts with TypeScript)
      "import/no-unresolved": "error", // Ensure imports point to resolvable modules
    },
    settings: {
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"],
      },
      "import/resolver": {
        node: {
          extensions: [".mjs", ".js", ".jsx", ".ts", ".tsx"], // Add supported extensions
        },
        typescript: {
          alwaysTryTypes: true, // Always try to resolve TypeScript types
          project: "./tsconfig.json", // Point to your tsconfig
        },
      },
    },
  },

  // ESLint Comments plugin configuration
  {
    plugins: {
      "eslint-comments": eslintCommentsPlugin,
    },
    rules: {
      "eslint-comments/no-restricted-disable": "error", // Disallow disabling specific rules
      "eslint-comments/no-unused-disable": "error", // Disallow unused eslint-disable comments
      "eslint-comments/no-unused-enable": "error", // Disallow unused eslint-enable comments
    },
  },

  // JSDoc plugin configuration
  {
    plugins: {
      jsdoc: jsdocPlugin,
    },
    rules: {
      "jsdoc/require-jsdoc": "warn", // Warn if JSDoc is missing
      "jsdoc/require-param": "warn", // Warn if @param is missing
      "jsdoc/require-returns": "warn", // Warn if @returns is missing
    },
  },

  // Perfectionist plugin configuration
  {
    plugins: {
      perfectionist: perfectionistPlugin,
    },
    rules: {
      // Sort imports alphabetically
      "perfectionist/sort-imports": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "index",
            "internal",
            "object",
            "parent",
            "sibling",
            "type",
            "unknown",
          ],
          order: "asc",
          type: "alphabetical",
        },
      ],

      // Sort object properties alphabetically
      "perfectionist/sort-objects": [
        "error",
        {
          order: "asc",
          type: "alphabetical",
        },
      ],
    },
  },

  // Regexp plugin configuration
  {
    plugins: {
      regexp: regexpPlugin,
    },
    rules: {
      "regexp/no-useless-escape": "error", // Disallow unnecessary escape characters in regex
      "regexp/prefer-regexp-exec": "error", // Prefer RegExp.exec over String.match
      "regexp/prefer-regexp-test": "error", // Prefer RegExp.test over String.search
    },
  },

  // Unicorn plugin configuration
  {
    plugins: {
      unicorn: unicornPlugin,
    },
    rules: {
      "unicorn/prefer-json-parse-buffer": "error", // Prefer using Buffer for JSON parsing
      "unicorn/prefer-module": "error", // Prefer ES modules over CommonJS
      "unicorn/prefer-node-protocol": "error", // Prefer using the `node:` protocol for Node.js built-ins
    },
  },

  // Custom configuration for JavaScript/Typescript files
  {
    files: ["**/*.{mjs,js,jsx,ts,tsx}"], // Apply to JavaScript/Typescript files
    languageOptions: {
      globals: {
        document: "readonly", // Add document as a global variable
        React: "readonly", // Treat React as a global variable
        window: "readonly", // Add window as a global variable
      },
      parser: babelParser, // Use Babel parser for JSX and modern JavaScript/Typescript
      parserOptions: {
        babelOptions: {
          presets: ["@babel/preset-react"], // Use React preset for JSX
        },
        ecmaVersion: "latest", // Use the latest ECMAScript version
        requireConfigFile: false, // Disable Babel config file requirement
        sourceType: "module", // Use ES modules
      },
    },
    rules: {
      "no-console": "warn", // Warn on console statements
      "no-debugger": "error", // Disallow debugger statements
      "no-unused-vars": "error", // Disallow unused variables
      "react/jsx-uses-react": "error", // Prevent React from being marked as unused
      "react/jsx-uses-vars": "error", // Prevent JSX variables from being marked as unused
      "react/prop-types": "off", // Disable prop-types if using TypeScript
      "react/react-in-jsx-scope": "off", // Disable React global requirement (React 17+)
    },
    settings: {
      react: {
        version: "detect", // Automatically detect React version
      },
    },
  },

  // Custom configuration for TypeScript files
  {
    files: ["**/*.{ts,tsx}"], // Apply to TypeScript files
    languageOptions: {
      parser: typescriptParser, // Use TypeScript parser
      parserOptions: {
        ecmaVersion: "latest", // Use the latest ECMAScript version
        project: "./tsconfig.json", // Point to your tsconfig
        sourceType: "module", // Use ES modules
      },
    },
    plugins: {
      "@typescript-eslint": typescriptPlugin, // Add TypeScript plugin
    },
    rules: {
      // TypeScript-specific rules
      "@typescript-eslint/no-explicit-any": "warn", // Warn on using `any`
      "@typescript-eslint/no-unused-vars": "error", // Replace no-unused-vars

      // React-specific rules
      "react/prop-types": "off", // Disable prop-types if using TypeScript
      "react/react-in-jsx-scope": "off", // Disable React global requirement (React 17+)
    },
  },
];
