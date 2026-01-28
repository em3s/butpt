# Git Workflow Skill

## Branch Strategy
1. Create feature branch from main
2. Empty commit to start PR
3. Small commits during work
4. Squash merge to main

## Start Feature
```bash
git checkout -b feat/short-name
git commit --allow-empty -m "feat: short description"
git push -u origin feat/short-name
gh pr create --fill
```

## During Work
```bash
git add .
git commit -m "add timeline component"
git push
```

## Commit Message Rules
- Lowercase
- No period at end
- Max 50 chars
- Present tense ("add" not "added")

### Examples
```
add timeline bar
fix timezone offset
update status icons
remove unused import
```

## PR Title (Squash Message)
Same as commit rules. Will become the squash commit message.

### Examples
```
feat: add world clock widget
fix: correct DST handling
refactor: simplify status logic
```

## PR Description
Keep minimal:
```
## What
add 24h timeline indicator

## Why
show time visually
```
