#!/usr/bin/env python3
"""Read-only LeadScout publication/funnel preflight.

Checks the owned repository, raw public assets, and the assumed GitHub Pages URL.
It never writes to GitHub, submits forms, sends mail, or reads credentials.
"""
from __future__ import annotations

import json
import subprocess
import sys
import urllib.error
import urllib.request

REPO = "coppercolton/leadscout"
BRANCH = "main"
RAW_BASE = f"https://raw.githubusercontent.com/{REPO}/{BRANCH}"
ASSETS = [
    "/index.html",
    "/public/missed-call-recovery.html",
    "/public/sample-audit.html",
    "/revenue/first-revenue-activation-run-card.md",
]
PAGES_URLS = [
    "https://coppercolton.github.io/leadscout/",
    "https://coppercolton.github.io/leadscout/missed-call-recovery.html",
]
ACTIONS_RUNS_URL = f"https://api.github.com/repos/{REPO}/actions/runs?per_page=1"


def get(url: str, max_bytes: int = 300) -> tuple[int, str]:
    request = urllib.request.Request(url, headers={"User-Agent": "LeadScout-read-only-preflight"})
    try:
        with urllib.request.urlopen(request, timeout=20) as response:
            return response.status, response.read(max_bytes).decode("utf-8", "replace")
    except urllib.error.HTTPError as error:
        return error.code, error.read(max_bytes).decode("utf-8", "replace")
    except Exception as error:  # bounded network probe; report, do not retry forever
        return 0, str(error)


def main() -> int:
    print("LeadScout read-only funnel preflight")
    print(f"repository: https://github.com/{REPO}")
    try:
        result = subprocess.run(
            ["git", "ls-remote", f"https://github.com/{REPO}.git", f"refs/heads/{BRANCH}"],
            capture_output=True,
            text=True,
            timeout=20,
            check=False,
        )
        remote = result.stdout.strip().split()
        print(f"git_transport: {'PASS' if result.returncode == 0 and remote else 'FAIL'}")
        if remote:
            print(f"remote_commit: {remote[0]}")
    except Exception as error:
        print(f"git_transport: FAIL ({error})")

    status, body = get(f"https://api.github.com/repos/{REPO}", max_bytes=100000)
    print(f"repository_api: {'PASS' if status == 200 else 'FAIL'} (HTTP {status})")
    if status == 200:
        metadata = json.loads(body if body.startswith("{") else "{}")
        print(f"default_branch: {metadata.get('default_branch', 'unknown')}")

    status, body = get(ACTIONS_RUNS_URL, max_bytes=100000)
    print(f"actions_api: {'PASS' if status == 200 else 'FAIL'} (HTTP {status})")
    if status == 200:
        runs = json.loads(body if body.startswith("{") else "{}").get("workflow_runs", [])
        if runs:
            latest = runs[0]
            print(f"latest_actions_run: {latest.get('id', 'unknown')} {latest.get('status', 'unknown')}/{latest.get('conclusion', 'unknown')}")
            print(f"latest_actions_run_url: {latest.get('html_url', 'unknown')}")
        else:
            print("latest_actions_run: none")

    for asset in ASSETS:
        status, _ = get(RAW_BASE + asset)
        print(f"raw_asset {asset}: {'PASS' if status == 200 else 'FAIL'} (HTTP {status})")

    pages_failures = 0
    for url in PAGES_URLS:
        status, _ = get(url)
        print(f"pages_url {url}: {'PASS' if 200 <= status < 400 else 'FAIL'} (HTTP {status})")
        if not 200 <= status < 400:
            pages_failures += 1

    if pages_failures:
        print("funnel_state: request-ready -> publication-blocked")
        print("revenue_state: no verified send, reply, opportunity, order, payment, or revenue")
        print("next_gate: human approval of public host/path before enabling publication")
        return 2
    print("funnel_state: published URL reachable; inspect visible form behavior before commercial use")
    return 0


if __name__ == "__main__":
    sys.exit(main())
