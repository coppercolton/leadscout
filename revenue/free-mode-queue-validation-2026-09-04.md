# LeadScout free-mode queue validation — 2026-09-04

## Decision
Keep the existing LeadScout CSV → human review → Gmail draft-only path and add a local, dependency-free validator before a private Google Sheet import. This is the smallest useful free-mode improvement: it catches schema and approval failures without needing `GEMINI_API_KEY`, Gmail access, paid enrichment, or a new service.

## GitHub-first reuse review
A public GitHub API search was run before custom work on 2026-09-04. Candidates returned by the current search:

| Repository | Stars | License | Last pushed | Fit decision |
|---|---:|---|---|---|
| [twentyhq/twenty](https://github.com/twentyhq/twenty) | 56,251 | `NOASSERTION` | 2026-09-04 | Mature CRM, but far too large for a zero-cost local queue gate; license posture needs separate review. |
| [eracle/OpenOutreach](https://github.com/eracle/OpenOutreach) | 2,904 | GPL-3.0 | 2026-09-02 | Outreach-oriented, but GPL and broader sending surface are a poor fit for the current prepare-only boundary. |
| [omkarcloud/google-maps-scraper](https://github.com/omkarcloud/google-maps-scraper) | 3,434 | MIT | 2026-07-27 | Discovery/scraping component, not needed for validating already researched rows; adding it would increase compliance and operational risk. |
| [gmapsscraper/google-maps-agent-skills](https://github.com/gmapsscraper/google-maps-agent-skills) | 128 | MIT | 2026-05-31 | Too narrow and not required for this gate. |
| [kiryano/Scout](https://github.com/kiryano/Scout) | 592 | MIT | 2026-02-22 | Lead-generation candidate, but no clean integration boundary identified for this local CSV validator. |

**Reuse result:** no candidate was adopted. The existing queue and Apps Script are the better fit; the new validator is original stdlib-only code with no third-party dependency.

## Artifact
- `free-mode-queue-check.py`
- Read-only CLI: `python revenue/free-mode-queue-check.py revenue/outreach-queue-template.csv`
- JSON mode: `python revenue/free-mode-queue-check.py revenue/outreach-queue-template.csv --json`

The checker validates required headers and per-row gates: explicit approval status, syntactically valid email, `Found`/`Likely` confidence, source URL, two concrete observations, subject/body, empty send evidence, approved sender/mailbox/terms, and payment path unless terms are `free pilot`. It never edits the CSV, accesses Gmail, creates drafts, or sends email.

## Verification evidence
- Existing template: headers pass; 1 row is blocked with explicit reasons; 0 eligible.
- Existing Spyglass prospect fixture: correctly blocked because it is a prospect-only row without the new owner-approval fields; no draft action occurred.
- Synthetic fully approved fixture: 1 row evaluated, 1 eligible; JSON output confirmed `eligible_count: 1`.
- `python -m py_compile revenue/free-mode-queue-check.py`: passed.
- `git diff --check`: passed.

## Funnel and revenue state
`researched → published/request-ready → approval_required`

No external send, Gmail draft, reply, qualified opportunity, booking, payment, or verified revenue is evidenced. This artifact only reduces preflight friction.

## Remaining gate
Owner approval is still required for sender/mailbox, recipient, wording/scope, audit terms (`free pilot` versus paid), and privacy/payment treatment before any human runs the bounded draft-first workflow.
