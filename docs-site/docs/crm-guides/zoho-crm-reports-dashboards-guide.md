# 📈 Zoho CRM Reports & Dashboards Guide

**Document Type:** CRM Guide
**Category:** Reporting
**Owner:** Customer Success Team
**Version:** 1.0
**Last Updated:** August 2026

---

## Purpose

Describes the standard reports and dashboards every CSM and manager should have configured in Zoho CRM, supporting the [Reporting & Dashboard Management SOP](../sops/reporting-dashboard-management.md).

---

## Standard Reports

| Report | Purpose | Audience |
|---|---|---|
| Portfolio Health Overview | Health status across all accounts in a CSM's portfolio | CSM, Manager |
| Renewals Due (Next 120 Days) | Upcoming renewals with confidence rating | CSM, Manager |
| Open Escalations | All active escalations with severity and age | Manager, Leadership |
| Growth Pipeline | Open Upsell/Cross-sell/Referral opportunities | CSM, Sales |
| Stale Accounts | Accounts with no logged interaction in 30+ days | Manager |

---

## Standard Dashboards

### CSM Personal Dashboard
- Portfolio health breakdown (🟢/🟡/🔴 count)
- This week's scheduled meetings
- Open action items assigned to the CSM
- Upcoming renewals (next 90 days)

### Manager/Leadership Dashboard
- Portfolio health trend over time (month over month)
- Escalation volume and average resolution time
- Renewal win rate (trailing 4 quarters)
- Growth pipeline value by stage

---

## Setup Notes

- Reports should filter by `CSM Owner` field so each CSM sees only their own portfolio by default, with managers able to view team-wide.
- Health trend charts require a scheduled snapshot (weekly) of `Health_Total_Score`, since Zoho CRM reports on current field values, not history, unless historical trend tracking is separately configured.
- Schedule the Manager/Leadership Dashboard as an automated weekly email digest, so it doesn't rely on someone remembering to check it.

---

## Do

- Review your Personal Dashboard at the start of every week, before your Weekly Business Review.
- Keep filters scoped to `CSM Owner` = yourself, to avoid confusion with teammates' accounts.

## Don't

- Don't rely on dashboards alone for at-risk detection — they reflect what's been logged, not what hasn't.

---

**Related Resources:**
- SOPs / Reporting & Dashboard Management.md
- Modules / 18 - Reporting & Executive Dashboards.md
- CRM Guides / Zoho CRM Health Score Field Mapping Guide.md
