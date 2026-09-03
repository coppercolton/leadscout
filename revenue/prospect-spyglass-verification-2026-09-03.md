---
title: LeadScout Prospect Verification — Spyglass Realty — 2026-09-03
date: 2026-09-03
status: prepare-only
project: leadscout
funnel_state: researched -> approval-ready
---

# LeadScout Prospect Verification — Spyglass Realty

## Outcome
Re-verified one bounded prospect and converted the prior hypothesis into an owner-ready contact packet. This is research only: no message was sent, no form was submitted, and no revenue is claimed.

## Prospect identity
- **Business:** Spyglass Realty
- **Official homepage:** https://www.spyglassrealty.com/
- **Official contact page:** https://www.spyglassrealty.com/contact
- **Official contact email shown on contact page:** info@spyglassrealty.com
- **Contact confidence:** Found — published by the official contact page; owner must still approve whether this is the permitted recipient/path.
- **Research date:** 2026-09-03 (scheduled run)

## Concrete public observations
1. The official homepage links the exact CTA **“Free Consultation”** to `/contact`.
2. The same homepage links **“Get Your Free Valuation”** to `/home-value` and presents buying, selling, search, and home-valuation journeys.
3. The official contact page title is **“Contact Us | Free Consultation | Spyglass Realty”** and visibly publishes `info@spyglassrealty.com` as a mail link.

These are observable paths, not claims that Spyglass has a response failure. The safe test question is whether a valuation or consultation request receives a fast, clear human handoff.

## Approval-ready draft (do not send)

**To:** info@spyglassrealty.com *(owner approval required)*

**Subject:** Two public response-path observations for Spyglass Realty

Hi Spyglass team,

I was reviewing Spyglass Realty’s public customer paths and noticed:

- The homepage presents a “Free Consultation” path that routes to `/contact`.
- It also presents “Get Your Free Valuation” alongside buying, selling, and search journeys.

Those are not a claim that anything is broken; they are simply the two places I would test first when checking whether an inbound valuation or consultation request reaches a human quickly and clearly.

I’m preparing a small, public-path missed-call and inbound-response audit for Austin teams. It checks phone, forms, valuation/quote, chat, and after-hours paths and returns source-linked observations plus a three-priority fix sequence. The illustrative sample is here:
https://leadscout-umber.vercel.app/sample-audit

Would it be useful for me to prepare the scope for Spyglass Realty? If not relevant, reply “no thanks” and I won’t follow up.

Best,
[approved sender name]

## Owner gate before external action
The owner must approve all of the following before any send:
- sender identity and mailbox;
- `info@spyglassrealty.com` as the permitted recipient path;
- final wording and sample link;
- free pilot versus paid audit, price, and terms;
- one-prospect manual-send scope.

If approved, re-open both official pages immediately before sending and record the sending-system evidence. A send is a pipeline event, not revenue.

## Verification evidence
- `curl` request to `https://www.spyglassrealty.com/` returned HTTP 200, final URL `/`, title `The Best Austin Real Estate Agents | Spyglass Realty`, response length 76,435 bytes.
- `curl` request to `https://www.spyglassrealty.com/contact` returned HTTP 200, final URL `/contact`, title `Contact Us | Free Consultation | Spyglass Realty`, response length 51,765 bytes.
- Parsed official-page links found `/contact`, `/home-value`, the exact CTA strings above, and `mailto:info@spyglassrealty.com`.
- No form submission, email send, login, credential use, payment, or external representation occurred.

## Revenue state
- `researched`: yes
- `approval-ready`: yes
- `sent / replied / qualified / opportunity / won / paid`: no evidence
- **Verified revenue received:** none

## Sources
- https://www.spyglassrealty.com/
- https://www.spyglassrealty.com/contact
- https://leadscout-umber.vercel.app/sample-audit
- `revenue/owner-launch-packet.md`
