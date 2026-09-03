---
title: LeadScout Conversion Measurement Handoff
date: 2026-09-03
status: prepare-only
project: leadscout
funnel_state: request-ready
---

# LeadScout Conversion Measurement Handoff

## Purpose

Define the smallest measurement layer needed to learn whether the existing LeadScout missed-call recovery offer produces qualified demand. This is a preparation artifact only: no analytics account, cookie, tracking script, sender credential, payment account, or external publication is activated by this document.

## Current funnel and truth states

| Stage | Definition | Evidence required |
|---|---|---|
| `researched` | An official prospect path and at least two concrete public observations are recorded. | Source URL, research timestamp, observation notes. |
| `request-ready` | The visitor can review the offer and prepare a structured request. | Page URL/read-back, required fields, no-auto-send disclosure. |
| `sent` | A human-approved message was accepted by the sending system. | Recipient, subject, timestamp, contact source, send-status proof. |
| `replied` | A prospect response is verified. | Message or inbox record, timestamp, thread identity. |
| `qualified` | Need, authority, timing, and fit are established. | Owner-approved qualification notes. |
| `opportunity` | A concrete next step exists, such as a booked call or requested proposal. | Calendar/proposal evidence. |
| `won` / `paid` | A paid agreement or money received is independently verified. | Payment processor or bank evidence; never infer from clicks or sends. |

## Minimum event contract

Instrument only after a hosting and privacy decision is approved. Prefer first-party, aggregate events; do not collect message contents, sensitive personal data, or unnecessary identifiers.

| Event | Trigger | Required properties | Success use |
|---|---|---|---|
| `page_view` | Offer or sample page loads. | `page`, `utm_source`, `utm_medium`, `utm_campaign`, `utm_content` (if present). | Validate distribution reaches the intended page. |
| `sample_view` | Visitor opens the illustrative audit link. | `source_page`, UTM fields. | Measure proof-asset interest. |
| `audit_form_start` | Visitor focuses or edits the request form. | `page`, UTM fields. | Detect intent before submission. |
| `audit_request_prepared` | Required fields pass and the mailto draft is prepared. | `page`, `business_category` (optional coarse label only), UTM fields. | Primary on-site conversion proxy; not a lead or revenue event. |
| `contact_confirmed` | Human records that a request arrived through the approved route. | `channel`, `received_at`, `prospect_id` (internal non-email ID). | Separate actual demand from a prepared email draft. |

The current static page intentionally uses a `mailto:` handoff and does not provide reliable server-side confirmation. Until an approved intake endpoint or inbox workflow exists, `audit_request_prepared` must be reported as an intent signal only.

## Distribution tags

Use lowercase, stable UTM values in approved links:

- `utm_source`: channel or publisher (`linkedin`, `referral`, `owned_site`)
- `utm_medium`: distribution type (`organic`, `partner`, `direct`)
- `utm_campaign`: bounded test name (`austin-audit-2026-09`)
- `utm_content`: concept or placement (`sample-proof`, `audit-cta`)

Do not add tracking parameters to an external prospect message until the owner approves the exact destination and wording. Do not use link shorteners or deceptive redirects.

## Decision: reuse before custom build

Fresh GitHub discovery found these credible measurement candidates:

1. [Umami](https://github.com/umami-software/umami) — MIT; 38k+ stars in the 2026-09-03 search; actively pushed. Strong fit for privacy-focused, self-hosted aggregate analytics, but it requires hosting and deployment work that is premature for the current unhosted static page.
2. [Plausible Analytics](https://github.com/plausible/analytics) — AGPL-3.0; 28k+ stars in the same search; actively pushed. Strong product fit, but its license/hosting and account or deployment decisions require owner review.
3. [GitForms](https://github.com/Luigigreco/gitforms) — repository search result with 161 stars and an active 2026 push; potentially relevant to static form capture, but its current fit, security posture, and data-handling behavior were not audited deeply enough to adopt.

**Recommendation:** do not add a dependency yet. Keep the current no-account `mailto:` path, record manual `contact_confirmed` outcomes in the existing tracker, and choose a hosted intake/analytics implementation only after the owner approves a destination, privacy notice, and sender/contact workflow. If self-hosting becomes authorized, evaluate Umami first rather than custom-building analytics.

## Acceptance checks for the next gate

- [ ] An owner-approved public host exists and is verified from the user-visible URL.
- [ ] The contact destination and sender identity are approved.
- [ ] Privacy/consent treatment is approved for any analytics or form provider.
- [ ] One bounded distribution source and campaign tag are approved.
- [ ] A test request is performed manually and its actual receipt is confirmed.
- [ ] The tracker records `request-prepared` separately from `contact-confirmed`, `replied`, `qualified`, `opportunity`, and `paid`.

## Current revenue state

- `researched`: yes
- `request-ready`: yes
- `sent`: no evidence in this run
- `replied / qualified / opportunity / won / paid`: no evidence
- **Verified revenue received:** none

## Remaining approval gate

The smallest remaining blocker is owner approval of the public destination plus sender/contact route for one bounded, manual test. No analytics or payment account should be activated until that gate is cleared.

## Sources checked

- https://github.com/umami-software/umami
- https://github.com/plausible/analytics
- https://github.com/Luigigreco/gitforms
- Existing request page: `public/missed-call-recovery.html`
- Existing fulfillment tracker: `revenue/audit-intake-tracker.csv`
