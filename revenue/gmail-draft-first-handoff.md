# LeadScout draft-first Gmail / Sheets handoff

## Purpose
A zero-cost, human-approved workflow for turning reviewed LeadScout queue rows into Gmail drafts. It does not send messages, scrape contacts, or call paid APIs.

## Sheet contract
Import `outreach-queue-template.csv` into Google Sheets. Required headers:

`record_id,business_name,website,contact_name,email,email_confidence,source_url,observation_1,observation_2,offer_angle,subject,draft_body,status,next_followup,reply_status,send_evidence,owner_approval,approved_sender,approved_mailbox,approved_terms,payment_path,notes`

Allowed initial statuses:
- `research_more`: missing evidence or contact confidence
- `draft_ready`: two concrete observations and a reviewed contact path exist
- `approved_for_draft`: human approved draft creation
- `draft_created`: Gmail draft ID and timestamp recorded
- `sent`: only a human records this after sending and adds evidence
- `replied`, `qualified`, `opportunity`, `won`, `paid`

Only rows with `status=approved_for_draft`, a syntactically valid email, `email_confidence` of `Found` or `Likely`, and two non-empty observations are eligible for draft creation. The script refuses all other rows.

## Setup
1. Make a private Google Sheet and import the CSV template.
2. Open **Extensions → Apps Script**.
3. Paste `gmail-draft-first.gs`.
4. Run `createApprovedDrafts` once and accept Google's normal Gmail authorization prompt.
5. Review drafts in Gmail manually. Do not change a row to `sent` until a human has actually sent it.

## Safety / claim gates
- Draft creation is bounded by `MAX_DRAFTS_PER_RUN = 3`.
- The script never calls `GmailApp.sendEmail`.
- Do not use guessed addresses or unverified contact paths.
- Keep source URLs and two prospect-specific observations in each row.
- This artifact proves draft tooling readiness only; it is not outreach, a reply, an opportunity, or revenue.

## GitHub reuse review
Searched GitHub on 2026-09-03 before custom code. Candidates were inspected for fit and visible metadata:
- https://github.com/wyattowalsh/gmail-studio — 0 stars, pushed 2026-04-14, no license metadata in API result; conceptually close but license/integration maturity unclear.
- https://github.com/withoneai/gtm-lead-agent — 0 stars, pushed 2026-07-29, MIT; depends on paid/external research stack and is broader than this free-mode wedge.
- https://github.com/eloise924/email-outreach-automation — 0 stars, pushed 2025-12-22, no license metadata in API result; example-level fit.

Decision: keep the existing simple CSV + Apps Script boundary rather than adopt low-star or insufficiently licensed dependencies. Revisit a mature candidate only when the workflow needs a tested provider integration.
