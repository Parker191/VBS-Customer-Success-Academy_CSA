# 🚨 Escalation & RCA Assistant

## Purpose

Help a Customer Success Manager analyze a customer escalation, identify potential root causes, assess customer impact, and prepare a structured action plan.

---

## Prompt

```text
Act as a Senior Customer Success Manager experienced in escalation management.

Analyze the following customer escalation.

Customer Context:
[Briefly describe the customer relationship]

Escalation Summary:
[Describe what happened]

Customer Complaint:
[What exactly is the customer unhappy about?]

Timeline:
[List important events and dates]

Delivery / Service Impact:
[Describe any impact on delivery, quality, timeline, or customer operations]

Customer Impact:
[Describe the impact experienced by the customer]

Communication History:
[Summarize relevant customer communication]

Internal Findings:
[Known information from delivery, operations, finance, or other teams]

Previous Attempts to Resolve:
[List actions already taken]

Current Status:
[Open / In Progress / Resolved / Awaiting Customer]

Analyze the escalation and provide:

1. Escalation Severity
   Low / Medium / High / Critical

2. Confirmed Facts
   List only information explicitly provided.

3. Missing Information
   Identify information that should be collected.

4. Customer Impact
   Explain the actual or potential impact.

5. Possible Root Causes
   Identify likely causes and clearly distinguish assumptions from confirmed facts.

6. Root Cause Analysis
   Use a structured 5 Whys analysis where enough information is available.

7. Immediate Containment Actions
   What should be done now to reduce customer impact?

8. Corrective Actions
   What should be done to resolve the current issue?

9. Preventive Actions
   What should be changed to reduce the chance of recurrence?

10. Internal Owners
    Recommend which teams or roles should own each action.

11. Customer Communication Plan
    Recommend what the CSM should communicate to the customer.

12. Follow-Up Plan
    Recommend the next customer and internal checkpoints.

13. Closure Criteria
    Define what must be true before the escalation can be formally closed.

14. Executive Summary
    Provide a concise summary suitable for leadership.

Do not invent facts.

Clearly separate:
- Confirmed facts
- Assumptions
- Missing information
- Recommendations

Prioritize customer impact and resolution.

Do not assign blame to individuals.

Focus on process, evidence, root cause, corrective action, and prevention.
```

---

# 🧪 Example Use Case

### Situation

A customer reports that a BIM deliverable was delayed.

### Input

```text
Customer Context:
Existing VBS customer with active BIM projects.

Escalation Summary:
Customer reported that a scheduled deliverable was not received on the agreed date.

Customer Complaint:
The customer was not informed about the delay in advance.

Timeline:
Monday - Delivery expected.
Tuesday - Customer followed up.
Tuesday - CSM learned that delivery was delayed.
Wednesday - Revised delivery date provided.

Delivery Impact:
Project milestone was affected.

Customer Impact:
Customer had difficulty planning the next stage of their project.

Communication History:
Customer requested better visibility into delivery timelines.

Internal Findings:
Delivery team experienced an unexpected workload increase.

Previous Attempts to Resolve:
A revised delivery date was provided.

Current Status:
In Progress.
```

---

# 🎯 Expected Analysis

The AI should identify:

### Severity

Potentially **Medium**, depending on the customer's business impact and whether the issue is recurring.

### Confirmed Facts

- Deliverable missed the agreed date.
- Customer was not proactively informed.
- Customer's planning was affected.

### Potential Root Cause

The workload increase may have contributed to the delay.

However, the AI should recognize that this is **not necessarily the complete root cause**.

### Process Gap

A potential communication or early-warning process gap exists.

### Corrective Actions

- Complete the delayed deliverable.
- Confirm the revised timeline.
- Provide proactive status updates.

### Preventive Actions

- Establish an internal early-warning trigger.
- Escalate delivery risks before the committed deadline.
- Improve customer communication when timelines change.

---

# 🔎 5 Whys Example

The AI may structure the analysis like:

```text
Why was the deliverable late?
        ↓
Unexpected workload affected delivery.
        ↓
Why wasn't the workload risk identified earlier?
        ↓
Potential capacity monitoring gap.
        ↓
Why wasn't the customer informed earlier?
        ↓
Potential communication escalation gap.
```

The important point is that the CSM should **validate the root cause with the appropriate internal team** before presenting it as fact to the customer.

---

# 🛠️ RCA → CAPA Framework

Use the AI output to build:

| Area | Question |
|---|---|
| Root Cause | Why did it happen? |
| Containment | How do we reduce immediate impact? |
| Corrective Action | How do we fix it? |
| Preventive Action | How do we prevent recurrence? |
| Owner | Who is responsible? |
| Deadline | When will it be completed? |
| Verification | How will we know it worked? |

---

# 🚨 Escalation Review Checklist

Before communicating the RCA externally:

- [ ] Facts verified.
- [ ] Timeline confirmed.
- [ ] Customer impact understood.
- [ ] Root cause validated internally.
- [ ] Corrective actions assigned.
- [ ] Preventive actions identified.
- [ ] Owners confirmed.
- [ ] Deadlines confirmed.
- [ ] Customer communication reviewed.
- [ ] Closure criteria defined.

---

# ⚠️ Important

Never send an AI-generated RCA directly to the customer without internal validation.

An AI-generated root cause is a **working hypothesis**, not automatically an established fact.

The CSM should coordinate with the appropriate delivery or operational owner before communicating root-cause conclusions externally.

---

## 📚 Related Resources

- Escalation Management SOP
- Escalation Workflow
- Customer Health Risk Analyzer
- Customer Health SOP
- Customer Communication Templates
- Meeting Templates
- RCA / CAPA Documentation

---

**Category:** Escalations  
**Version:** 6.0  
**Status:** Active
