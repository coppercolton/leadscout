# LeadScout First-Revenue Activation Run Card

**Purpose:** turn the existing missed-call recovery audit assets into one bounded, reviewable first-revenue attempt. This is a preparation artifact; it does not authorize sending, payment setup, publication, or spend.

## 0. Current verified state

- Offer: source-linked public-path audit covering phone, forms, quote/valuation, chat, and after-hours response routes.
- Existing assets: `public/missed-call-recovery.html`, `public/sample-audit.html`, `revenue/audit-fulfillment-template.md`, and `revenue/audit-intake-tracker.csv`.
- Current funnel state: `request-ready` / `fulfillment-ready`.
- Not evidenced: published checkout, sent message, reply, qualified opportunity, order, payment, or revenue.

## 1. Human approval gate — fill these before any external action

- Approved sender name: `____________________________`
- Approved sender mailbox/contact path: `____________________________`
- Audit terms: `free pilot` / `$________ fixed price` / `other: __________`
- Payment path, if paid: `____________________________`  *(do not create or configure it here)*
- One permitted prospect/business: `____________________________`
- Approved contact path for that prospect: `____________________________`
- Approval date and owner: `____________________________`

If any field above is blank, remain in `request-ready`; do not send or publish.

## 2. Pick exactly one prospect

Use a public official website and a reliable official contact path. Record:

- Business name: `____________________________`
- Official URL: `____________________________`
- Contact URL/email/form: `____________________________`
- Research timestamp: `____________________________`
- Observation A — exact CTA/path text or route: `____________________________`
- Observation B — second concrete signal (after-hours wording, form handoff, valuation route, chat, or missing response expectation): `____________________________`
- Contact confidence: `Found` / `Likely` / `Domain-valid only` / `Unverified`

**Quality gate:** do not proceed if the contact path is guessed or `Unverified`, or if the two observations could apply equally to any business.

## 3. Prepare, review, and manually send one message

1. Use the draft in `revenue/owner-launch-packet.md`.
2. Replace both observations with the exact signals above.
3. Link the illustrative sample only as an illustrative sample; do not imply it is a client result.
4. Owner reviews recipient, wording, terms, sender identity, and scope.
5. If approved, the owner sends one message manually. No bulk automation.
6. Record send evidence immediately:

- Recipient: `____________________________`
- Subject: `____________________________`
- Sent timestamp: `____________________________`
- Source/contact path: `____________________________`
- Sending-system evidence (message ID, sent-folder record, or screenshot path): `____________________________`
- Funnel state: `sent` *(only after the sending system confirms acceptance)*

A draft, mailto opening, repository push, or page view is not a send and is not revenue.

## 4. Reply and fulfillment gates

- Do not create a follow-up unless reply evidence exists.
- On reply, record need, authority, timing, fit, and requested next step; then set `replied` or `qualified` with evidence.
- Only after scope confirmation, fulfill with `revenue/audit-fulfillment-template.md` using public paths unless explicit access is provided.
- Record each report claim with URL, screenshot, timestamp, or clearly labeled inference.
- Set `opportunity` only for a concrete next step such as a booked call or requested paid scope.
- Set `won` / `paid` only with an independent agreement/order/payment record.

## 5. Minimal tracker row after the attempt

Append/update one row in `revenue/audit-intake-tracker.csv` with business, URL, contact path, timestamp, funnel state, owner, evidence count, reply status, next follow-up, payment status, and notes. Never overwrite the template row as if it were a real prospect.

## Exact remaining blocker

A human owner must fill the approval gate in section 1: approved terms, sender identity, and one permitted prospect/contact path. Until those are supplied and approved, the system can only prepare and verify assets; it cannot claim pipeline or revenue.

## Sources and reuse check

- Existing offer and launch packet: `revenue/offer.md`, `revenue/owner-launch-packet.md`.
- Current GitHub-first research: `revenue/current-zero-cost-revenue-opportunity-research-2026-09-02.md`.
- Static checkout candidate reviewed but not adopted: https://github.com/Honorboxx/honorbox (MIT; Stripe/account/tax/publication gates remain).
- Public GitHub search used for the current reuse check: https://api.github.com/search/repositories?q=stripe+payment+links+storefront&sort=stars&order=desc&per_page=5 and https://api.github.com/search/repositories?q=lead+generation+crm+local+business&sort=stars&order=desc&per_page=5.
