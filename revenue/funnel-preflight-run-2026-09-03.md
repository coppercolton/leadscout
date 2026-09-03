---
title: LeadScout Funnel Preflight Run 2026-09-03 08:48 UTC
date: 2026-09-03
status: prepare-only
project: leadscout
funnel_state: request-ready -> publication-blocked
---

# LeadScout Funnel Preflight Run

## Chosen slice
Added a read-only, stdlib-only preflight checker so the owner can re-run the publication gate without credentials or external mutations.

## Verified output
- Git transport: **PASS** — `main` at `0092aadd71c5d53aa438b86a35d2d6ab9be18e87`
- Repository API: **PASS**, HTTP 200; default branch `main`
- Raw `/index.html`: **PASS**, HTTP 200
- Raw `/public/missed-call-recovery.html`: **PASS**, HTTP 200
- Raw `/public/sample-audit.html`: **PASS**, HTTP 200
- Raw `/revenue/first-revenue-activation-run-card.md`: **PASS**, HTTP 200
- Assumed Pages root `https://coppercolton.github.io/leadscout/`: **FAIL**, HTTP 404
- Assumed Pages offer URL `https://coppercolton.github.io/leadscout/missed-call-recovery.html`: **FAIL**, HTTP 404
- Preflight exit code: `2` by design when publication is blocked
- Build: **PASS** — `npm run build`, Vite generated `dist/index.html` (57.59 kB)

## Revenue truth
- `researched`: yes
- `request-ready`: yes
- `published`: no verified public landing URL
- `sent / replied / qualified / opportunity / won / paid`: no evidence
- **Verified revenue received:** none

A GitHub repository, raw-file HTTP 200, commit, or successful local build is not a live funnel and is not revenue evidence.

## Use
From the repository root:

```bash
python revenue/funnel-preflight.py
```

The checker only reads public GitHub endpoints and runs `git ls-remote`. It does not read secrets, write repository settings, submit forms, send email, or configure payment.

## Remaining blocker
A human owner must approve the public host/path and external representation before enabling publication. Commercial activity separately requires approved sender identity, one permitted prospect/contact path, terms, and payment/tax setup.

## Sources
- Repository: https://github.com/coppercolton/leadscout
- Raw checker: https://raw.githubusercontent.com/coppercolton/leadscout/main/revenue/funnel-preflight.py
- Prior publication gate: `revenue/github-pages-publication-gate.md`
- GitHub REST API: https://api.github.com/repos/coppercolton/leadscout
- GitHub Pages candidate URL: https://coppercolton.github.io/leadscout/
