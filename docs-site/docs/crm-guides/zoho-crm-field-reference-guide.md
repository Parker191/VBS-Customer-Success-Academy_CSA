# 📊 Zoho CRM Field Reference Guide

**Document Type:** CRM Guide
**Category:** CRM Management
**Owner:** Customer Success Team
**Version:** 1.0
**Last Updated:** August 2026

---

## Purpose

A field-by-field reference for the Customer/Account record in Zoho CRM — what each field means, who owns updating it, and how often it should be reviewed. Use this alongside the [CRM Management SOP](../sops/crm-management.md), which covers the step-by-step update process.

---

## Core Account Fields

| Field | Description | Update Frequency | Owner |
|---|---|---|---|
| Account Name | Legal/trading name of the customer | On change | CSM |
| CRM ID | Unique account identifier | Set once, never changed | System |
| Industry | Customer's industry classification | On onboarding, rarely after | CSM |
| Delivery Manager | Internal owner for project delivery | On handover / reassignment | CSM |
| CSM Owner | Assigned Customer Success Manager | On assignment / reassignment | Manager |
| Contract Value (ACV) | Annual contract value | On renewal or scope change | CSM / Finance |
| Renewal Date | Next contract renewal date | Set at signing, updated at renewal | CSM |
| Health Status | 🟢 / 🟡 / 🔴 | Monthly, or after any Health Scorecard | CSM |

## Contact Fields

| Field | Description | Update Frequency |
|---|---|---|
| Primary Contact | Main day-to-day point of contact | On stakeholder change |
| Champion | Internal advocate at the customer | On stakeholder change |
| Decision Maker | Final approver for commercial decisions | On stakeholder change |
| Contact Role | Their function/title at the customer | On stakeholder change |

## Activity & History Fields

| Field | Description | Update Frequency |
|---|---|---|
| Last Interaction Date | Date of most recent logged touchpoint | Every interaction |
| Last Meeting Notes | Summary of most recent meeting | Every meeting, within 24 hours |
| Escalation Count (90 days) | Rolling count of escalations | Automatically updated when escalations logged |
| Open Action Items | Count of open tasks tied to the account | Ongoing |

---

## Do

- Update Health Status the same day a Health Scorecard is completed — don't batch updates.
- Keep Primary Contact and Champion distinct fields; they're often not the same person.

## Don't

- Don't leave Renewal Date blank or stale — this feeds the Renewal Management SOP's 120-day trigger.
- Don't overwrite Last Meeting Notes with a new entry; append, don't replace, so history isn't lost.

---

**Related Resources:**
- SOPs / CRM Management.md
- CRM Guides / Zoho CRM Pipeline & Deal Stages Guide.md
- CRM Guides / Zoho CRM Data Hygiene & Permissions Guide.md
