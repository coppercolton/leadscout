const MAX_DRAFTS_PER_RUN = 3;
const REQUIRED_HEADERS = [
  'record_id', 'business_name', 'website', 'contact_name', 'email',
  'email_confidence', 'source_url', 'observation_1', 'observation_2',
  'subject', 'draft_body', 'status', 'send_evidence',
  'owner_approval', 'approved_sender', 'approved_mailbox',
  'approved_terms', 'payment_path'
];

/**
 * Creates reviewable Gmail drafts from explicitly approved rows.
 * This function never sends email.
 */
function createApprovedDrafts() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const values = sheet.getDataRange().getValues();
  if (values.length < 2) throw new Error('The sheet has no data rows.');

  const headers = values[0].map(String);
  REQUIRED_HEADERS.forEach(function (header) {
    if (headers.indexOf(header) === -1) throw new Error('Missing required header: ' + header);
  });

  const index = {};
  headers.forEach(function (header, i) { index[header] = i; });
  let created = 0;

  for (let rowNumber = 1; rowNumber < values.length && created < MAX_DRAFTS_PER_RUN; rowNumber++) {
    const row = values[rowNumber];
    if (String(row[index.status]).trim() !== 'approved_for_draft') continue;
    if (String(row[index.send_evidence]).trim()) continue;

    const email = String(row[index.email]).trim();
    const confidence = String(row[index.email_confidence]).trim();
    const observation1 = String(row[index.observation_1]).trim();
    const observation2 = String(row[index.observation_2]).trim();
    const subject = String(row[index.subject]).trim();
    const body = String(row[index.draft_body]).trim();
    const ownerApproval = String(row[index.owner_approval]).trim();
    const approvedSender = String(row[index.approved_sender]).trim();
    const approvedMailbox = String(row[index.approved_mailbox]).trim();
    const approvedTerms = String(row[index.approved_terms]).trim();
    const paymentPath = String(row[index.payment_path]).trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) continue;
    if (confidence !== 'Found' && confidence !== 'Likely') continue;
    if (!observation1 || !observation2 || !subject || !body) continue;
    if (ownerApproval !== 'approved') continue;
    if (!approvedSender || !approvedMailbox || !approvedTerms) continue;
    if (approvedMailbox.toLowerCase() !== Session.getEffectiveUser().getEmail().toLowerCase()) continue;
    if (approvedTerms !== 'free pilot' && !paymentPath) continue;

    // Deliberately draft-only: this function creates drafts and never sends.
    const draft = GmailApp.createDraft(email, subject, body);
    const timestamp = new Date().toISOString();
    sheet.getRange(rowNumber + 1, index.status + 1).setValue('draft_created');
    sheet.getRange(rowNumber + 1, index.send_evidence + 1)
      .setValue('draft_id=' + draft.getId() + '; created_at=' + timestamp);
    created++;
  }

  return 'Created ' + created + ' reviewable draft(s). No email was sent.';
}
