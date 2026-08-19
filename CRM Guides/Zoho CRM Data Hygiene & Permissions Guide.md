# 🔐 Zoho CRM Data Hygiene & Permissions Guide

**Document Type:** CRM Guide
**Category:** CRM Governance
**Owner:** Customer Success Team
**Version:** 1.0
**Last Updated:** August 2026

---

## Purpose

Defines data quality standards and access permissions for Zoho CRM so account data stays reliable and access stays appropriately scoped as the team grows.

---

## Data Hygiene Standards

| Rule | Why |
|---|---|
| Every account must have a CSM Owner assigned | Prevents orphaned accounts with no accountability |
| Health Status must be updated at least monthly | Stale health data undermines all downstream reporting |
| No duplicate account records | Duplicate records split interaction history and break health scoring |
| Renewal Date must never be blank for an active account | Breaks the 120-day renewal readiness trigger |
| Escalations must be logged in the Escalation module, not just as notes | Notes aren't reportable; the Escalation module is |

## Duplicate Prevention

- Search by both Company Name and CRM ID before creating a new account record.
- If a duplicate is found, merge rather than delete — Zoho's merge tool preserves activity history from both records.

## Data Review Cadence

- CSMs: review your own portfolio for hygiene issues monthly, ahead of the Monthly Business Review cycle.
- Managers: run a portfolio-wide hygiene report quarterly (see [Zoho CRM Reports & Dashboards Guide](Zoho%20CRM%20Reports%20%26%20Dashboards%20Guide.md)) and flag stale or incomplete records.

---

## Permission Levels

| Role | Access Level |
|---|---|
| CSM | Full read/write on own portfolio; read-only on team accounts |
| Manager | Full read/write on team portfolio; read-only on cross-team accounts |
| Finance | Read/write on billing/invoice fields only; read-only elsewhere |
| Leadership | Read-only, all accounts, reporting/dashboard access |

## Access Requests

- New CRM access requests go through your manager, not directly to CRM admin.
- Access should be reviewed whenever a CSM changes portfolios or leaves the team — stale access is a data risk, not just a permissions inconvenience.

---

## Do

- Merge duplicates promptly when found, rather than leaving both records active.
- Review your own portfolio's data hygiene monthly rather than waiting for a manager audit to catch issues.

## Don't

- Don't delete duplicate records without merging — this destroys history.
- Don't share CRM login credentials between team members, even temporarily.

---

**Related Resources:**
- SOPs / CRM Management.md
- CRM Guides / Zoho CRM Field Reference Guide.md
- CRM Guides / Zoho CRM Reports & Dashboards Guide.md
