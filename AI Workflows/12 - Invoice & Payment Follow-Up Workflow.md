# 💰🧾 Invoice & Payment Follow-Up Workflow

## Purpose

Provide a structured AI-assisted workflow for managing invoice and payment follow-ups while maintaining a professional and positive customer relationship.

The objective is to ensure invoices are tracked, follow-ups are timely, communication is appropriate, and overdue payment concerns are escalated when necessary.

---

# 🔄 Workflow

```text
Invoice Pending
      ↓
1. Verify Invoice Information
      ↓
2. Check Due Date
      ↓
3. Check Payment Status
      ↓
4. Review Customer Context
      ↓
5. Determine Follow-Up Stage
      ↓
6. Prepare Communication
      ↓
7. Internal Coordination
      ↓
8. Customer Follow-Up
      ↓
9. Track Response
      ↓
10. Escalate When Necessary
      ↓
11. Confirm Payment
      ↓
12. Update CRM
```

---

# 1️⃣ Verify Invoice Information

Before contacting the customer, verify:

- Invoice number
- Invoice amount
- Invoice date
- Due date
- Customer
- Service / project
- Payment status
- Previous follow-up
- Payment terms

Do not send a payment reminder using unverified information.

---

# 2️⃣ Check Due Date

Determine whether the invoice is:

🟢 Not Yet Due

🟡 Due Soon

🟠 Due Today

🔴 Overdue

⚪ Payment Status Unknown

Use the actual invoice due date.

Do not assume an invoice is overdue simply because it has not been paid.

---

# 3️⃣ Check Payment Status

Possible statuses:

- Pending
- Paid
- Partially Paid
- Overdue
- Payment Processing
- Disputed
- Unknown

If the payment status is unclear, verify internally before sending a strong payment reminder.

---

# 4️⃣ Review Customer Context

Before contacting the customer, check:

- Recent customer communication
- Open issues
- Escalations
- Customer health
- Recent project activity
- Previous payment history where appropriate
- Previous invoice conversations
- Current relationship status

Payment follow-up should consider the overall customer relationship.

---

# 5️⃣ Determine Follow-Up Stage

### 🟢 Stage 1 — Courtesy Reminder

Invoice is approaching the due date.

Tone:

Friendly and helpful.

---

### 🟡 Stage 2 — Due Date Reminder

Invoice is due.

Tone:

Professional and polite.

---

### 🟠 Stage 3 — Overdue Follow-Up

Invoice has passed the due date.

Tone:

Clear, professional, and respectful.

---

### 🔴 Stage 4 — Escalation

Invoice remains unpaid after appropriate follow-ups or there is a significant payment concern.

Coordinate with:

- Accounts / Finance
- KAM
- Management
- Relevant internal stakeholders

Follow company escalation procedures.

---

# 6️⃣ Prepare Communication

Use:

**Customer Communication Quality Reviewer**

The message should include:

- Friendly opening
- Invoice reference
- Amount where appropriate
- Due date
- Current status
- Request for payment update
- Offer to clarify any questions
- Professional closing

Example:

> Hi [Customer],
>
> I hope you're doing well.
>
> Just wanted to follow up regarding invoice #[Invoice Number] for [Amount], which was due on [Due Date].
>
> Could you please let us know the current payment status or if anything is required from our side?
>
> Please feel free to let us know if you have any questions.
>
> Best regards,
> [Name]

Do not use threatening or aggressive language unless specifically required by an approved company process.

---

# 7️⃣ Internal Coordination

Coordinate with the appropriate internal team when needed.

Possible teams:

- Accounts / Finance
- KAM
- BDE / Sales
- Delivery
- Management

Examples:

```text
Customer says payment was already made
        ↓
Verify with Finance
```

```text
Customer disputes invoice
        ↓
Coordinate internally
        ↓
Investigate
        ↓
Respond to customer
```

```text
Invoice significantly overdue
        ↓
Follow escalation process
```

Do not make financial commitments without authorization.

---

# 8️⃣ Customer Follow-Up

After sending the message:

Record:

- Date sent
- Communication method
- Response
- Customer commitment
- Expected payment date
- Questions / concerns
- Next follow-up date

If the customer responds, acknowledge and coordinate internally where necessary.

---

# 9️⃣ Track Response

Create:

| Invoice | Amount | Due Date | Status | Last Follow-Up | Customer Response | Next Action |
|---|---:|---|---|---|---|---|
| [Invoice] | [Amount] | [Date] | [Status] | [Date] | [Response] | [Action] |

Possible statuses:

🟡 Follow-Up Sent

🔵 Customer Responded

🟠 Payment Pending

🔴 Escalated

🟢 Paid

---

# 🔟 Escalate When Necessary

Consider escalation when:

- Invoice remains significantly overdue.
- Multiple follow-ups receive no response.
- Customer disputes the invoice.
- Customer indicates inability to pay.
- Payment commitment is repeatedly missed.
- There is a potential commercial risk.
- The issue requires Finance or Management involvement.

Follow the company's approved escalation process.

Do not escalate solely because a customer is a few days late unless company policy requires it.

---

# 1️⃣1️⃣ Confirm Payment

When payment is received:

- Confirm with Finance / Accounts where necessary.
- Update invoice status.
- Thank the customer when appropriate.
- Close the follow-up.
- Update CRM.

Example:

> Thank you for the update. We appreciate you taking care of this.

---

# 1️⃣2️⃣ Update CRM

Document:

**Invoice:**
[Invoice Number]

**Amount:**
[Amount]

**Due Date:**
[Date]

**Payment Status:**
[Status]

**Last Follow-Up:**
[Date]

**Customer Response:**
[Response]

**Expected Payment Date:**
[Date]

**Next Action:**
[Action]

**Escalation Status:**
[Status]

---

# 📋 Invoice Follow-Up Checklist

- [ ] Invoice number verified.
- [ ] Invoice amount verified.
- [ ] Due date verified.
- [ ] Payment status verified.
- [ ] Previous communication reviewed.
- [ ] Customer context reviewed.
- [ ] Follow-up stage identified.
- [ ] Communication prepared.
- [ ] Communication reviewed by CSM.
- [ ] Internal coordination completed where necessary.
- [ ] Customer contacted.
- [ ] Response tracked.
- [ ] Next action scheduled.
- [ ] Escalation completed if required.
- [ ] Payment confirmed.
- [ ] CRM updated.

---

# ⚠️ Important Rules

AI assists — CSM decides.

Do not:

- Invent invoice information.
- Change invoice amounts.
- Claim payment has not been received without verification.
- Make financial commitments without authorization.
- Threaten customers.
- Share unnecessary financial information.
- Ignore invoice disputes.
- Escalate every late payment automatically.
- Close an invoice follow-up without confirmation.

Payment collection should remain professional and relationship-focused.

---

# 📚 V6.0 Prompts Used

This workflow connects:

1. Invoice Follow-Up Email Generator
2. Customer Communication Quality Reviewer
3. CSM Productivity Assistant
4. Customer Health Risk Analyzer
5. Meeting Summary & Action Item Extractor

---

# 🎯 Desired Outcome

The workflow should help the CSM move from:

**Invoice Pending → Verification → Appropriate Follow-Up → Customer Response → Payment → Closure**

The goal is to support timely payment while protecting the customer relationship.

---

**Category:** AI Workflows  
**Version:** 7.0  
**Status:** Active  
**Owner:** Customer Success Team
