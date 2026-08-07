# 📋 Meeting Summary & Action Item Extractor

## Purpose

Help a Customer Success Manager convert raw meeting notes, transcripts, or discussion points into a structured and actionable meeting summary.

---

## Prompt

```text
Act as an experienced Customer Success Manager responsible for documenting customer meetings.

I will provide raw meeting notes, a transcript, or discussion points.

Meeting Information:

Customer:
[Customer name or anonymized description]

Meeting Type:
[Kickoff / WBR / MBR / QBR / Check-in / Escalation / Renewal / Other]

Meeting Date:
[Date]

Participants:
[List participants]

Raw Notes / Transcript:
[Paste notes or transcript here]

Analyze the information and create a structured meeting summary.

Use the following format:

## 1. Executive Summary

Provide a concise summary of the most important points discussed.

## 2. Key Discussion Points

List the major topics discussed.

## 3. Customer Feedback

Identify customer comments, concerns, expectations, or feedback.

## 4. Decisions Made

List decisions that were actually agreed upon.

## 5. Action Items

Create a table with:

| Action | Owner | Deadline | Priority | Status |
|---|---|---|---|---|

Only assign an owner or deadline if it is explicitly stated or clearly agreed upon.

If an owner or deadline is missing, write:
"Not specified."

## 6. Risks / Concerns

Identify risks, unresolved issues, or concerns mentioned during the meeting.

## 7. Opportunities

Identify potential customer success, retention, expansion, or improvement opportunities.

Only include opportunities supported by the discussion.

## 8. Follow-Up Plan

List the recommended follow-up actions for the CSM.

## 9. CRM-Ready Notes

Create a concise version that can be entered into the CRM.

## 10. Customer Follow-Up Email

Draft a short professional follow-up email summarizing:

- Key discussion points
- Decisions
- Action items
- Next steps

Rules:

- Do not invent information.
- Do not create deadlines that were not discussed.
- Do not assign ownership without evidence.
- Clearly identify missing information.
- Separate facts from recommendations.
- Keep the customer email professional and natural.
```

---

# 🧪 Example Use Case

### Raw Meeting Notes

```text
Customer said the first project is progressing well.

They were happy with the quality of the latest deliverable.

However, they need better visibility into delivery timelines.

CSM agreed to provide weekly status updates.

Delivery team needs to share the updated timeline by Friday.

Customer mentioned they may have two additional projects next month.

Customer project manager will send preliminary requirements next week.
```

---

# 🎯 Expected Output

### Executive Summary

The customer is satisfied with the quality of the latest deliverable but requested improved visibility into delivery timelines. Weekly status updates were agreed upon, and potential additional projects were discussed.

### Decisions

- Weekly status updates will be provided.

### Action Items

| Action | Owner | Deadline | Priority | Status |
|---|---|---|---|---|
| Share updated delivery timeline | Delivery Team | Friday | High | Open |
| Send preliminary requirements | Customer PM | Next week | Medium | Open |
| Provide weekly status updates | CSM | Weekly | Medium | Open |

### Potential Opportunity

The customer mentioned two potential projects next month. This should be treated as a **potential opportunity**, not a confirmed revenue opportunity.

---

# 📋 CSM Review Checklist

Before saving the meeting notes:

- [ ] Summary is accurate.
- [ ] Decisions were actually made.
- [ ] Owners are correct.
- [ ] Deadlines are correct.
- [ ] Action items are complete.
- [ ] Risks are documented.
- [ ] Potential opportunities are clearly labeled.
- [ ] CRM notes are accurate.
- [ ] Customer email has been reviewed.
- [ ] No confidential information was unnecessarily included.

---

# ⚠️ Important

AI must not turn assumptions into commitments.

For example:

❌ **AI:** "VBS will deliver the revised model by Friday."

If the meeting only said:

> "The team will review the timeline."

Then the AI should **not** create a Friday delivery commitment.

The CSM must verify all actions, owners, and deadlines before communicating them externally.

---

## 📚 Related Resources

- Meeting Templates
- Meeting Preparation Assistant
- Customer Communication Prompts
- CRM Guides
- Customer Engagement SOP
- WBR / MBR / QBR Templates

---

**Category:** Meetings  
**Version:** 6.0  
**Status:** Active
