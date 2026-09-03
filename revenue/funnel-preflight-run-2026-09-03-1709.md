# LeadScout Funnel Preflight Run — 2026-09-03 17:09 UTC

## Outcome
The read-only preflight now includes the latest GitHub Actions run, so the publication blocker can be diagnosed from one command without credentials or writes.

## Evidence

- Repository: https://github.com/coppercolton/leadscout
- Remote `main`: `c1543679c9e8d26518c4edffee0bb8ba30f69e83`
- Repository API: HTTP 200; default branch `main`
- Actions API: HTTP 200
- Latest Actions run: `33767539786`, `completed/failure`
- Run URL: https://github.com/coppercolton/leadscout/actions/runs/33767539786
- Raw `/index.html`: HTTP 200
- Raw `/public/missed-call-recovery.html`: HTTP 200
- Raw `/public/sample-audit.html`: HTTP 200
- Raw `/revenue/first-revenue-activation-run-card.md`: HTTP 200
- `https://coppercolton.github.io/leadscout/`: HTTP 404
- `https://coppercolton.github.io/leadscout/missed-call-recovery.html`: HTTP 404

## Exact result

- `funnel_state`: `request-ready -> publication-blocked`
- `revenue_state`: no verified send, reply, opportunity, order, payment, or revenue
- Preflight exit code: `2` (expected while Pages is not published)
- Next gate: owner approval of the public host/path and enabling GitHub Pages in repository settings

## Checks

- `python revenue/funnel-preflight.py`: completed; expected blocker exit `2`
- `npm run build`: PASS
- `git diff --check`: PASS

The diagnostic change is read-only at runtime. It does not enable hosting, send outreach, activate analytics, configure payment, or claim revenue.
