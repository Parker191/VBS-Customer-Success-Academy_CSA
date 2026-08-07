# 📝 Meeting Follow-Up & Action Tracking Workflow

## Purpose

Provide a structured AI-assisted workflow for converting customer and internal meeting discussions into clear decisions, action items, owners, deadlines, follow-ups, and CRM documentation.

The objective is to make sure important commitments made during meetings are not forgotten.

---

# 🔄 Workflow

```text
Meeting Finished
      ↓
1. Collect Meeting Notes
      ↓
2. Summarize Key Discussion
      ↓
3. Extract Decisions
      ↓
4. Extract Action Items
      ↓
5. Identify Owners
      ↓
6. Identify Deadlines
      ↓
7. Identify Risks / Dependencies
      ↓
8. Prepare Follow-Up Communication
      ↓
9. Update CRM
      ↓
10. Track Actions
      ↓
11. Confirm Closure
```

---

# 1️⃣ Collect Meeting Notes

Collect available information from:

- Meeting notes
- Teams notes
- Meeting transcript
- Customer emails
- CSM notes
- Internal notes
- Previous action items

Where possible, capture:

- Meeting date
- Customer
- Participants
- Purpose
- Discussion points
- Decisions
- Customer feedback
- Action items
- Owners
- Deadlines

Do not invent information that is not present in the source material.

---

# 2️⃣ Summarize Key Discussion

Create a concise summary covering:

- Main topics discussed
- Customer priorities
- Important concerns
- Important updates
- Decisions
- Next steps

Keep the summary focused on information that matters for the customer relationship.

Avoid unnecessary detail.

---

# 3️⃣ Extract Decisions

Identify decisions explicitly made during the meeting.

Create:

| Decision | Who Confirmed | Date | Impact |
|---|---|---|---|
| [Decision] | [Person] | [Date] | [Impact] |

Only classify something as a decision if the meeting clearly indicates that it was agreed.

Do not turn suggestions into decisions.

---

# 4️⃣ Extract Action Items

Identify every meaningful action item.

Create:

| Action Item | Owner | Deadline | Priority | Status |
|---|---|---|---|---|
| [Action] | [Owner] | [Date] | [Priority] | Open |

Separate:

**Customer Actions**

from

**VBS Actions**

when appropriate.

---

# 5️⃣ Identify Owners

Every action should have an owner where possible.

Possible owners:

- CSM
- Customer
- KAM
- BDE / Sales
- Delivery Team
- Finance
- Technical Team
- Management

If the owner is unclear:

**Owner: To Be Confirmed**

Do not guess ownership.

---

# 6️⃣ Identify Deadlines

Capture:

- Explicit deadlines
- Customer commitments
- Internal commitments
- Meeting dates
- Follow-up dates

If no deadline was agreed:

**Deadline: Not Specified**

Do not invent deadlines.

The CSM may recommend a deadline separately, but should clearly label it as a recommendation.

---

# 7️⃣ Identify Risks / Dependencies

Look for:

- Blocked actions
- Missing information
- Customer dependencies
- Internal dependencies
- Delivery risks
- Escalation risks
- Deadline risks
- Unclear ownership

Create:

| Risk / Dependency | Impact | Owner | Next Action |
|---|---|---|---|
| [Risk] | [Impact] | [Owner] | [Action] |

---

# 8️⃣ Prepare Follow-Up Communication

Use:

**Customer Communication Quality Reviewer**

Prepare a concise follow-up email when appropriate.

Recommended structure:

### Subject

Meeting Follow-Up — [Topic]

### Opening

Thank the participants.

### Summary

Briefly summarize the key discussion.

### Decisions

List important agreed decisions.

### Action Items

| Action | Owner | Deadline |
|---|---|---|
| [Action] | [Owner] | [Deadline] |

### Closing

Confirm the next step or next meeting.

Do not send the AI-generated email without CSM review.

---

# 9️⃣ Update CRM

Create a concise CRM note:

**Meeting Date:**
[Date]

**Meeting Purpose:**
[Purpose]

**Key Discussion:**
[Summary]

**Customer Feedback:**
[Feedback]

**Decisions:**
[Decisions]

**Action Items:**
[Actions]

**Risks / Dependencies:**
[Risks]

**Next Meeting:**
[Date]

**Next Follow-Up:**
[Date]

---

# 🔟 Track Actions

After the meeting:

1. Add action items to the appropriate tracker.
2. Assign owners.
3. Add deadlines.
4. Monitor progress.
5. Follow up when required.
6. Update status.
7. Escalate overdue critical actions when appropriate.

Possible statuses:

🟡 Open

🔵 In Progress

🟠 Blocked

🟢 Completed

🔴 Escalated

---

# 1️⃣1️⃣ Confirm Closure

An action should be considered complete only when:

- The agreed work has been completed.
- The appropriate stakeholder has been informed.
- Evidence or confirmation is available where necessary.
- CRM / tracker has been updated.

Do not close an action simply because someone said they would work on it.

---

# 📋 Meeting Follow-Up Checklist

- [ ] Meeting notes collected.
- [ ] Meeting summary created.
- [ ] Customer priorities identified.
- [ ] Decisions extracted.
- [ ] Action items extracted.
- [ ] Owners identified.
- [ ] Deadlines identified.
- [ ] Risks identified.
- [ ] Dependencies identified.
- [ ] Follow-up communication prepared.
- [ ] CSM reviewed communication.
- [ ] CRM updated.
- [ ] Actions added to tracker.
- [ ] Follow-ups scheduled.
- [ ] Completed actions verified.

---

# ⚠️ Important Rules

AI assists — CSM decides.

Do not:

- Invent decisions.
- Invent action items.
- Invent deadlines.
- Guess owners.
- Treat suggestions as commitments.
- Close actions without confirmation.
- Send AI-generated communication without review.
- Ignore customer commitments.
- Leave important actions undocumented.

The purpose of this workflow is accountability and follow-through.

---

# 📚 V6.0 Prompts Used

This workflow connects:

1. Meeting Summary & Action Item Extractor
2. Customer Communication Quality Reviewer
3. CSM Productivity Assistant
4. Customer Health Risk Analyzer
5. Customer Feedback Action Plan Generator

---

# 🎯 Desired Outcome

The workflow should help the CSM move from:

**Meeting → Decisions → Actions → Owners → Deadlines → Follow-Up → Closure**

The goal is to make sure that important meeting commitments are converted into visible, trackable actions.

---

**Category:** AI Workflows  
**Version:** 7.0  
**Status:** Active  
**Owner:** Customer Success Team
