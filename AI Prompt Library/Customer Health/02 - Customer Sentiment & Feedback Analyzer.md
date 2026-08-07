# ❤️ Customer Sentiment & Feedback Analyzer

## Purpose

Help a Customer Success Manager analyze customer feedback and communication to understand sentiment, identify concerns, recognize positive signals, and determine appropriate follow-up actions.

---

## Prompt

```text
Act as a Senior Customer Success Manager specializing in customer experience and relationship management.

Analyze the customer feedback or communication provided below.

Customer:
[Customer name or anonymized description]

Feedback Source:
[Email / Meeting / Survey / Call / Review / Other]

Date:
[Date]

Customer Context:
[Brief relationship or account context]

Customer Feedback:
[Paste the feedback, notes, or summarized communication]

Recent Customer History:
[Relevant recent events, if available]

Analyze the information and provide:

1. Overall Sentiment
   Positive / Neutral / Negative / Mixed

2. Sentiment Confidence
   Low / Medium / High

3. Positive Signals
   Identify statements or signals indicating satisfaction, trust, value, or positive engagement.

4. Negative Signals
   Identify dissatisfaction, frustration, concern, or disengagement signals.

5. Key Customer Concerns
   Summarize the customer's most important concerns.

6. Customer Expectations
   Identify what the customer appears to expect from VBS.

7. Relationship Risk
   Low / Medium / High

8. Potential Root Causes
   Identify possible reasons behind negative or mixed sentiment.

9. Recommended CSM Actions
   Provide practical actions the CSM should consider.

10. Follow-Up Priority
    Low / Medium / High / Critical

11. Suggested Follow-Up
    Recommend the next communication or customer action.

12. Health Score Impact
    Explain whether this feedback should be considered when reviewing customer health.

Rules:

- Do not invent customer emotions.
- Base sentiment on the actual information provided.
- Clearly distinguish facts from interpretation.
- Do not treat one negative comment as proof that the entire relationship is unhealthy.
- Consider the broader customer context when available.
- Do not recommend escalation unless the evidence supports it.
- Do not create commitments that were not made.
```

---

# 🧪 Example Use Case

### Customer Feedback

```text
Customer said:

"The latest models look great and we're happy with the quality. 
However, we've had difficulty getting clear updates on delivery timelines.
We need better visibility because our internal team is planning around these dates."
```

### Expected Analysis

**Overall Sentiment:** Mixed

**Positive Signals:**
- Customer is satisfied with model quality.
- Customer recognizes the value of the service.

**Negative Signals:**
- Frustration with delivery visibility.
- Planning is being affected.

**Key Concern:**

Delivery communication and timeline visibility.

**Relationship Risk:**

Medium.

**Recommended Action:**

The CSM should coordinate with the delivery team, establish a reliable update cadence, and proactively communicate timeline changes.

---

# 🧠 Important CSM Principle

Customer sentiment should never be analyzed in isolation.

Use:

```text
Customer Sentiment
        +
Engagement
        +
Delivery Performance
        +
Customer Feedback
        +
Business Context
        ↓
Customer Health
```

A customer can be:

**Positive + At Risk**

or:

**Negative Feedback + Healthy Relationship**

depending on the broader context.

---

# 📋 CSM Review Checklist

Before acting on the analysis:

- [ ] Read the original customer communication.
- [ ] Verify the sentiment interpretation.
- [ ] Consider historical customer behavior.
- [ ] Check current customer health.
- [ ] Review recent delivery performance.
- [ ] Identify whether the issue is isolated or recurring.
- [ ] Determine whether escalation is necessary.
- [ ] Document meaningful feedback in CRM.
- [ ] Follow up with the customer when appropriate.

---

# ⚠️ Important

AI sentiment analysis is an **indicator**, not a definitive measurement of customer emotion.

The CSM should use judgment and consider the customer's relationship history and context.

Never label a customer "angry," "unhappy," or "at risk" solely because an AI model assigned that label.

---

## 📚 Related Resources

- Customer Health Risk Analyzer
- Customer Health SOP
- Customer Feedback SOP
- Customer Engagement SOP
- Escalation Management SOP
- Customer Playbooks

---

**Category:** Customer Health  
**Version:** 6.0  
**Status:** Active
