# LeadScout Owner Approval Decision Card — 2026-09-04

**Purpose:** clear the one human-controlled gate blocking a bounded first revenue test. This card is prepare-only: it does not authorize mailbox access, draft creation, sending, payment setup, or publication changes.

## Recommended smallest test

- **Prospect:** Spyglass Realty
- **Official contact path:** `mailto:info@spyglassrealty.com`
- **Scope:** one manually reviewed message; no bulk batch
- **Offer:** 24-hour public-path missed-call / inbound-response audit
- **Terms choice:** choose exactly one: `free pilot` or `$_____ fixed audit`
- **Sample:** `https://leadscout-umber.vercel.app/sample-audit` (illustrative only; not a client result)

## Evidence already verified

- LeadScout homepage: `https://leadscout-umber.vercel.app/` → HTTP 200
- Offer page: `https://leadscout-umber.vercel.app/missed-call-recovery` → HTTP 200
- Illustrative sample: `https://leadscout-umber.vercel.app/sample-audit` → HTTP 200
- Spyglass homepage: `https://www.spyglassrealty.com/` → HTTP 200
- Spyglass contact page: `https://www.spyglassrealty.com/contact` → HTTP 200
- Concrete observation A: the official homepage's `Free Consultation` CTA routes to `/contact`.
- Concrete observation B: the official homepage's `Get Your Free Valuation` CTA routes to `/home-value`.
- Contact confidence: `Found` — published on the official contact page; not guessed.

These observations describe public customer paths, not a claim that Spyglass is broken.

## Owner: reply with one completed line

Copy/paste and fill every blank:

```text
APPROVED — sender: [name]; mailbox: [approved mailbox]; prospect: Spyglass Realty; contact: info@spyglassrealty.com; terms: [free pilot OR $___ fixed audit]; sample: approved; wording: approved / edits attached; scope: one manual message; payment path (if paid): [path or N/A]; approval date: 2026-09-04.
```

If not approving, reply `HOLD` and identify the missing choice. No external action will occur until every required field is explicit.

## Exact post-approval sequence

1. Re-read the official contact page and confirm the address immediately before action.
2. Put the approved row in a private Sheet or use the existing local row; keep status `approval_required` until the owner explicitly authorizes draft creation.
3. If draft creation is authorized, run the existing bounded Apps Script (`MAX_DRAFTS_PER_RUN = 3`); it creates drafts only and never sends.
4. Human reviews the draft recipient, observations, terms, sample link, and sender identity.
5. Human may send one message manually only if sending is explicitly approved.
6. Record recipient, subject, timestamp, source URL, and sending-system evidence.
7. Wait for actual reply evidence before marking `replied`; do not create a follow-up merely because a draft or send exists.
8. Mark `qualified`, `opportunity`, `won`, or `paid` only with the evidence defined in the existing handoff. Money received requires an independent payment/order record.

## Hard stop conditions

- Any blank owner field → remain `approval_required`.
- Guessed, scraped, or `Unverified` contact path → do not draft or send.
- No payment/tax path → do not accept paid work; a free pilot remains owner-approved only.
- A page view, mailto opening, draft, repository commit, or HTTP 200 is not revenue.

## Existing artifacts

- `revenue/owner-launch-packet.md`
- `revenue/first-revenue-activation-run-card.md`
- `revenue/gmail-draft-first-handoff.md`
- `revenue/owner-ready-prospect-row-spyglass-2026-09-04.csv`
- `revenue/activation-run-2026-09-04-0951.md`

**Current funnel state:** `researched → published/request-ready → approval_required`.

**Current revenue state:** no send, reply, qualified opportunity, booking, paid work, or verified money received.

**Prepared at:** `2026-09-04T13:59:29Z`.
