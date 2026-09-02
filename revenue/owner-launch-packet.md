# LeadScout Missed-Call Recovery — Owner Launch Packet

**Purpose:** make the first legitimate revenue test executable without sending anything or committing pricing on an owner's behalf.

## Current offer

- **ICP:** Austin real-estate teams and local businesses with inbound calls/forms.
- **Offer:** a source-linked, public-path audit of phone, contact, valuation/quote, chat, and after-hours response paths.
- **Delivery promise:** reply with scope and timing first; complete the audit within 24 hours after scope is confirmed.
- **Primary CTA:** request the audit by email with business URL and preferred contact path.
- **Funnel state:** `request-ready` → `replied` → `qualified` → `opportunity` → `won` → `paid`.

## Ready-to-use review/send gate

This packet is a preparation artifact. A human owner must approve the recipient, price/terms, sender identity, and any external send.

1. Choose one prospect with a public website and a visible inbound conversion path.
2. Verify two concrete observations from the official site before personalization:
   - Observation A: exact CTA/path text or route.
   - Observation B: a second specific signal such as after-hours wording, form handoff, valuation route, chat widget, or missing response expectation.
3. Save the official URL and timestamp in the tracker.
4. Draft the message below; do not send to an unverified contact path.
5. Owner approves recipient, wording, scope, and commercial terms.
6. Send manually in a tiny starter batch (one prospect is sufficient).
7. Record recipient, subject, date/time, contact source, and send-status evidence.
8. Wait for reply evidence before creating a follow-up; do not treat a send as revenue.

## Draft outreach (approval required)

**Subject:** Two response-path observations for {{business_name}}

Hi {{first_name_or_team}},

I was looking at {{business_name}}’s public customer paths and noticed:

- {{specific_observation_a}}
- {{specific_observation_b}}

Those are not a claim that anything is broken; they are simply the two places I would test first when checking whether an inbound caller or form submission reaches a human quickly.

I’m offering a small 24-hour missed-call recovery audit for Austin teams: phone, forms, valuation/quote, chat, and after-hours paths, with source-linked evidence and a three-priority fix sequence. You can see an illustrative sample here: {{sample_url_or_repo_path}}.

Would you like me to prepare the scope for {{business_name}}? If not relevant, reply “no thanks” and I won’t follow up.

Best,
{{approved_sender_name}}

## Scope and fulfillment gate

Only after a positive reply and scope confirmation:

- public paths only unless explicit access is provided;
- no fake leads, purchases, impersonation, or deceptive submissions;
- every report claim gets a URL, screenshot, timestamp, or clearly labeled inference;
- use `revenue/audit-fulfillment-template.md`;
- log evidence count, delivery date, reply state, and payment evidence.

## Commercial gate

Not filled in deliberately. The owner must choose and approve:

- audit price or free pilot;
- implementation offer, if any;
- payment method/link and refund/terms language;
- approved sender identity and mailbox;
- permitted prospect list and send volume.

## Success evidence

- **Pipeline:** official contact path verified; approved message sent; reply or booked conversation read back from the sending system.
- **Revenue:** payment processor/order record or other independent payment evidence.
- **Do not count:** page views, GitHub stars, repository pushes, drafts, or mailto openings.

## Assets

- Landing page: `public/missed-call-recovery.html`
- Illustrative proof: `public/sample-audit.html`
- Intake tracker: `revenue/audit-intake-tracker.csv`
- Fulfillment template: `revenue/audit-fulfillment-template.md`
