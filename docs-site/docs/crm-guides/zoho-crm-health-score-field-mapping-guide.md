# 💚 Zoho CRM Health Score Field Mapping Guide

**Document Type:** CRM Guide
**Category:** Customer Health Management
**Owner:** Customer Success Team
**Version:** 1.0
**Last Updated:** August 2026

---

## Purpose

Maps the [Health Scorecard Template](../template-library/health-scorecard-template.md) fields to their corresponding Zoho CRM fields, so scores entered on paper/document are reflected consistently in CRM for reporting.

---

## Field Mapping

| Health Scorecard Field | Zoho CRM Field | Notes |
|---|---|---|
| Engagement Score (1–5) | Health_Engagement_Score | Custom field on Account module |
| Adoption Score (1–5) | Health_Adoption_Score | Custom field on Account module |
| Payment Timeliness (1–5) | Health_Payment_Score | Can be partially auto-populated from Finance module if integrated |
| Sentiment (1–5) | Health_Sentiment_Score | Manually entered by CSM |
| Escalation History (1–5) | Health_Escalation_Score | Should reference the Escalation module's rolling 90-day count |
| Stakeholder Relationship (1–5) | Health_Stakeholder_Score | Manually entered by CSM |
| Renewal Confidence (1–5) | Health_Renewal_Score | Manually entered, informs Renewal pipeline stage |
| **Total Score** | Health_Total_Score | Auto-calculated field (sum of above) |
| **RAG Status** | Health_Status | Auto-derived from Health_Total_Score via workflow rule |

---

## Automation Notes

- Zoho CRM workflow rules should auto-calculate `Health_Total_Score` when any component score field is updated.
- `Health_Status` should auto-derive from the total using the RAG thresholds defined in the [Health Scorecard Template](../template-library/health-scorecard-template.md) (28–35 Green, 18–27 Yellow, below 18 Red).
- When `Health_Status` changes to Yellow or Red, configure a Zoho workflow alert to notify the account's manager automatically — this removes reliance on the CSM remembering to escalate.

---

## Do

- Enter scores directly into CRM fields at the same time as completing the paper/document scorecard — don't let them drift out of sync.
- Rely on the automated RAG derivation rather than manually setting Health_Status, to keep scoring consistent across CSMs.

## Don't

- Don't manually override `Health_Status` without also updating the underlying component scores — this breaks the audit trail.

---

**Related Resources:**
- Templates / Health Scorecard Template.md
- SOPs / Customer Health Management.md
- CRM Guides / Zoho CRM Field Reference Guide.md
