#!/usr/bin/env python3
"""Read-only LeadScout CSV gate validator.

Validates queue shape and explains why each row is or is not eligible for a
human-reviewed Gmail draft. It never edits the CSV, calls Gmail, or sends mail.
"""
from __future__ import annotations

import argparse
import csv
import json
import re
import sys
from pathlib import Path

REQUIRED_HEADERS = {
    "record_id", "business_name", "website", "contact_name", "email",
    "email_confidence", "source_url", "observation_1", "observation_2",
    "offer_angle", "subject", "draft_body", "status", "next_followup",
    "reply_status", "send_evidence", "owner_approval", "approved_sender",
    "approved_mailbox", "approved_terms", "payment_path", "notes",
}
VALID_CONFIDENCE = {"Found", "Likely"}
EMAIL_RE = re.compile(r"^[^\s@]+@[^\s@]+\.[^\s@]+$")


def check_row(row: dict[str, str], line: int) -> dict[str, object]:
    reasons: list[str] = []
    if row.get("status", "").strip() != "approved_for_draft":
        reasons.append("status is not approved_for_draft")
    if not EMAIL_RE.fullmatch(row.get("email", "").strip()):
        reasons.append("email is missing or syntactically invalid")
    if row.get("email_confidence", "").strip() not in VALID_CONFIDENCE:
        reasons.append("email_confidence must be Found or Likely")
    for field in ("source_url", "observation_1", "observation_2", "subject", "draft_body"):
        if not row.get(field, "").strip():
            reasons.append(f"{field} is empty")
    if row.get("send_evidence", "").strip():
        reasons.append("send_evidence is already populated")
    if row.get("owner_approval", "").strip() != "approved":
        reasons.append("owner_approval is not approved")
    if not row.get("approved_sender", "").strip():
        reasons.append("approved_sender is empty")
    if not row.get("approved_mailbox", "").strip():
        reasons.append("approved_mailbox is empty")
    terms = row.get("approved_terms", "").strip()
    if not terms:
        reasons.append("approved_terms is empty")
    elif terms != "free pilot" and not row.get("payment_path", "").strip():
        reasons.append("payment_path is required for non-free-pilot terms")
    return {"line": line, "record_id": row.get("record_id", ""),
            "eligible_for_human_reviewed_draft": not reasons, "reasons": reasons}


def validate(path: Path) -> dict[str, object]:
    with path.open(newline="", encoding="utf-8-sig") as handle:
        reader = csv.DictReader(handle)
        headers = set(reader.fieldnames or [])
        missing = sorted(REQUIRED_HEADERS - headers)
        rows = [check_row(row, reader.line_num) for row in reader]
    return {
        "file": str(path),
        "read_only": True,
        "required_headers_present": not missing,
        "missing_headers": missing,
        "row_count": len(rows),
        "eligible_count": sum(bool(row["eligible_for_human_reviewed_draft"]) for row in rows) if not missing else 0,
        "rows": rows if not missing else [],
        "safe_next_step": "Human review only; this checker does not create drafts or send email.",
    }


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("csv_file", type=Path)
    parser.add_argument("--json", action="store_true", dest="as_json")
    args = parser.parse_args()
    try:
        result = validate(args.csv_file)
    except (OSError, csv.Error) as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        return 2
    if args.as_json:
        print(json.dumps(result, indent=2))
    else:
        print(f"LeadScout free-mode queue check: {result['file']}")
        print(f"read_only={result['read_only']} headers_ok={result['required_headers_present']} rows={result['row_count']} eligible={result['eligible_count']}")
        if result["missing_headers"]:
            print("missing_headers=" + ",".join(result["missing_headers"]))
        for row in result["rows"]:
            state = "ELIGIBLE" if row["eligible_for_human_reviewed_draft"] else "BLOCKED"
            detail = "; ".join(row["reasons"]) or "all gates pass"
            print(f"line={row['line']} record={row['record_id']} {state}: {detail}")
        print(result["safe_next_step"])
    return 0 if result["required_headers_present"] else 2


if __name__ == "__main__":
    raise SystemExit(main())
