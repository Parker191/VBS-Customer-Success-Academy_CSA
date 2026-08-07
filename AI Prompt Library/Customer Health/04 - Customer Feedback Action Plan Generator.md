# 🎯 Customer Feedback Action Plan Generator

## Purpose

Help a Customer Success Manager convert customer feedback into a practical action plan with priorities, owners, timelines, and follow-up actions.

---

## Prompt

```text
Act as a Senior Customer Success Manager responsible for turning customer feedback into measurable improvement actions.

Analyze the following customer feedback.

Customer:
[Customer name or anonymized description]

Feedback Source:
[Email / Meeting / Survey / Call / QBR / Other]

Date:
[Date]

Customer Context:
[Brief account context]

Customer Feedback:
[Paste the customer's feedback]

Current Customer Health:
[Green / Yellow / Red / Unknown]

Recent Customer History:
[Relevant recent events]

Known Open Issues:
[List open issues]

Current Actions:
[List actions already underway]

Analyze the feedback and create an action plan.

Provide:

### 1. Feedback Summary

Summarize the customer's main feedback.

### 2. Customer Expectations

Identify what the customer expects from VBS.

### 3. Positive Feedback

Identify what is working well.

### 4. Improvement Areas

Identify areas where the customer expects improvement.

### 5. Priority Assessment

Classify each issue as:

P0 - Critical
P1 - High
P2 - Medium
P3 - Low

Consider:

- Customer impact
- Urgency
- Business impact
- Frequency
- Relationship risk

### 6. Action Plan

Create:

| Issue | Action | Owner | Deadline | Priority | Success Measure | Status |
|---|---|---|---|---|---|---|

Only assign owners, deadlines, or success measures when supported by the information provided.

If information is missing, mark it as:
"To be confirmed."

### 7. Internal Coordination Required

Identify teams or stakeholders that may need to be involved.

### 8. Customer Communication Plan

Recommend what the CSM should communicate back to the customer.

### 9. Follow-Up Plan

Recommend when and how the CSM should follow up.

### 10. Customer Health Impact

Explain whether the feedback should change the customer's health assessment.

### 11. Success Criteria

Define what successful resolution would look like.

### 12. CRM Update

Create a concise CRM-ready note documenting the feedback and agreed actions.

Rules:

- Do not invent customer information.
- Do not turn assumptions into commitments.
- Do not assign blame.
- Separate confirmed facts from recommendations.
- Do not escalate automatically.
- Recommend escalation only when evidence supports it.
- Prioritize customer impact.
- Make the action plan realistic and measurable.
```

---

# 🧪 Example

### Customer Feedback

```text
The quality of the BIM models has been very good.

However, sometimes we don't know whether a project will be delivered on time until very close to the deadline.

We would like more visibility into progress.

The weekly communication has been helpful when it happens.
```

### Expected Analysis

**Positive:**

- BIM quality is strong.
- Weekly communication is valued.

**Improvement Area:**

- Delivery visibility.

**Priority:**

P1 — High

**Recommended Action:**

Establish a consistent weekly project status update covering:

- Current progress
- Completed work
- Upcoming work
- Expected delivery date
- Risks/blockers

**Success Measure:**

Customer receives agreed weekly status updates consistently and has improved visibility into delivery timelines.

---

# 🔄 Feedback-to-Action Framework

Use:

```text
Customer Feedback
       ↓
Understand the Need
       ↓
Identify Root Issue
       ↓
Prioritize
       ↓
Create Action
       ↓
Assign Owner
       ↓
Define Success
       ↓
Follow Up
       ↓
Validate With Customer
```

---

# 📋 CSM Review Checklist

Before closing a feedback action:

- [ ] Feedback accurately captured.
- [ ] Customer expectation understood.
- [ ] Priority validated.
- [ ] Owner confirmed.
- [ ] Timeline confirmed.
- [ ] Internal team aligned.
- [ ] Customer updated.
- [ ] Success criteria defined.
- [ ] Action completed.
- [ ] Customer outcome validated.
- [ ] CRM updated.

---

# ⚠️ Important

**Closing the internal action is not the same as resolving the customer issue.**

For example:

```text
Internal Action Completed
        ≠
Customer Issue Resolved
```

The CSM should confirm that the customer's underlying concern has actually been addressed.

---

## 📚 Related Resources

- Customer Sentiment & Feedback Analyzer
- Customer Health Risk Analyzer
- Customer Success Plan Generator
- Escalation & RCA Assistant
- Customer Communication Quality Reviewer
- Customer Health SOP
- Escalation Management SOP

---

**Category:** Customer Health  
**Version:** 6.0  
**Status:** Active
