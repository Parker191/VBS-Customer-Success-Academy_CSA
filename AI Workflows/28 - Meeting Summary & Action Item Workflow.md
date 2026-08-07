# 📝 Meeting Summary & Action Item Workflow

## Purpose

Provide a structured AI-assisted workflow for converting customer meeting notes into a clear meeting summary, decisions, customer feedback, risks, action items, owners, deadlines, and CRM-ready documentation.

The objective is to ensure that important customer conversations result in clear understanding and accountable follow-through.

---

# 🔄 Workflow

```text
Raw Meeting Notes
      ↓
1. Identify Meeting Context
      ↓
2. Extract Key Discussion
      ↓
3. Capture Customer Feedback
      ↓
4. Identify Decisions
      ↓
5. Identify Open Questions
      ↓
6. Identify Risks
      ↓
7. Extract Action Items
      ↓
8. Assign Owners
      ↓
9. Identify Deadlines
      ↓
10. Confirm Dependencies
      ↓
11. Create Meeting Summary
      ↓
12. Create Follow-Up Message
      ↓
13. Update CRM
      ↓
14. Track Action Items
```

---

# 1️⃣ Identify Meeting Context

Capture:

**Customer:**
[Customer]

**Meeting Date:**
[Date]

**Meeting Type:**
[Kickoff / WBR / MBR / QBR / Review / Escalation / Other]

**Participants:**
[Participants]

**Meeting Objective:**
[Objective]

Do not invent missing information.

Use:

**Not Provided**

when information is unavailable.

---

# 2️⃣ Extract Key Discussion

Identify the most important topics discussed.

Create:

### Topic 1

**Discussion:**
[Summary]

**Outcome:**
[Outcome]

### Topic 2

**Discussion:**
[Summary]

**Outcome:**
[Outcome]

Focus on meaningful information rather than repeating every sentence.

---

# 3️⃣ Capture Customer Feedback

Separate customer feedback from internal comments.

### Positive Feedback

- [Feedback]

### Concerns

- [Concern]

### Requests

- [Request]

### Suggestions

- [Suggestion]

### Customer Expectations

- [Expectation]

Use the customer's actual meaning.

Do not invent sentiment.

---

# 4️⃣ Identify Decisions

Capture decisions made during the meeting.

Create:

| Decision | Owner | Effective Date / Deadline |
|---|---|---|
| [Decision] | [Owner] | [Date] |

Only record something as a decision if the meeting clearly established it.

If no decision was made:

**No confirmed decisions.**

---

# 5️⃣ Identify Open Questions

Capture questions that remain unanswered.

Examples:

- Customer requirement needs clarification.
- Internal team needs to confirm timeline.
- Resource availability needs confirmation.
- Pricing needs approval.
- Technical approach needs review.

Create:

| Question | Owner | Next Step |
|---|---|---|
| [Question] | [Owner] | [Next Step] |

---

# 6️⃣ Identify Risks

Identify risks mentioned or revealed during the meeting.

Possible risks:

- Delivery delay
- Quality issue
- Resource constraint
- Communication problem
- Customer dissatisfaction
- Renewal concern
- Payment concern
- Stakeholder concern
- Project dependency

Create:

| Risk | Evidence | Impact | Action |
|---|---|---|---|
| [Risk] | [Evidence] | [Impact] | [Action] |

Do not invent risks.

---

# 7️⃣ Extract Action Items

Identify every meaningful action that was agreed.

A good action should answer:

**What needs to be done?**

Create:

| # | Action | Owner | Deadline | Status |
|---|---|---|---|---|
| 1 | [Action] | [Owner] | [Date] | Not Started |
| 2 | [Action] | [Owner] | [Date] | Not Started |

Do not create actions that were never discussed or implied.

---

# 8️⃣ Assign Owners

Identify who is responsible for each action.

Possible owners:

- CSM
- KAM
- Delivery Team
- Project Manager
- BDE / Sales
- Finance
- Technical Team
- Management
- Customer

If ownership was not confirmed:

**Owner: To Be Confirmed**

Never guess.

---

# 9️⃣ Identify Deadlines

Capture confirmed deadlines.

Examples:

- Today
- Tomorrow
- This week
- Before next meeting
- July 15
- August 1

Convert relative dates into exact dates only when the meeting date and context make the conversion unambiguous.

If no deadline was agreed:

**Deadline: Not Confirmed**

Do not invent deadlines.

---

# 🔟 Confirm Dependencies

Identify actions that depend on another action or person.

Example:

```text
Customer provides requirements
        ↓
VBS reviews requirements
        ↓
Delivery timeline confirmed
```

Create:

| Dependency | Required Before | Owner |
|---|---|---|
| [Dependency] | [Action] | [Owner] |

Dependencies should be highlighted when they could delay customer outcomes.

---

# 1️⃣1️⃣ Create Meeting Summary

Create a concise summary.

## Meeting Summary

**Customer:**
[Customer]

**Date:**
[Date]

**Meeting Objective:**
[Objective]

### Key Discussion

- [Point]
- [Point]
- [Point]

### Customer Feedback

- [Feedback]
- [Feedback]

### Decisions

- [Decision]
- [Decision]

### Risks

- [Risk]
- [Risk]

### Open Questions

- [Question]
- [Question]

### Action Items

| Action | Owner | Deadline |
|---|---|---|
| [Action] | [Owner] | [Date] |

### Next Steps

- [Next Step]
- [Next Step]

---

# 1️⃣2️⃣ Create Follow-Up Message

Create a professional customer follow-up message.

Structure:

### Subject

Thank you — [Meeting Topic] | Next Steps

### Opening

Thank the customer for their time.

### Summary

Briefly summarize the key discussion.

### Agreed Actions

List the important actions and owners.

### Next Steps

Confirm the next milestone or meeting.

### Closing

End professionally.

Do not add commitments that were not agreed during the meeting.

---

# 1️⃣3️⃣ Update CRM

Create a CRM-ready note.

## CRM Meeting Note

**Customer:**
[Customer]

**Meeting Date:**
[Date]

**Meeting Type:**
[Type]

**Participants:**
[Participants]

**Objective:**
[Objective]

**Summary:**
[Summary]

**Customer Feedback:**
[Feedback]

**Decisions:**
[Decisions]

**Risks:**
[Risks]

**Opportunities:**
[Opportunities]

**Actions:**
[Actions]

**Next Meeting:**
[Date]

---

# 1️⃣4️⃣ Track Action Items

After the meeting, actions should be tracked until completion.

Possible statuses:

⚪ Not Started

🔵 In Progress

🟢 Completed

🟡 Delayed

🔴 Blocked

Update action status based on evidence.

Do not mark an action complete without confirmation.

---

# 📊 Meeting Action Tracker

| Customer | Action | Owner | Deadline | Status | Last Update |
|---|---|---|---|---|---|
| [Customer] | [Action] | [Owner] | [Date] | [Status] | [Update] |

---

# 🧠 Meeting Quality Check

Before finalizing the summary, ask:

### Did we capture what the customer actually said?

Yes / No

### Did we capture all important decisions?

Yes / No

### Did we capture all meaningful actions?

Yes / No

### Does every action have an owner?

Yes / No / To Be Confirmed

### Does every action have a deadline?

Yes / No / Not Agreed

### Did we identify risks?

Yes / No

### Did we identify open questions?

Yes / No

### Did we avoid inventing information?

Yes / No

---

# 📋 Meeting Summary Checklist

- [ ] Meeting context captured.
- [ ] Objective captured.
- [ ] Key discussion summarized.
- [ ] Customer feedback captured.
- [ ] Decisions identified.
- [ ] Open questions identified.
- [ ] Risks identified.
- [ ] Action items extracted.
- [ ] Owners identified.
- [ ] Deadlines identified.
- [ ] Dependencies identified.
- [ ] Meeting summary created.
- [ ] Follow-up message created.
- [ ] CRM note created.
- [ ] Action tracker updated.

---

# ⚠️ Important Rules

AI assists — CSM decides.

Do not:

- Invent meeting decisions.
- Invent customer feedback.
- Invent deadlines.
- Guess action owners.
- Add commitments that were not agreed.
- Change the meaning of customer statements.
- Hide important risks.
- Mark actions complete without evidence.
- Include unnecessary confidential information.

If information is missing, say:

**Not Provided**

or

**Not Confirmed**

---

# 📚 Related Workflows

This workflow connects:

1. Customer Meeting Preparation Workflow
2. Customer Success Action Plan Workflow
3. Customer Success Weekly Review Workflow
4. Customer Risk Radar Workflow
5. Customer Recovery Plan Workflow
6. Customer Value Review Workflow
7. CSM Productivity Assistant

---

# 🎯 Desired Outcome

The workflow should help the CSM move from:

**Meeting → Clear Summary → Decisions → Actions → Owners → Deadlines → Follow-Through**

The goal is to ensure that no important customer commitment gets lost after a meeting.

---

**Category:** AI Workflows  
**Version:** 7.0  
**Status:** Active  
**Owner:** Customer Success Team
