---
title: LeadScout Publication Approval Packet 2026-09-03
date: 2026-09-03
status: prepare-only
project: leadscout
funnel_state: request-ready -> publication-blocked
---

# LeadScout Publication Approval Packet

## Decision
Use **GitHub Pages from the existing `coppercolton/leadscout` repository via the committed Actions workflow, `main` branch, and built `dist/` artifact** as the first zero-cost public-host candidate. This is the smallest reversible path because the repository already contains the static homepage, offer page, sample proof page, and no backend dependency.

This packet does **not** enable Pages, change repository settings, send outreach, activate analytics, or configure payment.

## Verified current state

- Repository: https://github.com/coppercolton/leadscout
- Local `main` and `origin/main` are aligned; this packet refresh is the latest evidence commit.
- Raw `.github/workflows/pages.yml` returned HTTP 200 on the latest read-back; the workflow is active
- Raw `index.html`, `public/missed-call-recovery.html`, and `public/sample-audit.html` were previously verified HTTP 200
- Assumed Pages URLs currently return HTTP 404:
  - `https://coppercolton.github.io/leadscout/`
  - `https://coppercolton.github.io/leadscout/missed-call-recovery.html`
- GitHub Pages API endpoint currently returns HTTP 404; no readable Pages configuration was found
- Local build and read-only preflight pass; no verified public funnel or revenue exists
- Workflow `Deploy LeadScout to GitHub Pages` is visible and active in GitHub Actions.
- Verification run `33758764542` built successfully (`Install dependencies` and `Build static site` passed), then stopped at `Setup Pages` with `HttpError: Not Found` because Pages is not enabled for the repository.

## Owner decision required

Approve or reject this exact destination:

> Publish `coppercolton/leadscout` from `main` / `dist/` using GitHub Pages at `https://coppercolton.github.io/leadscout/`.

If approved, the owner must perform the repository Settings → Pages change while signed into the owning GitHub account. The owner should not enable a custom domain, analytics, or form backend during this first test.

The committed `.github/workflows/pages.yml` runs `npm install`, `npm run build`, and uploads only `dist/`. This preserves the existing root-relative links to `missed-call-recovery.html` and `sample-audit.html`; publishing the repository root would leave those links broken.

## Post-approval verification checklist

1. Open the generated Pages URL in a clean browser.
2. Verify homepage headline and primary audit CTA are visible.
3. Open the missed-call recovery offer link.
4. Verify required business, website, and contact fields appear.
5. Submit only a controlled test request if the owner has approved the destination mailbox; confirm actual receipt in that mailbox.
6. Open the illustrative sample-audit link and verify its illustrative disclaimer.
7. Record the final URL, timestamp, Pages deployment/readiness evidence, and test-receipt evidence.
8. Only then move the funnel from `request-ready` to `published`; a prepared mailto is still not a lead, and publication is not revenue.

## Fallback if GitHub Pages is rejected

Use Cloudflare Pages Git integration or Netlify only if the owner already controls the required account and approves the external host. Both official setup paths were reachable during this run, but account creation, identity/security checks, and host ownership remain owner-controlled gates:

- Cloudflare Pages guide: https://developers.cloudflare.com/pages/get-started/git-integration/
- Netlify start guide: https://docs.netlify.com/start/choose-your-path/

Do not create accounts or enter credentials from this prepare-only run.

## Reuse review

No new dependency is justified before publication. For later aggregate measurement, Umami remains the first candidate (MIT, 38,570 GitHub stars, pushed 2026-09-02): https://github.com/umami-software/umami. Plausible is also active but AGPL-3.0 (28,853 stars, pushed 2026-09-03): https://github.com/plausible/analytics. GitForms was not adopted because its repository metadata reports `NOASSERTION` licensing and it has not been audited for data handling: https://github.com/Luigigreco/gitforms.

## Revenue truth

- `researched`: yes
- `request-ready`: yes
- `published`: no verified URL
- `sent / replied / qualified / opportunity / won / paid`: no evidence
- **Verified revenue received:** none

## Sources checked

- GitHub Pages quickstart: https://docs.github.com/en/pages/quickstart
- Cloudflare Pages: https://developers.cloudflare.com/pages/get-started/git-integration/
- Netlify: https://docs.netlify.com/start/choose-your-path/
- Existing preflight: `revenue/funnel-preflight.py`
- Existing run record: `revenue/funnel-preflight-run-2026-09-03.md`
