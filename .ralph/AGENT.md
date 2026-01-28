# Agent Instructions

## Build Commands
```bash
npm install          # Install dependencies
npm run check        # Lint + format check (parallel)
npm run build        # Full build with typecheck
npm run lint:fix     # Auto-fix lint issues
npm run format       # Auto-format code
npm run typecheck    # TypeScript check only
```

## Before Completing Task
1. Run `npm run check`
2. Fix any errors
3. Verify no TypeScript errors
4. Commit changes

## Error Recovery
- Lint error: Run `npm run lint:fix`
- Format error: Run `npm run format`
- Type error: Fix TypeScript issues manually
- Build error: Check tsconfig.json and imports

## File Locations
- Source: `src/`
- Widget output: `ubersicht-widget/times.widget/`
- Config: `tsconfig.json`, `eslint.config.js`, `.prettierrc`
