# GitHub Reuse Review — 2026-09-05 18:38 CDT

## Decision
Keep the current LeadScout zero-cost, draft-first wedge. Do not add a GitHub dependency in this cycle.

The current bottleneck is not missing software: it is the owner-controlled approval gate for sender/mailbox, recipient, wording, terms, privacy/sample treatment, and payment path. Adding an outreach framework before that gate clears would increase integration and deliverability risk without producing a verified revenue event.

## Fresh public search
Searches used GitHub's public repository search API on 2026-09-05:

- `gmail draft automation`: 250 results. Candidate: [KANISHKGX/Mail_Inbox_Agent](https://github.com/KANISHKGX/Mail_Inbox_Agent) — 60 stars, MIT, last pushed 2025-12-19. Gmail drafting/labeling is relevant, but it is an AI inbox agent, not a narrowly bounded approval-first outreach component.
- `outreach crm`: 831 results. Candidate: [builderz-labs/marketing-dashboard](https://github.com/builderz-labs/marketing-dashboard) — 454 stars, MIT, last pushed 2026-08-25. Broad local-first marketing operations dashboard; substantially larger scope than the current one-prospect test.
- `outreach crm`: candidate [kaymen99/sales-outreach-automation-langgraph](https://github.com/kaymen99/sales-outreach-automation-langgraph) — 379 stars, license not listed in API result, last pushed 2025-01-15. It covers research/qualification/outreach integrations, but the licensing and operational surface are not clean enough for immediate reuse.
- `gmail draft automation`: candidate [ManjunathMGM/gmail-outreach-automation](https://github.com/ManjunathMGM/gmail-outreach-automation) — 9 stars, license not listed, last pushed 2026-02-25. Narrower fit, but low adoption and no clear advantage over the existing read-only queue gate.

## Fit and risk assessment

| Candidate | Fit | Main risk | Decision |
|---|---|---|---|
| Mail_Inbox_Agent | Gmail draft concepts | Bigger inbox-agent scope; not needed for one manual message | Do not adopt |
| marketing-dashboard | Strong CRM/approval breadth | Overbuilt for current wedge; integration risk | Do not adopt |
| sales-outreach-automation-langgraph | Broad prospecting flow | License not listed in API result; automation/sending surface too broad | Do not adopt |
| gmail-outreach-automation | Gmail outreach scripts | Low adoption; license unclear; no verified benefit | Do not adopt |

## Current implementation remains the safer fit
- Read-only queue validator: `revenue/free-mode-queue-check.py`
- Queue remains intentionally ineligible until human approval fields are explicit.
- No Gmail access, draft creation, sending, spend, payment setup, or external representation occurred.

## Verification evidence
- `npm run build` passed; Vite generated `dist/index.html`.
- Queue validator: `read_only=True`, `headers_ok=True`, `rows=1`, `eligible=0`.
- Public routes returned HTTP 200:
  - https://leadscout-umber.vercel.app/
  - https://leadscout-umber.vercel.app/missed-call-recovery
  - https://leadscout-umber.vercel.app/sample-audit
  - https://www.spyglassrealty.com/
  - https://www.spyglassrealty.com/contact

## Revenue state
`researched → published/request-ready → approval_required`

No draft, send, reply, qualified opportunity, booking, payment, or verified revenue is evidenced.

## Next gate
One bounded owner decision remains: approved sender/mailbox, Spyglass recipient, wording/sample, one-message scope, free-pilot versus paid terms, privacy treatment, and payment path if paid. Until then, do not create drafts, send, activate payment, spend, or change production behavior.
