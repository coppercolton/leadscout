# Draft Gate Hardening — 2026-09-04

## Outcome
Strengthened the free-mode Gmail draft-only workflow so a row cannot create a draft unless the human-controlled approval and commercial fields are explicit.

## Changes
- `revenue/gmail-draft-first.gs` now requires queue columns for `owner_approval`, `approved_sender`, `approved_mailbox`, `approved_terms`, and `payment_path`.
- Draft creation still requires `status=approved_for_draft`, `Found`/`Likely` contact confidence, two concrete observations, subject, and body.
- The script now requires `owner_approval=approved` and a non-empty sender, mailbox, and terms.
- The approved mailbox must match the executing Google account; paid terms additionally require a payment path. `free pilot` does not bypass owner approval.
- `revenue/outreach-queue-template.csv` now includes the new fields and remains `approval_required` by default.

## Verification
- CSV parsed successfully with Python: 1 row, 22 headers; default row is `research_more` / `approval_required`.
- Apps Script source was copied to a temporary `.js` file and passed Node syntax checking.
- No Gmail account was accessed, no draft was created, no message was sent, and no payment or external account was changed.

## Revenue state
`researched → request-ready → approval_required`; no sent, replied, qualified, opportunity, won, paid, or verified-money evidence.

## Remaining gate
Owner must approve sender identity/mailbox, prospect, wording/scope, and free-pilot versus paid-audit terms before any draft or send action.
