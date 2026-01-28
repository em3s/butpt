# Lint & Format Skill

## Commands
```bash
npm run check        # Run lint + format check in parallel
npm run lint         # ESLint only
npm run lint:fix     # ESLint with auto-fix
npm run format       # Prettier format all files
npm run format:check # Prettier check only
npm run typecheck    # TypeScript check
npm run build        # Full build (lint + format + tsc)
```

## On Lint Error
1. Read the error message
2. Try `npm run lint:fix` first
3. If still failing, fix manually
4. Re-run `npm run check`

## On Format Error
1. Run `npm run format`
2. Re-run `npm run format:check`

## On TypeScript Error
1. Read the error location and message
2. Fix type issues in source file
3. Run `npm run typecheck`

## Before Commit
Always run `npm run check` and ensure:
- No lint errors
- No format errors
- No TypeScript errors
