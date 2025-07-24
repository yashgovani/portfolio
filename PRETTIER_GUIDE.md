# Prettier Configuration Guide

This project is now fully configured with Prettier for consistent code formatting.

## 🎯 What's Configured

### Files Added:

- **.prettierrc** - Prettier configuration
- **.prettierignore** - Files to ignore during formatting
- **eslint.config.mjs** - Updated with Prettier integration

### Package.json Scripts:

- `npm run format` - Format all files
- `npm run format:check` - Check if files are formatted correctly
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Run ESLint with auto-fix

## 📝 Prettier Configuration

The `.prettierrc` file contains these settings:

```json
{
  "semi": true, // Add semicolons
  "trailingComma": "es5", // Trailing commas where valid in ES5
  "singleQuote": true, // Use single quotes
  "printWidth": 80, // Line length of 80 characters
  "tabWidth": 2, // 2 spaces for indentation
  "useTabs": false, // Use spaces instead of tabs
  "bracketSpacing": true, // Spaces in object literals
  "bracketSameLine": false, // JSX brackets on new line
  "arrowParens": "avoid", // Avoid parens around single arrow function parameters
  "endOfLine": "lf", // Unix line endings
  "jsxSingleQuote": true, // Single quotes in JSX
  "quoteProps": "as-needed" // Quote props only when needed
}
```

## 🚀 Usage Commands

### Format all files:

```bash
npm run format
```

### Check formatting without changing files:

```bash
npm run format:check
```

### Fix ESLint issues automatically:

```bash
npm run lint:fix
```

### Format specific files:

```bash
npx prettier --write src/app/page.tsx
```

### Format specific directories:

```bash
npx prettier --write src/components/
```

## 🔧 VS Code Integration

### Recommended Extensions:

1. **Prettier - Code formatter** (esbenp.prettier-vscode)
2. **ESLint** (dbaeumer.vscode-eslint)

### Auto-format Settings:

Add to your VS Code settings.json:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.formatOnPaste": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  }
}
```

## 📂 Files Ignored by Prettier

The `.prettierignore` file excludes:

- node_modules/
- .next/
- .vercel/
- Environment files (.env.\*)
- Build artifacts
- Log files

## ✅ Benefits

### Code Consistency:

- ✅ Consistent indentation (2 spaces)
- ✅ Single quotes throughout
- ✅ Semicolons where needed
- ✅ Proper line length (80 chars)
- ✅ Consistent bracket spacing

### Developer Experience:

- ✅ Auto-format on save
- ✅ Consistent code style across team
- ✅ Reduced code review noise
- ✅ Integration with ESLint

### Project Quality:

- ✅ Professional code formatting
- ✅ Better readability
- ✅ Easier maintenance
- ✅ Consistent React/TypeScript formatting

## 🔄 Workflow

1. **Write code** normally
2. **Save file** - Auto-formats with Prettier
3. **Run `npm run lint:fix`** - Fixes ESLint issues
4. **Commit** - All code is consistently formatted

## 🎨 Before vs After

### Before Prettier:

```tsx
function MyComponent({ title, description }) {
  return (
    <div className='container'>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
```

### After Prettier:

```tsx
function MyComponent({ title, description }) {
  return (
    <div className='container'>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
```

Your entire portfolio project is now Prettier-compatible! 🎉
