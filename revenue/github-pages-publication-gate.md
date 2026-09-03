# LeadScout GitHub Pages Publication Gate

**Status:** prepare-only / owner decision required  
**Prepared:** 2026-09-03  
**Repository:** https://github.com/coppercolton/leadscout

## Why this exists

The static offer and illustrative audit are present in the public repository, but no user-visible landing URL is currently verified. This packet reduces the publication blocker without changing repository settings or claiming a live funnel.

## Current verified state

- Remote `main`: commit `540918d7423b743c154010e5ed7fd57cca79c2e1`.
- Raw offer asset: `https://raw.githubusercontent.com/coppercolton/leadscout/main/public/missed-call-recovery.html` — previously verified HTTP 200.
- Raw proof asset: `https://raw.githubusercontent.com/coppercolton/leadscout/main/public/sample-audit.html` — previously verified HTTP 200.
- Assumed Pages URL `https://coppercolton.github.io/leadscout/missed-call-recovery.html` — previously verified HTTP 404.
- Pages API read `GET /repos/coppercolton/leadscout/pages` — previously returned HTTP 404; no readable Pages configuration was found.

A repository URL or raw-file URL is not a hosted offer page and is not revenue evidence.

## Owner decision gate

A human owner must choose and approve:

1. **Public host:** GitHub Pages is the proposed zero-cost option, or another owned host.
2. **Published path:** preferred path is `/leadscout/missed-call-recovery.html` if the repository root is used as the Pages source.
3. **External representation:** approval that the existing offer copy, GitHub link, and contact path may be publicly presented.
4. **Commercial gate:** approved sender identity, prospect, price or free-pilot terms, and payment/tax setup before accepting paid work.

No setting change, outreach send, payment setup, or spend is authorized by this packet.

## Safe publication procedure after approval

1. In the owned GitHub repository settings, select Pages and an approved source/branch.
2. Wait for the provider's deployment status to report success.
3. Open the exact generated URL in a clean browser session.
4. Verify the visible title, offer, request form/mailto behavior, sample link, and absence of placeholder-only controls.
5. Verify the published page is the intended commit and not an unrelated similarly named project.
6. Record the final URL, deployment/status evidence, timestamp, and rollback path in the funnel tracker.

## Post-publication verification checklist

- [ ] Exact public URL returns HTTP 200.
- [ ] Offer headline and CTA are visible without authentication.
- [ ] Request fields validate locally in the browser.
- [ ] Submission prepares a prefilled email and does not auto-send.
- [ ] Illustrative sample is reachable and labeled illustrative.
- [ ] No secrets, fake testimonials, unsupported performance claims, or invented pricing appear.
- [ ] Funnel state changes only to `published`; it remains `sent: no evidence` until a human-approved send is independently read back.

## Revenue truth

Current state remains:

- `researched`: yes
- `request-ready`: yes
- `published`: no verified URL
- `sent / replied / qualified / opportunity / won / paid`: no evidence
- **Verified revenue received:** none

## Sources and related artifacts

- Repository: https://github.com/coppercolton/leadscout
- Offer asset: `public/missed-call-recovery.html`
- Proof asset: `public/sample-audit.html`
- Verification report: `revenue/live-funnel-verification-2026-09-03.md`
- Owner activation run card: `revenue/first-revenue-activation-run-card.md`
