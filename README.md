# eslint-plugin-forbid-filename

![npm](https://img.shields.io/npm/dm/eslint-plugin-forbid-filename)

Custom ESLint rules to forbid certain filename pattern.

## Installation

To add eslint-plugin-forbid-filename to your project, run:

```shell script
yarn add -D eslint-plugin-forbid-filename
```

or

```shell script
npm install --save-dev eslint-plugin-forbid-filename
```

### Usage

- Add `"forbid-filename"` to the plugin list of your **[ESLint](https://eslint.org/docs/latest/user-guide/configuring/)** config file
- Add your list of forbidden pattern in the `patterns` option
- You can also ignore files with the `ignores` option

### Example

This config will throw an error if you have any `.d.ts` files in your codebase :

```javascript
{
  plugins: [
   "forbid-filename"
  ],
  rules: {
    "forbid-filename/match": [
      "error", 
      { 
        patterns: [/\.d\.ts$/],
        ignores: ["next-env.d.ts"],
      }
    ],
  }
}
```
