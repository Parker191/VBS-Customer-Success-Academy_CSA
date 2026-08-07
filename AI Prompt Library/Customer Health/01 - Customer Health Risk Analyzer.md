# ❤️ Customer Health Risk Analyzer

## Purpose

Help a Customer Success Manager analyze customer signals, identify potential risks, and determine appropriate next actions.

---

## Prompt

```text
Act as a Senior Customer Success Manager.

Analyze the following customer information and assess the customer's current health.

Customer Context:
[Briefly describe the customer and relationship]

Engagement:
[Meeting frequency, email responsiveness, communication trends]

Delivery:
[Project status, quality, delays, issues]

Customer Sentiment:
[Positive, neutral, negative, or mixed feedback]

Usage / Adoption:
[How actively the customer is using the service]

Financial:
[Invoice/payment status, if relevant]

Relationship:
[Stakeholder engagement, relationship strength, executive involvement]

Recent Events:
[List important recent events]

Analyze the information and provide:

1. Overall Health:
   Green / Yellow / Red

2. Health Score:
   Rate from 0–100.

3. Key Positive Signals:
   Identify the strongest indicators of customer health.

4. Risk Signals:
   Identify warning signs or potential problems.

5. Root Causes:
   Explain what may be driving the risks.

6. Customer Impact:
   Explain how these risks could affect the customer relationship.

7. Recommended Actions:
   Provide specific actions the CSM should take.

8. Priority:
   Low / Medium / High / Critical

9. Internal Stakeholders:
   Identify which internal teams may need to be involved.

10. Next Review:
   Recommend when the CSM should reassess the customer's health.

Do not invent information.

Clearly distinguish between:
- Confirmed facts
- Reasonable assumptions
- Information that is missing

Keep the analysis practical and actionable for a Customer Success Manager.
```

---

# 📊 Example Use Case

### Situation

A customer has recently:

- Reduced communication.
- Reported project delays.
- Raised concerns about delivery visibility.
- Paid invoices on time.
- Still has a good relationship with the CSM.

### Example Input

```text
Customer Context:
Existing VBS customer using BIM modeling services.

Engagement:
Customer has responded less frequently during the last month.

Delivery:
Two recent deliverables were delayed.

Customer Sentiment:
Customer expressed frustration about delivery visibility.

Usage / Adoption:
Customer continues to submit project requirements.

Financial:
Invoices are currently paid on time.

Relationship:
The main stakeholder remains responsive when contacted.

Recent Events:
Customer requested a revised delivery timeline.
```

---

# 🎯 Expected Analysis

The AI should identify:

### Health

Likely **Yellow / At Risk**

### Positive Signals

- Customer continues using the service.
- Payments are current.
- Stakeholder relationship still exists.

### Risk Signals

- Reduced communication.
- Delivery delays.
- Frustration regarding visibility.

### Recommended Actions

The CSM may:

1. Arrange a proactive customer check-in.
2. Confirm the revised delivery timeline.
3. Coordinate with the delivery team.
4. Increase communication frequency temporarily.
5. Monitor customer sentiment.

---

# ⚠️ Important

The AI's health score is **not the official customer health score** unless your company's defined methodology explicitly allows it.

The CSM should compare the AI analysis against:

- CRM data
- Customer feedback
- Delivery information
- Financial information
- Existing health-score methodology

AI should support the CSM's judgment—not replace it.

---

# 🧠 CSM Review Checklist

Before taking action:

- [ ] Verify all facts.
- [ ] Confirm delivery information.
- [ ] Check CRM history.
- [ ] Review recent customer communication.
- [ ] Confirm financial information.
- [ ] Validate the health assessment.
- [ ] Decide whether escalation is required.
- [ ] Document the final assessment in CRM.

---

# 🚨 Escalation Trigger

Consider escalation when:

- Customer impact is significant.
- Delivery risk is increasing.
- Customer explicitly expresses dissatisfaction.
- Multiple risk signals appear simultaneously.
- The issue requires cross-functional intervention.
- Renewal or revenue is materially at risk.

---

## 📚 Related Resources

- Customer Health SOP
- Escalation Management SOP
- Customer Health Flow
- Knowledge Hub
- QBR Template

---

**Category:** Customer Health  
**Version:** 6.0  
**Status:** Active
