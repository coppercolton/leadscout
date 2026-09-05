# LeadScout First-Test Approval Handoff — 2026-09-05 15:10 CDT

**State:** `researched → published/request-ready → approval_required`

This is a prepare-only handoff. It does **not** authorize mailbox access, Gmail draft creation, sending, payment setup, publication changes, or paid work.

## Smallest test

- **Prospect:** Spyglass Realty
- **Official contact path:** `info@spyglassrealty.com` published on `https://www.spyglassrealty.com/contact`
- **Scope:** one manually reviewed message; no bulk batch
- **Offer:** a 24-hour public-path missed-call / inbound-response audit for an Austin real-estate team
- **Illustrative sample:** `https://leadscout-umber.vercel.app/sample-audit`
- **Draft subject:** Two public response-path observations for Spyglass Realty

## Current source-backed observations

1. The official homepage's **Free Consultation** CTA routes to `/contact`.
2. The official homepage's **Get Your Free Valuation** CTA routes to `/home-value`.

These are observations about public customer paths, **not** a claim that Spyglass is broken.

## One-line owner decision

Copy, fill every bracket, and return exactly one line. Until this line is complete, the queue remains blocked.

```text
APPROVED — sender: [name]; mailbox: [approved mailbox]; prospect: Spyglass Realty; contact: info@spyglassrealty.com; terms: [free pilot OR $___ fixed audit]; sample: approved; wording: approved / edits attached; scope: one manual message; payment path (if paid): [path or N/A]; approval date: 2026-09-05.
```

If not approving, return `HOLD — [missing choice]`. No external action will occur.

## After approval (still gated by explicit wording)

- If **draft creation** is approved: create one Gmail draft only, then inspect recipient, observations, sample, terms, and sender identity.
- If **sending** is approved separately: send one message manually and record recipient, subject, timestamp, source URL, and sending-system evidence.
- If terms are paid: do not accept work until the owner supplies the payment path and approved commercial language.
- Wait for actual reply evidence before marking `replied`; a draft or send is pipeline activity, not revenue.

## Independently verified preparation evidence

- LeadScout homepage: `https://leadscout-umber.vercel.app/` → HTTP 200
- LeadScout offer: `https://leadscout-umber.vercel.app/missed-call-recovery` → HTTP 200
- LeadScout illustrative sample: `https://leadscout-umber.vercel.app/sample-audit` → HTTP 200
- Spyglass homepage: `https://www.spyglassrealty.com/` → HTTP 200
- Spyglass contact page: `https://www.spyglassrealty.com/contact` → HTTP 200
- Local `npm run build` → pass
- Read-only queue validator → schema pass; current template row remains ineligible until approval fields are explicit
- GitHub reuse search → current candidates inspected; no dependency adopted because the existing CSV + stdlib validator + draft-first handoff is smaller and more auditable

## Revenue boundary

No send, reply, booking, qualified opportunity, paid work, payment record, or verified money received exists as of this handoff. The single remaining blocker is explicit owner approval of sender/mailbox, recipient, wording/sample, scope, terms, and payment path if paid.
